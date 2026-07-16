import { Link } from 'react-router-dom'
import { IconArrowRight } from './icons'
import Reveal from './Reveal'
import './LegalLayout.css'

export default function LegalLayout({ eyebrow, title, updated, intro, children }) {
  return (
    <article className="legal">
      <div className="container legal__head">
        <Reveal as="div">
          <Link to="/" className="legal__back">
            <IconArrowRight width="15" height="15" style={{ transform: 'rotate(180deg)' }} />
            Back to home
          </Link>
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          {updated && <p className="legal__updated">Last updated: {updated}</p>}
          {intro && <p className="legal__intro">{intro}</p>}
        </Reveal>
      </div>

      <div className="container legal__body">
        <div className="legal__content">{children}</div>
      </div>
    </article>
  )
}
