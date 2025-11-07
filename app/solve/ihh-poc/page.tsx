import Header from "@/app/components/header";
import PersonChip from "@/app/components/PersonChip";
import EndOfPage from "@/app/components/EndOfPage";

// Main page component
export default function About() {
  return (
    <div className="min-h-screen">
      {/* Header section */}
      <Header isProjectHeader={true} />

      <div className="w-full py-12">
        {/* Project title */}
        <h1 className="mx-auto mb-8 max-w-xl text-3xl font-bold">
          POC Development — Critical patient monitoring system
        </h1>

        {/* Client and timeline info */}
        <div className="mx-auto max-w-xl sm:flex sm:gap-12">
          <div className="max-w-xl sm:w-2/3">
            <p className="mb-1 text-base font-semibold">Client</p>
            <p className="mb-8 text-base">
              {" "}
              IHH Healthcare Berhad — Pantai Hospital Klang & Gleneagles
              Hospital Johor
            </p>
          </div>

          <div className="max-w-xl sm:w-1/3">
            <p className="mb-1 text-base font-semibold">Timeline</p>
            <p className="mb-8 text-base">2 months</p>
          </div>
        </div>

        {/* Team members */}
        <div className="mx-auto mb-8 max-w-xl">
          <p className="mb-1 text-base font-semibold">Team</p>
          <div className="flex flex-row flex-wrap gap-2">
            <PersonChip
              imageUrl="/rajnikanth.jpeg"
              name="Rajnikanth"
              role="Team Lead"
            />
            <PersonChip imageUrl="/vidit.jpeg" name="Vidit" role="Engineer" />
            <PersonChip imageUrl="/siddhant.jpg" name="Me" role="Engineer" />
          </div>
        </div>

        <div className="mx-auto mb-12 max-w-xl">
          <p className="mb-1 text-base font-semibold">Activities</p>
          <p className="font-mono text-sm text-gray-600">
            UI prototyping, UI design and development, backend integration, data
            parsing, hardware integration
          </p>
        </div>

        <hr className="mx-auto my-12 max-w-xl" />

        {/* Project objective */}
        <div className="mx-auto max-w-xl">
          <p className="mb-2 text-xl font-semibold">Objective</p>
          <p className="mb-8 text-base">
            Transforming the manual patient monitoring processes into an
            automated, highly accurate system that enhances patient care and
            reduces nursing workload. POC phase.
          </p>
        </div>

        {/* Project results */}
        <div className="mx-auto max-w-xl">
          <p className="mb-2 text-xl font-semibold">Results</p>
          <ul className="mb-8 list-none pl-0 text-base">
            <li className="mb-3 flex items-baseline gap-2">
              <span className="text-sm">✅</span>
              <span>
                Real time data capture at 5s intervals + Automated alerts =
                major nursing overload reduced
              </span>
            </li>
            <li className="mb-3 flex items-baseline gap-2">
              <span className="text-sm">✅</span>
              <span>
                10+ types of devices integrated — modern as well as legacy
                devices
              </span>
            </li>
            <li className="mb-3 flex items-baseline gap-2">
              <span className="text-sm">❤️</span>
              <span>
                Bespoke nursing chart UX, closely aligning with their needs and
                habits
              </span>
            </li>
            <li className="mb-3 flex items-baseline gap-2">
              <span className="text-sm">🏆</span>
              <span>
                Top contender alongside industry giant Philips for securing the
                full-scale project
              </span>
            </li>
          </ul>
        </div>

        <hr className="mx-auto my-12 max-w-xl" />

        {/* Solution overview */}
        <h2 className="mx-auto mb-6 max-w-xl text-2xl font-bold">
          Our Solution
        </h2>

        <div className="mx-auto mb-8 max-w-xl rounded-lg border border-gray-200 bg-gray-100 p-4">
          <img
            src="/diagram.png"
            alt="POC solution"
            className="mx-auto w-full max-w-96 rounded-lg"
          />
        </div>

        <div className="mx-auto mb-8 max-w-xl">
          <img
            src="/nurses.jpg"
            alt="POC solution"
            className="h-auto w-full rounded-lg"
          />
        </div>

        {/* Nursing chart dashboard demo */}
        <div className="mb-16 w-full">
          <video
            src="/chart-overview.mp4"
            className="w-full max-w-none rounded-lg"
            autoPlay
            muted
            loop
          />
          <p className="mx-auto mt-1 max-w-xl text-sm text-gray-500">
            Nursing chart dashboard
          </p>
        </div>

        <hr className="mx-auto my-12 max-w-xl" />

        {/* Medical device integration work */}
        <h3 className="mx-auto mb-4 max-w-xl text-2xl font-semibold">
          I worked on figuring out how to connect with certain medical
          devices...
        </h3>
        <ul className="mx-auto mb-8 max-w-xl list-disc pl-6 text-base">
          <li>RS232 communication via DB and RJ45 connectors</li>
          <li>Data parsing</li>
          <li>
            Making custom connectors and exploring RS232 to Ethernet converters
          </li>
        </ul>

        {/* Hardware integration demo */}
        <div className="mx-auto mb-16 max-w-xl">
          <video
            src="/rs232.mp4"
            className="w-full max-w-none rounded-lg"
            autoPlay
            muted
            loop
          />
          <p className="mt-1 text-sm text-gray-500">
            The first RS232 connection 🎉
          </p>

          <div className="mt-4 grid grid-cols-3 gap-4">
            <img
              src="/hardware-prep-1.jpg"
              alt="Hardware preparation step 1"
              className="h-auto w-full rounded-lg"
            />
            <img
              src="/hardware-prep-2.jpg"
              alt="Hardware preparation step 2"
              className="h-auto w-full rounded-lg"
            />
            <img
              src="/hardware-prep-3.jpg"
              alt="Hardware preparation step 3"
              className="h-auto w-full rounded-lg"
            />
          </div>
          <p className="mt-1 text-sm text-gray-500">
            Explorations, Hacks and Solutions
          </p>
        </div>

        {/* Nursing chart dashboard development */}
        <h3 className="mx-auto mb-4 max-w-xl text-2xl font-semibold">
          ...and was responsible for building the Nursing Chart dashboard
        </h3>

        <p className="mx-auto mb-4 max-w-xl text-base">
          We learnt about their existing practices, and taking regular feedback,
          built the chart view to be exactly what they needed.
        </p>

        {/* Current state comparison */}
        <div className="mb-8 flex w-full flex-row gap-4 overflow-hidden rounded-lg border border-gray-200 bg-gray-100 p-4">
          <div className="flex-1 overflow-hidden">
            <img
              src="/current-state-1.jpg"
              alt="Current state"
              className="h-full w-full rounded-md object-cover"
            />
          </div>
          <div className="flex-1 overflow-hidden">
            <img
              src="/current-state-2.jpg"
              alt="Current state"
              className="h-full w-full rounded-md object-cover"
            />
          </div>
        </div>

        <p className="mx-auto mb-4 max-w-xl text-base">
          Evolution of the chart view:
        </p>

        {/* Chart evolution demo */}
        <div className="w-full">
          <video
            src="/chart-evolution.mp4"
            className="w-full max-w-none rounded-lg"
            muted
            loop
            controls
          />
        </div>
      </div>

      {/* Footer */}
      <EndOfPage />
    </div>
  );
}
