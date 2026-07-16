import heroHouse from '../assets/hero-house.png'
import { GooglePlayBadge, AppStoreBadge, IconStar, IconShield } from './icons'
import Reveal from './Reveal'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <Reveal as="div" className="hero__copy">
          <span className="eyebrow">A HOUSEKER.IT PROPERTY SERVICE</span>
          <h1>
            Your Kashmir
            <br />
            Property,
            <br />
            Handled.
          </h1>
          <p className="hero__sub">
            Buy, verify, and manage estates across the Valley — from legal paperwork to
            on-ground inspections. Done right, done remote, done securely.
          </p>
          <div className="hero__stores">
            <GooglePlayBadge />
            <AppStoreBadge />
          </div>
        </Reveal>

        <Reveal as="div" className="hero__media" delay={120}>
          <div className="hero__frame">
            <img src={heroHouse} alt="Verified Kashmir property with traditional green roof" />
            <span className="hero__badge">
              <IconShield />
              VERIFIED PROPERTY
            </span>
            <span className="hero__location">📍 Srinagar</span>
            <div className="hero__gradient" />
          </div>

          <div className="hero__float-card">
            <div className="avatar-stack">
              <span style={{ background: '#f0664f' }} />
              <span style={{ background: '#17130f' }} />
              <span style={{ background: '#e2b98f' }} />
            </div>
            <div className="hero__float-card-text">
              <strong>1,200+</strong>
              <span>Happy Clients</span>
            </div>
            <div className="hero__float-rating">
              <IconStar />
              <span>4.9</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
