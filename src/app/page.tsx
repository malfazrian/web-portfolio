"use client";

import CaseStudyCard from "@/components/CaseStudyCard";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import ShowcaseCarousel from "@/components/ShowcaseCarousel";
import TestimonyCard from "@/components/TestimonyCard";
import { caseStudyData, testimonialsData } from "@/data/webData";

export default function Home() {
  return (
    <section className="relative overflow-hidden">
      <Header />
      <main>
        <Section
          bgColor="bg-white"
          textColor="text-slate-900"
          idSection="case-studies"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              title="Case Studies"
              description="Solving user & business problems since last year."
            />
            {caseStudyData.map((caseStudy, index) => (
              <CaseStudyCard
                key={index}
                tag={caseStudy.tag}
                title={caseStudy.title}
                description={caseStudy.description}
                image={caseStudy.image}
                color={caseStudy.color}
                isReverse={caseStudy.isReverse}
              />
            ))}
          </div>
        </Section>
        <Section
          bgColor="bg-slate-900"
          textColor="text-slate-100"
          idSection="testimonials"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              title="Testimonials"
              description="What they say about my work."
            />
            <div className="grid sm:grid-cols-2 gap-8">
              {testimonialsData.map((testimonial, index) => (
                <TestimonyCard
                  key={index}
                  testimony={testimonial.testimony}
                  imageUrl={testimonial.imageUrl}
                  name={testimonial.name}
                />
              ))}
            </div>
          </div>
        </Section>
        <Section
          bgColor="bg-white"
          textColor="text-slate-900"
          idSection="recent-work"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              title="Recent Work"
              description="Solving user & business problems since last 1+ years."
            />
            <ShowcaseCarousel />
          </div>
        </Section>
        <Section
          bgColor="bg-slate-900"
          textColor="text-slate-100"
          idSection="get-in-touch"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              title="Get in Touch"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            />
            <ContactForm />
          </div>
        </Section>
        <Footer />
      </main>
    </section>
  );
}
