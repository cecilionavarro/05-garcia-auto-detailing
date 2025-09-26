interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

interface Props {
  item: FaqItem;
  isOpen: boolean;
  onClick: () => void;
}

const Question = ({ item, isOpen, onClick }: Props) => {
  const { id, question, answer } = item;
  return (
    <div
      key={id}
      onClick={onClick}
      className={`pt-5 col-start-3 col-span-full flex flex-col border-b first:border-t " ${isOpen ? "hover:text-dark" : "hover:text-[#a48850] border-dark"}`}
    >
      <div className="grid grid-cols-4 gap-10">
        <h3 className="font-mono font-bold pb-5">0{id}</h3>
        <h3 className="col-span-2 font-bold">{question}</h3>
      </div>
      <div
        className={[
          "col-span-full grid grid-cols-4 gap-10 ease-in-out duration-300 overflow-hidden",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        ].join(" ")}
      >
        <p className="col-start-2 col-span-2 pb-5 overflow-hidden">{answer}</p>
      </div>
    </div>
  );
};

export default Question;
