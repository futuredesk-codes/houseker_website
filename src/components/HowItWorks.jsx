import { IconArrowRight } from './icons'
import Reveal from './Reveal'
import './HowItWorks.css'

const STEPS = [
  { n: '01', title: 'Book a Consultation', desc: 'Free call with our experts. Share your property goals.' },
  { n: '02', title: 'Verification & Assessment', desc: 'Field visit conducted, legal verification, inspection, and document review.' },
  { n: '03', title: 'Customized Action Plan', desc: 'Detailed report with a clear step-by-step plan tailored to your property.' },
  { n: '04', title: 'Secure Execution', desc: 'We handle all paperwork, legal transfers, and secure closing.' },
]

export default function HowItWorks() {
  return (
    <section className="how" id="how-it-works">
      <div className="how__glow" />
      <div className="container">
        <div className="how__head">
          <Reveal as="div">
            <span className="eyebrow">HOW IT WORKS</span>
            <h2>
              Four steps.
              <br />
              Total peace of mind.
            </h2>
          </Reveal>
          <Reveal as="p" className="how__desc" delay={100}>
            A transparent, end-to-end process designed to protect your investment — from
            that first call to final handover.
          </Reveal>
        </div>

        <div className="how__grid">
          {STEPS.map((step, i) => (
            <Reveal as="div" className="how-card" delay={i * 100} key={step.n}>
              <span className="how-card__n">{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal as="div" className="how__cta" delay={200}>
          <a href="#contact" className="btn btn-dark">
            Start Your Journey <IconArrowRight width="16" height="16" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
