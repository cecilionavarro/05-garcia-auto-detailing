import heroImg from "../assets/home-hero.webp";
import CallToAction from "../components/CallToAction";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import SectionHeader2 from "../components/SectionHeader2";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import benefitConvenienceImg from "../assets/IMG_2151.webp";
import benefitGuaranteeImg from "../assets/IMG_3185.webp";
import benefitExpertiseImg from "../assets/IMG_1504.webp";
import ctaImg1 from "../assets/cta/IMG_5763.webp";
import ctaImg2 from "../assets/cta/IMG_0478.webp";
import ctaImg3 from "../assets/cta/IMG_1723.webp";
import serviceImg1 from "../assets/IMG_0124.webp";
import serviceImg2 from "../assets/services/IMG_7818.webp";
import serviceImg3 from "../assets/IMG_1903.webp";
import serviceImg4 from "../assets/IMG_2120.webp";
import serviceImg5 from "../assets/IMG_1492.webp";
import BMWLogo from "../assets/car-logos/BMW.svg";
import CorvetteLogo from "../assets/car-logos/Logo_Corvette_-Transparency.png";
import MercedesLogo from "../assets/car-logos/Mercedes-Benz_Star.svg";
import PorscheLogo from "../assets/car-logos/Porsche_Logo.svg.png";
import LexusLogo from "../assets/car-logos/lexus_logo.svg.png";
import TelsaLogo from "../assets/car-logos/tesla_logo.svg.png";
import processImg1 from "../assets/IMG_4045.webp";
import processImg2 from "../assets/IMG_1480.webp";
import processImg3 from "../assets/IMG_2044.webp";

import Card from "../components/Card";
import CallButton from "../components/CallButton";
import SectionBody from "../components/SectionBody";
import BlurText from "../components/ui/BlurText";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface CardItem {
  review: string;
  name: string;
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
    title: "INTERIOR & EXTERIOR DETAIL",
    price: 249,
    description:
      "Comprehensive car detailing with interior steam cleaning, shampooing, odor removal, and exterior wash, wax, and UV protection.",
    image: serviceImg1,
    slug: "interior-exterior-detail",
  },
  {
    title: "INTERIOR ONLY DETAIL",
    price: 199,
    description:
      "Interior detailing with vacuuming, steam sanitation, shampoo and extraction, odor removal, plus leather, vinyl, and trim conditioning.",
    image: serviceImg2,
    slug: "interior-detail",
  },
  {
    title: "ENGINE BAY DETAIL",
    price: 100,
    description:
      "Engine bay detailing with safe degreasing, agitation, and protection of sensitive components, finished with a non-oily dressing and exterior wash.",
    image: serviceImg3,
    slug: "engine-bay-detail",
  },
  {
    title: "ODOR ELIMINATING TREATMENT",
    price: 50,
    description:
      "Chemical odor elimination treatment that neutralizes stubborn smells throughout the vehicle interior after detailing for a clean, fresh finish.",
    image: serviceImg4,
    slug: "odor-eliminating-treatment",
  },
  {
    title: "PAINT ENHANCEMENT",
    price: 299,
    description:
      "Exterior paint enhancement with clay and iron decontamination, one-step machine polishing, and sealant for added gloss, shine, and protection.",
    image: serviceImg5,
    slug: "paint-enhancement",
  },
];

const benefits = [
  {
    title: "CONVENIENCE",
    label: "MOBILE DETAILING",
    description:
      "I bring the shine to you — no lines, no waiting. Fully equipped, I detail your vehicle wherever it's parked so you can get on with your day.",
    image: benefitConvenienceImg,
  },
  {
    title: "MY GUARANTEE",
    label: "SATISFACTION PROMISE",
    description:
      "I will not leave until you're happy. If something's not perfect, I'll fix it right there before handing back your keys.",
    image: benefitGuaranteeImg,
  },
  {
    title: "EXPERTISE",
    label: "ALL VEHICLE TYPES",
    description:
      "From luxury cars and classics to trucks, RVs, boats, and motorcycles, I've detailed them all — and we know exactly where dirt hides.",
    image: benefitExpertiseImg,
  },
];

