import Header from "@/app/components/header";

export default function Template() {
  return (
    <div className="min-h-screen bg-white">
      <Header isProjectHeader={true} />

      <main className="w-full">

        <h1 className="text-4xl font-bold mb-6">Project Title</h1>
        <p className="text-xl text-gray-600 mb-4">A brief project description that captures the essence of what this project is about.</p>


        {/* Center Column - Main Content */}
        <div className="col-span-12 md:col-span-8">
          {/* Hero Section */}
          <section className="mb-16">
            <div className="flex gap-4">
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Category</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Status</span>
            </div>
          </section>

          {/* Text Content */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">Section Title</h2>
            <p className="mb-4">
              This is a paragraph of text that demonstrates the standard text styling.
              It can include <strong>bold text</strong> and <em>italic text</em> as needed.
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>List item one</li>
              <li>List item two</li>
              <li>List item three</li>
            </ul>
            <blockquote className="border-l-4 border-gray-200 pl-4 italic mb-4">
              This is a blockquote that can be used for important quotes or highlights.
            </blockquote>
          </section>
        </div>



        {/* Full-width Image (outside the grid) */}
        <div className="w-full px-0 mb-16">
          <div className="w-full aspect-video bg-gray-100 flex items-center justify-center">
            <p className="text-gray-500">[Full-width Image/Video Placeholder]</p>
          </div>
        </div>

        {/* Three Column Grid Container - Continued */}
        <div className="grid grid-cols-12 gap-8 px-4">
          {/* Left Column */}
          <div className="col-span-12 md:col-span-2"></div>

          {/* Center Column */}
          <div className="col-span-12 md:col-span-8">
            {/* More Text Content */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">Another Section</h2>
              <p className="mb-4">
                More text content that follows the same centered layout pattern.
              </p>
            </section>

            {/* Code Example */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">Code Example</h2>
              <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                <pre>
                  {`function example() {
  console.log("This is a code example");
}`}
                </pre>
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center">
              <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Try it Now
              </button>
            </section>
          </div>

          {/* Right Column */}
          <div className="col-span-12 md:col-span-2"></div>
        </div>

        {/* Full-width Feature Section (outside the grid) */}
        <div className="w-full bg-gray-50 py-12 mb-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-6">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium mb-2">Feature One</h3>
                <p>Description of the first feature or aspect of the project.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium mb-2">Feature Two</h3>
                <p>Description of the second feature or aspect of the project.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium mb-2">Feature Three</h3>
                <p>Description of the third feature or aspect of the project.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
