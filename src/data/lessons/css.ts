import { Lesson } from '../../types';

export const cssLesson: Lesson = {
  id: 'css-mastery',
  icon: 'zap',
  title: 'CSS',
  description:
    'Lộ trình 20 buổi học CSS từ cơ bản đến chuyên sâu, chia nhỏ dễ học, có bài tập thực hành và mini project để giúp người mới làm chủ CSS một cách chắc chắn.',
  points: [
    'Hiểu CSS là gì và cách hoạt động',
    'Nắm vững selector, box model, màu sắc, chữ và khoảng cách',
    'Làm chủ Flexbox, Grid và Responsive Design',
    'Biết animation, transition, pseudo-class, pseudo-element',
    'Có bài tập và project để luyện tập thực tế'
  ],
  chapters: [
    {
      id: 'css-01',
      title: 'Buổi 1: CSS là gì? Cách thêm CSS vào HTML',
      level: 'beginner',
      content: `
# Buổi 1: CSS là gì? Cách thêm CSS vào HTML

## Mục tiêu
- Hiểu CSS là gì
- Biết CSS dùng để làm gì
- Biết 3 cách thêm CSS vào trang web

## Nội dung chính
- CSS là ngôn ngữ dùng để trang trí giao diện
- CSS giúp đổi màu, đổi font, căn chỉnh và tạo bố cục
- 3 cách dùng CSS:
  - Inline CSS
  - Internal CSS
  - External CSS

## Ví dụ
\`\`\`html
<p style="color: red;">Xin chào</p>
\`\`\`

\`\`\`html
<head>
  <style>
    p {
      color: blue;
    }
  </style>
</head>
\`\`\`

\`\`\`html
<head>
  <link rel="stylesheet" href="style.css" />
</head>
\`\`\`

## Bài tập luyện tập
1. Tạo một file HTML và nối với file \`style.css\`
2. Đổi màu tiêu đề thành xanh
3. Đổi màu đoạn văn thành xám

## Bài tập thử thách
- So sánh 3 cách viết CSS và giải thích khi nào nên dùng external CSS
      `
    },
    {
      id: 'css-02',
      title: 'Buổi 2: Cú pháp CSS và selector cơ bản',
      level: 'beginner',
      content: `
# Buổi 2: Cú pháp CSS và selector cơ bản

## Mục tiêu
- Hiểu cú pháp một rule CSS
- Biết selector là gì
- Biết chọn phần tử theo thẻ, class, id

## Nội dung chính
- Cấu trúc:
  - selector
  - property
  - value
- Selector theo tên thẻ
- Selector theo class
- Selector theo id

## Ví dụ
\`\`\`css
h1 {
  color: red;
}

.note {
  background-color: yellow;
}

#main-title {
  font-size: 32px;
}
\`\`\`

## Bài tập luyện tập
1. Tạo 1 thẻ \`h1\`, 2 đoạn văn và 1 nút
2. Dùng selector theo thẻ để đổi màu \`h1\`
3. Dùng class để đổi màu 2 đoạn văn
4. Dùng id để đổi màu 1 phần tử riêng biệt

## Bài tập thử thách
- Tạo 3 thẻ cùng class và áp dụng chung một kiểu
      `
    },
    {
      id: 'css-03',
      title: 'Buổi 3: Màu sắc và nền',
      level: 'beginner',
      content: `
# Buổi 3: Màu sắc và nền

## Mục tiêu
- Biết đổi màu chữ và màu nền
- Biết dùng tên màu, hex, rgb
- Biết dùng background cơ bản

## Nội dung chính
- \`color\`
- \`background-color\`
- Màu theo tên: red, blue, black
- Màu hex: #ff0000
- Màu rgb
- Ảnh nền cơ bản

## Ví dụ
\`\`\`css
h1 {
  color: #1d4ed8;
}

.box {
  background-color: #f3f4f6;
}
\`\`\`

## Bài tập luyện tập
1. Đổi màu tiêu đề, đoạn văn, nút
2. Tạo một khối có nền màu sáng
3. Thử 3 cách viết màu khác nhau

## Bài tập thử thách
- Tạo một thẻ card có nền, màu chữ và nút nổi bật
      `
    },
    {
      id: 'css-04',
      title: 'Buổi 4: Font chữ và định dạng văn bản',
      level: 'beginner',
      content: `
# Buổi 4: Font chữ và định dạng văn bản

## Mục tiêu
- Biết chỉnh chữ trong CSS
- Biết thay đổi kích thước, độ đậm, căn lề
- Làm cho nội dung dễ đọc hơn

## Nội dung chính
- \`font-size\`
- \`font-family\`
- \`font-weight\`
- \`line-height\`
- \`text-align\`
- \`text-transform\`
- \`text-decoration\`

## Ví dụ
\`\`\`css
p {
  font-size: 18px;
  line-height: 1.6;
}

h1 {
  text-align: center;
  text-transform: uppercase;
}
\`\`\`

## Bài tập luyện tập
1. Tạo đoạn giới thiệu bản thân
2. Tăng kích thước chữ cho tiêu đề
3. Chỉnh khoảng cách dòng cho đoạn văn
4. Căn giữa một tiêu đề

## Bài tập thử thách
- Thiết kế một bài viết ngắn với tiêu đề, phụ đề và nội dung dễ đọc
      `
    },
    {
      id: 'css-05',
      title: 'Buổi 5: Box Model - nền tảng quan trọng nhất',
      level: 'beginner',
      content: `
# Buổi 5: Box Model - Nền Tảng Quan Trọng Nhất

## Mục tiêu
- Hiểu mọi phần tử đều là một cái hộp
- Phân biệt content, padding, border, margin
- Biết tạo khoảng cách hợp lý

## Nội dung chính
- Content
- Padding
- Border
- Margin

## Ví dụ
\`\`\`css
.box {
  padding: 20px;
  border: 2px solid black;
  margin: 30px;
}
\`\`\`

## Bài tập luyện tập
1. Tạo một khối nội dung có padding
2. Thêm border cho khối
3. Tạo khoảng cách giữa 2 khối bằng margin

## Bài tập thử thách
- Tạo 3 card xếp dọc, mỗi card có viền, khoảng đệm và khoảng cách hợp lý
      `
    },
    {
      id: 'css-06',
      title: 'Buổi 6: Width, Height và box-sizing',
      level: 'beginner',
      content: `
# Buổi 6: Width, Height và box-sizing

## Mục tiêu
- Hiểu chiều rộng và chiều cao hoạt động ra sao
- Biết vì sao box có thể bị tràn
- Biết dùng \`box-sizing: border-box\`

## Nội dung chính
- \`width\`
- \`height\`
- \`max-width\`
- \`min-height\`
- \`box-sizing\`

## Ví dụ
\`\`\`css
* {
  box-sizing: border-box;
}

.card {
  width: 300px;
  padding: 20px;
}
\`\`\`

## Bài tập luyện tập
1. Tạo 1 card rộng 300px
2. Tăng padding và quan sát kích thước
3. Thêm \`box-sizing: border-box\` để so sánh

## Bài tập thử thách
- Tạo 2 khối cùng kích thước hiển thị giống nhau dù padding khác nhau
      `
    },
    {
      id: 'css-07',
      title: 'Buổi 7: Hiển thị phần tử - block, inline, inline-block',
      level: 'beginner',
      content: `
# Buổi 7: Hiển thị phần tử - block, inline, inline-block

## Mục tiêu
- Hiểu các kiểu hiển thị cơ bản
- Biết sự khác nhau giữa block và inline
- Biết khi nào dùng inline-block

## Nội dung chính
- \`display: block\`
- \`display: inline\`
- \`display: inline-block\`
- \`display: none\`

## Bài tập luyện tập
1. So sánh 1 thẻ \`div\` và 1 thẻ \`span\`
2. Biến 1 thẻ \`a\` thành block
3. Dùng inline-block cho 3 nút nằm cạnh nhau

## Bài tập thử thách
- Tạo menu ngang bằng inline-block
      `
    },
    {
      id: 'css-08',
      title: 'Buổi 8: Background nâng cao và border-radius, shadow',
      level: 'intermediate',
      content: `
# Buổi 8: Background nâng cao và border-radius, shadow

## Mục tiêu
- Làm phần tử đẹp hơn
- Biết bo góc, thêm đổ bóng
- Biết dùng background-image cơ bản

## Nội dung chính
- \`background-image\`
- \`background-size\`
- \`background-position\`
- \`border-radius\`
- \`box-shadow\`

## Bài tập luyện tập
1. Tạo một card bo góc
2. Thêm đổ bóng cho card
3. Tạo một khối có ảnh nền

## Bài tập thử thách
- Tạo card sản phẩm đẹp hơn với ảnh nền, bo góc và shadow
      `
    },
    {
      id: 'css-09',
      title: 'Buổi 9: Pseudo-class và trạng thái phần tử',
      level: 'intermediate',
      content: `
# Buổi 9: Pseudo-class và trạng thái phần tử

## Mục tiêu
- Biết style khi hover, focus, active
- Tạo hiệu ứng cơ bản khi người dùng tương tác

## Nội dung chính
- \`:hover\`
- \`:focus\`
- \`:active\`
- \`:first-child\`
- \`:last-child\`
- \`:nth-child()\`

## Ví dụ
\`\`\`css
button:hover {
  opacity: 0.8;
}
\`\`\`

## Bài tập luyện tập
1. Tạo nút đổi màu khi hover
2. Tạo ô input có viền nổi bật khi focus
3. Đổi màu phần tử đầu tiên trong danh sách

## Bài tập thử thách
- Tạo menu có hover đẹp và item đầu tiên nổi bật
      `
    },
    {
      id: 'css-10',
      title: 'Buổi 10: Pseudo-element và trang trí nội dung',
      level: 'intermediate',
      content: `
# Buổi 10: Pseudo-element và trang trí nội dung

## Mục tiêu
- Biết dùng \`::before\` và \`::after\`
- Tạo hiệu ứng trang trí mà không cần thêm HTML

## Nội dung chính
- \`::before\`
- \`::after\`
- \`content\`
- Ứng dụng trong gạch chân, icon giả, nhãn nổi bật

## Bài tập luyện tập
1. Thêm dấu sao trước tiêu đề
2. Tạo gạch chân dưới link bằng pseudo-element
3. Thêm chữ "Mới" sau một tiêu đề

## Bài tập thử thách
- Tạo card có nhãn "Hot" ở góc bằng \`::before\`
      `
    },
    {
      id: 'css-11',
      title: 'Buổi 11: Position - định vị phần tử',
      level: 'intermediate',
      content: `
# Buổi 11: Position - Định Vị Phần Tử

## Mục tiêu
- Hiểu position hoạt động ra sao
- Biết dùng relative, absolute, fixed, sticky

## Nội dung chính
- \`position: static\`
- \`position: relative\`
- \`position: absolute\`
- \`position: fixed\`
- \`position: sticky\`
- \`top\`, \`right\`, \`bottom\`, \`left\`

## Bài tập luyện tập
1. Tạo một badge nằm góc card bằng absolute
2. Tạo nút chat cố định góc màn hình bằng fixed
3. Tạo menu sticky

## Bài tập thử thách
- Thiết kế một card có ảnh, nhãn giảm giá và nút nổi ở góc
      `
    },
    {
      id: 'css-12',
      title: 'Buổi 12: Flexbox cơ bản',
      level: 'intermediate',
      content: `
# Buổi 12: Flexbox cơ bản

## Mục tiêu
- Hiểu Flexbox dùng để làm gì
- Biết container và item
- Căn phần tử theo hàng ngang dễ dàng

## Nội dung chính
- \`display: flex\`
- Trục chính và trục phụ
- \`justify-content\`
- \`align-items\`
- \`gap\`

## Ví dụ
\`\`\`css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
}
\`\`\`

## Bài tập luyện tập
1. Tạo 3 box nằm ngang
2. Căn giữa các box
3. Tạo khoảng cách giữa các box bằng gap

## Bài tập thử thách
- Tạo thanh menu ngang có logo bên trái và menu bên phải
      `
    },
    {
      id: 'css-13',
      title: 'Buổi 13: Flexbox nâng cao',
      level: 'intermediate',
      content: `
# Buổi 13: Flexbox nâng cao

## Mục tiêu
- Làm chủ căn chỉnh với Flexbox
- Biết xuống hàng và điều chỉnh kích thước item

## Nội dung chính
- \`flex-wrap\`
- \`flex-direction\`
- \`flex-grow\`
- \`flex-shrink\`
- \`flex-basis\`
- \`align-self\`

## Bài tập luyện tập
1. Tạo danh sách card xuống hàng
2. Thử \`flex-direction: column\`
3. Tạo item lớn hơn các item còn lại bằng \`flex-grow\`

## Bài tập thử thách
- Tạo layout card sản phẩm responsive sơ bộ bằng Flexbox
      `
    },
    {
      id: 'css-14',
      title: 'Buổi 14: Grid cơ bản',
      level: 'intermediate',
      content: `
# Buổi 14: Grid cơ bản

## Mục tiêu
- Hiểu Grid khác Flexbox như thế nào
- Biết tạo layout theo hàng và cột

## Nội dung chính
- \`display: grid\`
- \`grid-template-columns\`
- \`grid-template-rows\`
- \`gap\`
- \`repeat()\`

## Ví dụ
\`\`\`css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
\`\`\`

## Bài tập luyện tập
1. Tạo lưới 3 cột
2. Tạo gallery ảnh đơn giản
3. Tạo layout 2 cột nội dung và sidebar

## Bài tập thử thách
- Tạo trang sản phẩm với vùng danh sách sản phẩm hiển thị dạng grid
      `
    },
    {
      id: 'css-15',
      title: 'Buổi 15: Grid nâng cao và bố cục thực tế',
      level: 'advanced',
      content: `
# Buổi 15: Grid nâng cao và bố cục thực tế

## Mục tiêu
- Biết chia vùng bố cục trang
- Tạo layout phức tạp hơn bằng Grid

## Nội dung chính
- \`grid-column\`
- \`grid-row\`
- \`grid-template-areas\`
- Kết hợp Grid với Flexbox

## Bài tập luyện tập
1. Tạo layout gồm header, sidebar, main, footer
2. Cho một item chiếm 2 cột
3. Dùng \`grid-template-areas\` để đặt tên vùng

## Bài tập thử thách
- Tạo bố cục dashboard đơn giản
      `
    },
    {
      id: 'css-16',
      title: 'Buổi 16: Responsive Design và Media Queries',
      level: 'advanced',
      content: `
# Buổi 16: Responsive Design và Media Queries

## Mục tiêu
- Hiểu thiết kế đáp ứng là gì
- Biết viết CSS cho điện thoại và máy tính
- Biết dùng media queries

## Nội dung chính
- Responsive Design
- Mobile-first
- \`@media (min-width: ...)\`
- \`@media (max-width: ...)\`
- Đơn vị %, rem, vw, vh

## Bài tập luyện tập
1. Tạo layout 1 cột trên mobile, 3 cột trên desktop
2. Giảm kích thước chữ trên màn hình nhỏ
3. Tạo menu đổi từ dọc sang ngang

## Bài tập thử thách
- Làm responsive cho trang hồ sơ cá nhân
      `
    },
    {
      id: 'css-17',
      title: 'Buổi 17: Transition và transform',
      level: 'advanced',
      content: `
# Buổi 17: Transition và Transform

## Mục tiêu
- Tạo chuyển động mượt mà
- Biết phóng to, xoay, di chuyển phần tử

## Nội dung chính
- \`transition\`
- \`transform: scale()\`
- \`transform: translate()\`
- \`transform: rotate()\`

## Bài tập luyện tập
1. Tạo nút đổi màu mượt khi hover
2. Tạo card phóng to nhẹ khi hover
3. Tạo ảnh xoay nhẹ khi rê chuột

## Bài tập thử thách
- Tạo card sản phẩm có hiệu ứng hover chuyên nghiệp
      `
    },
    {
      id: 'css-18',
      title: 'Buổi 18: Animation cơ bản',
      level: 'advanced',
      content: `
# Buổi 18: Animation cơ bản

## Mục tiêu
- Hiểu animation trong CSS
- Biết dùng keyframes để tạo chuyển động

## Nội dung chính
- \`@keyframes\`
- \`animation-name\`
- \`animation-duration\`
- \`animation-iteration-count\`
- \`animation-delay\`

## Bài tập luyện tập
1. Tạo hiệu ứng mờ dần khi xuất hiện
2. Tạo nút rung nhẹ
3. Tạo loading đơn giản bằng CSS

## Bài tập thử thách
- Tạo banner có hiệu ứng xuất hiện đẹp mắt
      `
    },
    {
      id: 'css-19',
      title: 'Buổi 19: Tổ chức CSS, đặt tên class và tái sử dụng',
      level: 'advanced',
      content: `
# Buổi 19: Tổ chức CSS, đặt tên class và tái sử dụng

## Mục tiêu
- Viết CSS gọn gàng, dễ bảo trì
- Biết đặt tên class rõ nghĩa
- Tránh viết CSS rối

## Nội dung chính
- Quy tắc đặt tên class dễ hiểu
- Chia nhóm style theo khu vực
- Tái sử dụng class
- Tránh lặp CSS không cần thiết
- Giới thiệu tư duy BEM ở mức cơ bản

## Bài tập luyện tập
1. Đổi tên class khó hiểu thành class rõ nghĩa
2. Gom các style giống nhau lại
3. Chia CSS theo từng khu vực: header, main, footer

## Bài tập thử thách
- Dọn dẹp một file CSS dài và viết lại dễ đọc hơn
      `
    },
    {
      id: 'css-20',
      title: 'Buổi 20: Mini Project và dự án cuối khóa CSS',
      level: 'advanced',
      content: `
# Buổi 20: Mini Project và dự án cuối khóa CSS

## Mục tiêu
- Kết hợp toàn bộ kiến thức CSS đã học
- Hoàn thiện giao diện hoàn chỉnh
- Tự đánh giá mức độ làm chủ CSS

## Dự án gợi ý
Chọn 1 trong các project:
1. Trang hồ sơ cá nhân
2. Landing page sản phẩm
3. Blog cá nhân
4. Trang giới thiệu khóa học

## Yêu cầu bắt buộc
- Có màu sắc và font rõ ràng
- Dùng box model hợp lý
- Có hover effect
- Có Flexbox hoặc Grid
- Có responsive
- Có card hoặc section đẹp mắt

## Checklist tự đánh giá
- Có dùng class rõ ràng không?
- Bố cục có gọn và dễ nhìn không?
- Khoảng cách có đều không?
- Trang có responsive không?
- Có hiệu ứng chuyển động hợp lý không?

## Bài tập cuối khóa
- Hoàn thành project
- Tự rà soát và tối ưu CSS toàn bộ trang
      `
    }
  ]
};