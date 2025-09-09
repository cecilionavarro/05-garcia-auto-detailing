import Icon from "./Icon";

interface SectionHeaderProps {
  title: string;
  label: string;
  description: string;
  variant?: "light" | "dark";
}

const SectionHeader = ({
  title,
  label,
  description,
  variant = "light",
}: SectionHeaderProps) => {
  const isDark = variant === "dark";

  return (
    <div
      className={`grid grid-cols-5 gap-5 pb-10 ${
        isDark ? "text-light" : "text-dark"
      }`}
    >
      <h1 className="col-span-full flex flex-row items-center font-bold text-7xl pb-10">
        {title}
        <div className="flex ml-5 align-middle">
          <Icon variant={variant} />
        </div>
      </h1>
      <h2 className="col-start-3 font-mono font-medium">({label})</h2>
      <p className="col-span-2 text-xl">{description}</p>
    </div>
  );
};

export default SectionHeader;
