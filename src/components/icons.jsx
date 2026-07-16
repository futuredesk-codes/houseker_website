export const Logomark = (props) => (
  <svg viewBox="0 0 32 32" fill="none" {...props}>
    <path d="M16 3 3 12v17h9V18h8v11h9V12L16 3Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
  </svg>
)

export const GooglePlayBadge = (props) => (
  <div className="store-badge" {...props}>
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <path d="M4 3.5c-.4.3-.6.8-.6 1.4v14.2c0 .6.2 1.1.6 1.4l.1.1L12 12.4 4.1 3.4l-.1.1Z" fill="#4CAF50" />
      <path d="M14.6 15 12 12.4l7.9-7.9c.7.5 1.2 1.3 1.2 2.3v10.4c0-1 .4-1.8 1.2-2.3l-7.7 4.1Z" fill="#F44336" />
      <path d="M4.1 20.6c.3.2.8.2 1.3-.1l9.2-5.5-2-2-8.5 7.6Z" fill="#2196F3" />
      <path d="M14.6 9.8 21.1 6c-.4-.5-1-.9-1.8-.9l-4.7 4.7Z" fill="#FFC107" />
    </svg>
    <div>
      <span>GET IT ON</span>
      <strong>Google Play</strong>
    </div>
  </div>
)

export const AppStoreBadge = (props) => (
  <div className="store-badge" {...props}>
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M17.3 12.4c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.6-1.3-.1-2.5.8-3.2.8-.6 0-1.7-.7-2.8-.7-1.4 0-2.8.8-3.5 2.1-1.5 2.6-.4 6.5 1.1 8.6.7 1 1.6 2.2 2.7 2.2 1.1 0 1.5-.7 2.8-.7s1.7.7 2.8.7 1.9-1 2.6-2.1c.8-1.2 1.1-2.3 1.2-2.4-.1 0-2.5-1-2.5-3.7ZM15 5.9c.6-.7 1-1.7.9-2.7-.9.1-1.9.6-2.5 1.3-.5.6-1 1.6-.9 2.6 1 .1 1.9-.5 2.5-1.2Z" />
    </svg>
    <div>
      <span>Download on the</span>
      <strong>App Store</strong>
    </div>
  </div>
)

export const IconSale = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M3 10.5 12 4l9 6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.5 9v9a1 1 0 0 0 1 1H10v-5.5a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2V19h3.5a1 1 0 0 0 1-1V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const IconLegal = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 3 4 6v6c0 4.4 3.4 7.7 8 9 4.6-1.3 8-4.6 8-9V6l-8-3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="m8.5 12 2.3 2.3L15.5 9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const IconEncroachment = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />
    <path d="M20 20 15.6 15.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M11 8v3l2 1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const IconPOA = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M6 3.5h9l3 3V20a.7.7 0 0 1-.7.7H6.7A.7.7 0 0 1 6 20V3.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M9 13.5 11 15.5 15.5 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const IconAncestral = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 3v4.5M12 7.5 8 11h8l-4-3.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M6 11v9M18 11v9M4 20h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M9 15v3M12 15v3M15 15v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
)

export const IconRemittance = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M4 8h13M17 8l-3-3M17 8l-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 16H7M7 16l3-3M7 16l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const IconDocument = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M7 3.5h7l3.5 3.5V20a.7.7 0 0 1-.7.7H7.7A.7.7 0 0 1 7 20V3.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M10 12h6M10 15.5h6M10 8.5h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
)

export const IconManagement = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M4 20V10.5L12 4l8 6.5V20a.7.7 0 0 1-.7.7H4.7A.7.7 0 0 1 4 20Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <circle cx="12" cy="14" r="2.3" stroke="currentColor" strokeWidth="1.6" />
  </svg>
)

export const IconCheckCircle = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.8" />
    <path d="m8 12.3 2.6 2.6L16 9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const IconBell = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M6 17V10.5a6 6 0 1 1 12 0V17l1.5 2h-15L6 17Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    <path d="M10 21.5a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
)

export const IconVault = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.7" />
    <path d="M12 5v2M12 17v2M5 12h2M17 12h2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
)

export const IconChat = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M4 5.5h16v10H9l-4 3.5v-3.5H4v-10Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    <path d="M8 9.5h8M8 12.5h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export const IconStar = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.8 14.8 9l6.7.6-5 4.5 1.5 6.6L12 17.4 5.9 20.7l1.5-6.6-5-4.5L9.2 9 12 2.8Z" />
  </svg>
)

export const IconArrowRight = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M4.5 12h15M13 5.5 19.5 12 13 18.5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const IconPlay = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M8 5.5v13l11-6.5-11-6.5Z" />
  </svg>
)

export const IconPhone = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M6.6 3.5h3l1.4 4.3-2 1.6a12 12 0 0 0 5.6 5.6l1.6-2 4.3 1.4v3a1.5 1.5 0 0 1-1.6 1.5C11.8 18.5 5.5 12.2 5 5.1a1.5 1.5 0 0 1 1.6-1.6Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
  </svg>
)

export const IconMail = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.7" />
    <path d="m4.5 6.5 7.5 6 7.5-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const IconPin = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 21s7-6.5 7-11.5a7 7 0 1 0-14 0C5 14.5 12 21 12 21Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    <circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.7" />
  </svg>
)

export const IconChevronDown = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const IconMenu = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M4 6.5h16M4 12h16M4 17.5h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)

export const IconClose = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="m5 5 14 14M19 5 5 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)

export const IconShield = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 3 4 6v6c0 4.4 3.4 7.7 8 9 4.6-1.3 8-4.6 8-9V6l-8-3Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
  </svg>
)

export const SocialInstagram = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
  </svg>
)

export const SocialFacebook = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M14 8.5h2V5.5h-2c-2 0-3.3 1.4-3.3 3.4V11H9v3h1.7v6.5h3V14H16l.5-3h-2.8V9.2c0-.5.3-.7.8-.7Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
  </svg>
)

export const SocialX = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M4.5 4.5 19.5 19.5M19.5 4.5 4.5 19.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
)

export const SocialLinkedin = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="3" stroke="currentColor" strokeWidth="1.6" />
    <path d="M7.5 10.5v6M7.5 8v.01M11 16.5v-4c0-1 .8-1.8 2-1.8s1.8.8 1.8 1.8v4M11 12.5v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
