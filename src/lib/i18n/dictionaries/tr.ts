import type { Dictionary } from "./en";

export const tr: Dictionary = {
  nav: {
    leaderboard: "Sıralama",
    categories: "Kategoriler",
    about: "Hakkında",
    rules: "Kurallar",
    terms: "Koşullar",
    privacy: "Gizlilik",
    language: "Dil",
  },
  footer: {
    tagline: "sıra, ödediğin kadardır.",
    payments:
      "Ödemeleri Dodo Payments yürütür. Ödeme onaylandığı anda ilan sıralamaya girer.",
  },
  home: {
    bidSubtitle: "içerik üreticilerinin işleri görülsün diye teklif ettiği tutar",
    videosOnBoard: "sıralamada {count} video",
    videoOnBoard: "sıralamada {count} video",
    clicksDelivered: "{count} tıklama yönlendirildi",
    claimFor: "1. sırayı şu tutara al",
    startAt: "Yeni videolar {amount} ile başlar.",
    bidLess:
      "En yüksek fiyatın altında teklif vermek de seni sıralamaya sokar — o tutarın ulaşabildiği yere.",
    noAlgorithm:
      "Algoritma yok, abone sayısı yok, geçmiş yok. Tüm sıralama tek bir sayıdır ve onu sen belirlersin.",
    seeFull: "Tüm sıralamayı gör",
  },
  form: {
    videoLink: "Video bağlantısı",
    videoLinkHint:
      "YouTube, Vimeo, TikTok, Twitch, Dailymotion, Streamable veya bir .mp4",
    title: "Başlık",
    titlePlaceholder: "Bu video ne hakkında?",
    category: "Kategori",
    categoryPlaceholder: "Kategori seç",
    pitch: "Tek satırlık tanıtım",
    pitchHint: "İsteğe bağlı — 280 karakter",
    pitchPlaceholder: "Neden izlemeye değer?",
    yourBid: "Teklifin",
    lowerBid: "Teklifi düşür",
    raiseBid: "Teklifi yükselt",
    outbidFor: "{amount} ile teklif ver",
    startingCheckout: "Ödeme açılıyor…",
    incomplete: "Teklif vermek için video bağlantısı, başlık ve kategori gir.",
    alreadyOnBoard:
      "Zaten sıralamada mısın? Aynı bağlantıyı daha yüksek teklifle gönder ve yüksel.",
    serverUnreachable: "Sunucuya ulaşılamadı. Tekrar dene.",
  },
  modal: {
    title: "Bu sırayı onayla",
    subtitle:
      "Sırayı ve fiyatı kontrol et, sonra devam etmek için Hizmet Koşulları'nı kabul et.",
    rank: "Sıra",
    price: "Fiyat",
    dueNow: "Şimdi ödenecek",
    yourVideo: "Videon",
    goesOnBoard:
      "o sırada herkese açık sıralamaya girer. Başka biri daha fazla ödeyip o yeri alabilir.",
    paymentTaken:
      "Ödeme bir sonraki ekranda Dodo Payments tarafından alınır. Ödeme onaylandığında ilan sıralamaya girer.",
    agreeBefore: "outbid.works",
    agreeTerms: "Hizmet Koşulları'nı",
    agreeAfter: "okudum ve kabul ediyorum",
    cancel: "Vazgeç",
    continue: "Ödemeye geç",
    close: "Kapat",
  },
  board: {
    trending: "Şu anda öne çıkanlar",
    all: "Tümü",
    empty: "Sıralama boş.",
    emptyHint:
      "Buradaki ilk üretici sen ol — şu an herhangi bir teklif 1. sırayı alır.",
    click: "{count} tıklama",
    clicks: "{count} tıklama",
    rankLabel: "{rank}. sıra",
  },
  leaderboard: {
    title: "Sıralama",
    description:
      "Sıralamadaki tüm videolar, teklife göre dizili. Eşitlikte önce gelen üstte kalır.",
    videos: "Video",
    totalBid: "Toplam teklif",
    clickThroughs: "Tıklamalar",
  },
  categoriesPage: {
    title: "Kategoriler",
    description:
      "Her kategori kendi yarışıdır. En sakin olanı, 1. sıranın en ucuz olduğu yerdir.",
    count: "{count} video · lider {amount}",
    countOne: "{count} video · lider {amount}",
    nobody: "Burada henüz kimse teklif vermedi.",
    open: "Boş — {amount} zirveyi almaya yeter.",
  },
  categories: {
    gaming: "Oyun",
    music: "Müzik",
    tech: "Teknoloji",
    comedy: "Komedi",
    education: "Eğitim",
    film: "Film",
    vlog: "Vlog",
    fitness: "Fitness",
    other: "Diğer",
  },
  about: {
    title: "Bu neden var",
    description:
      "Sıralamadaki tek ölçütün, orada olmak için ne kadar ödediğin olduğu bir liste.",
    p1: "Yeni bir üreticinin ilk sorunu kalite değildir. Sorun, videonun var olduğunu kimsenin bilmemesidir. Öneri algoritmaları, yeni başlayanda henüz bulunmayan sinyallere bakar — izlenme süresi, abone, eski işler — böylece keşfedilmeye en çok ihtiyacı olan iş, keşfedilme olasılığı en düşük iş olur.",
    p2: "outbid.works bunların hepsini tek bir sayıyla değiştirir. {amount} teklif et, sıralamadasın. Herkesten fazla teklif et, birincisin. Geçmiş yok, takipçi sayısı yok, sıfırdan başlama dezavantajı yok. Sıralamanın nedeni ona bakan herkes için açıktır; algoritmaların asla başaramadığı da tam olarak budur.",
    p3: "Her kart kendi tıklama sayısını gösterir, yani teklif bir kara kutu değildir. Paranın ne getirdiğini birebir görür, bir sonrakinin değip değmeyeceğine kendin karar verirsin.",
    howPaying: "Ödeme nasıl işliyor",
    howPayingBody:
      "Ödemeyi, kayıtlı satıcı olarak Dodo Payments alır — kart bilgileri bu siteye hiç ulaşmaz. İlan, ödeme onaylandığında, tutarın hak ettiği sırada görünür.",
    readRules: "Kuralları oku",
  },
  rules: {
    title: "Kurallar",
    description:
      "outbid.works herkese açık bir sıralamadır. Reklam yok, API anahtarı yok, gelir paylaşımı yok. Diğerlerinin üstünde durmak için ödersin. Sıra, ödediğin tutardır — başka hiçbir şey değil.",
    boards: "Sıralamalar",
    boardsIntro:
      "Tek bir ödeme, o harcamayı kapsayan her sıralamada yerini alır. Sıralamalar yalnızca baktıkları zaman aralığında ayrışır.",
    allTime:
      "ana sıralamadır. Sıra, o ilan için ödediğin her şeydir ve süresi dolmaz.",
    today:
      "kayan 24 saati kapsar. Her ödeme, ödediğin andan itibaren sayılır ve bir gün sonra düşer. O aralıkta en çok harcayan birincidir.",
    daily:
      "UTC takvim günüdür — gece yarısından gece yarısına. Geçerli gün kapanana dek canlı kalır; geçmiş günler arşiv olarak dondurulur. Sıra, son 24 saatte değil, o gün harcadığın tutara göre belirlenir.",
    live: "Çalışıyor",
    notBuilt: "Henüz yapılmadı",
    ranking: "Sıralama nasıl işliyor",
    ranking1:
      "Yeni ilanlar tam ABD doları cinsindendir; en az {min}, en çok {max}, birer dolar adımlarla. Sıralamadaki bir ilan, tutarı yükseltilene ya da geçilene kadar tutarını korur.",
    ranking2:
      "1. sırayı almak, mevcut birinciden en az {step} fazlasına mal olur. Daha azını ödemek de seni o tutarın ulaşabildiği sıraya koyar. Eşit tutarlar verilme sırasını korur — daha eski ilan üstte kalır.",
    ranking3:
      "Zaten listedeysen aynı bağlantıyı yeniden gönderip sıranı yükselt. Yeni tutar, mevcudun en az {raise} üzerinde olmalıdır. Kimse bu farkı ödeyerek senin sıranı alamaz.",
    ranking4:
      "Takip parametreleri yok sayılır ve platform bağlantıları tam yollarıyla ayırt edilir — aynı sitedeki iki video asla tek bir sırayı paylaşmaz.",
    listing: "Neleri listeleyebilirsin",
    listing1:
      "Bir video. YouTube, Vimeo, TikTok, Twitch, Dailymotion, Streamable veya doğrudan bir video dosyası. Videoya çıkmayan bağlantılar gönderim anında reddedilir.",
    listing2:
      "Sohbet ve davet bağlantılarına izin verilmez — Telegram, WhatsApp, Discord, Messenger, Signal ve benzerleri. Bu sıralama yayımlanmış işler içindir, grup sohbetleri için değil.",
    listing3:
      "Cinsel içerik bağlantılarına izin verilmez. Porno, NSFW veya yetişkin platformlarının burada yeri yoktur.",
    listing4:
      "Bağlantılardaki sorgu parametreleri temizlenir. Ortaklık, referans ve takip bağlantıları çalışmaz.",
    listing5:
      "Bağlantı kısaltıcılara izin verilmez. Bunun yerine gerçek hedef adresi gönder.",
    categoriesTitle: "Kategoriler",
    categoriesBody:
      "Kategoriyi gönderirken kendin seçersin. Bir ilan yanlış kategorideyse aynı bağlantıyı doğru kategoriyle yeniden gönder — mevcut kayıt güncellenir, ikincisi oluşmaz.",
    afterPay: "Ödemeden sonra",
    afterPay1:
      "İlanın herkese açıktır. Tıklamalar, gönderdiğin adrese sorgu parametreleri olmadan gider ve sayısı kartında görünür.",
    afterPay2:
      "Sırayı güvenceye alan şey tamamlanmış ödemedir. Ödemeler iade edilmez.",
    gaps: "Henüz yapılmadı",
    gapRefunds:
      "Ödeme Dodo Payments üzerinden geçer, ancak geçmiş ödemeleri görmek veya bir ilanın kaldırılmasını istemek için kendi kendine yeten bir ekran yok — bunun yerine bize e-posta gönder.",
    gapBoards:
      "Kayan bir günü ya da takvim gününü sıralamak, bir aralık içindeki tek tek ödemeleri toplamayı gerektirir; oysa şema ilan başına tek satır tutar ve ödeme geçmişi yoktur. O sıralamalar ikinci bir tablo ister.",
    gapEnforcement:
      "Yukarıdaki sohbet, yetişkin içerik ve bağlantı kısaltıcı kuralları politikadır, kod değil. Otomatik çalışan tek şey video adresi denetimidir.",
    gapLegal:
      "taslak hâlindedir; ikisinde de doldurulacak boşluklar var ve hiçbiri bir avukat tarafından incelenmedi.",
    whyExists: "Bu neden var",
  },
  notFound: {
    code: "404",
    title: "Burada sıralanmış bir şey yok",
    description:
      "Bu sayfa yok ya da işaret ettiği ilan kaldırılmış.",
    back: "Sıralamaya dön",
    leaderboard: "Sıralamayı gör",
  },
  complete: {
    title: "Ödeme alındı",
    description: "Ödeme onaylanır onaylanmaz ilanın sıralamaya girer.",
    p1: "Onay genellikle birkaç saniyede gelir. Sıralamayı aç; videon teklifinin kazandığı sırada görünüyor olmalı.",
    p2: "Bir dakika sonra hâlâ görünmüyorsa tekrar ödeme yapma — bize yaz, elle ekleyelim.",
    leaderboard: "Sıralamayı gör",
    back: "Sıralamaya dön",
  },
  legal: {
    englishOnly: "Bu sayfa yalnızca İngilizce sunuluyor",
    englishOnlyBody:
      "Hizmet Koşulları ve Gizlilik Politikası hukuki belgelerdir. Makine çevirisi anlamlarını değiştirebilir; bu yüzden yalnızca İngilizce metin bağlayıcıdır ve yalnızca o gösterilir.",
  },
};
