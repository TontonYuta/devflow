import { Lesson } from '../../types';

export const htmlLesson: Lesson = {
  id: 'html-mastery',
  icon: 'code',
  title: 'HTML',
  description:
    'Lộ trình 20 buổi học HTML từ cơ bản đến chuyên sâu, chia nhỏ dễ học, có bài tập thực hành và mini project để giúp người mới làm chủ HTML một cách chắc chắn.',
  points: [
    'Học HTML theo từng buổi nhỏ, dễ tiếp thu',
    'Có bài tập luyện tập sau mỗi buổi',
    'Đi từ cơ bản đến chuyên sâu',
    'Bao phủ cấu trúc trang web, form, semantic HTML, accessibility, SEO cơ bản',
    'Có mini project và bài tổng ôn cuối khóa'
  ],
  chapters: [
    {
      id: 'html-01',
      title: 'Buổi 1: HTML là gì? Cấu trúc đầu tiên của trang web',
      level: 'beginner',
      content: `
# Buổi 1: HTML là gì? Cấu trúc đầu tiên của trang web

## Mục tiêu
- Hiểu HTML là gì
- Biết vai trò của HTML trong website
- Tạo được file HTML đầu tiên

## Nội dung chính
- HTML là ngôn ngữ đánh dấu
- Vai trò của HTML, CSS, JavaScript
- Cấu trúc cơ bản:
  - \`<!DOCTYPE html>\`
  - \`<html>\`
  - \`<head>\`
  - \`<body>\`

## Ví dụ
\`\`\`html
<!DOCTYPE html>
<html>
  <head>
    <title>Trang đầu tiên</title>
  </head>
  <body>
    <h1>Xin chào HTML</h1>
  </body>
</html>
\`\`\`

## Bài tập luyện tập
1. Tạo file \`index.html\`
2. Thêm tiêu đề tab trình duyệt
3. Hiển thị một dòng chữ chào mừng trong \`body\`

## Bài tập nâng cao
- Viết lại cấu trúc HTML hoàn chỉnh mà không nhìn mẫu
      `
    },
    {
      id: 'html-02',
      title: 'Buổi 2: Thẻ, phần tử và thuộc tính',
      level: 'beginner',
      content: `
# Buổi 2: Thẻ, phần tử và thuộc tính

## Mục tiêu
- Hiểu thẻ mở, thẻ đóng
- Biết phần tử HTML là gì
- Hiểu thuộc tính dùng để làm gì

## Nội dung chính
- Thẻ mở / thẻ đóng
- Nội dung bên trong phần tử
- Thuộc tính như:
  - \`href\`
  - \`src\`
  - \`alt\`
  - \`title\`
  - \`id\`
  - \`class\`

## Ví dụ
\`\`\`html
<a href="https://example.com" title="Đi tới trang web">Truy cập</a>
\`\`\`

## Bài tập luyện tập
1. Tạo 3 phần tử HTML khác nhau
2. Gắn thuộc tính cho thẻ \`a\`, \`img\`, \`input\`
3. Phân biệt đâu là thẻ, đâu là thuộc tính

## Bài tập nâng cao
- Tự giải thích cấu tạo của một phần tử HTML hoàn chỉnh
      `
    },
    {
      id: 'html-03',
      title: 'Buổi 3: Tiêu đề, đoạn văn, xuống dòng, định dạng văn bản',
      level: 'beginner',
      content: `
# Buổi 3: Tiêu đề, đoạn văn, xuống dòng, định dạng văn bản

## Mục tiêu
- Biết dùng \`h1\` đến \`h6\`
- Biết dùng \`p\`, \`br\`, \`hr\`
- Biết định dạng chữ cơ bản

## Nội dung chính
- Thẻ tiêu đề
- Thẻ đoạn văn
- Xuống dòng và kẻ ngang
- In đậm, nhấn mạnh:
  - \`strong\`
  - \`em\`
  - \`mark\`
  - \`small\`

## Bài tập luyện tập
1. Tạo một bài giới thiệu bản thân có:
   - 1 tiêu đề chính
   - 2 tiêu đề phụ
   - 3 đoạn văn
2. Dùng \`strong\` và \`em\` để nhấn mạnh từ khóa

## Bài tập nâng cao
- Viết một bài giới thiệu ngắn giống bài blog nhỏ bằng các thẻ đã học
      `
    },
    {
      id: 'html-04',
      title: 'Buổi 4: Liên kết và điều hướng',
      level: 'beginner',
      content: `
# Buổi 4: Liên kết và điều hướng

## Mục tiêu
- Biết tạo liên kết
- Biết mở tab mới
- Biết liên kết đến phần tử trong cùng trang

## Nội dung chính
- Thẻ \`a\`
- Thuộc tính \`href\`
- \`target="_blank"\`
- Link tuyệt đối và link tương đối
- Anchor link với \`id\`

## Bài tập luyện tập
1. Tạo menu có 3 liên kết
2. Tạo liên kết tới Google
3. Tạo nút "Lên đầu trang"

## Bài tập nâng cao
- Tạo một trang có menu điều hướng đến các phần: Giới thiệu, Kỹ năng, Liên hệ
      `
    },
    {
      id: 'html-05',
      title: 'Buổi 5: Hình ảnh, đường dẫn và thư mục',
      level: 'beginner',
      content: `
# Buổi 5: Hình ảnh, đường dẫn và thư mục

## Mục tiêu
- Hiểu cách chèn ảnh
- Biết dùng đường dẫn tương đối và tuyệt đối
- Hiểu ý nghĩa của \`alt\`

## Nội dung chính
- Thẻ \`img\`
- \`src\`, \`alt\`, \`width\`, \`height\`
- Cấu trúc thư mục dự án
- Ảnh trong cùng thư mục và thư mục con

## Bài tập luyện tập
1. Chèn 2 ảnh vào trang
2. Viết mô tả \`alt\` rõ ràng cho từng ảnh
3. Tạo thư mục \`images\` và gọi ảnh từ đó

## Bài tập nâng cao
- Tạo một trang “Bộ sưu tập ảnh” gồm 4 ảnh và tiêu đề mô tả
      `
    },
    {
      id: 'html-06',
      title: 'Buổi 6: Danh sách và cấu trúc nội dung',
      level: 'beginner',
      content: `
# Buổi 6: Danh sách và cấu trúc nội dung

## Mục tiêu
- Biết tạo danh sách có thứ tự và không thứ tự
- Biết khi nào dùng từng loại danh sách

## Nội dung chính
- \`ul\`, \`ol\`, \`li\`
- Danh sách lồng nhau
- Ứng dụng trong menu, checklist, quy trình

## Bài tập luyện tập
1. Tạo danh sách kỹ năng của bạn
2. Tạo danh sách 5 bước học HTML
3. Tạo danh sách lồng nhau cho chủ đề học web

## Bài tập nâng cao
- Tạo menu món ăn hoặc kế hoạch học tập bằng danh sách lồng nhau
      `
    },
    {
      id: 'html-07',
      title: 'Buổi 7: Block và inline, thẻ bao nội dung',
      level: 'beginner',
      content: `
# Buổi 7: Block và inline, thẻ bao nội dung

## Mục tiêu
- Hiểu block và inline
- Biết dùng \`div\` và \`span\`
- Biết nhóm nội dung hợp lý

## Nội dung chính
- Phần tử block
- Phần tử inline
- \`div\` để chia khối
- \`span\` để bọc chữ nhỏ trong dòng

## Bài tập luyện tập
1. Tạo 3 khối nội dung bằng \`div\`
2. Dùng \`span\` để đánh dấu 1 từ quan trọng trong câu
3. Quan sát sự khác nhau giữa block và inline

## Bài tập nâng cao
- Chia bố cục hồ sơ cá nhân thành từng vùng bằng \`div\`
      `
    },
    {
      id: 'html-08',
      title: 'Buổi 8: Bảng trong HTML',
      level: 'intermediate',
      content: `
# Buổi 8: Bảng trong HTML

## Mục tiêu
- Biết tạo bảng
- Hiểu hàng, cột, ô tiêu đề
- Biết khi nào nên dùng bảng

## Nội dung chính
- \`table\`, \`tr\`, \`th\`, \`td\`
- \`thead\`, \`tbody\`, \`tfoot\`
- \`colspan\`, \`rowspan\` cơ bản

## Bài tập luyện tập
1. Tạo bảng thời khóa biểu
2. Tạo bảng thông tin sản phẩm
3. Thêm hàng tiêu đề cho bảng

## Bài tập nâng cao
- Tạo bảng điểm học sinh có cột tổng kết
      `
    },
    {
      id: 'html-09',
      title: 'Buổi 9: Form cơ bản',
      level: 'intermediate',
      content: `
# Buổi 9: Form cơ bản

## Mục tiêu
- Hiểu form dùng để làm gì
- Biết tạo input cơ bản
- Biết nút submit hoạt động thế nào

## Nội dung chính
- \`form\`
- \`input type="text"\`
- \`password\`
- \`email\`
- \`submit\`
- \`placeholder\`
- \`name\`

## Bài tập luyện tập
1. Tạo form đăng nhập
2. Tạo form đăng ký có tên, email, mật khẩu
3. Thêm nút gửi form

## Bài tập nâng cao
- Tạo form đăng ký tài khoản đầy đủ hơn với 5 trường
      `
    },
    {
      id: 'html-10',
      title: 'Buổi 10: Form nâng cao',
      level: 'intermediate',
      content: `
# Buổi 10: Form nâng cao

## Mục tiêu
- Biết dùng nhiều loại input hơn
- Hiểu checkbox, radio, select, textarea
- Tạo form thực tế hơn

## Nội dung chính
- \`checkbox\`
- \`radio\`
- \`textarea\`
- \`select\`, \`option\`
- \`date\`, \`number\`, \`file\`

## Bài tập luyện tập
1. Tạo form khảo sát sở thích
2. Tạo form ứng tuyển cơ bản
3. Tạo dropdown chọn thành phố

## Bài tập nâng cao
- Tạo form “Liên hệ với chúng tôi” hoàn chỉnh
      `
    },
    {
      id: 'html-11',
      title: 'Buổi 11: Label, validation và trải nghiệm người dùng trong form',
      level: 'intermediate',
      content: `
# Buổi 11: Label, validation và trải nghiệm người dùng trong form

## Mục tiêu
- Biết gắn \`label\` đúng cách
- Biết dùng các thuộc tính kiểm tra dữ liệu
- Hiểu form thân thiện với người dùng là gì

## Nội dung chính
- \`label\` + \`for\`
- \`required\`
- \`minlength\`, \`maxlength\`
- \`min\`, \`max\`
- \`checked\`, \`selected\`
- \`disabled\`, \`readonly\`

## Bài tập luyện tập
1. Sửa một form để có \`label\` đầy đủ
2. Thêm \`required\` cho các trường bắt buộc
3. Giới hạn độ dài mật khẩu

## Bài tập nâng cao
- Tạo form đăng ký chuẩn hơn, dễ dùng hơn, có kiểm tra dữ liệu cơ bản
      `
    },
    {
      id: 'html-12',
      title: 'Buổi 12: Semantic HTML cơ bản',
      level: 'intermediate',
      content: `
# Buổi 12: Semantic HTML cơ bản

## Mục tiêu
- Hiểu semantic HTML là gì
- Biết tại sao không nên dùng \`div\` cho mọi thứ
- Biết các thẻ semantic phổ biến

## Nội dung chính
- \`header\`
- \`nav\`
- \`main\`
- \`section\`
- \`article\`
- \`aside\`
- \`footer\`

## Bài tập luyện tập
1. Chuyển một bố cục đang dùng \`div\` sang semantic HTML
2. Tạo bố cục blog đơn giản với:
   - header
   - nav
   - main
   - article
   - footer

## Bài tập nâng cao
- Tạo trang tin tức nhỏ bằng semantic HTML
      `
    },
    {
      id: 'html-13',
      title: 'Buổi 13: Semantic HTML nâng cao và bố cục trang',
      level: 'intermediate',
      content: `
# Buổi 13: Semantic HTML nâng cao và bố cục trang

## Mục tiêu
- Phân biệt \`section\`, \`article\`, \`aside\`
- Biết chia bố cục trang logic
- Viết HTML rõ nghĩa hơn

## Nội dung chính
- Khi nào dùng \`section\`
- Khi nào dùng \`article\`
- Nội dung phụ với \`aside\`
- Bố cục landing page, blog, trang tin

## Bài tập luyện tập
1. Tạo bố cục trang bài viết hoàn chỉnh
2. Thêm sidebar bằng \`aside\`
3. Chia nội dung thành nhiều section hợp lý

## Bài tập nâng cao
- Tạo trang blog có bài viết chính và khung bài viết liên quan
      `
    },
    {
      id: 'html-14',
      title: 'Buổi 14: Thẻ media và nội dung nhúng',
      level: 'intermediate',
      content: `
# Buổi 14: Thẻ media và nội dung nhúng

## Mục tiêu
- Biết chèn audio, video
- Biết nhúng nội dung bên ngoài
- Hiểu các trường hợp dùng iframe

## Nội dung chính
- \`audio\`
- \`video\`
- \`source\`
- \`iframe\`

## Bài tập luyện tập
1. Chèn một video vào trang
2. Thêm audio có nút điều khiển
3. Nhúng Google Map hoặc video YouTube

## Bài tập nâng cao
- Tạo một trang giới thiệu khóa học có video và bản đồ
      `
    },
    {
      id: 'html-15',
      title: 'Buổi 15: Head, meta và SEO cơ bản',
      level: 'advanced',
      content: `
# Buổi 15: Head, meta và SEO cơ bản

## Mục tiêu
- Hiểu vai trò của \`head\`
- Biết dùng \`meta\` cơ bản
- Hiểu nền tảng SEO trong HTML

## Nội dung chính
- \`title\`
- \`meta charset\`
- \`meta name="viewport"\`
- \`meta description\`
- Cấu trúc heading hợp lý
- \`alt\` cho ảnh

## Bài tập luyện tập
1. Viết phần \`head\` chuẩn cho một trang web
2. Thêm mô tả cho trang
3. Kiểm tra lại tiêu đề trang và các heading

## Bài tập nâng cao
- Tối ưu một trang HTML đơn giản để thân thiện hơn với SEO
      `
    },
    {
      id: 'html-16',
      title: 'Buổi 16: Accessibility (trợ năng) trong HTML',
      level: 'advanced',
      content: `
# Buổi 16: Accessibility trong HTML

## Mục tiêu
- Hiểu trợ năng là gì
- Biết viết HTML dễ dùng cho nhiều đối tượng
- Biết các lỗi phổ biến ảnh hưởng đến accessibility

## Nội dung chính
- Dùng semantic HTML đúng cách
- \`label\` cho form
- \`alt\` cho ảnh
- Thứ tự heading hợp lý
- Nút phải là \`button\`, link phải là \`a\`

## Bài tập luyện tập
1. Sửa một form để thân thiện hơn với accessibility
2. Kiểm tra lại ảnh và heading trong một trang HTML
3. Thay thẻ chưa phù hợp bằng thẻ đúng nghĩa

## Bài tập nâng cao
- Rà soát một trang HTML và ghi ra 10 lỗi accessibility thường gặp
      `
    },
    {
      id: 'html-17',
      title: 'Buổi 17: Các thẻ HTML hiện đại và ít được biết đến',
      level: 'advanced',
      content: `
# Buổi 17: Các thẻ HTML hiện đại và ít được biết đến

## Mục tiêu
- Mở rộng kiến thức ngoài các thẻ cơ bản
- Biết thêm các thẻ hữu ích trong dự án thực tế

## Nội dung chính
- \`details\`, \`summary\`
- \`figure\`, \`figcaption\`
- \`progress\`
- \`meter\`
- \`abbr\`
- \`code\`
- \`pre\`

## Bài tập luyện tập
1. Tạo mục FAQ bằng \`details\` và \`summary\`
2. Tạo hình ảnh có chú thích bằng \`figure\`
3. Thêm thanh tiến trình học tập

## Bài tập nâng cao
- Tạo trang giới thiệu khóa học có FAQ, thanh tiến độ, ảnh minh họa có chú thích
      `
    },
    {
      id: 'html-18',
      title: 'Buổi 18: Cấu trúc một trang web hoàn chỉnh bằng HTML',
      level: 'advanced',
      content: `
# Buổi 18: Cấu trúc một trang web hoàn chỉnh bằng HTML

## Mục tiêu
- Kết hợp các kiến thức đã học
- Biết cách tổ chức nội dung một trang web hoàn chỉnh

## Nội dung chính
- Header
- Navigation
- Hero section
- Main content
- Form liên hệ
- Footer

## Bài tập luyện tập
1. Phác thảo bố cục một landing page chỉ bằng HTML
2. Tạo trang giới thiệu cá nhân hoàn chỉnh

## Bài tập nâng cao
- Tạo một landing page sản phẩm chỉ dùng HTML, bố cục logic và semantic
      `
    },
    {
      id: 'html-19',
      title: 'Buổi 19: Mini Project HTML',
      level: 'advanced',
      content: `
# Buổi 19: Mini Project HTML

## Mục tiêu
- Ứng dụng HTML vào sản phẩm nhỏ
- Rèn tư duy xây cấu trúc trang

## Gợi ý project
Chọn 1 trong 3 project:
1. Trang hồ sơ cá nhân
2. Trang blog cá nhân
3. Trang giới thiệu khóa học

## Yêu cầu bắt buộc
- Có \`head\` đầy đủ
- Có semantic HTML
- Có ảnh
- Có liên kết
- Có danh sách
- Có form liên hệ hoặc form đăng ký

## Bài tập luyện tập
- Hoàn thành mini project theo yêu cầu

## Bài tập nâng cao
- Tự thêm bảng, FAQ hoặc media vào project
      `
    },
    {
      id: 'html-20',
      title: 'Buổi 20: Tổng ôn và Dự án cuối khóa',
      level: 'advanced',
      content: `
# Buổi 20: Tổng ôn và Dự án cuối khóa

## Mục tiêu
- Hệ thống lại toàn bộ HTML
- Hoàn thiện một dự án hoàn chỉnh
- Tự đánh giá mức độ làm chủ HTML

## Nội dung ôn tập
- Cấu trúc trang HTML
- Text, link, ảnh, danh sách
- Bảng
- Form
- Semantic HTML
- SEO cơ bản
- Accessibility

## Dự án cuối khóa
Tạo một website nhiều phần bằng HTML gồm:
- Header
- Menu điều hướng
- Khu vực giới thiệu
- Khu vực nội dung chính
- Bảng hoặc danh sách
- Form liên hệ
- Footer

## Checklist tự đánh giá
- Có dùng semantic HTML không?
- Có \`label\` cho form không?
- Có \`alt\` cho ảnh không?
- Có heading rõ ràng không?
- Cấu trúc có dễ đọc không?

## Bài tập cuối khóa
- Hoàn thiện dự án
- Tự rà soát và cải thiện toàn bộ HTML
      `
    }
  ]
};