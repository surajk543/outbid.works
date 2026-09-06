import Link from "next/link";

import { PageShell } from "@/components/page-shell";
import { getTranslations } from "@/lib/i18n";

export const metadata = { title: "Payment received · outbid.works" };

/**
 * Where Dodo returns the customer. The listing is written by the webhook, not
 * here, so this page never claims the rank is live — it may be a second or two
 * behind, and saying otherwise would be a promise we cannot keep from the
 * browser.
 */
export default async function Page() {
  const { t } = await getTranslations();

  return (
    <PageShell
      title={t.complete.title}
      description={t.complete.description}
    >
      <div className="rounded-2xl border border-border bg-card p-6">
        <p className="leading-relaxed">{t.complete.p1}</p>
        <p className="mt-3 text-muted">{t.complete.p2}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/leaderboard"
            className="rounded-full bg-accent px-6 py-3 font-bold text-white transition-opacity hover:opacity-90"
          >
            {t.complete.leaderboard}
          </Link>
          <Link
            href="/"
            className="rounded-full border border-border bg-card px-6 py-3 font-semibold transition-colors hover:bg-chip"
          >
            {t.complete.back}
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
