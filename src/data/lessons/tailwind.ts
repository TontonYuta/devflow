import { Lesson } from '../../types';

export const tailwindLesson: Lesson = {
  id: 'tailwind-4-mastery',
  icon: 'zap',
  title: 'Tailwind CSS 4',
  description:
    'Lộ trình Tailwind CSS 4 theo phong cách tự học cùng AI mentor. Mỗi buổi học đi kèm prompt cực chi tiết để học viên chỉ cần copy vào AI là có thể học từ bản chất, hiểu utility-first, dựng UI nhanh, responsive, dễ bảo trì và được review như học cùng mentor 1-1.',
  points: [
    'Mỗi buổi có prompt cực chi tiết để copy vào AI và học ngay',
    'AI đóng vai mentor Tailwind, dạy từ bản chất chứ không chỉ liệt kê class',
    'Có prompt học lý thuyết, prompt build UI, prompt review và prompt phản biện',
    'Tập trung vào năng lực thật: spacing, typography, layout, responsive, state, theme và component composition',
    'Có bài tập theo kiểu dựng giao diện thực tế thay vì học class rời rạc',
    'Học xong có thể tự xây giao diện bằng Tailwind CSS 4 nhanh, sạch và có hệ thống'
  ],
  chapters: [
    {
      id: 'tw-01',
      title: 'Buổi 1: Tailwind CSS là gì và tư duy Utility-First hoạt động ra sao?',
      level: 'beginner',
      content: `
# Buổi 1: Tailwind CSS là gì và tư duy Utility-First hoạt động ra sao?

## Mục tiêu
- Hiểu Tailwind CSS là gì
- Hiểu Utility-First là gì
- Biết Tailwind khác CSS truyền thống ở đâu
- Bắt đầu nhìn UI như tập hợp các quyết định nhỏ về style

## Cách học buổi này
Bạn sẽ copy từng prompt bên dưới vào AI theo đúng thứ tự.
Không học lướt. Sau mỗi prompt phải tự giải thích lại bằng lời của bạn.

## Prompt 1 - Nhờ AI dạy lý thuyết từ gốc
\`\`\`
Bạn hãy đóng vai một mentor Front-end/UI cực giỏi, chuyên dạy Tailwind CSS cho người đã biết HTML và CSS cơ bản.

Hôm nay hãy dạy tôi buổi đầu tiên về Tailwind CSS theo phong cách:
- cực dễ hiểu nhưng không hời hợt
- giải thích từ bản chất
- luôn nói vì sao kiến thức này quan trọng
- gắn với ví dụ UI thực tế
- không dùng thuật ngữ khó nếu chưa giải thích

Chủ đề hôm nay:
- Tailwind CSS là gì?
- Utility-First là gì?
- Tailwind khác CSS truyền thống ở đâu?
- Khi nào Tailwind đặc biệt hữu ích?
- Vì sao nhiều người thích Tailwind dù code nhìn nhiều class?

Tôi muốn bạn dạy theo format:
1. Tailwind CSS là gì?
2. Utility-First nghĩa là gì?
3. So sánh thật rõ giữa:
   - CSS truyền thống
   - Tailwind CSS
4. Vì sao ghép utility class lại có thể tạo UI nhanh?
5. Cho 5 ví dụ UI nhỏ viết bằng Tailwind và giải thích từng class
6. Khi nào Tailwind phù hợp và khi nào có thể không phải lựa chọn tốt nhất?
7. Chỉ ra 8 hiểu lầm phổ biến của người mới về Tailwind
8. Đặt cho tôi 5 câu hỏi kiểm tra hiểu bài
9. Sau khi tôi trả lời, bạn phải chấm và sửa thật kỹ

Dùng tiếng Việt và dạy như mentor thật sự.
\`\`\`

## Prompt 2 - Nhờ AI luyện tư duy utility-first
\`\`\`
Tôi muốn luyện tư duy utility-first.

Hãy cho tôi 8 UI rất nhỏ, ví dụ:
- nút bấm
- badge
- card
- input
- alert
- menu item
- avatar box
- section title

Với mỗi UI:
1. hỏi tôi cần những quyết định style nào
2. hỏi tôi chúng có thể tương ứng với utility nào
3. bắt tôi giải thích theo từng nhóm:
   - spacing
   - màu
   - chữ
   - border/shadow
4. sau đó bạn mới chữa

Mục tiêu là để tôi hiểu Tailwind là cách nghĩ về UI bằng các quyết định cụ thể, không chỉ học thuộc class.
\`\`\`

## Prompt 3 - Nhờ AI kiểm tra hiểu bài
\`\`\`
Hãy kiểm tra xem tôi đã thật sự hiểu Tailwind CSS buổi 1 chưa.

Tôi muốn có:
- 3 câu hỏi trắc nghiệm có giải thích đáp án
- 3 câu hỏi tự luận ngắn
- 2 bài tập nhỏ phân tích utility class
- 1 câu hỏi tư duy: vì sao code nhiều class chưa chắc là code “xấu” trong Tailwind?

Sau khi tôi trả lời, bạn hãy:
- chấm điểm từng câu
- giải thích chỗ sai
- nói tôi đang ở mức nào: chưa hiểu / hiểu cơ bản / hiểu chắc
\`\`\`

## Bài tập buổi này
1. Giải thích Tailwind bằng lời của bạn
2. So sánh Tailwind và CSS thường
3. Viết lại 2 nút đơn giản bằng utility class và tự giải thích từng class

## Tiêu chuẩn hoàn thành
- Hiểu Utility-First là gì
- Thấy được logic đằng sau các class
- Không còn nghĩ Tailwind chỉ là “viết class cho nhanh”
      `
    },
    {
      id: 'tw-02',
      title: 'Buổi 2: Cài đặt Tailwind CSS 4 và hiểu cách Tailwind chạy trong project',
      level: 'beginner',
      content: `
# Buổi 2: Cài đặt Tailwind CSS 4 và hiểu cách Tailwind chạy trong project

## Mục tiêu
- Cài được Tailwind CSS 4
- Hiểu \`@import "tailwindcss";\`
- Biết Tailwind được nối vào HTML/React/Vite như thế nào
- Bắt đầu hiểu hướng CSS-first của Tailwind 4

## Prompt 1 - Nhờ AI hướng dẫn setup như mentor kỹ thuật
\`\`\`
Hãy đóng vai mentor kỹ thuật và hướng dẫn tôi cài Tailwind CSS 4 từ đầu.

Tôi muốn bạn hướng dẫn theo cách:
1. giải thích Tailwind 4 khác gì về tư duy setup so với các phiên bản cũ ở mức cơ bản
2. hướng dẫn tôi cài Tailwind vào project Vite hoặc React
3. giải thích vai trò của file CSS global
4. giải thích vì sao chỉ cần @import "tailwindcss";
5. hướng dẫn tôi kiểm tra Tailwind đã hoạt động hay chưa
6. nếu có lỗi setup thường gặp, hãy nói luôn cách xử lý

Dùng tiếng Việt và hướng dẫn như mentor đang ngồi cạnh tôi.
\`\`\`

## Prompt 2 - Nhờ AI giải thích Tailwind flow trong project
\`\`\`
Tôi vừa cài xong Tailwind CSS 4. Hãy giúp tôi hiểu Tailwind đang hoạt động thế nào trong project.

Tôi muốn bạn giải thích:
1. file CSS global có vai trò gì
2. @import "tailwindcss"; đang làm gì
3. vì sao khi tôi gõ class trong JSX/HTML thì giao diện thay đổi
4. Tailwind 4 theo hướng CSS-first nghĩa là gì ở mức dễ hiểu
5. phần nào người mới cần hiểu trước, phần nào có thể học sau

Đừng chỉ nói khái niệm. Hãy giúp tôi thật sự hình dung luồng hoạt động.
\`\`\`

## Prompt 3 - Nhờ AI kiểm tra setup của tôi
\`\`\`
Tôi sẽ gửi cho bạn file CSS global và đoạn code HTML/React đầu tiên của tôi.
Bạn hãy review:
1. Tailwind đã được cài đúng chưa?
2. Tôi có đang import đúng chưa?
3. Có dấu hiệu setup lỗi hoặc thiếu bước nào không?
4. Tôi đã hiểu đúng cách Tailwind hoạt động chưa?
\`\`\`

## Bài tập buổi này
- Cài Tailwind vào một project
- Tạo 1 tiêu đề, 1 nút, 1 box dùng class Tailwind
- Tự giải thích vì sao UI đã đổi style

## Tiêu chuẩn hoàn thành
- Tailwind hoạt động được
- Hiểu file CSS global là gì
- Không còn mù về setup cơ bản
      `
    },
    {
      id: 'tw-03',
      title: 'Buổi 3: Spacing, sizing, màu sắc, border, shadow và box model trong Tailwind',
      level: 'beginner',
      content: `
# Buổi 3: Spacing, sizing, màu sắc, border, shadow và box model trong Tailwind

## Mục tiêu
- Dùng được padding, margin, width, height
- Dùng được màu nền, màu chữ, border, shadow
- Hiểu box model khi viết bằng utility class
- Bắt đầu tạo được card và block UI cơ bản

## Prompt 1 - Nhờ AI dạy nền tảng visual building blocks
\`\`\`
Hãy dạy tôi Tailwind CSS buổi 3 như một mentor UI.

Chủ đề:
- p-, px-, py-
- m-, mx-, my-
- w-, h-, max-w-
- bg-
- text-
- border
- rounded
- shadow

Tôi muốn bạn dạy theo cấu trúc:
1. Vì sao spacing là thứ quyết định UI nhìn non hay chắc tay?
2. Tailwind biểu diễn spacing như thế nào?
3. padding và margin khác nhau ra sao trong tư duy utility?
4. width, height, max-width nên dùng khi nào?
5. Màu nền, màu chữ, border, shadow phối hợp tạo cảm giác UI thế nào?
6. Cho ví dụ thực tế:
   - card
   - nút
   - alert
   - section box
7. Chỉ ra lỗi phổ biến:
   - spacing quá chật hoặc quá loạn
   - dùng màu không có hệ thống
   - shadow và border dùng quá tay
8. Tạo checklist dựng block UI cơ bản

Dạy như mentor đang sửa mắt UI nền tảng cho người mới.
\`\`\`

## Prompt 2 - Nhờ AI giao bài thực hành block UI
\`\`\`
Hãy giao cho tôi bài thực hành buổi 3:
1. tạo 3 box với spacing khác nhau
2. tạo 1 card có nền trắng, viền, bo góc và shadow
3. tạo 1 alert box màu sắc rõ ràng
4. tạo 1 nút có padding đẹp và text dễ đọc

Yêu cầu:
- không cho đáp án ngay
- để tôi tự làm
- sau khi tôi gửi code, review:
  - spacing có ổn chưa
  - width/height có hợp lý không
  - màu, border, shadow có cân đối không
  - UI có đang nhìn non tay không
\`\`\`

## Prompt 3 - Nhờ AI review eye for spacing của tôi
\`\`\`
Tôi sẽ gửi cho bạn HTML/JSX dùng Tailwind.
Bạn hãy review:
1. spacing có hài hòa không?
2. box model có đang bị rối không?
3. màu sắc có nhất quán không?
4. border/shadow có dùng quá tay không?
5. nếu cần sửa 3 điểm đầu tiên để UI nhìn đẹp hơn, đó là gì?
\`\`\`

## Bài tập buổi này
- Tạo ít nhất 4 block UI cơ bản
- Mỗi block phải dùng spacing, màu, border/shadow có chủ đích
- Tự giải thích từng nhóm class chính

## Tiêu chuẩn hoàn thành
- Dùng được spacing và sizing
- Dùng được màu/border/shadow
- Bắt đầu cảm được UI block cơ bản
      `
    },
    {
      id: 'tw-04',
      title: 'Buổi 4: Typography và cách làm giao diện dễ đọc bằng Tailwind',
      level: 'beginner',
      content: `
# Buổi 4: Typography và cách làm giao diện dễ đọc bằng Tailwind

## Mục tiêu
- Dùng được cỡ chữ, độ đậm, leading, tracking, căn lề
- Tạo phân cấp rõ cho tiêu đề, phụ đề, nội dung
- Làm UI dễ đọc hơn
- Bắt đầu có tư duy “design text system” cơ bản

## Prompt 1 - Nhờ AI dạy typography mindset
\`\`\`
Hãy dạy tôi Tailwind CSS buổi 4 như mentor UI/Typography.

Chủ đề:
- text-sm, text-base, text-lg, text-2xl...
- font-medium, font-semibold, font-bold
- leading-
- tracking-
- text-left, text-center
- text-gray...

Tôi muốn bạn dạy theo cấu trúc:
1. Vì sao typography là thứ quyết định UI dễ đọc hay không?
2. Cỡ chữ và độ đậm nên phối hợp thế nào?
3. leading ảnh hưởng gì tới khả năng đọc?
4. tracking nên dùng khi nào?
5. Khi nào nên căn giữa, khi nào nên căn trái?
6. Cho ví dụ thực tế:
   - hero section
   - card tiêu đề + mô tả
   - form label + hint text
7. Chỉ ra lỗi phổ biến:
   - mọi text đều cùng cỡ
   - dùng quá nhiều font-weight
   - line-height quá bí
   - text màu quá nhạt hoặc quá gắt
8. Tạo checklist typography cơ bản bằng Tailwind

Dạy như mentor đang nâng mắt chữ cho junior UI.
\`\`\`

## Prompt 2 - Nhờ AI giao bài thực hành typography
\`\`\`
Hãy giao cho tôi bài thực hành buổi 4:
1. tạo một hero text block gồm tiêu đề, subtitle, mô tả
2. tạo một card có title + description
3. tạo một form label + helper text
4. tạo một đoạn text dài dễ đọc hơn

Tôi muốn bạn:
- không cho đáp án ngay
- để tôi tự làm
- sau khi tôi gửi code, review:
  - phân cấp text có rõ không
  - line-height có ổn không
  - font-weight có quá tay không
  - màu chữ có hợp lý không
\`\`\`

## Prompt 3 - Nhờ AI review typography của tôi
\`\`\`
Tôi sẽ gửi cho bạn một đoạn UI dùng Tailwind.
Bạn hãy review:
1. Typography có rõ phân cấp không?
2. Phần nào đang khó đọc?
3. Cỡ chữ/độ đậm/leading có hợp lý không?
4. Màu chữ có hỗ trợ readability không?
5. Nếu chỉ sửa 3 điểm để UI trông chuyên nghiệp hơn, đó là gì?
\`\`\`

## Bài tập buổi này
- Tạo ít nhất 3 block typography khác nhau
- Tự giải thích vì sao chọn cỡ chữ và weight đó

## Tiêu chuẩn hoàn thành
- Dùng được typography utilities
- Tạo được phân cấp chữ rõ ràng
- UI nhìn dễ đọc hơn rõ rệt
      `
    },
    {
      id: 'tw-05',
      title: 'Buổi 5: Flexbox, Grid và tư duy layout trong Tailwind',
      level: 'intermediate',
      content: `
# Buổi 5: Flexbox, Grid và tư duy layout trong Tailwind

## Mục tiêu
- Dùng được Flexbox và Grid bằng Tailwind
- Biết khi nào nên dùng Flex, khi nào dùng Grid
- Tạo layout thực tế nhanh hơn
- Bắt đầu có tư duy bố cục thay vì ghép box rời

## Prompt 1 - Nhờ AI dạy layout thinking
\`\`\`
Hãy dạy tôi Tailwind CSS buổi 5 như mentor layout/UI.

Chủ đề:
- flex
- items-center
- justify-center
- justify-between
- flex-col
- gap-
- grid
- grid-cols-
- col-span-
- row-span-

Tôi muốn bạn dạy theo cấu trúc:
1. Flexbox phù hợp với bài toán nào?
2. Grid phù hợp với bài toán nào?
3. Khi nào nên chọn Flex, khi nào nên chọn Grid?
4. gap giúp gì trong Tailwind layout?
5. Cho ví dụ thực tế:
   - header
   - cụm nút
   - card ngang
   - gallery
   - dashboard mini
6. Chỉ ra lỗi phổ biến:
   - dùng Flex cho bài toán nhiều cột phức tạp
   - dùng Grid cho thứ rất đơn giản
   - spacing layout không đều
7. Tạo checklist chọn layout đúng

Dạy như mentor đang xây nền bố cục cho junior UI.
\`\`\`

## Prompt 2 - Nhờ AI giao bài thực hành layout
\`\`\`
Hãy giao cho tôi bài thực hành buổi 5:
1. tạo header bằng flex
2. tạo cụm 3 button nằm ngang có spacing đẹp
3. tạo card ngang ảnh trái - nội dung phải
4. tạo grid 3 cột
5. tạo gallery hoặc dashboard mini bằng grid

Tôi muốn bạn:
- không cho đáp án ngay
- để tôi tự làm
- sau khi tôi gửi code, review:
  - layout chọn đúng chưa
  - gap và spacing có đều không
  - flex/grid có đang bị dùng sai chỗ không
  - bố cục có dễ mở rộng không
\`\`\`

## Prompt 3 - Nhờ AI review layout của tôi
\`\`\`
Tôi sẽ gửi cho bạn code Tailwind của một layout.
Bạn hãy review:
1. Nên dùng Flex hay Grid cho phần này?
2. Tôi đã chọn đúng chưa?
3. Layout có cân đối không?
4. Có chỗ nào spacing chưa đều?
5. Có cách nào bố cục sạch hơn không?

Hãy review như mentor layout khó tính.
\`\`\`

## Bài tập buổi này
- Tạo ít nhất 4 layout nhỏ bằng flex và grid
- Mỗi layout phải tự giải thích vì sao chọn flex hoặc grid

## Tiêu chuẩn hoàn thành
- Dùng được Flex và Grid
- Bắt đầu có tư duy bố cục
- Không còn ghép UI theo kiểu mò class
      `
    },
    {
      id: 'tw-06',
      title: 'Buổi 6: Responsive, state, group, peer và UI có tương tác',
      level: 'intermediate',
      content: `
# Buổi 6: Responsive, state, group, peer và UI có tương tác

## Mục tiêu
- Dùng được breakpoint responsive
- Dùng được hover, focus, active, disabled
- Dùng được group và peer
- Tạo UI responsive và có trạng thái tương tác đầy đủ

## Prompt 1 - Nhờ AI dạy responsive + interaction mindset
\`\`\`
Hãy dạy tôi Tailwind CSS buổi 6 như mentor UI thực chiến.

Chủ đề:
- sm:, md:, lg:, xl:
- mobile-first
- hover:
- focus:
- active:
- disabled:
- group
- group-hover:
- peer
- peer-focus:
- peer-checked:

Tôi muốn bạn dạy theo cấu trúc:
1. Mobile-first trong Tailwind nghĩa là gì?
2. Breakpoint nên nghĩ như thế nào?
3. Trạng thái hover/focus/active/disabled giúp UX tốt hơn ra sao?
4. group dùng khi nào?
5. peer dùng khi nào?
6. Cho ví dụ thực tế:
   - button hover
   - input focus ring
   - card đổi màu tiêu đề khi hover cha
   - checkbox đổi style label
   - grid 1 cột mobile, 3 cột desktop
7. Chỉ ra lỗi phổ biến:
   - quên focus state
   - responsive làm theo kiểu vá lỗi
   - group/peer dùng máy móc
8. Tạo checklist responsive + interactive UI

Dạy như mentor UI đang chuẩn hóa trải nghiệm người dùng cho junior.
\`\`\`

## Prompt 2 - Nhờ AI giao bài thực hành responsive + state
\`\`\`
Hãy giao cho tôi bài thực hành buổi 6:
1. tạo grid responsive 1 cột -> 3 cột
2. tạo button có hover/active/disabled
3. tạo input có focus ring
4. tạo card dùng group-hover cho title
5. tạo checkbox hoặc radio dùng peer

Tôi muốn bạn:
- không cho đáp án ngay
- để tôi tự làm
- sau khi tôi gửi code, review:
  - responsive có đúng mobile-first không
  - states có đủ chưa
  - focus có rõ không
  - group/peer có dùng đúng chỗ không
\`\`\`

## Prompt 3 - Nhờ AI review trải nghiệm UI của tôi
\`\`\`
Tôi sẽ gửi cho bạn code UI Tailwind của tôi.
Bạn hãy review:
1. Responsive có ổn không?
2. Focus/hover/disabled có đủ rõ không?
3. Có trạng thái nào đang bị thiếu?
4. group/peer có giúp UI linh hoạt hơn thật không?
5. Có điểm nào làm trải nghiệm vẫn còn non tay không?

Hãy review như mentor UI/UX khó tính.
\`\`\`

## Bài tập buổi này
- Tạo ít nhất 3 component responsive có state
- Test trên nhiều kích thước màn hình
- Tự mô tả UX state của từng component

## Tiêu chuẩn hoàn thành
- Dùng được responsive prefixes
- UI có trạng thái tương tác tử tế
- Biết group/peer không chỉ là “mẹo class”
      `
    },
    {
      id: 'tw-07',
      title: 'Buổi 7: Form UI, navbar, card, modal và các component phổ biến bằng Tailwind',
      level: 'advanced',
      content: `
# Buổi 7: Form UI, navbar, card, modal và các component phổ biến bằng Tailwind

## Mục tiêu
- Ráp utility thành component UI hoàn chỉnh
- Biết dựng các pattern giao diện phổ biến
- Tăng tốc xây giao diện thực tế
- Bắt đầu nghĩ theo “component recipe” thay vì class rời

## Prompt 1 - Nhờ AI dạy component recipe mindset
\`\`\`
Hãy dạy tôi Tailwind CSS buổi 7 như mentor UI implementation.

Chủ đề:
- form UI
- input
- select
- textarea
- button
- navbar
- card
- modal
- badge
- alert

Tôi muốn bạn dạy theo cấu trúc:
1. Vì sao khi học Tailwind nên chuyển từ “class lẻ” sang “recipe cho component”?
2. Form đẹp cần những quyết định nào?
3. Navbar tốt cần những phần nào?
4. Card đẹp thường cần những lớp style nào?
5. Modal cần lưu ý gì về layout và layer?
6. Cho ví dụ component recipe cho:
   - button
   - input
   - card
   - navbar
   - modal
7. Chỉ ra lỗi phổ biến:
   - class dài nhưng không có cấu trúc
   - component nhìn đẹp ở một chỗ nhưng không tái dùng được
   - modal/card/form thiếu consistency
8. Tạo checklist dựng UI component bằng Tailwind

Dạy như mentor đang giúp junior build design system mini.
\`\`\`

## Prompt 2 - Nhờ AI giao bài thực hành UI components
\`\`\`
Hãy giao cho tôi bài thực hành buổi 7:
1. tạo form đăng nhập đẹp
2. tạo navbar responsive đơn giản
3. tạo product card
4. tạo badge hoặc alert
5. tạo modal demo đơn giản bằng Tailwind class

Tôi muốn bạn:
- không cho đáp án ngay
- để tôi tự dựng từng component
- sau mỗi component, review:
  - cấu trúc class đã gọn chưa
  - visual consistency có ổn không
  - spacing/Typography/states có đủ chưa
  - component có thể tái dùng được không
\`\`\`

## Prompt 3 - Nhờ AI review component recipes của tôi
\`\`\`
Tôi sẽ gửi cho bạn code Tailwind của một số UI component.
Bạn hãy review:
1. Component nào đã thành “recipe” tốt?
2. Component nào vẫn là đống class ghép tạm?
3. Có inconsistency nào giữa các component không?
4. Có class nào lặp nhiều nên chuẩn hóa lại không?
5. Nếu muốn tiến gần design system hơn, tôi nên làm gì?
\`\`\`

## Bài tập buổi này
- Tạo ít nhất 5 UI component phổ biến
- Chuẩn hóa spacing, radius, shadow, state giữa các component

## Tiêu chuẩn hoàn thành
- Biết dựng component UI thực tế
- Bắt đầu có consistency giữa các component
- Không còn nhìn Tailwind như các class rời rạc
      `
    },
    {
      id: 'tw-08',
      title: 'Buổi 8: Tailwind CSS 4, @theme, design tokens và dark mode',
      level: 'advanced',
      content: `
# Buổi 8: Tailwind CSS 4, @theme, design tokens và dark mode

## Mục tiêu
- Hiểu Tailwind 4 theo hướng CSS-first
- Biết dùng \`@theme\`
- Biết tạo color/font token riêng
- Biết thiết kế dark mode hoặc theme riêng có hệ thống

## Prompt 1 - Nhờ AI dạy theme system mindset
\`\`\`
Hãy dạy tôi Tailwind CSS buổi 8 như mentor UI system.

Chủ đề:
- Tailwind 4 CSS-first
- @theme
- custom color tokens
- custom font tokens
- dark:
- design tokens

Tôi muốn bạn dạy theo cấu trúc:
1. Tailwind 4 CSS-first nghĩa là gì?
2. @theme giúp gì?
3. Design tokens là gì ở mức dễ hiểu?
4. Vì sao màu và font nên được chuẩn hóa thành token?
5. Dark mode nên được nghĩ như một hệ thống ra sao?
6. Cho ví dụ thực tế:
   - color primary
   - text color
   - background token
   - font token
   - dark/light pairing
7. Chỉ ra lỗi phổ biến:
   - dùng màu tùy hứng khắp nơi
   - dark mode chắp vá
   - token đặt tên mơ hồ
8. Tạo checklist theme system cơ bản

Dạy như mentor đang giúp junior đi từ “làm UI” sang “xây hệ thống UI”.
\`\`\`

## Prompt 2 - Nhờ AI giao bài thực hành theme
\`\`\`
Hãy giao cho tôi bài thực hành buổi 8:
1. tạo file CSS có @theme
2. khai báo màu thương hiệu riêng
3. khai báo font mặc định cho app
4. áp dụng token vào button/card/text
5. thêm dark mode cho ít nhất 2 component

Tôi muốn bạn:
- không cho đáp án ngay
- để tôi tự làm
- sau khi tôi gửi code, review:
  - token đặt tên có rõ không
  - màu có hệ thống không
  - dark mode có đồng nhất không
  - có chỗ nào vẫn hard-code màu quá nhiều không
\`\`\`

## Prompt 3 - Nhờ AI review theme system của tôi
\`\`\`
Tôi sẽ gửi cho bạn file @theme và một số component Tailwind.
Bạn hãy review:
1. Token có đặt tên tốt không?
2. Màu/font có đang được dùng nhất quán không?
3. Dark mode có đủ logic không?
4. Có chỗ nào đáng ra nên dùng token mà vẫn hard-code không?
5. Nếu muốn scale app lớn hơn, hệ thống token này ổn chưa?
\`\`\`

## Bài tập buổi này
- Tạo theme cơ bản cho app
- Áp dụng token vào ít nhất 4 component
- Thêm dark mode cho ít nhất 2 khu vực UI

## Tiêu chuẩn hoàn thành
- Hiểu \`@theme\`
- Biết dùng token thay vì hard-code lung tung
- Bắt đầu có tư duy design system
      `
    },
    {
      id: 'tw-09',
      title: 'Buổi 9: Tailwind trong React/Next.js, props, biến thể và tổ chức code gọn gàng',
      level: 'advanced',
      content: `
# Buổi 9: Tailwind trong React/Next.js, props, biến thể và tổ chức code gọn gàng

## Mục tiêu
- Dùng Tailwind hiệu quả trong React/Next.js
- Biết tạo component nhận props
- Biết xử lý biến thể UI
- Biết tổ chức code Tailwind gọn hơn, dễ maintain hơn

## Prompt 1 - Nhờ AI dạy component-driven Tailwind
\`\`\`
Hãy dạy tôi Tailwind CSS buổi 9 như mentor Front-end/React.

Chủ đề:
- Tailwind trong JSX/TSX
- component nhận props
- biến thể UI
- class condition
- refactor class dài
- reusable component

Tôi muốn bạn dạy theo cấu trúc:
1. Khi dùng Tailwind trong React, lợi thế lớn nhất là gì?
2. Vì sao Tailwind rất hợp với component-based UI?
3. Biến thể UI là gì?
4. Khi nào nên xử lý class condition?
5. Khi nào nên tách component thay vì nhồi class trong một chỗ?
6. Cho ví dụ thực tế:
   - Button primary/secondary
   - Card có nhiều variant
   - Badge theo status
7. Chỉ ra lỗi phổ biến:
   - JSX đầy class condition rối
   - cùng một UI lặp lại nhiều chỗ
   - component thiếu variant strategy
8. Tạo checklist tổ chức Tailwind trong React/Next.js

Dạy như mentor đang giúp junior code UI sạch hơn.
\`\`\`

## Prompt 2 - Nhờ AI giao bài thực hành component variants
\`\`\`
Hãy giao cho tôi bài thực hành buổi 9:
1. tạo Button component nhận props variant
2. tạo Card component nhận title/description
3. tạo Badge theo status
4. tạo Dashboard mini bằng React/Next.js + Tailwind
5. refactor một đoạn JSX dài thành component nhỏ hơn

Tôi muốn bạn:
- không cho đáp án ngay
- để tôi tự làm
- sau khi tôi gửi code, review:
  - component có tái dùng được không
  - biến thể xử lý có sạch không
  - class condition có bị rối không
  - cấu trúc code có dễ maintain không
\`\`\`

## Prompt 3 - Nhờ AI review cách tôi tổ chức Tailwind trong React
\`\`\`
Tôi sẽ gửi cho bạn code React/Next.js dùng Tailwind.
Bạn hãy review:
1. Component nào nên tách ra?
2. Variant handling có sạch không?
3. Có class nào lặp nhiều không?
4. JSX có đang bị quá rối không?
5. Nếu muốn maintain lâu dài, tôi nên refactor gì trước?
\`\`\`

## Bài tập buổi này
- Tạo ít nhất 3 component có props/variant
- Refactor 1 trang JSX dài thành cấu trúc gọn hơn

## Tiêu chuẩn hoàn thành
- Dùng Tailwind tốt trong React/Next.js
- Biết tạo component variant
- Biết giữ code Tailwind sạch hơn
      `
    },
    {
      id: 'tw-10',
      title: 'Buổi 10: Project cuối khóa - xây một giao diện hoàn chỉnh bằng Tailwind CSS 4',
      level: 'advanced',
      content: `
# Buổi 10: Project cuối khóa - xây một giao diện hoàn chỉnh bằng Tailwind CSS 4

## Mục tiêu
- Tổng hợp toàn bộ kiến thức Tailwind đã học
- Hoàn thiện một giao diện thực tế
- Biết tự review consistency, responsive và maintainability
- Tự đánh giá mức độ làm chủ Tailwind

## Prompt 1 - Nhờ AI dẫn tôi làm project từ đầu
\`\`\`
Hãy đóng vai mentor Tailwind và dẫn tôi làm project cuối khóa.

Cho tôi chọn 1 trong các project:
1. Landing page sản phẩm
2. Trang hồ sơ cá nhân
3. Dashboard mini
4. Trang blog
5. Trang khóa học online

Sau khi tôi chọn, hãy dẫn tôi theo lộ trình:
1. phân tích bố cục tổng thể
2. xác định typography system
3. xác định spacing scale
4. xác định colors/theme
5. xác định component cần có
6. xác định responsive strategy
7. xác định state/interaction cần có
8. để tôi tự build từng phần
9. sau mỗi phần, review rất kỹ như mentor
10. cuối cùng, giúp tôi audit toàn bộ giao diện

Mục tiêu là để tôi thật sự tự xây được một UI hoàn chỉnh bằng Tailwind.
\`\`\`

## Prompt 2 - Nhờ AI audit project cuối khóa
\`\`\`
Tôi sẽ gửi cho bạn project Tailwind cuối khóa của tôi.
Bạn hãy audit như mentor UI kỹ tính.

Đánh giá theo 8 nhóm tiêu chí:
1. Bố cục tổng thể
2. Spacing và sizing
3. Typography
4. Màu sắc và theme
5. Component consistency
6. Responsive
7. States/interaction
8. Độ sạch và khả năng maintain code Tailwind

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
Hãy đóng vai reviewer cuối khóa Tailwind CSS 4.

Tôi sẽ gửi giao diện hoặc code của tôi.
Bạn phải review như thật, không nể nang.

Cách review mong muốn:
- đánh giá tư duy utility-first
- đánh giá consistency giữa các component
- đánh giá responsive
- đánh giá state UX
- đánh giá theme/token nếu có
- đánh giá độ gọn gàng của code
- chỉ rõ điểm nào chứng tỏ tôi đã hiểu Tailwind
- chỉ rõ điểm nào cho thấy tôi vẫn đang ghép class theo kiểu chắp vá

Cuối cùng, hãy nói thật:
- tôi đã đủ nền tảng để dùng Tailwind trong project thật chưa?
- nếu chưa, tôi cần luyện thêm phần nào?
\`\`\`

## Gợi ý project
Chọn 1 trong các project:
1. Landing page sản phẩm
2. Trang hồ sơ cá nhân
3. Dashboard mini
4. Trang blog
5. Trang khóa học online

## Yêu cầu bắt buộc
- Có layout rõ ràng
- Có responsive
- Có hover/focus states
- Có ít nhất 5 component UI
- Có theme hoặc dark mode hoặc token cơ bản
- Có tổ chức code gọn gàng nếu dùng React/Next.js

## Checklist tự đánh giá
- Class có quá rối không?
- Spacing có đều không?
- Typography có nhất quán không?
- Responsive đã ổn chưa?
- Components có đồng bộ không?
- States có đủ rõ không?
- Tôi có thể giải thích vì sao mình dùng từng nhóm utility chính không?

## Bài tập cuối khóa
- Hoàn thành project
- Tự audit bằng AI theo các prompt trên
- Refactor lại những đoạn class dài, lặp hoặc thiếu nhất quán
- Hoàn thiện phiên bản final đến khi đủ chắc
      `
    }
  ]
};