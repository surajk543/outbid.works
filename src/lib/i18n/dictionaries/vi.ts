import type { Dictionary } from "./en";

export const vi: Dictionary = {
  nav: {
    leaderboard: "Bảng xếp hạng",
    categories: "Danh mục",
    about: "Giới thiệu",
    rules: "Luật chơi",
    terms: "Điều khoản",
    privacy: "Quyền riêng tư",
    language: "Ngôn ngữ",
  },
  footer: {
    tagline: "thứ hạng đúng bằng số tiền bạn trả.",
    payments:
      "Thanh toán do Dodo Payments xử lý. Mục sẽ lên bảng ngay khi khoản thanh toán được xác nhận.",
  },
  home: {
    bidSubtitle: "được các nhà sáng tạo đặt để tác phẩm của họ được nhìn thấy",
    videosOnBoard: "{count} video trên bảng",
    videoOnBoard: "{count} video trên bảng",
    clicksDelivered: "đã mang lại {count} lượt nhấp",
    claimFor: "Giành hạng 1 với giá",
    startAt: "Video mới bắt đầu từ {amount}.",
    bidLess:
      "Đặt thấp hơn mức cao nhất vẫn đưa bạn lên bảng — ở đúng vị trí mà số tiền đó với tới.",
    noAlgorithm:
      "Không thuật toán, không đếm người đăng ký, không xét quá khứ. Toàn bộ thứ hạng chỉ là một con số, và bạn là người đặt ra nó.",
    seeFull: "Xem toàn bộ bảng xếp hạng",
  },
  form: {
    videoLink: "Liên kết video",
    videoLinkHint:
      "YouTube, Vimeo, TikTok, Twitch, Dailymotion, Streamable hoặc tệp .mp4",
    title: "Tiêu đề",
    titlePlaceholder: "Video này nói về điều gì?",
    category: "Danh mục",
    categoryPlaceholder: "Chọn danh mục",
    pitch: "Giới thiệu một dòng",
    pitchHint: "Không bắt buộc — 280 ký tự",
    pitchPlaceholder: "Vì sao nên bấm xem?",
    yourBid: "Mức đặt của bạn",
    lowerBid: "Giảm mức đặt",
    raiseBid: "Tăng mức đặt",
    outbidFor: "Đặt {amount}",
    startingCheckout: "Đang mở trang thanh toán…",
    incomplete: "Nhập liên kết video, tiêu đề và danh mục để đặt giá.",
    alreadyOnBoard:
      "Đã có trên bảng? Gửi lại cùng liên kết với mức cao hơn để leo hạng.",
    serverUnreachable: "Không kết nối được máy chủ. Hãy thử lại.",
  },
  modal: {
    title: "Xác nhận thứ hạng này",
    subtitle:
      "Kiểm tra thứ hạng và giá, sau đó đồng ý với Điều khoản dịch vụ để tiếp tục.",
    rank: "Thứ hạng",
    price: "Giá",
    dueNow: "Thanh toán ngay",
    yourVideo: "Video của bạn",
    goesOnBoard:
      "sẽ lên bảng công khai ở thứ hạng đó. Người khác có thể trả cao hơn và giành lấy.",
    paymentTaken:
      "Dodo Payments thu tiền ở màn hình kế tiếp. Mục sẽ lên bảng khi khoản thanh toán được xác nhận.",
    agreeBefore: "Tôi đã đọc và đồng ý với",
    agreeTerms: "Điều khoản dịch vụ",
    agreeAfter: "của outbid.works",
    cancel: "Hủy",
    continue: "Tới trang thanh toán",
    close: "Đóng",
  },
  board: {
    trending: "Đang nổi bật",
    all: "Tất cả",
    empty: "Bảng đang trống.",
    emptyHint:
      "Hãy là nhà sáng tạo đầu tiên — lúc này mức đặt nào cũng giành hạng 1.",
    click: "{count} lượt nhấp",
    clicks: "{count} lượt nhấp",
    rankLabel: "Hạng {rank}",
  },
  leaderboard: {
    title: "Bảng xếp hạng",
    description:
      "Mọi video trên bảng, sắp theo mức đặt. Nếu bằng nhau, ai đến trước đứng trên.",
    videos: "Video",
    totalBid: "Tổng đặt",
    clickThroughs: "Lượt nhấp",
  },
  categoriesPage: {
    title: "Danh mục",
    description:
      "Mỗi danh mục là một cuộc đua riêng. Danh mục càng vắng thì giành hạng 1 càng rẻ.",
    count: "{count} video · dẫn đầu ở {amount}",
    countOne: "{count} video · dẫn đầu ở {amount}",
    nobody: "Chưa ai đặt giá ở đây.",
    open: "Còn trống — {amount} là đủ để lên đầu.",
  },
  categories: {
    gaming: "Trò chơi",
    music: "Âm nhạc",
    tech: "Công nghệ",
    comedy: "Hài",
    education: "Giáo dục",
    film: "Phim",
    vlog: "Vlog",
    fitness: "Thể hình",
    other: "Khác",
  },
  about: {
    title: "Vì sao có trang này",
    description:
      "Một bảng xếp hạng mà tiêu chí duy nhất là bạn đã trả bao nhiêu để có mặt trên đó.",
    p1: "Vấn đề đầu tiên của người mới làm sáng tạo không phải chất lượng, mà là không ai biết video đó tồn tại. Thuật toán gợi ý xếp hạng dựa trên những tín hiệu mà người mới chưa có — thời lượng xem, người đăng ký, kho tác phẩm cũ — nên tác phẩm cần được khám phá nhất lại ít có cơ hội nhất.",
    p2: "outbid.works thay tất cả bằng một con số. Đặt {amount} là bạn có mặt trên bảng. Đặt cao hơn mọi người là bạn đứng nhất. Không quá khứ, không lượng người theo dõi, không khởi đầu lạnh. Ai nhìn vào cũng hiểu vì sao thứ hạng như vậy — điều mà thuật toán chưa bao giờ làm được.",
    p3: "Mỗi thẻ đều hiện số lượt nhấp, nên việc đặt giá không phải hộp đen. Bạn thấy chính xác đồng tiền đã đổi được gì, rồi tự quyết định lần sau có đáng hay không.",
    howPaying: "Thanh toán diễn ra thế nào",
    howPayingBody:
      "Dodo Payments thu tiền với tư cách bên bán ghi nhận — thông tin thẻ không bao giờ đi qua trang này. Mục xuất hiện khi khoản thanh toán được xác nhận, ở đúng thứ hạng mà số tiền đạt được.",
    readRules: "Đọc luật chơi",
  },
  rules: {
    title: "Luật chơi",
    description:
      "outbid.works là một bảng xếp hạng công khai. Không quảng cáo, không khóa API, không chia doanh thu. Bạn trả tiền để đứng trên người khác. Thứ hạng chính là số tiền bạn trả — không gì khác.",
    boards: "Các bảng",
    boardsIntro:
      "Một lần thanh toán xếp bạn vào mọi bảng có tính khoản chi đó. Các bảng chỉ khác nhau ở khoảng thời gian được xét.",
    allTime:
      "là bảng chính. Thứ hạng bằng toàn bộ số tiền bạn từng trả cho mục đó, và không hết hạn.",
    today:
      "tính 24 giờ trượt. Mỗi khoản trả được tính từ thời điểm thanh toán, rồi rơi ra sau một ngày. Ai chi nhiều nhất trong khoảng đó đứng nhất.",
    daily:
      "là một ngày theo lịch UTC — từ nửa đêm đến nửa đêm. Ngày hiện tại còn sống cho tới khi đóng; những ngày đã qua đóng băng thành lưu trữ. Thứ hạng tính theo số tiền chi trong ngày đó, không phải 24 giờ gần nhất.",
    live: "Đang chạy",
    notBuilt: "Chưa làm",
    ranking: "Thứ hạng được tính ra sao",
    ranking1:
      "Mục mới tính bằng đô la Mỹ chẵn, tối thiểu {min}, tối đa {max}, mỗi lần một đô la. Mục đã có trên bảng giữ nguyên số tiền cho tới khi được nâng lên hoặc bị vượt qua.",
    ranking2:
      "Giành hạng 1 tốn ít nhất {step} nhiều hơn người đang đứng nhất. Trả ít hơn vẫn đưa bạn vào đúng vị trí mà số tiền đó với tới. Số tiền bằng nhau thì giữ theo thứ tự đặt — mục cũ hơn đứng trên.",
    ranking3:
      "Đã có trong danh sách? Gửi lại cùng liên kết để leo hạng. Số tiền mới phải cao hơn số hiện tại ít nhất {raise}. Không ai giành được thứ hạng của bạn bằng cách trả đúng phần chênh đó.",
    ranking4:
      "Tham số theo dõi bị bỏ qua, và liên kết nền tảng được phân biệt bằng đường dẫn đầy đủ — nên hai video cùng một trang không bao giờ chung một thứ hạng.",
    listing: "Được đăng những gì",
    listing1:
      "Một video. YouTube, Vimeo, TikTok, Twitch, Dailymotion, Streamable hoặc tệp video trực tiếp. Liên kết không dẫn tới video sẽ bị từ chối ngay khi gửi.",
    listing2:
      "Không nhận liên kết trò chuyện và mời nhóm — Telegram, WhatsApp, Discord, Messenger, Signal và tương tự. Bảng này dành cho tác phẩm đã công bố, không dành cho nhóm chat.",
    listing3:
      "Không nhận liên kết tới nội dung tình dục. Nội dung khiêu dâm, NSFW hay nền tảng người lớn không có chỗ ở đây.",
    listing4:
      "Tham số truy vấn bị gỡ khỏi liên kết. Các đường dẫn tiếp thị liên kết, giới thiệu và theo dõi sẽ không hoạt động.",
    listing5:
      "Không nhận liên kết rút gọn. Hãy gửi địa chỉ đích thật sự.",
    categoriesTitle: "Danh mục",
    categoriesBody:
      "Bạn tự chọn danh mục khi gửi. Nếu một mục nằm sai danh mục, hãy gửi lại cùng liên kết với danh mục đúng — mục cũ sẽ được cập nhật chứ không tạo thêm mục thứ hai.",
    afterPay: "Sau khi thanh toán",
    afterPay1:
      "Mục của bạn là công khai. Lượt nhấp dẫn tới đúng địa chỉ bạn đã gửi, không kèm tham số, và số lượt hiện trên thẻ của bạn.",
    afterPay2:
      "Chính khoản thanh toán hoàn tất mới giữ được thứ hạng. Các khoản thanh toán không hoàn lại.",
    gaps: "Chưa làm",
    gapRefunds:
      "Thanh toán đi qua Dodo Payments, nhưng chưa có cách tự phục vụ để xem các khoản đã trả hay yêu cầu gỡ một mục — hãy gửi email cho chúng tôi.",
    gapBoards:
      "Xếp hạng theo ngày trượt hay ngày lịch đòi hỏi cộng từng khoản thanh toán trong một khoảng, trong khi lược đồ chỉ lưu một dòng cho mỗi mục và không có lịch sử thanh toán. Những bảng đó cần một bảng dữ liệu thứ hai.",
    gapEnforcement:
      "Các quy định phía trên về trò chuyện, nội dung người lớn và liên kết rút gọn là chính sách, không phải mã. Chỉ việc kiểm tra địa chỉ video là tự động.",
    gapLegal:
      "đã soạn thảo, nhưng cả hai vẫn còn chỗ trống cần điền và chưa được luật sư rà soát.",
    whyExists: "Vì sao có trang này",
  },
  notFound: {
    code: "404",
    title: "Không có gì được xếp hạng ở đây",
    description:
      "Trang này không tồn tại, hoặc mục mà nó trỏ tới đã bị gỡ.",
    back: "Về bảng xếp hạng",
    leaderboard: "Xem bảng xếp hạng",
  },
  complete: {
    title: "Đã nhận thanh toán",
    description:
      "Mục của bạn sẽ lên bảng ngay khi khoản thanh toán được xác nhận.",
    p1: "Xác nhận thường đến trong vài giây. Mở bảng xếp hạng, video của bạn sẽ ở đúng thứ hạng mà mức đặt giành được.",
    p2: "Nếu sau một phút vẫn chưa thấy, đừng trả tiền lần nữa — hãy gửi email và chúng tôi sẽ đưa lên thủ công.",
    leaderboard: "Xem bảng xếp hạng",
    back: "Về bảng xếp hạng",
  },
  legal: {
    englishOnly: "Trang này chỉ có bản tiếng Anh",
    englishOnlyBody:
      "Điều khoản dịch vụ và Chính sách quyền riêng tư là văn bản pháp lý. Bản dịch máy có thể làm sai lệch ý nghĩa, nên chỉ bản tiếng Anh có hiệu lực và cũng chỉ bản đó được hiển thị.",
  },
};
