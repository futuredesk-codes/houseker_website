import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Logomark, IconMenu, IconClose } from './icons'
import './Header.css'

const LINKS = [
  { label: 'Services', href: '/#services' },
  { label: 'Property', href: '/#services' },
  { label: 'How it Works', href: '/#how-it-works' },
  { label: 'About us', href: '/#about' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container site-header__inner">
        <Link to="/" className="brand">
          <Logomark className="brand__mark" />
          <span className="brand__text">
            HOUSEKER
            <em>Estates</em>
          </span>
        </Link>

        <nav className="site-nav">
          {LINKS.map((link) => (
            <Link key={link.label} to={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <Link to="/#contact" className="btn btn-primary header-cta">
          Get Started
        </Link>

        <button className="nav-toggle" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {open && (
        <div className="mobile-nav">
          {LINKS.map((link) => (
            <Link key={link.label} to={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link to="/#contact" className="btn btn-primary" onClick={() => setOpen(false)}>
            Get Started
          </Link>
        </div>
      )}
    </header>
  )
}
