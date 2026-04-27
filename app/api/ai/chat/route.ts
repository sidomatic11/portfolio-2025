import { google } from "@ai-sdk/google";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { z } from "zod";

export const maxDuration = 30;

const TextPartSchema = z.object({
  type: z.literal("text"),
  text: z.string(),
});

const NonTextPartSchema = z
  .object({
    type: z.string(),
  })
  .passthrough()
  .refine((p) => p.type !== "text");

const UiPartSchema = z.union([TextPartSchema, NonTextPartSchema]);

const UiMessageSchema = z.object({
  id: z.string().optional(),
  role: z.enum(["user", "assistant"]),
  parts: z.array(UiPartSchema).min(1),
});

const BodySchema = z.object({
  messages: z.array(UiMessageSchema).min(1),
});

const MODEL = "gemini-2.5-flash";

// Best-effort in-memory cooldown. Helps reduce casual abuse in production,
// but won’t be perfectly consistent across serverless instances.
const cooldownMs = 2500;
const lastSeenByIp = new Map<string, number>();

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0]?.trim() ?? "unknown";
  return request.headers.get("x-real-ip") ?? "unknown";
}

function portfolioContext() {
  return [
    "You are Siddhant V Patil's portfolio assistant.",
    "Help visitors understand his background and guide them to relevant pages on this site.",
    "Keep answers concise, friendly, and practical.",
    "",
    "Site map hints (use these when relevant):",
    "- Home: /",
    "- About page: /about",
    "- Featured work case studies under /solve/:",
    "  - SVB developer portal redesign: /solve/svb",
    "  - Data fabric platform vision: /solve/data-platform",
    "  - Patient monitoring system (IHH): /solve/ihh-poc",
    "  - UX at Concentrix: /solve/ux-at-concentrix",
    "  - S1010: /solve/s1010",
    "- Creative explorations under /explore/:",
    "  - Three.js visuals: /explore/threejs-visuals",
    "  - Three.js music: /explore/threejs-music",
    "  - Shock ghosts: /explore/shock-ghosts",
    "  - HCI notes: /explore/hci-notes",
    "  - Vertical calendar: /explore/vertical-calendar",
    "  - MediaPipe + Three.js: /explore/mediapipe-threejs",
    "  - Voice typing: /explore/voice-typing",
    "  - Code abstraction: /explore/code-abstraction",
    "",
    "If asked for a CV, point to the CV link in the header.",
    "If you are unsure about a detail, say so and suggest where on the site to look next.",
  ].join("\n");
}

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const now = Date.now();

  // #region agent log
  fetch('http://127.0.0.1:7584/ingest/6c57a2ed-337d-4f98-97be-be152c67fb23',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'51a094'},body:JSON.stringify({sessionId:'51a094',runId:'pre-fix',hypothesisId:'A',location:'app/api/ai/chat/route.ts:POST(entry)',message:'POST /api/ai/chat request metadata',data:{ip,contentType:request.headers.get('content-type'),hasApiKey:!!process.env.GOOGLE_GENERATIVE_AI_API_KEY},timestamp:Date.now()})}).catch(()=>{});
  // #endregion agent log

  if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
    return new Response(
      [
        "Gemini API key is not configured.",
        "",
        "Fix options:",
        "- Set GOOGLE_GENERATIVE_AI_API_KEY in .env.local (copy from .env.example)",
      ].join("\n"),
      { status: 401, headers: { "content-type": "text/plain; charset=utf-8" } },
    );
  }

  const lastSeen = lastSeenByIp.get(ip);
  if (lastSeen && now - lastSeen < cooldownMs) {
    return new Response("Too many requests. Please try again.", {
      status: 429,
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  }
  lastSeenByIp.set(ip, now);

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    // #region agent log
    fetch('http://127.0.0.1:7584/ingest/6c57a2ed-337d-4f98-97be-be152c67fb23',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'51a094'},body:JSON.stringify({sessionId:'51a094',runId:'pre-fix',hypothesisId:'B',location:'app/api/ai/chat/route.ts:request.json',message:'Failed to parse JSON body',data:{ip},timestamp:Date.now()})}).catch(()=>{});
    // #endregion agent log
    return new Response("Invalid JSON body.", {
      status: 400,
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  }

  const parsed = BodySchema.safeParse(json);
  if (!parsed.success) {
    const issues = parsed.error.issues ?? [];
    const first = issues[0];
    const messageSummaries = Array.isArray((json as any)?.messages)
      ? (json as any).messages.map((m: any) => ({
          role: m?.role,
          partsType: Array.isArray(m?.parts)
            ? m.parts.map((p: any) => p?.type)
            : typeof m?.parts,
          hasContent: typeof m?.content === "string",
        }))
      : "messages-not-array";
    // #region agent log
    fetch('http://127.0.0.1:7584/ingest/6c57a2ed-337d-4f98-97be-be152c67fb23',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'51a094'},body:JSON.stringify({sessionId:'51a094',runId:'pre-fix',hypothesisId:'C',location:'app/api/ai/chat/route.ts:BodySchema.safeParse',message:'Invalid request: BodySchema failed',data:{ip,issuesCount:issues.length,firstIssue:{path:first?.path,code:first?.code,message:first?.message},topLevelKeys:json && typeof json==='object'?Object.keys(json as any):typeof json,messageSummaries},timestamp:Date.now()})}).catch(()=>{});
    // #endregion agent log
    return new Response("Invalid request.", {
      status: 400,
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  }

  const totalChars = parsed.data.messages.reduce((sum, m) => {
    const text = m.parts
      .filter((p) => p.type === "text")
      .map((p) => p.text)
      .join("");
    return sum + text.length;
  }, 0);
  if (totalChars > 12_000) {
    return new Response("Message too long.", {
      status: 413,
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  }

  const uiMessages = parsed.data.messages as UIMessage[];

  try {
    const result = streamText({
      model: google(MODEL),
      system: portfolioContext(),
      messages: await convertToModelMessages(uiMessages),
    });

    return result.toUIMessageStreamResponse();
  } catch {
    return new Response("AI request failed.", {
      status: 500,
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  }
}

