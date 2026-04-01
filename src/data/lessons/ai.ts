import { Lesson } from '../../types';

export const aiLesson: Lesson = {
  id: 'gemini-ai-mastery',
  icon: 'cpu',
  title: 'Tư duy sử dụng AI',
  description:
    'Lộ trình 20 buổi học cách làm việc cùng AI trong lập trình, từ đặt câu hỏi đúng, debug hiệu quả, refactor code, viết test đến xây dựng quy trình học và làm việc thực tế với AI như một Pair Programmer.',
  points: [
    'Hiểu AI là công cụ hỗ trợ, không phải thay thế tư duy lập trình',
    'Biết viết prompt rõ ràng, có ngữ cảnh và mục tiêu cụ thể',
    'Biết dùng AI để debug, refactor, giải thích code và học nhanh hơn',
    'Biết kiểm chứng đầu ra của AI để tránh lệ thuộc hoặc dùng sai',
    'Có bài tập và tình huống thực tế để luyện làm việc với AI mỗi ngày'
  ],
  chapters: [
    {
      id: 'ai-01',
      title: 'Buổi 1: AI trong lập trình là gì? Dùng AI đúng vai trò',
      level: 'beginner',
      content: `
# Buổi 1: AI trong lập trình là gì? Dùng AI đúng vai trò

## Mục tiêu
- Hiểu AI hỗ trợ lập trình theo cách nào
- Biết AI nên được xem là trợ lý, không phải "cây đũa thần"
- Có tư duy dùng AI để tăng tốc nhưng vẫn giữ quyền kiểm soát

## Nội dung chính
- AI có thể hỗ trợ:
  - giải thích khái niệm
  - sinh code mẫu
  - debug
  - refactor
  - viết test
  - gợi ý kiến trúc
- AI không hiểu dự án của bạn tốt bằng chính bạn nếu thiếu ngữ cảnh
- AI có thể đúng nhanh, sai cũng nhanh

## Ví dụ
\`\`\`text
Dùng AI đúng:
"Hãy giải thích đoạn code này và chỉ ra 2 lỗi có thể có"

Dùng AI sai:
"Làm hết dự án này cho tôi"
\`\`\`

## Bài tập luyện tập
1. Liệt kê 5 việc AI có thể hỗ trợ trong lập trình
2. Liệt kê 3 việc không nên giao hoàn toàn cho AI
3. Giải thích vì sao AI là trợ lý chứ không phải người thay thế tư duy

## Bài tập thử thách
- Viết một đoạn ngắn mô tả cách bạn muốn dùng AI trong quá trình học code
      `
    },
    {
      id: 'ai-02',
      title: 'Buổi 2: Tư duy hỏi đúng - đầu vào quyết định đầu ra',
      level: 'beginner',
      content: `
# Buổi 2: Tư duy hỏi đúng - đầu vào quyết định đầu ra

## Mục tiêu
- Hiểu vì sao câu hỏi mơ hồ thường cho câu trả lời mơ hồ
- Biết cách mô tả vấn đề rõ ràng hơn
- Nâng chất lượng prompt ngay từ đầu

## Nội dung chính
- Câu hỏi tốt cần rõ:
  - bạn đang làm gì
  - đang dùng công nghệ gì
  - vấn đề cụ thể là gì
  - bạn muốn kết quả ra sao
- Nói càng rõ, AI càng dễ giúp đúng

## Ví dụ
\`\`\`text
Tệ:
"Sửa lỗi này"

Tốt:
"Tôi đang dùng React + TypeScript. Khi click nút submit thì state không cập nhật.
Đây là code và log lỗi. Hãy tìm nguyên nhân và đề xuất cách sửa."
\`\`\`

## Bài tập luyện tập
1. Viết lại 3 câu hỏi mơ hồ thành rõ hơn
2. Thêm công nghệ và mục tiêu vào một prompt ngắn
3. So sánh prompt tốt và prompt kém

## Bài tập thử thách
- Viết một prompt nhờ AI giải thích sự khác nhau giữa React state và props cho người mới
      `
    },
    {
      id: 'ai-03',
      title: 'Buổi 3: Công thức prompt hiệu quả cho lập trình',
      level: 'beginner',
      content: `
# Buổi 3: Công thức prompt hiệu quả cho lập trình

## Mục tiêu
- Có khung hỏi chuẩn để dùng lặp lại
- Biết cách đưa vai trò, ngữ cảnh, vấn đề, code và mục tiêu
- Biết biến prompt ngắn thành prompt mạnh hơn

## Nội dung chính
- Công thức gợi ý:
  1. Vai trò
  2. Ngữ cảnh
  3. Vấn đề
  4. Mã nguồn hoặc dữ liệu
  5. Mục tiêu mong muốn
- Có thể thêm:
  - ràng buộc
  - định dạng đầu ra
  - mức giải thích

## Ví dụ
\`\`\`text
Đóng vai một senior frontend developer.
Tôi đang dùng Next.js và Tailwind.
Tôi có lỗi layout bị nhảy khi ảnh tải xong.
Đây là component của tôi: [code].
Hãy chỉ ra nguyên nhân, cách sửa và giải thích đơn giản.
\`\`\`

## Bài tập luyện tập
1. Viết prompt theo đúng 5 phần
2. Thử thêm yêu cầu "giải thích đơn giản cho người mới"
3. Thử thêm yêu cầu "trả lời theo từng bước"

## Bài tập thử thách
- Tạo một template prompt chung bạn có thể tái sử dụng mỗi khi hỏi lỗi code
      `
    },
    {
      id: 'ai-04',
      title: 'Buổi 4: Hỏi AI để học khái niệm mới nhanh hơn',
      level: 'beginner',
      content: `
# Buổi 4: Hỏi AI để học khái niệm mới nhanh hơn

## Mục tiêu
- Biết dùng AI như gia sư giải thích kiến thức
- Biết yêu cầu ví dụ dễ hiểu
- Biết học từ dễ đến khó

## Nội dung chính
- Hỏi AI giải thích:
  - định nghĩa
  - ví dụ thực tế
  - ví dụ code
  - so sánh 2 khái niệm
- Yêu cầu AI giải thích như cho người mới
- Học theo vòng:
  - hiểu khái niệm
  - xem ví dụ
  - tự làm lại

## Ví dụ
\`\`\`text
Hãy giải thích Promise như cho học sinh mới học JavaScript,
kèm 2 ví dụ đời thường và 1 ví dụ code.
\`\`\`

## Bài tập luyện tập
1. Chọn một khái niệm khó và viết prompt nhờ AI giải thích
2. Yêu cầu AI so sánh 2 khái niệm bạn hay nhầm
3. Yêu cầu AI cho 3 ví dụ từ cơ bản đến nâng cao

## Bài tập thử thách
- Tạo một prompt nhờ AI dạy lại cho bạn khái niệm useEffect bằng ngôn ngữ đời thường
      `
    },
    {
      id: 'ai-05',
      title: 'Buổi 5: Dùng AI để giải thích code có sẵn',
      level: 'beginner',
      content: `
# Buổi 5: Dùng AI để giải thích code có sẵn

## Mục tiêu
- Biết nhờ AI giải thích từng phần của code
- Học cách đọc code thay vì chỉ copy
- Biết hỏi lại khi một dòng code còn khó hiểu

## Nội dung chính
- Yêu cầu AI:
  - giải thích từng dòng
  - giải thích luồng chạy
  - chỉ ra input/output
  - giải thích đoạn nào quan trọng nhất
- Hỏi theo cấp độ:
  - tổng quan
  - chi tiết
  - từng dòng

## Ví dụ
\`\`\`text
Hãy giải thích đoạn code này theo 3 phần:
1. Mục đích chính
2. Cách nó hoạt động
3. Những dòng quan trọng nhất
\`\`\`

## Bài tập luyện tập
1. Chọn một hàm JavaScript và nhờ AI giải thích
2. Hỏi AI giải thích từng dòng của một component React
3. Hỏi AI đoạn nào dễ gây lỗi nhất trong code

## Bài tập thử thách
- Đưa một đoạn code dài và yêu cầu AI tóm tắt logic chỉ trong 5 ý chính
      `
    },
    {
      id: 'ai-06',
      title: 'Buổi 6: Debugging cùng AI - cung cấp log lỗi đúng cách',
      level: 'intermediate',
      content: `
# Buổi 6: Debugging cùng AI - cung cấp log lỗi đúng cách

## Mục tiêu
- Biết dùng AI để sửa lỗi hiệu quả hơn
- Biết gửi đúng log lỗi và đoạn code liên quan
- Biết tránh hỏi lỗi theo kiểu quá chung chung

## Nội dung chính
- Khi gặp lỗi cần gửi:
  - log lỗi đầy đủ
  - đoạn code liên quan
  - bước để tái hiện lỗi
  - điều bạn mong muốn xảy ra
- Không chỉ chụp một dòng đỏ ngắn rồi hỏi

## Ví dụ
\`\`\`text
Tôi chạy app React và gặp lỗi này: [log].
Lỗi xảy ra khi tôi bấm nút đăng nhập.
Đây là component LoginForm và hook useAuth của tôi: [code].
Nguyên nhân gốc rễ là gì?
\`\`\`

## Bài tập luyện tập
1. Viết một prompt debug hoàn chỉnh cho lỗi React
2. Viết một prompt debug hoàn chỉnh cho lỗi Node.js
3. Thêm bước tái hiện lỗi vào prompt

## Bài tập thử thách
- Tạo một mẫu prompt debug bạn có thể dán log + code vào và dùng ngay
      `
    },
    {
      id: 'ai-07',
      title: 'Buổi 7: Yêu cầu AI phân tích nguyên nhân gốc rễ thay vì chỉ sửa nhanh',
      level: 'intermediate',
      content: `
# Buổi 7: Yêu cầu AI phân tích nguyên nhân gốc rễ thay vì chỉ sửa nhanh

## Mục tiêu
- Biết học từ lỗi thay vì chỉ vá lỗi
- Biết yêu cầu AI phân tích sâu hơn
- Hiểu sự khác nhau giữa triệu chứng và nguyên nhân

## Nội dung chính
- Hỏi AI:
  - lỗi này xảy ra vì sao
  - dòng nào là nguyên nhân chính
  - đây là lỗi logic hay lỗi cú pháp
  - lỗi này thường gặp trong trường hợp nào
- Xin 2 cách sửa và so sánh

## Ví dụ
\`\`\`text
Hãy giải thích nguyên nhân gốc rễ của lỗi này.
Sau đó đưa ra 2 cách sửa khác nhau cùng ưu và nhược điểm.
\`\`\`

## Bài tập luyện tập
1. Viết prompt yêu cầu AI tìm root cause
2. Yêu cầu AI phân biệt symptom và root cause
3. Yêu cầu AI nêu 2 cách sửa cho cùng một lỗi

## Bài tập thử thách
- Chọn một lỗi bạn từng gặp và viết prompt để AI giải thích sâu hơn thay vì chỉ sửa
      `
    },
    {
      id: 'ai-08',
      title: 'Buổi 8: Hỏi AI để refactor code dễ đọc hơn',
      level: 'intermediate',
      content: `
# Buổi 8: Hỏi AI để refactor code dễ đọc hơn

## Mục tiêu
- Biết nhờ AI cải thiện code đã chạy được
- Biết tách logic, đổi tên biến, giảm lặp
- Học cách đọc code sạch hơn

## Nội dung chính
- Nhờ AI:
  - đổi tên biến rõ nghĩa hơn
  - tách hàm
  - giảm lặp code
  - chia component
  - làm code dễ đọc hơn
- Luôn yêu cầu AI giải thích thay đổi

## Ví dụ
\`\`\`text
Hãy refactor đoạn code này để dễ đọc hơn,
nhưng không làm thay đổi hành vi.
Sau đó giải thích các thay đổi chính.
\`\`\`

## Bài tập luyện tập
1. Đưa một hàm dài cho AI refactor
2. Yêu cầu AI chỉ đổi tên biến và hàm
3. Yêu cầu AI tách một component lớn thành nhiều phần nhỏ

## Bài tập thử thách
- Đưa một đoạn code rối và yêu cầu AI refactor theo clean code cơ bản
      `
    },
    {
      id: 'ai-09',
      title: 'Buổi 9: Dùng AI để tối ưu hiệu suất và tránh code thừa',
      level: 'intermediate',
      content: `
# Buổi 9: Dùng AI để tối ưu hiệu suất và tránh code thừa

## Mục tiêu
- Biết nhờ AI phát hiện chỗ chậm hoặc dư thừa
- Biết hỏi về re-render, bundle, query, vòng lặp
- Không tối ưu mù quáng

## Nội dung chính
- Hỏi AI:
  - chỗ nào đang render thừa
  - chỗ nào đang lặp tính toán
  - chỗ nào đang tải dữ liệu quá nhiều
  - có thể lazy load gì
- Yêu cầu AI giải thích tác động hiệu suất

## Ví dụ
\`\`\`text
Hãy xem component React này và chỉ ra các nguyên nhân có thể gây re-render thừa.
Nếu cần, hãy đề xuất dùng memo, useMemo hoặc useCallback.
\`\`\`

## Bài tập luyện tập
1. Viết prompt nhờ AI kiểm tra re-render trong React
2. Viết prompt nhờ AI tối ưu truy vấn API
3. Viết prompt nhờ AI giảm code trùng lặp

## Bài tập thử thách
- Đưa một component danh sách và yêu cầu AI phân tích 3 điểm tối ưu quan trọng nhất
      `
    },
    {
      id: 'ai-10',
      title: 'Buổi 10: Dùng AI để viết test và nghĩ thêm edge cases',
      level: 'intermediate',
      content: `
# Buổi 10: Dùng AI để viết test và nghĩ thêm edge cases

## Mục tiêu
- Biết nhờ AI hỗ trợ viết test
- Biết yêu cầu AI thêm trường hợp biên
- Học tư duy test từ câu trả lời của AI

## Nội dung chính
- Nhờ AI viết:
  - unit test
  - test form
  - test edge case
- Yêu cầu AI giải thích lý do từng test case
- Không dùng test AI viết ra mà không đọc

## Ví dụ
\`\`\`text
Hãy viết unit test cho hàm này bằng Vitest,
bao gồm cả trường hợp dữ liệu rỗng và dữ liệu không hợp lệ.
\`\`\`

## Bài tập luyện tập
1. Đưa một hàm tính toán cho AI viết test
2. Yêu cầu AI thêm edge cases
3. Yêu cầu AI giải thích vì sao từng test quan trọng

## Bài tập thử thách
- Dùng AI viết test cho một form đăng ký có validation
      `
    },
    {
      id: 'ai-11',
      title: 'Buổi 11: Dùng AI để học kiến trúc dự án và cấu trúc thư mục',
      level: 'intermediate',
      content: `
# Buổi 11: Dùng AI để học kiến trúc dự án và cấu trúc thư mục

## Mục tiêu
- Biết thảo luận với AI trước khi code
- Biết hỏi về cấu trúc thư mục, tách lớp và luồng dữ liệu
- Tránh viết dự án rối ngay từ đầu

## Nội dung chính
- Hỏi AI về:
  - cấu trúc thư mục
  - chia component
  - chia route
  - chia service, controller, hook, utils
- Đưa bối cảnh dự án cụ thể để AI tư vấn sát hơn

## Ví dụ
\`\`\`text
Tôi muốn xây app học online bằng Next.js.
Hãy gợi ý cấu trúc thư mục rõ ràng cho:
- trang public
- dashboard người dùng
- API
- components dùng chung
\`\`\`

## Bài tập luyện tập
1. Hỏi AI cấu trúc cho app React nhỏ
2. Hỏi AI cấu trúc cho app Node.js backend
3. Hỏi AI nên tách phần nào thành component riêng

## Bài tập thử thách
- Viết prompt nhờ AI thiết kế sơ đồ thư mục cho app full-stack
      `
    },
    {
      id: 'ai-12',
      title: 'Buổi 12: Phân rã bài toán lớn thành bước nhỏ với AI',
      level: 'intermediate',
      content: `
# Buổi 12: Phân rã bài toán lớn thành bước nhỏ với AI

## Mục tiêu
- Biết nhờ AI chia task lớn thành task nhỏ
- Giảm cảm giác quá tải khi bắt đầu tính năng mới
- Có quy trình làm việc rõ hơn

## Nội dung chính
- Hỏi AI:
  - cần làm những bước nào
  - thứ tự ưu tiên ra sao
  - phần nào dễ, phần nào khó
  - chia task theo frontend / backend / database
- Dùng AI để tạo checklist hành động

## Ví dụ
\`\`\`text
Tôi muốn làm tính năng giỏ hàng cho app React + Node.js.
Hãy chia thành các bước nhỏ theo thứ tự triển khai.
\`\`\`

## Bài tập luyện tập
1. Chọn một tính năng và nhờ AI chia task
2. Yêu cầu AI sắp xếp task theo thứ tự ưu tiên
3. Yêu cầu AI ước lượng phần dễ và phần khó

## Bài tập thử thách
- Dùng AI phân rã tính năng "đăng ký + đăng nhập + hồ sơ người dùng"
      `
    },
    {
      id: 'ai-13',
      title: 'Buổi 13: Kiểm chứng đầu ra của AI - không tin mù quáng',
      level: 'advanced',
      content: `
# Buổi 13: Kiểm chứng đầu ra của AI - không tin mù quáng

## Mục tiêu
- Hiểu AI có thể sai hoặc bịa
- Biết cách tự kiểm chứng câu trả lời
- Tạo thói quen đọc lại trước khi dùng

## Nội dung chính
- Kiểm tra:
  - code có chạy không
  - tên hàm/thư viện có tồn tại không
  - logic có khớp yêu cầu không
  - có vi phạm bảo mật không
- So sánh với docs chính thức khi cần
- Hỏi AI nguồn, giả định và giới hạn

## Ví dụ
\`\`\`text
Hãy kiểm tra lại xem đoạn code này có dùng API nào không tồn tại không.
Nếu có, hãy sửa lại bằng cách đúng hơn.
\`\`\`

## Bài tập luyện tập
1. Liệt kê 5 điều cần kiểm tra trước khi dùng code AI sinh ra
2. Viết prompt yêu cầu AI tự rà lỗi trong chính câu trả lời trước
3. So sánh 2 phiên bản AI trả lời và chọn phiên bản đáng tin hơn

## Bài tập thử thách
- Tạo checklist “đọc lại code AI trước khi paste vào dự án”
      `
    },
    {
      id: 'ai-14',
      title: 'Buổi 14: Hallucination, ngữ cảnh thiếu và cách sửa prompt',
      level: 'advanced',
      content: `
# Buổi 14: Hallucination, ngữ cảnh thiếu và cách sửa prompt

## Mục tiêu
- Hiểu hallucination là gì
- Biết vì sao AI dễ bịa khi thiếu ngữ cảnh
- Biết cách cải thiện prompt để giảm trả lời sai

## Nội dung chính
- Hallucination là trả lời nghe có vẻ đúng nhưng thực ra sai
- Thiếu file, thiếu framework, thiếu log, thiếu mục tiêu sẽ làm AI đoán
- Cách giảm hallucination:
  - đưa code thật
  - nói rõ stack
  - nói rõ phiên bản nếu cần
  - yêu cầu AI nêu giả định

## Ví dụ
\`\`\`text
Nếu chưa đủ thông tin, hãy nói rõ bạn đang giả định điều gì trước khi đưa giải pháp.
\`\`\`

## Bài tập luyện tập
1. Viết một prompt yêu cầu AI nêu giả định
2. Sửa một prompt thiếu ngữ cảnh thành prompt đủ dữ kiện hơn
3. Liệt kê 5 kiểu thông tin nên thêm để AI đỡ đoán

## Bài tập thử thách
- Tạo prompt chuẩn để AI trả lời "nếu thiếu dữ kiện thì hỏi rõ hoặc nêu giả định"
      `
    },
    {
      id: 'ai-15',
      title: 'Buổi 15: Dùng AI để viết tài liệu, comment và commit message',
      level: 'advanced',
      content: `
# Buổi 15: Dùng AI để viết tài liệu, comment và commit message

## Mục tiêu
- Biết dùng AI để cải thiện giao tiếp kỹ thuật
- Biết tạo README, comment, changelog, commit message rõ hơn
- Giảm thời gian viết tài liệu thủ công

## Nội dung chính
- Nhờ AI:
  - viết README
  - viết comment cho hàm khó
  - tóm tắt thay đổi
  - viết commit message
  - viết mô tả Pull Request
- Không nên để AI viết tài liệu sai với code thật

## Ví dụ
\`\`\`text
Hãy viết README ngắn cho project này gồm:
- Mô tả
- Cài đặt
- Cách chạy
- Cấu trúc thư mục
\`\`\`

## Bài tập luyện tập
1. Nhờ AI viết README cho app của bạn
2. Nhờ AI tạo commit message rõ nghĩa
3. Nhờ AI viết comment cho một hàm phức tạp

## Bài tập thử thách
- Dùng AI tạo mô tả Pull Request cho một tính năng mới
      `
    },
    {
      id: 'ai-16',
      title: 'Buổi 16: Dùng AI để review code và tìm điểm yếu',
      level: 'advanced',
      content: `
# Buổi 16: Dùng AI để review code và tìm điểm yếu

## Mục tiêu
- Biết dùng AI như người review sơ bộ
- Biết yêu cầu AI chỉ ra lỗi tiềm ẩn
- Biết xin góp ý về readability, performance, security

## Nội dung chính
- Hỏi AI review theo tiêu chí:
  - dễ đọc
  - dễ bảo trì
  - bảo mật
  - hiệu suất
  - testability
- Yêu cầu AI xếp mức nghiêm trọng từng vấn đề

## Ví dụ
\`\`\`text
Hãy review đoạn code này như một senior developer.
Chia vấn đề thành 4 nhóm:
- bug
- readability
- performance
- security
\`\`\`

## Bài tập luyện tập
1. Đưa một hàm cho AI review
2. Đưa một component React cho AI review
3. Yêu cầu AI nêu top 3 vấn đề nghiêm trọng nhất

## Bài tập thử thách
- Dùng AI review một API backend theo góc nhìn bảo mật và validation
      `
    },
    {
      id: 'ai-17',
      title: 'Buổi 17: Học song song với AI mà không lệ thuộc',
      level: 'advanced',
      content: `
# Buổi 17: Học song song với AI mà không lệ thuộc

## Mục tiêu
- Biết dùng AI để học nhanh nhưng vẫn phát triển tư duy riêng
- Biết khi nào nên tự làm trước, khi nào nên hỏi AI
- Tránh copy-paste mà không hiểu

## Nội dung chính
- Quy tắc tốt:
  - tự nghĩ trước
  - thử trước
  - hỏi sau
  - đọc lại và giải thích lại
- Dùng AI để:
  - kiểm tra hướng nghĩ
  - so sánh lời giải
  - giải thích phần chưa hiểu
- Không biến AI thành "máy làm bài hộ"

## Ví dụ
\`\`\`text
Trước khi hỏi AI, hãy tự viết ra:
- mình nghĩ lỗi nằm ở đâu
- mình đã thử gì
- mình đang không hiểu chỗ nào
\`\`\`

## Bài tập luyện tập
1. Viết quy trình 4 bước trước khi hỏi AI
2. Nêu 3 dấu hiệu cho thấy bạn đang lệ thuộc AI
3. Nêu 3 dấu hiệu dùng AI đúng cách

## Bài tập thử thách
- Tạo “quy ước cá nhân” khi dùng AI trong quá trình học code
      `
    },
    {
      id: 'ai-18',
      title: 'Buổi 18: Bảo mật và quyền riêng tư khi đưa dữ liệu cho AI',
      level: 'advanced',
      content: `
# Buổi 18: Bảo mật và quyền riêng tư khi đưa dữ liệu cho AI

## Mục tiêu
- Biết không phải dữ liệu nào cũng nên đưa cho AI
- Hiểu rủi ro khi paste secrets, token, thông tin nhạy cảm
- Có thói quen ẩn dữ liệu trước khi hỏi

## Nội dung chính
- Không chia sẻ:
  - mật khẩu
  - token
  - API key
  - dữ liệu khách hàng thật
  - thông tin nội bộ nhạy cảm
- Thay dữ liệu thật bằng dữ liệu giả
- Ẩn phần bí mật trước khi gửi prompt

## Ví dụ
\`\`\`text
Không nên paste nguyên file .env hoặc token thật để hỏi lỗi.
\`\`\`

## Bài tập luyện tập
1. Liệt kê 5 loại dữ liệu không nên gửi cho AI
2. Viết lại một prompt có token thật thành prompt an toàn hơn
3. Thay dữ liệu người dùng thật bằng dữ liệu giả

## Bài tập thử thách
- Tạo checklist an toàn trước khi gửi code hoặc log cho AI
      `
    },
    {
      id: 'ai-19',
      title: 'Buổi 19: Xây workflow làm việc với AI hằng ngày',
      level: 'advanced',
      content: `
# Buổi 19: Xây workflow làm việc với AI hằng ngày

## Mục tiêu
- Biết đưa AI vào quy trình học và làm việc hằng ngày
- Tạo workflow nhất quán từ học, code, debug, test đến review
- Tăng hiệu quả thay vì hỏi ngẫu hứng

## Nội dung chính
- Workflow gợi ý:
  1. Hiểu bài toán
  2. Tự nghĩ hướng làm
  3. Hỏi AI để kiểm tra hướng
  4. Viết code
  5. Nhờ AI review
  6. Nhờ AI viết test hoặc edge case
  7. Tự kiểm chứng lại
- Dùng prompt template cho từng loại việc

## Ví dụ
\`\`\`text
Mỗi ngày bạn có thể dùng AI cho:
- 1 lần học khái niệm
- 1 lần debug
- 1 lần review code
- 1 lần tóm tắt điều đã học
\`\`\`

## Bài tập luyện tập
1. Viết workflow AI cá nhân cho 1 buổi học code
2. Tạo 3 prompt template cho:
   - học khái niệm
   - debug
   - review code
3. Chọn thời điểm nào nên hỏi AI, thời điểm nào nên tự làm trước

## Bài tập thử thách
- Thiết kế quy trình dùng AI cho một tuần tự học frontend hoặc backend
      `
    },
    {
      id: 'ai-20',
      title: 'Buổi 20: Mini Project và dự án cuối khóa Tư duy sử dụng AI',
      level: 'advanced',
      content: `
# Buổi 20: Mini Project và dự án cuối khóa Tư duy sử dụng AI

## Mục tiêu
- Kết hợp toàn bộ kỹ năng làm việc với AI đã học
- Xây thói quen dùng AI có chiến lược
- Tự đánh giá mức độ làm chủ AI trong lập trình

## Gợi ý project
Chọn 1 trong các bài:
1. Dùng AI để hỗ trợ làm một mini app từ đầu đến cuối
2. Dùng AI để debug và refactor một project cũ
3. Dùng AI để học một công nghệ mới trong 3 ngày
4. Dùng AI để viết test, review và tài liệu cho một app nhỏ

## Yêu cầu bắt buộc
- Có ít nhất 3 prompt loại khác nhau:
  - học khái niệm
  - debug
  - refactor hoặc review
- Có ghi lại prompt trước và sau khi cải thiện
- Có ghi lại ít nhất 3 lần AI trả lời chưa tốt và cách bạn sửa prompt
- Có phần tự kiểm chứng đầu ra của AI

## Checklist tự đánh giá
- Bạn có đưa đủ ngữ cảnh khi hỏi không?
- Bạn có đang hỏi đúng mục tiêu không?
- Bạn có đọc và hiểu code AI đưa ra không?
- Bạn có kiểm chứng lại câu trả lời không?
- Bạn có dùng AI để học tốt hơn, hay chỉ để làm nhanh hơn?

## Bài tập cuối khóa
- Chọn một project thật hoặc mini app
- Ghi lại toàn bộ cách bạn dùng AI trong quá trình làm
- Tóm tắt:
  - prompt nào hiệu quả nhất
  - lỗi nào AI giúp tốt nhất
  - chỗ nào AI trả lời sai hoặc thiếu
  - bài học lớn nhất bạn rút ra khi làm việc cùng AI
      `
    }
  ]
};