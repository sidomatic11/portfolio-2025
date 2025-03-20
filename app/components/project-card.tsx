import Link from "next/link";

export default function ProjectCard({ title, link, newTab = false, children }: { title: string, link: string, newTab?: boolean, children?: React.ReactNode }) {

  return (
    <Link href={link} target={newTab ? "_blank" : "_self"}>
      <div className="bg-gray-200 p-4 rounded-md aspect-square">
        {children}
      </div>
    </Link>
  );
}