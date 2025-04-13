"use client";

import Header from "../../components/header";

export default function ShockGhosts() {
  return (
    <div>
      <Header isProjectHeader={true} />
      <main className="w-full py-16 px-8 lg:px-0">
        <div className="max-w-xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Ghosts & Thunder</h1>
          <p className="text-lg mb-8 text-gray-700">Try your luck... and skill 😉 Click on the clouds to release thunder, and try to shock all the ghosts!</p>

        </div>

        <div className="relative w-full mt-8" style={{ paddingTop: '56.25%' }}>
          <iframe
            src="https://sidomatic11.github.io/day-14/"
            frameBorder="0"
            className="absolute top-0 left-0 w-full h-full"
            title="Interactive Ghost Experience"
          />
        </div>
        <a href="https://sidomatic11.github.io/day-14/" className="text-sm text-gray-700 float-right" target="_blank" rel="noopener noreferrer">Play in new tab</a>


        <div className="max-w-xl mx-auto mt-8">
          <p className="text-lg mb-8 text-gray-700">Made with Three.js</p>
        </div>

      </main>
    </div>
  );
} 