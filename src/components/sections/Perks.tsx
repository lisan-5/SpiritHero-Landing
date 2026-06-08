import { perks } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Perks() {
  return (
    <section className="perks" aria-labelledby="perks-title">
      <SectionHeading
        eyebrow="The best of both worlds"
        title="Creating an online store is easy."
        id="perks-title"
      />
      <div className="perk-grid">
        {perks.map((perk, index) => (
          <ScrollReveal
            key={perk.title}
            direction={index % 3 === 0 ? "left" : index % 3 === 1 ? "up" : "right"}
            delay={index * 100}
          >
            <article
              className={`perk-card ${perk.featured ? "accent-card" : ""}`}
            >
              <span className="icon">{String(index + 1).padStart(2, "0")}</span>
              <h3>{perk.title}</h3>
              <p>{perk.copy}</p>
              <div className="card-shine" />
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
