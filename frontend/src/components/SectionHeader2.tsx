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
    // <div
    //   className={`grid grid-cols-6 gap-5 ${
    //     isDark ? "text-light" : "text-dark"
    //   }`}
    // >
    //   <h1 className="col-span-full flex flex-row items-center font-bold text-8xl pb-10">
    //     {title}
    //     <div className="flex ml-5 align-middle">
    //       <Icon variant={variant} />
    //     </div>
    //   </h1>
    //   <h2 className="col-span-full text-3xl pb-10">{header}</h2>
    //   <h2 className=" font-mono font-medium text-3xl col-span-2">({label})</h2>
    //   <p className="col-span-4 text-xl">{description}</p>
    //   <p className="col-start-3 col-span-4 text-xl">{description2}</p>
    // </div>
    <div className={`grid gap-5 md:grid-cols-6 ${isDark ? "text-light" : "text-dark"}`}>
      <h1 className="flex flex-row font-bold items-center text-5xl gap-5 md:text-8xl md:col-span-full">
        {title}
        <div className="flex align middle hidden md:block">
          <Icon variant={variant} />
        </div>
      </h1>
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
