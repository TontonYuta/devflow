import { Lesson } from '../../types';

export const nextjsLesson: Lesson = {
  id: 'nextjs-mastery',
  icon: 'layers',
  title: 'Next.js (Full-stack React)',
  description:
    'Lộ trình Next.js theo phong cách tự học cùng AI mentor. Mỗi buổi học đi kèm prompt cực chi tiết để học viên chỉ cần copy vào AI là có thể học từ bản chất, hiểu App Router, Server/Client Components, data fetching, form, API và được review như học cùng mentor 1-1.',
  points: [
    'Mỗi buổi có prompt cực chi tiết để copy vào AI và học ngay',
    'AI đóng vai mentor Next.js, dạy từ bản chất chứ không chỉ giải thích API',
    'Có prompt học lý thuyết, prompt build feature, prompt review và prompt phản biện kiến trúc',
    'Tập trung vào năng lực thật: routing, layout, server/client boundary, data fetching, form và API',
    'Có project xuyên suốt để ghép các buổi thành một app thực tế',
    'Học xong có thể tự xây một app Next.js nhỏ có cấu trúc rõ, SEO cơ bản và full-stack foundation'
  ],
  chapters: [
    {
      id: 'next-01',
      title: 'Buổi 1: Next.js là gì và vì sao nên học Next.js thay vì chỉ học React thuần?',
      level: 'beginner',
      content: `
# Buổi 1: Next.js là gì và vì sao nên học Next.js thay vì chỉ học React thuần?

## Mục tiêu
- Hiểu Next.js là gì
- Phân biệt React và Next.js
- Hiểu vì sao Next.js phổ biến trong dự án thực tế
- Bắt đầu nhìn Next.js như một framework full-stack, không chỉ là “React có thêm route”

## Cách học buổi này
Bạn sẽ copy từng prompt bên dưới vào AI theo đúng thứ tự.
Không học lướt. Sau mỗi prompt phải tự giải thích lại bằng lời của bạn.

## Prompt 1 - Nhờ AI dạy lý thuyết từ gốc
\`\`\`
Bạn hãy đóng vai một mentor Front-end/Full-stack cực giỏi, chuyên dạy Next.js cho người đã biết HTML/CSS/JavaScript/React cơ bản.

Hôm nay hãy dạy tôi buổi đầu tiên về Next.js theo phong cách:
- cực dễ hiểu nhưng không hời hợt
- giải thích từ bản chất
- luôn nói vì sao kiến thức này quan trọng
- gắn với bài toán thực tế của sản phẩm web
- không dùng thuật ngữ khó nếu chưa giải thích

Chủ đề hôm nay:
- Next.js là gì?
- Next.js khác React thuần ở đâu?
- Vì sao nhiều công ty dùng Next.js?
- Next.js giúp gì cho SEO, routing, data fetching và full-stack?
- Khi nào nên chọn Next.js?

Tôi muốn bạn dạy theo format:
1. React là gì?
2. Next.js là gì?
3. Next.js xây trên React như thế nào?
4. So sánh React thuần và Next.js theo góc nhìn người làm sản phẩm
5. Giải thích các lợi ích lớn của Next.js:
   - routing
   - layout
   - server rendering
   - SEO
   - full-stack cùng một project
6. Cho 5 tình huống thực tế mà Next.js phù hợp
7. Chỉ ra 8 hiểu lầm phổ biến của người mới về Next.js
8. Đặt cho tôi 5 câu hỏi kiểm tra hiểu bài
9. Sau khi tôi trả lời, bạn phải chấm và sửa thật kỹ

Dùng tiếng Việt và dạy như mentor thật sự.
\`\`\`

## Prompt 2 - Nhờ AI luyện tư duy chọn công cụ
\`\`\`
Tôi muốn luyện tư duy chọn khi nào nên dùng Next.js.

Hãy cho tôi 6 tình huống sản phẩm, ví dụ:
- blog có SEO
- dashboard nội bộ
- landing page marketing
- app học online
- cửa hàng sản phẩm
- app tương tác đơn giản chỉ chạy client

Với mỗi tình huống:
1. hỏi tôi có nên dùng Next.js không
2. hỏi tôi vì sao
3. hỏi thêm:
   - SEO có quan trọng không?
   - có cần full-stack trong cùng project không?
   - routing có phức tạp không?
4. sau đó bạn mới chữa
5. nếu tôi chọn chưa tốt, hãy giải thích trade-off thật rõ

Mục tiêu là để tôi chọn framework có lý do, không theo phong trào.
\`\`\`

## Prompt 3 - Nhờ AI kiểm tra hiểu bài
\`\`\`
Hãy kiểm tra xem tôi đã thật sự hiểu Next.js buổi 1 chưa.

Tôi muốn có:
- 3 câu hỏi trắc nghiệm có giải thích đáp án
- 3 câu hỏi tự luận ngắn
- 2 tình huống so sánh React và Next.js
- 1 câu hỏi tư duy: vì sao Next.js thường phù hợp với website cần SEO hơn React client-side đơn thuần?

Sau khi tôi trả lời, bạn hãy:
- chấm điểm từng câu
- giải thích chỗ sai
- nói tôi đang ở mức nào: chưa hiểu / hiểu cơ bản / hiểu chắc
\`\`\`

## Bài tập buổi này
1. Giải thích Next.js bằng lời của bạn
2. So sánh React và Next.js
3. Chọn 2 bài toán phù hợp với Next.js và giải thích lý do

## Tiêu chuẩn hoàn thành
- Hiểu Next.js là framework xây trên React
- Thấy rõ giá trị thực tế của Next.js
- Không còn nghĩ Next.js chỉ là “React + router”
      `
    },
    {
      id: 'next-02',
      title: 'Buổi 2: Tạo project Next.js và hiểu cấu trúc project thực tế',
      level: 'beginner',
      content: `
# Buổi 2: Tạo project Next.js và hiểu cấu trúc project thực tế

## Mục tiêu
- Tạo được project Next.js
- Chạy được dev server
- Hiểu các thư mục quan trọng
- Bắt đầu thấy cấu trúc app thực tế của Next.js

## Prompt 1 - Nhờ AI hướng dẫn cài đặt và tạo project
\`\`\`
Hãy đóng vai mentor kỹ thuật và hướng dẫn tôi tạo project Next.js đầu tiên.

Tôi muốn bạn hướng dẫn theo cách:
1. giải thích create-next-app là gì
2. hướng dẫn tôi tạo project mới bằng lệnh phù hợp
3. giải thích các lựa chọn thường gặp khi tạo project:
   - TypeScript
   - ESLint
   - Tailwind
   - src directory
   - App Router
4. hướng dẫn tôi chạy project bằng npm run dev
5. hướng dẫn tôi mở app trên trình duyệt
6. nếu có lỗi thường gặp, hãy chỉ luôn cách xử lý

Dùng tiếng Việt, hướng dẫn chậm mà chắc như mentor đang ngồi cạnh tôi.
\`\`\`

## Prompt 2 - Nhờ AI giải thích cấu trúc thư mục
\`\`\`
Tôi vừa tạo xong project Next.js. Hãy giúp tôi hiểu cấu trúc project như một mentor.

Tôi muốn bạn giải thích cực rõ các phần:
- app/
- public/
- components/
- styles/ nếu có
- package.json
- next.config nếu có
- tsconfig nếu có

Cách giải thích tôi muốn:
1. thư mục/file này dùng để làm gì?
2. khi nào tôi sẽ chạm vào nó?
3. phần nào là quan trọng nhất với người mới?
4. phần nào có thể tạm chưa cần hiểu sâu?
5. cuối cùng, hãy giúp tôi tự vẽ sơ đồ cấu trúc project bằng lời

Đừng chỉ liệt kê. Hãy giúp tôi có cảm giác “đi trong project”.
\`\`\`

## Prompt 3 - Nhờ AI kiểm tra hiểu cấu trúc
\`\`\`
Tôi sẽ mô tả lại cấu trúc project Next.js bằng lời của tôi.
Bạn hãy review:
1. Tôi hiểu đúng file/thư mục nào?
2. Tôi đang hiểu mơ hồ chỗ nào?
3. Có chỗ nào tôi đang nhầm giữa React project và Next.js project không?
4. Hãy cho tôi phiên bản giải thích ngắn gọn, dễ nhớ hơn
\`\`\`

## Bài tập buổi này
- Tạo project Next.js mới
- Chạy thành công dev server
- Tự mô tả vai trò của các thư mục/file chính

## Tiêu chuẩn hoàn thành
- Project chạy được
- Không còn mù cấu trúc thư mục
- Biết file nào sẽ dùng thường xuyên
      `
    },
    {
      id: 'next-03',
      title: 'Buổi 3: App Router, page.tsx và cách Next.js tạo route',
      level: 'beginner',
      content: `
# Buổi 3: App Router, page.tsx và cách Next.js tạo route

## Mục tiêu
- Hiểu App Router là gì
- Biết cách tạo route bằng thư mục
- Hiểu file \`page.tsx\` và mapping URL
- Bắt đầu xây được nhiều trang trong app

## Prompt 1 - Nhờ AI dạy routing từ bản chất
\`\`\`
Hãy dạy tôi Next.js buổi 3 về App Router như một mentor Front-end.

Chủ đề:
- app router
- thư mục app/
- page.tsx
- route theo thư mục
- route tĩnh

Tôi muốn bạn dạy theo cấu trúc:
1. Routing là gì trong web app?
2. App Router của Next.js hoạt động như thế nào?
3. Vì sao tạo thư mục lại ra URL?
4. page.tsx có vai trò gì?
5. Cho ví dụ rõ:
   - app/page.tsx -> /
   - app/about/page.tsx -> /about
   - app/contact/page.tsx -> /contact
6. Chỉ ra lỗi phổ biến:
   - tạo sai vị trí file
   - nhầm folder và component
   - không hiểu route được map từ đâu
7. Cho tôi 6 bài tập nhận diện route
8. Tóm tắt thành sơ đồ dễ nhớ

Dạy thật rõ như mentor đang xây nền routing cho người mới.
\`\`\`

## Prompt 2 - Nhờ AI dẫn tôi tạo nhiều route
\`\`\`
Hãy dẫn tôi thực hành buổi 3:
1. tạo trang chủ
2. tạo trang /about
3. tạo trang /contact
4. tạo trang /blog
5. tạo nội dung khác nhau cho từng trang

Cách hướng dẫn:
- nói rõ tôi cần tạo thư mục/file nào
- giải thích route nào sẽ xuất hiện
- để tôi tự làm từng bước
- sau mỗi bước, review:
  - file đặt đúng chỗ chưa
  - route có ra đúng không
  - code có rõ ràng không
\`\`\`

## Prompt 3 - Nhờ AI review tư duy routing của tôi
\`\`\`
Tôi sẽ gửi cho bạn cấu trúc thư mục app/ của tôi.
Bạn hãy review:
1. Route đã được tổ chức đúng chưa?
2. Có thư mục nào đặt sai mục đích không?
3. Tôi có hiểu đúng mối liên hệ giữa folder và URL không?
4. Có cách tổ chức nào tốt hơn cho app nhỏ này không?
\`\`\`

## Bài tập buổi này
- Tạo ít nhất 4 route tĩnh
- Tự mô tả URL tương ứng với mỗi route

## Tiêu chuẩn hoàn thành
- Hiểu App Router hoạt động thế nào
- Tạo được route bằng thư mục
- Không còn thấy routing là thứ mơ hồ
      `
    },
    {
      id: 'next-04',
      title: 'Buổi 4: Layout, navigation và dynamic route trong Next.js',
      level: 'beginner',
      content: `
# Buổi 4: Layout, navigation và dynamic route trong Next.js

## Mục tiêu
- Hiểu layout là gì
- Biết dùng \`layout.tsx\`
- Biết dùng \`next/link\` để điều hướng
- Hiểu route động với \`[id]\`, \`[slug]\`
- Nhận \`params\` từ URL

## Prompt 1 - Nhờ AI dạy layout và dynamic route thật rõ
\`\`\`
Hãy dạy tôi Next.js buổi 4 như một mentor thực chiến.

Chủ đề:
- layout.tsx
- children
- layout dùng chung
- next/link
- route động
- [id]
- [slug]
- params

Tôi muốn bạn dạy theo cấu trúc:
1. Layout là gì và vì sao app thực tế cần layout?
2. children trong layout có nghĩa là gì?
3. Khi nào nên có layout chung, khi nào nên có layout riêng theo khu vực?
4. Vì sao nên dùng Link thay vì thẻ a cho route nội bộ?
5. Route động là gì?
6. Khi nào dùng id, khi nào dùng slug?
7. params lấy dữ liệu từ URL như thế nào?
8. Cho ví dụ thực tế:
   - /products/[id]
   - /blog/[slug]
   - /course/[courseId]/lesson/[lessonId]
9. Chỉ ra lỗi phổ biến của người mới
10. Tạo checklist tư duy layout + routing

Dạy như mentor đang xây nền app architecture cho người mới.
\`\`\`

## Prompt 2 - Nhờ AI dẫn tôi build route thực tế
\`\`\`
Hãy dẫn tôi thực hành buổi 4:
1. tạo layout có header và footer dùng chung
2. tạo navbar với Link
3. tạo route động /products/[id]
4. hiển thị params.id ra màn hình
5. tạo route /blog/[slug]
6. thử route nhiều cấp nếu cần

Tôi muốn bạn:
- nói rõ file nào phải tạo
- giải thích vì sao
- để tôi tự làm từng bước
- sau mỗi bước, review:
  - layout đã đúng chưa
  - Link đã dùng đúng chưa
  - dynamic route đã đúng cấu trúc chưa
  - params có lấy đúng không
\`\`\`

## Prompt 3 - Nhờ AI phản biện cấu trúc route của tôi
\`\`\`
Tôi sẽ gửi cho bạn cấu trúc route và layout của tôi.
Bạn hãy review:
1. Layout có dùng đúng chỗ không?
2. Navigation có rõ không?
3. Dynamic route đã hợp lý chưa?
4. Có chỗ nào tôi nên dùng slug thay vì id hoặc ngược lại không?
5. Cấu trúc route có dễ mở rộng không?

Hãy review cụ thể như mentor review architecture cơ bản.
\`\`\`

## Bài tập buổi này
- Tạo layout dùng chung
- Tạo navbar bằng Link
- Tạo ít nhất 2 dynamic route
- Hiển thị params ra giao diện

## Tiêu chuẩn hoàn thành
- Hiểu layout
- Dùng được Link
- Hiểu dynamic route và params
      `
    },
    {
      id: 'next-05',
      title: 'Buổi 5: Server Components, Client Components và ranh giới server/client',
      level: 'intermediate',
      content: `
# Buổi 5: Server Components, Client Components và ranh giới server/client

## Mục tiêu
- Hiểu Server Component là gì
- Hiểu Client Component là gì
- Biết khi nào cần \`"use client"\`
- Biết cách chia trang giữa phần server và phần client
- Bắt đầu hiểu điểm mạnh rất riêng của Next.js App Router

## Prompt 1 - Nhờ AI dạy bản chất server/client boundary
\`\`\`
Hãy dạy tôi Next.js buổi 5 về Server Components và Client Components thật sâu nhưng dễ hiểu.

Tôi muốn bạn giải thích theo cấu trúc:
1. Server Component là gì?
2. Client Component là gì?
3. Vì sao Next.js dùng Server Component mặc định?
4. "use client" thực sự đang bật điều gì?
5. Khi nào bắt buộc phải dùng Client Component?
   - useState
   - useEffect
   - onClick
   - tương tác người dùng
6. Khi nào nên giữ component ở server?
7. Vì sao nên giữ càng nhiều code ở server càng tốt?
8. Cho ví dụ thực tế:
   - trang blog tĩnh
   - like button
   - form tương tác
   - dashboard filter client-side
9. Chỉ ra lỗi phổ biến:
   - thêm "use client" quá nhiều
   - không hiểu component nào nên ở server
   - trộn rối server/client
10. Tạo checklist quyết định server hay client

Dạy như mentor đang sửa kiến trúc component cho junior.
\`\`\`

## Prompt 2 - Nhờ AI dẫn tôi chia component đúng cách
\`\`\`
Hãy dẫn tôi thực hành buổi 5:
1. tạo một page là Server Component
2. tạo một Counter là Client Component
3. nhúng Counter vào page server
4. truyền props từ server xuống client
5. tạo ví dụ một trang nội dung + nút like hoặc counter

Cách hướng dẫn:
- giải thích từng quyết định
- để tôi tự code từng phần
- sau mỗi phần, review:
  - component này nên ở server hay client?
  - "use client" có đúng chỗ không?
  - có cách nào chia nhỏ tốt hơn không?
\`\`\`

## Prompt 3 - Nhờ AI review ranh giới server/client của tôi
\`\`\`
Tôi sẽ gửi cho bạn cấu trúc component của tôi.
Bạn hãy review:
1. Phần nào nên là Server Component?
2. Phần nào bắt buộc là Client Component?
3. Tôi có đang dùng client quá tay không?
4. Có chỗ nào truyền props chưa hợp lý không?
5. Architecture này có tốt cho hiệu năng và maintain không?

Review như mentor Next.js khó tính.
\`\`\`

## Bài tập buổi này
- Tạo 1 trang server
- Tạo 2 component client nhỏ
- Kết hợp server + client trong cùng một page

## Tiêu chuẩn hoàn thành
- Hiểu rõ server/client boundary
- Không thêm \`"use client"\` bừa bãi
- Biết giữ phần tương tác ở client, phần còn lại ở server
      `
    },
    {
      id: 'next-06',
      title: 'Buổi 6: Data fetching, caching, revalidate và chọn chiến lược dữ liệu',
      level: 'intermediate',
      content: `
# Buổi 6: Data fetching, caching, revalidate và chọn chiến lược dữ liệu

## Mục tiêu
- Biết fetch dữ liệu trong Server Component
- Hiểu caching trong Next.js
- Biết dùng \`revalidate\`, \`no-store\`
- Biết chọn chiến lược dữ liệu theo từng loại trang

## Prompt 1 - Nhờ AI dạy data fetching từ bản chất
\`\`\`
Hãy dạy tôi Next.js buổi 6 về data fetching và caching như mentor full-stack.

Chủ đề:
- fetch trong Server Component
- async/await trong page
- cache mặc định
- no-store
- revalidate
- force-cache (ở mức khái niệm nếu cần)

Tôi muốn bạn dạy theo cấu trúc:
1. Vì sao data fetching trong Next.js khác với React client fetch thông thường?
2. Có thể fetch ngay trong Server Component như thế nào?
3. Cache mặc định nghĩa là gì?
4. Khi nào nên dùng revalidate?
5. Khi nào nên dùng no-store?
6. Cho ví dụ thực tế:
   - blog
   - bảng giá
   - trang sản phẩm
   - dashboard gần realtime
7. Chỉ ra lỗi phổ biến:
   - không hiểu dữ liệu đang cache hay chưa
   - dùng no-store quá tay
   - chọn chiến lược cache không đúng bài toán
8. Tạo checklist chọn data fetching strategy

Dạy như mentor đang sửa tư duy dữ liệu cho junior Next.js.
\`\`\`

## Prompt 2 - Nhờ AI giao bài thực hành data fetching
\`\`\`
Hãy giao cho tôi bài thực hành buổi 6:
1. tạo trang fetch danh sách bài viết từ API giả
2. hiển thị tiêu đề bài viết
3. tách hàm getPosts riêng
4. tạo ví dụ dùng revalidate
5. tạo ví dụ dùng no-store

Tôi muốn bạn:
- không cho đáp án ngay
- để tôi tự làm
- sau khi tôi gửi code, review:
  - fetch đã đúng chưa
  - component có nên là async không
  - chiến lược cache đã hợp lý chưa
  - code có rõ ràng không
\`\`\`

## Prompt 3 - Nhờ AI phản biện chiến lược dữ liệu của tôi
\`\`\`
Tôi sẽ mô tả một trang và chiến lược fetch/caching tôi định dùng.
Bạn hãy review:
1. Dữ liệu của trang này có tĩnh hay thay đổi thường xuyên?
2. Tôi nên cache hay không?
3. Có nên revalidate không? Nếu có thì vì sao?
4. no-store có thật sự cần không?
5. Lựa chọn của tôi có đang lãng phí hiệu năng không?

Hãy phản biện kỹ như mentor full-stack.
\`\`\`

## Bài tập buổi này
- Tạo ít nhất 2 trang có data fetching
- Mỗi trang chọn một chiến lược cache khác nhau và tự giải thích

## Tiêu chuẩn hoàn thành
- Fetch được dữ liệu trong Server Component
- Hiểu cơ bản về cache/revalidate/no-store
- Biết chọn chiến lược dữ liệu có lý do
      `
    },
    {
      id: 'next-07',
      title: 'Buổi 7: Loading UI, Error UI, metadata và SEO cơ bản',
      level: 'advanced',
      content: `
# Buổi 7: Loading UI, Error UI, metadata và SEO cơ bản

## Mục tiêu
- Biết tạo \`loading.tsx\`
- Biết tạo \`error.tsx\`
- Biết thêm metadata cho trang
- Hiểu SEO cơ bản trong Next.js
- Nâng trải nghiệm người dùng và chất lượng sản phẩm

## Prompt 1 - Nhờ AI dạy UX + SEO trong Next.js
\`\`\`
Hãy dạy tôi Next.js buổi 7 về loading UI, error UI và metadata như mentor sản phẩm.

Chủ đề:
- loading.tsx
- error.tsx
- metadata
- title
- description
- SEO cơ bản
- lợi ích của server rendering với SEO

Tôi muốn bạn dạy theo cấu trúc:
1. Vì sao loading state quan trọng với UX?
2. Vì sao error state cũng cần thiết?
3. loading.tsx hoạt động như thế nào trong App Router?
4. error.tsx giúp gì?
5. Metadata là gì?
6. title và description tốt nên viết thế nào?
7. Vì sao Next.js có lợi cho SEO?
8. Cho ví dụ thực tế:
   - trang blog
   - trang sản phẩm
   - trang danh sách khóa học
9. Chỉ ra lỗi phổ biến:
   - loading quá sơ sài
   - error quá kỹ thuật
   - metadata viết mơ hồ
10. Tạo checklist UX + SEO cơ bản

Dạy như mentor đang nâng chuẩn sản phẩm cho junior.
\`\`\`

## Prompt 2 - Nhờ AI giao bài thực hành UX + SEO
\`\`\`
Hãy giao cho tôi bài thực hành buổi 7:
1. tạo loading.tsx cho một trang fetch dữ liệu
2. tạo error.tsx đơn giản nhưng thân thiện
3. thêm metadata cho trang chủ
4. thêm metadata cho trang blog hoặc sản phẩm

Yêu cầu:
- không cho đáp án ngay
- để tôi tự làm
- sau khi tôi gửi code, review:
  - loading có hợp lý không
  - error có rõ ràng không
  - metadata có đúng mục đích không
  - title/description có đủ rõ chưa
\`\`\`

## Prompt 3 - Nhờ AI review chất lượng UX/SEO của tôi
\`\`\`
Tôi sẽ gửi code loading.tsx, error.tsx và metadata của tôi.
Bạn hãy review theo 5 tiêu chí:
1. UX khi đang tải
2. UX khi có lỗi
3. Độ rõ ràng của title
4. Độ rõ ràng của description
5. Mức độ chuyên nghiệp tổng thể

Hãy review như mentor sản phẩm khó tính.
\`\`\`

## Bài tập buổi này
- Tạo loading UI
- Tạo error UI
- Thêm metadata cho ít nhất 2 trang

## Tiêu chuẩn hoàn thành
- App có trạng thái loading rõ ràng
- App có trạng thái lỗi thân thiện
- Metadata có chủ đích và rõ nghĩa
      `
    },
    {
      id: 'next-08',
      title: 'Buổi 8: Route Handlers, API và Server Actions',
      level: 'advanced',
      content: `
# Buổi 8: Route Handlers, API và Server Actions

## Mục tiêu
- Hiểu Route Handlers trong Next.js
- Biết tạo API GET/POST cơ bản
- Hiểu Server Actions là gì
- Biết khi nào dùng API route, khi nào dùng Server Action

## Prompt 1 - Nhờ AI dạy full-stack foundation trong Next.js
\`\`\`
Hãy dạy tôi Next.js buổi 8 như mentor full-stack.

Chủ đề:
- app/api/.../route.ts
- GET
- POST
- Response.json()
- Server Actions
- "use server"
- form action

Tôi muốn bạn dạy theo cấu trúc:
1. Route Handler là gì?
2. Vì sao Next.js có thể viết API trong cùng project?
3. Khi nào nên dùng GET route?
4. Khi nào nên dùng POST route?
5. Server Action là gì?
6. Server Action khác API route ở đâu?
7. Khi nào nên dùng API route, khi nào nên dùng Server Action?
8. Cho ví dụ thực tế:
   - lấy danh sách sản phẩm
   - submit form liên hệ
   - tạo bài viết
9. Chỉ ra lỗi phổ biến:
   - dùng API khi một Server Action là đủ
   - không hiểu code nào chạy ở server
   - trộn rối luồng dữ liệu
10. Tạo checklist chọn API hay Server Action

Dạy như mentor đang mở cánh cửa full-stack cho junior Front-end.
\`\`\`

## Prompt 2 - Nhờ AI dẫn tôi làm API + Server Action
\`\`\`
Hãy dẫn tôi thực hành buổi 8:
1. tạo Route Handler GET trả về danh sách dữ liệu mẫu
2. tạo Route Handler POST nhận dữ liệu đơn giản
3. tạo một Server Action nhận formData
4. tạo form gửi dữ liệu vào Server Action
5. so sánh trải nghiệm viết API route và Server Action

Cách hướng dẫn:
- giải thích file nào phải tạo
- nói code nào chạy ở server
- để tôi tự làm từng bước
- sau mỗi bước, review:
  - route có đúng chưa
  - response có hợp lý không
  - Server Action có đúng chỗ không
  - luồng dữ liệu có rõ ràng không
\`\`\`

## Prompt 3 - Nhờ AI phản biện kiến trúc full-stack của tôi
\`\`\`
Tôi sẽ mô tả một tính năng và cách tôi định triển khai bằng API route hoặc Server Action.
Bạn hãy review:
1. Lựa chọn của tôi có phù hợp không?
2. Tôi có đang làm quá phức tạp không?
3. Có cách đơn giản hơn trong Next.js không?
4. Luồng dữ liệu có rõ không?
5. Kiến trúc này có dễ maintain không?

Hãy phản biện kỹ như mentor full-stack.
\`\`\`

## Bài tập buổi này
- Tạo 1 Route Handler GET
- Tạo 1 Route Handler POST
- Tạo 1 form dùng Server Action

## Tiêu chuẩn hoàn thành
- Hiểu Route Handler và Server Action
- Biết chọn đúng công cụ cho bài toán
- Bắt đầu thấy Next.js là full-stack framework
      `
    },
    {
      id: 'next-09',
      title: 'Buổi 9: Form, mutation, auth/middleware cơ bản và tổ chức project',
      level: 'advanced',
      content: `
# Buổi 9: Form, mutation, auth/middleware cơ bản và tổ chức project

## Mục tiêu
- Biết xử lý form thực tế hơn
- Hiểu mutation là gì
- Hiểu ý tưởng auth và bảo vệ route
- Biết vai trò của middleware
- Biết tổ chức project cho dễ mở rộng

## Prompt 1 - Nhờ AI dạy product thinking trong app Next.js
\`\`\`
Hãy dạy tôi Next.js buổi 9 như mentor full-stack thực chiến.

Chủ đề:
- form với Server Action hoặc API
- mutation
- validation cơ bản
- auth ở mức ý tưởng
- public route / private route
- middleware
- tổ chức thư mục components, lib, actions, types

Tôi muốn bạn dạy theo cấu trúc:
1. Mutation là gì?
2. Form submit trong app thực tế khác gì form demo đơn giản?
3. Validation cơ bản nên đặt ở đâu?
4. Auth là gì ở mức sản phẩm?
5. Route public và private khác nhau ra sao?
6. Middleware giúp gì?
7. Vì sao project Next.js dễ rối nếu không tổ chức tốt?
8. Nên tách components, lib, actions, types như thế nào?
9. Chỉ ra lỗi phổ biến của người mới
10. Tạo checklist tổ chức project và bảo vệ route ở mức cơ bản

Dạy như mentor đang chuẩn bị tôi đi build app thật.
\`\`\`

## Prompt 2 - Nhờ AI dẫn tôi build feature thật
\`\`\`
Hãy dẫn tôi thực hành buổi 9 với một feature thực tế.

Bài toán:
- tạo form thêm bài viết hoặc thêm sản phẩm
- validate dữ liệu cơ bản
- sau khi submit thì có thay đổi dữ liệu hoặc phản hồi rõ ràng
- mô tả một route private ví dụ /dashboard
- mô tả middleware cơ bản bảo vệ route đó
- sắp xếp lại project theo các thư mục rõ ràng

Tôi muốn bạn:
- chia feature thành từng bước
- giải thích vì sao mỗi bước quan trọng
- để tôi tự làm từng phần
- sau mỗi phần, review như mentor:
  - luồng mutation đã rõ chưa
  - validation có hợp lý không
  - auth/middleware hiểu đúng ở mức cơ bản chưa
  - project structure có sạch không
\`\`\`

## Prompt 3 - Nhờ AI review architecture của tôi
\`\`\`
Tôi sẽ gửi cấu trúc project Next.js và mô tả flow form/auth của tôi.
Bạn hãy review theo 6 tiêu chí:
1. Chia thư mục có rõ ràng không?
2. Form flow có logic không?
3. Mutation có đúng chỗ không?
4. Validation có đủ chưa?
5. Route protection có hiểu đúng không?
6. Project có dễ mở rộng không?

Hãy review như mentor technical lead.
\`\`\`

## Bài tập buổi này
- Tạo 1 feature form + mutation
- Mô tả 1 route private và cách bảo vệ nó
- Sắp xếp lại cấu trúc project rõ ràng hơn

## Tiêu chuẩn hoàn thành
- Hiểu form/mutation flow
- Hiểu auth/middleware ở mức nền tảng
- Project structure gọn hơn và có chủ đích
      `
    },
    {
      id: 'next-10',
      title: 'Buổi 10: Project cuối khóa - xây một app Next.js hoàn chỉnh như một junior full-stack',
      level: 'advanced',
      content: `
# Buổi 10: Project cuối khóa - xây một app Next.js hoàn chỉnh như một junior full-stack

## Mục tiêu
- Tổng hợp toàn bộ kiến thức đã học
- Hoàn thiện một app Next.js nhỏ nhưng thực tế
- Biết tự review app như một người học nghiêm túc
- Tự đánh giá mức độ sẵn sàng cho dự án thật

## Prompt 1 - Nhờ AI dẫn tôi làm project từ đầu
\`\`\`
Hãy đóng vai mentor Next.js và dẫn tôi làm project cuối khóa.

Cho tôi chọn 1 trong các project:
1. Blog mini
2. Website khóa học
3. App sản phẩm đơn giản
4. Dashboard quản lý nội dung
5. Trang tin tức có SEO cơ bản

Sau khi tôi chọn, hãy dẫn tôi theo lộ trình:
1. phân tích yêu cầu
2. xác định routing
3. xác định layout
4. xác định phần nào là server, phần nào là client
5. xác định dữ liệu cần fetch
6. xác định chỗ cần form/API/Server Action
7. xác định metadata cơ bản
8. để tôi tự build từng phần
9. sau mỗi phần, review rất kỹ như mentor
10. cuối cùng giúp tôi audit toàn bộ app

Mục tiêu là để tôi thật sự tự xây được một app Next.js nhỏ nhưng bài bản.
\`\`\`

## Prompt 2 - Nhờ AI audit project cuối khóa
\`\`\`
Tôi sẽ gửi cho bạn project Next.js cuối khóa của tôi.
Bạn hãy audit như mentor Full-stack kỹ tính.

Đánh giá theo 8 nhóm tiêu chí:
1. Hiểu bài toán
2. Routing và layout
3. Server/Client boundary
4. Data fetching và caching
5. Form / API / Server Actions
6. Metadata và SEO cơ bản
7. Project structure
8. Mức độ rõ ràng và trưởng thành của code

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
Hãy đóng vai reviewer cuối khóa Next.js.

Tôi sẽ gửi app của tôi.
Bạn phải review như thật, không nể nang.

Cách review mong muốn:
- đánh giá tư duy kiến trúc
- đánh giá routing và layout
- đánh giá server/client split
- đánh giá data flow
- đánh giá form/API/Server Actions
- đánh giá SEO cơ bản
- đánh giá cấu trúc project
- chỉ rõ điểm nào chứng tỏ tôi đã hiểu Next.js
- chỉ rõ điểm nào cho thấy tôi vẫn đang ghép tính năng theo kiểu chắp vá

Cuối cùng, hãy nói thật:
- tôi đã đủ nền tảng để làm project Next.js nghiêm túc hơn chưa?
- nếu chưa, tôi cần luyện thêm phần nào?
\`\`\`

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
- Có phân chia server/client hợp lý
- Có data fetching
- Có ít nhất một form hoặc Server Action hoặc API route
- Có metadata cơ bản
- Có cấu trúc project rõ ràng

## Checklist tự đánh giá
- Có dùng server/client hợp lý không?
- Routing có rõ ràng không?
- Layout có dễ mở rộng không?
- Data flow có rõ không?
- Form/API/Server Action có hợp mục đích không?
- Có SEO cơ bản không?
- Project có dễ maintain không?

## Bài tập cuối khóa
- Hoàn thành project
- Tự audit bằng AI theo các prompt trên
- Sửa lại bản final đến khi đủ chắc
      `
    }
  ]
};