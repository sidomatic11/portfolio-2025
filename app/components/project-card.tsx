import Link from "next/link";

export default function ProjectCard({ link, newTab = false, children }: { link: string, newTab?: boolean, children?: React.ReactNode }) {

  return (
    <Link href={link} target={newTab ? "_blank" : "_self"}>
      <div className="bg-gray-50 border border-gray-300 p-6 grid grid-rows-[1fr_auto]">
        <div className="w-full h-0 pb-[100%] relative">
          <div className="absolute inset-0">
            {children}
          </div>
        </div>
      </div>
    </Link>
  );
}