import heroHouse from '../assets/hero-house.png'
import user1 from '../assets/user1.png'
import user2 from '../assets/user2.png'
import user3 from '../assets/user3.png'
import playStore from '../assets/play_store.png'
import appStore from '../assets/app_store.png'
import { IconStar, IconShield } from './icons'
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
            <img src={playStore} alt="Google Play" className="store-badge-img" />
            <img src={appStore} alt="App Store" className="store-badge-img" />
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
              <img src={user1} alt="User" />
              <img src={user2} alt="User" />
              <img src={user3} alt="User" />
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
