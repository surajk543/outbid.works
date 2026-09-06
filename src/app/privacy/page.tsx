import Link from "next/link";

import { Blank, LegalItem, LegalList, LegalSection } from "@/components/legal";
import { PageShell } from "@/components/page-shell";
import { CONTACT_EMAIL, CONTACT_X, CONTACT_X_URL, SITE_URL } from "@/lib/contact";

export const metadata = { title: "Privacy Policy · outbid.works" };

export default function Page() {
  return (
    <PageShell
      title="Privacy Policy"
      description="How outbid.works handles information when you visit the site, click a listing, or place a bid. It sits alongside the Terms of Service."
    >
      <div className="rounded-2xl border border-accent bg-accent-soft p-5">
        <h2 className="font-bold text-accent">Draft — review before publishing</h2>
        <p className="mt-2 text-sm leading-relaxed">
          This describes what the code actually does today, which is very
          little: one functional cookie, no analytics, no accounts, no payments.
          Every highlighted blank still needs filling, and a lawyer in the
          governing jurisdiction should review it. Adding checkout, analytics,
          or emails later means rewriting this page.
        </p>
      </div>

      <p className="mt-8 text-muted">
        Effective <Blank>effective date</Blank>. Last updated{" "}
        <Blank>last updated date</Blank>.
      </p>

      <LegalSection title="Who is responsible">
        <p>
          The controller for personal data processed through the Service is{" "}
          <Blank>legal name of operator</Blank>,{" "}
          <Blank>legal form</Blank>, based in <Blank>country</Blank>. The
          Service is provided from {SITE_URL}.
        </p>
        <LegalList>
          <LegalItem>
            Email:{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-accent underline underline-offset-4"
            >
              {CONTACT_EMAIL}
            </a>
          </LegalItem>
          <LegalItem>
            X:{" "}
            <a
              href={CONTACT_X_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="text-accent underline underline-offset-4"
            >
              @{CONTACT_X}
            </a>
          </LegalItem>
        </LegalList>
      </LegalSection>

      <LegalSection title="What we collect">
        <p>
          The Service is deliberately small. There are no accounts and no
          login, and the single cookie it sets is functional rather than a
          tracker.
        </p>
        <LegalList>
          <LegalItem>
            <strong>Listing data.</strong> The video URL you submit, along with
            the title, description, category, and bid amount. All of it is
            public by design — that is the board.
          </LegalItem>
          <LegalItem>
            <strong>Click counts.</strong> When someone opens a listing we
            increase a counter on that listing by one. We do not store who
            clicked, when, from where, or from what device. The counter is a
            single number with nothing attached to it.
          </LegalItem>
          <LegalItem>
            <strong>A cookie recording which listings you have opened.</strong>{" "}
            So that opening the same listing twice is not counted twice, your
            browser stores a cookie named <code>outbid_seen</code> holding the
            listing numbers you have already been counted for. It lasts a year,
            contains no identifier for you, and is never sent anywhere except
            back to this site. Clearing it simply means your next click counts
            again.
          </LegalItem>
          <LegalItem>
            <strong>Theme preference.</strong> Light or dark is saved in your
            browser&apos;s local storage. It never leaves your device and never
            reaches our server.
          </LegalItem>
          <LegalItem>
            <strong>Server logs.</strong> Our hosting provider and database
            provider process ordinary request data — including IP address, user
            agent, and timestamps — to serve the site and keep it secure. We do
            not read those logs to build a profile of you.
          </LegalItem>
          <LegalItem>
            <strong>Messages you send us.</strong> If you email a takedown
            notice, a correction, or a privacy request, we keep that
            correspondence as long as needed to answer it and to keep a record.
          </LegalItem>
        </LegalList>
      </LegalSection>

      <LegalSection title="What we do not collect">
        <p>
          Stated plainly, because policies that hedge on this are usually
          hiding something:
        </p>
        <LegalList>
          <LegalItem>
            The only cookie is the click record described above. There is no
            advertising cookie and no visitor ID that follows you between
            listings or sites.
          </LegalItem>
          <LegalItem>
            There is no analytics product on the site, no pixel, and no
            advertising network.
          </LegalItem>
          <LegalItem>
            We do not record your IP address in our own database, hashed or
            otherwise.
          </LegalItem>
          <LegalItem>
            There are no accounts, so there is no name, password, or profile.
          </LegalItem>
          <LegalItem>
            There is no newsletter and no marketing email.
          </LegalItem>
        </LegalList>
      </LegalSection>

      <LegalSection title="Video thumbnails load from third parties">
        <p>
          Poster images for YouTube listings are loaded directly from Google
          (i.ytimg.com). Your browser requests those images itself, which
          discloses your IP address and user agent to Google, subject to
          Google&apos;s own privacy policy. We do not control that and receive
          nothing from it.
        </p>
        <p>
          Clicking a listing takes you to YouTube, Vimeo, TikTok, Twitch, or
          wherever the video lives. Those destinations have their own terms and
          privacy practices, and we are not responsible for them.
        </p>
      </LegalSection>

      <LegalSection title="Why we use this data">
        <LegalList>
          <LegalItem>
            <strong>Contract.</strong> To create or raise a listing, show its
            rank, and provide the Service you asked for.
          </LegalItem>
          <LegalItem>
            <strong>Legitimate interests.</strong> To display public listing
            information, count clicks in aggregate, keep the board working, and
            defend legal claims. You may object to this processing as described
            below.
          </LegalItem>
          <LegalItem>
            <strong>Legal obligation.</strong> To keep records where the law
            requires it.
          </LegalItem>
        </LegalList>
      </LegalSection>

      <LegalSection title="Listings are public">
        <p>
          Rank, bid amount, title, description, category, click count, and the
          destination link are public. Anyone can see them, including search
          engines and anyone scraping the page. Do not list a video if you do
          not want that information shown.
        </p>
      </LegalSection>

      <LegalSection title="Who we share data with">
        <LegalList>
          <LegalItem>
            <strong>Hosting and database providers</strong> — currently{" "}
            <Blank>hosting provider</Blank> and{" "}
            <Blank>database provider</Blank> — so the site can run and the board
            can be stored.
          </LegalItem>
          <LegalItem>
            <strong>Professional advisers, authorities, or a buyer</strong> of
            the Service, if we must share data to comply with the law, enforce
            the Terms, or transfer the project.
          </LegalItem>
        </LegalList>
        <p>
          We do not sell personal data. Some providers may be outside the
          European Economic Area; where that applies we rely on the safeguards
          those providers offer, such as standard contractual clauses.{" "}
          <Blank>Confirm which transfer mechanism your providers actually
          use.</Blank>
        </p>
      </LegalSection>

      <LegalSection title="How long we keep it">
        <LegalList>
          <LegalItem>
            Listings stay while they are on the board, and may remain in backups
            for a limited time after removal.
          </LegalItem>
          <LegalItem>
            Click counts are aggregate numbers attached to a listing and last as
            long as the listing does.
          </LegalItem>
          <LegalItem>
            Correspondence is kept as long as needed to answer it and to meet
            any record-keeping duty.
          </LegalItem>
        </LegalList>
      </LegalSection>

      <LegalSection title="Your rights">
        <p>
          If the GDPR or a similar law applies to you, you may ask us to access,
          correct, delete, or export personal data we hold about you, to
          restrict or object to certain processing, and to withdraw consent
          where processing was based on it. You may also complain to a
          supervisory authority in your country of residence.
        </p>
        <p>
          Email{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-accent underline underline-offset-4"
          >
            {CONTACT_EMAIL}
          </a>
          . We may need enough information to find your data. Note that listing
          content which is also public on the video platform itself does not
          become private just because it appeared on the board — but you can ask
          us to remove the listing.
        </p>
      </LegalSection>

      <LegalSection title="Children">
        <p>
          The Service is for adults. We do not knowingly collect personal data
          from children. If you believe a child has used the Service, contact us
          and we will delete what we can identify.
        </p>
      </LegalSection>

      <LegalSection title="Changes">
        <p>
          We may update this policy when the Service or the law changes. The
          date at the top of this page is the current version. If a change is
          material, we will post the updated policy here. Adding checkout,
          analytics, or email would each be a material change.
        </p>
        <p>
          See also the{" "}
          <Link href="/terms" className="text-accent underline underline-offset-4">
            Terms of Service
          </Link>{" "}
          and the public{" "}
          <Link href="/rules" className="text-accent underline underline-offset-4">
            Rules
          </Link>
          .
        </p>
      </LegalSection>
    </PageShell>
  );
}
