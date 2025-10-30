import Header from "@/app/components/header";
import PersonChip from "@/app/components/PersonChip";
import EndOfPage from "@/app/components/EndOfPage";

// SVB Developer API Portal case study page
// Purpose: Present project overview, outcomes, and testimonials
// Usage: Rendered at route `/solve/svb`
// Dependencies: Header, PersonChip, EndOfPage
export default function SVB() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header isProjectHeader={true} />

      <div className="w-full py-12">
        {/* Title + Subtitle */}
        <h1 className="mx-auto mb-6 max-w-xl text-3xl font-bold">
          Transforming <i className="font-normal">developer.svb.com</i> into a
          modern, fully self-service experience
        </h1>
        <p className="mx-auto max-w-xl text-xl font-light text-gray-600">
          I led a team of three designers to redesign Silicon Valley Bank&apos;s
          Developer API Portal — transforming it from a dated, support-dependent
          platform into a modern, fully self-service experience that expanded
          its capabilities and positioned it ahead of competitors.
        </p>

        <hr className="mx-auto my-8 max-w-xl" />

        {/* Overview */}
        <div className="mx-auto mb-8 max-w-xl">
          <div className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
              <div className="sm:w-1/2">
                <p className="text-base font-semibold">Company</p>
                <p className="text-base">Concentrix Catalyst</p>
              </div>
              <div className="sm:w-1/2">
                <p className="text-base font-semibold">Client</p>
                <p className="text-base">Silicon Valley Bank</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
              <div className="sm:w-1/2">
                <p className="text-base font-semibold">My Role</p>
                <p className="text-base">Design Lead</p>
              </div>
              <div className="sm:w-1/2">
                <p className="text-base font-semibold">Timeline</p>
                <p className="text-base">4 months (late 2022)</p>
              </div>
            </div>
            <div>
              <p className="text-base font-semibold">Team</p>
              <div className="mt-1 flex flex-row flex-wrap gap-2">
                <PersonChip
                  imageUrl="/siddhant.jpg"
                  name="Me"
                  role="Design Lead"
                />
                <PersonChip
                  imageUrl="/svb/morgan.webp"
                  name="Morgan"
                  role="Designer"
                  href="https://www.linkedin.com/in/morgan-harris8/"
                />
                <PersonChip
                  imageUrl="/svb/namita.webp"
                  name="Namita"
                  role="Designer"
                  href="https://www.linkedin.com/in/namita-pasupuleti-0075941b8/"
                />
                <PersonChip
                  imageUrl="/svb/victoria.webp"
                  name="Victoria"
                  role="Designer"
                  href="https://www.linkedin.com/in/victoria-liao/"
                />
                <PersonChip
                  imageUrl="/svb/daksha.webp"
                  name="Daksha"
                  role="Project Manager"
                  href="https://www.linkedin.com/in/daksha-patel100/"
                />
              </div>
            </div>
          </div>
        </div>

        <hr className="mx-auto my-12 max-w-xl" />

        {/* Visuals */}
        <div className="mb-12 w-full rounded-lg bg-gray-100 p-4">
          <img
            src="/concentrix/svb-1.png"
            alt="SVB redesign"
            className="mb-4 w-full max-w-none rounded-lg"
          />
          <img
            src="/concentrix/svb-2.png"
            alt="SVB redesign"
            className="w-full max-w-none rounded-lg"
          />
        </div>

        {/* Where we started */}
        <div className="mx-auto mb-8 max-w-xl">
          <h2 className="mb-3 text-xl font-semibold">Before</h2>
          <ul className="mb-8 list-none pl-0 text-base">
            <li className="mb-3 flex items-baseline gap-2">
              <span className="text-sm">‼️</span>
              <span>
                Developers were unable to find information. Sales teams needed
                to manually hand out information about services.{" "}
              </span>
            </li>
            <li className="mb-3 flex items-baseline gap-2">
              <span className="text-sm">‼️</span>
              <span>
                100% manual effort for API Support team to provide and manage
                customer credentials and scope.
              </span>
            </li>
            <li className="mb-3 flex items-baseline gap-2">
              <span className="text-sm">‼️</span>
              <span>
                Extremely outdated and unorganized experience, which didn&apos;t
                address essential developer needs.
              </span>
            </li>
          </ul>
        </div>

        {/* Our objectives */}
        {/* <div className="max-w-xl mx-auto mb-8">
          <h2 className="text-xl font-semibold mb-3">Our objectives</h2>
          <ul className="list-disc pl-6 space-y-2 text-base">
            <li>make API products visible — drive revenue, adoption and scale</li>
            <li>improve developer satisfaction</li>
            <li>reduce manual effort of Sales and API support teams</li>
          </ul>
        </div> */}

        {/* Where we finished */}
        <div className="mx-auto max-w-xl">
          <h2 className="mb-3 text-xl font-semibold">Where we finished</h2>
          <ul className="mb-8 list-none pl-0 text-base">
            <li className="mb-3 flex items-baseline gap-2">
              <span className="text-sm">✅</span>
              <span>
                <b>Fully self-service experience</b> — from discovery and
                onboarding, to integration and support.
              </span>
            </li>
            <li className="mb-3 flex items-baseline gap-2">
              <span className="text-sm">✅</span>
              <span>
                <b>Best-in-Class</b> — our redesign incorporated the best
                aspects and features in the market that developers expect out of
                an API portal.
              </span>
            </li>
            <li className="mb-3 flex items-baseline gap-2">
              <span className="text-sm">✅</span>
              <span>
                <b>Ahead of Competitors</b> — no other direct competitors offer
                such comprehensive suite of features.
              </span>
            </li>
          </ul>
        </div>

        <hr className="mx-auto my-12 max-w-xl" />

        {/* Narrative */}
        {/* <div className="max-w-xl mx-auto mb-8">
          <h3 className="text-lg font-semibold mb-2">One of the most challenging projects I’ve ever worked on…</h3>
          <p className="text-base text-gray-800">
            Not the design — that was the easy part. But this project was an amalgamation of a range of other challenges. But, with some understanding, determination and help, we pulled through.
          </p>
        </div> */}

        {/* Testimonials */}
        <div className="mx-auto mb-12 max-w-xl">
          <h2 className="mb-8 text-2xl font-semibold">Testimonials</h2>

          <div className="space-y-8">
            {/* Testimonial 1 */}
            <div className="relative">
              <div className="absolute -top-2 -left-2 font-serif text-6xl text-gray-300">
                &ldquo;
              </div>
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-8 pl-12">
                <div className="mb-6 flex items-center gap-3">
                  <PersonChip
                    imageUrl="/svb/daksha.webp"
                    name="Daksha Patel"
                    role="Project Manager @ Concentrix Catalyst"
                    href="https://www.linkedin.com/in/daksha-patel100/"
                  />
                </div>
                <div className="space-y-4 text-lg leading-relaxed font-light text-gray-800">
                  <p>
                    Sid is very organized and has a clear vision on how to
                    achieve sprint deliverables. He knows when to ask for help
                    and how to support the design team to reach project
                    objectives. He is well spoken during touchpoints and demos
                    with the client with the ability to explain in a clear and
                    concise manner.
                  </p>
                  <p>
                    It really is a pleasure to work with Sid. He is a fantastic
                    design lead. A few terms come to mind when I think of
                    Sid&apos;s role in this project – patient and willing, high
                    level of aptitude, ability to delegate, coaching other
                    designers, innovative, and delivers on time. The one thing
                    that sticks out the most – he is a genuinely nice guy that
                    wants to do a good job.
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="relative">
              <div className="absolute -top-2 -left-2 font-serif text-6xl text-gray-300">
                &ldquo;
              </div>
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-8 pl-12">
                <div className="mb-6 flex items-center gap-3">
                  <PersonChip
                    imageUrl="/svb/guy.webp"
                    name="Guy Bourgault"
                    role="Design Director @ Concentrix Catalyst"
                    href="https://www.linkedin.com/in/guy-bourgault-2615823/"
                  />
                </div>
                <div className="space-y-4 text-lg leading-relaxed font-light text-gray-800">
                  <p>
                    Sid has helped the client navigate the gaps and complexities
                    involved in translating a design process into an agile
                    software development environment.
                  </p>
                  <p>
                    Sid&apos;s ability to &apos;learn by doing&apos; in his
                    first effort as design lead has been impressive. He is
                    comfortable asking for support and advice when it is needed,
                    which allows me to more effectively assist him with limited
                    available time. Sid has an opportunity to continue to grow
                    his authority and presence as a design expert, and use that
                    platform to lead our clients to better outcomes for their
                    business and better experiences for their customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <EndOfPage />
    </div>
  );
}
