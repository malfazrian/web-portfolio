interface SectionHeaderProps {
  title: string;
  description: string;
}

export default function SectionHeader({
  title,
  description,
}: SectionHeaderProps) {
  return (
    <header className="flex flex-col justify-center items-center text-center text-inherit p-12 gap-4">
      <h1 className="text-3xl font-extrabold">{title}</h1>
      <p>{description}</p>
    </header>
  );
}
