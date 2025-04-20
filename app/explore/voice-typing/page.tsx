import Header from "@/app/components/header";
import EmbedContainer from "@/app/components/EmbedContainer";

export default function VoiceTyping() {
  return (
    <div className="min-h-screen bg-white">
      <Header isProjectHeader={true} />

      <main className="w-full py-16">
        <div className="max-w-xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Can voice typing be better?</h1>

          <p className="mb-8 italic text-fuchsia-600 font-light"><span className="font-medium">Note:</span> This is an ongoing project. I will update this page as I explore more.</p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Current Challenges</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-semibold">Deleting, editing, undo/redo</span> is not great with current voice typing implementations</li>
              <li>Dealing with <span className="font-semibold">errors</span> (spelling mistakes, proper nouns etc) is also a pain</li>
              <li><span className="font-semibold">Voice commands</span> during typing (“period”, “next line”) feel unnatural. You also need to be precise with the commands, which is a big point of friction.</li>
            </ul>
          </section>

          <h2 className="max-w-xl mx-auto text-2xl font-semibold mb-8">Ideas and Hypotheses</h2>

        </div>
        <div className="w-full">
          <EmbedContainer>
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
              <iframe
                src="https://embed.figma.com/board/wsxQ8DDLLLKLYe3dWJZcnX/voice-typing-ideas?node-id=0-1&embed-host=share"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  backgroundColor: "transparent"
                }}
                allowFullScreen
                title="Voice Typing Ideas"
              />
            </div>
          </EmbedContainer>
        </div>

        {/* <h2 className="max-w-xl mx-auto text-2xl font-semibold mb-4">Prototyping</h2> */}

        <div className="max-w-xl mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Thought experiment</h2>
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
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Use case scenarios</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>OS level</strong> - System-wide voice commands and dictation</li>
              <li><strong>App level</strong> - Integrated within specific applications</li>
              <li><strong>Browser level</strong> - Browser extensions for voice typing on any website</li>
            </ul>
          </section>

          <p className="mb-12 max-w-xl mx-auto text-amber-600 font-light">🏗️ Prototypes coming very soon! Stay tuned!</p>

          {/* <section className="mb-12">
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
          </section> */}
        </div>
      </main>
    </div>
  );
}