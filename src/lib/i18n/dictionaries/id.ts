import type { Dictionary } from "./en";

export const id: Dictionary = {
  nav: {
    leaderboard: "Papan Peringkat",
    categories: "Kategori",
    about: "Tentang",
    rules: "Aturan",
    terms: "Ketentuan",
    privacy: "Privasi",
    language: "Bahasa",
  },
  footer: {
    tagline: "peringkat sesuai yang kamu bayar.",
    payments:
      "Pembayaran ditangani Dodo Payments. Entri masuk ke papan begitu pembayarannya terkonfirmasi.",
  },
  home: {
    bidSubtitle: "ditawar kreator agar karyanya dilihat",
    videosOnBoard: "{count} video di papan",
    videoOnBoard: "{count} video di papan",
    clicksDelivered: "{count} klik diteruskan",
    claimFor: "Ambil peringkat 1 seharga",
    startAt: "Video baru mulai dari {amount}.",
    bidLess:
      "Menawar di bawah harga tertinggi tetap membuatmu masuk papan — di posisi yang bisa dicapai jumlah itu.",
    noAlgorithm:
      "Tanpa algoritma, tanpa jumlah subscriber, tanpa riwayat. Seluruh peringkat hanya satu angka, dan kamu yang menentukannya.",
    seeFull: "Lihat papan peringkat lengkap",
  },
  form: {
    videoLink: "Tautan video",
    videoLinkHint:
      "YouTube, Vimeo, TikTok, Twitch, Dailymotion, Streamable, atau berkas .mp4",
    title: "Judul",
    titlePlaceholder: "Video ini tentang apa?",
    category: "Kategori",
    categoryPlaceholder: "Pilih kategori",
    pitch: "Deskripsi satu baris",
    pitchHint: "Opsional — 280 karakter",
    pitchPlaceholder: "Kenapa orang harus menontonnya?",
    yourBid: "Tawaranmu",
    lowerBid: "Turunkan tawaran",
    raiseBid: "Naikkan tawaran",
    outbidFor: "Tawar {amount}",
    startingCheckout: "Membuka pembayaran…",
    incomplete: "Isi tautan video, judul, dan kategori untuk menawar.",
    alreadyOnBoard:
      "Sudah ada di papan? Kirim tautan yang sama dengan tawaran lebih tinggi untuk naik.",
    serverUnreachable: "Tidak dapat menghubungi server. Coba lagi.",
  },
  modal: {
    title: "Konfirmasi peringkat ini",
    subtitle:
      "Periksa peringkat dan harganya, lalu setujui Ketentuan Layanan untuk melanjutkan.",
    rank: "Peringkat",
    price: "Harga",
    dueNow: "Dibayar sekarang",
    yourVideo: "Videomu",
    goesOnBoard:
      "akan tampil di papan publik pada peringkat itu. Orang lain bisa membayar lebih dan mengambilnya.",
    paymentTaken:
      "Pembayaran diambil Dodo Payments di layar berikutnya. Entri masuk ke papan setelah pembayaran terkonfirmasi.",
    agreeBefore: "Saya telah membaca dan menyetujui",
    agreeTerms: "Ketentuan Layanan",
    agreeAfter: "outbid.works",
    cancel: "Batal",
    continue: "Lanjut ke pembayaran",
    close: "Tutup",
  },
  board: {
    trending: "Sedang ramai",
    all: "Semua",
    empty: "Papan masih kosong.",
    emptyHint:
      "Jadilah kreator pertama di sini — sekarang tawaran berapa pun langsung jadi peringkat 1.",
    click: "{count} klik",
    clicks: "{count} klik",
    rankLabel: "Peringkat {rank}",
  },
  leaderboard: {
    title: "Papan Peringkat",
    description:
      "Semua video di papan, diurutkan berdasarkan tawaran. Jika seri, yang lebih dulu masuk berada di atas.",
    videos: "Video",
    totalBid: "Total tawaran",
    clickThroughs: "Klik",
  },
  categoriesPage: {
    title: "Kategori",
    description:
      "Tiap kategori adalah perlombaan tersendiri. Kategori yang sepi adalah tempat termurah untuk jadi nomor 1.",
    count: "{count} video · pemuncak di {amount}",
    countOne: "{count} video · pemuncak di {amount}",
    nobody: "Belum ada yang menawar di sini.",
    open: "Kosong — {amount} sudah cukup untuk posisi teratas.",
  },
  categories: {
    gaming: "Gim",
    music: "Musik",
    tech: "Teknologi",
    comedy: "Komedi",
    education: "Edukasi",
    film: "Film",
    vlog: "Vlog",
    fitness: "Kebugaran",
    other: "Lainnya",
  },
  about: {
    title: "Kenapa ini ada",
    description:
      "Papan peringkat yang satu-satunya penentunya adalah berapa yang kamu bayar untuk ada di sana.",
    p1: "Masalah pertama kreator baru bukan kualitas, melainkan tak ada yang tahu videonya ada. Algoritma rekomendasi menilai sinyal yang belum dimiliki pemula — durasi tonton, subscriber, katalog lama — sehingga karya yang paling butuh ditemukan justru paling kecil peluangnya.",
    p2: "outbid.works mengganti semua itu dengan satu angka. Tawar {amount} dan kamu masuk papan. Tawar lebih tinggi dari siapa pun dan kamu nomor 1. Tanpa riwayat, tanpa jumlah pengikut, tanpa mulai dari nol. Alasan sebuah peringkat jelas bagi siapa pun yang melihatnya — hal yang tak pernah bisa dilakukan algoritma.",
    p3: "Setiap kartu menampilkan jumlah kliknya, jadi tawaran bukan kotak hitam. Kamu bisa melihat persis apa yang dibeli uangmu, lalu memutuskan apakah tawaran berikutnya sepadan.",
    howPaying: "Cara pembayarannya",
    howPayingBody:
      "Pembayaran diambil Dodo Payments selaku penjual tercatat — data kartu tidak pernah sampai ke situs ini. Entri muncul setelah pembayaran terkonfirmasi, pada peringkat yang sesuai jumlahnya.",
    readRules: "Baca aturannya",
  },
  rules: {
    title: "Aturan",
    description:
      "outbid.works adalah papan peringkat publik. Tanpa iklan, tanpa kunci API, tanpa bagi hasil. Kamu membayar untuk berdiri di atas yang lain. Peringkat adalah jumlah yang kamu bayar — tidak ada faktor lain.",
    boards: "Papan-papannya",
    boardsIntro:
      "Satu pembayaran menempatkanmu di setiap papan yang mencakup pengeluaran itu. Papan hanya berbeda pada jendela waktunya.",
    allTime:
      "adalah papan utama. Peringkatnya adalah seluruh yang pernah kamu bayar untuk entri itu, dan tidak kedaluwarsa.",
    today:
      "mencakup 24 jam berjalan. Setiap pembayaran dihitung sejak saat kamu membayar, lalu gugur sehari kemudian. Yang paling banyak membelanjakan dalam jendela itu jadi nomor 1.",
    daily:
      "adalah satu hari kalender UTC — tengah malam ke tengah malam. Hari berjalan tetap hidup sampai ditutup; hari lampau dibekukan sebagai arsip. Peringkat ditentukan pengeluaran hari itu, bukan 24 jam terakhir.",
    live: "Aktif",
    notBuilt: "Belum dibuat",
    ranking: "Cara peringkat dihitung",
    ranking1:
      "Entri baru memakai dolar AS bulat, minimum {min}, maksimum {max}, naik satu dolar sekali jalan. Entri yang sudah di papan mempertahankan jumlahnya sampai dinaikkan atau dilewati.",
    ranking2:
      "Mengambil peringkat 1 memerlukan setidaknya {step} lebih banyak dari pemuncak saat ini. Membayar kurang dari itu tetap menempatkanmu di posisi yang bisa dicapai jumlah tersebut. Jumlah yang sama mempertahankan urutan masuknya — entri yang lebih lama tetap di atas.",
    ranking3:
      "Sudah terdaftar? Kirim tautan yang sama lagi untuk naik. Jumlah baru harus melebihi jumlah sekarang setidaknya {raise}. Orang lain tidak bisa merebut peringkatmu hanya dengan membayar selisih itu.",
    ranking4:
      "Parameter pelacakan diabaikan, dan tautan platform dibedakan lewat jalur lengkapnya — jadi dua video dari situs yang sama tak pernah berbagi satu peringkat.",
    listing: "Apa yang boleh didaftarkan",
    listing1:
      "Sebuah video. YouTube, Vimeo, TikTok, Twitch, Dailymotion, Streamable, atau berkas video langsung. Tautan yang tidak mengarah ke video ditolak saat dikirim.",
    listing2:
      "Tautan obrolan dan undangan tidak diizinkan — Telegram, WhatsApp, Discord, Messenger, Signal, dan sejenisnya. Papan ini untuk karya yang dipublikasikan, bukan grup obrolan.",
    listing3:
      "Tautan ke konten seksual tidak diizinkan. Pornografi, NSFW, atau platform dewasa tidak punya tempat di sini.",
    listing4:
      "Parameter kueri dihapus dari tautan. URL afiliasi, rujukan, dan pelacakan tidak akan berfungsi.",
    listing5:
      "URL pemendek tautan tidak diizinkan. Kirim alamat tujuan sebenarnya.",
    categoriesTitle: "Kategori",
    categoriesBody:
      "Kategori kamu pilih sendiri saat mengirim. Jika sebuah entri salah kategori, kirim ulang tautan yang sama dengan kategori yang benar — entri lama akan diperbarui, bukan digandakan.",
    afterPay: "Setelah membayar",
    afterPay1:
      "Entrimu bersifat publik. Klik mengarah ke URL yang kamu kirim, tanpa parameter kueri, dan jumlahnya tampil di kartumu.",
    afterPay2:
      "Pembayaran yang selesai itulah yang mengunci peringkat. Pembayaran tidak dapat dikembalikan.",
    gaps: "Belum dibuat",
    gapRefunds:
      "Pembayaran lewat Dodo Payments, tetapi belum ada cara mandiri untuk melihat pembayaran lampau atau meminta entri dihapus — kirim surel kepada kami saja.",
    gapBoards:
      "Memeringkat satu hari berjalan atau hari kalender berarti menjumlahkan pembayaran di dalam satu jendela, sedangkan skemanya menyimpan satu baris per entri tanpa riwayat pembayaran. Papan-papan itu butuh tabel kedua.",
    gapEnforcement:
      "Aturan di atas soal obrolan, konten dewasa, dan pemendek tautan adalah kebijakan, bukan kode. Yang berjalan otomatis hanya pemeriksaan URL video.",
    gapLegal:
      "sudah disusun, tetapi keduanya masih punya bagian kosong dan belum ditinjau pengacara.",
    whyExists: "Kenapa ini ada",
  },
  notFound: {
    code: "404",
    title: "Tidak ada peringkat di sini",
    description:
      "Halaman ini tidak ada, atau entri yang ditujunya sudah dihapus.",
    back: "Kembali ke papan",
    leaderboard: "Lihat papan peringkat",
  },
  complete: {
    title: "Pembayaran diterima",
    description:
      "Entrimu masuk ke papan begitu pembayarannya terkonfirmasi.",
    p1: "Konfirmasi biasanya tiba dalam beberapa detik. Buka papan peringkat dan videomu semestinya ada di posisi yang diraih tawaranmu.",
    p2: "Jika setelah satu menit belum muncul, jangan membayar lagi — kirim surel kepada kami dan kami akan memasukkannya manual.",
    leaderboard: "Lihat papan peringkat",
    back: "Kembali ke papan",
  },
  legal: {
    englishOnly: "Halaman ini hanya tersedia dalam bahasa Inggris",
    englishOnlyBody:
      "Ketentuan Layanan dan Kebijakan Privasi adalah dokumen hukum. Terjemahan mesin dapat mengubah maknanya, sehingga hanya teks bahasa Inggris yang mengikat dan hanya itu yang ditampilkan.",
  },
};
