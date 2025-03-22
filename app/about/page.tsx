import Header from "../components/header";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />

      <main className="max-w-[960px] mx-auto px-6 py-12 md:py-20">
        {/* Intro Section */}
        <div className="max-w-[720px] mx-auto mb-16 md:mb-24">
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            Hey! This is Siddhant, your friendly neighborhood creative technologist :)
          </p>
          <p className="mt-4 text-lg md:text-xl leading-relaxed text-gray-700">
            I am in an exploratory phase in my career, looking to leverage the various skills acquired so far — across UX design, technology and art — onto new innovative frontiers.
          </p>
        </div>

        {/* Background Section */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-gray-900">
            My background
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Design Card */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-6 text-gray-900">Design</h3>
              <div className="relative aspect-square mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/design.gif"
                  alt="Design work showcase"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Versatile design from product strategy and concept design to mobile and web design.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Interactive prototypes, video prototypes, UI design, storyboards, user flows, wireframes, journey maps, service blueprints, UX research
                </p>
                <p className="text-gray-500 text-sm font-medium">
                  3 years work experience in UX Design
                </p>
              </div>
            </div>

            {/* Technology Card */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-6 text-gray-900">Technology</h3>
              <div className="relative aspect-square mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/tech.gif"
                  alt="Technology work showcase"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Have built complex front-end for enterprise product, physical prototyping with arduino, hardware interfacing with medical devices and more.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  JavaScript, React.js, Three.js, Node, MediaPipe, Arduino etc.
                </p>
                <p className="text-gray-500 text-sm font-medium">
                  2+ years work experience in Software Development
                </p>
              </div>
            </div>

            {/* Art Card */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-6 text-gray-900">Art</h3>
              <div className="relative aspect-square mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/art.gif"
                  alt="Art showcase"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Traditional mediums, to digital art and now also art with code.
                </p>
                <p className="text-gray-500 text-sm font-medium">
                  {`Lifelong hobby :D`}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interests Section */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
            I love working on...
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <li className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Prototyping & Proof of Concepts
              </h3>
              <p className="text-gray-600">
                Getting started from zero, and going from ambiguity to clarity.
              </p>
            </li>
            <li className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Innovative Explorations
              </h3>
              <p className="text-gray-600">
                Always love to challenge the status quo.
              </p>
            </li>
            <li className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Emerging Tech
              </h3>
              <p className="text-gray-600">
                I enjoy researching, keeping up and working with the latest in tech.
              </p>
            </li>
            <li className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Social Impact
              </h3>
              <p className="text-gray-600">
                Real problems, real solutions.
              </p>
            </li>
            <li className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
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
