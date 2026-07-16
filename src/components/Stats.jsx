import Reveal from './Reveal'
import './Stats.css'

const STATS = [
  { value: '500+', label: 'Estates Secured' },
  { value: '10+', label: 'Years in the Valley' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '20+', label: 'Countries Served' },
]

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats__inner">
        {STATS.map((stat, i) => (
          <Reveal as="div" className="stats__item" delay={i * 80} key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
