import Header from "@/app/components/header";

export default function VerticalCalendar() {
  return (
    <div className="min-h-screen bg-white">
      <Header isProjectHeader={true} />

      <div className="max-w-prose mx-auto px-4 py-12">
        Exploring Vertical Calendar
      </div>

    </div>
  );
}