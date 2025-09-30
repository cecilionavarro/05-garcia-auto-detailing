import CallButton from "./CallButton";
import Icon from "./Icon";

const CallToAction = () => {
  return (
    <div className="px-5 py-10 md:px-10 md:py-20">
      <div className="relative bg-dark w-full h-[90svh] rounded-xl px-5 py-10 md:px-10 md:py-20">
        <div className="h-full flex flex-col items-center justify-center gap-10 md:gap-20 ">
          <div className="flex flex-col items-center gap-5 md:gap-10">
            <h2 className="text-light font-mono font-medium md:text-xl">
              (Need a professional clean?)
            </h2>
            <h1 className="text-light font-bold text-center text-5xl md:text-8xl lg:text-9xl">
              LET'S MAKE <br /> THIS HAPPEN
            </h1>
          </div>
          <CallButton />
        </div>

        <div className="absolute flex md:flex-row items-center justify-center text-light bottom-5 left-5 right-5 md:justify-between md:bottom-10 md:left-10 md:right-10 font-mono">
          <div className="hidden md:grid grid-cols-[max-content_1fr] grid-rows-2 border rounded-xl">
            <div className="px-4 py-2 row-span-2 flex items-center justify-center border-r">
                <Icon variant="dark"/>
            </div>
            <h3 className="px-4 py-2 border-b text-left">Mobile Auto Detailing</h3>
            <h3 className="px-4 py-2 text-left">Bakersfield, CA</h3>
          </div>
          <div>
            <h3 className="font-bold md:text-right">FOR FURTHER INQUIRIES</h3>
            <a
              href="mailto:garciadetails84@gmail.com"
              className="font-mono text-right hover:text-accent"
            >
               ⮡ garciadetails84@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
