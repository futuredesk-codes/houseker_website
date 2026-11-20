import { useState, useRef, useEffect } from 'react'
import heroAnimation from '../assets/hero-animation.mp4'
import heroMascot from '../assets/hero-mascot.jpg'
import user1 from '../assets/user1.png'
import user2 from '../assets/user2.png'
import user3 from '../assets/user3.png'
import playStore from '../assets/play_store.png'
import appStore from '../assets/app_store.png'
import { IconStar, IconShield, IconVolumeUp, IconVolumeMuted } from './icons'
import Reveal from './Reveal'
import './Hero.css'

export default function Hero() {
  const videoRef = useRef(null)
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Attempt to start unmuted if browser permits
    video.muted = false
    const promise = video.play()
    if (promise !== undefined) {
      promise
        .then(() => {
          setIsMuted(false)
        })
        .catch(() => {
          // Browser autoplay policy blocked unmuted play -> fallback to muted
          video.muted = true
          setIsMuted(true)
          video.play().catch(() => {})
        })
    }
  }, [])

  const toggleSound = (e) => {
    if (e) e.stopPropagation()
    const video = videoRef.current
    if (!video) return

    if (video.muted) {
      video.muted = false
      setIsMuted(false)
      video.play().catch(() => {})
    } else {
      video.muted = true
      setIsMuted(true)
    }
  }

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
            <a href="https://play.google.com/store/apps/details?id=com.user.houseker" target="_blank" rel="noopener noreferrer">
              <img src={playStore} alt="Google Play" className="store-badge-img" />
            </a>
            <a href="https://apps.apple.com/in/app/houseker/id6793454462" target="_blank" rel="noopener noreferrer">
              <img src={appStore} alt="App Store" className="store-badge-img" />
            </a>
          </div>
        </Reveal>

        <Reveal as="div" className="hero__media" delay={120}>
          <div className="hero__frame" onClick={toggleSound} title="Click to toggle sound">
            <video
              ref={videoRef}
              src={heroAnimation}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              poster={heroMascot}
              className="hero__video"
            />
            <span className="hero__badge">
              <IconShield />
              VERIFIED PROPERTY
            </span>
            <span className="hero__location">📍 Srinagar</span>

            <button
              type="button"
              className="hero__sound-btn"
              onClick={toggleSound}
              aria-label={isMuted ? "Unmute video" : "Mute video"}
              title={isMuted ? "Unmute sound" : "Mute sound"}
            >
              {isMuted ? <IconVolumeMuted /> : <IconVolumeUp />}
              <span>{isMuted ? "Tap for Sound" : "Mute"}</span>
            </button>

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
