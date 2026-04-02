import { Lesson } from '../../types';

export const optimizationLesson: Lesson = {
  id: 'web-perf-mastery',
  icon: 'gauge',
  title: 'Tối ưu Hiệu suất',
  description:
    'Lộ trình Tối ưu Hiệu suất theo phong cách tự học cùng AI mentor. Mỗi buổi học đi kèm prompt cực chi tiết để học viên chỉ cần copy vào AI là có thể học từ bản chất, biết đo hiệu suất, audit vấn đề, tối ưu tài nguyên, tối ưu render và được review như học cùng mentor performance 1-1.',
  points: [
    'Mỗi buổi có prompt cực chi tiết để copy vào AI và học ngay',
    'AI đóng vai mentor performance, dạy từ bản chất chứ không chỉ liệt kê mẹo tối ưu',
    'Có prompt học lý thuyết, prompt audit, prompt tối ưu và prompt phản biện',
    'Tập trung vào năng lực thật: đo đúng, tìm đúng bottleneck, tối ưu đúng ưu tiên',
    'Có bài tập theo kiểu audit dự án thật thay vì học mẹo rời rạc',
    'Học xong có thể tự đánh giá và cải thiện tốc độ cho một website hoặc app thực tế'
  ],
  chapters: [
    {
      id: 'perf-01',
      title: 'Buổi 1: Hiệu suất web là gì và vì sao tối ưu hiệu suất quan trọng?',
      level: 'beginner',
      content: `
# Buổi 1: Hiệu suất web là gì và vì sao tối ưu hiệu suất quan trọng?

## Mục tiêu
- Hiểu hiệu suất web là gì
- Hiểu vì sao website chậm làm người dùng rời đi
- Bắt đầu có tư duy performance từ sớm
- Không còn nghĩ performance chỉ là “điểm Lighthouse”

## Cách học buổi này
Bạn sẽ copy từng prompt bên dưới vào AI theo đúng thứ tự.
Không học lướt. Sau mỗi prompt phải tự giải thích lại bằng lời của bạn.

## Prompt 1 - Nhờ AI dạy lý thuyết từ gốc
\`\`\`
Bạn hãy đóng vai một mentor Front-end/Performance cực giỏi, chuyên dạy tối ưu hiệu suất web cho người mới.

Hôm nay hãy dạy tôi buổi đầu tiên về hiệu suất web theo phong cách:
- cực dễ hiểu nhưng không hời hợt
- giải thích từ bản chất
- luôn nói vì sao kiến thức này quan trọng
- gắn với trải nghiệm thật của người dùng
- không dùng thuật ngữ khó nếu chưa giải thích

Chủ đề hôm nay:
- Hiệu suất web là gì?
- Vì sao tốc độ quan trọng?
- Website chậm ảnh hưởng gì đến người dùng, chuyển đổi và SEO?
- Performance không chỉ là điểm số, mà là cảm giác dùng thật

Tôi muốn bạn dạy theo format:
1. Hiệu suất web là gì?
2. Một website “nhanh” nghĩa là gì dưới góc nhìn người dùng?
3. Một website “chậm” gây ra những vấn đề gì?
4. Phân tích các tác động:
   - trải nghiệm người dùng
   - tỉ lệ rời trang
   - chuyển đổi
   - SEO
5. Cho 5 ví dụ website chậm và hậu quả thực tế
6. Chỉ ra 8 hiểu lầm phổ biến của người mới về performance
7. Đặt cho tôi 5 câu hỏi kiểm tra hiểu bài
8. Sau khi tôi trả lời, bạn phải chấm và sửa thật kỹ

Dùng tiếng Việt và dạy như mentor thật sự.
\`\`\`

## Prompt 2 - Nhờ AI luyện tư duy nhìn vấn đề hiệu suất
\`\`\`
Tôi muốn luyện tư duy nhìn một website dưới góc nhìn hiệu suất.

Hãy cho tôi 6 tình huống thực tế, ví dụ:
- landing page nhiều ảnh
- dashboard nhiều dữ liệu
- blog chèn nhiều font và iframe
- app React có danh sách dài
- trang e-commerce có ảnh sản phẩm lớn
- trang mobile bị lag khi cuộn

Với mỗi tình huống:
1. hỏi tôi người dùng sẽ khó chịu ở điểm nào
2. hỏi tôi thành phần nào có thể gây chậm
3. hỏi tôi nên đo hay kiểm tra gì trước
4. sau đó bạn mới chữa
5. nếu tôi trả lời mơ hồ, hãy bắt tôi nói cụ thể hơn

Mục tiêu là để tôi thấy performance là vấn đề sản phẩm, không chỉ là kỹ thuật.
\`\`\`

## Prompt 3 - Nhờ AI kiểm tra hiểu bài
\`\`\`
Hãy kiểm tra xem tôi đã thật sự hiểu performance web buổi 1 chưa.

Tôi muốn có:
- 3 câu hỏi trắc nghiệm có giải thích đáp án
- 3 câu hỏi tự luận ngắn
- 2 tình huống thực tế
- 1 câu hỏi tư duy: vì sao cùng một website nhưng “nhanh trên máy dev” chưa chắc nhanh với người dùng thật?

Sau khi tôi trả lời, bạn hãy:
- chấm điểm từng câu
- giải thích chỗ sai
- nói tôi đang ở mức nào: chưa hiểu / hiểu cơ bản / hiểu chắc
\`\`\`

## Bài tập buổi này
1. Nêu 5 lý do performance quan trọng
2. Kể 3 hậu quả khi website chậm
3. Chọn 1 website bạn từng thấy chậm và phân tích nguyên nhân có thể có

## Tiêu chuẩn hoàn thành
- Hiểu performance là trải nghiệm thật
- Biết vì sao tốc độ quan trọng
- Có động lực học tối ưu từ sớm
      `
    },
    {
      id: 'perf-02',
      title: 'Buổi 2: Trình duyệt tải trang như thế nào và bottleneck thường nằm ở đâu?',
      level: 'beginner',
      content: `
# Buổi 2: Trình duyệt tải trang như thế nào và bottleneck thường nằm ở đâu?

## Mục tiêu
- Hiểu luồng tải trang cơ bản
- Biết HTML, CSS, JS, ảnh, font ảnh hưởng thế nào
- Hiểu render-blocking là gì ở mức dễ hiểu
- Bắt đầu xác định chỗ nào dễ gây chậm

## Prompt 1 - Nhờ AI dạy browser loading từ bản chất
\`\`\`
Hãy dạy tôi performance web buổi 2 như một mentor Front-end.

Chủ đề:
- trình duyệt tải HTML như thế nào
- tải CSS, JS, ảnh, font ra sao
- render-blocking
- parse
- execute
- hiển thị nội dung

Tôi muốn bạn dạy theo cấu trúc:
1. Điều gì xảy ra khi người dùng mở một URL?
2. Trình duyệt lấy HTML trước hay CSS/JS trước?
3. Vai trò của HTML, CSS, JavaScript, ảnh, font trong quá trình tải
4. Vì sao CSS có thể chặn hiển thị?
5. Vì sao JavaScript có thể chặn tương tác?
6. Ảnh và font ảnh hưởng gì tới tốc độ và trải nghiệm?
7. Cho ví dụ một trang tải chậm và phân tích nguyên nhân theo từng lớp tài nguyên
8. Chỉ ra lỗi phổ biến người mới hay nghĩ sai về tốc độ tải
9. Tạo checklist để đọc một trang theo góc nhìn “tài nguyên nào đang chặn người dùng”

Dạy như mentor đang xây nền browser performance cho junior.
\`\`\`

## Prompt 2 - Nhờ AI luyện tư duy bottleneck
\`\`\`
Tôi muốn luyện tư duy xác định bottleneck hiệu suất.

Hãy cho tôi 8 tình huống, ví dụ:
- HTML nhẹ nhưng JS rất nặng
- ảnh hero quá lớn
- font tải chậm
- CSS bundle quá to
- quá nhiều request nhỏ
- iframe YouTube ở đầu trang
- banner đầu trang tải chậm
- app có nhiều thư viện nặng

Với mỗi tình huống:
1. hỏi tôi bottleneck chính có thể là gì
2. hỏi tôi người dùng sẽ cảm thấy chậm ở đâu
3. hỏi tôi nên đo bằng công cụ nào trước
4. sau đó bạn mới chữa
\`\`\`

## Prompt 3 - Nhờ AI kiểm tra hiểu luồng tải trang
\`\`\`
Hãy kiểm tra xem tôi đã hiểu quá trình tải trang chưa.

Tôi muốn có:
- 5 câu hỏi nhận diện bottleneck
- 3 câu hỏi tự luận ngắn
- 1 bài tập yêu cầu tôi giải thích luồng tải trang của một landing page điển hình

Sau khi tôi trả lời, hãy chấm và chỉ ra chỗ tôi đang hiểu mơ hồ.
\`\`\`

## Bài tập buổi này
- Tự mô tả các bước trình duyệt tải một trang
- Liệt kê 5 loại tài nguyên có thể làm chậm trang
- Giải thích tài nguyên nào dễ làm chậm nội dung đầu trang nhất

## Tiêu chuẩn hoàn thành
- Hiểu browser loading flow cơ bản
- Bắt đầu nhìn thấy bottleneck thay vì đoán mù
      `
    },
    {
      id: 'perf-03',
      title: 'Buổi 3: Đo hiệu suất bằng DevTools, Lighthouse và đọc kết quả đúng cách',
      level: 'beginner',
      content: `
# Buổi 3: Đo hiệu suất bằng DevTools, Lighthouse và đọc kết quả đúng cách

## Mục tiêu
- Biết cách đo hiệu suất thay vì đoán
- Làm quen với Chrome DevTools
- Biết tab Network, Performance, Lighthouse
- Biết đọc kết quả theo tư duy ưu tiên vấn đề

## Prompt 1 - Nhờ AI dạy đo hiệu suất như một người làm nghề
\`\`\`
Hãy dạy tôi performance web buổi 3 như mentor thực chiến.

Chủ đề:
- DevTools
- tab Network
- tab Performance
- Lighthouse
- waterfall
- request size
- blocking time
- audit

Tôi muốn bạn dạy theo cấu trúc:
1. Vì sao performance phải đo chứ không đoán?
2. Tab Network giúp tôi thấy điều gì?
3. Tab Performance giúp tôi thấy điều gì?
4. Lighthouse đo và báo cáo điều gì?
5. Waterfall request là gì?
6. Làm sao đọc một báo cáo để tìm vấn đề ưu tiên?
7. Cho ví dụ các kiểu vấn đề:
   - ảnh nặng
   - JS nặng
   - request quá nhiều
   - CLS
8. Chỉ ra lỗi phổ biến:
   - nhìn điểm số mà không hiểu nguyên nhân
   - tối ưu linh tinh không theo dữ liệu
   - fix vấn đề nhỏ trước vấn đề lớn
9. Tạo checklist audit hiệu suất cơ bản

Dạy như mentor performance đang review một dự án thật.
\`\`\`

## Prompt 2 - Nhờ AI dẫn tôi audit một trang web
\`\`\`
Hãy đóng vai mentor và dẫn tôi audit hiệu suất của một trang web bằng DevTools và Lighthouse.

Tôi muốn quy trình:
1. mở DevTools
2. vào tab Network và xem request
3. xác định request nào nặng hoặc chậm
4. chạy Lighthouse
5. ghi lại 3 vấn đề lớn nhất
6. phân loại vấn đề theo:
   - ảnh
   - CSS
   - JavaScript
   - network
   - layout shift
7. sau đó bạn giúp tôi sắp xếp thứ tự ưu tiên fix

Đừng chỉ nói “chạy Lighthouse”. Hãy hướng dẫn như mentor thật.
\`\`\`

## Prompt 3 - Nhờ AI review kết quả đo của tôi
\`\`\`
Tôi sẽ gửi cho bạn:
- ảnh chụp hoặc mô tả tab Network
- kết quả Lighthouse
- danh sách vấn đề tôi thấy

Bạn hãy review:
1. Tôi đọc kết quả đúng chưa?
2. Tôi có đang ưu tiên đúng vấn đề lớn nhất không?
3. Có chỗ nào tôi đang hiểu sai ý nghĩa của chỉ số không?
4. Việc nào nên fix trước?
5. Việc nào chưa cần động vào ngay?
\`\`\`

## Bài tập buổi này
- Audit ít nhất 1 website bằng DevTools + Lighthouse
- Ghi lại 5 vấn đề phát hiện được
- Sắp xếp theo mức ưu tiên

## Tiêu chuẩn hoàn thành
- Biết dùng công cụ đo
- Không còn đoán mò
- Biết nhìn dữ liệu và chọn việc cần làm trước
      `
    },
    {
      id: 'perf-04',
      title: 'Buổi 4: Core Web Vitals, LCP, INP, CLS và cách hiểu trải nghiệm thật',
      level: 'beginner',
      content: `
# Buổi 4: Core Web Vitals, LCP, INP, CLS và cách hiểu trải nghiệm thật

## Mục tiêu
- Hiểu LCP, INP, CLS là gì
- Biết chúng phản ánh trải nghiệm nào của người dùng
- Biết liên hệ chỉ số với hành vi thực tế trên giao diện
- Không học Core Web Vitals như công thức khô khan

## Prompt 1 - Nhờ AI dạy Core Web Vitals bằng tình huống người dùng
\`\`\`
Hãy dạy tôi performance web buổi 4 như một mentor sản phẩm + kỹ thuật.

Chủ đề:
- Core Web Vitals
- LCP
- INP
- CLS

Tôi muốn bạn dạy theo cấu trúc:
1. Core Web Vitals là gì?
2. Vì sao những chỉ số này quan trọng hơn nhiều chỉ số kỹ thuật khác với người dùng?
3. LCP phản ánh điều gì?
4. INP phản ánh điều gì?
5. CLS phản ánh điều gì?
6. Cho ví dụ thực tế:
   - hero banner xuất hiện chậm
   - bấm nút mà phản hồi trễ
   - layout nhảy làm bấm nhầm
7. Chỉ ra nguyên nhân phổ biến làm từng chỉ số xấu
8. Tạo checklist đọc Core Web Vitals theo góc nhìn người dùng thật
9. Sau đó hỏi lại tôi để kiểm tra hiểu bài

Dạy như mentor đang biến số liệu thành trải nghiệm thật.
\`\`\`

## Prompt 2 - Nhờ AI luyện tư duy ánh xạ chỉ số -> vấn đề
\`\`\`
Tôi muốn luyện cách nhìn một vấn đề giao diện và đoán chỉ số nào sẽ xấu.

Hãy cho tôi 8 tình huống, ví dụ:
- ảnh đầu trang quá nặng
- button click rất chậm
- font tải xong làm bố cục lệch
- banner quảng cáo chèn muộn
- JS parse lâu
- form bấm submit nhưng phản hồi trễ
- ảnh không có width/height
- trang mobile lag khi cuộn

Với mỗi tình huống:
1. hỏi tôi chỉ số nào dễ bị ảnh hưởng nhất
2. hỏi tôi vì sao
3. sau đó bạn mới chữa

Mục tiêu là để tôi liên hệ được metric với trải nghiệm.
\`\`\`

## Prompt 3 - Nhờ AI phản biện cách hiểu metrics của tôi
\`\`\`
Tôi sẽ giải thích LCP, INP, CLS theo lời của tôi.
Bạn hãy review:
1. Tôi hiểu bản chất chưa?
2. Tôi có đang chỉ học thuộc định nghĩa không?
3. Tôi có biết liên hệ với giao diện thật không?
4. Cách hiểu nào cần sửa lại để dễ nhớ hơn?
\`\`\`

## Bài tập buổi này
- Giải thích LCP, INP, CLS bằng ví dụ thực tế
- Chọn 1 trang web và đoán chỉ số nào dễ xấu nhất, vì sao

## Tiêu chuẩn hoàn thành
- Không chỉ nhớ tên chỉ số
- Biết gắn chỉ số với trải nghiệm người dùng thật
      `
    },
    {
      id: 'perf-05',
      title: 'Buổi 5: Tối ưu ảnh, font, icon và tài nguyên giao diện',
      level: 'beginner',
      content: `
# Buổi 5: Tối ưu ảnh, font, icon và tài nguyên giao diện

## Mục tiêu
- Hiểu vì sao ảnh và font thường là “kẻ phá tốc độ”
- Biết resize, nén, chọn định dạng ảnh hợp lý
- Biết giảm số lượng font và weight không cần thiết
- Tạo giao diện đẹp mà vẫn nhẹ

## Prompt 1 - Nhờ AI dạy tối ưu tài nguyên giao diện từ bản chất
\`\`\`
Hãy dạy tôi performance web buổi 5 như mentor Front-end thực chiến.

Chủ đề:
- tối ưu ảnh
- resize ảnh
- nén ảnh
- định dạng ảnh
- responsive image ở mức tư duy
- font web
- font weight
- icon

Tôi muốn bạn dạy theo cấu trúc:
1. Vì sao ảnh thường là tài nguyên nặng nhất?
2. Vì sao không nên dùng ảnh 4000px cho khung 400px?
3. Nén ảnh là gì? Resize ảnh là gì? Khác nhau ra sao?
4. Khi nào nên dùng định dạng hiện đại?
5. Font web ảnh hưởng hiệu suất thế nào?
6. Vì sao chỉ nên tải số weight cần thiết?
7. Icon cũng có thể gây nặng ra sao?
8. Cho ví dụ trang dùng quá nhiều ảnh/font và hậu quả
9. Chỉ ra lỗi phổ biến của người mới
10. Tạo checklist audit tài nguyên giao diện

Dạy như mentor đang đi dọn landing page nặng cho team.
\`\`\`

## Prompt 2 - Nhờ AI giao bài thực hành tối ưu tài nguyên
\`\`\`
Hãy giao cho tôi bài thực hành buổi 5:
1. chọn một ảnh lớn và giảm về đúng kích thước cần hiển thị
2. nén ảnh trước/sau và so sánh dung lượng
3. tạo bộ ảnh phù hợp cho mobile và desktop
4. liệt kê các font và weight đang dùng trong một trang
5. đề xuất cắt bớt những font/weight không cần thiết

Tôi muốn bạn:
- không cho đáp án ngay
- để tôi tự làm
- sau khi tôi gửi kết quả, review:
  - ảnh đã tối ưu đúng chưa
  - còn dư kích thước không
  - font có đang bị dùng quá tay không
  - icon có thể thay bằng giải pháp nhẹ hơn không
\`\`\`

## Prompt 3 - Nhờ AI audit tài nguyên của dự án tôi
\`\`\`
Tôi sẽ gửi cho bạn danh sách ảnh/font/icon hoặc mô tả trang của tôi.
Bạn hãy review:
1. Tài nguyên nào đang nặng nhất?
2. Tài nguyên nào đáng tối ưu trước?
3. Có ảnh nào đang overkill không?
4. Có font nào đang tải quá nhiều weight không?
5. Nếu chỉ được tối ưu 3 việc đầu tiên, tôi nên làm gì?
\`\`\`

## Bài tập buổi này
- Tối ưu ít nhất 3 ảnh
- Giảm số font hoặc weight trong 1 trang
- Viết lại danh sách tài nguyên cần tối ưu theo ưu tiên

## Tiêu chuẩn hoàn thành
- Biết tối ưu ảnh đúng cách
- Biết font cũng ảnh hưởng hiệu suất
- Có tư duy ưu tiên tài nguyên quan trọng
      `
    },
    {
      id: 'perf-06',
      title: 'Buổi 6: CSS, JavaScript, lazy loading và code splitting',
      level: 'intermediate',
      content: `
# Buổi 6: CSS, JavaScript, lazy loading và code splitting

## Mục tiêu
- Hiểu CSS và JS có thể làm chậm tải trang thế nào
- Biết lazy loading cho ảnh/iframe/nội dung phụ
- Hiểu code splitting ở mức thực chiến
- Biết giảm tải ban đầu của app

## Prompt 1 - Nhờ AI dạy tối ưu tài nguyên chặn render
\`\`\`
Hãy dạy tôi performance web buổi 6 như mentor Front-end thực chiến.

Chủ đề:
- CSS render-blocking
- CSS thừa
- JavaScript bundle lớn
- parse/execute JavaScript
- lazy loading
- code splitting
- lazy import

Tôi muốn bạn dạy theo cấu trúc:
1. CSS có thể làm chậm hiển thị như thế nào?
2. JavaScript nặng ảnh hưởng tải trang và tương tác ra sao?
3. Lazy loading là gì? Khi nào nên dùng?
4. Vì sao không nên lazy load mọi thứ?
5. Code splitting là gì?
6. Khi nào nên tách code theo route hoặc theo component?
7. Cho ví dụ thực tế:
   - landing page nhiều ảnh
   - app React nhiều route
   - iframe YouTube ở cuối trang
8. Chỉ ra lỗi phổ biến:
   - lazy load sai chỗ
   - tải toàn bộ app ngay từ đầu
   - CSS rất lớn nhưng không biết cắt
9. Tạo checklist tối ưu CSS/JS cơ bản

Dạy như mentor đang sửa tải ban đầu của app cho junior.
\`\`\`

## Prompt 2 - Nhờ AI giao bài thực hành
\`\`\`
Hãy giao cho tôi bài thực hành buổi 6:
1. tìm một file CSS đang dư hoặc lặp
2. tìm file JS/bundle nặng nhất
3. thêm lazy loading cho ảnh ngoài màn hình
4. thêm lazy loading cho iframe
5. nếu là app React/SPA, mô tả chỗ nên code split

Tôi muốn bạn:
- không cho đáp án ngay
- để tôi tự audit
- sau khi tôi gửi kết quả, review:
  - tôi đã tìm đúng chỗ nặng chưa
  - lazy loading có đúng chỗ chưa
  - có gì đang tối ưu sai thứ tự không
  - code splitting nên áp vào phần nào trước
\`\`\`

## Prompt 3 - Nhờ AI phản biện chiến lược tải ban đầu của tôi
\`\`\`
Tôi sẽ mô tả cách trang/app của tôi đang tải CSS, JS, ảnh, iframe.
Bạn hãy review:
1. Cái gì đang chặn hiển thị đầu trang?
2. Cái gì đang làm bundle nặng?
3. Cái gì nên lazy load?
4. Cái gì không nên lazy load?
5. Nếu chỉ được làm 3 việc đầu tiên, nên tối ưu gì?
\`\`\`

## Bài tập buổi này
- Audit CSS và JS của một trang/app
- Thêm lazy loading đúng chỗ
- Đề xuất ít nhất 3 điểm code splitting hoặc deferred loading

## Tiêu chuẩn hoàn thành
- Biết CSS/JS nặng ảnh hưởng thế nào
- Biết lazy loading đúng chỗ
- Bắt đầu có tư duy giảm tải ban đầu
      `
    },
    {
      id: 'perf-07',
      title: 'Buổi 7: Caching, CDN, nén tài nguyên và chiến lược phân phối nội dung',
      level: 'intermediate',
      content: `
# Buổi 7: Caching, CDN, nén tài nguyên và chiến lược phân phối nội dung

## Mục tiêu
- Hiểu cache giúp gì
- Hiểu CDN giúp gì
- Hiểu nén tài nguyên là gì
- Có tư duy phân phối tài nguyên thông minh thay vì tải lại mọi thứ

## Prompt 1 - Nhờ AI dạy từ góc nhìn network
\`\`\`
Hãy dạy tôi performance web buổi 7 như mentor full-stack/performance.

Chủ đề:
- browser cache
- cache header ở mức khái niệm
- CDN
- gzip
- brotli
- static assets

Tôi muốn bạn dạy theo cấu trúc:
1. Cache là gì?
2. Vì sao cache giúp website nhanh hơn ở lần truy cập sau?
3. CDN là gì?
4. Vì sao CDN giúp tài nguyên đến gần người dùng hơn?
5. Nén tài nguyên là gì?
6. gzip và brotli khác gì ở mức dễ hiểu?
7. Cho ví dụ thực tế:
   - logo
   - font
   - JS bundle
   - CSS bundle
8. Chỉ ra lỗi phổ biến:
   - tài nguyên tĩnh mà không cache hợp lý
   - không hiểu vì sao cache cũ gây lỗi
   - không để ý nén tài nguyên
9. Tạo checklist tối ưu network cơ bản

Dạy như mentor đang tối ưu hạ tầng phân phối nội dung cho app.
\`\`\`

## Prompt 2 - Nhờ AI luyện tư duy network/perf
\`\`\`
Tôi muốn luyện tư duy khi nào cache và CDN sẽ giúp nhiều nhất.

Hãy cho tôi 8 tình huống, ví dụ:
- landing page nhiều ảnh tĩnh
- dashboard dữ liệu thay đổi liên tục
- font tải từ nhiều nguồn
- bundle JS lớn
- logo và icon dùng trên mọi trang
- blog có bài viết ít thay đổi
- app nội bộ ít người dùng
- website global nhiều quốc gia

Với mỗi tình huống:
1. hỏi tôi có nên cache không
2. hỏi tôi CDN có ích nhiều không
3. hỏi tài nguyên nào nên ưu tiên tối ưu network trước
4. sau đó bạn mới chữa
\`\`\`

## Prompt 3 - Nhờ AI review chiến lược phân phối tài nguyên của tôi
\`\`\`
Tôi sẽ mô tả website/app của tôi và cách đang phục vụ ảnh, font, CSS, JS.
Bạn hãy review:
1. Tài nguyên nào nên cache mạnh?
2. Tài nguyên nào cần thận trọng vì dễ stale?
3. CDN có đáng dùng không?
4. Nén tài nguyên có đang thiếu không?
5. Nếu chỉ được tối ưu 3 điểm network, tôi nên làm gì trước?
\`\`\`

## Bài tập buổi này
- Chọn một website/app và đề xuất chiến lược cache + CDN + compression
- Giải thích bằng lời tài nguyên nào nên được cache dài hơn

## Tiêu chuẩn hoàn thành
- Hiểu cache/CDN/compression ở mức nền tảng
- Có tư duy network optimization cơ bản
      `
    },
    {
      id: 'perf-08',
      title: 'Buổi 8: React performance - re-render, memoization và danh sách lớn',
      level: 'advanced',
      content: `
# Buổi 8: React performance - re-render, memoization và danh sách lớn

## Mục tiêu
- Hiểu re-render trong React
- Phân biệt re-render bình thường và re-render thừa
- Biết \`React.memo\`, \`useMemo\`, \`useCallback\`
- Hiểu virtualization cho danh sách lớn

## Prompt 1 - Nhờ AI dạy React performance từ bản chất
\`\`\`
Hãy dạy tôi performance web buổi 8 như mentor React performance.

Chủ đề:
- re-render
- parent render / child render
- React.memo
- useMemo
- useCallback
- danh sách lớn
- virtualization

Tôi muốn bạn dạy theo cấu trúc:
1. Re-render là gì?
2. Khi nào re-render là bình thường?
3. Khi nào re-render trở thành vấn đề?
4. React.memo giúp gì?
5. useMemo giúp gì?
6. useCallback giúp gì?
7. Vì sao danh sách dài dễ lag?
8. Virtualization là gì?
9. Cho ví dụ thực tế:
   - list sản phẩm
   - filter/search
   - component con nhận callback
10. Chỉ ra lỗi phổ biến:
   - tối ưu quá sớm
   - dùng memoization sai chỗ
   - render hàng nghìn item cùng lúc
11. Tạo checklist React performance cơ bản

Dạy như mentor đang sửa app React chậm cho junior.
\`\`\`

## Prompt 2 - Nhờ AI giao bài thực hành React performance
\`\`\`
Hãy giao cho tôi bài thực hành buổi 8:
1. tạo danh sách lớn giả lập
2. quan sát cảm giác lag khi filter hoặc render
3. áp dụng React.memo cho component con
4. áp dụng useMemo cho danh sách lọc
5. áp dụng useCallback cho callback truyền xuống con
6. mô tả nơi nào nên nghĩ tới virtualization

Tôi muốn bạn:
- không cho đáp án ngay
- để tôi tự làm
- sau khi tôi gửi code, review:
  - tối ưu đã đúng chỗ chưa
  - memoization có đang thừa không
  - list có đang là bottleneck thật không
  - có cách nào đơn giản hơn không
\`\`\`

## Prompt 3 - Nhờ AI review React performance của tôi
\`\`\`
Tôi sẽ gửi cho bạn code React của tôi.
Bạn hãy review:
1. Component nào đang re-render thừa?
2. Re-render đó có đáng lo hay không?
3. Có chỗ nào nên dùng React.memo/useMemo/useCallback không?
4. Có chỗ nào tôi đang tối ưu quá sớm không?
5. Nếu có danh sách lớn, virtualization có cần không?

Hãy review như mentor React performance khó tính.
\`\`\`

## Bài tập buổi này
- Audit một phần UI React
- Tối ưu ít nhất 2 vấn đề re-render hoặc danh sách
- Viết lại bằng lời vì sao tối ưu đó có giá trị

## Tiêu chuẩn hoàn thành
- Hiểu re-render
- Biết khi nào tối ưu React là cần thiết
- Không còn dùng memoization theo kiểu mê tín
      `
    },
    {
      id: 'perf-09',
      title: 'Buổi 9: Tối ưu request, API, dữ liệu và chiến lược ưu tiên',
      level: 'advanced',
      content: `
# Buổi 9: Tối ưu request, API, dữ liệu và chiến lược ưu tiên

## Mục tiêu
- Hiểu request quá nhiều cũng làm app chậm
- Biết tối ưu dữ liệu trả về từ API
- Biết debounce, pagination, tránh gọi API dư
- Biết chọn việc tối ưu theo ưu tiên cao nhất

## Prompt 1 - Nhờ AI dạy tối ưu data flow
\`\`\`
Hãy dạy tôi performance web buổi 9 như mentor full-stack/performance.

Chủ đề:
- request quá nhiều
- payload quá lớn
- chỉ lấy dữ liệu cần dùng
- pagination
- debounce
- tránh gọi API lặp
- cache dữ liệu phía client khi phù hợp

Tôi muốn bạn dạy theo cấu trúc:
1. Vì sao request quá nhiều làm app chậm?
2. Vì sao payload lớn cũng là vấn đề?
3. Pagination giúp gì?
4. Debounce dùng trong tình huống nào?
5. Vì sao search box không nên gọi API mỗi ký tự ngay lập tức?
6. Khi nào nên cache dữ liệu phía client?
7. Cho ví dụ thực tế:
   - search sản phẩm
   - dashboard filter
   - list bài viết
   - autocomplete
8. Chỉ ra lỗi phổ biến:
   - gọi API lặp vô ích
   - trả về quá nhiều field không dùng
   - không phân trang
9. Tạo checklist tối ưu data/request

Dạy như mentor đang sửa app gọi API lãng phí.
\`\`\`

## Prompt 2 - Nhờ AI giao bài audit request
\`\`\`
Hãy giao cho tôi bài thực hành buổi 9:
1. audit một flow tìm kiếm hoặc danh sách
2. xác định request nào thừa
3. xác định payload nào đang quá lớn
4. đề xuất pagination hoặc debounce
5. đề xuất cache phù hợp nếu cần

Tôi muốn bạn:
- không cho đáp án ngay
- để tôi tự phân tích
- sau khi tôi gửi kết quả, review:
  - tôi đã nhìn đúng bottleneck chưa
  - đề xuất tối ưu có hợp lý không
  - có gì đang tối ưu quá tay hoặc sai chỗ không
\`\`\`

## Prompt 3 - Nhờ AI phản biện thứ tự ưu tiên tối ưu của tôi
\`\`\`
Tôi sẽ gửi danh sách các vấn đề performance tôi tìm thấy trong app.
Bạn hãy review:
1. Tôi có đang ưu tiên đúng việc quan trọng nhất không?
2. Có vấn đề nào impact nhỏ nhưng tôi đang chú ý quá nhiều không?
3. Có vấn đề nào impact lớn nhưng tôi đang bỏ qua không?
4. Nếu chỉ được làm 3 việc tuần này, nên làm gì?
5. Vì sao?

Hãy phản biện như mentor performance thực chiến.
\`\`\`

## Bài tập buổi này
- Audit một flow request/API
- Viết ra 5 vấn đề + thứ tự ưu tiên tối ưu
- Giải thích lý do ưu tiên

## Tiêu chuẩn hoàn thành
- Hiểu performance không chỉ là tài nguyên tĩnh
- Biết nhìn request/data flow như một nguồn chậm lớn
- Bắt đầu tối ưu theo ưu tiên thay vì theo hứng
      `
    },
    {
      id: 'perf-10',
      title: 'Buổi 10: Project cuối khóa - audit và tối ưu một website/app thực tế',
      level: 'advanced',
      content: `
# Buổi 10: Project cuối khóa - audit và tối ưu một website/app thực tế

## Mục tiêu
- Tổng hợp toàn bộ kiến thức tối ưu hiệu suất đã học
- Audit một website/app thật
- Lập kế hoạch tối ưu theo ưu tiên
- Đo trước/sau và tự đánh giá hiệu quả thật

## Prompt 1 - Nhờ AI dẫn tôi làm project từ đầu
\`\`\`
Hãy đóng vai mentor performance và dẫn tôi làm project cuối khóa.

Cho tôi chọn 1 trong các loại project:
1. Landing page nhiều ảnh
2. Blog mini
3. Dashboard dữ liệu
4. App React có danh sách lớn
5. Website học online có nhiều ảnh, font và nhiều route

Sau khi tôi chọn, hãy dẫn tôi theo lộ trình:
1. xác định mục tiêu audit
2. đo hiệu suất ban đầu
3. liệt kê các vấn đề chính
4. phân loại vấn đề theo:
   - ảnh/font
   - CSS/JS
   - render
   - request/API
   - layout shift
5. sắp xếp thứ tự ưu tiên
6. đề xuất cách tối ưu cho từng nhóm
7. để tôi tự làm từng bước
8. sau mỗi bước, review rất kỹ như mentor
9. cuối cùng, giúp tôi so sánh trước/sau

Mục tiêu là để tôi thật sự biết làm performance audit thực tế.
\`\`\`

## Prompt 2 - Nhờ AI audit project cuối khóa
\`\`\`
Tôi sẽ gửi cho bạn kết quả audit hiệu suất của tôi:
- số liệu trước tối ưu
- các vấn đề tôi tìm thấy
- các thay đổi tôi đã làm
- số liệu sau tối ưu

Bạn hãy audit như mentor performance kỹ tính.

Đánh giá theo 8 nhóm tiêu chí:
1. Cách đo ban đầu
2. Khả năng đọc dữ liệu
3. Xác định bottleneck
4. Thứ tự ưu tiên
5. Chất lượng tối ưu tài nguyên
6. Chất lượng tối ưu render/request
7. Cải thiện trải nghiệm thực tế
8. Mức độ trưởng thành trong tư duy performance

Với mỗi nhóm:
- nêu điểm tốt
- nêu lỗi cụ thể
- giải thích vì sao là lỗi
- cho hướng sửa cụ thể
- ưu tiên lỗi nghiêm trọng trước

Cuối cùng:
- chấm điểm tổng trên thang 100
- xếp loại: yếu / ổn / tốt / rất tốt
- cho tôi 5 thói quen performance cần giữ lâu dài
\`\`\`

## Prompt 3 - Nhờ AI đóng vai reviewer cuối khóa
\`\`\`
Hãy đóng vai reviewer cuối khóa về web performance.

Tôi sẽ gửi báo cáo và thay đổi tối ưu của tôi.
Bạn phải review như thật, không nể nang.

Cách review mong muốn:
- đánh giá cách tôi đo
- đánh giá cách tôi suy luận từ dữ liệu
- đánh giá cách tôi chọn việc cần tối ưu
- đánh giá chất lượng các tối ưu đã làm
- đánh giá impact thật lên trải nghiệm người dùng
- chỉ rõ điểm nào chứng tỏ tôi đã hiểu performance
- chỉ rõ điểm nào cho thấy tôi vẫn đang tối ưu kiểu mẹo vặt, không có hệ thống

Cuối cùng, hãy nói thật:
- tôi đã đủ nền tảng để audit performance cho dự án thật chưa?
- nếu chưa, tôi cần luyện thêm phần nào?
\`\`\`

## Gợi ý project
Chọn 1 trong các project:
1. Landing page nhiều ảnh
2. Blog mini
3. Dashboard dữ liệu
4. App React có danh sách lớn
5. Website học online có nhiều ảnh và nhiều route

## Yêu cầu bắt buộc
- Có đo hiệu suất ban đầu
- Có liệt kê vấn đề chính
- Có sắp xếp ưu tiên
- Có thực hiện ít nhất 5 cải tiến
- Có đo lại sau khi tối ưu
- Có giải thích vì sao các cải tiến đó quan trọng

## Checklist tự đánh giá
- Tôi đã đo trước khi tối ưu chưa?
- Tôi có đang fix vấn đề lớn nhất trước không?
- Ảnh, font, CSS, JS đã được xem xét chưa?
- Render/request/data flow đã được xem xét chưa?
- Sau tối ưu, trải nghiệm người dùng có thật sự khá hơn không?
- Tôi có thể giải thích vì sao từng thay đổi lại có giá trị không?

## Bài tập cuối khóa
- Chọn một dự án thật hoặc demo
- Audit hiệu suất
- Viết danh sách tối ưu theo mức ưu tiên
- Thực hiện ít nhất 5 cải tiến
- So sánh trước và sau
- Tự audit bằng AI theo các prompt trên
      `
    }
  ]
};