import type { Dictionary } from "./en";

export const es: Dictionary = {
  nav: {
    leaderboard: "Clasificación",
    categories: "Categorías",
    about: "Acerca de",
    rules: "Reglas",
    terms: "Términos",
    privacy: "Privacidad",
    language: "Idioma",
  },
  footer: {
    tagline: "el puesto es lo que pagas.",
    payments:
      "Los pagos los gestiona Dodo Payments. Un anuncio entra en la tabla en cuanto se confirma su pago.",
  },
  home: {
    bidSubtitle: "pujado por creadores para que se vea su trabajo",
    videosOnBoard: "{count} vídeos en la tabla",
    videoOnBoard: "{count} vídeo en la tabla",
    clicksDelivered: "{count} clics entregados",
    claimFor: "Consigue el #1 por",
    startAt: "Los vídeos nuevos empiezan en {amount}.",
    bidLess:
      "Pujar menos que el precio más alto también te coloca en la tabla, en el puesto que esa cantidad alcance.",
    noAlgorithm:
      "Sin algoritmo, sin recuento de suscriptores, sin historial. Toda la clasificación es un número, y lo fijas tú.",
    seeFull: "Ver la clasificación completa",
  },
  form: {
    videoLink: "Enlace del vídeo",
    videoLinkHint:
      "YouTube, Vimeo, TikTok, Twitch, Dailymotion, Streamable o un .mp4",
    title: "Título",
    titlePlaceholder: "¿De qué trata el vídeo?",
    category: "Categoría",
    categoryPlaceholder: "Elige una categoría",
    pitch: "Presentación en una línea",
    pitchHint: "Opcional — 280 caracteres",
    pitchPlaceholder: "¿Por qué habría que darle al play?",
    yourBid: "Tu puja",
    lowerBid: "Bajar la puja",
    raiseBid: "Subir la puja",
    outbidFor: "Pujar {amount}",
    startingCheckout: "Abriendo el pago…",
    incomplete: "Añade un enlace de vídeo, un título y una categoría para pujar.",
    alreadyOnBoard:
      "¿Ya estás en la tabla? Envía el mismo enlace con una puja mayor para subir.",
    serverUnreachable: "No se pudo contactar con el servidor. Inténtalo de nuevo.",
  },
  modal: {
    title: "Confirma este puesto",
    subtitle:
      "Revisa el puesto y el precio, y acepta los Términos del servicio para continuar.",
    rank: "Puesto",
    price: "Precio",
    dueNow: "A pagar ahora",
    yourVideo: "Tu vídeo",
    goesOnBoard:
      "entra en la tabla pública en ese puesto. Otra persona puede pagar más y quitártelo.",
    paymentTaken:
      "El cobro lo realiza Dodo Payments en la pantalla siguiente. El anuncio entra en la tabla cuando se confirma el pago.",
    agreeBefore: "He leído y acepto los",
    agreeTerms: "Términos del servicio",
    agreeAfter: "de outbid.works",
    cancel: "Cancelar",
    continue: "Continuar al pago",
    close: "Cerrar",
  },
  board: {
    trending: "Ahora mismo",
    all: "Todo",
    empty: "La tabla está vacía.",
    emptyHint:
      "Sé el primer creador en ella: ahora mismo cualquier puja consigue el #1.",
    click: "{count} clic",
    clicks: "{count} clics",
    rankLabel: "Puesto {rank}",
  },
  leaderboard: {
    title: "Clasificación",
    description:
      "Todos los vídeos de la tabla, ordenados por puja. En caso de empate gana quien llegó antes.",
    videos: "Vídeos",
    totalBid: "Total pujado",
    clickThroughs: "Clics",
  },
  categoriesPage: {
    title: "Categorías",
    description:
      "Cada categoría es una carrera aparte. La más tranquila es el sitio más barato para ser #1.",
    count: "{count} vídeos · líder en {amount}",
    countOne: "{count} vídeo · líder en {amount}",
    nobody: "Aquí todavía no ha pujado nadie.",
    open: "Libre: con {amount} se consigue el primer puesto.",
  },
  categories: {
    gaming: "Videojuegos",
    music: "Música",
    tech: "Tecnología",
    comedy: "Comedia",
    education: "Educación",
    film: "Cine",
    vlog: "Vlog",
    fitness: "Fitness",
    other: "Otros",
  },
  about: {
    title: "Por qué existe esto",
    description:
      "Una clasificación donde la única señal es cuánto pagaste por estar en ella.",
    p1: "El primer problema de un creador novel no es la calidad. Es que nadie sabe que el vídeo existe. Los algoritmos de recomendación se basan en señales que un principiante todavía no tiene —tiempo de visionado, suscriptores, un catálogo previo—, así que el trabajo que más necesita ser descubierto es el que menos probabilidades tiene de lograrlo.",
    p2: "outbid.works sustituye todo eso por un número. Puja {amount} y estás en la tabla. Puja más que nadie y eres el #1. Sin historial, sin recuento de seguidores, sin arranque en frío. La clasificación resulta legible para cualquiera que la mire, que es justo lo que los algoritmos nunca consiguen.",
    p3: "Cada ficha muestra su número de clics, así que una puja no es una caja negra. Ves exactamente qué compró el dinero y decides si la siguiente merece la pena.",
    howPaying: "Cómo funciona el pago",
    howPayingBody:
      "El cobro lo realiza Dodo Payments, que actúa como comerciante registrado: los datos de la tarjeta nunca llegan a este sitio. El anuncio aparece cuando se confirma el pago, en el puesto que alcance la cantidad.",
    readRules: "Leer las reglas",
  },
  rules: {
    title: "Reglas",
    description:
      "outbid.works es una clasificación pública. Sin anuncios, sin claves de API, sin reparto de ingresos. Pagas por situarte por encima del resto. El puesto es lo que pagas, nada más.",
    boards: "Las tablas",
    boardsIntro:
      "Un solo pago te clasifica en todas las tablas que incluyan ese gasto. Las tablas solo miran ventanas de tiempo distintas.",
    allTime:
      "es la tabla principal. El puesto es todo lo que has pagado por ese anuncio. No caduca.",
    today:
      "abarca 24 horas móviles. Cada pago cuenta desde el momento en que pagaste y desaparece un día después. Quien más gastó en esa ventana es el #1.",
    daily:
      "es un día natural UTC, de medianoche a medianoche. El día en curso sigue vivo hasta que cierra; los días pasados quedan congelados como archivo. El puesto es lo que gastaste ese día, no en las últimas 24 horas.",
    live: "Activa",
    notBuilt: "Aún sin construir",
    ranking: "Cómo funciona la clasificación",
    ranking1:
      "Los anuncios nuevos se pagan en dólares enteros, mínimo {min}, máximo {max}, de dólar en dólar. Un anuncio que ya está en la tabla mantiene su cantidad hasta que la suba o lo superen.",
    ranking2:
      "Tomar el #1 cuesta al menos {step} más que el #1 actual. Pagar menos también te coloca en el puesto que esa cantidad alcance. Las cantidades iguales conservan el orden en que se depositaron: el anuncio más antiguo mantiene el mejor puesto.",
    ranking3:
      "¿Ya estás en la lista? Envía el mismo enlace otra vez para subir. La nueva cantidad debe superar la actual en al menos {raise}. Nadie más puede quitarte el puesto pagando esa diferencia.",
    ranking4:
      "Los parámetros de seguimiento se ignoran y los enlaces de plataforma se identifican por su ruta completa, así que dos vídeos del mismo sitio nunca comparten puesto.",
    listing: "Qué puedes publicar",
    listing1:
      "Un vídeo. YouTube, Vimeo, TikTok, Twitch, Dailymotion, Streamable o un archivo de vídeo directo. Los enlaces que no llevan a un vídeo se rechazan al enviarlos.",
    listing2:
      "No se admiten enlaces de chat ni de invitación: Telegram, WhatsApp, Discord, Messenger, Signal y similares. La tabla es para trabajo publicado, no para grupos de chat.",
    listing3:
      "No se admiten enlaces a contenido sexual. Si es porno, NSFW o una plataforma para adultos, no tiene sitio aquí.",
    listing4:
      "Los parámetros de consulta se eliminan de los enlaces. Las URL de afiliación, referidos y seguimiento no funcionarán.",
    listing5:
      "No se admiten acortadores de enlaces. Envía la dirección de destino.",
    categoriesTitle: "Categorías",
    categoriesBody:
      "La categoría la eliges tú al enviar. Si un anuncio está en la equivocada, reenvía el mismo enlace con la correcta: actualiza la entrada existente en lugar de crear otra.",
    afterPay: "Después de pagar",
    afterPay1:
      "Tu anuncio es público. Los clics van a la URL que enviaste, sin parámetros, y el recuento aparece en tu ficha.",
    afterPay2:
      "Es el pago completado lo que reclama el puesto. Los pagos no son reembolsables.",
    gaps: "Aún sin construir",
    gapRefunds:
      "El pago pasa por Dodo Payments, pero no hay forma autogestionada de consultar pagos anteriores ni de pedir la retirada de un anuncio: escríbenos.",
    gapBoards:
      "Clasificar un día móvil o natural exige sumar pagos individuales dentro de una ventana, y el esquema guarda una fila por anuncio, sin historial de pagos. Esas tablas necesitan una segunda tabla.",
    gapEnforcement:
      "Las reglas anteriores sobre chats, contenido adulto y acortadores son política, no código. Solo la comprobación de la URL del vídeo es automática.",
    gapLegal:
      "están redactados, pero a ambos les faltan campos por completar y ninguno ha sido revisado por un abogado.",
    whyExists: "Por qué existe esto",
  },
  notFound: {
    code: "404",
    title: "Aquí no hay nada clasificado",
    description:
      "Esta página no existe, o el anuncio al que apuntaba fue retirado.",
    back: "Volver a la tabla",
    leaderboard: "Ver la clasificación",
  },
  complete: {
    title: "Pago recibido",
    description:
      "Tu anuncio entra en la tabla en cuanto se confirme el pago.",
    p1: "La confirmación suele llegar en unos segundos. Abre la clasificación y tu vídeo debería estar en el puesto que ganó tu puja.",
    p2: "Si no aparece pasado un minuto, no vuelvas a pagar: escríbenos y lo colocaremos a mano.",
    leaderboard: "Ver la clasificación",
    back: "Volver a la tabla",
  },
  legal: {
    englishOnly: "Esta página solo está disponible en inglés",
    englishOnlyBody:
      "Los Términos del servicio y la Política de privacidad son documentos legales. Una traducción automática puede cambiar su significado, así que solo el texto en inglés es vinculante y solo ese se muestra.",
  },
};
