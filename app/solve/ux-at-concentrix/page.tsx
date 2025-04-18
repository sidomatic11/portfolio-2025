import Header from "@/app/components/header";
import PersonChip from "@/app/components/PersonChip";
import EndOfPage from "@/app/components/EndOfPage";

// Main page component
export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header section */}
      <Header isProjectHeader={true} />

      <div className="w-full py-12">
        {/* Project title */}
        <h1 className="max-w-xl mx-auto text-3xl font-bold mb-8">Project highlights from my time as UX Designer at Concentrix Catalyst</h1>

        <p className="max-w-xl mx-auto text-base italic mb-24">Note: Some client names and visuals have been obscured for confidentiality. </p>

        <p className="max-w-xl mx-auto text-2xl mb-8">Research driven, future product vision for a data platform company</p>

        <div className="max-w-xl mx-auto mb-8">
          <p className="text-base mb-1 font-semibold">Client</p>
          <p className="text-base mb-8">A data platform company, leading in US healthcare</p>
        </div>


        {/* Business objective */}
        <div className="max-w-xl mx-auto mb-8">
          <p className="text-base mb-1 font-semibold">Business Objective</p>
          <p className="text-base mb-8">Help envision the product of the future, what it should look like from a <i>user</i> standpoint and understand the key requirements needed to achieve it.</p>
        </div>

        {/* Activities */}
        <div className="max-w-xl mx-auto mb-12">
          <p className="text-base mb-2 font-semibold">My Activities</p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="sm:w-1/2">
              <p className="text-base mb-1 font-medium">Lead</p>
              <ul className="list-disc pl-5">
                <li>Product Concept Design</li>
                <li>Design Principles</li>
                <li>User Mindsets</li>
              </ul>
            </div>
            <div className="sm:w-1/2">
              <p className="text-base mb-1 font-medium">Contributor</p>
              <ul className="list-disc pl-5">
                <li>Stakeholder Interviews</li>
                <li>User Interviews & Synthesis</li>
                <li>Competitive Analysis</li>
              </ul>
            </div>
          </div>
        </div>

        {/* User Mindsets section */}
        <div className="max-w-xl mx-auto mb-8">
          <h3 className="text-xl font-semibold mb-4">User Mindsets — our bespoke alternative to Personas</h3>

          <p className="text-base mb-4">
            Variety of developer roles, variety of responsibilities, no standardization... but common core operations.
          </p>

          <p className="text-base mb-8">
            No matter the profile of a user, thinking in terms of the mindsets they go through, enabled a concise yet comprehensive view of their jobs, pain points and desires.
          </p>
        </div>
        <div className="w-full p-4 bg-gray-100 rounded-lg  mb-12">
          <video
            src="/concentrix/is-mindsets.mp4"
            className="w-full max-w-none rounded-lg mb-2"
            autoPlay
            muted
            loop
          />
          <p className="max-w-xl mx-auto text-sm text-gray-500">User Mindsets and their mapping with the operations in the system.</p>
        </div>

        {/* Design Principles section */}
        <div className="max-w-xl mx-auto mb-12">
          <h3 className="text-xl font-semibold mb-4">Design Principles</h3>

          <p className="text-base mb-4">
            Qualities of the ideal user experience that are essential for it to work and are applicable across any facet of the product.
          </p>

        </div>
        <div className="w-full p-4 bg-gray-100 rounded-lg  mb-12">
          <img src="/concentrix/is-principles.jpg" alt="Design Principles" className="w-full max-w-none rounded-lg" />
        </div>



        <h2 className="max-w-xl mx-auto text-xl font-semibold mb-8">Mid-fi prototype of the northstar product vision</h2>

        <div className="w-full rounded-lg  mb-12">
          <img src="/concentrix/is-prototype.png" alt="Mid-fi prototype" className="w-full max-w-none rounded-lg" />
        </div>

        <div className="max-w-xl mx-auto p-6 bg-gray-100 rounded-lg">
          <p className="text-base mb-2">"Ultimately the complexity of the project became much more than expected and Sid was involved with nearly all aspects of the project.</p>
          <p className="text-base mb-2">He stepped up many times over the course of the work, presented to clients and helped bring about a very successful conclusion.</p>
          <p className="text-base mb-2">His ability to draw upon programmer friends for advice, his willingness to explore areas he had little experience with and his general engagement throughout the long project was top notch."</p>
          <p className="text-base">— Aaron Perkins, Team Lead</p>
        </div>

        <EndOfPage />


        <h3 className="max-w-xl mx-auto text-2xl mb-4 mt-32">SVB Developer Portal Website Redesign</h3>

        <p className="max-w-xl mx-auto text-base mb-4">
          I lead a team of 3 designers to redesign the developer portal experience of Silicon Valley Bank's API Banking platform
        </p>

        <div className="w-full p-4 bg-gray-100 rounded-lg  mb-12">
          <img src="/concentrix/svb-1.png" alt="SVB redesign" className="w-full max-w-none rounded-lg mb-4" />
          <img src="/concentrix/svb-2.png" alt="SVB redesign" className="w-full max-w-none rounded-lg" />
        </div>



        <EndOfPage />

        <h3 className="max-w-xl mx-auto text-2xl mb-4 mt-32">Organized a virtual innovation workshop for Concentrix leadership</h3>

        <p className="max-w-xl mx-auto text-base mb-4">Concentrix had started using the Virbela platform. Our team explored if we can use this <b>innovative platform</b> for an <b>innovation workshop.</b></p>

        <p className="max-w-xl mx-auto text-base mb-4">I was part of the core organizing team. We crafted the environment, and flow of activities to suit our workshop needs.</p>

        <p className="max-w-xl mx-auto text-base mb-4">We also created museum like showcases of the latest in tech, to get everyone's creative juices flowing.</p>


        <div className="w-full  rounded-lg  mb-8">
          <img src="/concentrix/metax.png" alt="Innovation workshop" className="w-full max-w-none rounded-lg" />
        </div>

        <p className="max-w-xl mx-auto text-base mb-4">The workshop was a success, and went quite well. However, the benefits offered by the virtual environment didn't seem outweigh the challenges and friction of using it. A great experience never the less.</p>


        <div className="max-w-xl mx-auto w-full rounded-lg  mb-12 flex gap-2">
          <div className="w-1/4 bg-gray-300 rounded-lg flex-1/4"></div>
          <div className="w-1/4 bg-gray-200 rounded-lg flex-1/4"></div>
          <div className="w-1/2 bg-gray-100 rounded-lg flex-1/2 p-2">
            <img src="/concentrix/dance.gif" alt="Dancing" className="w-full max-w-none rounded-md mb-2" />
            <p className="text-right text-sm text-gray-500">...and we had some fun too 🕺🏻</p>
          </div>
        </div>
      </div>


      {/* Footer */}
      <EndOfPage />
    </div >
  );
}
