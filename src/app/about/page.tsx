import Link from "next/link";

import { PageShell } from "@/components/page-shell";
import { MIN_BID } from "@/lib/bidding";
import { fill, getTranslations } from "@/lib/i18n";

export const metadata = { title: "About · outbid.works" };

export default async function Page() {
  const { t } = await getTranslations();

  return (
    <PageShell
      title={t.about.title}
      description={t.about.description}
    >
      <div className="space-y-6 text-lg leading-relaxed">
        <p>{t.about.p1}</p>

        <p>{fill(t.about.p2, { amount: `$${MIN_BID}` })}</p>

        <p>{t.about.p3}</p>
      </div>

      <div className="mt-10 rounded-2xl border border-border bg-card p-6">
        <h2 className="font-bold">{t.about.howPaying}</h2>
        <p className="mt-2 text-muted">{t.about.howPayingBody}</p>
        <Link
          href="/rules"
          className="mt-4 inline-block font-semibold text-accent underline underline-offset-4"
        >
          {t.about.readRules}
        </Link>
      </div>
    </PageShell>
  );
}
