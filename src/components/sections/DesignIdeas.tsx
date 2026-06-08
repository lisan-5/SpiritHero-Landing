import { ideaTags } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function DesignIdeas() {
  return (
    <section className="ideas" id="ideas">
      <SectionHeading
        eyebrow="Design ideas"
        title="Merch that feels specific to your people."
      />
      <div className="idea-strip">
        {ideaTags.map((idea, i) => (
          <ScrollReveal key={idea} direction="scale" delay={i * 80}>
            <span>{idea}</span>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
