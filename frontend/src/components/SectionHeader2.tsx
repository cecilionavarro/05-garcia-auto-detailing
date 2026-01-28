import Icon from "./Icon";
import BlurText from "./ui/BlurText";

interface SectionHeaderProps {
  title: string;
  header: string;
  label: string;
  description: string;
  description2: string;
  variant?: "light" | "dark";
}

const SectionHeader2 = ({
  title,
  header,
  label,
  description,
  description2,
  variant = "light",
}: SectionHeaderProps) => {
  const isDark = variant === "dark";

  return (
    <div className={`grid gap-5 md:grid-cols-6 ${isDark ? "text-light" : "text-dark"}`}>
      <div className="flex flex-row items-center md:col-span-full gap-5">
        <BlurText
          text={title}
          delay={5}
          animateBy="words"
          direction="bottom"
          className="font-bold text-5xl md:text-8xl"
        />
        <div className="flex align middle hidden md:block">
          <Icon variant={variant} />
        </div>
      </div>
      <h2 className="text-xl md:col-span-full md:text-3xl">{header}</h2>
      <div className="flex gap-5 font-mono font-medium text-2xl md:col-span-2">
        ({label})
        <div className="flex items-center block md:hidden">
          <Icon variant={variant} />
        </div>
      </div>
      <p className="md:col-span-4 md:text-xl">{description}</p>
      <p className="md:col-start-3 md:col-span-4 md:text-xl">{description2}</p>
    </div>
  );
};

export default SectionHeader2;
