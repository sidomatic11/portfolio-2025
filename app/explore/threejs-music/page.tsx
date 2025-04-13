"use client";

import Header from "@/app/components/header";

export default function About() {
  return (
    <div>
      <Header isProjectHeader={true} />

      <h2 className="text-2xl font-bold max-w-xl mx-auto mt-8">
        Three.js + Music
      </h2>
      <p className="max-w-xl mx-auto mt-2">
        Couple of experiments to explore audio responsive Three.js animations.
      </p>

      <div className="w-full mt-8">
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
        <p className="mt-1">
          First experiment, a simple audio reactive three.js animation.
        </p>
      </div>

      <div className="w-full mt-8">
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
        <p className="mt-1">
          Second experiment, exploring more complex audio visualizations.
        </p>
        <p className="mt-2 text-sm text-gray-600">
          Try with your own audio file:{" "}
          <a
            href="https://siddhantkcode.github.io/threejs-music/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Live Demo
          </a>
        </p>
      </div>
    </div>
  );
}
