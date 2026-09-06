import type { Dictionary } from "./en";

export const zh: Dictionary = {
  nav: {
    leaderboard: "排行榜",
    categories: "分类",
    about: "关于",
    rules: "规则",
    terms: "条款",
    privacy: "隐私",
    language: "语言",
  },
  footer: {
    tagline: "出价多少，就排第几。",
    payments:
      "付款由 Dodo Payments 处理。付款确认后，作品即进入排行榜。",
  },
  home: {
    bidSubtitle: "创作者为让作品被看见而出的价",
    videosOnBoard: "榜上有 {count} 个视频",
    videoOnBoard: "榜上有 {count} 个视频",
    clicksDelivered: "已带来 {count} 次点击",
    claimFor: "拿下第 1 名只需",
    startAt: "新视频从 {amount} 起。",
    bidLess:
      "出价低于最高价也能上榜——排在这个金额所能达到的位置。",
    noAlgorithm:
      "没有算法，不看订阅数，不看历史。整个排名只有一个数字，而这个数字由你决定。",
    seeFull: "查看完整排行榜",
  },
  form: {
    videoLink: "视频链接",
    videoLinkHint:
      "YouTube、Vimeo、TikTok、Twitch、Dailymotion、Streamable 或 .mp4 文件",
    title: "标题",
    titlePlaceholder: "这个视频讲什么？",
    category: "分类",
    categoryPlaceholder: "请选择分类",
    pitch: "一句话简介",
    pitchHint: "可选 — 280 字符",
    pitchPlaceholder: "别人为什么要点开它？",
    yourBid: "你的出价",
    lowerBid: "降低出价",
    raiseBid: "提高出价",
    outbidFor: "以 {amount} 出价",
    startingCheckout: "正在跳转付款…",
    incomplete: "填写视频链接、标题和分类后即可出价。",
    alreadyOnBoard: "已经在榜上？用同一个链接出更高的价即可上升。",
    serverUnreachable: "无法连接服务器，请重试。",
  },
  modal: {
    title: "确认这个名次",
    subtitle: "核对名次与价格，然后同意服务条款以继续。",
    rank: "名次",
    price: "价格",
    dueNow: "现在应付",
    yourVideo: "你的视频",
    goesOnBoard: "将以该名次出现在公开排行榜上。其他人可以出更高的价把它拿走。",
    paymentTaken:
      "下一步由 Dodo Payments 收款。付款确认后，作品即进入排行榜。",
    agreeBefore: "我已阅读并同意 outbid.works 的",
    agreeTerms: "服务条款",
    agreeAfter: "",
    cancel: "取消",
    continue: "前往付款",
    close: "关闭",
  },
  board: {
    trending: "当前热门",
    all: "全部",
    empty: "榜单还是空的。",
    emptyHint: "成为第一个上榜的创作者——现在任何出价都能拿下第 1 名。",
    click: "{count} 次点击",
    clicks: "{count} 次点击",
    rankLabel: "第 {rank} 名",
  },
  leaderboard: {
    title: "排行榜",
    description: "榜上所有视频，按出价排序。金额相同时，先来的排在前面。",
    videos: "视频数",
    totalBid: "出价总额",
    clickThroughs: "点击数",
  },
  categoriesPage: {
    title: "分类",
    description: "每个分类各自成榜。人少的分类，拿第 1 名最便宜。",
    count: "{count} 个视频 · 榜首 {amount}",
    countOne: "{count} 个视频 · 榜首 {amount}",
    nobody: "这里还没有人出价。",
    open: "空位——{amount} 即可登顶。",
  },
  categories: {
    gaming: "游戏",
    music: "音乐",
    tech: "科技",
    comedy: "搞笑",
    education: "教育",
    film: "影视",
    vlog: "生活记录",
    fitness: "健身",
    other: "其他",
  },
  about: {
    title: "为什么做这个",
    description: "一个排行榜，唯一的排名依据就是你为上榜付了多少钱。",
    p1: "新创作者的第一个难题不是质量，而是没人知道这个视频存在。推荐算法依据的是新手还没有的信号——观看时长、订阅数、过往作品——于是最需要被发现的作品，恰恰最难被发现。",
    p2: "outbid.works 用一个数字取代了这一切。出价 {amount}，你就在榜上；出价高过所有人，你就是第 1 名。不看历史，不看粉丝数，没有冷启动。任何人看一眼就明白排名是怎么来的，而这正是算法从未做到的。",
    p3: "每张卡片都会显示点击数，所以出价不是黑箱。你能清楚看到这笔钱换来了什么，再决定下一笔值不值。",
    howPaying: "付款如何进行",
    howPayingBody:
      "由 Dodo Payments 作为登记商户收款——银行卡信息绝不会进入本站。付款确认后，作品会以该金额所对应的名次出现。",
    readRules: "阅读规则",
  },
  rules: {
    title: "规则",
    description:
      "outbid.works 是一个公开排行榜。没有广告，没有 API 密钥，不分成。你付钱，就是为了站在所有人前面。名次就是你付的钱——仅此而已。",
    boards: "各个榜单",
    boardsIntro: "一次付款会让你出现在包含这笔支出的每个榜单上。榜单之间只是统计的时间窗口不同。",
    allTime: "是主榜。名次取决于你为该条目付过的全部金额，且不会过期。",
    today:
      "是滚动的 24 小时。每笔付款从付款那一刻开始计入，一天后自动退出。在这个窗口内花得最多的人排第 1。",
    daily:
      "是 UTC 自然日——从午夜到午夜。当天榜单持续更新直到结束；过往日期冻结为存档。名次取决于你当天花了多少，而不是最近 24 小时。",
    live: "已上线",
    notBuilt: "尚未开发",
    ranking: "排名如何计算",
    ranking1:
      "新条目以整数美元计价，最低 {min}，最高 {max}，每次加 1 美元。已在榜上的条目会保持原金额，直到自己加价或被人超过。",
    ranking2:
      "拿下第 1 名，至少要比当前第 1 名多付 {step}。付得少一样能上榜，只是排在这个金额对应的位置。金额相同时按出价先后排列——先出价的排在前面。",
    ranking3:
      "已经在榜上？再次提交同一个链接即可提升名次。新金额至少要比当前金额高 {raise}。别人无法只补这个差额就抢走你的名次。",
    ranking4:
      "追踪参数会被忽略，平台链接以完整路径区分——因此同一网站的两个视频绝不会共用一个名次。",
    listing: "可以提交什么",
    listing1:
      "一个视频。YouTube、Vimeo、TikTok、Twitch、Dailymotion、Streamable，或直接的视频文件。无法解析为视频的链接在提交时即被拒绝。",
    listing2:
      "不接受聊天和邀请链接——Telegram、WhatsApp、Discord、Messenger、Signal 等。榜单面向公开发布的作品，而非群聊。",
    listing3:
      "不接受指向性内容的链接。色情、NSFW 或成人平台不属于本榜单。",
    listing4:
      "链接中的查询参数会被去除。联盟、推荐和追踪链接均无法使用。",
    listing5: "不接受短链接。请提交真正的目标地址。",
    categoriesTitle: "分类",
    categoriesBody:
      "分类由你在提交时自行选择。若条目归类有误，用正确分类重新提交同一链接即可——这会更新原有条目，而不会新增一条。",
    afterPay: "付款之后",
    afterPay1:
      "你的条目是公开的。点击会跳转到你提交的网址（不带查询参数），点击数显示在你的卡片上。",
    afterPay2: "只有完成付款才算取得名次。付款不予退还。",
    gaps: "尚未开发",
    gapRefunds:
      "付款通过 Dodo Payments 进行，但目前没有自助方式查看历史付款或申请下架——请改为发邮件给我们。",
    gapBoards:
      "按滚动日或自然日排名，需要在时间窗口内累加各笔付款，而当前表结构每个条目只有一行、没有付款历史。这些榜单需要第二张表。",
    gapEnforcement:
      "上述关于聊天链接、成人内容和短链接的规则属于政策，而非代码。只有视频链接校验是自动执行的。",
    gapLegal: "均已起草，但两份都还有待填写的空白，且均未经律师审阅。",
    whyExists: "为什么做这个",
  },
  notFound: {
    code: "404",
    title: "这里没有排名",
    description: "该页面不存在，或它所指向的条目已被下架。",
    back: "返回榜单",
    leaderboard: "查看排行榜",
  },
  complete: {
    title: "已收到付款",
    description: "付款确认后，你的作品就会进入排行榜。",
    p1: "确认通常在几秒内完成。打开排行榜，你的视频应当已按出价所得的名次出现。",
    p2: "如果一分钟后仍未出现，请不要重复付款——发邮件给我们，我们会手动添加。",
    leaderboard: "查看排行榜",
    back: "返回榜单",
  },
  legal: {
    englishOnly: "本页仅提供英文版",
    englishOnlyBody:
      "服务条款与隐私政策属于法律文件。机器翻译可能改变其含义，因此仅英文文本具有约束力，也只显示英文文本。",
  },
};
