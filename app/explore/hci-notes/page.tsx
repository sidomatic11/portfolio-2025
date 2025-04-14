'use client'

import Header from "@/app/components/header";
import Image from "next/image";
import { useState } from "react";
import EndOfPage from "@/app/components/EndOfPage";
// Type definition for image options
interface ImageOption {
  id: string;
  label: string;
  imagePath: string;
}

// Base image that's always displayed
const BASE_IMAGE = {
  id: 'notes',
  label: 'Notes',
  imagePath: '/hci-notes.png'
};

// Array of overlay images that can be toggled on top of the base image
const overlayOptions: ImageOption[] = [
  {
    id: 'notes-plus-plus',
    label: 'Notes++',
    imagePath: '/notes-plus-plus.png'
  },
  {
    id: 'smartwatch',
    label: 'Smartwatch',
    imagePath: '/hci-smartwatch.png'
  },
  {
    id: 'vr-headset',
    label: 'VR Headset',
    imagePath: '/hci-vr-headset.png'
  }
];

export default function HCI() {
  // State to track which option is currently selected
  const [selectedOption, setSelectedOption] = useState(BASE_IMAGE.id);

  // Find the currently selected overlay image (if any)
  const overlayImage = overlayOptions.find(option => option.id === selectedOption);

  return (
    <div className="min-h-screen">
      <Header
        isProjectHeader={true}
      />
      <main className="w-full py-16 sm:px-8">
        <h1 className="text-4xl font-bold mb-8 max-w-xl mx-auto">Notes on Humans, Computers and their Interaction</h1>

        {/* Image container with aspect ratio 16:9 */}
        <div className="relative w-full aspect-[16/9]">
          {/* Base image that's always visible */}
          <Image
            src={BASE_IMAGE.imagePath}
            alt={BASE_IMAGE.label}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            className="object-contain"
            quality={90}
          />
          {/* Overlay image that appears when selected */}
          {overlayImage && (
            <Image
              src={overlayImage.imagePath}
              alt={overlayImage.label}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              className="object-contain"
              quality={90}
            />
          )}
        </div>

        {/* Radio button controls */}
        <div className="grid grid-cols-2 sm:flex sm:flex-row gap-4 sm:gap-6 justify-center mt-8 max-w-xl mx-auto">
          {/* Base image option */}
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="overlay"
              value={BASE_IMAGE.id}
              checked={selectedOption === BASE_IMAGE.id}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="w-4 h-4"
            />
            <span>{BASE_IMAGE.label}</span>
          </label>
          {/* Overlay image options */}
          {overlayOptions.map((option) => (
            <label key={option.id} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="overlay"
                value={option.id}
                checked={selectedOption === option.id}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="w-4 h-4"
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>

        {/* Content section */}
        <div className="mt-16 max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Important considerations:</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">1. Multimodality</h3>
              <p className="text-gray-700">Most communication is multimodal, integrating various modalities such as verbal communication, body language, paralanguage (tone, pitch, etc.), and proxemics (use of physical space). For instance, a face-to-face conversation combines these elements to convey meaning.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">2. Context</h3>
              <p className="text-gray-700">The meaning of communication is heavily influenced by context, including the relationship between communicators, the specific situation, and the cultural background, all of which shape how messages are interpreted.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">3. Integration</h3>
              <p className="text-gray-700">Human perception arises from the brain's constant integration of information from multiple sensory systems (e.g., taste, smell, and touch combine to create flavor perception), forming a unified understanding of the world rather than isolated sensory inputs.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">4. Sensory Adaptation</h3>
              <p className="text-gray-700">Sensory receptors adapt to constant stimuli over time, reducing sensitivity (e.g., you no longer notice the sensation of clothes on your skin after a while).</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">5. Individual Differences</h3>
              <p className="text-gray-700">Sensory sensitivity and perception vary widely between individuals due to factors like genetics, age, and personal experiences, affecting how each person processes sensory input.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">6. Sensory Disorders</h3>
              <p className="text-gray-700">Conditions affecting sensory function can impair senses such as vision, hearing, taste, smell, touch, or balance, altering how individuals perceive and interact with their environment.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">7. Synesthesia</h3>
              <p className="text-gray-700">A neurological condition where stimulation of one sensory pathway triggers involuntary experiences in another (e.g., hearing music might evoke the perception of colors), showcasing unique sensory crossovers.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">8. Digital vs. Analog</h3>
              <p className="text-gray-700">Human senses operate in an analog manner (continuous values), while computer input/output is digital (discrete values). However, the brain processes sensory data digitally, bridging this gap in human perception.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">9. Complexity</h3>
              <p className="text-gray-700">Human sensory systems are vastly more intricate than most computer input modalities. For example, human vision processes extensive details like color, depth, and motion simultaneously, far exceeding the simpler data captured by a camera.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">10. Interpretation</h3>
              <p className="text-gray-700">Both humans and computers interpret incoming information. In humans, the brain processes sensory data to generate perceptions, while in computers, software analyzes input data to produce appropriate outputs.</p>
            </div>
          </div>
        </div>

        <EndOfPage />
      </main>
    </div>
  );
}
