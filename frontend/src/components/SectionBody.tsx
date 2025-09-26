
export interface ServiceGroup {
  title: string;
  items: string[];
}

interface Section {
  image1: string;
  image2: string;
  sections?: ServiceGroup[];
}

const SectionBody = ({ image1, image2, sections }: Section) => {
  return (
    <div className="grid grid-cols-6 grid-rows-[auto_auto_auto] items-start gap-5">
      <img
        className="col-span-2 h-100 w-full object-cover rounded-xl"
        src={image2}
        alt=""
      />
      <img
        className="col-span-2 h-100 w-full object-cover rounded-xl"
        src={image1}
        alt=""
      />
      <img
        className="col-span-2 h-100 w-full object-cover rounded-xl"
        src={image2}
        alt=""
      />

      {sections?.map((sec) => (
        <div key={sec.title} className="col-span-2">
          <h1 className="text-4xl font-medium pb-5 font-bold">{sec.title}</h1>
          {sec.items.map((item, i) => (
            <div key={i} className="grid grid-cols-3 pb-1">
              <h2 className="col-span-full text-xl">{item}</h2>
            </div>
          ))}
        </div>
      ))}
      {!sections && (
        <div className="col-span-full text-xl">
          <p>
            I make detailing simple and hassle-free. Most appointments take 2-4
            hours, depending on the service and vehicle size. I arrive fully
            equipped, bringing my own water and electricity, so you don't need
            to provide anything.
            <br />
            <br />
            To help me work efficiently, please remove any valuables from your
            vehicle before I arrive. Make sure there's enough parking space so I
            can set up my equipment and work safely. With everything ready, I
            can focus on what I do best — delivering a spotless, show-quality
            finish to your ride.
          </p>
        </div>
      )}
    </div>
  );
};

export default SectionBody;
