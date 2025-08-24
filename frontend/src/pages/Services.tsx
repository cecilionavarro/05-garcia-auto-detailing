import CallToAction from "../components/CallToAction";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";

export const Services = () => {
  return (
    <div className="bg-light">
      <PageHeader title="SERVICES" />
      <Section dark>
        <SectionHeader
          title="INTERIOR & EXTERIOR DETAIL"
          label="STARTING AT $249"
          description="Enjoy expert care, precision, and lasting results. Using professional products and proven techniques, I'll transform your vehicle inside and out — delivering a spotless finish you'll notice every time you drive."
          variant="dark"
        />
      </Section>

      <Section>
        <SectionHeader
          title="INTERIOR DETAIL"
          label="STARTING AT $199"
          description="When you choose my services, you get more than just a clean car—you get expert care, attention to detail, and results that last. Using professional-grade products and proven techniques, I make sure your vehicle not only looks amazing but is also protected for the long run."
        />
      </Section>

      <Section dark>
        <SectionHeader
          title="DEEP GLOSS ENHANCEMENT"
          label="STARTING AT $249"
          description="Enjoy expert care, precision, and lasting results. Using professional products and proven techniques, I'll transform your vehicle inside and out — delivering a spotless finish you'll notice every time you drive."
          variant="dark"
        />
      </Section>

      <Section>
        <SectionHeader
          title="PAINT RESTORATION"
          label="STARTING AT $499"
          description="When you choose my services, you get more than just a clean car—you get expert care, attention to detail, and results that last. Using professional-grade products and proven techniques, I make sure your vehicle not only looks amazing but is also protected for the long run."
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
