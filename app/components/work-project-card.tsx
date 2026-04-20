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
  category: string;
  tags: string[];
}

export default function WorkProjectCard({
  link,
  category,
  title,
  imageSrc,
  imageAlt,
  description,
  tags,
}: WorkProjectCardProps) {
  return (
    <Link href={link} className="h-full">
      <div className="group bg-background-level-1 border-border-level-1 relative flex flex-col border p-[1px] hover:border-amber-500 sm:flex-row">
        {/* Image Section */}
        <div className="relative min-w-2/5 p-8 sm:min-w-1/2 sm:p-12 lg:min-w-2/5">
          <div className="relative z-1 aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
            />
          </div>
          <div className="border-border-level-1 absolute top-[-1px] left-[-1px] z-0 h-[calc(50%)] w-[calc(50%+1px)] border-r sm:h-[calc(100%+2px)]"></div>

          <div className="border-border-level-1 absolute top-[-1px] left-[-1px] z-0 h-[calc(50%+1px)] w-[calc(100%+2px)] border-b sm:w-1/2"></div>
        </div>
        {/* Details Section */}
        <div className="flex h-auto flex-col px-8 pt-0 pb-8 text-sm font-light text-gray-900 sm:py-12 sm:pr-12 sm:pl-0">
          {/* BIG Description */}
          <div className="pb-2 text-lg font-bold text-gray-700 md:text-xl lg:mb-2 lg:text-[1.65rem]">
            {description}
          </div>
          {/* SMALLTitle */}
          <div className="col-span-1 row-span-1 bg-gray-50">
            <p className="text-base font-light text-gray-600 lg:text-lg">
              {title}
            </p>
          </div>
          {/* Category & Tags */}
          <div className="mt-8 flex flex-wrap gap-1 font-mono text-xs font-light text-gray-400 lowercase lg:gap-2">
            <span className="inline-block rounded-sm bg-gray-500 px-1 py-0.5 text-white transition-colors duration-150 lg:px-2 lg:py-1">
              {category}
            </span>
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block rounded-sm bg-gray-200 px-1 py-0.5 text-gray-500 transition-colors duration-150 group-hover:text-amber-500 lg:px-2 lg:py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute right-0 bottom-0 inline-flex h-8 items-center bg-gray-900/80 px-6 font-mono text-xs font-light text-white backdrop-blur-sm group-hover:bg-amber-500 group-hover:text-slate-800 sm:h-12">
          Learn more
        </div>
      </div>
    </Link>
  );
}
