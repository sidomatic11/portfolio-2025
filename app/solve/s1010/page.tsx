import Header from "@/app/components/header";
import EndOfPage from "@/app/components/EndOfPage";

// Main page component for S1010 project
export default function S1010() {
  return (
    <div className="min-h-screen">
      {/* Header section */}
      <Header isProjectHeader={true} />

      <div className="w-full py-12">
        <div className="flex gap-8">
          <div className="max-w-2xl flex-shrink-0">
            {/* Project title */}
            <h1 className="text-3xl font-bold mb-8">The Future of e-Commerce powered by Web3 (WIP)</h1>

            <p className="text-xl text-gray-600 mb-8">Clarified how Web3 could unlock a win-win-win for customers, brands, and partners — influencing company strategy and client conversations.</p>

            {/* Client and timeline info */}
            <div className="sm:flex sm:gap-12 mb-8">
              <div className="w-full">
                <p className="text-base mb-1 font-semibold">Client</p>
                <p className="text-base mb-8">Concentrix</p>
              </div>

              <div className="w-full">
                <p className="text-base mb-1 font-semibold">Timeline</p>
                <p className="text-base mb-8">Late 2022</p>
              </div>
            </div>

            {/* Key Deliverables */}
            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-100 p-4 rounded-lg flex flex-col justify-between h-full min-h-[160px]">
                  <p className="text-lg font-semibold mb-4">Mapping Complexity</p>
                  <p className="text-base">Turned a vague ecosystem into a blueprint</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg flex flex-col justify-between h-full min-h-[160px]">
                  <p className="text-lg font-semibold mb-4">Innovative Vision</p>
                  <p className="text-base">Defined a win-win-win loyalty system</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg flex flex-col justify-between h-full min-h-[160px]">
                  <p className="text-lg font-semibold mb-4">Communicated Value</p>
                  <p className="text-base">Interactive proto-presentation for clients and stakeholders</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual balance box */}
          <div className="hidden lg:block flex-1 min-w-[200px]">
            <div className="bg-gray-200 h-[600px] rounded-lg"></div>
          </div>
        </div>

        <hr className="my-12 max-w-xl" />

        {/* Context */}
        <div className="max-w-xl">
          <h2 className="text-2xl font-semibold mb-4">Context</h2>
          <p className="text-base mb-4">
            During the Web3 and Metaverse hype-skepticism of late 2022, Concentrix set out to explore how these technologies could reshape e-commerce.
          </p>
          <p className="text-base mb-8">
            The challenge wasn&apos;t to build a product, but to navigate an ambiguous space: understanding potential value, creating alignment, and communicating possibilities to stakeholders and clients.
          </p>
        </div>

        {/* My Contributions */}
        <div className="max-w-xl">
          <h2 className="text-2xl font-semibold mb-4">My Contributions</h2>
          <ul className="list-disc pl-6 text-base mb-8 space-y-2">
            <li><strong>Research & Concepts</strong> - Explored technology capabilities, trends, and experiences to identify disruptive opportunities.</li>
            <li><strong>Service Blueprinting</strong> - Visualized a complex and vague system, mapping how different players and value flows connect.</li>
            <li><strong>Innovative System Vision</strong> - Defined &quot;Win-Win-Win Loyalty,&quot; a three-way value exchange between brands, partners, and customers.</li>
            <li><strong>Storytelling Proto-Presentation</strong> - Designed and owned a Figma-based interactive deck to communicate the vision with both stakeholders and customers.</li>
            <li><strong>From Ambiguity to Clarity</strong> - Synthesized scattered explorations into a cohesive, compelling narrative.</li>
          </ul>
        </div>

        {/* Reflection */}
        <div className="max-w-xl">
          <h2 className="text-2xl font-semibold mb-4">Reflection</h2>
          <p className="text-base mb-8">
            Pushed me to think beyond the customer to include brands and partners and think of a holistic value driven system. It also challenged me to precisely extract value from the hype.
          </p>
        </div>
      </div>

      {/* Footer */}
      <EndOfPage />
    </div>
  );
}