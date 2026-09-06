import type { Dictionary } from "./en";

export const pt: Dictionary = {
  nav: {
    leaderboard: "Ranking",
    categories: "Categorias",
    about: "Sobre",
    rules: "Regras",
    terms: "Termos",
    privacy: "Privacidade",
    language: "Idioma",
  },
  footer: {
    tagline: "a posição é o que você paga.",
    payments:
      "Os pagamentos são processados pela Dodo Payments. Um anúncio entra no ranking assim que o pagamento é confirmado.",
  },
  home: {
    bidSubtitle: "apostados por criadores para que seu trabalho apareça",
    videosOnBoard: "{count} vídeos no ranking",
    videoOnBoard: "{count} vídeo no ranking",
    clicksDelivered: "{count} cliques entregues",
    claimFor: "Garanta o #1 por",
    startAt: "Vídeos novos começam em {amount}.",
    bidLess:
      "Ofertar menos que o preço mais alto ainda coloca você no ranking — na posição que esse valor alcançar.",
    noAlgorithm:
      "Sem algoritmo, sem contagem de inscritos, sem histórico. O ranking inteiro é um número, e quem define é você.",
    seeFull: "Ver o ranking completo",
  },
  form: {
    videoLink: "Link do vídeo",
    videoLinkHint:
      "YouTube, Vimeo, TikTok, Twitch, Dailymotion, Streamable ou um .mp4",
    title: "Título",
    titlePlaceholder: "Do que se trata o vídeo?",
    category: "Categoria",
    categoryPlaceholder: "Escolha uma categoria",
    pitch: "Descrição em uma linha",
    pitchHint: "Opcional — 280 caracteres",
    pitchPlaceholder: "Por que alguém deveria dar play?",
    yourBid: "Sua oferta",
    lowerBid: "Diminuir oferta",
    raiseBid: "Aumentar oferta",
    outbidFor: "Ofertar {amount}",
    startingCheckout: "Abrindo o pagamento…",
    incomplete:
      "Informe o link do vídeo, o título e a categoria para fazer uma oferta.",
    alreadyOnBoard:
      "Já está no ranking? Envie o mesmo link com uma oferta maior para subir.",
    serverUnreachable: "Não foi possível falar com o servidor. Tente de novo.",
  },
  modal: {
    title: "Confirme esta posição",
    subtitle:
      "Confira a posição e o preço e aceite os Termos de Serviço para continuar.",
    rank: "Posição",
    price: "Preço",
    dueNow: "A pagar agora",
    yourVideo: "Seu vídeo",
    goesOnBoard:
      "entra no ranking público nessa posição. Outra pessoa pode pagar mais e tomá-la.",
    paymentTaken:
      "O pagamento é feito pela Dodo Payments na próxima tela. O anúncio entra no ranking assim que o pagamento é confirmado.",
    agreeBefore: "Li e concordo com os",
    agreeTerms: "Termos de Serviço",
    agreeAfter: "do outbid.works",
    cancel: "Cancelar",
    continue: "Ir para o pagamento",
    close: "Fechar",
  },
  board: {
    trending: "Em alta agora",
    all: "Tudo",
    empty: "O ranking está vazio.",
    emptyHint:
      "Seja o primeiro criador nele — agora qualquer oferta leva o #1.",
    click: "{count} clique",
    clicks: "{count} cliques",
    rankLabel: "Posição {rank}",
  },
  leaderboard: {
    title: "Ranking",
    description:
      "Todos os vídeos, ordenados por oferta. Em caso de empate, vence quem chegou primeiro.",
    videos: "Vídeos",
    totalBid: "Total ofertado",
    clickThroughs: "Cliques",
  },
  categoriesPage: {
    title: "Categorias",
    description:
      "Cada categoria é uma corrida própria. A mais tranquila é o lugar mais barato para ser #1.",
    count: "{count} vídeos · líder em {amount}",
    countOne: "{count} vídeo · líder em {amount}",
    nobody: "Ninguém ofertou aqui ainda.",
    open: "Livre — {amount} garante o topo.",
  },
  categories: {
    gaming: "Games",
    music: "Música",
    tech: "Tecnologia",
    comedy: "Comédia",
    education: "Educação",
    film: "Cinema",
    vlog: "Vlog",
    fitness: "Fitness",
    other: "Outros",
  },
  about: {
    title: "Por que isto existe",
    description:
      "Um ranking em que o único critério é quanto você pagou para estar nele.",
    p1: "O primeiro problema de um criador novo não é qualidade. É que ninguém sabe que o vídeo existe. Algoritmos de recomendação avaliam sinais que um iniciante ainda não tem — tempo de exibição, inscritos, um catálogo anterior —, então o trabalho que mais precisa ser descoberto é o que tem menos chance disso.",
    p2: "O outbid.works troca tudo isso por um número. Oferte {amount} e você está no ranking. Oferte mais que todo mundo e você é o #1. Sem histórico, sem contagem de seguidores, sem começo do zero. O ranking é legível para qualquer um que o veja, que é justamente o que os algoritmos nunca conseguem.",
    p3: "Cada card mostra sua contagem de cliques, então uma oferta não é uma caixa-preta. Você vê exatamente o que o dinheiro comprou e decide se a próxima vale a pena.",
    howPaying: "Como funciona o pagamento",
    howPayingBody:
      "O pagamento é feito pela Dodo Payments, que atua como comerciante registrado — os dados do cartão nunca chegam a este site. O anúncio aparece quando o pagamento é confirmado, na posição que o valor alcançar.",
    readRules: "Ler as regras",
  },
  rules: {
    title: "Regras",
    description:
      "O outbid.works é um ranking público. Sem anúncios, sem chaves de API, sem divisão de receita. Você paga para ficar acima dos outros. A posição é o que você paga — nada além disso.",
    boards: "Os rankings",
    boardsIntro:
      "Um pagamento posiciona você em todos os rankings que incluam aquele gasto. Os rankings apenas olham janelas de tempo diferentes.",
    allTime:
      "é o ranking principal. A posição é tudo o que você já pagou por aquele anúncio. Não expira.",
    today:
      "cobre 24 horas móveis. Cada pagamento conta a partir do momento em que você pagou e sai um dia depois. Quem mais gastou nessa janela é o #1.",
    daily:
      "é um dia de calendário UTC — de meia-noite a meia-noite. O dia atual segue aberto até fechar; dias passados congelam como arquivo. A posição é o que você gastou naquele dia, não nas últimas 24 horas.",
    live: "Ativo",
    notBuilt: "Ainda não construído",
    ranking: "Como funciona a classificação",
    ranking1:
      "Anúncios novos usam dólares inteiros, mínimo de {min}, máximo de {max}, de um em um. Um anúncio já no ranking mantém seu valor até aumentá-lo ou ser superado.",
    ranking2:
      "Tomar o #1 custa pelo menos {step} a mais que o #1 atual. Pagar menos ainda coloca você na posição que o valor alcançar. Valores iguais mantêm a ordem em que foram feitos — o anúncio mais antigo fica acima.",
    ranking3:
      "Já está na lista? Envie o mesmo link de novo para subir. O novo valor precisa superar o atual em pelo menos {raise}. Ninguém pode tomar sua posição pagando essa diferença.",
    ranking4:
      "Parâmetros de rastreamento são ignorados e links de plataforma são identificados pelo caminho completo — então dois vídeos do mesmo site nunca dividem uma posição.",
    listing: "O que você pode publicar",
    listing1:
      "Um vídeo. YouTube, Vimeo, TikTok, Twitch, Dailymotion, Streamable ou um arquivo de vídeo direto. Links que não levam a um vídeo são recusados no envio.",
    listing2:
      "Links de chat e convite não são permitidos — Telegram, WhatsApp, Discord, Messenger, Signal e semelhantes. O ranking é para trabalho publicado, não para grupos de conversa.",
    listing3:
      "Links para conteúdo sexual não são permitidos. Pornografia, NSFW ou plataforma adulta não têm lugar aqui.",
    listing4:
      "Parâmetros de consulta são removidos dos links. URLs de afiliado, indicação e rastreamento não funcionam.",
    listing5:
      "Encurtadores de link não são permitidos. Envie o endereço de destino.",
    categoriesTitle: "Categorias",
    categoriesBody:
      "Você escolhe a categoria ao enviar. Se um anúncio estiver na errada, reenvie o mesmo link com a correta — isso atualiza a entrada existente em vez de criar outra.",
    afterPay: "Depois de pagar",
    afterPay1:
      "Seu anúncio é público. Os cliques vão para a URL que você enviou, sem parâmetros, e a contagem aparece no seu card.",
    afterPay2:
      "É o pagamento concluído que garante a posição. Pagamentos não são reembolsáveis.",
    gaps: "Ainda não construído",
    gapRefunds:
      "O pagamento passa pela Dodo Payments, mas não há forma autônoma de ver pagamentos anteriores ou pedir a remoção de um anúncio — escreva para nós.",
    gapBoards:
      "Classificar um dia móvel ou de calendário exige somar pagamentos dentro de uma janela, e o esquema guarda uma linha por anúncio, sem histórico de pagamentos. Esses rankings precisam de uma segunda tabela.",
    gapEnforcement:
      "As regras acima sobre chats, conteúdo adulto e encurtadores são política, não código. Só a verificação da URL do vídeo é automática.",
    gapLegal:
      "estão redigidos, mas ambos ainda têm campos a preencher e nenhum foi revisado por um advogado.",
    whyExists: "Por que isto existe",
  },
  notFound: {
    code: "404",
    title: "Nada classificado aqui",
    description:
      "Esta página não existe, ou o anúncio para o qual ela apontava foi removido.",
    back: "Voltar ao ranking",
    leaderboard: "Ver o ranking",
  },
  complete: {
    title: "Pagamento recebido",
    description:
      "Seu anúncio entra no ranking assim que o pagamento for confirmado.",
    p1: "A confirmação costuma chegar em poucos segundos. Abra o ranking e seu vídeo deve estar na posição que sua oferta conquistou.",
    p2: "Se não aparecer depois de um minuto, não pague de novo — escreva para nós e colocaremos manualmente.",
    leaderboard: "Ver o ranking",
    back: "Voltar ao ranking",
  },
  legal: {
    englishOnly: "Esta página está disponível apenas em inglês",
    englishOnlyBody:
      "Os Termos de Serviço e a Política de Privacidade são documentos jurídicos. Uma tradução automática pode mudar o sentido, então só o texto em inglês tem valor e só ele é exibido.",
  },
};
