import Header from "@/app/components/header";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header isProjectHeader={true} />

      <div className="max-w-prose mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">POC Development — Critical patient monitoring system</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl mb-8">
            In a groundbreaking proof-of-concept (POC) project for IHH Healthcare Berhad, our team successfully demonstrated the integration of multiple critical medical devices into a unified, real-time monitoring system. This innovative solution transformed manual patient monitoring processes into an automated, highly accurate system that enhances patient care and reduces nursing workload.
          </p>

          <p className="text-xl mb-12">
            The project, completed in just two months, positioned us alongside industry giant Philips as a top contender in the RFP phase.
          </p>

          <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
          <p className="text-xl mb-4">Nurses and Doctors face several critical challenges in patient monitoring:</p>
          <ul className="list-disc pl-6 mb-8 text-lg">
            <li>Manual recording of patient vitals by nurses, leading to potential human errors</li>
            <li>Limited frequency of vital sign monitoring due to staff constraints</li>
            <li>Fragmented data from multiple medical devices with no unified view</li>
            <li>Time-consuming calculations for critical parameters like fluid balance</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4">Technical challenge:</h3>
          <p className="text-lg mb-12">Complex device ecosystem with non-standardized communication protocols</p>

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

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Before</h3>
              <p className="text-lg">physical charts that nurses use and are familiar with:</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">After</h3>
              <p className="text-lg">We matched the digital monitoring interface to these charts so it is easy for nurses to adapt</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6">Impact and Results</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Clinical Benefits:</h3>
              <ul className="list-disc pl-6 text-lg">
                <li>24/7 continuous monitoring</li>
                <li>Reduced nursing workloads and error rates</li>
                <li>Automated emergency alerts for critical conditions</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Operational Improvements:</h3>
              <ul className="list-disc pl-6 text-lg">
                <li>Eliminated manual data entry errors</li>
                <li>Real-time, HL7-compliant data capture at 5-second intervals</li>
                <li>Streamlined digital record-keeping</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Technical Achievements:</h3>
              <ul className="list-disc pl-6 text-lg">
                <li>Integrated 10+ device types</li>
                <li>Compliant with HIPAA and healthcare standards</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
