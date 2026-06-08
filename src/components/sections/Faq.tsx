import { faqs } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Faq() {
  return (
    <section className="faq" id="faq">
      <SectionHeading
        eyebrow="FAQ"
        title="Quick answers before we build your store."
      />
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <ScrollReveal key={faq.question} direction="left" delay={index * 100}>
            <details open={index === 0}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
