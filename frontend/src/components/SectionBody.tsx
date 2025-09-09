import CallButton from "./CallButton";

const SectionBody = ({ image1, image2 }) => {
  return (
    <div className="grid grid-cols-5 grid-rows-[auto_auto_auto] items-start gap-5">
      {/* row 1 */}
      <div className="col-span-2 text-xl flex flex-col gap-10">
        <p>
          I make detailing simple and hassle-free. Most appointments take 2–4
          hours, depending on the service and vehicle size. I arrive fully
          equipped, bringing my own water and electricity, so you don’t need to
          provide anything.
          <br />
          <br />
          To help me work efficiently, please remove any valuables from your
          vehicle before I arrive. Make sure there’s enough parking space so I
          can set up my equipment and work safely. With everything ready, I can
          focus on what I do best — delivering a spotless, show-quality finish
          to your ride.
        </p>
        <div className="col-start-1 text-lg">
          <CallButton />
        </div>
      </div>

      <img
        className="h-100 w-full object-cover rounded-xl"
        src={image1}
        alt=""
      />

      <img
        className="col-span-2 h-100 w-full object-cover rounded-xl"
        src={image2}
        alt=""
      />
    </div>
  );
};

export default SectionBody;
