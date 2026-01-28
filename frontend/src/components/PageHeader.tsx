import Icon from "./Icon";
import BlurText from "./ui/BlurText";

interface PageHeaderProps {
    title: string;
}

const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <div className="px-5 py-10 md:px-10 md:py-20 pt-40">
      <div className="col-span-full flex flex-row items-center font-bold text-5xl md:text-8xl pb-10 md:pt-20">
        <BlurText
          text={title}
          delay={5}
          animateBy="words"
          direction="bottom"
          className="font-bold text-5xl md:text-8xl"
        />
        <div className="flex ml-5 align-middle">
          <Icon />
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
