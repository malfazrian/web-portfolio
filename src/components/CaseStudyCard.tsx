import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

interface CaseStudyCardProps {
  tag: string;
  title: string;
  description: string;
  image: string;
  color: string;
  isReverse: boolean;
}

export default function CaseStudyCard({
  tag,
  title,
  description,
  image,
  color,
  isReverse,
}: CaseStudyCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={clsx("flex flex-col-reverse mb-12", {
        "sm:flex-row": !isReverse,
        "sm:flex-row-reverse": isReverse,
      })}
    >
      <div className="flex flex-col justify-center sm:w-1/2">
        <p
          className={clsx(
            "w-1/2 px-2 rounded-full text-center mb-6 sm:w-1/4",
            `bg-${color}-100`,
            `text-${color}-600`
          )}
        >
          {tag}
        </p>
        <h1 className="text-xl font-bold mb-2">{title}</h1>
        <p className="text-gray-500 mb-4">{description}</p>
        <button
          type="button"
          className={clsx(
            "group mt-6 px-8 py-2 text-white flex justify-center gap-4 sm:w-1/2",
            `bg-${color}-400`
          )}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          View case study
          <ChevronRight
            className={clsx("relative animate-bounce-right", {
              pause: hovered,
            })}
          />
        </button>
      </div>
      <div className="sm:w-1/2 rounded overflow-hidden flex items-center justify-center">
        <Image src={image} width={500} height={500} alt={`${title} Image`} />
      </div>
    </div>
  );
}
