import { IconStar } from './icons'
import Reveal from './Reveal'
import './Testimonials.css'

const TESTIMONIALS = [
  {
    quote:
      'I was worried about my inherited land in Srinagar being encroached. Chinar Estates sent their team within days, got matched against government report, and resolved everything legally.',
    name: 'Tariq Mahmood',
    location: 'United Kingdom',
  },
  {
    quote:
      'Selling inherited property from Canada seemed impossible. They handled title verification, POA, and fund transfer seamlessly, I didn’t need to travel once.',
    name: 'Sana Farooqi',
    location: 'Toronto',
  },
  {
    quote:
      'Their revenue paper verification saved us from a costly mistake. Professional, responsive, and they truly understand Kashmiri property law.',
    name: 'Asad Rehman',
    location: 'Dubai',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <Reveal as="div" className="testimonials__head">
          <span className="eyebrow">TESTIMONIALS</span>
          <h2>Trusted worldwide.</h2>
        </Reveal>

        <div className="testimonials__grid">
          {TESTIMONIALS.map((t, i) => (
            <Reveal as="figure" className="testimonial-card" delay={i * 100} key={t.name}>
              <div className="testimonial-card__stars">
                <IconStar /><IconStar /><IconStar /><IconStar /><IconStar />
              </div>
              <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption>
                <span className="testimonial-card__avatar" />
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.location}</span>
                </div>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
