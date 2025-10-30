import Header from "@/app/components/header";
import EndOfPage from "@/app/components/EndOfPage";
import PersonChip from "@/app/components/PersonChip";

// Data Platform — standalone case study page
// Purpose: Present the Data Fabric Platform vision project as an independent case study
// Usage: Accessible via route `/solve/data-platform`
// Dependencies: `Header`, `EndOfPage`; media assets under `/public/concentrix/*`
export default function Page() {
  return (
    <div className="min-h-screen">
      {/* Header section */}
      <Header isProjectHeader={true} />

      <div className="w-full py-12">
        <h1 className="mx-auto mb-8 max-w-xl text-3xl font-bold">
          User-centered product vision for a data fabric platform
        </h1>
        <p className="mx-auto mb-8 max-w-xl text-xl font-light text-gray-600">
          Vision, principles, and a mid‑fi prototype to define a cohesive,
          user-centered data fabric platform.
        </p>

        {/* Quick facts: Client, Company, Timeline on one line */}
        <div className="mx-auto mb-2 max-w-xl sm:grid sm:grid-cols-3 sm:gap-8">
          <div className="max-w-xl">
            <p className="mb-1 text-base font-semibold">Client</p>
            <p className="mb-6 text-base">
              A data platform company (leaders in US Healthcare)
            </p>
          </div>
          <div className="max-w-xl">
            <p className="mb-1 text-base font-semibold">Company</p>
            <p className="mb-6 text-base">Concentrix Catalyst</p>
          </div>
          <div className="max-w-xl">
            <p className="mb-1 text-base font-semibold">Timeline</p>
            <p className="mb-6 text-base">2021</p>
          </div>
        </div>

        {/* Team on next line */}
        <div className="mx-auto mb-12 max-w-xl">
          <p className="mb-1 text-base font-semibold">Team</p>
          <div className="mt-1 flex flex-row flex-wrap gap-2">
            <PersonChip
              imageUrl="/data-platform/aaron.webp"
              name="Aaron"
              role="Strategy Lead"
              href="https://www.linkedin.com/in/perkinsaaron/"
            />
            <PersonChip
              imageUrl="/data-platform/tami.webp"
              name="Tämi"
              role="Strategist"
              href="https://www.linkedin.com/in/tamirearwin/"
            />
            <PersonChip
              imageUrl="/data-platform/gunjan.webp"
              name="Gunjan"
              role="Design Lead"
              href="https://www.linkedin.com/in/gunjandeepakraheja/"
            />
            <PersonChip imageUrl="/siddhant.jpg" name="Me" role="Designer" />
          </div>
        </div>

        <hr className="mx-auto my-8 max-w-xl" />

        {/* Client context */}
        <div className="mx-auto mb-8 max-w-xl">
          <p className="mb-1 text-base font-semibold">Business Objective</p>
          <p className="mb-8 text-base">
            Help envision the product of the future, what it should look like
            from a <i>user</i> standpoint and understand the key requirements
            needed to achieve it.
          </p>
        </div>

        {/* Activities */}
        <div className="mx-auto max-w-xl">
          <p className="mb-2 text-base font-semibold">My Activities</p>
          <div className="mb-8 flex flex-col gap-4 sm:flex-row">
            <div className="sm:w-1/2">
              <p className="mb-1 text-base font-medium">Lead</p>
              <ul className="list-disc pl-5">
                <li>Product Concept Design</li>
                <li>Design Principles</li>
                <li>User Mindsets</li>
              </ul>
            </div>
            <div className="sm:w-1/2">
              <p className="mb-1 text-base font-medium">Contributor</p>
              <ul className="list-disc pl-5">
                <li>Stakeholder Interviews</li>
                <li>User Interviews & Synthesis</li>
                <li>Competitive Analysis</li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="mx-auto my-12 max-w-xl" />

        {/* User Mindsets */}
        <div className="mx-auto mb-8 max-w-xl">
          <h3 className="mb-4 text-xl font-semibold">
            User Mindsets — our bespoke alternative to Personas
          </h3>
          <p className="mb-4 text-base">
            Variety of developer roles, variety of responsibilities, no
            standardization... but common core operations.
          </p>
          <p className="mb-8 text-base">
            No matter the profile of a user, thinking in terms of the mindsets
            they go through, enabled a concise yet comprehensive view of their
            jobs, pain points and desires.
          </p>
        </div>
        <div className="mb-12 w-full rounded-lg bg-gray-100 p-0.5 pb-4">
          <video
            src="/concentrix/is-mindsets.mp4"
            className="mb-2 w-full max-w-none rounded-lg"
            autoPlay
            muted
            loop
          />
          <p className="mx-auto max-w-xl text-sm text-gray-500">
            User Mindsets and their mapping with the operations in the system.
          </p>
        </div>

        {/* Design Principles */}
        <div className="mx-auto mb-12 max-w-xl">
          <h3 className="mb-4 text-xl font-semibold">Design Principles</h3>
          <p className="mb-4 text-base">
            Qualities of the ideal user experience that are essential for it to
            work and are applicable across any facet of the product.
          </p>
        </div>
        <div className="mb-12 w-full rounded-lg bg-gray-100 p-0.5">
          <img
            src="/concentrix/is-principles.jpg"
            alt="Design Principles"
            className="w-full max-w-none rounded-lg"
          />
        </div>

        {/* Northstar prototype */}
        <h2 className="mx-auto mb-8 max-w-xl text-xl font-semibold">
          Mid-fi prototype of the northstar product vision
        </h2>
        <div className="mb-12 w-full rounded-lg">
          <img
            src="/concentrix/is-prototype.png"
            alt="Mid-fi prototype"
            className="w-full max-w-none rounded-lg"
          />
        </div>

        {/* Testimonial */}
        <div className="relative mx-auto mb-12 max-w-xl">
          <div className="absolute -top-2 -left-2 font-serif text-6xl text-gray-300">
            &ldquo;
          </div>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-8 pl-12">
            <div className="mb-6 flex items-center gap-3">
              <PersonChip
                imageUrl="/data-platform/aaron.webp"
                name="Aaron Perkins"
                role="Strategy Lead"
                href="https://www.linkedin.com/in/perkinsaaron/"
              />
            </div>
            <div className="space-y-4 text-lg leading-relaxed font-light text-gray-800">
              <p>
                Ultimately the complexity of the project became much more than
                expected and Sid was involved with nearly all aspects of the
                project.
              </p>
              <p>
                He stepped up many times over the course of the work, presented
                to clients and helped bring about a very successful conclusion.
              </p>
              <p>
                His ability to draw upon programmer friends for advice, his
                willingness to explore areas he had little experience with and
                his general engagement throughout the long project was top
                notch.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <EndOfPage />
    </div>
  );
}
