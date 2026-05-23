/* eslint-disable react-refresh/only-export-components */
import CallToAction from "../components/CallToAction";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import SectionBody, { type ServiceGroup } from "../components/SectionBody";
import SectionHeader from "../components/SectionHeader";
import img1 from "../assets/IMG_1725.webp";
import img2 from "../assets/IMG_9907.webp";
import img3 from "../assets/IMG_2106.webp";
import img4 from "../assets/IMG_5763 copy.webp";
import img5 from "../assets/IMG_0250.webp";
import img6 from "../assets/IMG_0584.webp";
import img7 from "../assets/IMG_2157.webp";
import img8 from "../assets/IMG_2144.webp";
import img9 from "../assets/IMG_2132.webp";
import img10 from "../assets/IMG_2123.webp";
import img11 from "../assets/IMG_2121.webp";
import img12 from "../assets/IMG_2122.webp";
import img13 from "../assets/IMG_0389.webp";
import img14 from "../assets/IMG_2125.webp";
import img15 from "../assets/IMG_0501.webp";

export const interiorExteriorDetail: ServiceGroup[] = [
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

export const engineBayDetail: ServiceGroup[] = [
  {
    title: "ENGINE BAY",
    items: [
      "Sensitive components safely covered for protection",
      "Degreasing and agitation with dedicated detail brushes",
      "Careful rinse and full blow-dry for safe startup",
      "Non-oily dressing on plastics and trim for a clean black finish",
    ],
  },
  {
    title: "BONUS",
    items: [
      "Exterior wash included",
      "Wheels, inner barrels, and tires cleaned and shined",
    ],
  },
];

export const odorEliminatingTreatment: ServiceGroup[] = [
  {
    title: "ODOR REMOVAL",
    items: [
      "Chemical odor bomb treatment after interior detailing",
      "One-hour circulation to neutralize stubborn odors",
      "Process reaches vents, fabrics, and interior surfaces",
      "Vehicle aired out with A/C cycling after treatment",
    ],
  },
  {
    title: "RECOMMENDED",
    items: ["Cabin air filter replacement for best long-term results"],
  },
];

export const paintEnhancement: ServiceGroup[] = [
  {
    title: "ENHANCEMENT",
    items: [
      "Thorough exterior wash and paint decontamination",
      "Clay treatment to remove bonded surface contaminants",
      "Iron removal from paint and glass",
      "One-step machine polish to enhance gloss and clarity",
    ],
  },
  {
    title: "PROTECTION",
    items: [
      "Complimentary paint sealant",
      "Up to 3 months of UV protection and hydrophobic properties",
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
          description="Give your car the care it deserves with a service designed to refresh, protect, and restore its beauty inside and out. With attention to detail and a focus on lasting results, your vehicle will not only look spotless but also feel renewed every time you get behind the wheel."
          variant="dark"
        />
        <SectionBody
          image1={img1}
          image2={img2}
          image3={img3}
          sections={interiorExteriorDetail}
        />
      </Section>

      <Section id="interior-detail">
        <SectionHeader
          title="INTERIOR DETAIL"
          label="STARTING AT $199"
          description="This interior detail service brings new life to your car, leaving it clean, refreshed, and comfortable. Beyond a deep clean, added conditioning and protection ensure your seats, trim, and air stay fresh long after the service is complete."
        />
        <SectionBody
          image1={img4}
          image2={img5}
          image3={img6}
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

      {/* NEW: ENGINE BAY DETAIL */}
      <Section dark id="engine-bay-detail">
        <SectionHeader
          title="ENGINE BAY DETAIL"
          label="STARTING AT $100"
          description="A safe and thorough engine bay cleaning that restores a clean, like-new appearance while protecting sensitive components for peace of mind."
          variant="dark"
        />
        <SectionBody
          image1={img7}
          image2={img8}
          image3={img9}
          sections={engineBayDetail}
        />
      </Section>

      {/* NEW: ODOR ELIMINATING TREATMENT (ADD-ON) */}
      <Section id="odor-eliminating-treatment">
        <SectionHeader
          title="ODOR ELIMINATING TREATMENT"
          label="ADD-ON $50"
          description="Eliminate stubborn odors after an interior detail with a chemical treatment designed to neutralize smells throughout the entire cabin."
        />
        <SectionBody
          image1={img10}
          image2={img11}
          image3={img12}
          sections={odorEliminatingTreatment}
        />
      </Section>

      {/* NEW: PAINT ENHANCEMENT */}
      <Section dark id="paint-enhancement">
        <SectionHeader
          title="PAINT ENHANCEMENT"
          label="STARTING AT $299"
          description="A deep exterior refresh that removes bonded contaminants and boosts gloss with a one-step polish, finished with protection for easier maintenance."
          variant="dark"
        />
        <SectionBody
          image1={img13}
          image2={img14}
          image3={img15}
          sections={paintEnhancement}
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
