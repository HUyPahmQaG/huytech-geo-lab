export const checkedDate = "2026-09-22";
export const updatedDate = "2026-09-22";

export const site = {
  name: "HuyTech GEO Lab",
  shortName: "HuyTech",
  description:
    "Dự án học tập tư vấn chọn tai nghe chống ồn cho học tập, làm việc và di chuyển, với nguồn kiểm tra được và giới hạn trình bày rõ ràng.",
  locale: "vi_VN",
  author: "Nhóm dự án HuyTech GEO Lab",
};

export const navigation = [
  { href: "/san-pham/sony-wh-1000xm6", label: "Sony WH-1000XM6" },
  { href: "/so-sanh", label: "So sánh" },
  { href: "/huong-dan/chon-tai-nghe-chong-on", label: "Hướng dẫn" },
  { href: "/cua-hang", label: "Local SEO" },
  { href: "/gioi-thieu", label: "Giới thiệu" },
];

export type Source = {
  id: string;
  name: string;
  url: string;
  supports: string;
  checked: string;
  kind: "Nhà sản xuất" | "Tài liệu chính thức" | "Chuẩn mở";
};

export const sources: Source[] = [
  {
    id: "sony-xm6-specs",
    name: "Sony WH-1000XM6 Help Guide — Specifications",
    url: "https://helpguide.sony.net/mdr/2984/v1/en/contents/TP1001863304.html",
    supports: "Khối lượng, thời gian sạc, Bluetooth 5.3, codec và dải tần.",
    checked: checkedDate,
    kind: "Nhà sản xuất",
  },
  {
    id: "sony-xm6-battery",
    name: "Sony WH-1000XM6 Help Guide — Available operating time",
    url: "https://helpguide.sony.net/mdr/2984/v1/en/contents/TP1001856818.html",
    supports: "Thời lượng pin theo codec và trạng thái ANC; điều kiện sạc nhanh.",
    checked: checkedDate,
    kind: "Nhà sản xuất",
  },
  {
    id: "sony-xm6-multipoint",
    name: "Sony WH-1000XM6 Help Guide — Multipoint connection",
    url: "https://helpguide.sony.net/mdr/2984/v1/en/contents/TP1001863603.html",
    supports: "Kết nối đồng thời hai thiết bị và cách chuyển nguồn phát.",
    checked: checkedDate,
    kind: "Nhà sản xuất",
  },
  {
    id: "sony-xm6-anc",
    name: "Sony WH-1000XM6 Help Guide — What is noise canceling?",
    url: "https://helpguide.sony.net/mdr/2984/v1/en/contents/TP1001856910.html",
    supports: "Cơ chế ANC, hiệu quả chủ yếu với tiếng tần số thấp và giới hạn không triệt tiêu hoàn toàn.",
    checked: checkedDate,
    kind: "Nhà sản xuất",
  },
  {
    id: "sony-xm6-product",
    name: "Sony Electronics — WH-1000XM6",
    url: "https://electronics.sony.com/audio/headphones/headband/p/wh1000xm6-b",
    supports: "12 microphone, bộ xử lý QN3 và mô tả tính năng từ nhà sản xuất.",
    checked: checkedDate,
    kind: "Nhà sản xuất",
  },
  {
    id: "sony-xm5-specs",
    name: "Sony WH-1000XM5 — Specifications",
    url: "https://www.sony.com/electronics/support/wireless-headphones-bluetooth-headphones/wh-1000xm5/specifications",
    supports: "Khối lượng, pin, Bluetooth 5.2, codec và cổng âm thanh của mẫu đối chiếu.",
    checked: checkedDate,
    kind: "Nhà sản xuất",
  },
  {
    id: "google-ai-features",
    name: "Google Search Central — AI features and your website",
    url: "https://developers.google.com/search/docs/appearance/ai-features",
    supports: "AI Search dùng nền tảng SEO hiện có; không có schema hay tệp AI đặc biệt bắt buộc.",
    checked: checkedDate,
    kind: "Tài liệu chính thức",
  },
  {
    id: "google-structured-data",
    name: "Google Search Central — Introduction to structured data",
    url: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data",
    supports: "Dữ liệu có cấu trúc phải mô tả nội dung hiển thị; JSON-LD được khuyến nghị.",
    checked: checkedDate,
    kind: "Tài liệu chính thức",
  },
  {
    id: "google-local",
    name: "Google Business Profile — Tips to improve local ranking",
    url: "https://support.google.com/business/answer/7091?hl=en",
    supports: "Local ranking chủ yếu dựa trên mức liên quan, khoảng cách và độ nổi bật.",
    checked: checkedDate,
    kind: "Tài liệu chính thức",
  },
  {
    id: "openai-crawlers",
    name: "OpenAI — Overview of crawlers",
    url: "https://developers.openai.com/api/docs/bots",
    supports: "Phân biệt OAI-SearchBot cho Search và GPTBot cho khả năng dùng dữ liệu huấn luyện.",
    checked: checkedDate,
    kind: "Tài liệu chính thức",
  },
  {
    id: "schema-org",
    name: "Schema.org vocabulary",
    url: "https://schema.org/",
    supports: "Định nghĩa kiểu và thuộc tính của dữ liệu có cấu trúc.",
    checked: checkedDate,
    kind: "Chuẩn mở",
  },
];

