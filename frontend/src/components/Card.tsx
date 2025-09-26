import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  price?: number;
  label?: string;
  description: string;
  image: string;
  slug?: string;
}

const Card = ({ title, label, price, description, image, slug }: CardProps) => {
  return (
    <div key={slug} className="flex flex-col gap-5">
      <img
        className="object-cover w-full h-100 rounded-xl"
        src={image}
        alt={title}
      ></img>
      <div>
        <h1 className="font-medium text-4xl">{title}</h1>
        {label && <p className="text-lg font-mono font-medium text-[#a48850]">{label}</p>}
        {price && (
          <p className="text-lg font-mono text-accent">Starting at ${price}</p>
        )}
      </div>
      <p className="text-xl">{description}</p>
      {slug && <Link
        to={`/services#${slug}`}
        className="inline-block bg-brand text-white px-20 py-4 rounded-full hover:bg-[#ae3f40] w-fit"
      >
        VIEW SERVICE DETAILS
      </Link>}
    </div>
  );
};

export default Card;
