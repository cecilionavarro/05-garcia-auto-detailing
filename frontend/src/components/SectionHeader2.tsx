import Icon from "./Icon";

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
    <div
      className={`grid grid-cols-5 ${
        isDark ? "text-light" : "text-dark"
      }`}
    >
      <h1 className="col-start-3 flex flex-row items-center font-bold text-8xl pb-10">
        {title}
        <div className="flex ml-5 align-middle">
          <Icon variant={variant} />
        </div>
      </h1>
      <h2 className="col-start-3 col-span-full text-3xl pb-10">{header}</h2>
      <h2 className="col-start-3 font-mono font-medium">({label})</h2>
      <p className="col-span-2 text-xl pb-10">{description}</p>
      <p className="col-start-4 col-span-2 text-xl">{description2}</p>
    </div>
  );
};

export default SectionHeader2;
