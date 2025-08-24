import { useState } from "react";
import Question from "./Question";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const data: FaqItem[] = [
  {
    id: 1,
    question: "Do you offer paint correction?",
    answer: "Yes. For paint correction, drop-off may be required.",
  },
  {
    id: 2,
    question: "What types of vehicles do you service?",
    answer: "Cars, trucks, SUVs, RVs, boats, motorcycles, and fleets.",
  },
  {
    id: 3,
    question: "Do you come to my location?",
    answer: "Yes—mobile only. I come to you.",
  },
  { id: 4, question: "Which areas do you serve?", answer: "Bakersfield only." },
  {
    id: 5,
    question: "How far in advance should I schedule?",
    answer: "Please book 2-3 days in advance.",
  },
  {
    id: 6,
    question: "Do you offer same-day or emergency service?",
    answer: "Sometimes—call to check availability.",
  },
  {
    id: 7,
    question: "Do you require a deposit?",
    answer:
      "No deposit except for paint correction & ceramic coatings (non-refundable).",
  },
  {
    id: 8,
    question: "What payment methods do you accept?",
    answer: "Cash, Zelle, Apple Pay, debit, and credit.",
  },
  {
    id: 9,
    question: "How long does a detail take?",
    answer: "Typically 2-4 hours for a complete detail.",
  },
  {
    id: 10,
    question: "Do you guarantee your work?",
    answer:
      "Yes—We do a walkthrough before I leave and I'll fix touch-ups on the spot.",
  },
];


const Faq = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const showAnswer = (item: number) => {
    setOpenId(openId === item ? null : item)
  };
  return (
    <div className="px-10 pt-10 grid grid-cols-5">
      {data.map((item: FaqItem) => {
        return (
          <Question
            key={item.id}
            item={item}
            onClick={() => showAnswer(item.id)}
            isOpen={openId === item.id}
          />
        );
      })}
    </div>
  );
};

export default Faq;
