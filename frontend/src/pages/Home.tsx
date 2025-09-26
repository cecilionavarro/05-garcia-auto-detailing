import Hero from "../assets/home-hero.webp";
import CallToAction from "../components/CallToAction";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import SectionHeader2 from "../components/SectionHeader2";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import imgConvenience from "../assets/benefits/IMG_1101.webp";
import imgGuarantee from "../assets/benefits/IMG_0172.webp";
import imgExpertise from "../assets/benefits/IMG_6871.webp";
import cta1 from "../assets/cta/IMG_5763.webp";
import cta2 from "../assets/cta/IMG_0478.webp";
import cta3 from "../assets/cta/IMG_1723.webp";
import cta4 from "../assets/cta/IMG_7798.webp";
import img1 from "../assets/services/IMG_1480.webp";
import img2 from "../assets/services/IMG_7818.webp";
import img3 from "../assets/services/IMG_0579.webp";
import img4 from "../assets/services/IMG_6871.webp";
import membership1 from "../assets/IMG_0250.webp"
import membership2 from "../assets/IMG_9925.webp"
import BMWLogo from "../assets/car-logos/BMW.svg";
import CorvetteLogo from "../assets/car-logos/Logo_Corvette_-Transparency.png";
import MercedesLogo from "../assets/car-logos/Mercedes-Benz_Star.svg";
import PorscheLogo from "../assets/car-logos/Porsche_Logo.svg.png";
import LexusLogo from "../assets/car-logos/lexus_logo.svg.png";
import TelsaLogo from "../assets/car-logos/tesla_logo.svg.png";
import process1 from "../assets/IMG_4045.webp"
import process2 from "../assets/IMG_4651.webp"

import Card from "../components/Card";
import CallButton from "../components/CallButton";
import SectionBody from "../components/SectionBody";

interface CardItem {
  review: String;
  name: String;
}

const reviews: CardItem[] = [
  {
    review:
      "Brian did a fantastic job on my classic Corvette. The engine shines! The whole car sparkles! Thank you!",
    name: "Linda Stacey",
  },
  {
    review:
      "Brian took his time and did an amazing job. My truck was chain smoked in with the windows up and he was still able to get rid of the smell!",
    name: "Christian Rodriguez",
  },
  {
    review:
      "Had a great experience with Garcia Auto Detailing! They arrived on time, completed the job in the estimated time frame, and my car looked great when they were done! I will be using them again!",
    name: "Danielle S",
  },
  {
    review:
      "Brian did a fantastic job and made my car look brand new, like it just came off the lot. He gives good prices for the work he does. I would recommend him to clean your vehicle.",
    name: "Caitlyn Hill",
  },
  {
    review:
      "First off they have very great customer service. Reasonable price, Brian is a friendly guy as well. I had some super bad stains on my car’s rear seats that were left there for too long, Brian worked his magic and left my seat looking great again! And left my car nice and shiny ✨ Definitely recommend his services and will be a repeat customer.",
    name: "Daniel Meza",
  },
  {
    review:
      "Exceptional service! Just had my car detailed and it came out amazing. The interior is spotless, it looks like a brand new car. The outside is clean, shiny and stands out compared to before. Definitely coming back.",
    name: "Robert Jimenez",
  },
];

const services = [
  {
    title: "Interior & Exterior Detail",
    price: 249,
    description:
      "I bring the shine to you — no lines, no waiting. Fully equipped, I detail your vehicle wherever it's parked so you can get on with your day.",
    image: img1,
    slug: "interior-exterior-detail",
  },
  {
    title: "Interior Only Detail",
    price: 199,
    description:
      "I bring the shine to you — no lines, no waiting. Fully equipped, I detail your vehicle wherever it's parked so you can get on with your day.",
    image: img2,
    slug: "interior-detail",
  },
  {
    title: "Paint Restoration",
    price: 499,
    description:
      "I bring the shine to you — no lines, no waiting. Fully equipped, I detail your vehicle wherever it's parked so you can get on with your day.",
    image: img4,
    slug: "paint-restoration",
  },
];