const Home = () => {
  const motionWordRef = useRef<HTMLHeadingElement>(null);
  const motionArrowRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!motionWordRef.current || !motionArrowRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        motionWordRef.current,
        { xPercent: -25 },
        {
          xPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: motionWordRef.current,
            start: "top 100%",
            end: "top 20%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        motionArrowRef.current,
        { rotation: 0 },
        {
          rotation: 90,
          transformOrigin: "50% 50%",
          ease: "none",
          scrollTrigger: {
            trigger: motionArrowRef.current,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-light">
    <div className="relative h-[80vh] w-full">
      <img
        src={heroImg}
        alt="car interior"
        className="absolute h-full w-full object-cover hero-zoom"
      />
      <div className="relative z-1 text-light flex flex-col h-full justify-end px-5 py-10 bg-black/40 md:px-10 md:py-20 lg:grid lg:grid-cols-2">
        <div className="lg:flex lg:flex-col lg:justify-end">
          <h2 className="font-mono font-medium md:text-xl">
            IT'S ALL IN THE DETAILS
          </h2>
          <BlurText
            text="GARCIA"
            delay={50}
            animateBy="letters"
            direction="bottom"
            className="text-6xl font-bold md:text-8xl xl:text-9xl"
          />
          <BlurText
            text="AUTO"
            delay={50}
            animateBy="letters"
            direction="bottom"
            className="text-6xl font-bold md:text-8xl xl:text-9xl"
          />
          <div className="flex items-start">
            <BlurText
              text="DETAILING"
              delay={50}
              animateBy="letters"
              direction="bottom"
              className="text-6xl font-bold md:text-8xl xl:text-9xl"
            />
            <BlurText
              text="©"
              delay={50}
              animateBy="letters"
              direction="bottom"
              className="text-2xl font-bold align-top relative top-1.5 md:text-4xl md:top-2 lg:text-5xl"
            />
          </div>
          {/* <h1 className="text-6xl font-bold md:text-8xl xl:text-9xl">GARCIA</h1>
          <h1 className="text-6xl font-bold md:text-8xl xl:text-9xl">AUTO</h1>
          <h1 className="text-6xl font-bold md:text-8xl xl:text-9xl">
            DETAILING
            <span className="text-2xl align-top relative top-1.4 md:text-4xl md:top-1.5 lg:text-5xl">
              &copy;
            </span>
          </h1> */}
        </div>
        <div className="pt-5 lg:flex lg:flex-col lg:justify-end lg:text-right">
          <h2 className="font-mono font-medium block md:hidden">
            AVAILABLE FOR MOBILE DETAILING
          </h2>
          <h2 className="font-mono font-medium hidden md:block md:text-xl">
            AVAILABLE FOR MOBILE DETAILING WORK
          </h2>
          <BlurText
            text="BAKERSFIELD, CA"
            delay={50}
            animateBy="letters"
            direction="bottom"
            className="text-4xl font-bold md:text-5xl xl:text-6xl lg:justify-end"
          />
        </div>
        <div className="pt-5 block lg:hidden">
          <CallButton />
        </div>
      </div>
    </div>

    <Section>
      <SectionHeader
        title="WORK YOU CAN TRUST"
        label="BENEFITS"
        description="When you choose my services, you get more than just a clean car—you get expert care, attention to detail, and results that last. Using professional-grade products and proven techniques, I make sure your vehicle not only looks amazing but is also protected for the long run."
      />
      {/* <div className="grid grid-cols-3 gap-5">
        {benefits.map((benefits) => (
          <Card key={benefits.title} {...benefits} />
        ))}
      </div> */}
      <div className="grid gap-10 md:gap-5 md:grid-cols-3">
        {benefits.map((benefits) => (
          <Card key={benefits.title} {...benefits} />
        ))}
      </div>
    </Section>

    <Section>
      {/* <div className="leading-none flex flex-col">
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
      </div> */}
      <div>
        <BlurText
          text="MOBILE DETAILING IN"
          delay={5}
          animateBy="words"
          direction="bottom"
          className="font-bold text-3xl md:text-4xl lg:text-5xl"
        />
        <div className="flex justify-between">
          <p
            ref={motionArrowRef}
            className="text-6xl md:text-8xl lg:text-[12rem] inline-block"
          >
            →
          </p>
          <h1
            ref={motionWordRef}
            className="relative font-bold text-6xl md:text-8xl lg:text-[12rem]"
          >
            <span className="relative text-accent">
              <em>MOTION</em>
            </span>
            <span className="aria-hidden absolute inset-0 text-brand translate-x-1 lg:translate-x-2">
              <em>MOTION</em>
            </span>
            <span className="aria-hidden absolute inset-0 text-dark translate-x-2 lg:translate-x-4">
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
      <div className="grid gap-10 md:gap-5 md:grid-cols-3">
        {services.map((service) => (
          <Card key={service.slug} {...service} />
        ))}
      </div>
    </Section>

    <Section dark>
      {/* <div className="leading-none flex justify-between">
        <h1 className="font-bold text-[12rem]">5</h1>
        <h1 className="font-bold text-[12rem] text-accent">STARS</h1>
      </div> */}
      <div className="leading-none flex justify-between">
        <BlurText
          text="5"
          delay={5}
          animateBy="words"
          direction="bottom"
          className="font-bold text-7xl md:text-9xl lg:text-[12rem]"
        />
        <BlurText
          text="STARS"
          delay={5}
          animateBy="words"
          direction="bottom"
          className="font-bold text-7xl md:text-9xl lg:text-[12rem] text-accent"
        />
      </div>
      <SectionHeader
        title="DON'T TAKE MY WORD FOR IT"
        label="PROCESS"
        description="Your trust means everything to me. I'm proud to share what my clients have to say about the results, the service, and the care I put into every detail. Everything from valuable classic cars to high-end luxury vehicles, as well as everyday drivers."
        variant="dark"
      />

      <div className="grid md:grid-cols-3 gap-5">
        {reviews.map(({ review, name }, i) => (
          <div
            key={i}
            className="flex flex-col justify-between gap-10 h-auto md:text-xl text-light backdrop-blur-lg p-5 rounded-xl border border-light"
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
      <div className="grid grid-cols-3 items-center justify-items-center gap-10 md:grid-cols-6">
        <img src={PorscheLogo} alt="Porsche" className="h-20" />
        <img src={MercedesLogo} alt="Mercedes-Benz" className="h-20" />
        <img src={CorvetteLogo} alt="Corvette" className="h-20" />
        <img src={LexusLogo} alt="Lexus" className="h-20" />
        <img src={BMWLogo} alt="BMW" className="h-20" />
        <img src={TelsaLogo} alt="Tesla" className="h-20 " />
      </div>
    </Section>

    <Section dark>
      <div className="h-full flex flex-col items-center justify-center gap-20">
        <div className="flex flex-col items-center gap-10">
          <h2 className="text-light font-mono font-medium md:text-xl">
            (Because Every Detail Matters)
          </h2>
          <BlurText
            text="BOOK YOUR DETAIL"
            delay={5}
            animateBy="words"
            direction="bottom"
            className="text-light font-bold text-center text-5xl md:text-8xl lg:text-9xl justify-center"
          />

          <div className="grid md:grid-cols-6 gap-5">
            <img
              src={ctaImg1}
              alt="Detailing example 1"
              className="col-span-2 aspect-[16/9] w-full object-cover rounded-xl md:h-80"
            />
            <img
              src={ctaImg2}
              alt="Detailing example 2"
              className="col-span-2 aspect-[16/9] w-full object-cover rounded-xl hidden md:block md:h-80"
            />
            {/* <img
                src={cta4}
                alt="Detailing example 3"
                className="h-100 w-full object-cover rounded-xl"
              /> */}
            <img
              src={ctaImg3}
              alt="Detailing example 3"
              className=" col-span-2 aspect-[16/9] w-full object-cover rounded-xl hidden md:block md:h-80"
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
        image1={processImg1}
        image2={processImg2}
        image3={processImg3}
      />
    </Section>
    <div className="rounded-b-full w-full h-10 bg-dark"></div>

    <Section>
      <SectionHeader2
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
};

export default Home;
