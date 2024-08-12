import Image from "next/image";

interface TestimonyCardProps {
  testimony: string;
  imageUrl: string;
  name: string;
}

export default function TestimonyCard({
  testimony,
  imageUrl,
  name,
}: TestimonyCardProps) {
  return (
    <div className="relative">
      <div className="relative z-0 px-10 py-12 border-2 rounded-lg bg-inherit">
        <div>
          <p className="text-slate-300">{testimony}</p>
          <div className="flex items-center mt-4">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
              <Image src={imageUrl} width={48} height={48} alt="profile-pic" />
            </div>
            <p>{name}</p>
          </div>
        </div>
      </div>
      <span className="absolute -top-5 left-0 text-7xl bg-inherit px-2 z-10 font-serif">
        “
      </span>
    </div>
  );
}
