import {
  GooglePlayBadge,
  AppStoreBadge,
  IconSale,
  IconLegal,
  IconEncroachment,
  IconPOA,
  IconAncestral,
  IconRemittance,
  IconDocument,
  IconManagement,
} from './icons'
import Reveal from './Reveal'
import './Services.css'

const SERVICES = [
  { icon: IconSale, title: 'Property Sales', desc: 'Buy or sell Kashmiri estates end to end — title verification to secure escrow.' },
  { icon: IconLegal, title: 'Legal Verification', desc: 'Clean, dispute-free titles certified by legal experts.' },
  { icon: IconEncroachment, title: 'Encroachment Check', desc: 'Geo-tagged on-ground inspections protecting your boundaries.' },
  { icon: IconPOA, title: 'Power of Attorney', desc: 'Full POA processing — manage property without traveling.' },
  { icon: IconAncestral, title: 'Ancestral Property', desc: 'Locate & confirm holdings via land records and surveys.' },
  { icon: IconRemittance, title: 'Remittance & Tax', desc: 'Compliant fund transfers and tax support.' },
  { icon: IconDocument, title: 'Document Procurement', desc: 'Certified revenue documents, quickly and securely.' },
  { icon: IconManagement, title: 'Property Management', desc: 'Ongoing maintenance and tenant oversight for your estate.' },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__head">
          <Reveal as="div">
            <span className="eyebrow">WHAT WE DO</span>
            <h2>
              Every service your
              <br />
              property needs.
            </h2>
            <p>
              Legal, financial, and on-ground expertise — all under one roof, built for
              clients managing Kashmiri property from anywhere.
            </p>
          </Reveal>
          <Reveal as="div" className="services__stores" delay={100}>
            <GooglePlayBadge />
            <AppStoreBadge />
          </Reveal>
        </div>

        <div className="services__grid">
          {SERVICES.map(({ icon: Icon, title, desc }, i) => (
            <Reveal as="div" className="service-card" delay={(i % 2) * 90} key={title}>
              <span className="service-card__icon">
                <Icon />
              </span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
