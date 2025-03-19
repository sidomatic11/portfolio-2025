import Link from "next/link";

export default function ProjectCard({ title, link, children }: { title: string, link: string, children?: React.ReactNode }) {

  return (
    <Link href={link}>
      <div className="bg-gray-200 p-4 rounded-md h-64">
        <h2 className="text-lg font-bold">{title}</h2>
        {children}
      </div>
    </Link>
  );
}