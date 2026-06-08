import { reviews } from "@/data/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Reviews() {
  return (
    <section className="reviews" aria-labelledby="reviews-title">
      <ScrollReveal direction="left">
        <div className="review-summary">
          <p className="eyebrow">
            <span className="eyebrow-line" />
            We love our customers
          </p>
          <h2 id="reviews-title">Trusted by schools, PTAs, and community groups.</h2>
          <div className="rating-card">
            <span>Spirit Hero</span>
            <strong>5.0</strong>
            <span className="stars" aria-hidden="true">
              ★★★★★
            </span>
            <small>1,300 reviews</small>
          </div>
        </div>
      </ScrollReveal>
      <div className="review-grid">
        {reviews.map((review, i) => (
          <ScrollReveal key={`${review.name}-${review.org}`} direction="right" delay={i * 120}>
            <article className="review-card">
              <div className="review-stars">★★★★★</div>
              <p>&ldquo;{review.quote}&rdquo;</p>
              <div className="review-author">
                <div className="review-avatar">{review.name[0]}</div>
                <div>
                  <strong>{review.name}</strong>
                  <span>{review.org}</span>
                </div>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
