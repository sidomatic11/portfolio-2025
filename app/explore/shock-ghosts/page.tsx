"use client";

import Header from "../../components/header";

export default function ShockGhosts() {
  return (
    <div>
      <Header />
      <main className="w-full py-16 px-8">
        <h1 className="text-4xl font-bold mb-8">Shock Ghosts</h1>
        <div className="prose max-w-none">
          <p className="text-xl mb-8">An interactive experience where you can shock ghosts!</p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">About</h2>
            <p>
              This project explores the intersection of interactive entertainment and physics-based gameplay.
              Using Three.js and custom shaders, we create an engaging experience where players can interact
              with ghostly entities in a unique way.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Demo</h2>
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Demo coming soon...</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Technical Details</h2>
            <ul className="list-disc pl-6">
              <li>Built with Three.js for 3D graphics</li>
              <li>Custom shaders for ghost effects</li>
              <li>Physics-based interactions</li>
              <li>Responsive design for various screen sizes</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
} 