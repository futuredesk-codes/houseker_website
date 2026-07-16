import { useState } from 'react'
import { IconArrowRight, IconChevronDown } from './icons'
import Reveal from './Reveal'
import './FAQ.css'

const FAQS = [
  {
    q: 'Do I need to travel to Kashmir?',
    a: 'No. Our on-ground team handles inspections, verification, and paperwork on your behalf — you can manage everything remotely.',
  },
  {
    q: 'How are funds transferred securely?',
    a: 'All remittances go through compliant banking channels with full documentation, so every transaction is traceable and tax-compliant.',
  },
  {
    q: 'What is an Encroachment Check?',
    a: 'A geo-tagged, on-ground inspection of your property boundaries against official land records to confirm no unauthorized occupation.',
  },
  {
    q: 'How long does POA take?',
    a: 'A standard Power of Attorney is typically drafted, attested, and registered within 7-10 business days, depending on your location.',
  },
  {
    q: 'Can you handle disputed property?',
    a: 'Yes. Our legal team specializes in title disputes, mutation issues, and ancestral property claims across the Valley.',
  },
  {
    q: 'Which areas do you cover?',
    a: 'We currently operate across Srinagar, Budgam, Anantnag, Baramulla, and surrounding districts of the Kashmir Valley.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="faq" id="faq">
      <div className="container faq__inner">
        <Reveal as="div" className="faq__head">
          <span className="eyebrow">FAQ</span>
          <h2>
            Questions?
            <br />
            Answered.
          </h2>
          <p>Everything you need to know before getting started.</p>
          <a href="#contact" className="faq__link">
            Still have questions? Talk to us <IconArrowRight width="15" height="15" />
          </a>
        </Reveal>

        <div className="faq__list">
          {FAQS.map((item, i) => {
            const isOpen = open === i
            return (
              <Reveal as="div" className={`faq-item ${isOpen ? 'is-open' : ''}`} delay={i * 60} key={item.q}>
                <button className="faq-item__q" onClick={() => setOpen(isOpen ? -1 : i)}>
                  {item.q}
                  <IconChevronDown className="faq-item__chevron" />
                </button>
                <div className="faq-item__a-wrap">
                  <p className="faq-item__a">{item.a}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
