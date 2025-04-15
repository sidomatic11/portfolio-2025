"use client";

import Header from "@/app/components/header";
import EndOfPage from "@/app/components/EndOfPage";
import EmbedContainer from "@/app/components/EmbedContainer";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header isProjectHeader={true} />

      <div className="max-w-xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold">
          Three.js + Music
        </h2>
        <p className="mt-2">
          Couple of experiments to explore audio responsive Three.js animations.
        </p>
      </div>

      <EmbedContainer description="#1 — A simple audio reactive three.js animation.">
        <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
          <iframe
            src="https://player.vimeo.com/video/1074639860?h=7c0c0c0c0c&app_id=58479&dnt=1"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "transparent"
            }}
            title="Audio responsive Three.js animation v1"
          ></iframe>
        </div>
      </EmbedContainer>

      <EmbedContainer description="#2 — Visualizing a wider range of frequencies." demoLink="https://sidomatic11.github.io/day-9/" demoLinkLabel="Try with your own audio">
        <div style={{ padding: "53.05% 0 0 0", position: "relative" }}>
          <iframe
            src="https://player.vimeo.com/video/1074660274?h=7c0c0c0c0c&app_id=58479&dnt=1"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "transparent"
            }}
            title="Audio responsive Three.js animation v2"
          ></iframe>
        </div>
      </EmbedContainer>

      <EndOfPage />
    </div>
  );
}
