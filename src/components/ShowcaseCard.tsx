import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface ShowcaseCardProps {
  image: string;
  title: string;
  description: string;
}

export default function ShowcaseCard({
  image,
  title,
  description,
}: ShowcaseCardProps) {
  return (
    <div className="px-8 flex flex-col gap-2">
      <Image src={image} width="1000" height="1000" alt="project-picture" />
      <h2 className="text-2xl font-extrabold">{title}</h2>
      <h3>{description}</h3>
      <button className="bg-green-500 text-white py-1 px-2 mt-2 w-1/2 flex flex-row justify-center rounded drop-shadow-[0_5px_5px_rgba(0,255,0,0.25)] hover:font-bold sm:w-1/4">
        Know more <ChevronRight />
      </button>
    </div>
  );
}
