import type { Dictionary } from "./en";

export const fr: Dictionary = {
  nav: {
    leaderboard: "Classement",
    categories: "Catégories",
    about: "À propos",
    rules: "Règles",
    terms: "Conditions",
    privacy: "Confidentialité",
    language: "Langue",
  },
  footer: {
    tagline: "le rang, c'est ce que vous payez.",
    payments:
      "Les paiements sont gérés par Dodo Payments. Une annonce entre au classement dès que son paiement est confirmé.",
  },
  home: {
    bidSubtitle: "misés par des créateurs pour faire voir leur travail",
    videosOnBoard: "{count} vidéos au classement",
    videoOnBoard: "{count} vidéo au classement",
    clicksDelivered: "{count} clics générés",
    claimFor: "Prenez la 1re place pour",
    startAt: "Les nouvelles vidéos démarrent à {amount}.",
    bidLess:
      "Miser moins que le prix le plus haut vous place quand même au classement — au rang que cette somme permet d'atteindre.",
    noAlgorithm:
      "Aucun algorithme, aucun nombre d'abonnés, aucun historique. Tout le classement tient dans un seul chiffre, et c'est vous qui le fixez.",
    seeFull: "Voir le classement complet",
  },
  form: {
    videoLink: "Lien de la vidéo",
    videoLinkHint:
      "YouTube, Vimeo, TikTok, Twitch, Dailymotion, Streamable ou un .mp4",
    title: "Titre",
    titlePlaceholder: "De quoi parle cette vidéo ?",
    category: "Catégorie",
    categoryPlaceholder: "Choisissez une catégorie",
    pitch: "Accroche en une ligne",
    pitchHint: "Facultatif — 280 caractères",
    pitchPlaceholder: "Pourquoi faudrait-il la regarder ?",
    yourBid: "Votre mise",
    lowerBid: "Baisser la mise",
    raiseBid: "Augmenter la mise",
    outbidFor: "Surenchérir à {amount}",
    startingCheckout: "Ouverture du paiement…",
    incomplete:
      "Ajoutez un lien de vidéo, un titre et une catégorie pour miser.",
    alreadyOnBoard:
      "Déjà au classement ? Renvoyez le même lien avec une mise plus élevée pour monter.",
    serverUnreachable: "Serveur injoignable. Réessayez.",
  },
  modal: {
    title: "Confirmer ce rang",
    subtitle:
      "Vérifiez le rang et le prix, puis acceptez les Conditions d'utilisation pour continuer.",
    rank: "Rang",
    price: "Prix",
    dueNow: "À payer maintenant",
    yourVideo: "Votre vidéo",
    goesOnBoard:
      "entre au classement public à ce rang. Quelqu'un d'autre peut payer plus et le prendre.",
    paymentTaken:
      "Le paiement est encaissé par Dodo Payments à l'écran suivant. L'annonce entre au classement une fois le paiement confirmé.",
    agreeBefore: "J'ai lu et j'accepte les",
    agreeTerms: "Conditions d'utilisation",
    agreeAfter: "d'outbid.works",
    cancel: "Annuler",
    continue: "Passer au paiement",
    close: "Fermer",
  },
  board: {
    trending: "En ce moment",
    all: "Tout",
    empty: "Le classement est vide.",
    emptyHint:
      "Soyez le premier créateur dessus — n'importe quelle mise prend la 1re place.",
    click: "{count} clic",
    clicks: "{count} clics",
    rankLabel: "Rang {rank}",
  },
  leaderboard: {
    title: "Classement",
    description:
      "Toutes les vidéos, classées par mise. En cas d'égalité, la plus ancienne l'emporte.",
    videos: "Vidéos",
    totalBid: "Total misé",
    clickThroughs: "Clics",
  },
  categoriesPage: {
    title: "Catégories",
    description:
      "Chaque catégorie est une course à part. La plus calme est l'endroit le moins cher pour être 1er.",
    count: "{count} vidéos · en tête à {amount}",
    countOne: "{count} vidéo · en tête à {amount}",
    nobody: "Personne n'a encore misé ici.",
    open: "Libre — {amount} suffit pour la 1re place.",
  },
  categories: {
    gaming: "Jeux vidéo",
    music: "Musique",
    tech: "Tech",
    comedy: "Humour",
    education: "Éducation",
    film: "Cinéma",
    vlog: "Vlog",
    fitness: "Sport",
    other: "Autre",
  },
  about: {
    title: "Pourquoi ce site existe",
    description:
      "Un classement où le seul critère est ce que vous avez payé pour y figurer.",
    p1: "Le premier problème d'un créateur débutant n'est pas la qualité. C'est que personne ne sait que la vidéo existe. Les algorithmes de recommandation se fondent sur des signaux qu'un débutant n'a pas encore — temps de visionnage, abonnés, catalogue — si bien que le travail qui aurait le plus besoin d'être découvert est celui qui a le moins de chances de l'être.",
    p2: "outbid.works remplace tout cela par un seul chiffre. Misez {amount} et vous êtes au classement. Misez plus que tout le monde et vous êtes 1er. Pas d'historique, pas de nombre d'abonnés, pas de démarrage à froid. Le classement est lisible par quiconque le regarde, ce que les algorithmes ne réussissent jamais.",
    p3: "Chaque fiche affiche son nombre de clics : une mise n'est donc pas une boîte noire. Vous voyez exactement ce que l'argent a rapporté et décidez si la suivante en vaut la peine.",
    howPaying: "Comment se passe le paiement",
    howPayingBody:
      "Le paiement est encaissé par Dodo Payments, qui agit comme revendeur officiel — les données de carte n'atteignent jamais ce site. L'annonce apparaît une fois le paiement confirmé, au rang que la somme permet.",
    readRules: "Lire les règles",
  },
  rules: {
    title: "Règles",
    description:
      "outbid.works est un classement public. Pas de publicité, pas de clés d'API, pas de partage de revenus. Vous payez pour passer devant les autres. Le rang, c'est ce que vous payez — rien d'autre.",
    boards: "Les classements",
    boardsIntro:
      "Un seul paiement vous classe sur chaque tableau qui inclut cette dépense. Les tableaux ne diffèrent que par la fenêtre de temps observée.",
    allTime:
      "est le tableau principal. Le rang correspond à tout ce que vous avez payé pour cette annonce. Il n'expire pas.",
    today:
      "couvre 24 heures glissantes. Chaque paiement compte à partir du moment où vous payez, puis disparaît un jour plus tard. Celui qui a le plus dépensé sur cette fenêtre est 1er.",
    daily:
      "est une journée calendaire UTC — de minuit à minuit. La journée en cours reste vivante jusqu'à sa clôture ; les jours passés sont figés en archive. Le rang correspond à ce que vous avez dépensé ce jour-là, pas sur les dernières 24 heures.",
    live: "Actif",
    notBuilt: "Pas encore développé",
    ranking: "Comment fonctionne le classement",
    ranking1:
      "Les nouvelles annonces se font en dollars entiers, {min} minimum, {max} maximum, par pas de 1 $. Une annonce déjà au classement conserve son montant jusqu'à ce qu'elle l'augmente ou se fasse dépasser.",
    ranking2:
      "Prendre la 1re place coûte au moins {step} de plus que le 1er actuel. Payer moins vous place tout de même au rang que la somme permet. À montant égal, l'ordre de dépôt est conservé : l'annonce la plus ancienne garde le meilleur rang.",
    ranking3:
      "Déjà dans la liste ? Renvoyez le même lien pour monter. Le nouveau montant doit dépasser l'actuel d'au moins {raise}. Personne d'autre ne peut prendre votre rang en payant cette différence.",
    ranking4:
      "Les paramètres de suivi sont ignorés et les liens de plateforme sont identifiés par leur chemin complet — deux vidéos d'un même site ne partagent donc jamais un rang.",
    listing: "Ce que vous pouvez publier",
    listing1:
      "Une vidéo. YouTube, Vimeo, TikTok, Twitch, Dailymotion, Streamable ou un fichier vidéo direct. Les liens qui ne mènent pas à une vidéo sont refusés à l'envoi.",
    listing2:
      "Les liens de messagerie et d'invitation ne sont pas admis — Telegram, WhatsApp, Discord, Messenger, Signal et similaires. Le classement est fait pour du travail publié, pas pour des groupes de discussion.",
    listing3:
      "Les liens vers du contenu sexuel ne sont pas admis. Porno, NSFW ou plateforme pour adultes n'ont pas leur place ici.",
    listing4:
      "Les paramètres d'URL sont retirés des liens. Les URL d'affiliation, de parrainage et de suivi ne fonctionneront pas.",
    listing5:
      "Les raccourcisseurs de liens ne sont pas admis. Envoyez l'adresse de destination.",
    categoriesTitle: "Catégories",
    categoriesBody:
      "Vous choisissez vous-même la catégorie à l'envoi. Si une annonce est mal rangée, renvoyez le même lien avec la bonne catégorie — cela met à jour l'entrée existante au lieu d'en créer une seconde.",
    afterPay: "Après le paiement",
    afterPay1:
      "Votre annonce est publique. Les clics mènent à l'URL que vous avez fournie, sans paramètres, et le compteur s'affiche sur votre fiche.",
    afterPay2:
      "C'est le paiement abouti qui réserve le rang. Les paiements ne sont pas remboursables.",
    gaps: "Pas encore développé",
    gapRefunds:
      "Le paiement passe par Dodo Payments, mais il n'existe aucun espace en libre-service pour consulter ses paiements ou demander le retrait d'une annonce — écrivez-nous.",
    gapBoards:
      "Classer une journée glissante ou calendaire suppose d'additionner des paiements sur une fenêtre, or le schéma ne garde qu'une ligne par annonce, sans historique de paiement. Ces tableaux exigent une seconde table.",
    gapEnforcement:
      "Les règles ci-dessus sur les messageries, le contenu adulte et les raccourcisseurs relèvent de la politique, pas du code. Seule la vérification de l'URL vidéo est automatique.",
    gapLegal:
      "sont rédigées, mais toutes deux comportent encore des champs à compléter et aucune n'a été relue par un juriste.",
    whyExists: "Pourquoi ce site existe",
  },
  notFound: {
    code: "404",
    title: "Rien de classé ici",
    description:
      "Cette page n'existe pas, ou l'annonce vers laquelle elle pointait a été retirée.",
    back: "Retour au classement",
    leaderboard: "Voir le classement",
  },
  complete: {
    title: "Paiement reçu",
    description:
      "Votre annonce entre au classement dès que le paiement est confirmé.",
    p1: "La confirmation arrive en général en quelques secondes. Ouvrez le classement : votre vidéo devrait y figurer au rang obtenu.",
    p2: "Si rien n'apparaît après une minute, ne payez pas une seconde fois — écrivez-nous et nous l'ajouterons à la main.",
    leaderboard: "Voir le classement",
    back: "Retour au classement",
  },
  legal: {
    englishOnly: "Cette page n'est disponible qu'en anglais",
    englishOnlyBody:
      "Les Conditions d'utilisation et la Politique de confidentialité sont des documents juridiques. Une traduction automatique peut en changer le sens : seul le texte anglais fait foi et seul celui-ci est affiché.",
  },
};
