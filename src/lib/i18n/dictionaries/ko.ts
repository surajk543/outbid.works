import type { Dictionary } from "./en";

export const ko: Dictionary = {
  nav: {
    leaderboard: "순위표",
    categories: "카테고리",
    about: "소개",
    rules: "규칙",
    terms: "이용약관",
    privacy: "개인정보",
    language: "언어",
  },
  footer: {
    tagline: "순위는 낸 만큼 정해집니다.",
    payments:
      "결제는 Dodo Payments가 처리합니다. 결제가 확인되면 목록이 순위표에 올라갑니다.",
  },
  home: {
    bidSubtitle: "창작자들이 자기 작품을 알리려고 낸 금액",
    videosOnBoard: "순위표에 영상 {count}개",
    videoOnBoard: "순위표에 영상 {count}개",
    clicksDelivered: "클릭 {count}회 전달",
    claimFor: "1위를 차지하는 금액",
    startAt: "새 영상은 {amount}부터 시작합니다.",
    bidLess:
      "최고가보다 적게 걸어도 순위표에는 오릅니다. 그 금액이 닿는 자리에 놓입니다.",
    noAlgorithm:
      "알고리즘도, 구독자 수도, 이력도 없습니다. 순위는 숫자 하나로 정해지고, 그 숫자는 당신이 정합니다.",
    seeFull: "전체 순위표 보기",
  },
  form: {
    videoLink: "영상 링크",
    videoLinkHint:
      "YouTube, Vimeo, TikTok, Twitch, Dailymotion, Streamable 또는 .mp4",
    title: "제목",
    titlePlaceholder: "어떤 영상인가요?",
    category: "카테고리",
    categoryPlaceholder: "카테고리 선택",
    pitch: "한 줄 소개",
    pitchHint: "선택 — 280자",
    pitchPlaceholder: "왜 재생할 만한가요?",
    yourBid: "입찰 금액",
    lowerBid: "금액 내리기",
    raiseBid: "금액 올리기",
    outbidFor: "{amount}에 입찰",
    startingCheckout: "결제로 이동 중…",
    incomplete: "입찰하려면 영상 링크, 제목, 카테고리를 입력하세요.",
    alreadyOnBoard:
      "이미 순위표에 있나요? 같은 링크를 더 높은 금액으로 올리면 순위가 올라갑니다.",
    serverUnreachable: "서버에 연결하지 못했습니다. 다시 시도해 주세요.",
  },
  modal: {
    title: "이 순위로 확정할까요",
    subtitle: "순위와 금액을 확인한 뒤 이용약관에 동의하면 계속 진행됩니다.",
    rank: "순위",
    price: "금액",
    dueNow: "지금 결제",
    yourVideo: "내 영상",
    goesOnBoard:
      "이(가) 그 순위로 공개 순위표에 올라갑니다. 다른 사람이 더 내면 그 자리를 가져갈 수 있습니다.",
    paymentTaken:
      "다음 화면에서 Dodo Payments가 결제를 진행합니다. 결제가 확인되면 순위표에 올라갑니다.",
    agreeBefore: "outbid.works의",
    agreeTerms: "이용약관",
    agreeAfter: "을 읽었고 이에 동의합니다",
    cancel: "취소",
    continue: "결제로 이동",
    close: "닫기",
  },
  board: {
    trending: "지금 주목받는 영상",
    all: "전체",
    empty: "순위표가 비어 있습니다.",
    emptyHint: "첫 창작자가 되어 보세요. 지금은 어떤 금액이든 1위입니다.",
    click: "클릭 {count}회",
    clicks: "클릭 {count}회",
    rankLabel: "{rank}위",
  },
  leaderboard: {
    title: "순위표",
    description:
      "순위표의 모든 영상을 입찰 금액순으로 보여줍니다. 금액이 같으면 먼저 올린 쪽이 앞섭니다.",
    videos: "영상 수",
    totalBid: "총 입찰액",
    clickThroughs: "클릭 수",
  },
  categoriesPage: {
    title: "카테고리",
    description:
      "카테고리마다 별도의 경쟁입니다. 조용한 카테고리일수록 1위가 가장 쌉니다.",
    count: "영상 {count}개 · 1위 {amount}",
    countOne: "영상 {count}개 · 1위 {amount}",
    nobody: "여기에는 아직 입찰이 없습니다.",
    open: "비어 있음 — {amount}면 1위입니다.",
  },
  categories: {
    gaming: "게임",
    music: "음악",
    tech: "기술",
    comedy: "코미디",
    education: "교육",
    film: "영화",
    vlog: "브이로그",
    fitness: "피트니스",
    other: "기타",
  },
  about: {
    title: "왜 만들었나",
    description: "순위를 정하는 유일한 기준이 '얼마를 냈는가'인 순위표입니다.",
    p1: "신인 창작자의 첫 번째 문제는 품질이 아닙니다. 아무도 그 영상이 있다는 사실을 모른다는 것입니다. 추천 알고리즘은 초보자에게 아직 없는 신호—시청 시간, 구독자, 과거 작품—로 순위를 매깁니다. 그래서 발견이 가장 필요한 작품이 발견될 가능성은 가장 낮습니다.",
    p2: "outbid.works는 이 모두를 숫자 하나로 대체합니다. {amount}를 걸면 순위표에 오르고, 누구보다 많이 걸면 1위입니다. 이력도, 팔로워 수도, 시작의 불리함도 없습니다. 순위의 근거가 보는 사람 누구에게나 분명한데, 알고리즘은 결코 그렇게 하지 못합니다.",
    p3: "카드마다 클릭 수가 표시되므로 입찰은 블랙박스가 아닙니다. 그 돈으로 무엇을 얻었는지 그대로 보이고, 다음 입찰이 값어치가 있는지 스스로 판단할 수 있습니다.",
    howPaying: "결제 방식",
    howPayingBody:
      "결제는 기록상 판매자인 Dodo Payments가 진행합니다. 카드 정보는 이 사이트에 도달하지 않습니다. 결제가 확인되면 그 금액에 해당하는 순위로 목록이 표시됩니다.",
    readRules: "규칙 읽기",
  },
  rules: {
    title: "규칙",
    description:
      "outbid.works는 공개 순위표입니다. 광고도, API 키도, 수익 배분도 없습니다. 다른 사람보다 위에 서기 위해 돈을 냅니다. 순위는 낸 금액 그 자체이며, 그 외의 기준은 없습니다.",
    boards: "순위표의 종류",
    boardsIntro:
      "한 번의 결제는 그 지출이 포함되는 모든 순위표에 반영됩니다. 순위표는 집계하는 기간만 다릅니다.",
    allTime:
      "이(가) 기본 순위표입니다. 순위는 그 목록에 지금까지 낸 전액으로 정해지며 만료되지 않습니다.",
    today:
      "은(는) 최근 24시간입니다. 각 결제는 결제한 순간부터 계산되어 하루 뒤에 빠집니다. 그 기간에 가장 많이 쓴 사람이 1위입니다.",
    daily:
      "은(는) UTC 기준 하루로, 자정부터 자정까지입니다. 당일은 마감될 때까지 갱신되고, 지난 날짜는 기록으로 고정됩니다. 순위는 그날 쓴 금액으로 정해지며 최근 24시간이 아닙니다.",
    live: "운영 중",
    notBuilt: "미구현",
    ranking: "순위가 정해지는 방식",
    ranking1:
      "새 목록은 미국 달러 정수 단위이며 최소 {min}, 최대 {max}, 1달러 단위로 올립니다. 이미 올라간 목록은 금액을 올리거나 추월당하기 전까지 그 금액을 유지합니다.",
    ranking2:
      "1위를 차지하려면 현재 1위보다 최소 {step} 더 내야 합니다. 그보다 적게 내도 그 금액이 닿는 순위에 오릅니다. 금액이 같으면 올린 순서대로 배치되어, 먼저 올린 목록이 위에 남습니다.",
    ranking3:
      "이미 목록에 있다면 같은 링크를 다시 올려 순위를 높일 수 있습니다. 새 금액은 현재 금액보다 최소 {raise} 높아야 합니다. 다른 사람이 그 차액만 내고 당신의 순위를 가져갈 수는 없습니다.",
    ranking4:
      "추적용 쿼리 문자열은 무시되고, 플랫폼 링크는 전체 경로로 구분됩니다. 같은 사이트의 두 영상이 하나의 순위를 공유하는 일은 없습니다.",
    listing: "올릴 수 있는 것",
    listing1:
      "영상입니다. YouTube, Vimeo, TikTok, Twitch, Dailymotion, Streamable 또는 직접 연결되는 영상 파일. 영상으로 이어지지 않는 링크는 제출 시점에 거부됩니다.",
    listing2:
      "채팅과 초대 링크는 허용되지 않습니다 — Telegram, WhatsApp, Discord, Messenger, Signal 등. 이 순위표는 공개된 작품을 위한 것이지 단체 대화방을 위한 것이 아닙니다.",
    listing3:
      "성적인 콘텐츠 링크는 허용되지 않습니다. 포르노, NSFW, 성인 플랫폼은 이곳에 올릴 수 없습니다.",
    listing4:
      "링크에서 쿼리 문자열은 제거됩니다. 제휴, 추천, 추적용 URL은 작동하지 않습니다.",
    listing5:
      "단축 URL은 허용되지 않습니다. 실제 목적지 주소를 올려 주세요.",
    categoriesTitle: "카테고리",
    categoriesBody:
      "카테고리는 제출할 때 직접 고릅니다. 잘못된 카테고리에 있다면 올바른 카테고리로 같은 링크를 다시 제출하세요. 기존 항목이 갱신될 뿐 새로 만들어지지 않습니다.",
    afterPay: "결제한 다음",
    afterPay1:
      "올린 목록은 공개됩니다. 클릭은 제출한 URL로 이동하며(쿼리 문자열 제외), 그 횟수가 카드에 표시됩니다.",
    afterPay2:
      "순위를 확보하는 것은 완료된 결제입니다. 결제는 환불되지 않습니다.",
    gaps: "미구현",
    gapRefunds:
      "결제는 Dodo Payments를 통하지만, 지난 결제를 확인하거나 목록 삭제를 요청할 수 있는 화면은 아직 없습니다. 이메일로 연락해 주세요.",
    gapBoards:
      "최근 24시간이나 달력 하루 기준 순위는 기간 안의 개별 결제를 합산해야 하는데, 현재 구조는 목록당 한 행만 두고 결제 이력이 없습니다. 그 순위표에는 두 번째 테이블이 필요합니다.",
    gapEnforcement:
      "위의 채팅, 성인 콘텐츠, 단축 URL 규정은 정책이지 코드가 아닙니다. 자동으로 실행되는 것은 영상 URL 검사뿐입니다.",
    gapLegal:
      "은(는) 초안 상태이며, 둘 다 채워야 할 항목이 남아 있고 변호사 검토도 받지 않았습니다.",
    whyExists: "왜 만들었나",
  },
  notFound: {
    code: "404",
    title: "여기에는 순위가 없습니다",
    description:
      "이 페이지는 존재하지 않거나, 가리키던 목록이 내려갔습니다.",
    back: "순위표로 돌아가기",
    leaderboard: "순위표 보기",
  },
  complete: {
    title: "결제를 받았습니다",
    description: "결제가 확인되는 대로 순위표에 올라갑니다.",
    p1: "확인은 보통 몇 초 안에 끝납니다. 순위표를 열면 입찰 금액에 해당하는 자리에 영상이 보일 것입니다.",
    p2: "1분이 지나도 보이지 않으면 다시 결제하지 마세요. 이메일을 보내주시면 직접 올려 드리겠습니다.",
    leaderboard: "순위표 보기",
    back: "순위표로 돌아가기",
  },
  legal: {
    englishOnly: "이 페이지는 영어로만 제공됩니다",
    englishOnlyBody:
      "이용약관과 개인정보처리방침은 법률 문서입니다. 기계 번역은 의미를 바꿀 수 있으므로 영어 원문만 효력을 가지며, 영어 원문만 표시합니다.",
  },
};
