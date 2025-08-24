import CallButton from "./CallButton";
import Icon from "./Icon";

const CallToAction = () => {
  return (
    <div className="px-10 py-20">
      <div className="relative bg-dark w-full h-[90svh] rounded-xl px-10 py-20">
        <div className="h-full flex flex-col items-center justify-center gap-20">
          <div className="flex flex-col items-center gap-10">
            <h2 className="text-light font-mono">
              (Need a professional clean?)
            </h2>
            <h1 className="text-light font-bold text-9xl text-center">
              LET'S MAKE <br /> THIS HAPPEN
            </h1>
          </div>
          <CallButton />
        </div>

        <div className="absolute flex flex-row justify-between items-center text-light bottom-10 left-10 right-10 font-mono">
          <div className="grid grid-cols-[max-content_1fr] grid-rows-2 border rounded-xl">
            <div className="px-4 py-2 row-span-2 flex items-center justify-center border-r">
                <Icon variant="dark"/>
            </div>
            <h3 className="px-4 py-2 border-b text-left">Mobile Auto Detailing</h3>
            <h3 className="px-4 py-2 text-left">Bakersfield, CA</h3>
          </div>
          <div>
            <h3 className="font-bold text-right">FOR FURTHER INQUIRIES</h3>
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