export const product = {
  slug: "sony-wh-1000xm6",
  name: "Sony WH-1000XM6",
  brand: "Sony",
  model: "WH-1000XM6",
  category: "Tai nghe chụp tai không dây chống ồn",
  directAnswer:
    "Sony WH-1000XM6 phù hợp với người cần tai nghe chụp tai chống ồn để tập trung, di chuyển và chuyển đổi giữa hai thiết bị. Pin được Sony công bố tối đa 30 giờ khi bật chống ồn với AAC/SBC/LC3; tuy nhiên, mức thoải mái, chất âm và chất lượng micro nên được thử trực tiếp trước khi mua.",
  specs: [
    { label: "Khối lượng", value: "Khoảng 254 g", sourceId: "sony-xm6-specs" },
    { label: "Bluetooth", value: "Phiên bản 5.3", sourceId: "sony-xm6-specs" },
    { label: "Codec", value: "SBC, AAC, LDAC; LC3 với LE Audio", sourceId: "sony-xm6-specs" },
    { label: "Pin khi bật ANC", value: "Tối đa 30 giờ với AAC/SBC/LC3; 26 giờ với LDAC", sourceId: "sony-xm6-battery" },
    { label: "Thời gian sạc", value: "Khoảng 3,5 giờ", sourceId: "sony-xm6-specs" },
    { label: "Sạc nhanh", value: "Khoảng 1 giờ nghe sau 3 phút sạc; tối đa 3 giờ khi dùng bộ sạc USB PD phù hợp", sourceId: "sony-xm6-battery" },
    { label: "Đa điểm", value: "Kết nối đồng thời 2 thiết bị", sourceId: "sony-xm6-multipoint" },
    { label: "Kết nối có dây", value: "Có cổng cáp tai nghe", sourceId: "sony-xm6-specs" },
    { label: "Kháng nước", value: "Không kháng nước", sourceId: "sony-xm6-specs" },
    { label: "Bảo hành tại Việt Nam", value: "Chưa xác minh — kiểm tra theo nơi bán và thị trường", sourceId: "sony-xm6-product" },
  ],
  goodFor: [
    "Học hoặc làm việc ở nơi có tiếng ồn nền đều như điều hòa, phương tiện giao thông.",
    "Người thường chuyển giữa laptop và điện thoại nhờ kết nối hai thiết bị.",
    "Chuyến đi dài cần thời lượng pin công bố tới 30 giờ khi bật ANC ở cấu hình phù hợp.",
  ],
  notFor: [
    "Người cần tai nghe dùng khi tập nặng, dưới mưa hoặc môi trường ẩm vì thiết bị không kháng nước.",
    "Người chỉ có ngân sách thấp; trang này chưa xác minh giá bán phù hợp tại Việt Nam.",
    "Người muốn ANC loại bỏ hoàn toàn tiếng nói — Sony xác nhận tiếng ồn chỉ được giảm, không bị triệt tiêu hoàn toàn.",
  ],
  pros: [
    "Thông số pin dài và có sạc nhanh theo điều kiện Sony công bố.",
    "Hỗ trợ multipoint, codec LDAC và cả LC3 qua LE Audio.",
    "Có thể dùng cáp âm thanh khi cần.",
  ],
  cons: [
    "Không kháng nước.",
    "Hiệu quả ANC thay đổi theo cách đeo và loại tiếng ồn.",
    "Giá, bảo hành tại Việt Nam và độ thoải mái cá nhân cần kiểm tra trước khi mua.",
  ],
  faqs: [
    {
      question: "Sony WH-1000XM6 có phù hợp để họp online không?",
      answer: "Có hỗ trợ gọi rảnh tay, microphone tích hợp và kết nối hai thiết bị. Tuy vậy, chúng tôi chưa thử trực tiếp chất lượng giọng nói trong phòng ồn; nên thử với đúng laptop, ứng dụng họp và môi trường của bạn trước khi mua.",
    },
    {
      question: "ANC có loại bỏ hoàn toàn tiếng nói chuyện không?",
      answer: "Không. Sony cho biết chống ồn chủ động hoạt động chủ yếu với tiếng ồn tần số thấp như xe cộ hoặc điều hòa; tiếng ồn được giảm chứ không biến mất hoàn toàn.",
    },
    {
      question: "Pin 30 giờ có áp dụng cho mọi cài đặt không?",
      answer: "Không. Mốc 30 giờ áp dụng cho AAC, SBC hoặc LC3 khi bật ANC/Ambient theo phép đo của Sony. LDAC khi bật ANC được công bố tối đa 26 giờ; EQ, DSEE Extreme và các tính năng khác có thể làm thời gian ngắn hơn.",
    },
    {
      question: "Có thể vừa sạc vừa dùng không?",
      answer: "Sony cho biết có thể sử dụng khi sạc từ phần mềm phiên bản 2.0.0 trở lên, nhưng sạc sẽ dừng khoảng 80%. Hãy đọc hướng dẫn an toàn và giữ cổng USB-C khô, sạch.",
    },
    {
      question: "Mua Sony WH-1000XM6 ở HuyTech được không?",
      answer: "Không. HuyTech GEO Lab là dự án học tập, không phải cửa hàng hay đại lý Sony. Hãy xem giá, tồn kho và điều kiện bảo hành tại nguồn bán đã xác minh.",
    },
  ],
};

