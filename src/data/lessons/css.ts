import { Lesson } from '../../types';

export const cssLesson: Lesson = {
  id: 'css-mastery',
  icon: 'zap',
  title: 'CSS',
  description:
    'Lộ trình CSS theo phong cách tự học cùng AI mentor. Mỗi buổi học đi kèm prompt cực chi tiết để học viên chỉ cần copy vào AI là có thể học sâu, làm bài, được chữa lỗi, được phản biện và nâng cấp tư duy thiết kế giao diện như học cùng mentor 1-1.',
  points: [
    'Mỗi buổi có prompt chi tiết để copy vào AI và học ngay',
    'AI đóng vai mentor CSS, không chỉ giải thích cú pháp mà còn sửa tư duy làm giao diện',
    'Có prompt học lý thuyết, prompt làm bài, prompt review và prompt nâng cấp',
    'Tập trung vào năng lực thật: viết CSS sạch, bố cục tốt, spacing ổn, responsive chuẩn',
    'Học viên học theo project xuyên suốt thay vì các bài rời rạc',
    'Học xong có thể tự style một trang web hoàn chỉnh và tự audit CSS của mình'
  ],
  chapters: [
    {
      id: 'css-01',
      title: 'Buổi 1: Hiểu CSS từ gốc và kết nối CSS với HTML',
      level: 'beginner',
      content: `
# Buổi 1: Hiểu CSS từ gốc và kết nối CSS với HTML

## Mục tiêu
- Hiểu CSS là gì và vai trò thật sự của CSS
- Phân biệt rõ HTML và CSS
- Biết 3 cách thêm CSS vào trang web
- Biết vì sao trong thực tế nên ưu tiên external CSS

## Cách học buổi này
Bạn sẽ copy từng prompt bên dưới vào AI theo đúng thứ tự.
Không học lướt. Sau mỗi prompt phải tự làm một đoạn code ngắn.

## Prompt 1 - Nhờ AI dạy lý thuyết từ gốc
\`\`\`
Bạn hãy đóng vai một mentor Front-end cực giỏi, chuyên dạy người mới học CSS từ con số 0.

Hôm nay hãy dạy tôi buổi đầu tiên về CSS theo phong cách:
- giải thích cực dễ hiểu nhưng không hời hợt
- đi từ bản chất, không chỉ định nghĩa
- luôn nói vì sao phải học phần này
- luôn gắn với ví dụ thực tế
- không dùng thuật ngữ khó nếu chưa giải thích

Chủ đề hôm nay:
- CSS là gì?
- CSS dùng để làm gì?
- CSS khác HTML ở đâu?
- CSS hoạt động như thế nào trên trình duyệt?
- 3 cách thêm CSS vào HTML:
  - inline CSS
  - internal CSS
  - external CSS
- vì sao external CSS là cách nên dùng trong thực tế

Tôi muốn bạn dạy theo format sau:
1. CSS là gì?
2. Vì sao website cần CSS?
3. Phân biệt HTML và CSS thật rõ
4. Trình duyệt áp dụng CSS lên HTML như thế nào?
5. Giải thích 3 cách thêm CSS với ví dụ cụ thể
6. So sánh ưu và nhược điểm của từng cách
7. Chỉ ra 8 lỗi sai phổ biến của người mới
8. Đặt cho tôi 5 câu hỏi kiểm tra hiểu bài
9. Sau khi tôi trả lời, bạn phải chấm và sửa thật kỹ

Lưu ý:
- Dùng tiếng Việt
- Không trả lời quá ngắn
- Giải thích theo kiểu mentor đang ngồi cạnh tôi
\`\`\`

## Prompt 2 - Nhờ AI hướng dẫn thực hành
\`\`\`
Tôi đang học CSS buổi 1. Hãy đóng vai mentor thực hành và hướng dẫn tôi kết nối CSS với HTML.

Tôi muốn bạn hướng dẫn theo cách sau:
1. Bảo tôi cần tạo những file gì
2. Viết cho tôi ví dụ HTML và file style.css cơ bản
3. Giải thích từng dòng code
4. Giao cho tôi một nhiệm vụ nhỏ:
   - đổi màu tiêu đề
   - đổi màu đoạn văn
   - đổi màu nền của một khối
5. Sau đó yêu cầu tôi tự gõ lại code bằng tay
6. Tiếp theo, bạn yêu cầu tôi gửi code lên để bạn review
7. Khi review, bạn phải chỉ ra:
   - lỗi kết nối file CSS
   - lỗi cú pháp CSS
   - phần nào đúng
   - phần nào có thể viết gọn hơn

Hãy bắt đầu như một mentor đang dạy người mới thật sự.
\`\`\`

## Prompt 3 - Nhờ AI kiểm tra hiểu bài
\`\`\`
Hãy kiểm tra xem tôi đã thật sự hiểu CSS buổi 1 chưa.

Tôi muốn có:
- 3 câu hỏi trắc nghiệm có giải thích đáp án
- 3 câu hỏi tự luận ngắn
- 2 bài tập code nhỏ
- 1 câu hỏi tư duy: vì sao trong dự án thật người ta thường tách CSS ra file riêng?

Sau khi tôi trả lời, bạn hãy:
- chấm điểm từng câu
- giải thích chỗ sai
- nói tôi đang ở mức nào: chưa hiểu / hiểu cơ bản / hiểu chắc
\`\`\`

## Bài tập buổi này
1. Tạo file \`index.html\` và \`style.css\`
2. Kết nối 2 file với nhau
3. Đổi màu tiêu đề
4. Đổi màu đoạn văn
5. Tạo 1 khối có nền màu khác

## Tiêu chuẩn hoàn thành
- CSS được kết nối đúng
- Có thể thay đổi giao diện từ file CSS
- Hiểu vì sao nên dùng external CSS
      `
    },
    {
      id: 'css-02',
      title: 'Buổi 2: Cú pháp CSS, selector và cách chọn đúng phần tử',
      level: 'beginner',
      content: `
# Buổi 2: Cú pháp CSS, selector và cách chọn đúng phần tử

## Mục tiêu
- Hiểu cấu trúc một rule CSS
- Biết selector là gì
- Dùng được selector theo thẻ, class, id
- Bắt đầu có tư duy chọn phần tử đúng mục đích

## Prompt 1 - Nhờ AI dạy sâu về selector
\`\`\`
Bạn hãy đóng vai mentor Front-end dạy tôi CSS buổi 2.

Chủ đề hôm nay là:
- cú pháp CSS
- selector
- property
- value
- selector theo thẻ
- selector theo class
- selector theo id

Tôi muốn bạn dạy cực rõ theo format sau:
1. Một rule CSS gồm những phần nào?
2. Selector là gì?
3. Property là gì?
4. Value là gì?
5. So sánh thật rõ:
   - chọn theo thẻ
   - chọn theo class
   - chọn theo id
6. Khi nào nên dùng class, khi nào không nên lạm dụng id?
7. Cho nhiều ví dụ từ dễ đến vừa
8. Chỉ ra lỗi sai người mới thường mắc khi dùng selector
9. Cho tôi 5 bài tập phân tích code CSS
10. Sau cùng, tóm tắt thành checklist: chọn selector nào trong tình huống nào

Dạy sâu nhưng dễ hiểu, không giảng hời hợt.
\`\`\`

## Prompt 2 - Nhờ AI huấn luyện tư duy chọn selector
\`\`\`
Tôi muốn luyện tư duy chọn selector trong CSS.

Hãy cho tôi 10 tình huống nhỏ, ví dụ:
- đổi màu tất cả tiêu đề
- đổi style cho 2 thẻ giống nhau
- style cho 1 phần tử duy nhất
- tránh viết CSS quá cứng

Mỗi tình huống:
1. hỏi tôi nên dùng selector nào
2. yêu cầu tôi giải thích vì sao
3. chờ tôi trả lời
4. sau đó bạn mới chữa
5. nếu tôi chọn sai, bạn phải giải thích kỹ vì sao sai

Hãy đóng vai mentor nghiêm khắc nhưng dễ hiểu.
\`\`\`

## Prompt 3 - Nhờ AI giao bài tập thực hành
\`\`\`
Hãy giao cho tôi bài tập CSS buổi 2 theo kiểu thực hành.

Yêu cầu:
1. Tạo 1 tiêu đề, 2 đoạn văn, 1 nút
2. Dùng selector theo thẻ để style tiêu đề
3. Dùng class để style 2 đoạn văn
4. Dùng id để style một phần tử riêng
5. Sau khi tôi làm xong, bạn review từng rule CSS cực chi tiết:
   - rule nào đúng
   - rule nào sai
   - selector có hợp lý không
   - có cách nào viết tốt hơn không

Review như mentor thật, không nói chung chung.
\`\`\`

## Bài tập buổi này
- Tạo một trang nhỏ có nhiều phần tử
- Style chúng bằng selector hợp lý
- Giải thích vì sao bạn chọn selector đó

## Tiêu chuẩn hoàn thành
- Hiểu cấu trúc một rule CSS
- Không nhầm class và id
- Biết chọn selector phù hợp thay vì chọn bừa
      `
    },
    {
      id: 'css-03',
      title: 'Buổi 3: Màu sắc, nền, chữ và cách làm giao diện dễ đọc',
      level: 'beginner',
      content: `
# Buổi 3: Màu sắc, nền, chữ và cách làm giao diện dễ đọc

## Mục tiêu
- Dùng được màu chữ và màu nền
- Biết cách chỉnh font, cỡ chữ, line-height, căn lề
- Hiểu CSS không chỉ là “đổi màu”, mà là làm giao diện dễ đọc hơn
- Tạo được một khối nội dung nhìn ổn

## Prompt 1 - Nhờ AI dạy tư duy trình bày
\`\`\`
Hãy đóng vai mentor Front-end dạy tôi CSS buổi 3.

Chủ đề:
- color
- background-color
- màu theo tên, hex, rgb
- font-size
- font-family
- font-weight
- line-height
- text-align
- text-transform
- text-decoration

Tôi không muốn học kiểu liệt kê thuộc tính.
Tôi muốn học theo tư duy trình bày nội dung cho dễ đọc.

Hãy dạy theo cấu trúc:
1. Vì sao màu sắc và typography ảnh hưởng mạnh đến trải nghiệm đọc?
2. Phân biệt màu chữ và màu nền
3. Khi nào nên tăng font-size, khi nào nên tăng line-height?
4. Vì sao line-height quan trọng với đoạn văn?
5. Khi nào nên căn giữa, khi nào không nên?
6. Giải thích các lỗi phổ biến khiến giao diện nhìn non và khó đọc
7. Cho tôi 3 ví dụ:
   - một đoạn text xấu
   - một đoạn text tạm ổn
   - một đoạn text tốt
8. Phân tích từng ví dụ thật kỹ
9. Cuối cùng cho tôi checklist để tự đánh giá một block text

Dạy thật thực chiến như mentor review UI.
\`\`\`

## Prompt 2 - Nhờ AI giao bài tập trình bày nội dung
\`\`\`
Hãy giao cho tôi một bài tập CSS buổi 3.

Bối cảnh:
Tôi cần style một bài giới thiệu bản thân ngắn để nhìn dễ đọc và có phân cấp.

Yêu cầu:
- có tiêu đề
- có phụ đề
- có đoạn văn
- có một khối nền nhẹ
- có nút hoặc link nổi bật

Tôi muốn bạn:
1. đưa đề bài rõ ràng
2. không cho đáp án ngay
3. yêu cầu tôi tự style
4. khi tôi gửi code, review theo các tiêu chí:
   - dễ đọc chưa
   - màu có ổn không
   - line-height có hợp lý không
   - font-size có phân cấp không
   - có gì nhìn “non tay” không
5. yêu cầu tôi sửa lại phiên bản 2
\`\`\`

## Prompt 3 - Nhờ AI phản biện thiết kế của tôi
\`\`\`
Tôi sẽ gửi cho bạn HTML + CSS của một đoạn nội dung.
Bạn hãy review như một mentor UI cơ bản.

Đánh giá theo 5 tiêu chí:
1. Phân cấp chữ
2. Màu sắc
3. Khoảng thở
4. Khả năng đọc
5. Mức độ chuyên nghiệp

Không được review chung chung.
Phải chỉ ra cụ thể:
- phần nào ổn
- phần nào chưa ổn
- vì sao
- sửa như thế nào
\`\`\`

## Bài tập buổi này
- Style một block giới thiệu bản thân
- Làm cho nó nhìn sạch, dễ đọc và có phân cấp rõ

## Tiêu chuẩn hoàn thành
- Chữ dễ đọc
- Màu nền và màu chữ không bị gắt
- Có phân cấp rõ giữa tiêu đề, phụ đề, nội dung
      `
    },
    {
      id: 'css-04',
      title: 'Buổi 4: Box model, kích thước và khoảng cách chuẩn',
      level: 'beginner',
      content: `
# Buổi 4: Box model, kích thước và khoảng cách chuẩn

## Mục tiêu
- Hiểu box model thật chắc
- Phân biệt content, padding, border, margin
- Hiểu width, height, max-width, box-sizing
- Biết tạo spacing hợp lý thay vì chỉnh cảm tính

## Prompt 1 - Nhờ AI dạy box model như nền tảng cốt lõi
\`\`\`
Hãy dạy tôi CSS buổi 4 về box model thật sâu.

Chủ đề:
- content
- padding
- border
- margin
- width
- height
- max-width
- min-height
- box-sizing: border-box

Tôi muốn bạn dạy theo kiểu:
1. Giải thích mọi phần tử trong CSS đều là một cái hộp
2. Vẽ bằng lời thật rõ box model
3. Phân biệt content, padding, border, margin
4. Giải thích vì sao người mới rất hay rối phần spacing
5. Giải thích width và box-sizing liên quan với nhau thế nào
6. Cho ví dụ một box bị “to hơn dự kiến” và phân tích nguyên nhân
7. Dạy tôi cách suy nghĩ về khoảng cách:
   - khoảng cách bên trong
   - khoảng cách bên ngoài
8. Cho 10 lỗi sai phổ biến khi dùng margin/padding
9. Tóm tắt bằng checklist quyết định nhanh

Dạy như mentor đang sửa tận gốc tư duy CSS cho junior.
\`\`\`

## Prompt 2 - Nhờ AI giao bài thực hành spacing
\`\`\`
Hãy giao cho tôi 3 bài tập CSS về box model.

Bài tập nên tăng dần độ khó:
1. Tạo một box có padding, border, margin
2. Tạo 2 card có khoảng cách đều nhau
3. Tạo một card width cố định nhưng không bị vỡ layout khi tăng padding

Tôi muốn bạn:
- không cho đáp án ngay
- để tôi tự code
- khi tôi gửi code, review kỹ:
  - padding dùng có hợp lý không
  - margin có đang chữa cháy không
  - width có bị hiểu sai không
  - box-sizing có nên dùng không
  - layout có sạch không
\`\`\`

## Prompt 3 - Nhờ AI audit spacing của tôi
\`\`\`
Tôi sẽ gửi code CSS của tôi.
Bạn hãy chỉ tập trung audit về box model và spacing.

Đánh giá theo:
1. Box model có đúng hiểu không?
2. Padding và margin có đang dùng lẫn lộn không?
3. Khoảng cách có đều không?
4. Có chỗ nào đang chỉnh bằng cảm tính gây rối không?
5. Cấu trúc spacing có đủ sạch để scale tiếp không?

Hãy review thật kỹ như một mentor UI.
\`\`\`

## Bài tập buổi này
- Tạo 3 card xếp dọc
- Mỗi card có padding, border, margin hợp lý
- Có cùng width và không bị vỡ layout

## Tiêu chuẩn hoàn thành
- Hiểu rõ padding và margin
- Không bị lỗi width do box model
- Khoảng cách nhìn đều và có chủ đích
      `
    },
    {
      id: 'css-05',
      title: 'Buổi 5: Display, position và cách điều khiển phần tử trên trang',
      level: 'intermediate',
      content: `
# Buổi 5: Display, position và cách điều khiển phần tử trên trang

## Mục tiêu
- Hiểu block, inline, inline-block, none
- Hiểu position: relative, absolute, fixed, sticky
- Biết khi nào nên dùng display, khi nào nên dùng position
- Dựng được một số pattern UI cơ bản

## Prompt 1 - Nhờ AI dạy tư duy hiển thị và định vị
\`\`\`
Hãy dạy tôi CSS buổi 5 như một mentor Front-end.

Chủ đề:
- display: block
- display: inline
- display: inline-block
- display: none
- position: static
- position: relative
- position: absolute
- position: fixed
- position: sticky
- top, right, bottom, left

Tôi muốn học theo tư duy, không chỉ học thuộc.

Hãy dạy theo cấu trúc:
1. Display quyết định điều gì?
2. Position quyết định điều gì?
3. Khi nào dùng display để giải quyết vấn đề?
4. Khi nào dùng position?
5. Phân biệt thật rõ block, inline, inline-block
6. Phân biệt thật rõ relative và absolute
7. Giải thích absolute bám vào đâu
8. Giải thích fixed và sticky khác nhau thế nào
9. Cho 5 ví dụ UI thực tế:
   - menu ngang
   - badge góc card
   - nút chat góc màn hình
   - thanh sticky
   - phần tử ẩn hiện
10. Liệt kê lỗi sai phổ biến và cách tránh

Hãy dạy như một mentor chuyên bắt lỗi layout của junior.
\`\`\`

## Prompt 2 - Nhờ AI giao bài tập UI nhỏ
\`\`\`
Hãy giao cho tôi các bài tập thực hành CSS buổi 5:
1. biến một link thành block
2. tạo 3 nút nằm ngang
3. tạo badge nằm ở góc của card
4. tạo nút cố định ở góc màn hình
5. tạo thanh menu sticky

Tôi muốn bạn:
- cho đề rõ ràng
- không đưa đáp án ngay
- đợi tôi làm
- review từng bài thật kỹ:
  - đang sai ở display hay position?
  - phần tử bám sai chỗ vì sao?
  - có đang lạm dụng absolute không?
  - có cách nào bố cục sạch hơn không?
\`\`\`

## Prompt 3 - Nhờ AI phản biện layout của tôi
\`\`\`
Tôi sẽ gửi cho bạn HTML + CSS.
Bạn hãy review dưới góc nhìn điều khiển hiển thị và định vị phần tử.

Trả lời giúp tôi:
- chỗ nào nên dùng display
- chỗ nào nên dùng position
- chỗ nào đang lạm dụng absolute
- chỗ nào có thể gây khó maintain
- cách viết nào ổn hơn về lâu dài

Review cụ thể, có giải thích, không nói chung chung.
\`\`\`

## Bài tập buổi này
- Tạo một card có badge góc trên
- Tạo một menu ngang
- Tạo một nút fixed ở góc màn hình

## Tiêu chuẩn hoàn thành
- Hiểu khi nào dùng display, khi nào dùng position
- Không dùng absolute bừa bãi
- Các pattern UI hoạt động đúng
      `
    },
    {
      id: 'css-06',
      title: 'Buổi 6: Flexbox và căn chỉnh layout hiện đại',
      level: 'intermediate',
      content: `
# Buổi 6: Flexbox và căn chỉnh layout hiện đại

## Mục tiêu
- Hiểu Flexbox dùng để làm gì
- Nắm container và item
- Biết justify-content, align-items, gap, flex-wrap
- Dùng Flexbox để giải bài toán layout thật

## Prompt 1 - Nhờ AI dạy Flexbox thật bản chất
\`\`\`
Hãy dạy tôi CSS buổi 6 về Flexbox thật sâu nhưng dễ hiểu.

Tôi muốn hiểu:
- vì sao Flexbox ra đời
- nó giải quyết vấn đề gì
- container và item là gì
- trục chính và trục phụ là gì
- justify-content hoạt động thế nào
- align-items hoạt động thế nào
- gap, flex-wrap, flex-direction dùng khi nào
- flex-grow, flex-shrink, flex-basis là gì ở mức dễ hiểu

Hãy dạy theo cấu trúc:
1. Vấn đề trước khi có Flexbox
2. Flexbox dùng tốt trong loại layout nào
3. Giải thích từng khái niệm bằng ví dụ đời thường
4. Cho các ví dụ UI thực tế:
   - menu ngang
   - cụm nút
   - card list
   - hero section có 2 cột
5. Chỉ ra lỗi người mới hay gặp khi học Flexbox
6. Tóm tắt thành checklist chẩn đoán lỗi

Dạy như mentor rất giỏi layout.
\`\`\`

## Prompt 2 - Nhờ AI giao bài tập Flexbox
\`\`\`
Hãy giao cho tôi 4 bài tập Flexbox theo thứ tự từ dễ đến khó:
1. 3 box nằm ngang và căn giữa
2. menu có logo bên trái và nav bên phải
3. danh sách card có khoảng cách đều
4. card list có thể xuống hàng

Tôi muốn bạn:
- không cho đáp án ngay
- để tôi tự code
- khi tôi gửi code, review:
  - container đã đặt đúng chưa
  - justify-content có hợp lý không
  - align-items có đang dùng nhầm không
  - gap đã tốt chưa
  - flex-wrap có cần không
- nếu tôi sai, phải giải thích bằng hình dung đơn giản
\`\`\`

## Prompt 3 - Nhờ AI sửa tư duy layout
\`\`\`
Tôi sẽ gửi cho bạn code layout Flexbox của tôi.
Bạn hãy review như mentor chuyên sửa layout.

Đánh giá theo:
1. Có hiểu đúng trục chính và trục phụ không?
2. Đang căn chỉnh bằng Flexbox hay đang chữa cháy?
3. Spacing giữa các item có ổn không?
4. Layout có đủ linh hoạt khi thêm bớt item không?
5. Có cách nào viết gọn và dễ maintain hơn không?

Cuối cùng, hãy chỉ ra 3 bài học lớn tôi cần rút ra từ layout này.
\`\`\`

## Bài tập buổi này
- Tạo menu ngang
- Tạo cụm 3 card bằng Flexbox
- Tạo layout 2 cột đơn giản

## Tiêu chuẩn hoàn thành
- Dùng Flexbox đúng mục đích
- Căn chỉnh không còn mò mẫm
- Layout gọn, sạch, dễ mở rộng
      `
    },
    {
      id: 'css-07',
      title: 'Buổi 7: Grid và cách xây bố cục nhiều hàng nhiều cột',
      level: 'intermediate',
      content: `
# Buổi 7: Grid và cách xây bố cục nhiều hàng nhiều cột

## Mục tiêu
- Hiểu khi nào dùng Grid thay vì Flexbox
- Biết tạo layout nhiều cột
- Dùng được repeat, gap, grid-column, grid-row, areas
- Xây được các layout thực tế

## Prompt 1 - Nhờ AI dạy Grid bằng so sánh với Flexbox
\`\`\`
Hãy dạy tôi CSS buổi 7 về Grid theo cách dễ hiểu nhất.

Tôi muốn bạn tập trung vào:
- Grid là gì?
- Grid khác Flexbox ở đâu?
- Khi nào nên dùng Grid?
- display: grid
- grid-template-columns
- grid-template-rows
- gap
- repeat()
- grid-column
- grid-row
- grid-template-areas

Hãy dạy theo cấu trúc:
1. Bài toán nào Grid giải quyết tốt hơn Flexbox?
2. Giải thích Grid như một hệ thống hàng và cột
3. Cho ví dụ cực dễ trước, rồi tăng dần
4. Cho ví dụ thực tế:
   - gallery ảnh
   - layout 2 cột content/sidebar
   - dashboard cơ bản
5. Chỉ ra lỗi phổ biến người mới hay mắc
6. Tóm tắt bằng checklist chọn giữa Flexbox và Grid

Dạy như mentor layout rất mạnh.
\`\`\`

## Prompt 2 - Nhờ AI giao bài tập Grid
\`\`\`
Hãy giao cho tôi 4 bài tập Grid theo độ khó tăng dần:
1. lưới 3 cột đơn giản
2. gallery ảnh
3. layout 2 cột main + sidebar
4. layout dashboard có header, sidebar, main, footer

Tôi muốn bạn:
- không cho đáp án ngay
- để tôi tự làm
- review thật kỹ khi tôi gửi code:
  - cột và hàng đã hợp lý chưa
  - dùng Grid có đúng bài toán không
  - có lạm dụng Grid ở chỗ không cần không
  - có cách nào sạch hơn không
\`\`\`

## Prompt 3 - Nhờ AI phản biện lựa chọn layout của tôi
\`\`\`
Tôi sẽ gửi code HTML + CSS cho một layout.
Bạn hãy giúp tôi phân tích:
- chỗ này nên dùng Grid hay Flexbox?
- vì sao?
- lựa chọn hiện tại của tôi có hợp lý không?
- nếu đổi sang cách khác thì lợi/hại thế nào?
- layout này có dễ maintain không?

Tôi muốn được học tư duy chọn công cụ đúng, không chỉ học thuộc cú pháp.
\`\`\`

## Bài tập buổi này
- Tạo gallery ảnh bằng Grid
- Tạo layout 2 cột
- Tạo dashboard đơn giản bằng Grid

## Tiêu chuẩn hoàn thành
- Hiểu Grid dùng khi nào
- Tạo được layout nhiều cột rõ ràng
- Không nhầm Grid với Flexbox
      `
    },
    {
      id: 'css-08',
      title: 'Buổi 8: Responsive Design và cách làm giao diện thích nghi',
      level: 'advanced',
      content: `
# Buổi 8: Responsive Design và cách làm giao diện thích nghi

## Mục tiêu
- Hiểu responsive design là gì
- Biết mobile-first là gì
- Dùng được media queries
- Biết điều chỉnh layout, font, spacing theo màn hình

## Prompt 1 - Nhờ AI dạy responsive từ bản chất
\`\`\`
Hãy dạy tôi CSS buổi 8 về Responsive Design như một mentor Front-end thực chiến.

Tôi muốn hiểu:
- responsive design là gì
- vì sao website hiện đại bắt buộc phải responsive
- mobile-first là gì
- media query là gì
- min-width và max-width khác nhau ra sao
- đơn vị %, rem, vw, vh nên hiểu thế nào ở mức người mới

Hãy dạy theo cấu trúc:
1. Vì sao layout đẹp trên desktop chưa chắc đẹp trên mobile?
2. Tư duy mobile-first là gì?
3. Khi nào dùng media query?
4. Ví dụ thay đổi:
   - số cột
   - kích thước chữ
   - khoảng cách
   - menu
5. Chỉ ra lỗi phổ biến khi học responsive
6. Tạo cho tôi 1 checklist responsive cơ bản

Dạy thật thực chiến, gắn với project thật.
\`\`\`

## Prompt 2 - Nhờ AI giao bài responsive
\`\`\`
Hãy giao cho tôi 3 bài tập responsive:
1. layout 1 cột trên mobile, 3 cột trên desktop
2. giảm cỡ chữ và spacing trên màn hình nhỏ
3. menu đổi từ dọc sang ngang hoặc ngược lại tùy breakpoint

Tôi muốn bạn:
- mô tả đề bài rõ
- không cho đáp án ngay
- để tôi tự làm
- khi tôi gửi code, review:
  - breakpoint có hợp lý không
  - đang sửa đúng vấn đề hay vá lỗi
  - font và spacing trên mobile có ổn không
  - layout có bị vỡ ở kích thước trung gian không
\`\`\`

## Prompt 3 - Nhờ AI audit responsive project của tôi
\`\`\`
Tôi sẽ gửi HTML + CSS project của tôi.
Bạn hãy audit dưới góc nhìn responsive.

Đánh giá theo:
1. Desktop có ổn không?
2. Mobile có ổn không?
3. Có chỗ nào vỡ layout không?
4. Font, spacing, image có thích nghi tốt không?
5. Breakpoint có đang dùng hợp lý không?

Cuối cùng, hãy cho tôi danh sách 5 lỗi responsive quan trọng nhất cần sửa.
\`\`\`

## Bài tập buổi này
- Làm responsive cho project đang học
- Có ít nhất 2 trạng thái: mobile và desktop

## Tiêu chuẩn hoàn thành
- Layout không vỡ trên mobile
- Chữ vẫn dễ đọc
- Khoảng cách vẫn hợp lý
- Giao diện thích nghi có chủ đích
      `
    },
    {
      id: 'css-09',
      title: 'Buổi 9: Hover, transition, transform, animation và cảm giác tương tác',
      level: 'advanced',
      content: `
# Buổi 9: Hover, transition, transform, animation và cảm giác tương tác

## Mục tiêu
- Dùng được hover, focus, active
- Dùng được transition, transform, animation cơ bản
- Tạo tương tác mượt mà, không lạm dụng hiệu ứng
- Làm UI sinh động hơn nhưng vẫn chuyên nghiệp

## Prompt 1 - Nhờ AI dạy hiệu ứng theo tư duy UX
\`\`\`
Hãy dạy tôi CSS buổi 9 về tương tác và hiệu ứng.

Chủ đề:
- :hover
- :focus
- :active
- transition
- transform: scale, translate, rotate
- animation
- keyframes

Tôi không muốn học kiểu “thuộc tính nào làm gì” đơn thuần.
Tôi muốn học theo tư duy trải nghiệm người dùng.

Hãy dạy theo cấu trúc:
1. Vì sao giao diện cần phản hồi khi người dùng tương tác?
2. Hover, focus, active khác nhau thế nào?
3. Transition giúp gì?
4. Transform nên dùng như thế nào cho tinh tế?
5. Animation dùng khi nào là hợp lý, khi nào là lố?
6. Cho ví dụ UI thực tế:
   - nút hover đẹp
   - card hover nhẹ
   - input focus rõ
   - loading đơn giản
7. Chỉ ra lỗi phổ biến khiến hiệu ứng nhìn nghiệp dư
8. Tạo checklist “hiệu ứng tốt”

Dạy như mentor UI/UX cơ bản.
\`\`\`

## Prompt 2 - Nhờ AI giao bài tập hiệu ứng
\`\`\`
Hãy giao cho tôi các bài tập CSS buổi 9:
1. nút đổi màu mượt khi hover
2. card phóng to nhẹ khi hover
3. input có focus state rõ
4. tạo loading đơn giản
5. tạo một banner xuất hiện mềm mại

Tôi muốn bạn:
- không cho đáp án ngay
- để tôi tự code
- review thật kỹ:
  - hiệu ứng có mượt không
  - có đang quá đà không
  - duration có hợp lý không
  - transform dùng có tinh tế không
  - animation có thật sự cần không
\`\`\`

## Prompt 3 - Nhờ AI phản biện giao diện của tôi
\`\`\`
Tôi sẽ gửi HTML + CSS của một UI có hover/animation.
Bạn hãy review như một mentor UI.

Hãy trả lời:
- hiệu ứng nào đang tốt?
- hiệu ứng nào nhìn non tay?
- trạng thái hover/focus đã đủ rõ chưa?
- có phần nào bị lạm dụng animation không?
- làm sao để UI nhìn tinh tế hơn?

Không review chung chung. Hãy nói như người đang nâng cấp mắt thẩm mỹ cho junior.
\`\`\`

## Bài tập buổi này
- Thêm hover/focus state cho project
- Thêm 1 transition hợp lý
- Thêm 1 animation nhỏ nếu thật sự cần

## Tiêu chuẩn hoàn thành
- Giao diện có phản hồi khi tương tác
- Hiệu ứng không bị lố
- Focus state rõ ràng
- UI nhìn có cảm giác sống hơn
      `
    },
    {
      id: 'css-10',
      title: 'Buổi 10: Tổ chức CSS, review như mentor và hoàn thiện project cuối khóa',
      level: 'advanced',
      content: `
# Buổi 10: Tổ chức CSS, review như mentor và hoàn thiện project cuối khóa

## Mục tiêu
- Biết tổ chức CSS sạch và dễ maintain
- Biết đặt tên class rõ nghĩa
- Biết tránh lặp style
- Review và hoàn thiện một project CSS hoàn chỉnh

## Prompt 1 - Nhờ AI dạy cách viết CSS như người làm nghề
\`\`\`
Hãy dạy tôi CSS buổi 10 về cách tổ chức CSS như người làm nghề.

Chủ đề:
- đặt tên class rõ nghĩa
- tránh class mơ hồ
- nhóm CSS theo khu vực
- tái sử dụng style
- tránh lặp code
- tư duy BEM ở mức cơ bản
- cách review một file CSS dài

Tôi muốn bạn dạy theo cấu trúc:
1. Vì sao CSS rất dễ rối khi project lớn dần?
2. Class tên như thế nào là tốt, như thế nào là tệ?
3. Nên chia file hoặc chia section CSS như thế nào?
4. Khi nào nên tách class dùng lại?
5. Làm sao nhận ra mình đang lặp CSS?
6. Giới thiệu BEM ở mức cơ bản, dễ hiểu
7. Cho ví dụ một file CSS lộn xộn và cách dọn lại
8. Tạo checklist “CSS sạch và dễ maintain”

Dạy như mentor chuyên đi dọn code cho team.
\`\`\`

## Prompt 2 - Nhờ AI audit project cuối khóa
\`\`\`
Tôi sẽ gửi HTML + CSS của project cuối khóa.
Bạn hãy audit như một mentor Front-end kỹ tính.

Đánh giá theo 6 nhóm tiêu chí:
1. Cấu trúc class
2. Typography và màu sắc
3. Spacing và box model
4. Layout (Flexbox/Grid)
5. Responsive
6. Hiệu ứng và trạng thái tương tác

Với mỗi nhóm:
- nêu điểm tốt
- nêu lỗi cụ thể
- giải thích vì sao là lỗi
- cho hướng sửa cụ thể
- ưu tiên lỗi nghiêm trọng trước

Cuối cùng:
- chấm điểm tổng trên thang 100
- xếp loại: yếu / ổn / tốt / rất tốt
- cho tôi 5 việc cần sửa ngay
\`\`\`

## Prompt 3 - Nhờ AI đóng vai reviewer cuối khóa
\`\`\`
Hãy đóng vai reviewer cuối khóa CSS.

Tôi sẽ gửi project của tôi.
Bạn phải review như thật, không nể nang.

Cách review mong muốn:
- chia theo từng phần của giao diện
- đánh giá độ sạch của CSS
- đánh giá bố cục
- đánh giá spacing
- đánh giá responsive
- đánh giá mức độ trưởng thành của mắt thẩm mỹ
- chỉ rõ điểm nào chứng tỏ tôi đã hiểu CSS
- chỉ rõ điểm nào cho thấy tôi vẫn đang style theo kiểu chắp vá

Cuối cùng, hãy nói thật:
- tôi đã sẵn sàng học JavaScript/React phần UI chưa?
- nếu chưa, tôi cần luyện thêm phần nào?
\`\`\`

## Dự án cuối khóa
Chọn 1 trong các project:
1. Trang hồ sơ cá nhân
2. Landing page sản phẩm
3. Blog cá nhân
4. Trang giới thiệu khóa học

## Yêu cầu bắt buộc
- Có màu sắc và typography rõ ràng
- Có spacing hợp lý
- Có layout bằng Flexbox hoặc Grid
- Có responsive
- Có hover/focus state
- CSS có tổ chức, tên class rõ nghĩa

## Checklist tự đánh giá
- Class có rõ ràng không?
- Giao diện có dễ đọc không?
- Spacing có đều không?
- Layout có chắc tay không?
- Responsive có ổn không?
- Hiệu ứng có vừa đủ không?
- CSS có dễ maintain không?

## Bài tập cuối khóa
- Hoàn thiện project
- Tự audit bằng AI theo các prompt trên
- Sửa lại bản final đến khi đủ sạch
      `
    }
  ]
};