import type { Dictionary } from "./en";

export const de: Dictionary = {
  nav: {
    leaderboard: "Rangliste",
    categories: "Kategorien",
    about: "Über uns",
    rules: "Regeln",
    terms: "AGB",
    privacy: "Datenschutz",
    language: "Sprache",
  },
  footer: {
    tagline: "der Rang ist das, was du zahlst.",
    payments:
      "Zahlungen wickelt Dodo Payments ab. Ein Eintrag erscheint auf der Rangliste, sobald seine Zahlung bestätigt ist.",
  },
  home: {
    bidSubtitle: "von Kreativen geboten, damit ihre Arbeit gesehen wird",
    videosOnBoard: "{count} Videos auf der Rangliste",
    videoOnBoard: "{count} Video auf der Rangliste",
    clicksDelivered: "{count} Klicks vermittelt",
    claimFor: "Sichere dir Platz 1 für",
    startAt: "Neue Videos beginnen bei {amount}.",
    bidLess:
      "Wer weniger als den Höchstpreis bietet, steht trotzdem auf der Rangliste — auf dem Platz, den dieser Betrag hergibt.",
    noAlgorithm:
      "Kein Algorithmus, keine Abonnentenzahl, keine Vorgeschichte. Die ganze Rangliste ist eine einzige Zahl, und die bestimmst du.",
    seeFull: "Vollständige Rangliste ansehen",
  },
  form: {
    videoLink: "Video-Link",
    videoLinkHint:
      "YouTube, Vimeo, TikTok, Twitch, Dailymotion, Streamable oder eine .mp4",
    title: "Titel",
    titlePlaceholder: "Worum geht es in dem Video?",
    category: "Kategorie",
    categoryPlaceholder: "Kategorie wählen",
    pitch: "Kurzbeschreibung",
    pitchHint: "Optional — 280 Zeichen",
    pitchPlaceholder: "Warum sollte jemand auf Play drücken?",
    yourBid: "Dein Gebot",
    lowerBid: "Gebot senken",
    raiseBid: "Gebot erhöhen",
    outbidFor: "Für {amount} überbieten",
    startingCheckout: "Bezahlvorgang wird geöffnet…",
    incomplete: "Video-Link, Titel und Kategorie angeben, um zu bieten.",
    alreadyOnBoard:
      "Schon auf der Rangliste? Denselben Link mit höherem Gebot einreichen und aufsteigen.",
    serverUnreachable: "Server nicht erreichbar. Bitte erneut versuchen.",
  },
  modal: {
    title: "Diesen Rang bestätigen",
    subtitle:
      "Rang und Preis prüfen, dann den Nutzungsbedingungen zustimmen, um fortzufahren.",
    rank: "Rang",
    price: "Preis",
    dueNow: "Jetzt fällig",
    yourVideo: "Dein Video",
    goesOnBoard:
      "erscheint auf der öffentlichen Rangliste auf diesem Platz. Jemand anderes kann mehr zahlen und ihn übernehmen.",
    paymentTaken:
      "Die Zahlung nimmt Dodo Payments im nächsten Schritt entgegen. Der Eintrag erscheint, sobald die Zahlung bestätigt ist.",
    agreeBefore: "Ich habe die",
    agreeTerms: "Nutzungsbedingungen",
    agreeAfter: "von outbid.works gelesen und stimme ihnen zu",
    cancel: "Abbrechen",
    continue: "Weiter zur Zahlung",
    close: "Schließen",
  },
  board: {
    trending: "Gerade angesagt",
    all: "Alle",
    empty: "Die Rangliste ist leer.",
    emptyHint:
      "Sei die erste Person darauf — im Moment reicht jedes Gebot für Platz 1.",
    click: "{count} Klick",
    clicks: "{count} Klicks",
    rankLabel: "Rang {rank}",
  },
  leaderboard: {
    title: "Rangliste",
    description:
      "Alle Videos, nach Gebot sortiert. Bei Gleichstand liegt vorn, wer zuerst da war.",
    videos: "Videos",
    totalBid: "Gesamtgebot",
    clickThroughs: "Klicks",
  },
  categoriesPage: {
    title: "Kategorien",
    description:
      "Jede Kategorie ist ein eigenes Rennen. In der ruhigsten ist Platz 1 am günstigsten.",
    count: "{count} Videos · Spitze bei {amount}",
    countOne: "{count} Video · Spitze bei {amount}",
    nobody: "Hier hat noch niemand geboten.",
    open: "Frei — {amount} reicht für den Spitzenplatz.",
  },
  categories: {
    gaming: "Gaming",
    music: "Musik",
    tech: "Technik",
    comedy: "Comedy",
    education: "Bildung",
    film: "Film",
    vlog: "Vlog",
    fitness: "Fitness",
    other: "Sonstiges",
  },
  about: {
    title: "Warum es das gibt",
    description:
      "Eine Rangliste, deren einziges Kriterium ist, wie viel du für den Platz gezahlt hast.",
    p1: "Das erste Problem neuer Kreativer ist nicht die Qualität. Es ist, dass niemand weiß, dass das Video existiert. Empfehlungsalgorithmen bewerten Signale, die Anfänger noch gar nicht haben — Wiedergabezeit, Abonnenten, ein Backkatalog. So bekommt ausgerechnet die Arbeit, die Sichtbarkeit am nötigsten hätte, sie am unwahrscheinlichsten.",
    p2: "outbid.works ersetzt all das durch eine Zahl. Biete {amount} und du stehst auf der Rangliste. Biete mehr als alle anderen und du bist auf Platz 1. Keine Vorgeschichte, keine Follower-Zahl, kein Kaltstart. Die Rangliste ist für jeden nachvollziehbar, der sie ansieht — genau das schaffen Algorithmen nie.",
    p3: "Jede Karte zeigt ihre Klickzahl, ein Gebot ist also keine Blackbox. Du siehst genau, was das Geld gebracht hat, und entscheidest, ob sich das nächste lohnt.",
    howPaying: "Wie das Bezahlen abläuft",
    howPayingBody:
      "Die Zahlung nimmt Dodo Payments als Verkäufer im eigenen Namen entgegen — Kartendaten erreichen diese Seite nie. Der Eintrag erscheint, sobald die Zahlung bestätigt ist, auf dem Rang, den der Betrag hergibt.",
    readRules: "Regeln lesen",
  },
  rules: {
    title: "Regeln",
    description:
      "outbid.works ist eine öffentliche Rangliste. Keine Werbung, keine API-Schlüssel, keine Umsatzbeteiligung. Du zahlst dafür, über allen anderen zu stehen. Der Rang ist das, was du zahlst — sonst nichts.",
    boards: "Die Ranglisten",
    boardsIntro:
      "Eine Zahlung platziert dich auf jeder Rangliste, die diese Ausgabe einschließt. Die Ranglisten betrachten nur unterschiedliche Zeitfenster.",
    allTime:
      "ist die Hauptrangliste. Der Rang ist alles, was du je für diesen Eintrag gezahlt hast. Er verfällt nicht.",
    today:
      "umfasst die letzten 24 Stunden. Jede Zahlung zählt ab dem Moment des Bezahlens und fällt einen Tag später wieder heraus. Wer in diesem Fenster am meisten ausgegeben hat, ist auf Platz 1.",
    daily:
      "ist ein UTC-Kalendertag — Mitternacht bis Mitternacht. Der laufende Tag bleibt bis zum Abschluss offen; vergangene Tage werden als Archiv eingefroren. Der Rang ergibt sich aus dem, was du an diesem Tag ausgegeben hast, nicht aus den letzten 24 Stunden.",
    live: "Aktiv",
    notBuilt: "Noch nicht gebaut",
    ranking: "Wie die Platzierung funktioniert",
    ranking1:
      "Neue Einträge laufen in ganzen US-Dollar, mindestens {min}, höchstens {max}, in Ein-Dollar-Schritten. Ein Eintrag auf der Rangliste behält seinen Betrag, bis er erhöht oder überboten wird.",
    ranking2:
      "Platz 1 zu übernehmen kostet mindestens {step} mehr als der aktuelle Spitzenreiter. Wer weniger zahlt, landet trotzdem auf dem Platz, den der Betrag hergibt. Gleiche Beträge behalten die Reihenfolge ihrer Platzierung — der ältere Eintrag steht höher.",
    ranking3:
      "Schon gelistet? Denselben Link erneut einreichen und aufsteigen. Der neue Betrag muss den bisherigen um mindestens {raise} übersteigen. Niemand sonst kann deinen Rang übernehmen, indem er diese Differenz zahlt.",
    ranking4:
      "Tracking-Parameter werden ignoriert, und Plattform-Links werden über ihren vollständigen Pfad unterschieden — zwei Videos derselben Seite teilen sich also nie einen Rang.",
    listing: "Was du eintragen darfst",
    listing1:
      "Ein Video. YouTube, Vimeo, TikTok, Twitch, Dailymotion, Streamable oder eine direkte Videodatei. Links, die auf kein Video führen, werden beim Einreichen abgelehnt.",
    listing2:
      "Chat- und Einladungslinks sind nicht erlaubt — Telegram, WhatsApp, Discord, Messenger, Signal und Ähnliches. Die Rangliste ist für veröffentlichte Arbeit da, nicht für Gruppenchats.",
    listing3:
      "Links zu sexuellen Inhalten sind nicht erlaubt. Pornografie, NSFW oder Erwachsenenplattformen gehören nicht auf die Rangliste.",
    listing4:
      "Query-Parameter werden aus Links entfernt. Affiliate-, Empfehlungs- und Tracking-URLs funktionieren nicht.",
    listing5:
      "URL-Kürzer sind nicht erlaubt. Reiche stattdessen die Zieladresse ein.",
    categoriesTitle: "Kategorien",
    categoriesBody:
      "Die Kategorie wählst du beim Einreichen selbst. Steht ein Eintrag in der falschen, reiche denselben Link mit der richtigen ein — das aktualisiert den vorhandenen Eintrag, statt einen zweiten anzulegen.",
    afterPay: "Nach der Zahlung",
    afterPay1:
      "Dein Eintrag ist öffentlich. Klicks führen zu der URL, die du eingereicht hast, ohne Query-Parameter, und die Zahl steht auf deiner Karte.",
    afterPay2:
      "Erst die abgeschlossene Zahlung sichert den Rang. Zahlungen sind nicht erstattungsfähig.",
    gaps: "Noch nicht gebaut",
    gapRefunds:
      "Die Zahlung läuft über Dodo Payments, aber es gibt keinen Selbstbedienungsweg, um frühere Zahlungen zu sehen oder die Entfernung eines Eintrags zu beantragen — schreib uns stattdessen.",
    gapBoards:
      "Eine Platzierung über ein rollierendes oder ein Kalender-Tagesfenster erfordert das Summieren einzelner Zahlungen, das Schema speichert aber eine Zeile pro Eintrag ohne Zahlungsverlauf. Diese Ranglisten brauchen eine zweite Tabelle.",
    gapEnforcement:
      "Die obigen Regeln zu Chats, Erwachseneninhalten und URL-Kürzern sind Richtlinie, nicht Code. Automatisch läuft nur die Prüfung der Video-URL.",
    gapLegal:
      "liegen im Entwurf vor, aber in beiden fehlen noch Angaben und keines wurde von einer Anwältin oder einem Anwalt geprüft.",
    whyExists: "Warum es das gibt",
  },
  notFound: {
    code: "404",
    title: "Hier ist nichts platziert",
    description:
      "Diese Seite gibt es nicht, oder der Eintrag, auf den sie zeigte, wurde entfernt.",
    back: "Zurück zur Rangliste",
    leaderboard: "Rangliste ansehen",
  },
  complete: {
    title: "Zahlung erhalten",
    description:
      "Dein Eintrag erscheint auf der Rangliste, sobald die Zahlung bestätigt ist.",
    p1: "Die Bestätigung kommt meist in wenigen Sekunden. Öffne die Rangliste, dein Video sollte dort auf dem erreichten Platz stehen.",
    p2: "Erscheint nach einer Minute nichts, zahle bitte nicht erneut — schreib uns, wir tragen es von Hand ein.",
    leaderboard: "Rangliste ansehen",
    back: "Zurück zur Rangliste",
  },
  legal: {
    englishOnly: "Diese Seite gibt es nur auf Englisch",
    englishOnlyBody:
      "Nutzungsbedingungen und Datenschutzerklärung sind Rechtsdokumente. Eine maschinelle Übersetzung kann ihre Bedeutung verändern, deshalb ist allein der englische Text verbindlich und allein dieser wird angezeigt.",
  },
};
