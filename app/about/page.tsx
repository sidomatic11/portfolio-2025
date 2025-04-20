import Header from "../components/header";

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="w-full mx-auto py-12 md:py-20">
        {/* Intro Section */}
        <div className="max-w-xl mx-auto mb-16 md:mb-24 font-light">
          <div className="flex flex-col items-start">
            <div className="w-32 h-32 rounded-full bg-gray-200 mb-8 overflow-hidden" />
            <p className="text-lg md:text-xl leading-relaxed text-gray-700">
              Hey! This is Siddhant, your friendly neighborhood creative technologist :)
            </p>
          </div>

          <p className="mt-4 text-lg md:text-xl leading-relaxed text-gray-700">
            I am in an exploratory phase in my career, looking to leverage the various skills acquired so far — across UX design, technology and art — onto new innovative frontiers.
          </p>
        </div>

        {/* Background Section */}
        <section className="mb-16 md:mb-24">
          <h2 className="max-w-xl mx-auto text-2xl md:text-3xl font-bold mb-12">
            My background
          </h2>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4">
            {/* Design Card */}
            <div className="p-4 bg-gray-100 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Design</h3>
              <div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
                <video
                  src="/about/design.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="object-contain w-full h-full border-1 border-gray-300 rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <p className="text-gray-700 text-sm font-light">
                  Versatile design from product strategy and concept design to mobile and web design.
                </p>
                <p className="text-gray-700 text-sm font-light leading-relaxed">
                  Interactive prototypes, video prototypes, UI design, storyboards, user flows, wireframes, journey maps, service blueprints, UX research
                </p>
                <p className="text-gray-700 text-sm font-light">
                  3 years work experience in UX Design
                </p>
              </div>
            </div>

            {/* Technology Card */}
            <div className="p-4 bg-gray-100 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Technology</h3>
              <div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
                <video
                  src="/about/tech.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="object-contain w-full h-full border-1 border-gray-300 rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <p className="text-gray-700 text-sm font-light">
                  Have built complex front-end for enterprise product, physical prototyping with arduino, hardware interfacing with medical devices and more.
                </p>
                <p className="text-gray-700 text-sm font-light leading-relaxed">
                  JavaScript, React.js, Three.js, Node, MediaPipe, Arduino etc.
                </p>
                <p className="text-gray-700 text-sm font-light">
                  2+ years work experience in Software Development
                </p>
              </div>
            </div>

            {/* Art Card */}
            <div className="p-4 bg-gray-100 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Art</h3>
              <div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
                <video
                  src="/about/art.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="object-contain w-full h-full border-1 border-gray-300 rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <p className="text-gray-700 text-sm font-light">
                  Traditional mediums, to digital art and now also art with code.
                </p>
                <p className="text-gray-700 text-sm font-light">
                  {`Lifelong hobby :D`}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interests Section */}
        <section className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            I love working on...
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <li className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">
                Prototyping & Proof of Concepts
              </h3>
              <p className="text-gray-600">
                Getting started from zero, and going from ambiguity to clarity.
              </p>
            </li>
            <li className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">
                Innovative Explorations
              </h3>
              <p className="text-gray-600">
                Always love to challenge the status quo.
              </p>
            </li>
            <li className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">
                Emerging Tech
              </h3>
              <p className="text-gray-600">
                I enjoy researching, keeping up and working with the latest in tech.
              </p>
            </li>
            <li className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">
                Social Impact
              </h3>
              <p className="text-gray-600">
                Real problems, real solutions.
              </p>
            </li>
            <li className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">
                Art with Tech
              </h3>
              <p className="text-gray-600">
                For the pure joy of it.
              </p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
