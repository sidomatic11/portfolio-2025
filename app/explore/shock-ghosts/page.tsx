"use client";

import Header from "@/app/components/header";
import EmbedContainer from "@/app/components/EmbedContainer";
import EndOfPage from "@/app/components/EndOfPage";

export default function ShockGhosts() {
  return (
    <div className="min-h-screen bg-white">
      <Header isProjectHeader={true} />

      <div className="w-full py-12">
        <div className="max-w-xl mx-auto mb-8">
          <h1 className="text-4xl font-bold mb-4">Ghosts & Thunder</h1>
          <p className="text-lg mb-8 text-gray-700">Try your luck... and skill 😉 Click on the clouds to release thunder, and try to shock all the ghosts!</p>
        </div>

        <EmbedContainer
          demoLink="https://sidomatic11.github.io/day-14/"
          demoLinkLabel="Play in new tab"
        >
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
            <iframe
              src="https://sidomatic11.github.io/day-14/"
              frameBorder="0"
              className="absolute top-0 left-0 w-full h-full"
              title="Interactive Ghost Experience"
            />
          </div>
        </EmbedContainer>


      </div>

      <EndOfPage />
    </div>
  );
} 