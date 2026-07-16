import LegalLayout from '../components/LegalLayout'

export default function DeleteAccount() {
  return (
    <LegalLayout
      eyebrow="ACCOUNT"
      title="Delete Your Account"
      updated="16 July 2026"
      intro="You're in control of your Houseker Estates account and data. Here's exactly how to request deletion, what happens to your information, and how long it takes."
    >
      <h2>Before you start</h2>
      <p>
        Deleting your account removes your profile from Houseker Estates and closes access to
        the app. If you have an <strong>active case</strong> — an ongoing property sale, a
        Power of Attorney in progress, or a pending payment — let us know when you request
        deletion so we can confirm how that case should be wound down first. Closing an account
        mid-transaction without doing this could leave a legal or financial matter unresolved.
      </p>

      <h2>How to request deletion</h2>
      <ol className="legal-steps">
        <li>
          Open the Houseker Estates app and go to <strong>Profile</strong>.
        </li>
        <li>
          Tap <strong>Help &amp; Support</strong>.
        </li>
        <li>
          Send us a message titled <strong>"Delete My Account"</strong>, including your
          registered phone number or email so we can find and verify your account.
        </li>
        <li>
          Prefer not to use the app? Email{' '}
          <a href="mailto:hello@chinarestates.in">hello@chinarestates.in</a> with the subject{' '}
          <strong>"Delete My Account"</strong> from your registered email address, or call{' '}
          <a href="tel:+91XXXXXXXXXX">+91 XXX XXX XXXX</a> and ask our team to process a
          deletion request.
        </li>
        <li>Our team verifies that the request came from you, the account holder.</li>
        <li>
          If you have any active case, we'll confirm with you how it should be closed out or
          handed off before deleting your profile.
        </li>
        <li>We deactivate your account so you can no longer sign in, then delete your personal data as described below.</li>
      </ol>

      <div className="legal-callout">
        <h3>Timeline</h3>
        <p>
          Your account is deactivated within <strong>7 business days</strong> of a verified
          request. Personal profile data is permanently deleted within <strong>30 days</strong>,
          except information we're required to retain — see below.
        </p>
      </div>

      <h2>What gets deleted</h2>
      <ul>
        <li>Your name, phone number, email, profile photo, and account preferences.</li>
        <li>Your login credentials and sign-in access via Firebase.</li>
        <li>Property and case details for any closed, non-legally-required case files.</li>
      </ul>

      <h2>What we keep, and why</h2>
      <p>
        Even after deletion, a limited set of records may be retained where the law requires
        it or where it protects you and us in the event of a dispute:
      </p>
      <ul>
        <li>
          <strong>Financial and payment records</strong> — retained for the period required by
          tax and audit law, even after your account is deleted.
        </li>
        <li>
          <strong>Documents tied to an open legal matter</strong> — such as a Power of Attorney
          in force, or a title under active verification — retained until that matter is fully
          closed, since deleting them mid-process could affect a live legal transaction.
        </li>
        <li>
          <strong>Records needed to resolve a dispute or investigate fraud</strong> — retained
          only as long as necessary for that purpose.
        </li>
      </ul>
      <p>Retained records are kept solely for these purposes and are not used to re-market to you.</p>

      <h2>If you only browsed as a guest</h2>
      <p>
        If you never created an account or completed OTP verification, we don't hold a profile
        for you — simply uninstall the app or clear your browser data.
      </p>

      <h2>Need help?</h2>
      <p>
        If your account is linked to an ongoing case and you're not sure what deleting it will
        affect, talk to your account manager first, or reach our team at{' '}
        <a href="mailto:hello@chinarestates.in">hello@chinarestates.in</a> or{' '}
        <a href="tel:+91XXXXXXXXXX">+91 XXX XXX XXXX</a>.
      </p>
    </LegalLayout>
  )
}
