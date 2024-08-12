import clsx from "clsx";

interface SectionProps {
  children: React.ReactNode;
  bgColor: string;
  textColor: string;
  idSection: string;
}

export default function Section({
  children,
  bgColor,
  textColor,
  idSection,
}: SectionProps) {
  return (
    <section
      className={clsx("mx-auto p-6 sm:w-screen sm:p-12", bgColor, textColor)}
      id={idSection}
    >
      {children}
    </section>
  );
}
