import Image from 'next/image';

interface PersonChipProps {
  imageUrl: string;
  name: string;
  role: string;
  href?: string; // optional external link for the person
}

export default function PersonChip({ imageUrl, name, role, href }: PersonChipProps) {
  const Chip = (
    <div className="flex items-center gap-2 px-2 py-1 rounded-lg bg-gray-100 border border-gray-200">
      <div className="relative h-8 w-8 rounded-full overflow-hidden border border-gray-200">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-medium text-gray-900">{name}</span>
        <span className="text-xs text-gray-500">{role}</span>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="no-underline text-current cursor-pointer inline-block"
      >
        {Chip}
      </a>
    );
  }

  return Chip;
}