export const benefits = [
  {
    title: "Convenience",
    label: "Mobile Detailing",
    description:
      "I bring the shine to you — no lines, no waiting. Fully equipped, I detail your vehicle wherever it's parked so you can get on with your day.",
    image: imgConvenience,
  },
  {
    title: "My Guarantee",
    label: "Satisfaction Promise",
    description:
      "I will not leave until you're happy. If something's not perfect, I'll fix it right there before handing back your keys.",
    image: imgGuarantee,
  },
  {
    title: "Expertise",
    label: "All Vehicle Types",
    description:
      "From luxury cars and classics to trucks, RVs, boats, and motorcycles, I've detailed them all — and we know exactly where dirt hides.",
    image: imgExpertise,
  },
];

const Home = () => (
  <div className="bg-light">
    <div className="relative h-[80vh] w-full">
      <img
        src={Hero}
        alt="car interior"
        className="absolute h-full w-full object-cover"
      />
      {/* <div className="relative z-1 grid grid-cols-[1fr_2fr] h-full bg-black/40 px-10 py-20"> */}
      <div className="relative z-1 grid grid-cols-[1fr_2fr] h-full bg-black/40 px-10 py-20">
        <div className="flex flex-col justify-end text-light">
          <h2 className="text-xxl font-mono font-medium">
            IT'S ALL IN THE DETAILS
          </h2>
          <h1 className="text-9xl font-bold">
            GARCIA AUTO DETAILING
            <span className="text-5xl align-top relative top-3.5">&copy;</span>
          </h1>
        </div>
        <div className="flex flex-col justify-end text-right text-light">
          <h2 className="font-mono font-medium">
            AVAILABLE FOR MOBILE AUTO DETAILING WORK
          </h2>
          <h1 className="text-6xl font-bold whitespace-nowrap">
            BAKERSFIELD, CA
          </h1>
        </div>
      </div>
    </div>

    <Section>
      <SectionHeader
        title="WORK YOU CAN TRUST"
        label="BENEFITS"
        description="When you choose my services, you get more than just a clean car—you get expert care, attention to detail, and results that last. Using professional-grade products and proven techniques, I make sure your vehicle not only looks amazing but is also protected for the long run."
      />
      <div className="grid grid-cols-3 gap-5">
        {benefits.map((benefits) => (
          <Card key={benefits.title} {...benefits} />
        ))}
      </div>
    </Section>

    <Section>
      <div className="leading-none flex flex-col">
        <h2 className="font-bold text-5xl">MOBILE DETAILING IN</h2>
        <div className="flex justify-between">
          <p className="text-[12rem]">→</p>
          <h1 className="relative font-bold text-[12rem]">
            <span className="relative text-accent">
              <em>MOTION</em>
            </span>
            <span className="aria-hidden absolute inset-0 text-brand translate-x-2">
              <em>MOTION</em>
            </span>
            <span className="aria-hidden absolute inset-0 text-dark translate-x-4">
              <em>MOTION</em>
            </span>
          </h1>
        </div>
      </div>
    </Section>

    <div className="rounded-t-full w-full h-10 bg-dark"></div>
    <Section dark>
      <SectionHeader
        title="HOW I CAN HELP"
        label="SERVICES"
        description="Tired of spending money on car washes that barely make a difference? I provide premium mobile detailing that eliminates swirl marks, restores shine, protects your paint, and leaves every inch of your car looking brand new."
        variant="dark"
      />
      <div className="grid grid-cols-3 gap-5">
        {services.map((service) => (
          <Card key={service.slug} {...service} />
        ))}
      </div>
    </Section>

    <Section dark>
      <div className="leading-none flex justify-between">
        <h1 className="font-bold text-[12rem]">5</h1>
        <h1 className="font-bold text-[12rem] text-accent">STARS</h1>
      </div>
      <SectionHeader
        title="DON'T TAKE MY WORD FOR IT"
        label="PROCESS"
        description="Your trust means everything to me. I'm proud to share what my clients have to say about the results, the service, and the care I put into every detail. Everything from valuable classic cars to high-end luxury vehicles, as well as everyday drivers."
        variant="dark"
      />

      <div className="grid grid-cols-3 gap-5">
        {reviews.map(({ review, name }, i) => (
          <div
            key={i}
            className="flex flex-col justify-between gap-10 min-h-80 h-auto text-xl text-light backdrop-blur-lg p-5 rounded-xl border border-light"
          >
            <p>{review}</p>
            <div className="flex justify-between">
              <div className="text-accent">
                <FontAwesomeIcon icon={solidStar} />
                <FontAwesomeIcon icon={solidStar} />
                <FontAwesomeIcon icon={solidStar} />
                <FontAwesomeIcon icon={solidStar} />
                <FontAwesomeIcon icon={solidStar} />
              </div>
              <p>{name}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>

    <Section dark>
      <div className="flex items-center justify-between">
        <img src={PorscheLogo} alt="Porsche" className="h-20" />
        <img src={MercedesLogo} alt="Mercedes-Benz" className="h-20" />
        <img src={CorvetteLogo} alt="Corvette" className="h-20" />
        <img src={LexusLogo} alt="Lexus" className="h-20" />
        <img src={BMWLogo} alt="BMW" className="h-20" />
        <img src={TelsaLogo} alt="Tesla" className="h-20" />
      </div>
    </Section>

    <Section dark>
      <div className="h-full flex flex-col items-center justify-center gap-20">
        <div className="flex flex-col items-center gap-10">
          <h2 className="text-light font-mono">
            (Because Every Detail Matters)
          </h2>
          <h1 className="text-light font-bold text-9xl text-center">
            BOOK YOUR DETAIL
          </h1>

          <div className="grid grid-cols-6 gap-5">
            <img
              src={cta1}
              alt="Detailing example 1"
              className="col-span-2 h-90 w-full object-cover rounded-xl"
            />
            <img
              src={cta2}
              alt="Detailing example 2"
              className="col-span-2 h-90 w-full object-cover rounded-xl"
            />
              {/* <img
                src={cta4}
                alt="Detailing example 3"
                className="h-100 w-full object-cover rounded-xl"
              /> */}
            <img
              src={cta3}
              alt="Detailing example 3"
              className=" col-span-2 h-90 w-full object-cover rounded-xl"
            />
          </div>
        </div>
        <CallButton />
      </div>
    </Section>

    <Section dark>
      <SectionHeader
        title="HERE'S HOW IT WORKS"
        label="PROCESS"
        description="I follow a simple, step-by-step process designed to give your vehicle the best results. From the initial inspection to the final touch, every stage is handled with care, using proven techniques and professional products to clean, restore, and protect your ride."
        variant="dark"
      />
      <SectionBody
        image1={process1}
        image2={process2}
      />
    </Section>
    <div className="rounded-b-full w-full h-10 bg-dark"></div>

    <Section>
      <SectionHeader2
        image={membership1}
        image2={membership2}
        title="MAINTAIN, PROTECT, IMPRESS"
        header="Keep your vehicle looking its best year-round with regular detailing. Consistent care not only protects your investment but also turns heads wherever you go."
        label="MEMBERSHIP"
        description="A great detail doesn't end when I pack up — proper aftercare keeps your vehicle looking sharp for longer. Regular washes protect the finish, prevent buildup, and keep that showroom shine alive."
        description2="I offer weekly and monthly plans so you can choose what works best for your schedule. Plus, get discounts on 3 or more vehicles — no membership required. If you want maximum convenience, join my Monthly Membership and lock in consistent care without having to rebook every time."
      />
    </Section>

    <Section>
      <SectionHeader
        title="FREQUENTLY ASKED QUESTIONS"
        label="ANSWERS"
        description="I want your experience to be simple and stress-free. That's why I've gathered answers to the most common questions. From services and pricing to scheduling and aftercare, these FAQs give you the key details upfront—so you can feel confident every step of the way."
      />
      <Faq />
    </Section>
    <CallToAction />
    <Footer />
  </div>
);

export default Home;
