import { Link } from 'react-router-dom'
import LegalLayout from '../components/LegalLayout'

export default function Terms() {
  return (
    <LegalLayout
      eyebrow="LEGAL"
      title="Terms &amp; Conditions"
      updated="16 July 2026"
      intro="These terms govern your use of the Houseker Estates website and mobile app, and the property services we coordinate on your behalf. By creating an account or requesting a service, you agree to them."
    >
      <h2>1. Who we are</h2>
      <p>
        Houseker Estates (also operating as Chinar Estates) helps Kashmiri property owners and
        overseas investors buy, sell, verify, and manage property across the Kashmir Valley.
        We act as a coordinator between you and the certified legal experts, on-ground field
        officers, and financial advisors who carry out the actual legal, inspection, and
        financial work on your case.
      </p>

      <h2>2. Our services</h2>
      <p>We offer the following services, either directly or through our professional network:</p>
      <ul>
        <li><strong>Property Sales</strong> — buying or selling estates, including title verification and secure closing.</li>
        <li><strong>Legal Verification</strong> — revenue paper checks and dispute-free title certification.</li>
        <li><strong>Encroachment Check</strong> — geo-tagged on-ground inspection of your property boundaries.</li>
        <li><strong>Power of Attorney (POA)</strong> — drafting, attestation, and registration support.</li>
        <li><strong>Ancestral Property Identification</strong> — locating and confirming inherited holdings via land records and surveys.</li>
        <li><strong>Remittance &amp; Tax</strong> — guidance on compliant fund transfers and related tax matters.</li>
        <li><strong>Document Procurement</strong> — obtaining certified revenue and legal documents on your behalf.</li>
        <li><strong>Property Management</strong> — ongoing maintenance and tenant oversight for your estate.</li>
      </ul>
      <p>
        We are not a law firm, bank, or government land-records office. Where a service
        involves legal work (like drafting a POA) or a financial transaction, it is carried
        out by, or in coordination with, licensed professionals — we are responsible for
        coordinating the service and keeping you informed, not for acting as your lawyer or
        banker.
      </p>

      <h2>3. Creating an account</h2>
      <ul>
        <li>You must provide accurate, current information, including a phone number you can verify by OTP.</li>
        <li>You must be legally competent to enter into property and financial transactions in your jurisdiction.</li>
        <li>One account per person. You're responsible for activity on your account.</li>
        <li>
          If you sign in with Google, we rely on Google/Firebase to confirm your identity for
          that sign-in method.
        </li>
      </ul>

      <h2>4. Service timelines and outcomes</h2>
      <p>
        Property, legal, and government processes (land-records offices, courts, tax
        authorities) are outside our control. Any timeline we give you — for a POA, a title
        verification, or a sale — is an estimate, not a guarantee. We'll keep you updated if
        something changes, but we can't promise a specific outcome or completion date for
        matters that depend on third parties or authorities.
      </p>

      <h2>5. Fees and payments</h2>
      <ul>
        <li>We'll share applicable fees with you before starting a paid service.</li>
        <li>Payment status for each service is tracked against your case in your account.</li>
        <li>We do not store your card or bank account numbers on our platform.</li>
        <li>Fees already paid for work completed are generally non-refundable, except where required by law or agreed with you in writing.</li>
      </ul>

      <h2>6. Your responsibilities</h2>
      <ul>
        <li>Provide accurate property details, documents, and identity information.</li>
        <li>Respond to requests from your account manager or field officer in a timely way — delays on your end can delay your case.</li>
        <li>Don't submit forged, altered, or misleading documents.</li>
        <li>Use the app and site for lawful property purposes only.</li>
      </ul>

      <h2>7. Power of Attorney — a note on responsibility</h2>
      <p>
        A Power of Attorney is a significant legal instrument that authorizes someone to act on
        your behalf. Please review any POA document carefully — ideally with independent legal
        advice — before signing. You remain responsible for decisions made under a POA you
        grant, and you can revoke it in line with applicable law; we'll help you process a
        revocation on request.
      </p>

      <h2>8. Prohibited use</h2>
      <ul>
        <li>Claiming ownership of, or requesting services on, property you don't have a legitimate right to.</li>
        <li>Submitting false ownership claims, forged documents, or misrepresenting an encroachment dispute.</li>
        <li>Using our platform, staff, or field officers for any unlawful purpose.</li>
        <li>Attempting to access another user's account or case file.</li>
      </ul>
      <p>
        We may suspend or block accounts that violate these terms, or where we reasonably
        suspect fraud, while we investigate.
      </p>

      <h2>9. Third-party services</h2>
      <p>
        Our app and website rely on third-party infrastructure — Firebase (Google) for
        sign-in, Cloudinary for secure file storage, and Google Maps Platform for address
        lookup. Your use of these features is also subject to those providers' own terms.
      </p>

      <h2>10. Intellectual property</h2>
      <p>
        The Houseker Estates name, logo, app, and website content are our property or used
        under license. You may not copy, reproduce, or repurpose them without our written
        permission.
      </p>

      <h2>11. Limitation of liability</h2>
      <p>
        We work carefully to verify and manage your property matters, but we can't guarantee
        against every outcome outside our control — including decisions by government
        authorities, courts, or third parties, or losses arising from inaccurate information
        you provided. To the extent permitted by law, our liability for any claim relating to
        our services is limited to the fees you paid us for the specific service giving rise to
        the claim.
      </p>

      <h2>12. Suspension and termination</h2>
      <p>
        You may stop using our services at any time. We may suspend or close an account that
        breaches these terms, is inactive, or is associated with suspected fraud. If you'd like
        to close your account and remove your personal data entirely, see{' '}
        <Link to="/delete-account">how to delete your account</Link>.
      </p>

      <h2>13. Governing law</h2>
      <p>
        These terms are governed by the laws of India, and disputes are subject to the
        jurisdiction of the courts of Jammu &amp; Kashmir, without prejudice to any statutory
        rights you may have in your country of residence.
      </p>

      <h2>14. Changes to these terms</h2>
      <p>
        We may update these terms as our services change. Continuing to use our app or website
        after an update means you accept the revised terms.
      </p>

      <h2>15. Contact us</h2>
      <p>
        Questions about these terms? Reach us at{' '}
        <a href="mailto:hello@chinarestates.in">hello@chinarestates.in</a>, call{' '}
        <a href="tel:+91XXXXXXXXXX">+91 XXX XXX XXXX</a>, or visit our team in Srinagar,
        Kashmir.
      </p>
    </LegalLayout>
  )
}
