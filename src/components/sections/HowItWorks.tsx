import Image from "next/image";
import { steps } from "@/data/site";

export function HowItWorks() {
  return (
    <section className="split-band" id="how-it-works">
      <div className="image-panel">
        <Image
          src="/images/how_it_works.png"
          alt="Colorful apparel folded on a table"
          width={900}
          height={675}
        />
      </div>
      <div className="steps">
        <p className="eyebrow">
          <span className="eyebrow-line" />
          How it works
        </p>
        <h2>From idea to orders without the scramble.</h2>
        <ol>
          {steps.map((step) => (
            <li key={step.title}>
              <div>
                <strong>{step.title}</strong> {step.copy}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
