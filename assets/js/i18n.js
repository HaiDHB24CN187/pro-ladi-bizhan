/* ============================================
   BizHan i18n — Internationalization System
   Supports: Vietnamese (vi) & English (en)
   ============================================ */

const i18n = {
    currentLang: 'vi',

    translations: {
        // ==========================================
        // VIETNAMESE
        // ==========================================
        vi: {
            // --- Navbar ---
            'nav.home': 'Trang chủ',
            'nav.about': 'Về chúng tôi',
            'nav.features': 'Tính năng',
            'nav.mission': 'Sứ mệnh',
            'nav.faq': 'FAQ',
            'nav.cta': '🧧 Nhận Lì Xì 8386',

            // --- Hero ---
            'hero.badge': 'LadiPage V1.0 — Exclusive Waitlist',
            'hero.title1': 'Học Tiếng Trung',
            'hero.title2': 'Thông Minh Với AI',
            'hero.subtitle': 'BizHan — Nền tảng học tiếng Trung ứng dụng <strong>AI OCR</strong> dịch ảnh tức thì &amp; <strong>AI Grammar</strong> phân tích ngữ pháp chuyên sâu. Chinh phục HSK nhanh gấp 3 lần.',
            'hero.cta1': '🧧 Nhận Lì Xì 8386 — Giảm 60% Trọn Đời',
            'hero.cta2': 'Khám phá tính năng →',
            'hero.scroll': 'Cuộn xuống',

            // --- About ---
            'about.tag': 'Về BizHan',
            'about.title': 'Tin Vào Sức Mạnh Của <span class="text-gradient">Ngôn Ngữ</span>',
            'about.lead': 'Mỗi chúng ta đều có thế giới riêng — nơi tiếng Trung không chỉ là một ngôn ngữ, mà là cánh cửa kết nối với hơn <strong>1.4 tỷ người</strong> và nền văn hóa hàng ngàn năm.',
            'about.p1': 'Với đội ngũ sáng lập BizHan, niềm đam mê này bắt đầu từ những ngày đầu tiên học những nét chữ Hán đầu tiên — từ 一 (yī) đến 龍 (lóng). Chúng tôi hiểu rằng học tiếng Trung không chỉ là ghi nhớ từ vựng, mà là <em>khám phá cả một vũ trụ văn hóa</em> ẩn sau mỗi ký tự.',
            'about.p2': 'Từ tình yêu đó, cùng khát vọng xây dựng một không gian học tập <strong>thông minh, chất lượng cao và thân thiện</strong>, BizHan ra đời. Đây là kết quả của hành trình nghiên cứu, cải tiến và lắng nghe cộng đồng — với mong muốn tạo ra một nền tảng dành riêng cho người yêu tiếng Trung.',
            'about.card_footer': '学中文 — Học tiếng Trung',

            // --- Features ---
            'features.tag': 'Tính Năng Cốt Lõi',
            'features.title': 'Tại Sao Chọn <span class="text-gradient">BizHan?</span>',
            'features.desc': 'Giữa hàng trăm ứng dụng học tiếng Trung, người học vẫn gặp nhiều bất tiện: bài học nhàm chán, không có AI hỗ trợ, và thiếu tính tương tác. BizHan ra đời để thay đổi điều đó.',

            'features.ocr.title': '🔍 AI OCR — Dịch Ảnh Tức Thì',
            'features.ocr.desc': 'Chụp ảnh bất kỳ văn bản tiếng Trung nào — biển hiệu, sách, menu, tin nhắn — AI OCR của BizHan sẽ <strong>nhận diện ký tự, dịch nghĩa, phiên âm Pinyin và phân tích ngữ pháp</strong> trong tích tắc. Không cần gõ từng chữ, chỉ cần chụp!',
            'features.ocr.f1': '✅ Nhận diện chữ Hán từ ảnh chụp với độ chính xác 99%',
            'features.ocr.f2': '✅ Dịch nghĩa + Pinyin tức thì',
            'features.ocr.f3': '✅ Phân tích cấu trúc câu tự động',
            'features.ocr.f4': '✅ Lưu từ vựng vào sổ tay thông minh',
            'features.ocr.demo': 'Xin chào thế giới',

            'features.grammar.title': '📝 AI Grammar — Phân Tích Ngữ Pháp',
            'features.grammar.desc': 'Nhập bất kỳ câu tiếng Trung nào, AI Grammar sẽ <strong>phân tích cấu trúc ngữ pháp, giải thích từng thành phần câu, và gợi ý cách dùng đúng</strong>. Như có một gia sư tiếng Trung riêng 24/7!',
            'features.grammar.f1': '✅ Phân tích chủ ngữ - vị ngữ - tân ngữ tự động',
            'features.grammar.f2': '✅ Giải thích ngữ pháp HSK 1-6',
            'features.grammar.f3': '✅ So sánh cấu trúc tương tự',
            'features.grammar.f4': '✅ Bài tập ngữ pháp cá nhân hóa bằng AI',
            'features.grammar.subject': 'Chủ ngữ',
            'features.grammar.adverb': 'Trạng từ',
            'features.grammar.verb': 'Động từ',
            'features.grammar.object': 'Tân ngữ',
            'features.grammar.translation': '🇻🇳 Tôi đang học tiếng Trung',

            'features.vocab.title': 'Từ Vựng Thông Minh',
            'features.vocab.desc': 'Hệ thống Spaced Repetition cá nhân hóa, giúp ghi nhớ 5000+ từ vựng HSK hiệu quả gấp 3 lần.',
            'features.hsk.title': 'Luyện HSK',
            'features.hsk.desc': 'Đề thi mô phỏng HSK 1-6 với AI chấm điểm tức thì và phân tích điểm yếu cần cải thiện.',
            'features.pronun.title': 'Luyện Phát Âm',
            'features.pronun.desc': 'AI nhận diện giọng nói và chấm điểm Pinyin, thanh điệu với độ chính xác đến từng âm tiết.',
            'features.writing.title': 'Tập Viết Chữ Hán',
            'features.writing.desc': 'Hướng dẫn nét bút từng bước với animation, nhận diện chữ viết tay và chấm điểm tự động.',

            // --- Waitlist ---
            'waitlist.badge': 'Exclusive Waitlist — Chỉ 8386 Suất',
            'waitlist.title': 'Nhận Lì Xì <span class="text-lucky">8386</span><br>Giảm <span class="text-discount">60%</span> Trọn Đời',
            'waitlist.desc': 'Đăng ký Waitlist ngay hôm nay để nhận mã <strong>"Lucky Lixi 8386"</strong> — giảm <strong>60% phí trọn đời</strong> khi BizHan chính thức ra mắt. Con số 8386 (发三发六) mang ý nghĩa phát tài, thịnh vượng!',
            'waitlist.urgency': '🧧 Đã có <span class="urgency-count" id="urgencyCount">6,248</span> / 8,386 người đăng ký',
            'waitlist.b1': '🧧 Mã giảm 60% Lifetime',
            'waitlist.b2': '🎯 Truy cập sớm AI OCR & Grammar',
            'waitlist.b3': '📚 Tài liệu HSK miễn phí',
            'waitlist.b4': '👥 Vào nhóm VIP Community',

            // --- Form ---
            'form.title': '🧧 Đăng Ký Nhận Lì Xì 8386',
            'form.name_label': 'Họ và tên',
            'form.name_placeholder': 'Nguyễn Văn A',
            'form.phone_label': 'Số điện thoại',
            'form.phone_placeholder': '0901 234 567',
            'form.level_label': 'Trình độ tiếng Trung',
            'form.level_default': '-- Chọn trình độ --',
            'form.level_beginner': 'Mới bắt đầu',
            'form.submit': '🧧 Nhận Lì Xì 8386 Ngay!',
            'form.note': '🔒 Thông tin của bạn được bảo mật tuyệt đối. Không spam.',
            'form.success_title': 'Chúc Mừng!',
            'form.success_desc': 'Bạn đã đăng ký thành công Waitlist BizHan!',
            'form.success_code': 'Mã Lì Xì của bạn:',
            'form.success_note': 'Kiểm tra email để nhận thông tin chi tiết 🧧',

            // --- Mission ---
            'mission.tag': 'Sứ Mệnh',
            'mission.title': 'Sứ Mệnh Của <span class="text-gradient">BizHan</span>',
            'mission.desc': 'BizHan ra đời với sứ mệnh kết nối cộng đồng yêu tiếng Trung với kho tàng ngôn ngữ phong phú và đầy cảm hứng. Trong thời đại công nghệ, chúng tôi tin rằng học tiếng Trung không chỉ là kỹ năng, mà còn là cách nuôi dưỡng tư duy và sáng tạo.',
            'mission.card1.title': 'Trải Nghiệm Học Hoàn Hảo',
            'mission.card1.desc': 'Cung cấp nền tảng học tập mượt mà, tốc độ cao, tương thích mọi thiết bị — để người học có thể chinh phục tiếng Trung mọi lúc, mọi nơi.',
            'mission.card2.title': 'Lan Tỏa Giá Trị Ngôn Ngữ',
            'mission.card2.desc': 'Mỗi ký tự Hán là một câu chuyện, mỗi thành ngữ là một bài học cuộc sống. BizHan mang những giá trị đó đến gần hơn với người học.',
            'mission.card3.title': 'Xây Dựng Cộng Đồng',
            'mission.card3.desc': 'BizHan không chỉ là một ứng dụng, mà là cộng đồng kết nối — nơi người học có thể trao đổi, thảo luận và cùng nhau tiến bộ.',
            'mission.quote': '"千里之行，始于足下" — Hành trình vạn dặm bắt đầu từ một bước chân.<br><small>— Lão Tử (老子)</small>',

            // --- FAQ ---
            'faq.title': 'Câu Hỏi <span class="text-gradient">Thường Gặp</span>',
            'faq.q1': '❓ BizHan là gì?',
            'faq.a1': 'BizHan là nền tảng học tiếng Trung thông minh sử dụng AI, với hai tính năng cốt lõi: <strong>AI OCR</strong> (dịch ảnh tức thì) và <strong>AI Grammar</strong> (phân tích ngữ pháp). Nền tảng hỗ trợ người học từ HSK 1 đến HSK 6.',
            'faq.q2': '❓ "Lucky Lixi 8386" là gì?',
            'faq.a2': 'Lucky Lixi 8386 là chương trình ưu đãi dành cho <strong>8,386 người đăng ký Waitlist đầu tiên</strong>. Con số 8386 (发三发六) mang ý nghĩa may mắn, phát tài. Bạn sẽ nhận được mã giảm giá <strong>60% trọn đời</strong> khi BizHan chính thức ra mắt!',
            'faq.q3': '❓ AI OCR hoạt động như thế nào?',
            'faq.a3': 'Bạn chỉ cần <strong>chụp ảnh</strong> bất kỳ văn bản tiếng Trung nào — biển hiệu, sách, menu, tin nhắn. AI OCR sẽ nhận diện ký tự với độ chính xác 99%, dịch nghĩa sang tiếng Việt, thêm phiên âm Pinyin, và phân tích cấu trúc ngữ pháp tự động.',
            'faq.q4': '❓ BizHan có miễn phí không?',
            'faq.a4': 'BizHan sẽ có gói <strong>Free</strong> với các tính năng cơ bản và gói <strong>Premium</strong> với đầy đủ tính năng AI. Đăng ký Waitlist ngay để nhận <strong>60% giảm giá trọn đời</strong> cho gói Premium!',
            'faq.q5': '❓ Khi nào BizHan ra mắt chính thức?',
            'faq.a5': 'BizHan dự kiến ra mắt phiên bản Beta vào <strong>Q3 2026</strong>. Người đăng ký Waitlist sẽ được <strong>truy cập sớm (Early Access)</strong> trước khi ra mắt công khai.',
            'faq.q6': '❓ Tôi có thể học offline không?',
            'faq.a6': 'Có! BizHan sẽ hỗ trợ <strong>tải bài học offline</strong> để bạn có thể học mọi lúc, mọi nơi. Tính năng AI OCR và AI Grammar yêu cầu kết nối internet để hoạt động.',

            // --- CTA ---
            'cta.title': 'Sẵn Sàng Chinh Phục Tiếng Trung?',
            'cta.desc': 'Đừng bỏ lỡ cơ hội nhận Lì Xì 8386 — Giảm 60% Trọn Đời. Chỉ còn giới hạn suất!',
            'cta.btn': '🧧 Đăng Ký Waitlist Ngay',

            // --- Footer ---
            'footer.desc': 'BizHan là nền tảng học tiếng Trung thông minh với AI, giúp người Việt chinh phục tiếng Trung nhanh hơn, hiệu quả hơn. Với AI OCR và AI Grammar, việc học trở nên dễ dàng và thú vị hơn bao giờ hết.',
            'footer.col1_title': 'Về BizHan',
            'footer.col1_link1': 'Giới thiệu',
            'footer.col1_link2': 'Tính năng',
            'footer.col1_link3': 'Sứ mệnh',
            'footer.col2_title': 'Theo Dõi',
            'footer.col3_title': 'Hỗ Trợ',
            'footer.col3_link1': 'Điều khoản sử dụng',
            'footer.col3_link2': 'Chính sách bảo mật',
            'footer.col3_link3': 'Liên hệ',

            // --- Meta ---
            '_meta.title': 'BizHan — Nền Tảng Học Tiếng Trung Thông Minh Với AI',
            '_meta.description': 'BizHan - Học tiếng Trung thông minh với AI OCR, AI Grammar. Tham gia Waitlist nhận Lì Xì 8386 - Giảm 60% Trọn Đời!',

            // ==========================================
            // TERMS PAGE — Vietnamese
            // ==========================================
            'terms.hero_title': 'Điều Khoản <span class="text-gradient">Sử Dụng</span>',
            'terms.hero_subtitle': 'Cập nhật lần cuối: 11 tháng 2, 2026',
            'terms.s1_title': '1. Giới Thiệu',
            'terms.s1_p1': 'Chào mừng bạn đến với <strong>BizHan</strong> (bizhan.ai). Bằng việc truy cập và sử dụng nền tảng BizHan, bạn đồng ý tuân thủ các điều khoản và điều kiện được nêu dưới đây. Vui lòng đọc kỹ trước khi sử dụng dịch vụ của chúng tôi.',
            'terms.s1_p2': 'Nền tảng BizHan được vận hành và quản lý bởi đội ngũ BizHan. Trong tài liệu này, "chúng tôi", "của chúng tôi" đề cập đến BizHan, và "bạn", "người dùng" đề cập đến cá nhân sử dụng dịch vụ.',
            'terms.s2_title': '2. Chấp Nhận Điều Khoản',
            'terms.s2_p1': 'Khi bạn tạo tài khoản, đăng ký Waitlist, hoặc sử dụng bất kỳ dịch vụ nào của BizHan, bạn xác nhận rằng:',
            'terms.s2_li1': 'Bạn đã đọc, hiểu và đồng ý với toàn bộ Điều khoản sử dụng này.',
            'terms.s2_li2': 'Bạn đủ 16 tuổi trở lên, hoặc có sự đồng ý của phụ huynh/người giám hộ.',
            'terms.s2_li3': 'Bạn cung cấp thông tin chính xác và đầy đủ khi đăng ký.',
            'terms.s2_li4': 'Bạn chịu trách nhiệm bảo mật tài khoản và mật khẩu của mình.',
            'terms.s3_title': '3. Dịch Vụ Của BizHan',
            'terms.s3_p1': 'BizHan cung cấp nền tảng học tiếng Trung thông minh với các tính năng bao gồm nhưng không giới hạn:',
            'terms.s3_li1': '<strong>AI OCR:</strong> Nhận diện và dịch văn bản tiếng Trung từ hình ảnh.',
            'terms.s3_li2': '<strong>AI Grammar:</strong> Phân tích cấu trúc ngữ pháp tiếng Trung.',
            'terms.s3_li3': '<strong>Từ vựng thông minh:</strong> Hệ thống ôn tập cá nhân hóa.',
            'terms.s3_li4': '<strong>Luyện HSK:</strong> Đề thi mô phỏng HSK 1-6.',
            'terms.s3_li5': '<strong>Luyện phát âm & viết chữ Hán.</strong>',
            'terms.s3_p2': 'Chúng tôi có quyền thay đổi, cập nhật hoặc ngừng cung cấp bất kỳ tính năng nào mà không cần thông báo trước.',
            'terms.s4_title': '4. Tài Khoản Người Dùng',
            'terms.s4_p1': 'Để sử dụng đầy đủ tính năng, bạn cần tạo tài khoản BizHan. Khi đó:',
            'terms.s4_li1': 'Bạn cam kết cung cấp thông tin đăng ký chính xác và cập nhật.',
            'terms.s4_li2': 'Mỗi người chỉ được tạo một tài khoản duy nhất.',
            'terms.s4_li3': 'Bạn không được chia sẻ, chuyển nhượng tài khoản cho người khác.',
            'terms.s4_li4': 'Bạn chịu trách nhiệm cho tất cả hoạt động diễn ra trên tài khoản của mình.',
            'terms.s5_title': '5. Gói Dịch Vụ & Thanh Toán',
            'terms.s5_p1': 'BizHan cung cấp hai gói dịch vụ:',
            'terms.s5_li1': '<strong>Gói Free:</strong> Truy cập các tính năng cơ bản miễn phí.',
            'terms.s5_li2': '<strong>Gói Premium:</strong> Truy cập đầy đủ tính năng AI với phí đăng ký.',
            'terms.s5_p2': 'Đối với gói Premium:',
            'terms.s5_li3': 'Phí được thanh toán theo chu kỳ (tháng/năm) tùy lựa chọn.',
            'terms.s5_li4': 'Mã giảm giá "Lucky Lixi 8386" áp dụng 60% giảm giá trọn đời cho thành viên Waitlist.',
            'terms.s5_li5': 'Bạn có thể hủy đăng ký bất kỳ lúc nào. Phí đã thanh toán không được hoàn lại.',
            'terms.s5_li6': 'Chúng tôi có quyền thay đổi mức phí với thông báo trước 30 ngày.',
            'terms.s6_title': '6. Quy Tắc Sử Dụng',
            'terms.s6_p1': 'Khi sử dụng BizHan, bạn <strong>không được</strong>:',
            'terms.s6_li1': 'Sử dụng dịch vụ cho mục đích bất hợp pháp hoặc trái đạo đức.',
            'terms.s6_li2': 'Sao chép, phân phối, hoặc tái sản xuất nội dung của BizHan mà không có sự cho phép.',
            'terms.s6_li3': 'Cố gắng truy cập trái phép vào hệ thống, dữ liệu hoặc tài khoản người dùng khác.',
            'terms.s6_li4': 'Sử dụng bot, crawler, hoặc công cụ tự động để thu thập dữ liệu.',
            'terms.s6_li5': 'Đăng tải nội dung xúc phạm, bạo lực, hoặc vi phạm pháp luật.',
            'terms.s6_li6': 'Can thiệp hoặc gây gián đoạn hoạt động của nền tảng.',
            'terms.s7_title': '7. Sở Hữu Trí Tuệ',
            'terms.s7_p1': 'Tất cả nội dung trên BizHan — bao gồm nhưng không giới hạn: giao diện, thiết kế, logo, bài học, thuật toán AI, văn bản, hình ảnh và mã nguồn — đều thuộc quyền sở hữu của BizHan và được bảo vệ bởi luật sở hữu trí tuệ.',
            'terms.s7_p2': 'Bạn được cấp quyền sử dụng cá nhân, không độc quyền, không chuyển nhượng để truy cập và sử dụng dịch vụ phù hợp với điều khoản này.',
            'terms.s8_title': '8. Giới Hạn Trách Nhiệm',
            'terms.s8_p1': 'BizHan nỗ lực cung cấp dịch vụ chất lượng cao, tuy nhiên:',
            'terms.s8_li1': 'Dịch vụ được cung cấp "như hiện có" (as-is) mà không có bất kỳ bảo đảm nào.',
            'terms.s8_li2': 'Chúng tôi không chịu trách nhiệm cho việc gián đoạn dịch vụ, lỗi kỹ thuật hoặc mất dữ liệu.',
            'terms.s8_li3': 'Kết quả từ AI OCR và AI Grammar mang tính tham khảo, không thay thế giáo viên chuyên nghiệp.',
            'terms.s8_li4': 'Trách nhiệm tối đa của BizHan không vượt quá số tiền bạn đã thanh toán trong 12 tháng gần nhất.',
            'terms.s9_title': '9. Chấm Dứt Dịch Vụ',
            'terms.s9_p1': 'Chúng tôi có quyền tạm ngưng hoặc chấm dứt tài khoản của bạn nếu:',
            'terms.s9_li1': 'Bạn vi phạm bất kỳ điều khoản nào trong tài liệu này.',
            'terms.s9_li2': 'Hoạt động bất thường được phát hiện trên tài khoản.',
            'terms.s9_li3': 'Theo yêu cầu của cơ quan pháp luật có thẩm quyền.',
            'terms.s9_p2': 'Bạn có thể yêu cầu xóa tài khoản bất kỳ lúc nào bằng cách liên hệ với chúng tôi qua email <a href="mailto:hello@bizhan.ai">hello@bizhan.ai</a>.',
            'terms.s10_title': '10. Thay Đổi Điều Khoản',
            'terms.s10_p1': 'BizHan có quyền cập nhật điều khoản này bất kỳ lúc nào. Phiên bản mới nhất sẽ luôn được công bố tại <a href="https://bizhan.ai/terms.html">bizhan.ai/terms.html</a>. Việc tiếp tục sử dụng dịch vụ sau khi thay đổi đồng nghĩa với việc bạn chấp nhận các điều khoản mới.',
            'terms.s11_title': '11. Luật Áp Dụng',
            'terms.s11_p1': 'Các điều khoản này được điều chỉnh bởi pháp luật Việt Nam. Mọi tranh chấp phát sinh sẽ được giải quyết tại cơ quan có thẩm quyền tại Việt Nam.',
            'terms.s12_title': '12. Liên Hệ',
            'terms.s12_p1': 'Nếu bạn có bất kỳ câu hỏi nào về Điều khoản sử dụng, vui lòng liên hệ:',

            // ==========================================
            // PRIVACY PAGE — Vietnamese
            // ==========================================
            'privacy.hero_title': 'Chính Sách <span class="text-gradient">Bảo Mật</span>',
            'privacy.hero_subtitle': 'Cập nhật lần cuối: 11 tháng 2, 2026',
            'privacy.s1_title': '1. Giới Thiệu',
            'privacy.s1_p1': '<strong>BizHan</strong> (bizhan.ai) cam kết bảo vệ quyền riêng tư và thông tin cá nhân của bạn. Chính sách bảo mật này giải thích cách chúng tôi thu thập, sử dụng, lưu trữ và bảo vệ dữ liệu của bạn khi sử dụng nền tảng BizHan.',
            'privacy.s1_p2': 'Bằng việc sử dụng dịch vụ của chúng tôi, bạn đồng ý với các phương thức xử lý dữ liệu được mô tả trong chính sách này.',
            'privacy.s2_title': '2. Thông Tin Chúng Tôi Thu Thập',
            'privacy.s2_h3a': '2.1. Thông tin bạn cung cấp trực tiếp',
            'privacy.s2_li1': '<strong>Thông tin đăng ký:</strong> Họ tên, số điện thoại, email khi đăng ký Waitlist hoặc tạo tài khoản.',
            'privacy.s2_li2': '<strong>Thông tin hồ sơ:</strong> Trình độ tiếng Trung, mục tiêu học tập.',
            'privacy.s2_li3': '<strong>Nội dung người dùng:</strong> Hình ảnh tải lên cho AI OCR, câu văn nhập vào AI Grammar.',
            'privacy.s2_li4': '<strong>Thông tin liên hệ:</strong> Nội dung tin nhắn khi bạn liên hệ hỗ trợ.',
            'privacy.s2_h3b': '2.2. Thông tin thu thập tự động',
            'privacy.s2_li5': '<strong>Dữ liệu sử dụng:</strong> Trang truy cập, thời gian sử dụng, tính năng sử dụng.',
            'privacy.s2_li6': '<strong>Dữ liệu thiết bị:</strong> Loại thiết bị, hệ điều hành, trình duyệt, địa chỉ IP.',
            'privacy.s2_li7': '<strong>Cookie & công nghệ tương tự:</strong> Để cải thiện trải nghiệm và phân tích hành vi sử dụng.',
            'privacy.s3_title': '3. Mục Đích Sử Dụng Thông Tin',
            'privacy.s3_p1': 'Chúng tôi sử dụng thông tin của bạn cho các mục đích sau:',
            'privacy.s3_li1': '🎯 Cung cấp và vận hành dịch vụ BizHan.',
            'privacy.s3_li2': '🎯 Cá nhân hóa trải nghiệm học tập với AI.',
            'privacy.s3_li3': '🎯 Gửi thông báo về chương trình Waitlist, mã giảm giá Lucky Lixi 8386.',
            'privacy.s3_li4': '🎯 Phân tích và cải thiện chất lượng dịch vụ.',
            'privacy.s3_li5': '🎯 Hỗ trợ khách hàng và giải quyết vấn đề kỹ thuật.',
            'privacy.s3_li6': '🎯 Tuân thủ các yêu cầu pháp lý.',
            'privacy.s4_title': '4. Chia Sẻ Thông Tin',
            'privacy.s4_p1': 'Chúng tôi <strong>không bán</strong> thông tin cá nhân của bạn cho bên thứ ba. Chúng tôi chỉ chia sẻ trong các trường hợp sau:',
            'privacy.s4_li1': '<strong>Đối tác cung cấp dịch vụ:</strong> Các bên cung cấp dịch vụ hosting, phân tích, thanh toán — chỉ được phép sử dụng dữ liệu để thực hiện dịch vụ cho BizHan.',
            'privacy.s4_li2': '<strong>Yêu cầu pháp lý:</strong> Khi được yêu cầu bởi cơ quan pháp luật có thẩm quyền.',
            'privacy.s4_li3': '<strong>Bảo vệ quyền lợi:</strong> Khi cần thiết để bảo vệ quyền, tài sản hoặc an toàn của BizHan và người dùng.',
            'privacy.s5_title': '5. Bảo Mật Dữ Liệu',
            'privacy.s5_p1': 'Chúng tôi áp dụng các biện pháp bảo mật tiêu chuẩn ngành để bảo vệ thông tin của bạn:',
            'privacy.s5_li1': '🔒 Mã hóa SSL/TLS cho tất cả dữ liệu truyền tải.',
            'privacy.s5_li2': '🔒 Mã hóa dữ liệu nhạy cảm khi lưu trữ.',
            'privacy.s5_li3': '🔒 Kiểm soát truy cập nghiêm ngặt cho nhân viên.',
            'privacy.s5_li4': '🔒 Sao lưu dữ liệu định kỳ và giám sát bảo mật 24/7.',
            'privacy.s5_li5': '🔒 Đánh giá bảo mật định kỳ bởi bên thứ ba.',
            'privacy.s5_p2': 'Tuy nhiên, không có phương thức truyền tải qua internet nào là an toàn tuyệt đối. Chúng tôi không thể đảm bảo bảo mật 100%.',
            'privacy.s6_title': '6. Cookie & Công Nghệ Theo Dõi',
            'privacy.s6_p1': 'BizHan sử dụng cookie và công nghệ tương tự để:',
            'privacy.s6_li1': 'Ghi nhớ phiên đăng nhập và tùy chọn ngôn ngữ của bạn.',
            'privacy.s6_li2': 'Phân tích lưu lượng truy cập và hành vi người dùng.',
            'privacy.s6_li3': 'Tối ưu hóa hiệu suất và trải nghiệm người dùng.',
            'privacy.s6_p2': 'Bạn có thể quản lý hoặc từ chối cookie thông qua cài đặt trình duyệt. Tuy nhiên, một số tính năng có thể không hoạt động đúng nếu cookie bị tắt.',
            'privacy.s7_title': '7. Quyền Của Bạn',
            'privacy.s7_p1': 'Bạn có quyền:',
            'privacy.s7_li1': '<strong>Truy cập:</strong> Yêu cầu xem thông tin cá nhân mà chúng tôi lưu trữ về bạn.',
            'privacy.s7_li2': '<strong>Chỉnh sửa:</strong> Cập nhật hoặc sửa đổi thông tin không chính xác.',
            'privacy.s7_li3': '<strong>Xóa:</strong> Yêu cầu xóa thông tin cá nhân (trừ trường hợp pháp luật yêu cầu lưu trữ).',
            'privacy.s7_li4': '<strong>Xuất dữ liệu:</strong> Yêu cầu bản sao dữ liệu của bạn ở định dạng phổ biến.',
            'privacy.s7_li5': '<strong>Từ chối:</strong> Hủy đăng ký nhận email marketing bất kỳ lúc nào.',
            'privacy.s7_p2': 'Để thực hiện quyền của mình, vui lòng liên hệ: <a href="mailto:hello@bizhan.ai">hello@bizhan.ai</a>',
            'privacy.s8_title': '8. Lưu Trữ Dữ Liệu',
            'privacy.s8_p1': 'Chúng tôi lưu trữ dữ liệu của bạn trong thời gian cần thiết để cung cấp dịch vụ hoặc theo yêu cầu pháp luật. Cụ thể:',
            'privacy.s8_li1': 'Dữ liệu tài khoản: Trong suốt thời gian tài khoản hoạt động và 30 ngày sau khi xóa.',
            'privacy.s8_li2': 'Dữ liệu học tập: Trong suốt thời gian sử dụng dịch vụ.',
            'privacy.s8_li3': 'Dữ liệu thanh toán: 5 năm theo quy định kế toán.',
            'privacy.s8_li4': 'Hình ảnh AI OCR: Xử lý tức thì và không lưu trữ vĩnh viễn.',
            'privacy.s9_title': '9. Bảo Mật Trẻ Em',
            'privacy.s9_p1': 'BizHan không cố ý thu thập thông tin từ trẻ em dưới 16 tuổi mà không có sự đồng ý của phụ huynh. Nếu bạn phát hiện con em mình đã cung cấp thông tin cho chúng tôi, vui lòng liên hệ ngay để chúng tôi xóa dữ liệu.',
            'privacy.s10_title': '10. Thay Đổi Chính Sách',
            'privacy.s10_p1': 'Chúng tôi có thể cập nhật Chính sách bảo mật này theo thời gian. Phiên bản mới nhất luôn có tại <a href="https://bizhan.ai/privacy.html">bizhan.ai/privacy.html</a>. Chúng tôi sẽ thông báo cho bạn về các thay đổi quan trọng qua email hoặc thông báo trên nền tảng.',
            'privacy.s11_title': '11. Liên Hệ',
            'privacy.s11_p1': 'Nếu bạn có bất kỳ câu hỏi nào về Chính sách bảo mật, vui lòng liên hệ:',

            // ==========================================
            // CONTACT PAGE — Vietnamese
            // ==========================================
            'contact.hero_title': 'Liên Hệ <span class="text-gradient">Với Chúng Tôi</span>',
            'contact.hero_subtitle': 'Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn',
            'contact.info_title': 'Thông Tin Liên Hệ',
            'contact.info_desc': 'Bạn có câu hỏi, góp ý hoặc cần hỗ trợ? Đừng ngần ngại liên hệ với chúng tôi qua các kênh dưới đây. Đội ngũ BizHan sẽ phản hồi trong vòng 24 giờ.',
            'contact.social_title': 'Mạng Xã Hội',
            'contact.hours_title': 'Thời Gian Hỗ Trợ',
            'contact.hours_desc': 'Thứ 2 – Thứ 7: 9:00 – 18:00 (GMT+7)',
            'contact.form_title': 'Gửi Tin Nhắn',
            'contact.form_desc': 'Điền thông tin bên dưới, chúng tôi sẽ phản hồi sớm nhất có thể.',
            'contact.form_name_label': 'Họ và tên <span class="required">*</span>',
            'contact.form_name_placeholder': 'Nguyễn Văn A',
            'contact.form_subject_label': 'Chủ đề',
            'contact.form_subject_default': '-- Chọn chủ đề --',
            'contact.form_subject_general': 'Câu hỏi chung',
            'contact.form_subject_waitlist': 'Về Waitlist & Lucky Lixi 8386',
            'contact.form_subject_technical': 'Hỗ trợ kỹ thuật',
            'contact.form_subject_partnership': 'Hợp tác & Đối tác',
            'contact.form_subject_feedback': 'Góp ý & Phản hồi',
            'contact.form_subject_other': 'Khác',
            'contact.form_message_label': 'Nội dung tin nhắn <span class="required">*</span>',
            'contact.form_message_placeholder': 'Nhập nội dung tin nhắn của bạn...',
            'contact.form_submit': '✉️ Gửi Tin Nhắn',
            'contact.form_note': '🔒 Thông tin của bạn được bảo mật tuyệt đối.',
            'contact.success_title': 'Gửi Thành Công!',
            'contact.success_desc': 'Cảm ơn bạn đã liên hệ. Đội ngũ BizHan sẽ phản hồi trong vòng 24 giờ qua email.',
            'contact.success_btn': 'Gửi tin nhắn khác',
        },

        // ==========================================
        // ENGLISH
        // ==========================================
        en: {
            // --- Navbar ---
            'nav.home': 'Home',
            'nav.about': 'About',
            'nav.features': 'Features',
            'nav.mission': 'Mission',
            'nav.faq': 'FAQ',
            'nav.cta': '🧧 Get Lucky Lixi 8386',

            // --- Hero ---
            'hero.badge': 'LadiPage V1.0 — Exclusive Waitlist',
            'hero.title1': 'Learn Chinese',
            'hero.title2': 'Smarter With AI',
            'hero.subtitle': 'BizHan — The AI-powered Chinese learning platform with <strong>AI OCR</strong> instant image translation &amp; <strong>AI Grammar</strong> deep analysis. Master HSK 3× faster.',
            'hero.cta1': '🧧 Get Lucky Lixi 8386 — 60% Lifetime Off',
            'hero.cta2': 'Explore features →',
            'hero.scroll': 'Scroll down',

            // --- About ---
            'about.tag': 'About BizHan',
            'about.title': 'Believe In The Power Of <span class="text-gradient">Language</span>',
            'about.lead': 'Each of us has our own world — where Chinese is not just a language, but a gateway connecting us to over <strong>1.4 billion people</strong> and a culture spanning thousands of years.',
            'about.p1': 'For the BizHan founding team, this passion began from the very first days of learning the first Chinese strokes — from 一 (yī) to 龍 (lóng). We understand that learning Chinese is not just about memorizing vocabulary, but <em>discovering an entire cultural universe</em> hidden behind each character.',
            'about.p2': 'From that love, combined with the aspiration to build a <strong>smart, high-quality, and friendly</strong> learning space, BizHan was born. It is the result of a journey of research, refinement, and community listening — with the desire to create a platform dedicated to Chinese language enthusiasts.',
            'about.card_footer': '学中文 — Learn Chinese',

            // --- Features ---
            'features.tag': 'Core Features',
            'features.title': 'Why Choose <span class="text-gradient">BizHan?</span>',
            'features.desc': 'Among hundreds of Chinese learning apps, learners still face many inconveniences: boring lessons, no AI support, and lack of interactivity. BizHan was created to change that.',

            'features.ocr.title': '🔍 AI OCR — Instant Image Translation',
            'features.ocr.desc': 'Snap a photo of any Chinese text — signs, books, menus, messages — BizHan\'s AI OCR will <strong>recognize characters, translate, add Pinyin, and analyze grammar</strong> in seconds. No typing needed, just snap!',
            'features.ocr.f1': '✅ Recognize Chinese characters from photos with 99% accuracy',
            'features.ocr.f2': '✅ Instant translation + Pinyin',
            'features.ocr.f3': '✅ Automatic sentence structure analysis',
            'features.ocr.f4': '✅ Save vocabulary to smart notebook',
            'features.ocr.demo': 'Hello World',

            'features.grammar.title': '📝 AI Grammar — Grammar Analysis',
            'features.grammar.desc': 'Enter any Chinese sentence, AI Grammar will <strong>analyze grammar structure, explain each component, and suggest correct usage</strong>. Like having a personal Chinese tutor 24/7!',
            'features.grammar.f1': '✅ Auto subject-predicate-object analysis',
            'features.grammar.f2': '✅ HSK 1-6 grammar explanations',
            'features.grammar.f3': '✅ Compare similar structures',
            'features.grammar.f4': '✅ AI-personalized grammar exercises',
            'features.grammar.subject': 'Subject',
            'features.grammar.adverb': 'Adverb',
            'features.grammar.verb': 'Verb',
            'features.grammar.object': 'Object',
            'features.grammar.translation': '🇬🇧 I am studying Chinese',

            'features.vocab.title': 'Smart Vocabulary',
            'features.vocab.desc': 'Personalized Spaced Repetition system, helping memorize 5000+ HSK words 3× more effectively.',
            'features.hsk.title': 'HSK Practice',
            'features.hsk.desc': 'Simulated HSK 1-6 exams with instant AI scoring and weakness analysis for improvement.',
            'features.pronun.title': 'Pronunciation Training',
            'features.pronun.desc': 'AI voice recognition scoring Pinyin and tones with syllable-level precision.',
            'features.writing.title': 'Hanzi Writing Practice',
            'features.writing.desc': 'Step-by-step stroke guidance with animation, handwriting recognition and auto-scoring.',

            // --- Waitlist ---
            'waitlist.badge': 'Exclusive Waitlist — Only 8386 Slots',
            'waitlist.title': 'Get Lucky Lixi <span class="text-lucky">8386</span><br><span class="text-discount">60%</span> Lifetime Discount',
            'waitlist.desc': 'Join the Waitlist today to receive the <strong>"Lucky Lixi 8386"</strong> code — <strong>60% lifetime discount</strong> when BizHan officially launches. The number 8386 (发三发六) symbolizes prosperity and fortune!',
            'waitlist.urgency': '🧧 Already <span class="urgency-count" id="urgencyCount">6,248</span> / 8,386 signed up',
            'waitlist.b1': '🧧 60% Lifetime Discount Code',
            'waitlist.b2': '🎯 Early Access to AI OCR & Grammar',
            'waitlist.b3': '📚 Free HSK Study Materials',
            'waitlist.b4': '👥 Join VIP Community Group',

            // --- Form ---
            'form.title': '🧧 Sign Up for Lucky Lixi 8386',
            'form.name_label': 'Full Name',
            'form.name_placeholder': 'John Doe',
            'form.phone_label': 'Phone Number',
            'form.phone_placeholder': '+1 (555) 000-0000',
            'form.level_label': 'Chinese Proficiency Level',
            'form.level_default': '-- Select level --',
            'form.level_beginner': 'Beginner',
            'form.submit': '🧧 Get Lucky Lixi 8386 Now!',
            'form.note': '🔒 Your information is absolutely secure. No spam.',
            'form.success_title': 'Congratulations!',
            'form.success_desc': 'You have successfully joined the BizHan Waitlist!',
            'form.success_code': 'Your Lucky Lixi Code:',
            'form.success_note': 'Check your email for details 🧧',

            // --- Mission ---
            'mission.tag': 'Mission',
            'mission.title': 'The Mission Of <span class="text-gradient">BizHan</span>',
            'mission.desc': 'BizHan was born with the mission of connecting the Chinese-loving community with a rich and inspiring language treasure. In the age of technology, we believe that learning Chinese is not just a skill, but also a way to nurture thinking and creativity.',
            'mission.card1.title': 'Perfect Learning Experience',
            'mission.card1.desc': 'Providing a smooth, fast, cross-device learning platform — so learners can conquer Chinese anytime, anywhere.',
            'mission.card2.title': 'Spreading Language Values',
            'mission.card2.desc': 'Every Chinese character tells a story, every idiom is a life lesson. BizHan brings these values closer to learners.',
            'mission.card3.title': 'Building Community',
            'mission.card3.desc': 'BizHan is not just an app, but a connected community — where learners can exchange, discuss, and grow together.',
            'mission.quote': '"千里之行，始于足下" — A journey of a thousand miles begins with a single step.<br><small>— Lao Tzu (老子)</small>',

            // --- FAQ ---
            'faq.title': 'Frequently Asked <span class="text-gradient">Questions</span>',
            'faq.q1': '❓ What is BizHan?',
            'faq.a1': 'BizHan is an AI-powered smart Chinese learning platform with two core features: <strong>AI OCR</strong> (instant image translation) and <strong>AI Grammar</strong> (grammar analysis). The platform supports learners from HSK 1 to HSK 6.',
            'faq.q2': '❓ What is "Lucky Lixi 8386"?',
            'faq.a2': 'Lucky Lixi 8386 is a special offer for the <strong>first 8,386 Waitlist registrants</strong>. The number 8386 (发三发六) symbolizes luck and prosperity. You will receive a <strong>60% lifetime discount</strong> code when BizHan officially launches!',
            'faq.q3': '❓ How does AI OCR work?',
            'faq.a3': 'Simply <strong>take a photo</strong> of any Chinese text — signs, books, menus, messages. AI OCR will recognize characters with 99% accuracy, translate to your language, add Pinyin pronunciation, and auto-analyze grammar structure.',
            'faq.q4': '❓ Is BizHan free?',
            'faq.a4': 'BizHan will have a <strong>Free</strong> plan with basic features and a <strong>Premium</strong> plan with full AI features. Sign up for the Waitlist now to get a <strong>60% lifetime discount</strong> on Premium!',
            'faq.q5': '❓ When will BizHan officially launch?',
            'faq.a5': 'BizHan is expected to launch its Beta version in <strong>Q3 2026</strong>. Waitlist members will get <strong>Early Access</strong> before the public launch.',
            'faq.q6': '❓ Can I study offline?',
            'faq.a6': 'Yes! BizHan will support <strong>offline lesson downloads</strong> so you can study anytime, anywhere. AI OCR and AI Grammar features require an internet connection to work.',

            // --- CTA ---
            'cta.title': 'Ready to Master Chinese?',
            'cta.desc': 'Don\'t miss the chance to get Lucky Lixi 8386 — 60% Lifetime Discount. Limited slots remaining!',
            'cta.btn': '🧧 Join Waitlist Now',

            // --- Footer ---
            'footer.desc': 'BizHan is an AI-powered smart Chinese learning platform, helping learners master Chinese faster and more effectively. With AI OCR and AI Grammar, learning becomes easier and more enjoyable than ever.',
            'footer.col1_title': 'About BizHan',
            'footer.col1_link1': 'Introduction',
            'footer.col1_link2': 'Features',
            'footer.col1_link3': 'Mission',
            'footer.col2_title': 'Follow Us',
            'footer.col3_title': 'Support',
            'footer.col3_link1': 'Terms of Service',
            'footer.col3_link2': 'Privacy Policy',
            'footer.col3_link3': 'Contact',

            // --- Meta ---
            '_meta.title': 'BizHan — AI-Powered Smart Chinese Learning Platform',
            '_meta.description': 'BizHan - Learn Chinese smarter with AI OCR, AI Grammar. Join the Waitlist and get Lucky Lixi 8386 - 60% Lifetime Discount!',

            // ==========================================
            // TERMS PAGE — English
            // ==========================================
            'terms.hero_title': 'Terms of <span class="text-gradient">Service</span>',
            'terms.hero_subtitle': 'Last updated: February 11, 2026',
            'terms.s1_title': '1. Introduction',
            'terms.s1_p1': 'Welcome to <strong>BizHan</strong> (bizhan.ai). By accessing and using the BizHan platform, you agree to comply with the terms and conditions set forth below. Please read carefully before using our services.',
            'terms.s1_p2': 'The BizHan platform is operated and managed by the BizHan team. In this document, "we", "our" refers to BizHan, and "you", "user" refers to individuals using the service.',
            'terms.s2_title': '2. Acceptance of Terms',
            'terms.s2_p1': 'By creating an account, signing up for the Waitlist, or using any BizHan service, you confirm that:',
            'terms.s2_li1': 'You have read, understood, and agree to these Terms of Service in full.',
            'terms.s2_li2': 'You are at least 16 years old, or have parental/guardian consent.',
            'terms.s2_li3': 'You provide accurate and complete information when registering.',
            'terms.s2_li4': 'You are responsible for maintaining the security of your account and password.',
            'terms.s3_title': '3. BizHan Services',
            'terms.s3_p1': 'BizHan provides a smart Chinese learning platform with features including but not limited to:',
            'terms.s3_li1': '<strong>AI OCR:</strong> Recognize and translate Chinese text from images.',
            'terms.s3_li2': '<strong>AI Grammar:</strong> Analyze Chinese grammar structures.',
            'terms.s3_li3': '<strong>Smart Vocabulary:</strong> Personalized review system.',
            'terms.s3_li4': '<strong>HSK Practice:</strong> Simulated HSK 1-6 exams.',
            'terms.s3_li5': '<strong>Pronunciation training & Hanzi writing practice.</strong>',
            'terms.s3_p2': 'We reserve the right to change, update, or discontinue any feature without prior notice.',
            'terms.s4_title': '4. User Accounts',
            'terms.s4_p1': 'To use full features, you need to create a BizHan account. In doing so:',
            'terms.s4_li1': 'You commit to providing accurate and up-to-date registration information.',
            'terms.s4_li2': 'Each person may only create one account.',
            'terms.s4_li3': 'You may not share or transfer your account to others.',
            'terms.s4_li4': 'You are responsible for all activities that occur on your account.',
            'terms.s5_title': '5. Service Plans & Payment',
            'terms.s5_p1': 'BizHan offers two service plans:',
            'terms.s5_li1': '<strong>Free Plan:</strong> Access to basic features at no cost.',
            'terms.s5_li2': '<strong>Premium Plan:</strong> Full access to AI features with a subscription fee.',
            'terms.s5_p2': 'For the Premium plan:',
            'terms.s5_li3': 'Fees are charged on a recurring basis (monthly/yearly) as selected.',
            'terms.s5_li4': 'The "Lucky Lixi 8386" discount code applies a 60% lifetime discount for Waitlist members.',
            'terms.s5_li5': 'You may cancel your subscription at any time. Fees already paid are non-refundable.',
            'terms.s5_li6': 'We reserve the right to change pricing with 30 days\' prior notice.',
            'terms.s6_title': '6. Usage Rules',
            'terms.s6_p1': 'When using BizHan, you <strong>must not</strong>:',
            'terms.s6_li1': 'Use the service for illegal or unethical purposes.',
            'terms.s6_li2': 'Copy, distribute, or reproduce BizHan content without permission.',
            'terms.s6_li3': 'Attempt unauthorized access to systems, data, or other user accounts.',
            'terms.s6_li4': 'Use bots, crawlers, or automated tools to collect data.',
            'terms.s6_li5': 'Post offensive, violent, or illegal content.',
            'terms.s6_li6': 'Interfere with or disrupt the platform\'s operations.',
            'terms.s7_title': '7. Intellectual Property',
            'terms.s7_p1': 'All content on BizHan — including but not limited to: interface, design, logo, lessons, AI algorithms, text, images, and source code — are owned by BizHan and protected by intellectual property laws.',
            'terms.s7_p2': 'You are granted a personal, non-exclusive, non-transferable right to access and use the service in accordance with these terms.',
            'terms.s8_title': '8. Limitation of Liability',
            'terms.s8_p1': 'BizHan strives to provide high-quality services, however:',
            'terms.s8_li1': 'Services are provided "as-is" without any warranties.',
            'terms.s8_li2': 'We are not liable for service interruptions, technical errors, or data loss.',
            'terms.s8_li3': 'Results from AI OCR and AI Grammar are for reference only, not a substitute for professional teachers.',
            'terms.s8_li4': 'BizHan\'s maximum liability shall not exceed the amount you paid in the most recent 12 months.',
            'terms.s9_title': '9. Service Termination',
            'terms.s9_p1': 'We reserve the right to suspend or terminate your account if:',
            'terms.s9_li1': 'You violate any term in this document.',
            'terms.s9_li2': 'Unusual activity is detected on your account.',
            'terms.s9_li3': 'As required by competent legal authorities.',
            'terms.s9_p2': 'You may request account deletion at any time by contacting us at <a href="mailto:hello@bizhan.ai">hello@bizhan.ai</a>.',
            'terms.s10_title': '10. Changes to Terms',
            'terms.s10_p1': 'BizHan reserves the right to update these terms at any time. The latest version will always be available at <a href="https://bizhan.ai/terms.html">bizhan.ai/terms.html</a>. Continued use of the service after changes means you accept the new terms.',
            'terms.s11_title': '11. Governing Law',
            'terms.s11_p1': 'These terms are governed by the laws of Vietnam. Any disputes will be resolved at competent authorities in Vietnam.',
            'terms.s12_title': '12. Contact',
            'terms.s12_p1': 'If you have any questions about these Terms of Service, please contact us:',

            // ==========================================
            // PRIVACY PAGE — English
            // ==========================================
            'privacy.hero_title': 'Privacy <span class="text-gradient">Policy</span>',
            'privacy.hero_subtitle': 'Last updated: February 11, 2026',
            'privacy.s1_title': '1. Introduction',
            'privacy.s1_p1': '<strong>BizHan</strong> (bizhan.ai) is committed to protecting your privacy and personal information. This privacy policy explains how we collect, use, store, and protect your data when using the BizHan platform.',
            'privacy.s1_p2': 'By using our services, you agree to the data processing methods described in this policy.',
            'privacy.s2_title': '2. Information We Collect',
            'privacy.s2_h3a': '2.1. Information you provide directly',
            'privacy.s2_li1': '<strong>Registration info:</strong> Name, phone number, email when signing up for the Waitlist or creating an account.',
            'privacy.s2_li2': '<strong>Profile info:</strong> Chinese proficiency level, learning goals.',
            'privacy.s2_li3': '<strong>User content:</strong> Images uploaded for AI OCR, sentences entered into AI Grammar.',
            'privacy.s2_li4': '<strong>Contact info:</strong> Messages when you contact support.',
            'privacy.s2_h3b': '2.2. Information collected automatically',
            'privacy.s2_li5': '<strong>Usage data:</strong> Pages visited, time spent, features used.',
            'privacy.s2_li6': '<strong>Device data:</strong> Device type, OS, browser, IP address.',
            'privacy.s2_li7': '<strong>Cookies & similar technologies:</strong> To improve experience and analyze usage behavior.',
            'privacy.s3_title': '3. Purpose of Information Use',
            'privacy.s3_p1': 'We use your information for the following purposes:',
            'privacy.s3_li1': '🎯 Providing and operating BizHan services.',
            'privacy.s3_li2': '🎯 Personalizing learning experiences with AI.',
            'privacy.s3_li3': '🎯 Sending notifications about Waitlist programs, Lucky Lixi 8386 discount codes.',
            'privacy.s3_li4': '🎯 Analyzing and improving service quality.',
            'privacy.s3_li5': '🎯 Customer support and resolving technical issues.',
            'privacy.s3_li6': '🎯 Complying with legal requirements.',
            'privacy.s4_title': '4. Information Sharing',
            'privacy.s4_p1': 'We <strong>do not sell</strong> your personal information to third parties. We only share in the following cases:',
            'privacy.s4_li1': '<strong>Service providers:</strong> Hosting, analytics, payment partners — only permitted to use data to perform services for BizHan.',
            'privacy.s4_li2': '<strong>Legal requirements:</strong> When required by competent legal authorities.',
            'privacy.s4_li3': '<strong>Rights protection:</strong> When necessary to protect the rights, property, or safety of BizHan and users.',
            'privacy.s5_title': '5. Data Security',
            'privacy.s5_p1': 'We apply industry-standard security measures to protect your information:',
            'privacy.s5_li1': '🔒 SSL/TLS encryption for all data in transit.',
            'privacy.s5_li2': '🔒 Encryption of sensitive data at rest.',
            'privacy.s5_li3': '🔒 Strict access controls for employees.',
            'privacy.s5_li4': '🔒 Regular data backups and 24/7 security monitoring.',
            'privacy.s5_li5': '🔒 Periodic security audits by third parties.',
            'privacy.s5_p2': 'However, no method of transmission over the internet is absolutely secure. We cannot guarantee 100% security.',
            'privacy.s6_title': '6. Cookies & Tracking Technologies',
            'privacy.s6_p1': 'BizHan uses cookies and similar technologies to:',
            'privacy.s6_li1': 'Remember your login session and language preferences.',
            'privacy.s6_li2': 'Analyze traffic and user behavior.',
            'privacy.s6_li3': 'Optimize performance and user experience.',
            'privacy.s6_p2': 'You can manage or reject cookies through your browser settings. However, some features may not function properly if cookies are disabled.',
            'privacy.s7_title': '7. Your Rights',
            'privacy.s7_p1': 'You have the right to:',
            'privacy.s7_li1': '<strong>Access:</strong> Request to view personal information we store about you.',
            'privacy.s7_li2': '<strong>Correction:</strong> Update or correct inaccurate information.',
            'privacy.s7_li3': '<strong>Deletion:</strong> Request deletion of personal information (except where required by law).',
            'privacy.s7_li4': '<strong>Data export:</strong> Request a copy of your data in a common format.',
            'privacy.s7_li5': '<strong>Opt-out:</strong> Unsubscribe from marketing emails at any time.',
            'privacy.s7_p2': 'To exercise your rights, please contact: <a href="mailto:hello@bizhan.ai">hello@bizhan.ai</a>',
            'privacy.s8_title': '8. Data Retention',
            'privacy.s8_p1': 'We retain your data for as long as necessary to provide services or as required by law. Specifically:',
            'privacy.s8_li1': 'Account data: Throughout the account\'s active period and 30 days after deletion.',
            'privacy.s8_li2': 'Learning data: Throughout the period of service use.',
            'privacy.s8_li3': 'Payment data: 5 years per accounting regulations.',
            'privacy.s8_li4': 'AI OCR images: Processed instantly and not stored permanently.',
            'privacy.s9_title': '9. Children\'s Privacy',
            'privacy.s9_p1': 'BizHan does not intentionally collect information from children under 16 without parental consent. If you discover your child has provided information to us, please contact us immediately so we can delete the data.',
            'privacy.s10_title': '10. Policy Changes',
            'privacy.s10_p1': 'We may update this Privacy Policy from time to time. The latest version is always available at <a href="https://bizhan.ai/privacy.html">bizhan.ai/privacy.html</a>. We will notify you of significant changes via email or platform notification.',
            'privacy.s11_title': '11. Contact',
            'privacy.s11_p1': 'If you have any questions about this Privacy Policy, please contact us:',

            // ==========================================
            // CONTACT PAGE — English
            // ==========================================
            'contact.hero_title': 'Contact <span class="text-gradient">Us</span>',
            'contact.hero_subtitle': 'We are always ready to listen and support you',
            'contact.info_title': 'Contact Information',
            'contact.info_desc': 'Have questions, suggestions, or need support? Don\'t hesitate to reach out through the channels below. The BizHan team will respond within 24 hours.',
            'contact.social_title': 'Social Media',
            'contact.hours_title': 'Support Hours',
            'contact.hours_desc': 'Mon – Sat: 9:00 AM – 6:00 PM (GMT+7)',
            'contact.form_title': 'Send a Message',
            'contact.form_desc': 'Fill in the information below, we will respond as soon as possible.',
            'contact.form_name_label': 'Full Name <span class="required">*</span>',
            'contact.form_name_placeholder': 'John Doe',
            'contact.form_subject_label': 'Subject',
            'contact.form_subject_default': '-- Select subject --',
            'contact.form_subject_general': 'General Question',
            'contact.form_subject_waitlist': 'About Waitlist & Lucky Lixi 8386',
            'contact.form_subject_technical': 'Technical Support',
            'contact.form_subject_partnership': 'Partnership & Collaboration',
            'contact.form_subject_feedback': 'Feedback & Suggestions',
            'contact.form_subject_other': 'Other',
            'contact.form_message_label': 'Message <span class="required">*</span>',
            'contact.form_message_placeholder': 'Enter your message...',
            'contact.form_submit': '✉️ Send Message',
            'contact.form_note': '🔒 Your information is kept absolutely secure.',
            'contact.success_title': 'Sent Successfully!',
            'contact.success_desc': 'Thank you for contacting us. The BizHan team will respond within 24 hours via email.',
            'contact.success_btn': 'Send another message',
        }
    },

    /**
     * Initialize the i18n system
     */
    init() {
        // Load saved language from localStorage
        const savedLang = localStorage.getItem('bizhan_lang');
        if (savedLang && this.translations[savedLang]) {
            this.currentLang = savedLang;
        }

        // Set up language switcher
        const switcher = document.getElementById('langSwitcher');
        if (switcher) {
            switcher.addEventListener('click', () => this.toggle());
        }

        // Apply current language
        this.apply();
    },

    /**
     * Toggle between vi and en
     */
    toggle() {
        this.currentLang = this.currentLang === 'vi' ? 'en' : 'vi';
        localStorage.setItem('bizhan_lang', this.currentLang);
        this.apply();
    },

    /**
     * Set a specific language
     */
    setLang(lang) {
        if (this.translations[lang]) {
            this.currentLang = lang;
            localStorage.setItem('bizhan_lang', lang);
            this.apply();
        }
    },

    /**
     * Get translation by key
     */
    t(key) {
        return this.translations[this.currentLang]?.[key] || this.translations['vi']?.[key] || key;
    },

    /**
     * Apply all translations to the DOM
     */
    apply() {
        const lang = this.currentLang;
        const dict = this.translations[lang];
        if (!dict) return;

        // Update <html lang>
        document.documentElement.lang = lang;

        // Update page title & meta
        if (dict['_meta.title']) {
            document.title = dict['_meta.title'];
        }
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && dict['_meta.description']) {
            metaDesc.setAttribute('content', dict['_meta.description']);
        }

        // Update all data-i18n elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) {
                el.innerHTML = dict[key];
            }
        });

        // Update all data-i18n-placeholder elements
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (dict[key] !== undefined) {
                el.placeholder = dict[key];
            }
        });

        // Update hanzi character meanings
        document.querySelectorAll('.hanzi-char').forEach(el => {
            const meaningKey = lang === 'vi' ? 'data-meaning-vi' : 'data-meaning-en';
            const meaning = el.getAttribute(meaningKey) || el.getAttribute('data-meaning');
            if (meaning) {
                el.setAttribute('data-meaning', meaning);
            }
        });

        // Update language switcher button
        const langFlag = document.getElementById('langFlag');
        const langLabel = document.getElementById('langLabel');
        if (langFlag && langLabel) {
            if (lang === 'vi') {
                langFlag.textContent = '🇻🇳';
                langLabel.textContent = 'VI';
            } else {
                langFlag.textContent = '🇬🇧';
                langLabel.textContent = 'EN';
            }
        }

        // Add smooth transition class
        document.body.classList.add('lang-switching');
        setTimeout(() => {
            document.body.classList.remove('lang-switching');
        }, 300);
    }
};

// Auto-init when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    i18n.init();
});
