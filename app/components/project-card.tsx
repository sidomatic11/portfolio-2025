import Link from "next/link";

export default function ProjectCard({
  link,
  newTab = false,
  children,
}: {
  link: string;
  newTab?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <Link href={link} target={newTab ? "_blank" : "_self"}>
      <div className="grid grid-rows-[1fr_auto] border border-gray-900 bg-gray-50 p-6 hover:border-amber-500">
        <div className="relative h-0 w-full pb-[100%]">
          <div className="absolute inset-0">{children}</div>
        </div>
      </div>
    </Link>
  );
}