export const comparisonRows = [
  { criterion: "Khối lượng", xm6: "Khoảng 254 g", xm5: "Khoảng 250 g", note: "Thông số nhà sản xuất" },
  { criterion: "Bluetooth", xm6: "5.3", xm5: "5.2", note: "Phiên bản giao thức" },
  { criterion: "Codec", xm6: "SBC, AAC, LDAC, LC3", xm5: "SBC, AAC, LDAC", note: "LC3 của XM6 dùng với LE Audio" },
  { criterion: "Pin bật ANC", xm6: "Tối đa 30 giờ (AAC/SBC/LC3)", xm5: "Tối đa 30 giờ (AAC); 28 giờ (SBC)", note: "LDAC: cả hai tối đa 26 giờ" },
  { criterion: "Sạc đầy", xm6: "Khoảng 3,5 giờ", xm5: "Khoảng 3,5 giờ", note: "Có thể thay đổi theo điều kiện" },
  { criterion: "Multipoint", xm6: "Có, 2 thiết bị", xm5: "Có, 2 thiết bị", note: "Cần bật trong ứng dụng Sony" },
  { criterion: "Kháng nước", xm6: "Không", xm5: "Chưa xác minh trong bộ nguồn dùng cho bảng", note: "Không suy đoán ô thiếu" },
  { criterion: "Giá và bảo hành Việt Nam", xm6: "Xem giá tại nguồn", xm5: "Xem giá tại nguồn", note: "Chưa xác minh theo nhà bán cụ thể" },
];

export const localBusiness = {
  name: "HuyTech GEO Lab",
  address: null,
  telephone: null,
  openingHours: null,
  latitude: null,
  longitude: null,
  mapUrl: null,
  areaIllustration: "Thanh Xuân, Hà Nội",
  verified: false,
} as const;
