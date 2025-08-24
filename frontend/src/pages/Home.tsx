import Hero from "../assets/home-hero.webp";
import CallToAction from "../components/CallToAction";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import SectionHeader2 from "../components/SectionHeader2";

const Home = () => {
  return (
    <div className="bg-light">
      <div className="relative h-[80vh] w-full overflow-hidden">
        <img
          src={Hero}
          alt="car interior"
          className="absolute h-full w-full object-cover"
        />
        <div className="relative z-1 grid grid-cols-[1fr_2fr] h-full bg-black/40 px-10 py-20">
          <div className="flex flex-col justify-end text-light">
            <h2 className="text-xxl font-mono font-medium">
              IT'S ALL IN THE DETAILS
            </h2>
            <h1 className="text-9xl font-bold">
              GARCIA AUTO DETAILING
              <span className="text-5xl align-top relative top-3.5">
                &copy;
              </span>
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
      </Section>

      <Section dark>
        <SectionHeader
          title="HOW I CAN HELP"
          label="SERVICES"
          description="Tired of spending money on car washes that barely make a difference? I provide premium mobile detailing that eliminates swirl marks, restores shine, protects your paint, and leaves every inch of your car looking brand new."
          variant="dark"
        />
      </Section>

      <Section dark>
        <SectionHeader
          title="HERE'S HOW IT WORKS"
          label="PROCESS"
          description="I follow a simple, step-by-step process designed to give your vehicle the best results. From the initial inspection to the final touch, every stage is handled with care, using proven techniques and professional products to clean, restore, and protect your ride."
          variant="dark"
        />
      </Section>

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
