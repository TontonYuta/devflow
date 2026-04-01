import { Lesson } from '../../types';

export const optimizationLesson: Lesson = {
  id: 'web-perf-mastery',
  icon: 'gauge',
  title: 'Tối ưu Hiệu suất',
  description:
    'Lộ trình 20 buổi học tối ưu hiệu suất web từ cơ bản đến chuyên sâu, chia nhỏ dễ học, có bài tập thực hành và mini project để giúp người học xây dựng website nhanh hơn, mượt hơn và thân thiện hơn với người dùng.',
  points: [
    'Hiểu hiệu suất web là gì và vì sao tốc độ rất quan trọng',
    'Nắm chắc ảnh, font, CSS, JavaScript, network và caching',
    'Biết đo hiệu suất bằng DevTools, Lighthouse và Core Web Vitals',
    'Biết tối ưu React, lazy loading, code splitting và render',
    'Có bài tập và project để luyện audit và cải thiện tốc độ thực tế'
  ],
  chapters: [
    {
      id: 'perf-01',
      title: 'Buổi 1: Hiệu suất web là gì? Vì sao tốc độ quan trọng?',
      level: 'beginner',
      content: `
# Buổi 1: Hiệu suất web là gì? Vì sao tốc độ quan trọng?

## Mục tiêu
- Hiểu hiệu suất web là gì
- Biết vì sao website chậm làm giảm trải nghiệm người dùng
- Có tư duy tối ưu từ sớm thay vì sửa muộn

## Nội dung chính
- Hiệu suất web là tốc độ tải, tốc độ phản hồi và độ mượt của giao diện
- Website chậm ảnh hưởng tới:
  - trải nghiệm người dùng
  - tỉ lệ rời trang
  - tỉ lệ chuyển đổi
  - SEO
- Hiệu suất không chỉ là điểm số, mà là cảm giác dùng thật

## Ví dụ
\`\`\`text
Một trang tải chậm không chỉ làm người dùng khó chịu,
mà còn khiến họ bỏ đi trước khi xem nội dung chính.
\`\`\`

## Bài tập luyện tập
1. Nêu 3 lý do vì sao website nhanh quan trọng
2. Nêu 3 hậu quả khi website chậm
3. Kể tên 5 thành phần có thể làm trang tải chậm

## Bài tập thử thách
- Phân tích một website bạn từng thấy chậm và đoán nguyên nhân chính
      `
    },
    {
      id: 'perf-02',
      title: 'Buổi 2: Trình duyệt tải một trang web như thế nào?',
      level: 'beginner',
      content: `
# Buổi 2: Trình duyệt tải một trang web như thế nào?

## Mục tiêu
- Hiểu luồng tải trang cơ bản
- Biết HTML, CSS, JS, ảnh và font ảnh hưởng ra sao
- Có nền tảng để hiểu vì sao trang bị chậm

## Nội dung chính
- Trình duyệt tải HTML trước
- Sau đó tải CSS, JavaScript, ảnh, font
- CSS có thể chặn việc hiển thị
- JavaScript có thể chặn việc tương tác
- Quá nhiều tài nguyên sẽ làm chậm trang

## Ví dụ
\`\`\`text
HTML là khung đầu tiên,
CSS làm đẹp,
JavaScript thêm tương tác,
nhưng nếu mỗi thứ đều quá nặng thì trang sẽ chậm.
\`\`\`

## Bài tập luyện tập
1. Mô tả các bước cơ bản khi trình duyệt tải trang
2. Nêu vai trò của HTML, CSS, JS trong hiệu suất
3. Giải thích vì sao ảnh lớn làm trang chậm

## Bài tập thử thách
- Vẽ lại sơ đồ đơn giản quá trình tải một trang web
      `
    },
    {
      id: 'perf-03',
      title: 'Buổi 3: Đo hiệu suất bằng DevTools và Lighthouse',
      level: 'beginner',
      content: `
# Buổi 3: Đo hiệu suất bằng DevTools và Lighthouse

## Mục tiêu
- Biết cách đo hiệu suất thay vì đoán
- Làm quen với Chrome DevTools
- Biết đọc báo cáo Lighthouse cơ bản

## Nội dung chính
- Tab Network
- Tab Performance
- Lighthouse
- Waterfall request
- Kích thước tài nguyên
- Thời gian tải và chặn

## Ví dụ
\`\`\`text
Tối ưu hiệu suất không nên bắt đầu bằng cảm giác,
mà nên bắt đầu bằng việc đo.
\`\`\`

## Bài tập luyện tập
1. Mở DevTools và xem tab Network
2. Chạy một báo cáo Lighthouse
3. Ghi lại 3 vấn đề chậm lớn nhất của một trang mẫu

## Bài tập thử thách
- Chụp lại kết quả audit một trang web bạn làm và viết nhận xét ngắn
      `
    },
    {
      id: 'perf-04',
      title: 'Buổi 4: Core Web Vitals cơ bản',
      level: 'beginner',
      content: `
# Buổi 4: Core Web Vitals cơ bản

## Mục tiêu
- Hiểu các chỉ số trải nghiệm quan trọng
- Biết LCP, INP và CLS phản ánh điều gì
- Biết dùng chúng để đọc tình trạng website

## Nội dung chính
- LCP: phần nội dung lớn chính hiện ra nhanh hay chậm
- INP: tương tác có phản hồi mượt hay không
- CLS: bố cục có bị nhảy lung tung không
- Core Web Vitals phản ánh trải nghiệm thật của người dùng

## Ví dụ
\`\`\`text
Nếu ảnh banner xuất hiện quá chậm -> LCP xấu
Nếu bấm nút mà phản hồi trễ -> INP xấu
Nếu trang đang đọc mà layout nhảy -> CLS xấu
\`\`\`

## Bài tập luyện tập
1. Giải thích LCP bằng lời của bạn
2. Giải thích INP bằng ví dụ thực tế
3. Giải thích CLS bằng tình huống người dùng bấm nhầm

## Bài tập thử thách
- Chọn một trang web và đoán chỉ số nào dễ bị xấu nhất
      `
    },
    {
      id: 'perf-05',
      title: 'Buổi 5: Tối ưu hình ảnh - kẻ thù số 1 của tốc độ',
      level: 'beginner',
      content: `
# Buổi 5: Tối ưu hình ảnh - kẻ thù số 1 của tốc độ

## Mục tiêu
- Biết vì sao ảnh thường là phần nặng nhất của trang
- Biết resize, nén và chọn định dạng phù hợp
- Giảm dung lượng ảnh mà vẫn giữ chất lượng đủ tốt

## Nội dung chính
- Resize ảnh đúng kích thước hiển thị
- Nén ảnh trước khi đưa lên web
- Dùng định dạng hiện đại khi phù hợp
- Không tải ảnh khổng lồ cho khung nhỏ
- Dùng nhiều kích thước ảnh theo màn hình

## Ví dụ
\`\`\`text
Không nên dùng ảnh 4000px chỉ để hiển thị trong một ô 400px.
\`\`\`

## Bài tập luyện tập
1. So sánh dung lượng 2 ảnh trước và sau khi nén
2. Resize một ảnh lớn xuống đúng kích thước cần dùng
3. Tạo bộ 3 ảnh cho mobile, tablet, desktop

## Bài tập thử thách
- Tối ưu một thư mục ảnh cho landing page và ghi lại dung lượng giảm được
      `
    },
    {
      id: 'perf-06',
      title: 'Buổi 6: Font, icon và tài nguyên giao diện',
      level: 'beginner',
      content: `
# Buổi 6: Font, icon và tài nguyên giao diện

## Mục tiêu
- Hiểu font và icon cũng ảnh hưởng mạnh tới tốc độ
- Biết giảm số lượng font và weight không cần thiết
- Tạo giao diện đẹp mà không quá nặng

## Nội dung chính
- Font web có thể làm chậm hiển thị
- Chỉ dùng số weight cần thiết
- Ưu tiên icon gọn nhẹ
- Giảm tài nguyên không cần thiết trên trang đầu

## Ví dụ
\`\`\`text
Một trang dùng 4 bộ font, mỗi bộ nhiều weight,
thường nặng hơn rất nhiều so với chỉ dùng 1 bộ font hợp lý.
\`\`\`

## Bài tập luyện tập
1. Liệt kê các font đang dùng trong một dự án
2. Giảm số weight không cần thiết
3. Thay icon quá nặng bằng cách nhẹ hơn

## Bài tập thử thách
- Tối ưu toàn bộ typography của một trang mà vẫn giữ giao diện đẹp
      `
    },
    {
      id: 'perf-07',
      title: 'Buổi 7: CSS nhẹ hơn, tải nhanh hơn',
      level: 'intermediate',
      content: `
# Buổi 7: CSS nhẹ hơn, tải nhanh hơn

## Mục tiêu
- Hiểu CSS cũng có thể làm chậm trang
- Biết giảm CSS thừa
- Biết CSS ảnh hưởng tới hiển thị ban đầu

## Nội dung chính
- CSS chặn render
- CSS thừa làm bundle nặng hơn
- Tách CSS theo phạm vi cần dùng
- Tránh style trùng lặp và không dùng nữa

## Ví dụ
\`\`\`text
Một file CSS rất lớn có thể làm trình duyệt phải chờ lâu hơn trước khi hiển thị trang.
\`\`\`

## Bài tập luyện tập
1. Tìm CSS không còn được dùng trong một trang mẫu
2. Gộp các style lặp lại
3. Giảm số class hoặc style trùng ý nghĩa

## Bài tập thử thách
- Rà soát một project cũ và viết danh sách chỗ có thể giảm CSS thừa
      `
    },
    {
      id: 'perf-08',
      title: 'Buổi 8: JavaScript nặng ảnh hưởng tới tốc độ thế nào?',
      level: 'intermediate',
      content: `
# Buổi 8: JavaScript nặng ảnh hưởng tới tốc độ thế nào?

## Mục tiêu
- Hiểu JavaScript không chỉ ảnh hưởng kích thước tải mà còn ảnh hưởng khả năng tương tác
- Biết bundle JS lớn gây chậm ra sao
- Có tư duy giảm JavaScript không cần thiết

## Nội dung chính
- Bundle JS lớn làm tải chậm
- Parse và execute JavaScript cũng tốn thời gian
- JavaScript có thể làm trang chậm phản hồi
- Không phải chỗ nào cũng cần JS nặng

## Ví dụ
\`\`\`text
Một trang có thể tải HTML nhanh,
nhưng vẫn bấm rất chậm nếu JavaScript quá nặng.
\`\`\`

## Bài tập luyện tập
1. Kiểm tra file JS lớn nhất trong dự án
2. Liệt kê 3 thư viện có thể đang quá nặng
3. Nêu 3 chỗ có thể giảm JS mà không ảnh hưởng tính năng chính

## Bài tập thử thách
- Phân tích một trang React và chỉ ra nơi đang tải quá nhiều JavaScript
      `
    },
    {
      id: 'perf-09',
      title: 'Buổi 9: Lazy Loading cho ảnh, iframe và nội dung ngoài màn hình',
      level: 'intermediate',
      content: `
# Buổi 9: Lazy Loading cho ảnh, iframe và nội dung ngoài màn hình

## Mục tiêu
- Biết tải muộn những gì chưa cần hiển thị
- Biết dùng lazy loading cho ảnh và nội dung phụ
- Giảm tải ban đầu của trang

## Nội dung chính
- Lazy loading cho ảnh
- Lazy loading cho iframe
- Chỉ tải khi gần xuất hiện trên màn hình
- Không lazy load các phần tử rất quan trọng ở đầu trang

## Ví dụ
\`\`\`html
<img src="anh.jpg" alt="Ảnh" loading="lazy" width="800" height="600" />
\`\`\`

## Bài tập luyện tập
1. Thêm lazy loading cho ảnh ở cuối trang
2. Thêm width và height để tránh layout shift
3. Kiểm tra lại tab Network trước và sau khi áp dụng

## Bài tập thử thách
- Tối ưu một trang dài nhiều ảnh bằng lazy loading hợp lý
      `
    },
    {
      id: 'perf-10',
      title: 'Buổi 10: Code Splitting và tải JavaScript theo nhu cầu',
      level: 'intermediate',
      content: `
# Buổi 10: Code Splitting và tải JavaScript theo nhu cầu

## Mục tiêu
- Hiểu vì sao không nên tải toàn bộ app ngay từ đầu
- Biết chia code theo trang hoặc theo khu vực
- Giảm tải ban đầu cho ứng dụng

## Nội dung chính
- Code splitting
- Chia bundle theo route
- Tải component nặng khi cần
- Tư duy chỉ tải cái người dùng sắp dùng

## Ví dụ
\`\`\`tsx
const AboutPage = lazy(() => import('./AboutPage'));
\`\`\`

## Bài tập luyện tập
1. Tách một trang phụ bằng lazy import
2. Thêm giao diện fallback khi đang tải
3. So sánh bundle trước và sau khi tách code

## Bài tập thử thách
- Tạo chiến lược chia code cho app có nhiều trang và nhiều khu vực admin
      `
    },
    {
      id: 'perf-11',
      title: 'Buổi 11: Caching, CDN và nén tài nguyên',
      level: 'intermediate',
      content: `
# Buổi 11: Caching, CDN và nén tài nguyên

## Mục tiêu
- Hiểu cache giúp tải lại nhanh hơn
- Biết CDN hỗ trợ phân phối tài nguyên ra sao
- Biết nén tài nguyên giúp giảm dung lượng tải

## Nội dung chính
- Browser cache
- Cache header ở mức khái quát
- CDN
- Gzip và Brotli
- Tài nguyên tĩnh nên được phục vụ hiệu quả hơn

## Ví dụ
\`\`\`text
Một file logo, font hay script tĩnh
không nên bị tải lại toàn bộ mỗi lần người dùng mở trang.
\`\`\`

## Bài tập luyện tập
1. Giải thích cache bằng lời của bạn
2. Nêu vai trò của CDN
3. So sánh tài nguyên có nén và không nén

## Bài tập thử thách
- Thiết kế sơ đồ tối ưu phân phối tài nguyên cho một website landing page
      `
    },
    {
      id: 'perf-12',
      title: 'Buổi 12: Critical Rendering Path và nội dung quan trọng đầu trang',
      level: 'intermediate',
      content: `
# Buổi 12: Critical Rendering Path và nội dung quan trọng đầu trang

## Mục tiêu
- Hiểu phần nào của trang cần xuất hiện sớm nhất
- Biết ưu tiên nội dung quan trọng đầu màn hình
- Hạn chế tải chậm phần hero hoặc tiêu đề chính

## Nội dung chính
- Above-the-fold content
- Nội dung chính cần hiển thị sớm
- Tránh chặn phần hero bằng tài nguyên nặng
- Tư duy ưu tiên trải nghiệm mở trang đầu tiên

## Ví dụ
\`\`\`text
Người dùng vào trang chủ,
điều quan trọng nhất là tiêu đề, mô tả chính và nút hành động phải hiện sớm.
\`\`\`

## Bài tập luyện tập
1. Xác định nội dung above-the-fold của một landing page
2. Liệt kê các tài nguyên đang làm chậm phần đầu trang
3. Viết lại thứ tự ưu tiên tải cho một trang web mẫu

## Bài tập thử thách
- Tối ưu phần hero section của một trang giới thiệu sản phẩm
      `
    },
    {
      id: 'perf-13',
      title: 'Buổi 13: Giảm CLS - chống giật layout',
      level: 'advanced',
      content: `
# Buổi 13: Giảm CLS - chống giật layout

## Mục tiêu
- Hiểu vì sao layout bị nhảy gây khó chịu
- Biết cách giữ bố cục ổn định
- Tránh lỗi bấm nhầm do giao diện bị dịch chuyển

## Nội dung chính
- Đặt kích thước rõ cho ảnh, video, iframe
- Chừa chỗ cho nội dung sắp tải
- Tránh chèn banner, quảng cáo, popup làm đẩy layout bất ngờ
- Font cũng có thể gây đổi layout

## Ví dụ
\`\`\`text
Nếu ảnh chưa có kích thước trước,
khi ảnh tải xong nó có thể đẩy toàn bộ nội dung bên dưới xuống.
\`\`\`

## Bài tập luyện tập
1. Thêm width và height cho ảnh trong một trang mẫu
2. Tạo placeholder cho một khối nội dung tải chậm
3. Tìm 3 vị trí có nguy cơ gây CLS trong một giao diện

## Bài tập thử thách
- Rà soát một landing page và giảm các điểm gây layout shift
      `
    },
    {
      id: 'perf-14',
      title: 'Buổi 14: Tối ưu render - SSR, CSR, SSG và chọn cách phù hợp',
      level: 'advanced',
      content: `
# Buổi 14: Tối ưu render - SSR, CSR, SSG và chọn cách phù hợp

## Mục tiêu
- Hiểu các chiến lược render phổ biến
- Biết mỗi chiến lược ảnh hưởng tới tốc độ và SEO ra sao
- Biết chọn cách render phù hợp với từng trang

## Nội dung chính
- CSR
- SSR
- SSG
- Trang nội dung tĩnh
- Trang dashboard động
- Trang marketing cần SEO

## Ví dụ
\`\`\`text
Trang blog công khai thường phù hợp với render sẵn,
trong khi dashboard cá nhân có thể thiên về dữ liệu động hơn.
\`\`\`

## Bài tập luyện tập
1. Chọn chiến lược render cho blog
2. Chọn chiến lược render cho dashboard admin
3. Chọn chiến lược render cho landing page sản phẩm

## Bài tập thử thách
- Thiết kế chiến lược render cho một website học online có cả phần công khai và phần người dùng đăng nhập
      `
    },
    {
      id: 'perf-15',
      title: 'Buổi 15: Re-render trong React - hiểu đúng trước khi tối ưu',
      level: 'advanced',
      content: `
# Buổi 15: Re-render trong React - hiểu đúng trước khi tối ưu

## Mục tiêu
- Hiểu re-render là gì
- Biết khi nào React render lại là bình thường
- Tránh tối ưu quá sớm và sai chỗ

## Nội dung chính
- State đổi thì component render lại
- Component cha render có thể kéo theo component con
- Re-render không luôn là xấu
- Chỉ tối ưu khi có dấu hiệu thật sự chậm

## Ví dụ
\`\`\`text
Một component nhỏ render lại 1 chút không đáng lo,
nhưng một danh sách lớn render lại liên tục thì cần xem xét.
\`\`\`

## Bài tập luyện tập
1. Nêu 3 nguyên nhân gây re-render
2. Phân biệt re-render bình thường và re-render thừa
3. Chọn một component trong app và đoán lúc nào nó render lại

## Bài tập thử thách
- Phân tích một cây component React và chỉ ra nơi dễ render thừa
      `
    },
    {
      id: 'perf-16',
      title: 'Buổi 16: React.memo, useMemo và useCallback',
      level: 'advanced',
      content: `
# Buổi 16: React.memo, useMemo và useCallback

## Mục tiêu
- Biết các công cụ memoization trong React
- Biết khi nào nên dùng từng công cụ
- Giảm render thừa và tính toán thừa

## Nội dung chính
- React.memo
- useMemo
- useCallback
- Ghi nhớ component
- Ghi nhớ kết quả tính toán
- Ghi nhớ hàm truyền xuống component con

## Ví dụ
\`\`\`tsx
const ProductCard = memo(function ProductCard({ title }: { title: string }) {
  return <div>{title}</div>;
});
\`\`\`

## Bài tập luyện tập
1. Bọc một component con bằng React.memo
2. Dùng useMemo cho danh sách lọc
3. Dùng useCallback cho hàm click truyền xuống con

## Bài tập thử thách
- Tối ưu một danh sách sản phẩm có tìm kiếm và nhiều item
      `
    },
    {
      id: 'perf-17',
      title: 'Buổi 17: Danh sách lớn, virtualization và tối ưu tương tác',
      level: 'advanced',
      content: `
# Buổi 17: Danh sách lớn, virtualization và tối ưu tương tác

## Mục tiêu
- Hiểu vì sao danh sách dài dễ gây lag
- Biết chỉ render phần đang nhìn thấy
- Tăng độ mượt cho giao diện dữ liệu lớn

## Nội dung chính
- Danh sách hàng trăm hoặc hàng nghìn item
- Virtualization
- Tìm kiếm và lọc danh sách lớn
- Tối ưu thao tác cuộn và cập nhật giao diện

## Ví dụ
\`\`\`text
Không nên render 5000 item một lúc nếu người dùng chỉ nhìn thấy 20 item trên màn hình.
\`\`\`

## Bài tập luyện tập
1. Tạo danh sách lớn giả lập
2. Đo cảm giác cuộn trước và sau khi tối ưu
3. Phân tích nơi nào bị chậm khi lọc danh sách

## Bài tập thử thách
- Thiết kế giải pháp hiển thị danh sách khóa học rất dài theo cách mượt hơn
      `
    },
    {
      id: 'perf-18',
      title: 'Buổi 18: Tối ưu dữ liệu, request và API',
      level: 'advanced',
      content: `
# Buổi 18: Tối ưu dữ liệu, request và API

## Mục tiêu
- Biết request quá nhiều cũng làm app chậm
- Biết giảm dữ liệu trả về từ API
- Biết tránh tải dư thừa

## Nội dung chính
- Chỉ lấy dữ liệu cần dùng
- Pagination
- Debounce tìm kiếm
- Tránh gọi API lặp
- Cache dữ liệu phía client khi phù hợp

## Ví dụ
\`\`\`text
Một ô tìm kiếm không nên gọi API mỗi ký tự nếu chưa có debounce.
\`\`\`

## Bài tập luyện tập
1. Thiết kế API chỉ trả trường cần thiết
2. Áp dụng debounce cho ô tìm kiếm
3. So sánh tải toàn bộ danh sách và tải theo trang

## Bài tập thử thách
- Tối ưu luồng tìm kiếm sản phẩm có gợi ý theo thời gian thực
      `
    },
    {
      id: 'perf-19',
      title: 'Buổi 19: Hiệu suất trong thực tế - budget, theo dõi và tối ưu liên tục',
      level: 'advanced',
      content: `
# Buổi 19: Hiệu suất trong thực tế - budget, theo dõi và tối ưu liên tục

## Mục tiêu
- Hiểu tối ưu hiệu suất là công việc liên tục
- Biết đặt performance budget cơ bản
- Biết theo dõi sau khi deploy

## Nội dung chính
- Performance budget
- Giới hạn kích thước ảnh, JS, CSS
- Theo dõi sau khi release
- Không tối ưu một lần rồi quên
- So sánh trước và sau khi thay đổi

## Ví dụ
\`\`\`text
Một team tốt không chỉ sửa khi trang chậm rõ rệt,
mà còn đặt giới hạn để không chậm dần theo thời gian.
\`\`\`

## Bài tập luyện tập
1. Đặt budget cơ bản cho app của bạn
2. Ghi 3 chỉ số muốn theo dõi định kỳ
3. Tạo checklist ngắn trước khi release

## Bài tập thử thách
- Viết kế hoạch theo dõi hiệu suất hàng tuần cho một dự án nhỏ
      `
    },
    {
      id: 'perf-20',
      title: 'Buổi 20: Mini Project và dự án cuối khóa Tối ưu Hiệu suất',
      level: 'advanced',
      content: `
# Buổi 20: Mini Project và dự án cuối khóa Tối ưu Hiệu suất

## Mục tiêu
- Kết hợp toàn bộ kiến thức tối ưu hiệu suất đã học
- Audit một ứng dụng thật hoặc app demo
- Tự đánh giá mức độ làm chủ performance

## Gợi ý project
Chọn 1 trong các project:
1. Landing page nhiều ảnh
2. Blog mini
3. Dashboard dữ liệu
4. App React có danh sách lớn
5. Website học online có nhiều ảnh và nhiều route

## Yêu cầu bắt buộc
- Có đo hiệu suất ban đầu
- Có liệt kê các vấn đề chính
- Có tối ưu ảnh hoặc font
- Có tối ưu JS hoặc code splitting
- Có ít nhất một cải thiện rõ ở trải nghiệm tải hoặc tương tác
- Có đo lại sau khi tối ưu

## Checklist tự đánh giá
- Bạn đã đo trước khi tối ưu chưa?
- Ảnh và font đã được tối ưu chưa?
- Có tải tài nguyên không cần thiết quá sớm không?
- React có render thừa ở đâu không?
- Tốc độ sau tối ưu có cải thiện thực sự không?

## Bài tập cuối khóa
- Chọn một dự án thật hoặc demo
- Audit hiệu suất
- Viết danh sách tối ưu theo mức ưu tiên
- Thực hiện ít nhất 5 cải tiến
- So sánh trước và sau bằng kết quả đo
      `
    }
  ]
};