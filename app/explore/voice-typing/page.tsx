import Header from "@/app/components/header";

export default function VoiceTyping() {
  return (
    <div className="min-h-screen bg-white">
      <Header isProjectHeader={true} />

      <div className="max-w-prose mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Can voice typing be better?</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Ideas and Hypotheses</h2>
          <p className="mb-4">
            Voice typing has the potential to revolutionize how we interact with computers,
            but current implementations fall short of the natural interaction we experience
            when speaking to another person.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Use case scenarios</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>OS level</strong> - System-wide voice commands and dictation</li>
            <li><strong>App level</strong> - Integrated voice typing within specific applications</li>
            <li><strong>Browser level</strong> - Browser extensions for voice typing on any website</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Deleting, editing, going back, undo/redo</strong> — is hard with voice</li>
            <li><strong>Errors</strong>: spelling mistakes, proper nouns</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Mapping the typing experience</h2>
          <p className="mb-4">
            Understanding the full spectrum of interactions that occur during typing
            can help identify opportunities for voice enhancement.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Physical Actions</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Finger movements and muscle memory</li>
                <li>Hand positioning and ergonomics</li>
                <li>Eye tracking between screen and keyboard</li>
                <li>Posture and body positioning</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Cognitive Processes</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Word selection and vocabulary recall</li>
                <li>Sentence structure planning</li>
                <li>Context awareness and memory</li>
                <li>Error detection and correction</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Feedback Loops</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Visual feedback from screen</li>
                <li>Tactile feedback from keyboard</li>
                <li>Auditory feedback (key clicks)</li>
                <li>Real-time error highlighting</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Contextual Elements</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Application-specific behaviors</li>
                <li>Formatting and styling commands</li>
                <li>Navigation between text sections</li>
                <li>Integration with other input methods</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Thought experiments</h2>
          <p className="mb-4">
            Imagine as if you have a human personal assistant who can type at superhuman speed.
            Now when you instruct that person, what does that interaction look like?
            What kind of cues is the person able to take from you?
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Body language?</li>
            <li>Pointing?</li>
            <li>Voice tone?</li>
          </ul>
          <p className="mt-4 mb-2">Speak everytime while writing with keyboard??</p>
          <p className="mb-2">What is better with voice? What is better with keyboard? What are you relying on mouse for?</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Prototypes</h2>

          <h3 className="text-xl font-medium mb-3">Pointer interactions</h3>
          <p className="mb-4">
            Exploring how mouse and touch interactions can enhance voice typing.
          </p>
          <div className="bg-gray-100 rounded-lg p-4 mb-6 flex items-center justify-center h-64">
            <p className="text-gray-500 text-center">[Prototype visualization: Mouse/touch interaction with voice commands]</p>
          </div>

          <h3 className="text-xl font-medium mb-3">Combining mouse interaction with STT</h3>
          <p className="mb-4">
            Investigating ways to blend speech-to-text with traditional input methods.
          </p>
          <div className="bg-gray-100 rounded-lg p-4 mb-6 flex items-center justify-center h-64">
            <p className="text-gray-500 text-center">[Prototype visualization: Hybrid input methods demonstration]</p>
          </div>
          <div className="mb-6">
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              <span className="mr-2">▶</span>
              Try Live Demo
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}