import Header from "@/app/components/header";

export default function AiProjects() {
  return (
    <div className="min-h-screen">
      <Header isProjectHeader />

      <div className="w-full py-12">
        <h1 className="mx-auto mb-12 max-w-xl text-3xl font-bold">AI Projects</h1>

        <div className="mx-auto mb-12 max-w-xl">
          <h2 className="mb-3 text-xl font-semibold">
            (re)Designing the Branching UX in AI Chats
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-gray-700">
            <p>
              The primary goal of this project is to define a branching
              experience that can be incorporated by mainstream AI chats.
            </p>
            <p>
              A secondary objective is to explore if canvas-first chat (text
              first) is a fundamentally better experience for certain use
              cases.
            </p>
          </div>

          <div className="mt-8">
            <p className="mb-4 text-base text-gray-700">
              <span className="font-semibold text-gray-900">Live demo URL: </span>
              <a
                href="https://ai-chat-branching.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="break-all underline decoration-gray-400 underline-offset-2 hover:text-gray-900"
              >
                https://ai-chat-branching.vercel.app/
              </a>
            </p>
            <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-gray-300 bg-gray-100">
              <iframe
                src="https://www.loom.com/embed/4adab0a5686d4e03817130d4077937f4"
                title="Loom: Branching UX in AI chats"
                className="absolute inset-0 h-full w-full"
                allowFullScreen
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              />
            </div>
            <p className="mt-2 text-sm text-gray-500">
              <a
                href="https://www.loom.com/share/4adab0a5686d4e03817130d4077937f4"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-gray-400 underline-offset-2 hover:text-gray-800"
              >
                Open in Loom
              </a>
            </p>
          </div>

          <div className="mt-8 text-base leading-relaxed text-gray-700">
            <p className="font-semibold text-gray-900">Next steps:</p>
            <ol className="mt-3 list-decimal space-y-2 pl-6">
              <li>
                Polishing the branching indicator / switcher and incorporating
                micro-interactions.
              </li>
              <li>
                Towards objective 2 — Explore the ability to have variations in
                responses with different models, e.g. three variations, one each
                with Gemini, Claude, and ChatGPT.
              </li>
            </ol>
          </div>
        </div>

        <hr className="mx-auto my-12 max-w-xl" />

        <div className="mx-auto mb-12 max-w-xl">
          <h2 className="mb-3 text-xl font-semibold">
            Curated Portfolio (Generative UI)
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-gray-700">
            <p>
              Exploring how I can make a dynamic portfolio experience, by
              leveraging generative UI.
            </p>
            <p>
              Started with a simple concept where I have a bunch of cards filled
              with my content, and based on the viewer&apos;s query, the most
              relevant cards are displayed.
            </p>
          </div>

          <div className="mt-8">
            <p className="mb-4 text-base text-gray-700">
              <span className="font-semibold text-gray-900">Live demo URL: </span>
              <a
                href="https://gen-ui-portfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="break-all underline decoration-gray-400 underline-offset-2 hover:text-gray-900"
              >
                https://gen-ui-portfolio.vercel.app/
              </a>
            </p>
            <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-gray-300 bg-gray-100">
              <iframe
                src="https://www.loom.com/embed/dca2eb4fb44c4226beab308e2f0c91c4"
                title="Loom: Curated portfolio (generative UI)"
                className="absolute inset-0 h-full w-full"
                allowFullScreen
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              />
            </div>
            <p className="mt-2 text-sm text-gray-500">
              <a
                href="https://www.loom.com/share/dca2eb4fb44c4226beab308e2f0c91c4"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-gray-400 underline-offset-2 hover:text-gray-800"
              >
                Open in Loom
              </a>
            </p>
          </div>

          <div className="mt-8 text-base leading-relaxed text-gray-700">
            <p className="font-semibold text-gray-900">Next steps:</p>
            <ol className="mt-3 list-decimal space-y-2 pl-6">
              <li>
                A combination of AI generated content + curated content.
              </li>
              <li>
                AI pre-trained on my content, so see if it leads to better
                results.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
