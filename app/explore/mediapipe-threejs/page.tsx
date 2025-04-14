import Header from "@/app/components/header";
import EndOfPage from "@/app/components/EndOfPage";
import EmbedContainer from "@/app/components/EmbedContainer";

export default function MediapipeThreejs() {
  return (
    <div className="min-h-screen bg-white">
      <Header isProjectHeader={true} />

      <div className="max-w-prose mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold">
          MediaPipe + Three.js
        </h2>
        <p className="mt-2">
          Exploring hand tracking and 3D interactions using MediaPipe and Three.js.
        </p>
      </div>

      <EmbedContainer description="Interactive landscape exploration using hand tracking." demoLink="https://vimeo.com/1075112125" demoLinkLabel="View Demo">
        <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
          <iframe
            src="https://player.vimeo.com/video/1075112125?badge=0&autopause=0&player_id=0&app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "transparent"
            }}
            title="day-12-landscape"
          ></iframe>
        </div>
      </EmbedContainer>

      <EmbedContainer description="Another experiment with hand tracking and 3D interactions.">
        <div style={{ padding: "60.99% 0 0 0", position: "relative" }}>
          <iframe
            src="https://player.vimeo.com/video/1075113010?badge=0&autopause=0&player_id=0&app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "transparent"
            }}
            title="day-11"
          ></iframe>
        </div>
      </EmbedContainer>

      <EndOfPage />
    </div>
  );
}