import Header from "@/app/components/header";
import PersonChip from "@/app/components/PersonChip";

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

        <hr className="my-12" />

        <div className="max-w-xl mx-auto">
          <p className="text-2xl mb-2 font-semibold">Objective</p>
          <p className="text-xl font-light mb-8">POC for transforming the manual patient monitoring processes into an automated, highly accurate system that enhances patient care and reduces nursing workload.</p>
          <ul className="list-disc pl-6 text-lg">

          </ul>
        </div>

        <div className="max-w-xl mx-auto">
          <p className="text-2xl mb-2 font-semibold">Results</p>
          <ul className="list-none text-xl font-light pl-0 mb-8">
            <li className="flex items-start gap-2 mb-2">
              <span>✅</span>
              <span>Real time data capture at 5s intervals + Automated alerts = major nursing overload reduced</span>
            </li>
            <li className="flex items-start gap-2 mb-2">
              <span>✅</span>
              <span>10+ types of devices integrated — modern as well as legacy devices</span>
            </li>
            <li className="flex items-start gap-2 mb-2">
              <span>❤️</span>
              <span>Bespoke nursing chart UX, closely aligning with their needs and habits</span>
            </li>
            <li className="flex items-start gap-2 mb-2">
              <span>🏆</span>
              <span>Top contender alongside industry giant Philips for the RFP phase</span>
            </li>
          </ul>
        </div>

        <div className="prose prose-lg max-w-none mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
          <p className="text-xl mb-12">A comprehensive integration platform that unifies critical care devices:</p>

          <h2 className="text-3xl font-bold mb-6">My Contributions</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Hardware integration prep</h3>
              <ul className="list-disc pl-6 text-lg">
                <li>Connecting to devices via RS232 and RJ45</li>
                <li>Connections via IoT adapter</li>
                <li>Custom connector cables</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">UI Development</h3>
              <ul className="list-disc pl-6 text-lg">
                <li>Chart prototypes</li>
                <li>Built the chart view shown above</li>
                <li>Backend integration</li>
                <li>Bespoke UX built with daily feedback from healthcare professionals</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full">
          <video
            src="/test-poc-demo.mov"
            className="w-full max-w-none rounded-lg"
            autoPlay
            muted
            loop
          />
        </div>
      </div>
    </div>
  );
}
