import Link from "next/link";

import { Blank, LegalItem, LegalList, LegalSection } from "@/components/legal";
import { PageShell } from "@/components/page-shell";
import { MIN_BID, OUTBID_STEP } from "@/lib/bidding";
import { CONTACT_EMAIL, CONTACT_X, CONTACT_X_URL, SITE_URL } from "@/lib/contact";

export const metadata = { title: "Terms of Service · outbid.works" };

export default function Page() {
  return (
    <PageShell
      title="Terms of Service"
      description="These Terms govern access to and use of outbid.works — the public leaderboard, listing pages, checkout, and related features."
    >
      <div className="rounded-2xl border border-accent bg-accent-soft p-5">
        <h2 className="font-bold text-accent">Draft — not yet in force</h2>
        <p className="mt-2 text-sm leading-relaxed">
          Every highlighted blank below must be filled in before this page is
          published, and the whole document should be reviewed by a lawyer
          qualified in the governing jurisdiction. It is a starting structure,
          not legal advice. Checkout is also not built yet, so the payment
          clauses describe intended terms rather than a live flow.
        </p>
      </div>

      <p className="mt-8 text-muted">
        Effective <Blank>effective date</Blank>. Last updated{" "}
        <Blank>last updated date</Blank>.
      </p>

      <p className="mt-4 leading-relaxed">
        By using the Service, creating a listing, or completing a payment, you
        agree to these Terms and to our{" "}
        <Link href="/privacy" className="text-accent underline underline-offset-4">
          Privacy Policy
        </Link>
        . If you do not agree, do not use the Service and do not pay for a
        ranking. Before checkout you
        must confirm, by checking a box, that you have read and agree to these
        Terms.
      </p>

      <LegalSection title="Operator and contact">
        <p>
          The Service is operated by <Blank>legal name of operator</Blank>,{" "}
          <Blank>legal form — e.g. sole proprietor / private limited company
          </Blank>, based in <Blank>country</Blank> (&ldquo;we&rdquo;,
          &ldquo;us&rdquo;, &ldquo;our&rdquo;). The Service is provided from{" "}
          {SITE_URL}. Required provider details are at{" "}
          <Blank>link to imprint or company details page, if your jurisdiction
          requires one</Blank>.
        </p>
        <LegalList>
          <LegalItem>
            Legal and listing notices:{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-accent underline underline-offset-4"
            >
              {CONTACT_EMAIL}
            </a>
          </LegalItem>
          <LegalItem>
            Public contact:{" "}
            <a
              href={CONTACT_X_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="text-accent underline underline-offset-4"
            >
              @{CONTACT_X}
            </a>{" "}
            on X
          </LegalItem>
        </LegalList>
        <p>
          These Terms work together with the public{" "}
          <Link href="/rules" className="text-accent underline underline-offset-4">
            Rules
          </Link>
          . If the Rules and these Terms conflict, these Terms control.
        </p>
      </LegalSection>

      <LegalSection title="What the Service is">
        <p>
          outbid.works is a paid public ranking. You may pay to list a video and
          to occupy a rank based on the amount paid, according to the Rules.
          Listings are paid advertisements — not editorial reviews,
          certifications, endorsements, or independent rankings.
        </p>
        <p>
          A payment buys a chance to appear on the board at the rank that amount
          can take at the time it is fulfilled. It does not buy views, clicks,
          subscribers, revenue, exclusive placement, a fixed duration at a
          specific rank, search-engine ranking, or any particular result.
          Someone else can pay more and outrank you. We may change, pause, or
          discontinue features, including categories and ranking formulas.
        </p>
      </LegalSection>

      <LegalSection title="Eligibility">
        <LegalList>
          <LegalItem>
            You must be at least 18 years old and able to form a binding
            contract.
          </LegalItem>
          <LegalItem>
            If you use the Service for a company, you represent that you have
            authority to bind that company, and &ldquo;you&rdquo; includes that
            company.
          </LegalItem>
          <LegalItem>
            You may not use the Service if you are prohibited from receiving
            services under the laws of <Blank>governing jurisdiction</Blank> or
            another applicable jurisdiction, including trade sanctions.
          </LegalItem>
        </LegalList>
      </LegalSection>

      <LegalSection title="Payments and taxes">
        <p>
          Checkout is processed by <Blank>payment processor</Blank>. We do not
          collect or store full payment-card numbers. The processor&apos;s terms
          and privacy notice also apply to the payment itself. Amounts are
          priced in US dollars. Applicable taxes may be added at checkout.
        </p>
        <p>
          Rank amounts, the ${MIN_BID} minimum, the ${OUTBID_STEP} increment
          required to take #1, and raise-only-the-difference charges are
          described in the Rules and shown before you pay. Completing checkout
          is an offer to buy ranking placement on those terms. Rank is assigned
          when payment is confirmed and the listing is written to the board, at
          whatever position that amount then supports.
        </p>
      </LegalSection>

      <LegalSection title="No refunds">
        <p>
          All payments are final and not refundable. Ranking placement is a
          digital service that begins as soon as payment is confirmed: the
          listing is created or the rank is raised, and the paid amount is
          counted on the public board. Being outranked later, fewer clicks than
          you hoped for, a category you dislike, downtime, or a later removal
          for breach of these Terms does not create a refund.
        </p>
        <p>
          By completing checkout you request that we start this digital service
          immediately and acknowledge that you lose any statutory right of
          withdrawal or cooling-off period to the extent that law allows that
          waiver. Where a mandatory consumer right cannot be waived, we honor
          that right. Chargebacks, payment disputes, or reversed payments
          without a legally required basis are a breach of these Terms; we may
          remove the listing and refuse future use of the Service.
        </p>
      </LegalSection>

      <LegalSection title="Listings must be yours">
        <p>
          You may only list a video that you own or are authorized to represent.
          You must hold the rights to the video and to send visitors to it, and
          any channel, product, or site it promotes must comply with the law
          that applies to it, including any company or operator details that law
          requires it to display.
        </p>
        <p>
          Details that are missing, fake, incomplete, impersonating someone
          else, or that we cannot reasonably verify are grounds for removal. We
          may take down a listing at any time if those details are not in order,
          without refund.
        </p>
      </LegalSection>

      <LegalSection title="Your warranties">
        <p>
          By submitting a URL or payment, you represent and warrant that:
        </p>
        <LegalList>
          <LegalItem>
            You have the right to list that video and to send visitors to it.
          </LegalItem>
          <LegalItem>
            The listing and destination comply with all applicable laws,
            including advertising, consumer, privacy, intellectual-property, and
            regulated-industry rules.
          </LegalItem>
          <LegalItem>
            You are not impersonating another person, brand, or company, and you
            are not claiming a rank for a competitor&apos;s video without
            authorization.
          </LegalItem>
          <LegalItem>
            The destination is not malware, phishing, a scam, or content whose
            primary purpose is to deceive viewers.
          </LegalItem>
          <LegalItem>
            The information you submit is accurate, and you will keep it
            accurate.
          </LegalItem>
        </LegalList>
      </LegalSection>

      <LegalSection title="Prohibited listings and use">
        <p>In addition to the Rules, you may not list or use the Service for:</p>
        <LegalList>
          <LegalItem>
            Sexual, pornographic, or adult-platform content; chat, invite, or
            messaging-group links; or link shorteners used to hide the real
            destination.
          </LegalItem>
          <LegalItem>
            Content that is illegal, fraudulent, defamatory, harassing, hateful,
            violent, or that exploits children.
          </LegalItem>
          <LegalItem>
            Counterfeit goods, unauthorized streaming, or other infringement of
            copyright, trademark, or other rights.
          </LegalItem>
          <LegalItem>
            Offers that require licenses you do not have, including certain
            financial, medical, gambling, or weapons-related offers.
          </LegalItem>
          <LegalItem>
            Interfering with the Service: scraping beyond ordinary browsing,
            manipulating click counts, bypassing rate limits, automated rank
            claims without our written permission, or reverse engineering except
            as allowed by mandatory law.
          </LegalItem>
        </LegalList>
      </LegalSection>

      <LegalSection title="Our right to remove listings">
        <p>
          We may refuse, delay, edit, recategorize, hide, or permanently remove
          any listing, rank, or related page, with or without notice, including
          where we believe these Terms, the Rules, or the law may have been
          broken; where a rights holder or a platform complains; where required
          details are missing or invalid; or where we think the listing creates
          legal, security, or reputational risk. Removal does not entitle you to
          a refund.
        </p>
      </LegalSection>

      <LegalSection title="Fair use and third-party content">
        <p>
          To run the board we fetch and display publicly available information
          about listed videos: titles, descriptions, and poster images served by
          the hosting platform. We use that material only to identify the listed
          video on outbid.works, to show visitors where a paid ranking leads,
          and to operate, moderate, and improve the Service.
        </p>
        <p>
          We use third-party names and marks solely to identify the video or
          platform being listed. That is not an affiliation with, sponsorship
          by, or endorsement from the rights holder unless the lister is that
          rights holder. <Blank>Confirm with counsel that this framing works in
          your jurisdiction — nominative fair use is a US doctrine and has no
          exact equivalent everywhere.</Blank>
        </p>
        <p>
          outbid.works, our wordmark, and the look of the Service are ours. You
          may not copy the Service, scrape the board for a competing ranking
          product, or use our brand in a way that suggests we endorse you.
          YouTube, Vimeo, TikTok, Twitch, and other third-party names remain
          their owners&apos; property.
        </p>
      </LegalSection>

      <LegalSection title="License you grant us">
        <p>
          You grant us a worldwide, non-exclusive, royalty-free license to host,
          cache, reproduce, adapt (for sizing, formatting, and ranking display),
          and publicly display the listing and the public metadata we fetch, for
          as long as needed to operate, promote, and keep an archive of the
          Service. You also grant visitors a right to see that listing on the
          Service. If you want a listing taken down, email{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-accent underline underline-offset-4"
          >
            {CONTACT_EMAIL}
          </a>. Takedown does not undo a completed
          payment.
        </p>
      </LegalSection>

      <LegalSection title="Complaints and rights notices">
        <p>
          If you believe a listing infringes your copyright, trademark,
          publicity, or other rights, or that a listed video is unlawful, email{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-accent underline underline-offset-4"
          >
            {CONTACT_EMAIL}
          </a> with: (1) your name and contact
          details; (2) the listing URL on outbid.works; (3) the destination
          video URL; (4) a description of the problem; and (5) a statement that
          the notice is accurate and that you are the rights holder or
          authorized to act. We may remove or restrict the listing while we
          review the notice. We may share the notice with the lister. Repeat or
          abusive notices may be ignored.
        </p>
      </LegalSection>

      <LegalSection title="No endorsement, no results claims">
        <p>
          Appearance on the board is not our opinion of a video. We do not
          verify that listed creators, claims, or results are true. Click and
          visitor counts describe what our systems recorded; they are not a
          promise that you will get the same outcome. Your results depend on
          your rank, your video, timing, and factors we do not control.
        </p>
        <p>
          Links from the Service to listed videos leave outbid.works. Those
          destinations have their own terms and practices. We are not
          responsible for them.
        </p>
      </LegalSection>

      <LegalSection title="Availability and changes">
        <p>
          We provide the Service as-is. It may be unavailable, slow, or
          incorrect. We may change ranking rules, minimums, categories, or these
          Terms. If a change is material, we will update the date at the top of
          this page. Continued use after a change means you accept the new
          Terms. For a payment already completed, the Terms in effect at
          checkout still apply to that payment, except where a change is
          required by law or needed to address a security or legal risk.
        </p>
      </LegalSection>

      <LegalSection title="Disclaimers">
        <p>
          To the fullest extent permitted by law, we disclaim all warranties,
          express or implied, including merchantability, fitness for a
          particular purpose, quiet enjoyment, and non-infringement. We do not
          warrant that the Service will be uninterrupted, secure, or free of
          errors, or that listings, names, images, ranks, or click counts are
          accurate or complete.
        </p>
      </LegalSection>

      <LegalSection title="Limitation of liability">
        <p>
          We do not limit liability that applicable law says we cannot limit,
          including liability for intent, gross negligence, injury to life,
          body, or health, or liability under mandatory product-liability rules.
          Subject to that:
        </p>
        <LegalList>
          <LegalItem>
            We are not liable for lost profits, lost data, lost goodwill,
            substitute services, or other indirect, incidental, special, or
            consequential damages.
          </LegalItem>
          <LegalItem>
            For slight negligence, we are liable only for a foreseeable breach
            of duties that are essential to these Terms, and only for typical,
            foreseeable damage.
          </LegalItem>
          <LegalItem>
            Our total liability for a claim relating to a payment is limited to
            the amount you paid us for the listing that the claim concerns in
            the three months before the claim.
          </LegalItem>
        </LegalList>
      </LegalSection>

      <LegalSection title="Indemnity">
        <p>
          You will defend, indemnify, and hold harmless{" "}
          <Blank>legal name of operator</Blank> and people working on the
          Service from claims, damages, losses, and reasonable legal fees
          arising out of your listing, your destination video, your payment or
          chargeback, your breach of these Terms, or your infringement of
          someone else&apos;s rights. We may take over the defense of a claim;
          you will cooperate.
        </p>
      </LegalSection>

      <LegalSection title="Governing law">
        <p>
          These Terms are governed by the laws of{" "}
          <Blank>governing jurisdiction</Blank>, excluding conflict-of-law
          rules. If you are a consumer with a mandatory local law that cannot be
          displaced, that law still protects you. If you are not a consumer, the
          courts at <Blank>venue — e.g. our place of business</Blank> have
          exclusive jurisdiction, to the extent permitted.
        </p>
      </LegalSection>

      <LegalSection title="General">
        <LegalList>
          <LegalItem>
            If a part of these Terms is unenforceable, the rest remains in
            effect, and the invalid part is replaced by the valid term that
            comes closest to the original intent.
          </LegalItem>
          <LegalItem>
            Our failure to enforce a provision is not a waiver. You may not
            assign these Terms without our consent; we may assign them in
            connection with a transfer of the Service.
          </LegalItem>
          <LegalItem>
            These Terms, the Rules, the Privacy Policy, and the checkout details
            you confirm form the entire agreement for the Service.
          </LegalItem>
          <LegalItem>
            Payments, hosting, and analytics involve third parties. Their
            outages or decisions are outside our control.
          </LegalItem>
        </LegalList>
      </LegalSection>
    </PageShell>
  );
}
