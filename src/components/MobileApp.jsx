import appMockup from '../assets/app-mockup.png'
import { GooglePlayBadge, AppStoreBadge, IconBell, IconVault, IconChat } from './icons'
import Reveal from './Reveal'
import './MobileApp.css'

const FEATURES = [
  { icon: IconBell, title: 'Real-Time Alerts', desc: 'Instant updates on your estates.' },
  { icon: IconVault, title: 'Document Vault', desc: 'Secure, encrypted storage for records.' },
  { icon: IconChat, title: 'Direct Chat', desc: 'Talk to your advisor, wherever you are.' },
]

export default function MobileApp() {
  return (
    <section className="mobile-app">
      <div className="container mobile-app__inner">
        <Reveal as="div" className="mobile-app__copy">
          <span className="eyebrow">MOBILE APP</span>
          <h2>
            The Valley in
            <br />
            your pocket.
          </h2>
          <p>
            Real-time updates on exclusive estates, instant document access, and direct
            contact with your property advisor — wherever you are.
          </p>

          <ul className="mobile-app__features">
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <li key={title}>
                <span className="mobile-app__feature-icon">
                  <Icon />
                </span>
                <div>
                  <strong>{title}</strong>
                  <span>{desc}</span>
                </div>
              </li>
            ))}
          </ul>

          <div className="mobile-app__stores">
            <GooglePlayBadge />
            <AppStoreBadge />
          </div>
        </Reveal>

        <Reveal as="div" className="mobile-app__media" delay={120}>
          <div className="phone-frame">
            <div className="phone-frame__notch" />
            <img src={appMockup} alt="Houseker Estates mobile app home screen" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
