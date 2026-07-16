import { IconPhone } from './icons'
import Reveal from './Reveal'
import './CTA.css'

export default function CTA() {
  return (
    <section className="cta">
      <div className="container">
        <Reveal as="div" className="cta__box">
          <h2>Ready to secure your Kashmir property?</h2>
          <p>
            Book a free consultation today. Our experts are ready to help you protect
            and manage your investment.
          </p>
          <div className="cta__actions">
            <a href="#contact" className="btn btn-dark">
              Book Free Consultation
            </a>
            <a href="tel:+911234567890" className="btn btn-outline-light">
              <IconPhone width="17" height="17" /> Call Us Now
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
