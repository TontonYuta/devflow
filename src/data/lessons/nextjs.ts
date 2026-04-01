import { Lesson } from '../../types';

export const nextjsLesson: Lesson = {
  id: 'nextjs-mastery',
  icon: 'layers',
  title: 'Next.js (Full-stack React)',
  description:
    'Lộ trình 20 buổi học Next.js từ cơ bản đến chuyên sâu, chia nhỏ dễ học, có bài tập thực hành và mini project để giúp người học xây dựng ứng dụng React hiện đại, SEO tốt và có khả năng full-stack.',
  points: [
    'Hiểu Next.js là gì và vì sao nên dùng',
    'Nắm chắc App Router, layout, routing động và navigation',
    'Biết phân biệt Server Components và Client Components',
    'Làm việc với data fetching, caching, Server Actions và API',
    'Có bài tập và project để luyện xây ứng dụng thực tế'
  ],
  chapters: [
    {
      id: 'next-01',
      title: 'Buổi 1: Next.js là gì? Vì sao nên học?',
      level: 'beginner',
      content: `
# Buổi 1: Next.js là gì? Vì sao nên học?

## Mục tiêu
- Hiểu Next.js là gì
- Biết Next.js khác React thuần ở điểm nào
- Hiểu vì sao Next.js rất phổ biến trong dự án thực tế

## Nội dung chính
- React là thư viện UI
- Next.js là framework xây trên React
- Next.js hỗ trợ:
  - Routing
  - SEO tốt hơn
  - Server rendering
  - Full-stack trong cùng một project
- Khi nào nên dùng Next.js thay vì React thuần

## Ví dụ
\`\`\`tsx
export default function HomePage() {
  return <h1>Xin chào Next.js</h1>;
}
\`\`\`

## Bài tập luyện tập
1. Giải thích Next.js bằng lời của bạn
2. So sánh React và Next.js
3. Nêu 3 lợi ích khi dùng Next.js

## Bài tập thử thách
- Phân tích một website thực tế và giải thích vì sao nó phù hợp với Next.js
      `
    },
    {
      id: 'next-02',
      title: 'Buổi 2: Tạo project Next.js và hiểu cấu trúc cơ bản',
      level: 'beginner',
      content: `
# Buổi 2: Tạo project Next.js và hiểu cấu trúc cơ bản

## Mục tiêu
- Tạo được project Next.js
- Hiểu các thư mục quan trọng
- Chạy được project đầu tiên

## Nội dung chính
- Tạo app bằng create-next-app
- Chạy dev server
- Các thư mục hay gặp:
  - \`app/\`
  - \`public/\`
  - \`components/\`
  - \`styles/\`
- Vai trò của \`package.json\` và \`next.config\`

## Ví dụ
\`\`\`bash
npx create-next-app@latest
npm run dev
\`\`\`

## Bài tập luyện tập
1. Tạo một project Next.js mới
2. Chạy app trên trình duyệt
3. Tìm và giải thích thư mục \`app/\`

## Bài tập thử thách
- Tự mô tả sơ đồ cấu trúc project bằng lời
      `
    },
    {
      id: 'next-03',
      title: 'Buổi 3: App Router và cách tạo trang',
      level: 'beginner',
      content: `
# Buổi 3: App Router và cách tạo trang

## Mục tiêu
- Hiểu App Router là gì
- Biết cách tạo route bằng thư mục
- Biết file \`page.tsx\` dùng để làm gì

## Nội dung chính
- Thư mục \`app/\`
- Mỗi thư mục con có \`page.tsx\` là một route
- Trang chủ, trang giới thiệu, trang blog
- Cách Next.js tự ánh xạ thư mục thành URL

## Ví dụ
\`\`\`text
app/
├── page.tsx       -> /
├── about/
│   └── page.tsx   -> /about
\`\`\`

## Bài tập luyện tập
1. Tạo trang chủ
2. Tạo trang \`/about\`
3. Tạo trang \`/contact\`

## Bài tập thử thách
- Tạo một app có 4 route cơ bản và mô tả URL tương ứng
      `
    },
    {
      id: 'next-04',
      title: 'Buổi 4: Layout trong Next.js',
      level: 'beginner',
      content: `
# Buổi 4: Layout trong Next.js

## Mục tiêu
- Hiểu layout là gì
- Biết tạo layout dùng chung cho nhiều trang
- Biết cách dùng \`children\`

## Nội dung chính
- \`layout.tsx\`
- Layout gốc và layout theo từng nhóm route
- Navbar, footer dùng chung
- Vai trò của \`children\`

## Ví dụ
\`\`\`tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>
        <nav>Menu</nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
\`\`\`

## Bài tập luyện tập
1. Tạo layout có header và footer
2. Dùng layout cho 3 trang khác nhau
3. Hiển thị nội dung từng trang trong \`children\`

## Bài tập thử thách
- Tạo layout riêng cho khu vực blog và layout chung cho toàn app
      `
    },
    {
      id: 'next-05',
      title: 'Buổi 5: Navigation và Link',
      level: 'beginner',
      content: `
# Buổi 5: Navigation và Link

## Mục tiêu
- Biết điều hướng giữa các trang
- Biết dùng \`Link\` thay vì thẻ \`a\`
- Tạo menu điều hướng cơ bản

## Nội dung chính
- \`next/link\`
- Điều hướng nội bộ trong app
- Tạo navbar đơn giản
- Khác nhau giữa link nội bộ và link ngoài

## Ví dụ
\`\`\`tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Trang chủ</Link>
      <Link href="/about">Giới thiệu</Link>
    </nav>
  );
}
\`\`\`

## Bài tập luyện tập
1. Tạo navbar có 3 link
2. Điều hướng giữa các trang
3. Thêm một link ra website bên ngoài

## Bài tập thử thách
- Tạo menu nhiều mục và đánh dấu mục đang active theo cách đơn giản
      `
    },
    {
      id: 'next-06',
      title: 'Buổi 6: Static route và dynamic route',
      level: 'beginner',
      content: `
# Buổi 6: Static route và dynamic route

## Mục tiêu
- Phân biệt route tĩnh và route động
- Biết tạo thư mục động với \`[id]\`
- Hiểu ứng dụng của route động

## Nội dung chính
- Static route: \`/about\`, \`/contact\`
- Dynamic route: \`/blog/[id]\`
- Dùng route động cho trang chi tiết sản phẩm, bài viết

## Ví dụ
\`\`\`text
app/
└── blog/
    └── [id]/
        └── page.tsx
\`\`\`

## Bài tập luyện tập
1. Tạo route \`/products/[id]\`
2. Tạo route \`/blog/[slug]\`
3. Giải thích khi nào nên dùng id, khi nào nên dùng slug

## Bài tập thử thách
- Thiết kế cấu trúc route cho một website bán hàng
      `
    },
    {
      id: 'next-07',
      title: 'Buổi 7: Nhận params trong dynamic route',
      level: 'intermediate',
      content: `
# Buổi 7: Nhận params trong dynamic route

## Mục tiêu
- Biết lấy tham số từ URL
- Hiểu params trong Next.js App Router
- Dùng params để hiển thị nội dung chi tiết

## Nội dung chính
- Nhận \`params\` trong \`page.tsx\`
- Lấy \`id\`, \`slug\` từ URL
- Render nội dung theo params

## Ví dụ
\`\`\`tsx
export default function ProductDetail({
  params,
}: {
  params: { id: string };
}) {
  return <h1>Sản phẩm {params.id}</h1>;
}
\`\`\`

## Bài tập luyện tập
1. Tạo trang chi tiết sản phẩm theo id
2. Tạo trang bài viết theo slug
3. Hiển thị tham số đang nhận được ra màn hình

## Bài tập thử thách
- Tạo route nhiều cấp như \`/course/[courseId]/lesson/[lessonId]\`
      `
    },
    {
      id: 'next-08',
      title: 'Buổi 8: Server Components là gì?',
      level: 'intermediate',
      content: `
# Buổi 8: Server Components là gì?

## Mục tiêu
- Hiểu Server Components là gì
- Biết vì sao Next.js App Router dùng Server Components mặc định
- Hiểu lợi ích về hiệu suất và bảo mật

## Nội dung chính
- Component chạy trên server
- Không gửi toàn bộ JavaScript xuống trình duyệt
- Có thể gọi dữ liệu an toàn hơn
- Phù hợp cho nội dung tĩnh và dữ liệu lấy từ server

## Ví dụ
\`\`\`tsx
export default async function HomePage() {
  return <h1>Đây là Server Component</h1>;
}
\`\`\`

## Bài tập luyện tập
1. Tạo một page là Server Component
2. Viết mô tả lợi ích của Server Component
3. Nêu ví dụ giao diện phù hợp với Server Component

## Bài tập thử thách
- Phân tích một trang tin tức và chỉ ra phần nào nên là Server Component
      `
    },
    {
      id: 'next-09',
      title: 'Buổi 9: Client Components và "use client"',
      level: 'intermediate',
      content: `
# Buổi 9: Client Components và "use client"

## Mục tiêu
- Biết khi nào cần Client Component
- Hiểu vai trò của \`"use client"\`
- Biết dùng state và event trong Next.js

## Nội dung chính
- Client Component chạy ở trình duyệt
- Dùng khi có:
  - \`useState\`
  - \`useEffect\`
  - \`onClick\`
  - tương tác người dùng
- Đặt \`"use client"\` ở đầu file

## Ví dụ
\`\`\`tsx
"use client";

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
\`\`\`

## Bài tập luyện tập
1. Tạo component nút đếm số
2. Tạo input nhập dữ liệu bằng state
3. So sánh Server Component và Client Component

## Bài tập thử thách
- Chia một trang thành phần server và phần client hợp lý
      `
    },
    {
      id: 'next-10',
      title: 'Buổi 10: Kết hợp Server Components và Client Components',
      level: 'intermediate',
      content: `
# Buổi 10: Kết hợp Server Components và Client Components

## Mục tiêu
- Biết cách phối hợp server và client trong cùng một trang
- Tối ưu hiệu năng bằng cách đặt client component nhỏ nhất có thể
- Tổ chức component hợp lý hơn

## Nội dung chính
- Server component chứa client component
- Truyền props từ server xuống client
- Nguyên tắc giữ càng nhiều code ở server càng tốt

## Ví dụ
\`\`\`tsx
import Counter from './Counter';

export default function Page() {
  const title = 'Trang sản phẩm';

  return (
    <div>
      <h1>{title}</h1>
      <Counter />
    </div>
  );
}
\`\`\`

## Bài tập luyện tập
1. Tạo trang server chứa nút client
2. Truyền dữ liệu từ server component xuống client component
3. Tách phần tương tác ra file riêng

## Bài tập thử thách
- Thiết kế trang blog: server cho nội dung, client cho like button
      `
    },
    {
      id: 'next-11',
      title: 'Buổi 11: Data Fetching cơ bản trong Next.js',
      level: 'intermediate',
      content: `
# Buổi 11: Data Fetching cơ bản trong Next.js

## Mục tiêu
- Biết lấy dữ liệu trong Server Component
- Biết dùng \`fetch\` với \`async/await\`
- Hiểu cách render dữ liệu từ API

## Nội dung chính
- \`fetch()\`
- Dùng \`await\` ngay trong page
- Render danh sách dữ liệu
- Tách hàm lấy dữ liệu ra riêng

## Ví dụ
\`\`\`tsx
async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

export default async function BlogPage() {
  const posts = await getPosts();
  return <div>{posts.length} bài viết</div>;
}
\`\`\`

## Bài tập luyện tập
1. Gọi API lấy danh sách bài viết
2. Hiển thị tiêu đề bài viết
3. Tách logic fetch ra thành hàm riêng

## Bài tập thử thách
- Tạo trang danh sách sản phẩm lấy dữ liệu từ API giả
      `
    },
    {
      id: 'next-12',
      title: 'Buổi 12: Caching, revalidate và no-store',
      level: 'intermediate',
      content: `
# Buổi 12: Caching, revalidate và no-store

## Mục tiêu
- Hiểu cache trong Next.js
- Biết khi nào dùng \`force-cache\`, \`no-store\`, \`revalidate\`
- Chọn chiến lược dữ liệu phù hợp

## Nội dung chính
- Cache mặc định
- Dữ liệu tĩnh
- Dữ liệu thay đổi thường xuyên
- Revalidate theo thời gian

## Ví dụ
\`\`\`tsx
await fetch('https://api.example.com/posts', {
  next: { revalidate: 60 },
});
\`\`\`

## Bài tập luyện tập
1. Tạo ví dụ dùng cache mặc định
2. Tạo ví dụ dùng \`no-store\`
3. Tạo ví dụ dùng \`revalidate: 60\`

## Bài tập thử thách
- Phân tích 3 loại trang: blog, bảng giá, dashboard realtime và chọn cache phù hợp
      `
    },
    {
      id: 'next-13',
      title: 'Buổi 13: Loading UI và Error UI',
      level: 'advanced',
      content: `
# Buổi 13: Loading UI và Error UI

## Mục tiêu
- Biết tạo giao diện khi đang tải
- Biết xử lý lỗi thân thiện hơn
- Nâng trải nghiệm người dùng

## Nội dung chính
- \`loading.tsx\`
- \`error.tsx\`
- Giao diện skeleton hoặc loading text
- Bắt lỗi khi fetch thất bại

## Ví dụ
\`\`\`tsx
export default function Loading() {
  return <p>Đang tải dữ liệu...</p>;
}
\`\`\`

## Bài tập luyện tập
1. Tạo \`loading.tsx\` cho trang blog
2. Tạo \`error.tsx\` đơn giản
3. Mô phỏng giao diện khi gọi API chậm

## Bài tập thử thách
- Tạo loading đẹp hơn cho danh sách sản phẩm
      `
    },
    {
      id: 'next-14',
      title: 'Buổi 14: Metadata và SEO trong Next.js',
      level: 'advanced',
      content: `
# Buổi 14: Metadata và SEO trong Next.js

## Mục tiêu
- Hiểu cách làm SEO cơ bản trong Next.js
- Biết đặt title và description cho từng trang
- Hiểu lợi ích SEO của server rendering

## Nội dung chính
- Metadata trong App Router
- \`title\`
- \`description\`
- SEO theo từng trang
- Open Graph ở mức cơ bản

## Ví dụ
\`\`\`tsx
export const metadata = {
  title: 'Trang blog',
  description: 'Danh sách bài viết mới nhất',
};
\`\`\`

## Bài tập luyện tập
1. Thêm metadata cho trang chủ
2. Thêm metadata cho trang blog
3. Viết description rõ ràng cho từng trang

## Bài tập thử thách
- Tạo metadata riêng cho trang chi tiết bài viết theo slug
      `
    },
    {
      id: 'next-15',
      title: 'Buổi 15: Route Handlers và API trong Next.js',
      level: 'advanced',
      content: `
# Buổi 15: Route Handlers và API trong Next.js

## Mục tiêu
- Biết tạo API trong Next.js
- Hiểu Route Handlers là gì
- Biết xử lý GET và POST cơ bản

## Nội dung chính
- \`app/api/.../route.ts\`
- Hàm \`GET\`
- Hàm \`POST\`
- Trả JSON bằng \`Response.json()\`

## Ví dụ
\`\`\`tsx
export async function GET() {
  return Response.json([{ id: 1, name: 'Sản phẩm A' }]);
}
\`\`\`

## Bài tập luyện tập
1. Tạo API trả về danh sách user
2. Tạo API trả về danh sách sản phẩm
3. Test API trên trình duyệt hoặc Postman

## Bài tập thử thách
- Tạo API POST nhận dữ liệu form đơn giản
      `
    },
    {
      id: 'next-16',
      title: 'Buổi 16: Server Actions',
      level: 'advanced',
      content: `
# Buổi 16: Server Actions

## Mục tiêu
- Hiểu Server Actions là gì
- Biết gửi form trực tiếp đến server action
- Biết vì sao đây là cách làm hiện đại trong Next.js

## Nội dung chính
- \`"use server"\`
- Hàm xử lý phía server
- Form action
- Giảm nhu cầu tự viết nhiều API route đơn giản

## Ví dụ
\`\`\`tsx
"use server";

export async function createPost(formData: FormData) {
  const title = formData.get('title');
  console.log(title);
}
\`\`\`

## Bài tập luyện tập
1. Tạo server action nhận tiêu đề bài viết
2. Tạo form gửi dữ liệu tới server action
3. In dữ liệu nhận được ra console server

## Bài tập thử thách
- Tạo form thêm công việc mới bằng Server Action
      `
    },
    {
      id: 'next-17',
      title: 'Buổi 17: Form, validation và mutation trong Next.js',
      level: 'advanced',
      content: `
# Buổi 17: Form, validation và mutation trong Next.js

## Mục tiêu
- Biết xử lý form thực tế hơn
- Biết kiểm tra dữ liệu đầu vào
- Biết cập nhật dữ liệu sau khi submit

## Nội dung chính
- Kết hợp form với Server Actions
- Kiểm tra dữ liệu đầu vào
- Mutation
- Hiển thị thông báo thành công hoặc lỗi

## Ví dụ
\`\`\`tsx
<form action={createPost}>
  <input name="title" />
  <button type="submit">Tạo bài viết</button>
</form>
\`\`\`

## Bài tập luyện tập
1. Tạo form thêm sản phẩm
2. Kiểm tra trường tiêu đề không được rỗng
3. Hiển thị thông báo sau khi gửi form

## Bài tập thử thách
- Tạo form liên hệ có kiểm tra dữ liệu đầu vào cơ bản
      `
    },
    {
      id: 'next-18',
      title: 'Buổi 18: Auth, bảo vệ route và middleware cơ bản',
      level: 'advanced',
      content: `
# Buổi 18: Auth, bảo vệ route và middleware cơ bản

## Mục tiêu
- Hiểu ý tưởng xác thực trong Next.js
- Biết bảo vệ route cơ bản
- Biết vai trò của middleware

## Nội dung chính
- Auth là gì
- Route public và route private
- Middleware cơ bản
- Kiểm tra token hoặc trạng thái đăng nhập ở mức ý tưởng

## Ví dụ
\`\`\`tsx
// middleware.ts
import { NextResponse } from 'next/server';

export function middleware() {
  return NextResponse.next();
}
\`\`\`

## Bài tập luyện tập
1. Tạo danh sách route công khai và route riêng tư
2. Tạo middleware cơ bản
3. Mô tả luồng đăng nhập đơn giản

## Bài tập thử thách
- Thiết kế sơ đồ bảo vệ trang dashboard chỉ cho người đã đăng nhập
      `
    },
    {
      id: 'next-19',
      title: 'Buổi 19: Tổ chức project Next.js thực tế',
      level: 'advanced',
      content: `
# Buổi 19: Tổ chức project Next.js thực tế

## Mục tiêu
- Biết cách chia thư mục gọn gàng
- Biết tách component, lib, actions, types
- Viết project dễ mở rộng hơn

## Nội dung chính
- Thư mục \`components/\`
- Thư mục \`lib/\`
- Thư mục \`actions/\`
- Thư mục \`types/\`
- Tư duy tổ chức theo tính năng hoặc theo lớp

## Ví dụ
\`\`\`text
app/
components/
lib/
actions/
types/
\`\`\`

## Bài tập luyện tập
1. Sắp xếp lại project mẫu cho gọn hơn
2. Tách một component lớn thành nhiều component nhỏ
3. Tách type và helper function ra file riêng

## Bài tập thử thách
- Thiết kế cấu trúc thư mục cho app blog hoặc app học online
      `
    },
    {
      id: 'next-20',
      title: 'Buổi 20: Mini Project và dự án cuối khóa Next.js',
      level: 'advanced',
      content: `
# Buổi 20: Mini Project và dự án cuối khóa Next.js

## Mục tiêu
- Kết hợp toàn bộ kiến thức Next.js đã học
- Tạo app nhỏ có routing, data fetching và form
- Tự đánh giá mức độ làm chủ Next.js

## Gợi ý project
Chọn 1 trong các project:
1. Blog mini
2. Website khóa học
3. App sản phẩm đơn giản
4. Dashboard quản lý nội dung
5. Trang tin tức có SEO cơ bản

## Yêu cầu bắt buộc
- Có App Router
- Có layout dùng chung
- Có route tĩnh và route động
- Có data fetching
- Có ít nhất một form hoặc server action
- Có metadata cơ bản

## Checklist tự đánh giá
- Có dùng server/client component hợp lý không?
- Routing có rõ ràng không?
- Project có dễ mở rộng không?
- Dữ liệu có được fetch đúng cách không?
- Có SEO cơ bản không?

## Bài tập cuối khóa
- Hoàn thành project
- Tự refactor lại cấu trúc thư mục
- Ghi chú phần nào của Next.js bạn đã nắm chắc, phần nào cần luyện thêm
      `
    }
  ]
};