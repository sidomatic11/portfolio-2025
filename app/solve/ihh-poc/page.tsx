import Header from "@/app/components/header";
import PersonChip from "@/app/components/PersonChip";
import EndOfPage from "@/app/components/EndOfPage";
export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header isProjectHeader={true} />

      <div className="w-full py-12">
        <h1 className="max-w-xl mx-auto text-3xl font-bold mb-8">POC Development — Critical patient monitoring system</h1>

        <div className="sm:flex sm:gap-12 max-w-xl mx-auto">
          <div className="max-w-xl sm:w-2/3">
            <p className="text-base mb-1 font-semibold">Client</p>
            <p className="text-base mb-8"> IHH Healthcare Berhad — Pantai Hospital Klang & Gleneagles Hospital Johor</p>
          </div>

          <div className="max-w-xl sm:w-1/3">
            <p className="text-base mb-1 font-semibold">Timeline</p>
            <p className="text-base mb-8">2 months</p>
          </div>
        </div>

        <div className="max-w-xl mx-auto mb-12">
          <p className="text-base mb-1 font-semibold">Team</p>
          <div className="flex flex-row gap-2 flex-wrap">
            <PersonChip imageUrl="/rajnikanth.jpeg" name="Rajnikanth" role="Team Lead" />
            <PersonChip imageUrl="/vidit.jpeg" name="Vidit" role="Engineer" />
            <PersonChip imageUrl="/siddhant.jpg" name="Me" role="Engineer" />
          </div>
        </div>

        <hr className="my-12 max-w-xl mx-auto" />

        <div className="max-w-xl mx-auto">
          <p className="text-xl mb-2 font-semibold">Objective</p>
          <p className="text-base mb-8">Transforming the manual patient monitoring processes into an automated, highly accurate system that enhances patient care and reduces nursing workload. POC phase.</p>
          <ul className="list-disc pl-6 text-lg">

          </ul>
        </div>

        <div className="max-w-xl mx-auto">
          <p className="text-xl mb-2 font-semibold">Results</p>
          <ul className="list-none text-base pl-0 mb-8">
            <li className="flex items-baseline gap-2 mb-3">
              <span className="text-sm">✅</span>
              <span>Real time data capture at 5s intervals + Automated alerts = major nursing overload reduced</span>
            </li>
            <li className="flex items-baseline gap-2 mb-3">
              <span className="text-sm">✅</span>
              <span>10+ types of devices integrated — modern as well as legacy devices</span>
            </li>
            <li className="flex items-baseline gap-2 mb-3">
              <span className="text-sm">❤️</span>
              <span>Bespoke nursing chart UX, closely aligning with their needs and habits</span>
            </li>
            <li className="flex items-baseline gap-2 mb-3">
              <span className="text-sm">🏆</span>
              <span>Top contender alongside industry giant Philips for securing the full-scale project</span>
            </li>
          </ul>
        </div>

        <hr className="my-12 max-w-xl mx-auto" />

        <h2 className="max-w-xl mx-auto text-2xl font-bold mb-6">Our Solution</h2>

        <div className="max-w-xl mx-auto bg-gray-100 p-4 rounded-lg mb-8">
          <img src="/diagram.png" alt="POC solution" className="max-w-64 mx-auto rounded-lg" />
        </div>

        <div className="max-w-xl mx-auto mb-8">
          <img src="/nurses.jpg" alt="POC solution" className="w-full h-auto rounded-lg" />
        </div>

        <div className="w-full mb-16">
          <video
            src="/chart-overview.mp4"
            className="w-full max-w-none rounded-lg"
            autoPlay
            muted
            loop
          />
          <p className="max-w-xl mx-auto text-sm text-gray-500 mt-1">Nursing chart dashboard</p>
        </div>

        <hr className="my-12 max-w-xl mx-auto" />

        {/* <h2 className="max-w-xl mx-auto text-2xl font-bold mb-6">My Contributions</h2> */}
        <h3 className="max-w-xl mx-auto text-2xl font-semibold mb-4">I worked on figuring out how to connect with certain medical devices...</h3>
        <ul className="max-w-xl mx-auto list-disc pl-6 text-base mb-8">
          <li>RS232 communication via DB and RJ45 connectors</li>
          <li>Data parsing</li>
          <li>Making custom connectors and exploring RS232 to Ethernet converters</li>
        </ul>

        <div className="max-w-xl mx-auto mb-16">
          <video
            src="/rs232.mp4"
            className="w-full max-w-none rounded-lg"
            autoPlay
            muted
            loop
          />
          <p className="text-sm text-gray-500 mt-1">The first RS232 connection 🎉</p>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <img
              src="/hardware-prep-1.jpg"
              alt="Hardware preparation step 1"
              className="w-full h-auto rounded-lg"
            />
            <img
              src="/hardware-prep-2.jpg"
              alt="Hardware preparation step 2"
              className="w-full h-auto rounded-lg"
            />
            <img
              src="/hardware-prep-3.jpg"
              alt="Hardware preparation step 3"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <p className="text-sm text-gray-500 mt-1">Explorations, Hacks and Solutions</p>
        </div>



        <h3 className="max-w-xl mx-auto text-2xl font-semibold mb-4">...and was responsible for building the Nursing Chart dashboard</h3>

        <p className="max-w-xl mx-auto text-base mb-4">We learnt about their existing practices, and taking regular feedback, built the chart view to be exactly what they needed.</p>

        <div className="w-full bg-gray-200 p-4 rounded-lg mb-8 flex flex-row gap-4 overflow-hidden">
          <div className="flex-1 overflow-hidden">
            <img src="/current-state-1.jpg" alt="Current state" className="w-full h-full rounded-lg object-cover" />
          </div>
          <div className="flex-1 overflow-hidden">
            <img src="/current-state-2.jpg" alt="Current state" className="w-full h-full rounded-lg object-cover" />
          </div>
        </div>

        <p className="max-w-xl mx-auto text-base mb-4">Evolution of the chart view:</p>

        <div className="w-full">
          <video
            src="/chart-evolution.mp4"
            className="w-full max-w-none rounded-lg"
            autoPlay
            muted
            loop
          />
        </div>
      </div>

      <EndOfPage />
    </div>
  );
}
