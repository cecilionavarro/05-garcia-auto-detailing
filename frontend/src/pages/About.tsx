import CallToAction from "../components/CallToAction";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import SectionHeader2 from "../components/SectionHeader2";
import CallButton from "../components/CallButton";
import BlurText from "../components/ui/BlurText";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const futureWordRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!futureWordRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        futureWordRef.current,
        { xPercent: 0 },
        {
          xPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: futureWordRef.current,
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
      <PageHeader title="ABOUT" />

      <Section dark>
        <SectionHeader2
          title="SERVICE, PASSION, GROWTH."
          header="My mission is to deliver exceptional service, top-quality results, and complete honesty—treating every vehicle like my own and ensuring customers always get true value."
          label="MY STORY"
          description="Five years ago, I started detailing my own car—just wanting to keep it clean and comfortable. Friends and family noticed the results, and before I knew it, they were asking me to work on their vehicles too. Word spread, referrals kept coming in, and what began as a personal passion quickly grew into a business."
          description2="I started out with just my Corolla and a few basic tools, driving from job to job. Over time, I reinvested every dollar I could, upgrading my equipment and vehicles—from the Corolla to an SUV, and now to a fully equipped van. Today, I bring all the professional tools and experience needed to give your car the care it deserves."
          variant="dark"
        />
      </Section>

      <Section dark>
        <div className="leading-none flex justify-between">
          <BlurText
            text="EST."
            delay={5}
            animateBy="words"
            direction="bottom"
            className="font-bold text-7xl md:text-9xl lg:text-[12rem]"
          />
          <BlurText
            text="‘20"
            delay={5}
            animateBy="words"
            direction="bottom"
            className="font-bold text-7xl md:text-9xl lg:text-[12rem]"
          />
        </div>
        <SectionHeader
          title="WHAT MAKES ME DIFFERENT"
          label="APPROACH"
          description="I work solo, which means you get my full attention on every detail—literally. I check every corner and hidden area, and before I leave, I make sure you're 100% happy with the service. If something needs touching up, I fix it on the spot. I've worked on everything from Teslas to electric trucks, big rigs to classic cars, and I treat each one as if it were my own."
          variant="dark"
        />
      </Section>

      <Section dark>
        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl">
            <span className="text-accent">Quality</span> — No corners cut.
          </h2>
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl">
            <span className="text-accent">Convenience</span> — I come to you.
          </h2>
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl">
            <span className="text-accent">Experience</span> — Any vehicle, any
            challenge.
          </h2>
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl">
            <span className="text-accent">Satisfaction</span> — You'll smile
            when it's done.
          </h2>
        </div>
      </Section>

      <Section>
        <div className="leading-none flex flex-col">
          <BlurText
            text="VISION FOR THE"
            delay={5}
            animateBy="words"
            direction="bottom"
            className="font-bold text-3xl md:text-4xl lg:text-5xl"
          />
          <h1
            ref={futureWordRef}
            className="relative font-bold text-6xl md:text-8xl lg:text-[12rem]"
          >
            <span className="relative text-accent">FUTURE</span>
            <span className="aria-hidden absolute inset-0 text-brand translate-x-1 lg:translate-x-2">
              FUTURE
            </span>
            <span className="aria-hidden absolute inset-0 text-dark translate-x-2 lg:translate-x-4">
              FUTURE
            </span>
          </h1>
          <div className="leading-normal flex flex-col gap-10">
            <p className="md:text-xl">
              I'm proud to serve Bakersfield, but my vision is to grow—opening a
              dedicated shop, expanding services to include wraps and tint, and
              helping even more people enjoy their vehicles. Until then, I'll keep
              doing what I do best: delivering high-quality, professional
              detailing right to your door.
            </p>
            <CallButton/>
          </div>
        </div>
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

export default About;
