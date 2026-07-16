import aboutCabin from '../assets/about-cabin.jpg'
import { IconCheckCircle, IconStar } from './icons'
import Reveal from './Reveal'
import './About.css'

const POINTS = [
  'Licensed Professionals',
  'Dedicated Account Manager',
  'Serving 20+ Countries',
  '99% Secure Transactions',
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about__inner">
        <Reveal as="div" className="about__copy">
          <span className="eyebrow eyebrow--dark">ABOUT US</span>
          <h2>
            Your bridge between
            <br />
            <span className="text-coral">abroad</span> &amp; home.
          </h2>
          <p className="about__sub">
            Chinar Estates exists to give Kashmiri property owners and overseas investors
            complete peace of mind. Managing property from miles away shouldn't be
            demanding — we make it effortless.
          </p>
          <p className="about__sub">
            Certified legal experts, on-ground field officers, and financial advisors
            working in concert to deliver end-to-end solutions — transparently and
            securely.
          </p>

          <ul className="about__points">
            {POINTS.map((point) => (
              <li key={point}>
                <IconCheckCircle /> {point}
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn btn-primary">
            Contact Our Team
          </a>
        </Reveal>

        <Reveal as="div" className="about__media" delay={120}>
          <div className="about__frame">
            <img src={aboutCabin} alt="Modern mountain estate managed by Houseker" />
          </div>
          <div className="about__rating">
            <strong>
              4.9 <IconStar />
            </strong>
            <span>Google Rating</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
