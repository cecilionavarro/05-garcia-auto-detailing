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
    // <div
    //   className={`grid grid-cols-6 gap-5 pb-10 ${
    //     isDark ? "text-light" : "text-dark"
    //   }`}
    // >
    //   <h1 className="col-span-full flex flex-row items-center font-bold text-7xl pb-10">
    //     {title}
    //     <div className="flex ml-5 align-middle">
    //       <Icon variant={variant} />
    //     </div>
    //   </h1>
    //   <h2 className="col-span-2 font-mono font-medium text-3xl">({label})</h2>
    //   <p className="col-span-2 text-xl col-span-4">{description}</p>
    // </div>
    <div className={`grid gap-5 pb-5 ${isDark ? "text-light" : "text-dark"} md:grid-cols-6 md:pb-10 md:gap-10`}>
      <h1 className="flex items-center font-bold text-5xl md:col-span-full md:text-7xl">
        {title}
        <div className="flex align-middle ml-5 hidden md:block">
          <Icon variant={variant} />
        </div>
      </h1>
      <div className="flex gap-5 md:col-span-2">
        <h2 className="text-2xl font-medium font-mono">({label})</h2>
        <div className="flex items-center block md:hidden">
          <Icon variant={variant} />
        </div>
      </div>
      <p text-md className="md:col-span-4 md:text-xl">{description}</p>

    </div>
  );
};

export default SectionHeader;
