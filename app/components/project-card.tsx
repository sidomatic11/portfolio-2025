import Link from "next/link";

export default function ProjectCard({ link, newTab = false, children }: { link: string, newTab?: boolean, children?: React.ReactNode }) {

  return (
    <Link href={link} target={newTab ? "_blank" : "_self"}>
      <div className="bg-gray-200 p-6 rounded-md aspect-square">
        {children}
      </div>
    </Link>
  );
}