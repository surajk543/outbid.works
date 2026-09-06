import Link from "next/link";

import { PageShell } from "@/components/page-shell";
import { MAX_BID, MIN_BID, OUTBID_STEP, RAISE_STEP } from "@/lib/bidding";
import { fill, getTranslations } from "@/lib/i18n";

export const metadata = { title: "Rules · outbid.works" };

export default async function Page() {
  const { t } = await getTranslations();
  const money = {
    min: `$${MIN_BID}`,
    max: `$${MAX_BID.toLocaleString()}`,
    step: `$${OUTBID_STEP}`,
    raise: `$${RAISE_STEP}`,
  };

  return (
    <PageShell
      title={t.rules.title}
      description={t.rules.description}
    >
      <div className="space-y-10">
        <Section title={t.rules.boards}>
          <p className="-mt-1 mb-1 text-muted">{t.rules.boardsIntro}</p>
          <Rule status="live" liveLabel={t.rules.live} plannedLabel={t.rules.notBuilt}>
            <strong>All-time</strong> {t.rules.allTime}
          </Rule>
          <Rule status="planned" liveLabel={t.rules.live} plannedLabel={t.rules.notBuilt}>
            <strong>Today</strong> {t.rules.today}
          </Rule>
          <Rule status="planned" liveLabel={t.rules.live} plannedLabel={t.rules.notBuilt}>
            <strong>Daily</strong> {t.rules.daily}
          </Rule>
        </Section>

        <Section title={t.rules.ranking}>
          <Rule>{fill(t.rules.ranking1, money)}</Rule>
          <Rule>{fill(t.rules.ranking2, money)}</Rule>
          <Rule>{fill(t.rules.ranking3, money)}</Rule>
          <Rule>{t.rules.ranking4}</Rule>
        </Section>

        <Section title={t.rules.listing}>
          <Rule>{t.rules.listing1}</Rule>
          <Rule>{t.rules.listing2}</Rule>
          <Rule>{t.rules.listing3}</Rule>
          <Rule>{t.rules.listing4}</Rule>
          <Rule>{t.rules.listing5}</Rule>
        </Section>

        <Section title={t.rules.categoriesTitle}>
          <Rule>{t.rules.categoriesBody}</Rule>
        </Section>

        <Section title={t.rules.afterPay}>
          <Rule>{t.rules.afterPay1}</Rule>
          <Rule>{t.rules.afterPay2}</Rule>
        </Section>
      </div>

      <div className="mt-10 rounded-2xl border border-accent/40 bg-accent-soft p-6">
        <h2 className="font-bold">{t.rules.gaps}</h2>
        <ul className="mt-2 space-y-1.5 text-muted">
          <li>{t.rules.gapRefunds}</li>
          <li>{t.rules.gapBoards}</li>
          <li>{t.rules.gapEnforcement}</li>
          <li>
            <Link href="/terms" className="text-accent underline underline-offset-4">
              {t.nav.terms}
            </Link>
            {" · "}
            <Link href="/privacy" className="text-accent underline underline-offset-4">
              {t.nav.privacy}
            </Link>{" "}
            {t.rules.gapLegal}
          </li>
        </ul>
        <Link
          href="/about"
          className="mt-4 inline-block font-semibold text-accent underline underline-offset-4"
        >
          {t.rules.whyExists}
        </Link>
      </div>
    </PageShell>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-bold tracking-tight">{title}</h2>
      <ul className="mt-4 space-y-3">{children}</ul>
    </section>
  );
}

function Rule({
  children,
  status,
  liveLabel,
  plannedLabel,
}: {
  children: React.ReactNode;
  status?: "live" | "planned";
  liveLabel?: string;
  plannedLabel?: string;
}) {
  return (
    <li className="flex gap-3 rounded-2xl border border-border bg-card px-5 py-4">
      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
      <p className="leading-relaxed">
        {children}
        {status ? (
          <span
            className={`ml-2 whitespace-nowrap rounded-full px-2 py-0.5 align-middle text-xs font-semibold ${
              status === "live"
                ? "bg-success/15 text-success"
                : "bg-chip text-muted"
            }`}
          >
            {status === "live" ? liveLabel : plannedLabel}
          </span>
        ) : null}
      </p>
    </li>
  );
}
