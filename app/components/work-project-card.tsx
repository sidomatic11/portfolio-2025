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
    <Link href={link} className="col-span-1 h-full sm:col-span-2 lg:col-span-3">
      <div className="group flex flex-col bg-gray-900 p-[1px] hover:bg-amber-500 sm:flex-row">
        {/* Image Section */}
        <div className="relative aspect-[4/3] min-w-2/5 bg-white sm:min-w-1/2 lg:min-w-2/5">
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
        </div>
        {/* Details Section */}
        <div className="flex h-auto flex-col border-t border-gray-900 bg-gray-50 px-4 py-4 text-sm font-light text-gray-900 group-hover:border-amber-500 sm:border-t-0 sm:border-l lg:px-6 lg:py-6">
          {/* Category & Tags */}
          <div className="order-3 mt-8 flex flex-wrap gap-1 font-mono text-xs font-light text-gray-400 lowercase group-hover:text-amber-500 sm:order-1 sm:mt-0 lg:gap-2">
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
          {/* BIG Description */}
          <div className="order-1 flex flex-1 items-end py-2 text-lg font-bold text-gray-700 sm:order-2 md:text-xl lg:mb-2 lg:text-[1.65rem]">
            {description}
          </div>
          {/* SMALLTitle */}
          <div className="order-2 col-span-1 row-span-1 bg-gray-50 sm:order-3">
            <p className="text-base font-light text-gray-600 lg:text-lg">
              {title}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
