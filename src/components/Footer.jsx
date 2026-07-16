import { Link } from 'react-router-dom'
import { Logomark, SocialInstagram, SocialFacebook, SocialX, SocialLinkedin } from './icons'
import './Footer.css'

const COLUMNS = [
  {
    title: 'Services',
    links: [
      { label: 'Property Sales', href: '/#services' },
      { label: 'Legal Verification', href: '/#services' },
      { label: 'Power of Attorney', href: '/#services' },
      { label: 'Property Management', href: '/#services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/#about' },
      { label: 'How it Works', href: '/#how-it-works' },
      { label: 'FAQ', href: '/#faq' },
      { label: 'Contact', href: '/#contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms & Conditions', href: '/terms' },
      { label: 'Delete My Account', href: '/delete-account' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <Link to="/" className="brand">
            <Logomark className="brand__mark" />
            <span className="brand__text">
              HOUSEKER
              <em>Estates</em>
            </span>
          </Link>
          <p>
            Kashmir's trusted property service. Verify, buy, and manage estates from
            anywhere in the world — done right, done remote.
          </p>
          <div className="site-footer__social">
            <a href="#" aria-label="Instagram"><SocialInstagram /></a>
            <a href="#" aria-label="Facebook"><SocialFacebook /></a>
            <a href="#" aria-label="X"><SocialX /></a>
            <a href="#" aria-label="LinkedIn"><SocialLinkedin /></a>
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div className="site-footer__col" key={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container site-footer__bottom">
        <span>© {new Date().getFullYear()} Houseker Estates. All rights reserved.</span>
        <span>Made for the Kashmir Valley.</span>
      </div>
    </footer>
  )
}
