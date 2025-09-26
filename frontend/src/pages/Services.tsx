import CallToAction from "../components/CallToAction";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import SectionBody, { type ServiceGroup } from "../components/SectionBody";
import SectionHeader from "../components/SectionHeader";
import img1 from "../assets/IMG_9907.webp"
import img2 from "../assets/IMG_1725.webp"
import img3 from "../assets/IMG_5763 copy.webp"
import img4 from "../assets/IMG_0250.webp"
import img7 from "../assets/IMG_1549.webp"
import img8 from "../assets/IMG_6871 copy.webp"

export const interiorExteriorDetail: ServiceGroup[] = [
  {
    title: "INTERIOR",
    items: [
      "Thorough vacuum throughout the full interior",
      "Hot steam sanitation for maximum cleaning results",
      "Full shampoo & heated water extraction",
      "Odor eliminator bomb for strong odor removal",
    ],
  },
  {
    title: "EXTERIOR",
    items: [
      "Deep clean of tires, wheels, and inner barrels",
      "Bug removal & pre-soak to prevent swirls",
      "Hand foam wash & dry",
      "Spray wax with UV protection",
      "Non-greasy matte tire dressing",
    ],
  },
  {
    title: "BONUS",
    items: [
      "Leather & vinyl seat conditioning",
      "UV-protected dark plastic trim conditioning",
      "Air freshener",
    ],
  },
];


export const interiorDetail: ServiceGroup[] = [
  {
    title: "INTERIOR",
    items: [
      "Thorough vacuum throughout the full interior",
      "Hot steam sanitation for maximum cleaning results",
      "Full shampoo & heated water extraction",
      "Odor eliminator bomb for strong odor removal",
    ],
  },
  {
    title: "BONUS",
    items: [
      "Leather & vinyl seat conditioning",
      "UV-protected dark plastic trim conditioning",
      "Air freshener",
    ],
  },
];

export const deepGlossEnhancement: ServiceGroup[] = [
  {
    title: "EXTERIOR",
    items: [
      "Thorough cleaning of wheels, tires, and wheel barrels",
      "Exterior strip wash to remove old waxes",
      "Clay mitt treatment for surface contaminants",
      "Iron removal from paint and glass",
      "Machine-applied wax for added gloss & 3+ months of UV protection",
    ],
  },
];

export const paintRestoration: ServiceGroup[] = [
  {
    title: "CORRECTION",
    items: [
      "Iron removal & clay treatment to deep clean paint surface",
      "Cutting compound to remove up to 85–95% of swirls and scratches (budget option: 50–60%)",
      "Polishing stage to refine finish and boost gloss",
      "Odor eliminator bomb for strong odor removal",
    ],
  },
  {
    title: "PROTECTION",
    items: [
      "Complimentary paint wax (up to 3 months protection)",
      "Optional sealant upgrade (up to 6 months protection)",
      "Premium ceramic coating (up to 2+ years protection, enhanced gloss, UV defense, self-cleaning, and environmental protection)",
    ],
  },
];


export const Services = () => {
  return (
    <div className="bg-light">
      <PageHeader title="SERVICES" />
      <Section dark id="interior-exterior-detail">
        <SectionHeader
          title="INTERIOR & EXTERIOR DETAIL"
          label="STARTING AT $249"
          description="Enjoy expert care, precision, and lasting results. Using professional products and proven techniques, I'll transform your vehicle inside and out — delivering a spotless finish you'll notice every time you drive."
          variant="dark"
        />
        <SectionBody
        image1={img1}
        image2={img2}
        sections={interiorExteriorDetail}
        />
      </Section>

      <Section id="interior-detail">
        <SectionHeader
          title="INTERIOR DETAIL"
          label="STARTING AT $199"
          description="When you choose my services, you get more than just a clean car—you get expert care, attention to detail, and results that last. Using professional-grade products and proven techniques, I make sure your vehicle not only looks amazing but is also protected for the long run."
          />
        <SectionBody
        image1={img4}
        image2={img3}
        sections={interiorDetail}
        />
      </Section>

      {/* <Section dark id="deep-gloss-enhancement">
        <SectionHeader
          title="DEEP GLOSS ENHANCEMENT"
          label="STARTING AT $249"
          description="Enjoy expert care, precision, and lasting results. Using professional products and proven techniques, I'll transform your vehicle inside and out — delivering a spotless finish you'll notice every time you drive."
          variant="dark"
          />
        <SectionBody
        image1={img6}
        image2={img5}
        sections={deepGlossEnhancement}
        />
      </Section> */}

      <Section dark id="paint-restoration">
        <SectionHeader
          title="PAINT RESTORATION"
          label="STARTING AT $499"
          description="When you choose my services, you get more than just a clean car—you get expert care, attention to detail, and results that last. Using professional-grade products and proven techniques, I make sure your vehicle not only looks amazing but is also protected for the long run."
          variant="dark"
          />
        <SectionBody
        image1={img8}
        image2={img7}
        sections={paintRestoration}
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
