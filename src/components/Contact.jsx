import { useState } from 'react'
import { IconPhone, IconMail, IconPin, IconArrowRight } from './icons'
import Reveal from './Reveal'
import './Contact.css'

const CARDS = [
  { icon: IconPhone, title: 'Call Us', line1: '+91 9484000002', line2: 'Mon-Sat, 9am - 7pm' },
  { icon: IconMail, title: 'Email Us', line1: 'info@houseker.com', line2: 'We reply within 24 hours' },
  { icon: IconPin, title: 'Visit Us', line1: 'Srinagar, Kashmir', line2: 'Serving the entire Valley' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <Reveal as="div" className="contact__head">
          <span className="eyebrow">CONTACT</span>
          <h2>Let's talk property.</h2>
          <p>Book a free consultation. We're available 24/7.</p>
        </Reveal>

        <div className="contact__cards">
          {CARDS.map(({ icon: Icon, title, line1, line2 }, i) => (
            <Reveal as="div" className="contact-card" delay={i * 90} key={title}>
              <span className="contact-card__icon">
                <Icon />
              </span>
              <strong>{title}</strong>
              <span>{line1}</span>
              <span className="contact-card__muted">{line2}</span>
            </Reveal>
          ))}
        </div>

        <Reveal as="form" className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__form-row">
            <label>
              Full Name
              <input type="text" placeholder="Your full name" required />
            </label>
            <label>
              Country of Residence
              <select defaultValue="">
                <option value="" disabled>
                  Select your country
                </option>
                <option>United Kingdom</option>
                <option>United States</option>
                <option>Canada</option>
                <option>UAE</option>
                <option>India</option>
                <option>Other</option>
              </select>
            </label>
          </div>

          <div className="contact__form-row">
            <label>
              Email Address
              <input type="email" placeholder="you@email.com" required />
            </label>
            <label>
              Select a Service
              <select defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                <option>Property Sales</option>
                <option>Legal Verification</option>
                <option>Encroachment Check</option>
                <option>Power of Attorney</option>
                <option>Ancestral Property</option>
                <option>Remittance &amp; Tax</option>
                <option>Property Management</option>
              </select>
            </label>
          </div>

          <label className="contact__form-full">
            Tell us about your property
            <textarea rows={4} placeholder="Location, size, and what you need help with..." />
          </label>

          <button type="submit" className="btn btn-primary">
            Send Message <IconArrowRight width="16" height="16" />
          </button>

          {submitted && <p className="contact__success">Thanks — we'll be in touch within 24 hours.</p>}
        </Reveal>
      </div>
    </section>
  )
}
