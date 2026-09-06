import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { MIN_BID } from "@/lib/bidding";
import { getLocale, localeDir } from "@/lib/i18n";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "outbid.works — buy your way onto the leaderboard",
  description:
    `A video leaderboard ranked by one number: what you paid to be on it. New creators bid from $${MIN_BID} to get their work in front of people.`,
};

// Applies the stored theme before first paint so the page doesn't flash.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="dark"||t==="light")document.documentElement.dataset.theme=t}catch(e){}`;

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const locale = await getLocale();

  return (
    // themeScript sets data-theme on <html> before hydration, so the server
    // markup and the client DOM differ by that one attribute — by design.
    // lang and dir come from the reader's chosen language: dir flips the whole
    // layout for Arabic, which is why the CSS uses start/end rather than
    // left/right wherever a side is meaningful.
    <html
      lang={locale}
      dir={localeDir(locale)}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col">
        <SiteNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
