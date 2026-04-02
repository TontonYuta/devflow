import { Lesson } from '../../types';

export const aiLesson: Lesson = {
  id: 'gemini-ai-mastery',
  icon: 'cpu',
  title: 'Tư duy sử dụng AI',
  description:
    'Lộ trình Tư duy sử dụng AI theo phong cách tự học cùng AI mentor. Mỗi buổi học đi kèm prompt cực chi tiết để học viên chỉ cần copy vào AI là có thể học cách đặt câu hỏi đúng, debug tốt hơn, refactor thông minh hơn, kiểm chứng đầu ra và xây workflow làm việc với AI như một pair programmer thực thụ.',
  points: [
    'Mỗi buổi có prompt cực chi tiết để copy vào AI và học ngay',
    'AI đóng vai mentor làm việc cùng lập trình viên, không chỉ là công cụ trả lời nhanh',
    'Có prompt học lý thuyết, prompt debug, prompt review, prompt phản biện và prompt tự đánh giá',
    'Tập trung vào năng lực thật: hỏi đúng, đưa đúng ngữ cảnh, kiểm chứng đầu ra, dùng AI để tăng tốc mà không lệ thuộc',
    'Có bài tập theo kiểu workflow thực tế thay vì chỉ học mẹo prompt rời rạc',
    'Học xong có thể tự xây một quy trình dùng AI hiệu quả trong học tập, code, debug, review và viết tài liệu'
  ],
  chapters: [
    {
      id: 'ai-01',
      title: 'Buổi 1: AI trong lập trình là gì và vì sao phải dùng AI đúng vai trò?',
      level: 'beginner',
      content: `
# Buổi 1: AI trong lập trình là gì và vì sao phải dùng AI đúng vai trò?

## Mục tiêu
- Hiểu AI hỗ trợ lập trình theo cách nào
- Hiểu AI là trợ lý tăng tốc, không phải người thay thế tư duy
- Bắt đầu có tư duy dùng AI để học nhanh hơn nhưng vẫn giữ quyền kiểm soát

## Cách học buổi này
Bạn sẽ copy từng prompt bên dưới vào AI theo đúng thứ tự.
Không học lướt. Sau mỗi prompt phải tự viết lại suy nghĩ của bạn bằng lời của bạn.

## Prompt 1 - Nhờ AI dạy lý thuyết từ gốc
\`\`\`
Bạn hãy đóng vai một mentor chuyên hướng dẫn lập trình viên làm việc cùng AI một cách hiệu quả.

Hôm nay hãy dạy tôi buổi đầu tiên về tư duy sử dụng AI trong lập trình theo phong cách:
- cực dễ hiểu nhưng không hời hợt
- giải thích từ bản chất
- luôn nói vì sao kiến thức này quan trọng
- gắn với tình huống thực tế khi học code và làm dự án
- không dùng thuật ngữ khó nếu chưa giải thích

Chủ đề hôm nay:
- AI trong lập trình là gì?
- AI có thể hỗ trợ những việc gì?
- AI không nên được dùng như thế nào?
- Vì sao AI là trợ lý, không phải “cây đũa thần”?

Tôi muốn bạn dạy theo format:
1. AI đang hỗ trợ lập trình viên ở những nhóm việc nào?
2. Những việc nào AI làm tốt?
3. Những việc nào AI có thể hỗ trợ nhưng không nên giao hoàn toàn?
4. Những việc nào người học/lập trình viên vẫn phải tự chịu trách nhiệm?
5. Cho 6 ví dụ thực tế:
   - học khái niệm mới
   - giải thích code
   - debug
   - refactor
   - viết test
   - review code
6. Vì sao AI có thể đúng nhanh nhưng sai cũng nhanh?
7. Chỉ ra 8 hiểu lầm phổ biến của người mới khi dùng AI để học lập trình
8. Đặt cho tôi 5 câu hỏi kiểm tra hiểu bài
9. Sau khi tôi trả lời, bạn phải chấm và sửa thật kỹ

Dùng tiếng Việt và dạy như mentor thật sự.
\`\`\`

## Prompt 2 - Nhờ AI luyện tư duy “việc nào nên giao cho AI”
\`\`\`
Tôi muốn luyện tư duy phân biệt việc nào nên nhờ AI, việc nào không nên giao hoàn toàn cho AI.

Hãy cho tôi 10 tình huống thực tế, ví dụ:
- học một khái niệm mới
- sửa bug production
- chọn kiến trúc cho dự án thật
- viết test cho một hàm
- refactor một component
- sinh README
- xử lý phân quyền bảo mật
- thiết kế database
- code một feature nhỏ
- review code pull request

Với mỗi tình huống:
1. hỏi tôi AI nên đóng vai trò gì
2. hỏi tôi phần nào tôi vẫn phải tự chịu trách nhiệm
3. hỏi tôi rủi ro nếu tin AI mù quáng là gì
4. sau đó bạn mới chữa
5. nếu tôi trả lời hời hợt, hãy bắt tôi nói cụ thể hơn

Mục tiêu là để tôi dùng AI đúng vai trò ngay từ đầu.
\`\`\`

## Prompt 3 - Nhờ AI kiểm tra hiểu bài
\`\`\`
Hãy kiểm tra xem tôi đã thật sự hiểu buổi 1 Tư duy sử dụng AI chưa.

Tôi muốn có:
- 3 câu hỏi trắc nghiệm có giải thích đáp án
- 3 câu hỏi tự luận ngắn
- 2 tình huống thực tế
- 1 câu hỏi tư duy: vì sao “AI viết được code” không đồng nghĩa “AI chịu trách nhiệm thay bạn”?

Sau khi tôi trả lời, bạn hãy:
- chấm điểm từng câu
- giải thích chỗ sai
- nói tôi đang ở mức nào: chưa hiểu / hiểu cơ bản / hiểu chắc
\`\`\`

## Bài tập buổi này
1. Liệt kê 5 việc AI hỗ trợ tốt trong lập trình
2. Liệt kê 3 việc không nên giao hoàn toàn cho AI
3. Viết một đoạn ngắn mô tả cách bạn muốn dùng AI trong quá trình học code

## Tiêu chuẩn hoàn thành
- Hiểu AI là trợ lý
- Không còn nhìn AI như máy làm bài hộ
- Bắt đầu có tư duy dùng AI có trách nhiệm
      `
    },
    {
      id: 'ai-02',
      title: 'Buổi 2: Hỏi đúng để AI trả lời tốt - ngữ cảnh, mục tiêu và đầu vào rõ ràng',
      level: 'beginner',
      content: `
# Buổi 2: Hỏi đúng để AI trả lời tốt - ngữ cảnh, mục tiêu và đầu vào rõ ràng

## Mục tiêu
- Hiểu vì sao đầu vào quyết định đầu ra
- Biết biến câu hỏi mơ hồ thành câu hỏi rõ
- Biết thêm stack, mục tiêu, log, code, ràng buộc vào prompt

## Prompt 1 - Nhờ AI dạy tư duy đặt câu hỏi đúng
\`\`\`
Hãy dạy tôi buổi 2 về cách đặt câu hỏi hiệu quả cho AI trong lập trình.

Tôi muốn bạn dạy theo cấu trúc:
1. Vì sao prompt mơ hồ thường cho câu trả lời mơ hồ?
2. Một prompt tốt trong lập trình thường cần những phần nào?
3. Vai trò của:
   - stack công nghệ
   - mục tiêu
   - code liên quan
   - log lỗi
   - bước tái hiện
   - ràng buộc
4. So sánh 5 cặp prompt:
   - prompt kém
   - prompt tốt hơn
5. Chỉ ra lỗi phổ biến:
   - hỏi quá ngắn
   - không đưa code
   - không nói mục tiêu
   - gửi lỗi nhưng không nói cách tái hiện
6. Tạo cho tôi một checklist viết prompt tốt cho lập trình viên

Dạy như mentor đang sửa cách hỏi của junior để AI trả lời hữu ích hơn.
\`\`\`

## Prompt 2 - Nhờ AI luyện sửa prompt yếu thành prompt mạnh
\`\`\`
Tôi muốn luyện kỹ năng biến prompt yếu thành prompt mạnh.

Hãy cho tôi 10 prompt rất dở trong ngữ cảnh lập trình, ví dụ:
- sửa lỗi này
- code này sai ở đâu
- giải thích React
- tối ưu code này
- viết test cho tôi
- app tôi bị chậm
- API không chạy
- form bị lỗi
- giúp tôi làm auth
- giúp tôi refactor

Với mỗi prompt:
1. yêu cầu tôi viết lại cho rõ hơn
2. bắt tôi thêm:
   - stack
   - ngữ cảnh
   - mục tiêu
   - dữ liệu/log/code nếu cần
3. sau đó bạn mới chữa
4. giải thích vì sao bản sửa tốt hơn

Mục tiêu là để tôi có phản xạ hỏi đúng ngay từ đầu.
\`\`\`

## Prompt 3 - Nhờ AI review prompt của tôi
\`\`\`
Tôi sẽ gửi cho bạn 3 prompt tôi tự viết để hỏi AI về code.
Bạn hãy review:
1. Prompt đã đủ ngữ cảnh chưa?
2. Đã nói rõ mục tiêu chưa?
3. Có thiếu dữ liệu đầu vào quan trọng không?
4. Chỗ nào còn mơ hồ?
5. Hãy viết lại prompt đó theo phiên bản mạnh hơn nhưng vẫn ngắn gọn

Hãy review như mentor tối ưu cách giao tiếp với AI.
\`\`\`

## Bài tập buổi này
- Viết lại 10 prompt mơ hồ thành prompt rõ ràng hơn
- Tạo 1 template hỏi lỗi code
- Tạo 1 template hỏi giải thích khái niệm

## Tiêu chuẩn hoàn thành
- Biết prompt tốt cần gì
- Không còn hỏi AI kiểu quá mơ hồ
- Bắt đầu có template prompt riêng
      `
    },
    {
      id: 'ai-03',
      title: 'Buổi 3: Công thức prompt mạnh cho lập trình - vai trò, ngữ cảnh, dữ liệu, mục tiêu, định dạng đầu ra',
      level: 'beginner',
      content: `
# Buổi 3: Công thức prompt mạnh cho lập trình - vai trò, ngữ cảnh, dữ liệu, mục tiêu, định dạng đầu ra

## Mục tiêu
- Có công thức prompt rõ ràng để tái sử dụng
- Biết thêm role, output format, level explanation
- Biết làm prompt mạnh hơn mà không cần quá dài dòng

## Prompt 1 - Nhờ AI dạy prompt framework
\`\`\`
Hãy dạy tôi buổi 3 về công thức viết prompt mạnh cho lập trình viên.

Tôi muốn bạn dạy theo cấu trúc:
1. Một prompt mạnh thường có những khối nào?
2. Vai trò (role) giúp gì?
3. Ngữ cảnh giúp gì?
4. Dữ liệu/code/log giúp gì?
5. Mục tiêu mong muốn cần rõ ra sao?
6. Ràng buộc và định dạng đầu ra giúp gì?
7. Cho tôi một framework ngắn gọn có thể tái sử dụng mỗi ngày
8. Cho 5 ví dụ ứng dụng framework đó vào:
   - học khái niệm
   - debug
   - refactor
   - review code
   - viết test
9. Chỉ ra lỗi phổ biến khi thêm quá nhiều chi tiết nhưng vẫn không rõ mục tiêu
10. Tạo cho tôi 3 template prompt thực dụng nhất

Dạy như mentor đang giúp tôi xây “khung prompt cá nhân”.
\`\`\`

## Prompt 2 - Nhờ AI luyện dùng framework vào nhiều tình huống
\`\`\`
Tôi muốn luyện dùng một framework prompt chung cho nhiều tình huống.

Hãy cho tôi 8 bài toán lập trình khác nhau.
Với mỗi bài toán:
1. yêu cầu tôi viết prompt theo cấu trúc:
   - role
   - context
   - problem
   - code/log/data
   - desired output
2. sau đó bạn mới chữa
3. chỉ ra phần nào còn thiếu
4. tối ưu lại thành phiên bản mạnh hơn nhưng không quá dài

Mục tiêu là để tôi dùng prompt có hệ thống, không hỏi theo cảm hứng.
\`\`\`

## Prompt 3 - Nhờ AI phản biện template prompt của tôi
\`\`\`
Tôi sẽ gửi cho bạn một template prompt chung mà tôi muốn dùng hằng ngày.
Bạn hãy review:
1. Template này có đủ linh hoạt không?
2. Phần nào đang thừa?
3. Phần nào còn thiếu?
4. Nếu dùng cho debug / học khái niệm / review code thì nên biến thể ra sao?
5. Hãy giúp tôi rút gọn thành bản thực dụng hơn
\`\`\`

## Bài tập buổi này
- Tạo 3 template prompt riêng cho:
  - học khái niệm
  - debug
  - review code
- Thử áp dụng mỗi template vào một ví dụ thật

## Tiêu chuẩn hoàn thành
- Có framework prompt riêng
- Biết tái sử dụng thay vì viết prompt từ đầu mỗi lần
- Biết yêu cầu đầu ra rõ ràng hơn
      `
    },
    {
      id: 'ai-04',
      title: 'Buổi 4: Dùng AI để học nhanh hơn - giải thích khái niệm, giải thích code, so sánh khái niệm',
      level: 'beginner',
      content: `
# Buổi 4: Dùng AI để học nhanh hơn - giải thích khái niệm, giải thích code, so sánh khái niệm

## Mục tiêu
- Biết dùng AI như gia sư kỹ thuật
- Biết yêu cầu giải thích theo trình độ
- Biết học theo vòng: hiểu → ví dụ → tự làm → hỏi lại

## Prompt 1 - Nhờ AI dạy cách học khái niệm hiệu quả với AI
\`\`\`
Hãy dạy tôi buổi 4 về cách dùng AI để học khái niệm lập trình nhanh và sâu hơn.

Tôi muốn bạn dạy theo cấu trúc:
1. AI có thể đóng vai gia sư như thế nào?
2. Khi học khái niệm mới, nên hỏi AI theo các tầng nào?
   - định nghĩa
   - ví dụ đời thường
   - ví dụ code
   - so sánh với khái niệm gần giống
   - bài tập nhỏ
3. Vì sao nên yêu cầu AI giải thích “như cho người mới” hoặc “theo từng bước”?
4. Làm sao dùng AI để giải thích code có sẵn mà không rơi vào copy-paste?
5. Cho 5 ví dụ prompt học khái niệm:
   - Promise
   - useEffect
   - REST API
   - closure
   - JWT
6. Chỉ ra lỗi phổ biến:
   - học lướt
   - chỉ xin định nghĩa
   - không yêu cầu ví dụ
   - không tự diễn đạt lại
7. Tạo checklist học khái niệm cùng AI

Dạy như mentor đang giúp tôi học nhanh hơn nhưng không nông hơn.
\`\`\`

## Prompt 2 - Nhờ AI luyện vòng học 4 bước
\`\`\`
Tôi muốn luyện một quy trình học khái niệm mới cùng AI.

Hãy chọn 5 khái niệm lập trình từ dễ đến vừa.
Với mỗi khái niệm:
1. yêu cầu tôi viết prompt xin định nghĩa và ví dụ
2. yêu cầu tôi viết prompt xin so sánh với khái niệm gần giống
3. yêu cầu tôi viết prompt xin bài tập nhỏ
4. yêu cầu tôi tự diễn đạt lại bằng lời của mình
5. sau đó bạn mới chữa

Mục tiêu là để tôi hình thành workflow học cùng AI chứ không chỉ hỏi một lần rồi thôi.
\`\`\`

## Prompt 3 - Nhờ AI review cách tôi học với AI
\`\`\`
Tôi sẽ gửi cho bạn 3 prompt tôi dùng để học một khái niệm mới và phần tôi tự tóm tắt lại.
Bạn hãy review:
1. Prompt của tôi đã đủ tốt chưa?
2. Tôi có đang học theo vòng đủ sâu không?
3. Phần tóm tắt lại của tôi có cho thấy tôi hiểu thật không?
4. Tôi nên hỏi thêm gì để hiểu chắc hơn?
5. Hãy đề xuất phiên bản quy trình học tốt hơn cho tôi
\`\`\`

## Bài tập buổi này
- Chọn 3 khái niệm mới và học cùng AI theo quy trình 4 bước
- Viết lại phần bạn hiểu bằng lời của bạn
- Tạo 1 template “học khái niệm mới cùng AI”

## Tiêu chuẩn hoàn thành
- Biết dùng AI để học chứ không chỉ xin đáp án
- Biết yêu cầu ví dụ, so sánh và bài tập
- Bắt đầu có workflow tự học hiệu quả hơn
      `
    },
    {
      id: 'ai-05',
      title: 'Buổi 5: Debugging cùng AI - đưa log lỗi, bước tái hiện và phân tích nguyên nhân gốc rễ',
      level: 'intermediate',
      content: `
# Buổi 5: Debugging cùng AI - đưa log lỗi, bước tái hiện và phân tích nguyên nhân gốc rễ

## Mục tiêu
- Biết dùng AI để debug hiệu quả hơn
- Biết gửi log lỗi, code liên quan và bước tái hiện đúng cách
- Biết yêu cầu AI tìm root cause thay vì chỉ vá lỗi

## Prompt 1 - Nhờ AI dạy quy trình debug cùng AI
\`\`\`
Hãy dạy tôi buổi 5 về cách debug cùng AI như một lập trình viên có phương pháp.

Tôi muốn bạn dạy theo cấu trúc:
1. Vì sao debug với AI thất bại nếu cung cấp dữ liệu quá ít?
2. Một prompt debug tốt cần có những phần nào?
3. Vai trò của:
   - log lỗi đầy đủ
   - đoạn code liên quan
   - bước tái hiện
   - điều tôi mong muốn xảy ra
4. Vì sao phải yêu cầu AI phân tích nguyên nhân gốc rễ?
5. Khi nào nên xin 2 cách sửa và so sánh ưu/nhược điểm?
6. Cho 5 ví dụ prompt debug tốt cho:
   - React
   - Node.js
   - CSS layout
   - fetch/API
   - TypeScript error
7. Chỉ ra lỗi phổ biến:
   - chỉ gửi ảnh 1 dòng đỏ
   - không nói stack
   - không nói hành vi mong muốn
   - chỉ xin fix nhanh
8. Tạo checklist debug cùng AI hiệu quả

Dạy như mentor đang giúp tôi biến AI thành trợ lý debug thật sự.
\`\`\`

## Prompt 2 - Nhờ AI luyện viết prompt debug tốt
\`\`\`
Tôi muốn luyện viết prompt debug.

Hãy cho tôi 8 lỗi giả định trong lập trình, ví dụ:
- state không cập nhật
- form submit reload trang
- API 401
- layout bị nhảy
- useEffect chạy lặp
- TypeScript báo kiểu sai
- backend crash do undefined
- query không trả dữ liệu

Với mỗi lỗi:
1. yêu cầu tôi viết prompt debug hoàn chỉnh
2. bắt tôi thêm stack, log, code, bước tái hiện, expected behavior
3. sau đó bạn mới chữa
4. chỉ ra phần nào của prompt còn yếu
\`\`\`

## Prompt 3 - Nhờ AI review khả năng debug cùng AI của tôi
\`\`\`
Tôi sẽ gửi cho bạn một prompt debug tôi viết kèm log lỗi và code.
Bạn hãy review:
1. Prompt đã đủ dữ liệu chưa?
2. AI có khả năng trả lời đúng cao không?
3. Tôi có đang bỏ sót bước tái hiện hoặc expected behavior không?
4. Tôi có đang hỏi fix quá nhanh mà chưa hỏi root cause không?
5. Hãy viết lại prompt đó thành bản mạnh hơn
\`\`\`

## Bài tập buổi này
- Viết 5 prompt debug hoàn chỉnh
- Tạo 1 template debug dùng hằng ngày
- Tự phân biệt symptom và root cause trong ít nhất 3 lỗi

## Tiêu chuẩn hoàn thành
- Biết debug cùng AI có phương pháp
- Không còn gửi lỗi quá thiếu dữ kiện
- Biết hỏi nguyên nhân gốc rễ
      `
    },
    {
      id: 'ai-06',
      title: 'Buổi 6: Refactor, review code, viết test và tối ưu với AI mà không lệ thuộc',
      level: 'intermediate',
      content: `
# Buổi 6: Refactor, review code, viết test và tối ưu với AI mà không lệ thuộc

## Mục tiêu
- Biết dùng AI để refactor code đã chạy được
- Biết nhờ AI review readability, performance, security, testability
- Biết nhờ AI viết test và edge cases
- Không dùng AI theo kiểu copy-paste vô thức

## Prompt 1 - Nhờ AI dạy cách hợp tác với AI sau khi code xong
\`\`\`
Hãy dạy tôi buổi 6 về cách dùng AI sau khi đã có code: refactor, review, test và tối ưu.

Tôi muốn bạn dạy theo cấu trúc:
1. Khi code đã chạy được, AI có thể hỗ trợ những việc gì tiếp theo?
2. Khi nào nên nhờ AI refactor?
3. Khi nào nên nhờ AI review code?
4. Khi nào nên nhờ AI nghĩ edge cases và viết test?
5. Khi nào nên nhờ AI phân tích hiệu suất?
6. Cho 5 ví dụ prompt thực tế:
   - refactor cho dễ đọc hơn
   - review theo 4 tiêu chí
   - viết unit test
   - tìm edge cases
   - phân tích re-render hoặc code thừa
7. Chỉ ra lỗi phổ biến:
   - refactor xong không kiểm tra hành vi
   - tin review của AI mù quáng
   - dùng test AI viết mà không hiểu
   - tối ưu quá sớm
8. Tạo checklist dùng AI sau khi code xong

Dạy như mentor đang giúp tôi dùng AI như reviewer sơ bộ có giá trị.
\`\`\`

## Prompt 2 - Nhờ AI luyện viết prompt review/refactor/test
\`\`\`
Tôi muốn luyện viết prompt cho 4 nhóm việc:
- refactor
- review
- test
- tối ưu hiệu suất

Hãy cho tôi 8 tình huống code khác nhau.
Với mỗi tình huống:
1. yêu cầu tôi chọn đang cần refactor, review, test hay tối ưu
2. yêu cầu tôi viết prompt phù hợp
3. yêu cầu tôi nói rõ mục tiêu và ràng buộc
4. sau đó bạn mới chữa
5. chỉ ra prompt của tôi đang thiếu điều gì
\`\`\`

## Prompt 3 - Nhờ AI review cách tôi cộng tác với AI trên code có sẵn
\`\`\`
Tôi sẽ gửi cho bạn một đoạn code và 3 prompt tôi định dùng để:
- review
- refactor
- viết test

Bạn hãy review:
1. Prompt nào đang tốt?
2. Prompt nào còn mơ hồ?
3. Tôi có đang giao quá nhiều quyền quyết định cho AI không?
4. Chỗ nào tôi nên tự suy nghĩ trước rồi mới hỏi AI?
5. Hãy tối ưu lại bộ prompt này cho tôi
\`\`\`

## Bài tập buổi này
- Tạo 4 template prompt cho:
  - refactor
  - review code
  - viết test
  - tối ưu hiệu suất
- Áp dụng mỗi template vào 1 đoạn code thật

## Tiêu chuẩn hoàn thành
- Biết AI hỗ trợ tốt sau khi code xong
- Biết review/refactor/test/tối ưu cùng AI
- Không lệ thuộc vào code AI đề xuất
      `
    },
    {
      id: 'ai-07',
      title: 'Buổi 7: Kiểm chứng đầu ra của AI - phát hiện hallucination, giả định sai và code không đáng tin',
      level: 'advanced',
      content: `
# Buổi 7: Kiểm chứng đầu ra của AI - phát hiện hallucination, giả định sai và code không đáng tin

## Mục tiêu
- Hiểu AI có thể sai, bịa hoặc đoán
- Biết kiểm chứng câu trả lời thay vì tin mù quáng
- Biết yêu cầu AI nêu giả định và giới hạn
- Hình thành checklist đọc lại code AI trước khi dùng

## Prompt 1 - Nhờ AI dạy verification mindset
\`\`\`
Hãy dạy tôi buổi 7 về cách kiểm chứng đầu ra của AI trong lập trình.

Tôi muốn bạn dạy theo cấu trúc:
1. Hallucination là gì trong ngữ cảnh AI hỗ trợ lập trình?
2. Vì sao AI dễ đoán khi thiếu ngữ cảnh?
3. Những dấu hiệu nào cho thấy câu trả lời AI có thể không đáng tin?
4. Những gì tôi cần kiểm tra trước khi dùng code AI:
   - API/thư viện có tồn tại không
   - logic có khớp yêu cầu không
   - code có chạy không
   - có vấn đề bảo mật không
   - có bug edge case rõ ràng không
5. Khi nào nên đối chiếu docs chính thức?
6. Cho 5 ví dụ tình huống AI trả lời “nghe hợp lý nhưng sai”
7. Chỉ ra lỗi phổ biến:
   - paste code vào dự án mà không đọc
   - tin thư viện/API không kiểm tra
   - không hỏi giả định
8. Tạo checklist kiểm chứng đầu ra AI

Dạy như mentor đang giúp tôi không bị AI “dắt đi sai”.
\`\`\`

## Prompt 2 - Nhờ AI luyện kiểm chứng câu trả lời
\`\`\`
Tôi muốn luyện kỹ năng kiểm chứng đầu ra AI.

Hãy cho tôi 8 câu trả lời giả định của AI trong lập trình.
Một số câu nên đúng, một số câu nên có lỗi tinh vi.

Với mỗi câu:
1. yêu cầu tôi chỉ ra chỗ nào cần nghi ngờ
2. yêu cầu tôi nói cách kiểm chứng
3. hỏi tôi nên hỏi lại AI như thế nào để ép nó tự rà lỗi
4. sau đó bạn mới chữa

Mục tiêu là để tôi có thói quen phản biện đầu ra thay vì chỉ nhận.
\`\`\`

## Prompt 3 - Nhờ AI review checklist kiểm chứng của tôi
\`\`\`
Tôi sẽ gửi cho bạn checklist tôi dùng trước khi paste code từ AI vào dự án.
Bạn hãy review:
1. Checklist có đủ thực dụng không?
2. Có bước nào quan trọng còn thiếu không?
3. Bước nào đang thừa hoặc quá lý thuyết?
4. Nếu tôi chỉ có 30 giây để kiểm tra, nên giữ 5 bước nào là bắt buộc?
5. Hãy tối ưu checklist đó cho tôi
\`\`\`

## Bài tập buổi này
- Tạo checklist “đọc lại code AI trước khi dùng”
- Tạo prompt yêu cầu AI nêu giả định và giới hạn
- Chọn 3 câu trả lời AI và tự kiểm chứng lại

## Tiêu chuẩn hoàn thành
- Không còn tin đầu ra AI một cách mù quáng
- Biết cách phản biện và kiểm chứng
- Có checklist kiểm tra trước khi dùng code
      `
    },
    {
      id: 'ai-08',
      title: 'Buổi 8: Bảo mật, quyền riêng tư và dữ liệu nào không nên đưa cho AI',
      level: 'advanced',
      content: `
# Buổi 8: Bảo mật, quyền riêng tư và dữ liệu nào không nên đưa cho AI

## Mục tiêu
- Hiểu không phải dữ liệu nào cũng nên gửi cho AI
- Biết tránh lộ token, API key, dữ liệu khách hàng, bí mật dự án
- Biết cách ẩn hoặc thay thế dữ liệu nhạy cảm trước khi hỏi

## Prompt 1 - Nhờ AI dạy safe usage mindset
\`\`\`
Hãy dạy tôi buổi 8 về bảo mật và quyền riêng tư khi làm việc với AI trong lập trình.

Tôi muốn bạn dạy theo cấu trúc:
1. Vì sao dùng AI cũng có rủi ro về bảo mật và riêng tư?
2. Những loại dữ liệu nào tuyệt đối không nên paste nguyên văn cho AI?
3. Vì sao token, API key, .env, dữ liệu khách hàng, thông tin nội bộ là rất nhạy cảm?
4. Nên thay thế hoặc ẩn dữ liệu nhạy cảm như thế nào?
5. Cho 6 ví dụ:
   - file .env
   - log có JWT
   - API response có email thật
   - config nội bộ
   - dữ liệu billing
   - thông tin user thật
6. Chỉ ra lỗi phổ biến:
   - paste nguyên file .env
   - paste token thật để debug
   - gửi dữ liệu người dùng thật mà không ẩn
7. Tạo checklist an toàn trước khi gửi code/log cho AI

Dạy như mentor đang bảo vệ tôi khỏi những lỗi bất cẩn rất nguy hiểm.
\`\`\`

## Prompt 2 - Nhờ AI luyện “sanitize trước khi hỏi”
\`\`\`
Tôi muốn luyện cách làm sạch dữ liệu trước khi gửi cho AI.

Hãy cho tôi 10 tình huống, ví dụ:
- log chứa email thật
- code có API key hard-coded
- error response có token
- screenshot có URL nội bộ
- request body có thông tin khách hàng
- file env bị paste nhầm
- JSON có số điện thoại
- header có authorization
- config chứa tên miền nội bộ
- file seed có dữ liệu thật

Với mỗi tình huống:
1. hỏi tôi dữ liệu nhạy cảm nằm ở đâu
2. hỏi tôi nên ẩn/thay thế nó thế nào
3. hỏi tôi phiên bản “safe to share” nên trông ra sao
4. sau đó bạn mới chữa
\`\`\`

## Prompt 3 - Nhờ AI review quy trình an toàn của tôi
\`\`\`
Tôi sẽ gửi cho bạn checklist hoặc quy trình tôi dùng trước khi hỏi AI về code/log.
Bạn hãy review:
1. Có dữ liệu nhạy cảm nào tôi đang quên bảo vệ không?
2. Checklist có đủ thực tế không?
3. Nếu tôi đang làm trong dự án khách hàng, tôi cần cẩn thận điểm nào hơn?
4. 5 loại dữ liệu nào tôi phải luôn kiểm tra đầu tiên?
5. Hãy tối ưu quy trình này cho tôi
\`\`\`

## Bài tập buổi này
- Tạo checklist an toàn trước khi gửi code/log cho AI
- Viết lại 5 prompt chứa dữ liệu nhạy cảm thành phiên bản an toàn hơn
- Tạo quy tắc cá nhân về “safe to share”

## Tiêu chuẩn hoàn thành
- Hiểu rủi ro bảo mật khi dùng AI
- Biết ẩn dữ liệu nhạy cảm
- Có checklist an toàn riêng
      `
    },
    {
      id: 'ai-09',
      title: 'Buổi 9: Học cùng AI mà không lệ thuộc - tư duy tự làm trước, hỏi sau, tự kiểm chứng lại',
      level: 'advanced',
      content: `
# Buổi 9: Học cùng AI mà không lệ thuộc - tư duy tự làm trước, hỏi sau, tự kiểm chứng lại

## Mục tiêu
- Biết dùng AI để học nhanh mà không mất tư duy
- Biết khi nào nên tự thử trước
- Nhận ra dấu hiệu lệ thuộc AI
- Xây thói quen học chủ động hơn

## Prompt 1 - Nhờ AI dạy anti-dependence mindset
\`\`\`
Hãy dạy tôi buổi 9 về cách học cùng AI mà không bị lệ thuộc.

Tôi muốn bạn dạy theo cấu trúc:
1. Lệ thuộc AI trong lập trình thường biểu hiện như thế nào?
2. Vì sao copy-paste không hiểu là rất nguy hiểm?
3. Một quy trình học tốt cùng AI nên gồm những bước nào?
4. Vì sao nên:
   - tự nghĩ trước
   - tự thử trước
   - hỏi sau
   - đọc lại
   - giải thích lại
5. Khi nào nên hỏi AI ngay?
6. Khi nào nên tự vật lộn thêm một chút trước?
7. Cho 5 ví dụ:
   - học khái niệm
   - sửa bug
   - làm bài thuật toán
   - refactor component
   - học framework mới
8. Chỉ ra lỗi phổ biến:
   - hỏi AI trước cả khi chưa đọc đề
   - paste code xong không hiểu
   - không bao giờ tự viết lại bằng lời mình
9. Tạo checklist “học cùng AI mà vẫn giữ tư duy”

Dạy như mentor đang giúp tôi dùng AI để mạnh lên chứ không yếu đi.
\`\`\`

## Prompt 2 - Nhờ AI luyện self-first workflow
\`\`\`
Tôi muốn luyện workflow tự làm trước, hỏi sau.

Hãy cho tôi 8 tình huống học/làm code, ví dụ:
- hiểu Promise
- sửa bug React
- viết form validation
- refactor một hàm
- học Next.js routing
- xử lý API typing
- viết test
- tối ưu component

Với mỗi tình huống:
1. hỏi tôi tôi nên tự làm gì trước khi hỏi AI
2. hỏi tôi nên ghi lại những gì trước khi hỏi
3. hỏi tôi sau khi nhận câu trả lời thì nên kiểm chứng thế nào
4. sau đó bạn mới chữa
\`\`\`

## Prompt 3 - Nhờ AI review mức độ lệ thuộc AI của tôi
\`\`\`
Tôi sẽ mô tả cách tôi thường dùng AI khi học code.
Bạn hãy review:
1. Tôi có dấu hiệu lệ thuộc AI ở đâu?
2. Chỗ nào tôi đang dùng AI đúng cách?
3. Tôi nên thêm bước nào để giữ tư duy chủ động?
4. Nếu chỉ giữ 5 nguyên tắc quan trọng nhất khi học cùng AI, đó là gì?
5. Hãy giúp tôi viết một “quy ước cá nhân” khi dùng AI
\`\`\`

## Bài tập buổi này
- Viết quy trình 5 bước trước khi hỏi AI
- Liệt kê 5 dấu hiệu lệ thuộc AI
- Viết “quy ước cá nhân” khi học code cùng AI

## Tiêu chuẩn hoàn thành
- Nhận ra AI có thể làm mình yếu đi nếu dùng sai
- Biết tự làm trước rồi mới hỏi
- Có bộ nguyên tắc cá nhân khi học cùng AI
      `
    },
    {
      id: 'ai-10',
      title: 'Buổi 10: Project cuối khóa - xây workflow làm việc với AI hằng ngày như một pair programmer có trách nhiệm',
      level: 'advanced',
      content: `
# Buổi 10: Project cuối khóa - xây workflow làm việc với AI hằng ngày như một pair programmer có trách nhiệm

## Mục tiêu
- Tổng hợp toàn bộ kỹ năng làm việc cùng AI đã học
- Xây workflow cá nhân để học, code, debug, review cùng AI
- Tự đánh giá mức độ làm chủ AI trong lập trình
- Biết dùng AI có chiến lược thay vì hỏi ngẫu hứng

## Prompt 1 - Nhờ AI dẫn tôi thiết kế workflow cá nhân
\`\`\`
Hãy đóng vai mentor AI-for-coding và dẫn tôi xây workflow dùng AI hằng ngày.

Tôi muốn bạn giúp tôi thiết kế một workflow cá nhân cho các nhóm việc:
1. học khái niệm mới
2. debug lỗi
3. refactor code
4. review code
5. viết test
6. viết tài liệu
7. kiểm chứng đầu ra AI
8. bảo vệ dữ liệu nhạy cảm

Hãy dẫn tôi theo lộ trình:
1. xác định mục tiêu dùng AI của tôi
2. xác định rủi ro lớn nhất khi tôi dùng AI
3. thiết kế template prompt cho từng nhóm việc
4. thiết kế checklist kiểm chứng đầu ra
5. thiết kế checklist an toàn dữ liệu
6. thiết kế nguyên tắc tránh lệ thuộc
7. giúp tôi ghép tất cả thành workflow hoàn chỉnh
8. sau mỗi phần, review như mentor thật sự

Mục tiêu là để tôi có một hệ thống làm việc với AI, không chỉ vài mẹo lẻ tẻ.
\`\`\`

## Prompt 2 - Nhờ AI audit workflow AI của tôi
\`\`\`
Tôi sẽ gửi cho bạn workflow dùng AI của tôi:
- cách tôi học
- cách tôi debug
- cách tôi review code
- cách tôi kiểm chứng đầu ra
- cách tôi bảo vệ dữ liệu

Bạn hãy audit như mentor kỹ tính.

Đánh giá theo 8 nhóm tiêu chí:
1. Cách tôi đặt câu hỏi
2. Mức độ đủ ngữ cảnh
3. Chất lượng template prompt
4. Khả năng kiểm chứng đầu ra
5. Khả năng tránh lệ thuộc
6. Mức độ an toàn dữ liệu
7. Tính thực dụng hằng ngày
8. Mức độ trưởng thành khi dùng AI như pair programmer

Với mỗi nhóm:
- nêu điểm tốt
- nêu lỗi cụ thể
- giải thích vì sao là lỗi
- cho hướng sửa cụ thể
- ưu tiên lỗi nghiêm trọng trước

Cuối cùng:
- chấm điểm tổng trên thang 100
- xếp loại: yếu / ổn / tốt / rất tốt
- cho tôi 5 nguyên tắc dùng AI cần giữ lâu dài
\`\`\`

## Prompt 3 - Nhờ AI đóng vai reviewer cuối khóa
\`\`\`
Hãy đóng vai reviewer cuối khóa về Tư duy sử dụng AI trong lập trình.

Tôi sẽ gửi cho bạn:
- bộ prompt template của tôi
- quy trình làm việc với AI của tôi
- checklist kiểm chứng của tôi
- checklist an toàn dữ liệu của tôi

Bạn phải review như thật, không nể nang.

Cách review mong muốn:
- đánh giá cách tôi giao tiếp với AI
- đánh giá cách tôi dùng AI để học/code/debug
- đánh giá khả năng phản biện đầu ra
- đánh giá khả năng tự giữ tư duy độc lập
- đánh giá mức độ an toàn khi chia sẻ dữ liệu
- chỉ rõ điểm nào chứng tỏ tôi đã hiểu cách dùng AI đúng
- chỉ rõ điểm nào cho thấy tôi vẫn đang dùng AI theo kiểu cảm tính

Cuối cùng, hãy nói thật:
- tôi đã đủ nền tảng để dùng AI hiệu quả trong học tập và dự án thật chưa?
- nếu chưa, tôi cần luyện thêm phần nào?
\`\`\`

## Gợi ý project
Chọn 1 trong các hướng:
1. Dùng AI hỗ trợ làm một mini app từ đầu đến cuối
2. Dùng AI để debug và refactor một project cũ
3. Dùng AI để học một công nghệ mới trong 3 ngày
4. Dùng AI để viết test, review và tài liệu cho một app nhỏ

## Yêu cầu bắt buộc
- Có ít nhất 4 template prompt cho các nhóm việc khác nhau
- Có checklist kiểm chứng đầu ra AI
- Có checklist an toàn dữ liệu
- Có nguyên tắc tránh lệ thuộc AI
- Có ghi lại ít nhất 3 lần AI trả lời chưa tốt và cách bạn cải thiện prompt
- Có phần tự đánh giá workflow của bạn

## Checklist tự đánh giá
- Tôi có đưa đủ ngữ cảnh khi hỏi không?
- Tôi có hỏi đúng mục tiêu không?
- Tôi có kiểm chứng đầu ra của AI không?
- Tôi có đang giữ quyền kiểm soát tư duy không?
- Tôi có bảo vệ dữ liệu nhạy cảm trước khi gửi không?
- Tôi có workflow ổn định hay vẫn hỏi ngẫu hứng?
- Tôi có thể giải thích vì sao từng template prompt của tôi tồn tại không?

## Bài tập cuối khóa
- Chọn một project thật hoặc mini app
- Dùng AI xuyên suốt theo workflow của bạn
- Ghi lại:
  - prompt nào hiệu quả nhất
  - prompt nào thất bại và vì sao
  - AI giúp tốt nhất ở khâu nào
  - chỗ nào bạn vẫn phải tự quyết định
- Tự audit workflow bằng các prompt trên
- Hoàn thiện bộ workflow final của bạn
      `
    }
  ]
};