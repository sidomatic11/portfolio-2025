import Header from "@/app/components/header";

export default function CodeAbstraction() {
  return (
    <div className="min-h-screen bg-white">
      <Header isProjectHeader={true} />

      <div className="max-w-prose mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Code Abstraction</h1>
        <div className="prose max-w-none">
          <p className="text-xl mb-8">Exploring different patterns and techniques of code abstraction.</p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">About</h2>
            <p>
              This project delves into various abstraction techniques in software development,
              from simple function abstractions to complex design patterns. Learn how to write
              more maintainable and reusable code through effective abstraction.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Examples</h2>
            <div className="bg-gray-100 rounded-lg p-6">
              <p className="text-gray-500">Examples coming soon...</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
