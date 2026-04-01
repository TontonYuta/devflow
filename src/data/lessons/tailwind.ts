import { Lesson } from '../../types';

export const tailwindLesson: Lesson = {
  id: 'tailwind-4-mastery',
  icon: 'zap',
  title: 'Tailwind CSS 4',
  description:
    'Lộ trình 20 buổi học Tailwind CSS 4 từ cơ bản đến chuyên sâu, chia nhỏ dễ học, có bài tập thực hành và mini project để giúp người học xây giao diện nhanh, đẹp, responsive và dễ bảo trì.',
  points: [
    'Hiểu tư duy Utility-First và cách viết UI bằng class tiện ích',
    'Làm chủ spacing, màu sắc, typography, layout, responsive và states',
    'Biết dùng Tailwind 4 theo hướng CSS-first với @theme',
    'Biết tổ chức code Tailwind gọn gàng trong React/Next.js',
    'Có bài tập và project để luyện xây giao diện thực tế'
  ],
  chapters: [
    {
      id: 'tw-01',
      title: 'Buổi 1: Tailwind CSS là gì? Vì sao nên học?',
      level: 'beginner',
      content: `
# Buổi 1: Tailwind CSS là gì? Vì sao nên học?

## Mục tiêu
- Hiểu Tailwind CSS là gì
- Biết Tailwind khác CSS truyền thống ở điểm nào
- Hiểu tư duy Utility-First

## Nội dung chính
- Tailwind là framework CSS theo hướng utility-first
- Không cần đặt quá nhiều class tùy chỉnh
- Ghép các utility class để tạo giao diện
- Khi nào nên dùng Tailwind

## Ví dụ
\`\`\`html
<button class="bg-blue-500 text-white px-4 py-2 rounded">
  Lưu thay đổi
</button>
\`\`\`

## Bài tập luyện tập
1. So sánh CSS thường và Tailwind
2. Viết lại một nút bấm đơn giản bằng Tailwind
3. Giải thích ý nghĩa của 4 utility class đầu tiên bạn dùng

## Bài tập thử thách
- Tạo 2 nút có giao diện khác nhau chỉ bằng utility class
      `
    },
    {
      id: 'tw-02',
      title: 'Buổi 2: Cài đặt Tailwind CSS 4',
      level: 'beginner',
      content: `
# Buổi 2: Cài đặt Tailwind CSS 4

## Mục tiêu
- Biết cách cài Tailwind vào project
- Hiểu cách import Tailwind trong CSS
- Chạy được ví dụ đầu tiên

## Nội dung chính
- Cài Tailwind vào dự án
- Dùng \`@import "tailwindcss";\`
- Kết nối Tailwind với HTML, React hoặc Vite
- Kiểm tra Tailwind đã hoạt động

## Ví dụ
\`\`\`css
@import "tailwindcss";
\`\`\`

\`\`\`html
<h1 class="text-3xl font-bold text-blue-600">Hello Tailwind</h1>
\`\`\`

## Bài tập luyện tập
1. Cài Tailwind vào project mẫu
2. Tạo một tiêu đề màu xanh
3. Tạo một nút có padding và bo góc

## Bài tập thử thách
- Tạo một trang chào mừng nhỏ chỉ với Tailwind
      `
    },
    {
      id: 'tw-03',
      title: 'Buổi 3: Spacing, sizing và Box Model trong Tailwind',
      level: 'beginner',
      content: `
# Buổi 3: Spacing, sizing và Box Model trong Tailwind

## Mục tiêu
- Biết dùng padding, margin, width, height
- Hiểu cách Tailwind biểu diễn khoảng cách
- Làm chủ các class kích thước cơ bản

## Nội dung chính
- \`p-\`, \`px-\`, \`py-\`
- \`m-\`, \`mx-\`, \`my-\`
- \`w-\`, \`h-\`
- \`max-w-\`
- Box Model khi viết bằng utility class

## Ví dụ
\`\`\`html
<div class="p-4 m-6 w-64 h-32 bg-gray-100">
  Nội dung
</div>
\`\`\`

## Bài tập luyện tập
1. Tạo 3 box có padding khác nhau
2. Tạo 2 box có margin khác nhau
3. Tạo một card có chiều rộng cố định

## Bài tập thử thách
- Tạo thẻ thông báo có khoảng cách trong ngoài hài hòa
      `
    },
    {
      id: 'tw-04',
      title: 'Buổi 4: Màu sắc, nền, viền và đổ bóng',
      level: 'beginner',
      content: `
# Buổi 4: Màu sắc, nền, viền và đổ bóng

## Mục tiêu
- Biết tô màu giao diện bằng Tailwind
- Biết dùng border và shadow
- Làm phần tử trông hiện đại hơn

## Nội dung chính
- \`text-\`
- \`bg-\`
- \`border\`, \`border-\`
- \`rounded\`
- \`shadow\`

## Ví dụ
\`\`\`html
<div class="bg-white border border-gray-200 rounded-xl shadow p-4">
  Card đơn giản
</div>
\`\`\`

## Bài tập luyện tập
1. Tạo card có nền trắng và shadow
2. Tạo nút nền xanh chữ trắng
3. Tạo 3 khối với 3 màu nền khác nhau

## Bài tập thử thách
- Tạo card sản phẩm có viền, bo góc và đổ bóng đẹp mắt
      `
    },
    {
      id: 'tw-05',
      title: 'Buổi 5: Typography trong Tailwind',
      level: 'beginner',
      content: `
# Buổi 5: Typography trong Tailwind

## Mục tiêu
- Biết chỉnh cỡ chữ, độ đậm, căn lề
- Biết tạo hệ thống chữ dễ đọc
- Làm chủ nhóm class typography cơ bản

## Nội dung chính
- \`text-sm\`, \`text-lg\`, \`text-2xl\`
- \`font-bold\`, \`font-medium\`
- \`leading-\`
- \`tracking-\`
- \`text-center\`, \`text-left\`

## Ví dụ
\`\`\`html
<h1 class="text-3xl font-bold tracking-tight">
  Tiêu đề chính
</h1>
<p class="text-base leading-7 text-gray-700">
  Đoạn mô tả dễ đọc hơn.
</p>
\`\`\`

## Bài tập luyện tập
1. Tạo tiêu đề chính và tiêu đề phụ
2. Tạo một đoạn mô tả dễ đọc
3. Căn giữa một tiêu đề và căn trái phần nội dung

## Bài tập thử thách
- Thiết kế một khối giới thiệu sản phẩm bằng typography Tailwind
      `
    },
    {
      id: 'tw-06',
      title: 'Buổi 6: Flexbox trong Tailwind',
      level: 'beginner',
      content: `
# Buổi 6: Flexbox trong Tailwind

## Mục tiêu
- Biết dùng Flexbox bằng utility class
- Căn chỉnh phần tử theo hàng ngang và dọc
- Tạo layout nhỏ nhanh hơn

## Nội dung chính
- \`flex\`
- \`items-center\`
- \`justify-center\`
- \`justify-between\`
- \`gap-\`
- \`flex-col\`

## Ví dụ
\`\`\`html
<div class="flex items-center justify-between gap-4">
  <span>Logo</span>
  <nav>Menu</nav>
</div>
\`\`\`

## Bài tập luyện tập
1. Tạo thanh header đơn giản
2. Căn giữa một box cả ngang lẫn dọc
3. Tạo 3 nút nằm ngang với khoảng cách đều

## Bài tập thử thách
- Tạo layout card gồm ảnh bên trái và nội dung bên phải
      `
    },
    {
      id: 'tw-07',
      title: 'Buổi 7: Grid trong Tailwind',
      level: 'intermediate',
      content: `
# Buổi 7: Grid trong Tailwind

## Mục tiêu
- Biết tạo layout nhiều cột bằng Grid
- Hiểu khi nào nên dùng Grid thay vì Flex
- Tạo gallery và danh sách card

## Nội dung chính
- \`grid\`
- \`grid-cols-\`
- \`gap-\`
- \`col-span-\`
- \`row-span-\`

## Ví dụ
\`\`\`html
<div class="grid grid-cols-3 gap-4">
  <div class="bg-gray-100 p-4">1</div>
  <div class="bg-gray-100 p-4">2</div>
  <div class="bg-gray-100 p-4">3</div>
</div>
\`\`\`

## Bài tập luyện tập
1. Tạo lưới 3 cột
2. Tạo gallery ảnh đơn giản
3. Tạo một item chiếm 2 cột

## Bài tập thử thách
- Tạo layout dashboard nhỏ bằng Grid
      `
    },
    {
      id: 'tw-08',
      title: 'Buổi 8: Responsive Design với Tailwind',
      level: 'intermediate',
      content: `
# Buổi 8: Responsive Design với Tailwind

## Mục tiêu
- Biết làm giao diện thích ứng theo màn hình
- Biết dùng breakpoint của Tailwind
- Tạo layout mobile-first

## Nội dung chính
- Prefix responsive:
  - \`sm:\`
  - \`md:\`
  - \`lg:\`
  - \`xl:\`
- Tư duy mobile-first
- Thay đổi width, font, layout theo màn hình

## Ví dụ
\`\`\`html
<div class="w-full md:w-1/2 lg:w-1/3">
  Nội dung responsive
</div>
\`\`\`

## Bài tập luyện tập
1. Tạo khối full width trên mobile, 1/2 trên tablet
2. Tạo grid 1 cột trên mobile, 3 cột trên desktop
3. Thay đổi cỡ chữ theo màn hình

## Bài tập thử thách
- Tạo landing section responsive cho điện thoại và laptop
      `
    },
    {
      id: 'tw-09',
      title: 'Buổi 9: States - hover, focus, active, disabled',
      level: 'intermediate',
      content: `
# Buổi 9: States - hover, focus, active, disabled

## Mục tiêu
- Biết tạo trạng thái tương tác
- Làm nút, input và link tự nhiên hơn
- Hiểu cách dùng state prefix

## Nội dung chính
- \`hover:\`
- \`focus:\`
- \`active:\`
- \`disabled:\`
- \`focus:ring-\`

## Ví dụ
\`\`\`html
<button class="bg-blue-500 hover:bg-blue-600 active:scale-95 text-white px-4 py-2 rounded">
  Nhấn vào tôi
</button>
\`\`\`

## Bài tập luyện tập
1. Tạo nút đổi màu khi hover
2. Tạo input có ring khi focus
3. Tạo nút disabled có giao diện khác

## Bài tập thử thách
- Tạo form nhỏ có button, input và select với đầy đủ trạng thái
      `
    },
    {
      id: 'tw-10',
      title: 'Buổi 10: Position, z-index, overflow và layer',
      level: 'intermediate',
      content: `
# Buổi 10: Position, z-index, overflow và layer

## Mục tiêu
- Biết định vị phần tử trong Tailwind
- Biết dùng absolute, relative, fixed
- Tạo badge, popup, nút nổi

## Nội dung chính
- \`relative\`, \`absolute\`, \`fixed\`, \`sticky\`
- \`top-\`, \`left-\`, \`right-\`, \`bottom-\`
- \`z-\`
- \`overflow-hidden\`

## Ví dụ
\`\`\`html
<div class="relative p-4 border rounded-xl">
  <span class="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
    Mới
  </span>
  Card sản phẩm
</div>
\`\`\`

## Bài tập luyện tập
1. Tạo badge ở góc card
2. Tạo nút chat fixed ở góc màn hình
3. Tạo card có ảnh bị cắt gọn bằng overflow

## Bài tập thử thách
- Tạo modal demo đơn giản chỉ bằng Tailwind class
      `
    },
    {
      id: 'tw-11',
      title: 'Buổi 11: Group, peer và trạng thái nâng cao',
      level: 'intermediate',
      content: `
# Buổi 11: Group, peer và trạng thái nâng cao

## Mục tiêu
- Biết điều khiển style phần tử con từ phần tử cha
- Biết style theo trạng thái của phần tử anh em
- Tạo tương tác UI linh hoạt hơn

## Nội dung chính
- \`group\`
- \`group-hover:\`
- \`peer\`
- \`peer-focus:\`
- \`peer-checked:\`

## Ví dụ
\`\`\`html
<div class="group p-4 border rounded-xl hover:bg-gray-50">
  <h3 class="text-lg font-semibold group-hover:text-blue-600">
    Tiêu đề card
  </h3>
</div>
\`\`\`

## Bài tập luyện tập
1. Tạo card đổi màu tiêu đề khi hover cha
2. Tạo checkbox điều khiển style label
3. Tạo input focus làm đổi màu icon

## Bài tập thử thách
- Tạo FAQ item có icon đổi màu khi hover hoặc focus
      `
    },
    {
      id: 'tw-12',
      title: 'Buổi 12: Dark mode và giao diện nhiều chủ đề',
      level: 'intermediate',
      content: `
# Buổi 12: Dark mode và giao diện nhiều chủ đề

## Mục tiêu
- Hiểu dark mode trong Tailwind
- Biết viết class cho light/dark
- Tạo giao diện thích ứng chủ đề

## Nội dung chính
- \`dark:\`
- Màu nền và chữ theo theme
- Tư duy thiết kế hai chế độ giao diện
- Đồng nhất màu trong dark mode

## Ví dụ
\`\`\`html
<div class="bg-white text-gray-900 dark:bg-gray-900 dark:text-white p-6 rounded-xl">
  Nội dung hỗ trợ dark mode
</div>
\`\`\`

## Bài tập luyện tập
1. Tạo card hỗ trợ dark mode
2. Tạo navbar có màu khác giữa light và dark
3. Tạo button hiển thị đẹp ở cả hai chế độ

## Bài tập thử thách
- Thiết kế một khối profile card hoàn chỉnh có dark mode
      `
    },
    {
      id: 'tw-13',
      title: 'Buổi 13: Form UI với Tailwind',
      level: 'intermediate',
      content: `
# Buổi 13: Form UI với Tailwind

## Mục tiêu
- Biết style form đẹp và dễ dùng
- Tạo input, textarea, select, checkbox bằng Tailwind
- Làm form rõ ràng và hiện đại hơn

## Nội dung chính
- Label + input layout
- Border, focus ring, spacing
- Nút submit
- Thông báo lỗi và gợi ý

## Ví dụ
\`\`\`html
<input
  class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
\`\`\`

## Bài tập luyện tập
1. Tạo form đăng nhập
2. Tạo form liên hệ
3. Tạo form đăng ký có 4 trường

## Bài tập thử thách
- Thiết kế form đăng ký đẹp hơn với trạng thái lỗi và thành công
      `
    },
    {
      id: 'tw-14',
      title: 'Buổi 14: Component UI phổ biến với Tailwind',
      level: 'advanced',
      content: `
# Buổi 14: Component UI phổ biến với Tailwind

## Mục tiêu
- Biết ráp các utility class thành component hoàn chỉnh
- Tạo các block UI tái sử dụng
- Tăng tốc xây giao diện thực tế

## Nội dung chính
- Button
- Card
- Navbar
- Hero section
- Badge
- Alert

## Ví dụ
\`\`\`html
<div class="max-w-sm bg-white rounded-2xl shadow p-6">
  <h3 class="text-xl font-bold mb-2">Card Title</h3>
  <p class="text-gray-600">Mô tả ngắn</p>
</div>
\`\`\`

## Bài tập luyện tập
1. Tạo button component
2. Tạo product card
3. Tạo navbar đơn giản

## Bài tập thử thách
- Tạo trang landing page ngắn gồm hero, feature card và CTA button
      `
    },
    {
      id: 'tw-15',
      title: 'Buổi 15: Tailwind CSS 4 và @theme',
      level: 'advanced',
      content: `
# Buổi 15: Tailwind CSS 4 và @theme

## Mục tiêu
- Hiểu cách tùy chỉnh theme trong Tailwind 4
- Biết khai báo màu và font riêng
- Áp dụng tư duy CSS-first của Tailwind 4

## Nội dung chính
- \`@import "tailwindcss";\`
- \`@theme\`
- Custom color
- Custom font
- Dùng token mới trong utility class

## Ví dụ
\`\`\`css
@import "tailwindcss";

@theme {
  --color-primary: #2563eb;
  --font-sans: "Inter", sans-serif;
}
\`\`\`

## Bài tập luyện tập
1. Tạo màu thương hiệu riêng
2. Tạo font mặc định cho toàn app
3. Dùng màu custom trong button hoặc card

## Bài tập thử thách
- Tạo theme riêng cho app học lập trình của bạn
      `
    },
    {
      id: 'tw-16',
      title: 'Buổi 16: Arbitrary values và tùy biến linh hoạt',
      level: 'advanced',
      content: `
# Buổi 16: Arbitrary values và tùy biến linh hoạt

## Mục tiêu
- Biết dùng giá trị tùy chỉnh khi class mặc định chưa đủ
- Viết giao diện linh hoạt hơn
- Tránh lạm dụng CSS ngoài không cần thiết

## Nội dung chính
- Cú pháp \`[...]\`
- Width, color, spacing tùy chỉnh
- Kết hợp arbitrary value với responsive và states

## Ví dụ
\`\`\`html
<div class="w-[320px] bg-[#0f172a] text-[18px] rounded-[20px] p-[18px]">
  Nội dung tùy chỉnh
</div>
\`\`\`

## Bài tập luyện tập
1. Tạo box có width tùy chỉnh
2. Dùng màu hex tùy chỉnh
3. Dùng border-radius tùy chỉnh

## Bài tập thử thách
- Thiết kế một card giao diện theo đúng mockup riêng bằng arbitrary values
      `
    },
    {
      id: 'tw-17',
      title: 'Buổi 17: Animation, transition và transform',
      level: 'advanced',
      content: `
# Buổi 17: Animation, transition và transform

## Mục tiêu
- Tạo giao diện có chuyển động mượt
- Biết hover effect đẹp hơn
- Kết hợp animation cơ bản với utility class

## Nội dung chính
- \`transition\`
- \`duration-\`
- \`ease-\`
- \`hover:scale-\`
- \`hover:-translate-y-\`
- \`animate-\`

## Ví dụ
\`\`\`html
<div class="transition duration-300 hover:-translate-y-1 hover:shadow-lg">
  Card có hiệu ứng hover
</div>
\`\`\`

## Bài tập luyện tập
1. Tạo nút có hiệu ứng hover
2. Tạo card nổi lên khi di chuột
3. Tạo loading đơn giản bằng animate class

## Bài tập thử thách
- Tạo grid sản phẩm có hover effect đồng nhất và mượt
      `
    },
    {
      id: 'tw-18',
      title: 'Buổi 18: Tổ chức code Tailwind gọn gàng',
      level: 'advanced',
      content: `
# Buổi 18: Tổ chức code Tailwind gọn gàng

## Mục tiêu
- Biết tránh class quá dài và rối
- Tổ chức UI component tốt hơn
- Giữ code dễ đọc trong React hoặc Next.js

## Nội dung chính
- Tách component
- Gom class theo nhóm
- Tư duy reusable UI
- Khi nào nên dùng CSS bổ sung
- Khi nào nên tạo component riêng thay vì nhồi class

## Ví dụ
\`\`\`tsx
function PrimaryButton() {
  return (
    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
      Gửi
    </button>
  );
}
\`\`\`

## Bài tập luyện tập
1. Tách một card dài thành component riêng
2. Viết lại một nút thường dùng thành component tái sử dụng
3. Chia layout thành section rõ ràng

## Bài tập thử thách
- Refactor một trang Tailwind dài thành các component gọn hơn
      `
    },
    {
      id: 'tw-19',
      title: 'Buổi 19: Tailwind với React và Next.js',
      level: 'advanced',
      content: `
# Buổi 19: Tailwind với React và Next.js

## Mục tiêu
- Biết dùng Tailwind hiệu quả trong React và Next.js
- Tổ chức UI component tốt hơn
- Kết hợp props và class linh hoạt

## Nội dung chính
- Tailwind trong JSX và TSX
- UI component nhận props
- Class thay đổi theo trạng thái
- Layout app hiện đại với Tailwind

## Ví dụ
\`\`\`tsx
type ButtonProps = {
  label: string;
  primary?: boolean;
};

function Button({ label, primary = true }: ButtonProps) {
  return (
    <button
      className={primary
        ? 'bg-blue-600 text-white px-4 py-2 rounded-lg'
        : 'bg-gray-200 text-gray-900 px-4 py-2 rounded-lg'}
    >
      {label}
    </button>
  );
}
\`\`\`

## Bài tập luyện tập
1. Tạo Button component nhận props
2. Tạo Card component nhận title và description
3. Tạo layout dashboard nhỏ bằng React + Tailwind

## Bài tập thử thách
- Tạo trang học online mini bằng React hoặc Next.js với Tailwind
      `
    },
    {
      id: 'tw-20',
      title: 'Buổi 20: Mini Project và dự án cuối khóa Tailwind CSS 4',
      level: 'advanced',
      content: `
# Buổi 20: Mini Project và dự án cuối khóa Tailwind CSS 4

## Mục tiêu
- Kết hợp toàn bộ kiến thức Tailwind đã học
- Tạo giao diện hoàn chỉnh, đẹp và responsive
- Tự đánh giá mức độ làm chủ Tailwind

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
- Có ít nhất 3 component UI
- Có dark mode hoặc theme riêng
- Có sử dụng Tailwind 4 theo hướng CSS-first ở mức cơ bản

## Checklist tự đánh giá
- Class có quá rối không?
- Giao diện có nhất quán không?
- Responsive đã ổn chưa?
- Màu sắc và khoảng cách có đều không?
- Có tận dụng được utility class thay vì viết CSS thừa không?

## Bài tập cuối khóa
- Hoàn thành project
- Tự refactor class dài và lặp
- Ghi lại những nhóm utility bạn đã dùng thành thạo nhất
      `
    }
  ]
};