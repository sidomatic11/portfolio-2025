import Image from "next/image";
import Link from "next/link";

/**
 * WorkProjectCard - Displays a project card with title, image, description and tags
 * Used in the work section of the homepage to showcase portfolio projects
 */

interface WorkProjectCardProps {
  link: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  tags: string[];
}

export default function WorkProjectCard({
  link,
  title,
  imageSrc,
  imageAlt,
  description,
  tags,
}: WorkProjectCardProps) {
  return (
    <Link href={link} className="h-full">
      <div className="group flex h-full flex-col gap-[1px] bg-gray-900 p-[1px] hover:bg-amber-500">
        <div className="bg-gray-50 px-3 py-3">
          <p className="text-md font-bold text-gray-900">{title}</p>
        </div>
        <div className="relative aspect-[4/3] w-full flex-1 bg-white">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain object-bottom"
          />
        </div>
        <div className="flex h-auto flex-grow flex-col justify-between bg-gray-50 px-3 py-4 text-sm font-light text-gray-900">
          <div className="mb-4 text-base font-light text-gray-500">
            {description}
          </div>
          <div className="flex flex-wrap gap-1 font-mono text-xs leading-[1.5] font-light tracking-wide text-gray-400 lowercase group-hover:text-amber-500">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block rounded-sm bg-gray-200 px-1 py-0.5 font-mono text-xs text-gray-500 transition-colors duration-150 group-hover:text-amber-500"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
