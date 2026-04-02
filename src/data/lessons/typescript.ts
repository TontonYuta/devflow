import { Lesson } from '../../types';

export const typescriptLesson: Lesson = {
  id: 'typescript-mastery',
  icon: 'file-code',
  title: 'TypeScript Thực chiến',
  description:
    'Lộ trình TypeScript theo phong cách tự học cùng AI mentor. Mỗi buổi học đi kèm prompt cực chi tiết để học viên chỉ cần copy vào AI là có thể học từ bản chất, hiểu hệ thống kiểu, viết code an toàn hơn, ít bug hơn và được review như học cùng mentor 1-1.',
  points: [
    'Mỗi buổi có prompt cực chi tiết để copy vào AI và học ngay',
    'AI đóng vai mentor TypeScript, dạy từ bản chất chứ không chỉ giải thích cú pháp',
    'Có prompt học lý thuyết, prompt làm bài, prompt review và prompt phản biện thiết kế kiểu dữ liệu',
    'Tập trung vào năng lực thật: type-safe functions, object modeling, generics, utility types, API typing, React + TypeScript',
    'Có bài tập theo kiểu mô hình hóa dữ liệu và refactor code JS sang TS thay vì chỉ học định nghĩa',
    'Học xong có thể tự dùng TypeScript trong dự án thật với tư duy rõ ràng hơn về dữ liệu và an toàn kiểu'
  ],
  chapters: [
    {
      id: 'ts-01',
      title: 'Buổi 1: TypeScript là gì và vì sao nó giúp code an toàn hơn?',
      level: 'beginner',
      content: `
# Buổi 1: TypeScript là gì và vì sao nó giúp code an toàn hơn?

## Mục tiêu
- Hiểu TypeScript là gì
- Biết TypeScript khác JavaScript ở đâu
- Hiểu vì sao kiểu dữ liệu tĩnh giúp tránh bug
- Bắt đầu có tư duy “mô tả dữ liệu rõ ràng trước khi viết logic”

## Cách học buổi này
Bạn sẽ copy từng prompt bên dưới vào AI theo đúng thứ tự.
Không học lướt. Sau mỗi prompt phải tự giải thích lại bằng lời của bạn.

## Prompt 1 - Nhờ AI dạy lý thuyết từ gốc
\`\`\`
Bạn hãy đóng vai một mentor Front-end/TypeScript cực giỏi, chuyên dạy TypeScript cho người đã biết JavaScript cơ bản.

Hôm nay hãy dạy tôi buổi đầu tiên về TypeScript theo phong cách:
- cực dễ hiểu nhưng không hời hợt
- giải thích từ bản chất
- luôn nói vì sao kiến thức này quan trọng
- gắn với ví dụ bug thực tế trong JavaScript
- không dùng thuật ngữ khó nếu chưa giải thích

Chủ đề hôm nay:
- TypeScript là gì?
- TypeScript khác JavaScript ở đâu?
- Vì sao hệ thống kiểu giúp code an toàn hơn?
- TypeScript giúp gì khi project lớn dần?

Tôi muốn bạn dạy theo format:
1. TypeScript là gì?
2. Vì sao nói TypeScript là JavaScript có thêm hệ thống kiểu?
3. Kiểu dữ liệu tĩnh giúp bắt lỗi sớm như thế nào?
4. So sánh thật rõ JavaScript và TypeScript bằng ví dụ thực tế
5. Cho 5 ví dụ bug mà TypeScript có thể giúp phát hiện sớm
6. Vì sao TypeScript hữu ích khi codebase lớn dần?
7. Chỉ ra 8 hiểu lầm phổ biến của người mới về TypeScript
8. Đặt cho tôi 5 câu hỏi kiểm tra hiểu bài
9. Sau khi tôi trả lời, bạn phải chấm và sửa thật kỹ

Dùng tiếng Việt và dạy như mentor thật sự.
\`\`\`

## Prompt 2 - Nhờ AI luyện tư duy “bug nào TS bắt được”
\`\`\`
Tôi muốn luyện tư duy nhìn bug và hiểu TypeScript giúp gì.

Hãy cho tôi 8 đoạn logic JavaScript đơn giản, ví dụ:
- cộng 2 số nhưng truyền nhầm string
- gọi hàm với thiếu tham số
- object thiếu field
- đọc field không tồn tại
- API trả dữ liệu khác mình tưởng
- callback nhận sai kiểu dữ liệu
- form input có thể là undefined
- state có thể là null nhưng code không kiểm tra

Với mỗi tình huống:
1. hỏi tôi bug nằm ở đâu
2. hỏi tôi TypeScript có thể giúp cảnh báo chỗ nào
3. hỏi tôi cần mô tả kiểu dữ liệu ra sao để an toàn hơn
4. sau đó bạn mới chữa

Mục tiêu là để tôi thấy TypeScript không phải “code rườm rà”, mà là công cụ chặn bug sớm.
\`\`\`

## Prompt 3 - Nhờ AI kiểm tra hiểu bài
\`\`\`
Hãy kiểm tra xem tôi đã thật sự hiểu TypeScript buổi 1 chưa.

Tôi muốn có:
- 3 câu hỏi trắc nghiệm có giải thích đáp án
- 3 câu hỏi tự luận ngắn
- 2 ví dụ yêu cầu tôi chỉ ra bug JavaScript mà TS có thể bắt
- 1 câu hỏi tư duy: vì sao "code JavaScript đang chạy được" vẫn rất nên chuyển sang TypeScript?

Sau khi tôi trả lời, bạn hãy:
- chấm điểm từng câu
- giải thích chỗ sai
- nói tôi đang ở mức nào: chưa hiểu / hiểu cơ bản / hiểu chắc
\`\`\`

## Bài tập buổi này
1. Giải thích TypeScript bằng lời của bạn
2. Viết 3 ví dụ JavaScript có thể gây bug và cách TypeScript giúp
3. So sánh JavaScript và TypeScript trong một tình huống thực tế

## Tiêu chuẩn hoàn thành
- Hiểu TypeScript là gì
- Thấy rõ giá trị của type safety
- Không còn nghĩ TypeScript chỉ là “thêm annotation cho đẹp”
      `
    },
    {
      id: 'ts-02',
      title: 'Buổi 2: Cài đặt môi trường, tsconfig và cách TypeScript biên dịch code',
      level: 'beginner',
      content: `
# Buổi 2: Cài đặt môi trường, tsconfig và cách TypeScript biên dịch code

## Mục tiêu
- Cài được TypeScript
- Hiểu TypeScript compile sang JavaScript như thế nào
- Biết vai trò của \`tsconfig.json\`
- Chạy được file TypeScript đầu tiên

## Prompt 1 - Nhờ AI hướng dẫn setup như mentor kỹ thuật
\`\`\`
Hãy đóng vai mentor kỹ thuật và hướng dẫn tôi setup môi trường TypeScript từ đầu.

Tôi muốn bạn hướng dẫn theo cách:
1. giải thích vì sao TypeScript cần bước compile
2. hướng dẫn cài TypeScript trong project
3. hướng dẫn tạo tsconfig.json
4. giải thích vai trò của tsconfig ở mức dễ hiểu
5. hướng dẫn tạo file main.ts đầu tiên
6. hướng dẫn compile sang JavaScript
7. nếu có lỗi thường gặp, hãy nói luôn cách xử lý

Dùng tiếng Việt và hướng dẫn như mentor đang ngồi cạnh tôi.
\`\`\`

## Prompt 2 - Nhờ AI giải thích tsconfig và compile flow
\`\`\`
Tôi vừa setup xong TypeScript. Hãy giúp tôi hiểu luồng hoạt động của nó.

Tôi muốn bạn giải thích:
1. vì sao trình duyệt/node không chạy trực tiếp file .ts theo cách đơn giản nhất
2. lệnh tsc đang làm gì
3. file tsconfig giúp gì cho project
4. nên hiểu compiler options ở mức người mới như thế nào
5. phần nào cần biết ngay, phần nào có thể học sau

Đừng giải thích quá hàn lâm. Hãy giúp tôi hình dung flow thực tế.
\`\`\`

## Prompt 3 - Nhờ AI kiểm tra setup của tôi
\`\`\`
Tôi sẽ gửi cho bạn:
- file tsconfig.json
- file main.ts đầu tiên
- kết quả compile

Bạn hãy review:
1. Setup đã đúng chưa?
2. Tôi có hiểu đúng TypeScript compile flow chưa?
3. Có config nào người mới nên chỉnh hoặc tạm chưa cần đụng vào không?
4. Có lỗi setup nào cần sửa ngay không?
\`\`\`

## Bài tập buổi này
- Tạo project TypeScript mới
- Chạy thành công một file .ts
- Tự giải thích tsconfig và compile flow bằng lời của bạn

## Tiêu chuẩn hoàn thành
- Môi trường TS chạy được
- Biết TS cần compile
- Không còn mù về tsconfig ở mức cơ bản
      `
    },
    {
      id: 'ts-03',
      title: 'Buổi 3: Kiểu dữ liệu cơ bản, type inference và khi nào nên ghi kiểu rõ ràng',
      level: 'beginner',
      content: `
# Buổi 3: Kiểu dữ liệu cơ bản, type inference và khi nào nên ghi kiểu rõ ràng

## Mục tiêu
- Nắm chắc kiểu dữ liệu cơ bản
- Hiểu type inference
- Biết khi nào nên để TS suy luận, khi nào nên explicit typing
- Hiểu vì sao \`any\` và \`unknown\` khác nhau rất nhiều

## Prompt 1 - Nhờ AI dạy primitive types + inference
\`\`\`
Hãy dạy tôi TypeScript buổi 3 như một mentor thực chiến.

Chủ đề:
- string
- number
- boolean
- null
- undefined
- any
- unknown
- type inference
- explicit typing

Tôi muốn bạn dạy theo cấu trúc:
1. Các kiểu dữ liệu cơ bản trong TS là gì?
2. Type inference là gì?
3. Khi nào nên để TS tự suy luận?
4. Khi nào nên ghi rõ kiểu?
5. any nguy hiểm ở đâu?
6. unknown an toàn hơn any như thế nào?
7. Cho ví dụ thực tế:
   - biến lưu tên, tuổi, trạng thái
   - dữ liệu lấy từ API chưa rõ kiểu
   - hàm nhận input chưa xác định
8. Chỉ ra lỗi phổ biến:
   - lạm dụng any
   - ghi kiểu thừa ở chỗ không cần
   - không hiểu unknown cần được kiểm tra trước khi dùng
9. Tạo checklist dùng kiểu cơ bản và inference hợp lý

Dạy như mentor đang sửa nền TypeScript cho junior.
\`\`\`

## Prompt 2 - Nhờ AI giao bài thực hành type basics
\`\`\`
Hãy giao cho tôi bài thực hành buổi 3:
1. tạo nhiều biến với các kiểu cơ bản
2. để TypeScript tự suy luận ở một số chỗ
3. explicit typing ở một số chỗ
4. tạo ví dụ cho any và unknown
5. tạo tình huống unknown cần narrowing trước khi dùng

Tôi muốn bạn:
- không cho đáp án ngay
- để tôi tự làm
- sau khi tôi gửi code, review:
  - inference có đang dùng hợp lý không
  - chỗ nào nên explicit typing hơn
  - any có đang bị lạm dụng không
  - unknown có đang được xử lý đúng không
\`\`\`

## Prompt 3 - Nhờ AI review nền type usage của tôi
\`\`\`
Tôi sẽ gửi cho bạn một file TypeScript ngắn.
Bạn hãy review:
1. Kiểu dữ liệu có rõ không?
2. Chỗ nào nên để inference?
3. Chỗ nào nên explicit typing?
4. Có chỗ nào đang dùng any quá nguy hiểm không?
5. Có cách nào an toàn và gọn hơn không?
\`\`\`

## Bài tập buổi này
- Tạo ít nhất 15 biến dùng các kiểu cơ bản
- So sánh any và unknown bằng 3 ví dụ
- Tự giải thích nơi nào nên để TS suy luận

## Tiêu chuẩn hoàn thành
- Hiểu kiểu cơ bản
- Hiểu inference vs explicit typing
- Không lạm dụng any
      `
    },
    {
      id: 'ts-04',
      title: 'Buổi 4: Function, array, object và mô hình hóa dữ liệu cơ bản',
      level: 'beginner',
      content: `
# Buổi 4: Function, array, object và mô hình hóa dữ liệu cơ bản

## Mục tiêu
- Dùng được kiểu cho function
- Dùng được array và object type
- Hiểu optional và readonly property
- Bắt đầu mô hình hóa dữ liệu thật bằng TypeScript

## Prompt 1 - Nhờ AI dạy data modeling cơ bản
\`\`\`
Hãy dạy tôi TypeScript buổi 4 như mentor thực chiến.

Chủ đề:
- function parameter types
- return type
- void
- optional parameter
- array type
- object type
- optional property
- readonly property

Tôi muốn bạn dạy theo cấu trúc:
1. Vì sao function nên có kiểu tham số và kiểu trả về rõ?
2. Khi nào nên ghi return type rõ ràng?
3. Optional parameter dùng khi nào?
4. Mô tả array trong TS như thế nào?
5. Mô tả object trong TS như thế nào?
6. Optional property và readonly property giúp gì?
7. Cho ví dụ thực tế:
   - user
   - product
   - blog post
   - order
8. Chỉ ra lỗi phổ biến:
   - object type quá mơ hồ
   - function trả về nhưng không mô tả rõ
   - optional dùng quá tay
9. Tạo checklist mô hình hóa dữ liệu cơ bản

Dạy như mentor đang giúp junior chuyển từ JS động sang TS rõ ràng hơn.
\`\`\`

## Prompt 2 - Nhờ AI giao bài thực hành data modeling
\`\`\`
Hãy giao cho tôi bài thực hành buổi 4:
1. viết 5 hàm có parameter/return type rõ ràng
2. tạo mảng user hoặc product có kiểu rõ ràng
3. tạo object mô tả hồ sơ người dùng
4. thêm optional và readonly property vào ví dụ phù hợp

Tôi muốn bạn:
- không cho đáp án ngay
- để tôi tự làm
- sau khi tôi gửi code, review:
  - function signature có tốt không
  - object modeling có hợp lý không
  - optional/readonly có dùng đúng chỗ không
  - có field nào đặt tên chưa rõ không
\`\`\`

## Prompt 3 - Nhờ AI review khả năng mô hình hóa dữ liệu của tôi
\`\`\`
Tôi sẽ gửi cho bạn một số function, array và object TypeScript.
Bạn hãy review:
1. Kiểu cho function đã đủ rõ chưa?
2. Dữ liệu object có mô tả đúng không?
3. Có property nào nên optional hoặc readonly không?
4. Mảng và object có đang phản ánh dữ liệu thật rõ ràng không?
5. Có cách mô hình hóa nào tốt hơn không?
\`\`\`

## Bài tập buổi này
- Viết ít nhất 5 hàm typed rõ ràng
- Tạo ít nhất 3 object model khác nhau
- Tự giải thích cách bạn mô hình hóa từng object

## Tiêu chuẩn hoàn thành
- Biết type function
- Biết type array và object
- Bắt đầu mô hình hóa dữ liệu thật bằng TS
      `
    },
    {
      id: 'ts-05',
      title: 'Buổi 5: Type Alias, Interface, Union, Intersection và Narrowing',
      level: 'intermediate',
      content: `
# Buổi 5: Type Alias, Interface, Union, Intersection và Narrowing

## Mục tiêu
- Hiểu \`type\` và \`interface\`
- Biết khi nào dùng type, khi nào dùng interface
- Dùng được union và intersection
- Hiểu narrowing để xử lý dữ liệu an toàn

## Prompt 1 - Nhờ AI dạy các công cụ mô hình hóa dữ liệu nâng hơn
\`\`\`
Hãy dạy tôi TypeScript buổi 5 như mentor thực chiến.

Chủ đề:
- type alias
- interface
- union
- intersection
- literal type
- narrowing
- typeof
- in

Tôi muốn bạn dạy theo cấu trúc:
1. Type alias là gì?
2. Interface là gì?
3. Khi nào nên dùng type, khi nào nên dùng interface?
4. Union type giúp gì?
5. Intersection type giúp gì?
6. Narrowing là gì?
7. Vì sao unknown hoặc union cần narrowing trước khi dùng?
8. Cho ví dụ thực tế:
   - trạng thái đơn hàng
   - user/admin
   - dữ liệu string | number
   - object nhiều dạng
9. Chỉ ra lỗi phổ biến:
   - dùng type/interface theo thói quen mà không hiểu
   - union nhưng không narrowing
   - tạo kiểu quá phức tạp không cần thiết
10. Tạo checklist chọn công cụ type phù hợp

Dạy như mentor đang giúp junior tổ chức type system gọn hơn.
\`\`\`

## Prompt 2 - Nhờ AI giao bài thực hành type design
\`\`\`
Hãy giao cho tôi bài thực hành buổi 5:
1. tạo type cho status bằng literal union
2. tạo interface cho user
3. tạo type hoặc interface cho product
4. tạo union type và xử lý bằng narrowing
5. tạo intersection type từ 2 kiểu nhỏ

Tôi muốn bạn:
- không cho đáp án ngay
- để tôi tự làm
- sau khi tôi gửi code, review:
  - đã chọn đúng type/interface chưa
  - union/intersection có hợp lý không
  - narrowing đã đủ an toàn chưa
  - có kiểu nào đang thiết kế rối quá không
\`\`\`

## Prompt 3 - Nhờ AI review design type system của tôi
\`\`\`
Tôi sẽ gửi cho bạn một số type/interface trong code của tôi.
Bạn hãy review:
1. Chỗ nào nên là type?
2. Chỗ nào nên là interface?
3. Union/intersection có dùng hợp lý không?
4. Có chỗ nào cần narrowing mà tôi đang bỏ qua không?
5. Kiểu dữ liệu này có dễ đọc và dễ maintain không?
\`\`\`

## Bài tập buổi này
- Tạo ít nhất 6 type/interface
- Dùng union, intersection và narrowing trong ít nhất 3 ví dụ
- Giải thích vì sao bạn chọn type hay interface

## Tiêu chuẩn hoàn thành
- Hiểu type vs interface
- Dùng được union/intersection
- Biết narrowing để code an toàn hơn
      `
    },
    {
      id: 'ts-06',
      title: 'Buổi 6: Generic cơ bản và generic nâng cao trong code thực tế',
      level: 'intermediate',
      content: `
# Buổi 6: Generic cơ bản và generic nâng cao trong code thực tế

## Mục tiêu
- Hiểu generic là gì
- Biết vì sao generic mạnh hơn any
- Viết được generic function, generic type, generic interface
- Hiểu constraint với \`extends\`

## Prompt 1 - Nhờ AI dạy generic từ bản chất
\`\`\`
Hãy dạy tôi TypeScript buổi 6 như mentor thực chiến.

Chủ đề:
- generic
- generic function
- generic type
- generic interface
- type parameter
- constraint
- extends

Tôi muốn bạn dạy theo cấu trúc:
1. Generic là gì?
2. Vì sao generic tốt hơn any?
3. Generic giúp giữ mối liên hệ giữa input và output như thế nào?
4. Khi nào nên dùng generic function?
5. Khi nào nên dùng generic type/interface?
6. Constraint với extends giúp gì?
7. Cho ví dụ thực tế:
   - lấy phần tử đầu của mảng
   - API response wrapper
   - paginated data
   - object có id hoặc name
8. Chỉ ra lỗi phổ biến:
   - dùng generic chỉ để trông “nâng cao”
   - generic quá phức tạp
   - dùng any ở nơi generic tốt hơn
9. Tạo checklist dùng generic đúng chỗ

Dạy như mentor đang mở ra “cấp độ 2” của TypeScript cho junior.
\`\`\`

## Prompt 2 - Nhờ AI giao bài thực hành generic
\`\`\`
Hãy giao cho tôi bài thực hành buổi 6:
1. viết 3 generic function
2. viết 1 generic type cho API response
3. viết 1 generic interface cho danh sách phân trang
4. viết 1 hàm generic có constraint với extends

Tôi muốn bạn:
- không cho đáp án ngay
- để tôi tự làm
- sau khi tôi gửi code, review:
  - generic có thực sự cần không
  - type parameter có đặt tên rõ không
  - constraint có hợp lý không
  - chỗ nào có thể đơn giản hơn không
\`\`\`

## Prompt 3 - Nhờ AI review chất lượng generic của tôi
\`\`\`
Tôi sẽ gửi cho bạn một số generic tôi viết.
Bạn hãy review:
1. Generic này có mang lại giá trị thật không?
2. Có chỗ nào đang dùng any thay vì generic?
3. Constraint đã đúng chưa?
4. Có chỗ nào đang over-engineer không?
5. Nếu muốn dễ đọc hơn, nên refactor gì?
\`\`\`

## Bài tập buổi này
- Viết ít nhất 5 ví dụ dùng generic
- Có ít nhất 2 ví dụ generic liên quan dữ liệu API hoặc list
- Tự giải thích vì sao generic ở đây có giá trị

## Tiêu chuẩn hoàn thành
- Hiểu generic là gì
- Dùng được generic trong code thực tế
- Không lạm dụng generic một cách hình thức
      `
    },
    {
      id: 'ts-07',
      title: 'Buổi 7: Utility Types, class và mô hình hóa domain thực tế',
      level: 'advanced',
      content: `
# Buổi 7: Utility Types, class và mô hình hóa domain thực tế

## Mục tiêu
- Dùng được utility types quan trọng
- Biết giảm lặp code bằng \`Partial\`, \`Pick\`, \`Omit\`, \`Record\`
- Hiểu class trong TypeScript ở mức thực chiến
- Bắt đầu mô hình hóa domain rõ ràng hơn

## Prompt 1 - Nhờ AI dạy utility types + class mindset
\`\`\`
Hãy dạy tôi TypeScript buổi 7 như mentor thực chiến.

Chủ đề:
- Partial
- Required
- Pick
- Omit
- Record
- class
- constructor
- public/private/protected/readonly

Tôi muốn bạn dạy theo cấu trúc:
1. Utility types giúp gì trong code thực tế?
2. Khi nào dùng Partial?
3. Khi nào dùng Pick và Omit?
4. Record phù hợp với bài toán nào?
5. Class trong TypeScript nên hiểu ở mức nào với lập trình web hiện đại?
6. public/private/protected/readonly giúp gì?
7. Cho ví dụ thực tế:
   - create/update DTO
   - user preview
   - map trạng thái
   - class quản lý sản phẩm hoặc user
8. Chỉ ra lỗi phổ biến:
   - lặp type thay vì dùng utility types
   - class quá nặng cho bài toán đơn giản
   - dùng access modifier mà không hiểu trách nhiệm
9. Tạo checklist utility types + class thực dụng

Dạy như mentor đang giúp junior viết TS gọn hơn và ít lặp hơn.
\`\`\`

## Prompt 2 - Nhờ AI giao bài thực hành utility types
\`\`\`
Hãy giao cho tôi bài thực hành buổi 7:
1. tạo User type đầy đủ
2. tạo UserUpdate bằng Partial
3. tạo UserPreview bằng Pick
4. tạo UserWithoutSecret bằng Omit
5. tạo Record để ánh xạ trạng thái
6. viết một class nhỏ có constructor và method rõ ràng

Tôi muốn bạn:
- không cho đáp án ngay
- để tôi tự làm
- sau khi tôi gửi code, review:
  - utility types có dùng đúng chỗ không
  - có đang lặp type vô ích không
  - class có thực sự phù hợp với bài toán không
  - access modifier có hợp lý không
\`\`\`

## Prompt 3 - Nhờ AI review domain modeling của tôi
\`\`\`
Tôi sẽ gửi cho bạn các type và class TypeScript của tôi.
Bạn hãy review:
1. Domain model có rõ ràng không?
2. Utility types có giúp code gọn hơn không?
3. Có class nào đang nặng tay quá không?
4. Có type nào đang lặp và nên refactor không?
5. Nếu muốn scale dự án thật, model này ổn chưa?
\`\`\`

## Bài tập buổi này
- Mô hình hóa 1 domain nhỏ: user/product/order
- Dùng ít nhất 4 utility types
- Có ít nhất 1 class hoặc giải thích vì sao không cần class

## Tiêu chuẩn hoàn thành
- Dùng được utility types
- Biết class trong TS ở mức thực dụng
- Mô hình hóa domain gọn hơn và rõ hơn
      `
    },
    {
      id: 'ts-08',
      title: 'Buổi 8: Async, Promise, API typing và làm việc với dữ liệu từ bên ngoài',
      level: 'advanced',
      content: `
# Buổi 8: Async, Promise, API typing và làm việc với dữ liệu từ bên ngoài

## Mục tiêu
- Dùng được \`Promise<T>\`
- Type dữ liệu API trả về
- Hiểu rủi ro khi “tin” dữ liệu ngoài quá sớm
- Biết tổ chức type cho API response tốt hơn

## Prompt 1 - Nhờ AI dạy API typing từ bản chất
\`\`\`
Hãy dạy tôi TypeScript buổi 8 như mentor thực chiến.

Chủ đề:
- Promise<T>
- async/await
- fetch
- API response typing
- unknown từ bên ngoài
- try/catch
- safe parsing mindset ở mức cơ bản

Tôi muốn bạn dạy theo cấu trúc:
1. Promise<T> nghĩa là gì?
2. async/await phối hợp với TypeScript ra sao?
3. Vì sao dữ liệu từ API không nên được “tin” mù quáng?
4. Nên type response như thế nào?
5. Khi nào nên dùng unknown ở ranh giới dữ liệu ngoài?
6. Cho ví dụ thực tế:
   - fetch user list
   - fetch product detail
   - API error shape
   - paginated response
7. Chỉ ra lỗi phổ biến:
   - coi response.json() là dữ liệu đúng tuyệt đối
   - không type API response
   - dùng any cho dữ liệu mạng
8. Tạo checklist API typing an toàn

Dạy như mentor đang nối TypeScript vào thế giới dữ liệu thật.
\`\`\`

## Prompt 2 - Nhờ AI giao bài thực hành API typing
\`\`\`
Hãy giao cho tôi bài thực hành buổi 8:
1. viết hàm async trả về danh sách user
2. tạo type cho Product và ProductResponse
3. tạo type cho paginated response generic
4. viết ví dụ try/catch với error handling cơ bản
5. tạo ví dụ một hàm nhận unknown và cần kiểm tra trước khi dùng

Tôi muốn bạn:
- không cho đáp án ngay
- để tôi tự làm
- sau khi tôi gửi code, review:
  - Promise typing đã đúng chưa
  - API response modeling có ổn không
  - chỗ nào đáng ra nên unknown thay vì any
  - error flow có đủ rõ không
\`\`\`

## Prompt 3 - Nhờ AI review API types của tôi
\`\`\`
Tôi sẽ gửi cho bạn các type và hàm fetch của tôi.
Bạn hãy review:
1. Response typing có rõ ràng không?
2. Có đang tin dữ liệu bên ngoài quá sớm không?
3. Promise<T> dùng đúng chưa?
4. Có chỗ nào nên generic hơn không?
5. Có cách nào an toàn và sạch hơn không?
\`\`\`

## Bài tập buổi này
- Tạo ít nhất 3 kiểu response API
- Viết ít nhất 3 hàm async typed rõ ràng
- Tự giải thích boundary giữa dữ liệu ngoài và code bên trong

## Tiêu chuẩn hoàn thành
- Dùng được Promise<T>
- Type được API response
- Cẩn thận hơn với dữ liệu từ bên ngoài
      `
    },
    {
      id: 'ts-09',
      title: 'Buổi 9: TypeScript với DOM và React - props, state, event, component patterns',
      level: 'advanced',
      content: `
# Buổi 9: TypeScript với DOM và React - props, state, event, component patterns

## Mục tiêu
- Biết dùng TypeScript với DOM cơ bản
- Biết type props, state, event trong React
- Biết generic component ở mức cơ bản
- Biết tổ chức type trong app React tốt hơn

## Prompt 1 - Nhờ AI dạy TypeScript trong UI code
\`\`\`
Hãy dạy tôi TypeScript buổi 9 như mentor Front-end/React.

Chủ đề:
- DOM typing
- querySelector và null check
- props typing
- useState typing
- event typing
- generic component cơ bản
- tách file types

Tôi muốn bạn dạy theo cấu trúc:
1. Vì sao DOM thao tác bằng TS cần null check?
2. TypeScript giúp React props an toàn hơn ra sao?
3. useState nên type thế nào?
4. Event trong React nên type ra sao ở mức cơ bản?
5. Generic component có ích ở đâu?
6. Khi nào nên tách type ra file riêng?
7. Cho ví dụ thực tế:
   - button props
   - input onChange
   - product card
   - generic list component
8. Chỉ ra lỗi phổ biến:
   - ép kiểu DOM bừa bãi
   - props type mơ hồ
   - state union/null không được xử lý rõ
9. Tạo checklist TS trong UI code

Dạy như mentor đang giúp junior viết React + TS chắc tay hơn.
\`\`\`

## Prompt 2 - Nhờ AI giao bài thực hành React + TS
\`\`\`
Hãy giao cho tôi bài thực hành buổi 9:
1. tạo Button component có props typed rõ ràng
2. tạo Card component có title/description/image props
3. tạo form input có event typed
4. tạo useState cho dữ liệu có thể null
5. tạo generic List component đơn giản
6. tách type ra file riêng nếu hợp lý

Tôi muốn bạn:
- không cho đáp án ngay
- để tôi tự làm
- sau khi tôi gửi code, review:
  - props typing có tốt không
  - state typing có rõ không
  - event typing đã chuẩn chưa
  - generic component có đáng giá không
\`\`\`

## Prompt 3 - Nhờ AI review TypeScript quality trong React của tôi
\`\`\`
Tôi sẽ gửi cho bạn component React + TypeScript của tôi.
Bạn hãy review:
1. Props và state đã typed tốt chưa?
2. Có chỗ nào đang ép kiểu nguy hiểm không?
3. Event typing có đúng không?
4. Generic component có rõ và thực dụng không?
5. Nếu muốn maintain app lâu dài, type organization này ổn chưa?
\`\`\`

## Bài tập buổi này
- Tạo ít nhất 4 component React typed rõ ràng
- Có ít nhất 1 form event typed
- Có ít nhất 1 generic component hoặc reusable typed pattern

## Tiêu chuẩn hoàn thành
- Dùng được TS với React
- Props/state/event rõ ràng hơn
- Bắt đầu tổ chức type trong app UI
      `
    },
    {
      id: 'ts-10',
      title: 'Buổi 10: Project cuối khóa - xây một app TypeScript thực chiến và tự audit type safety',
      level: 'advanced',
      content: `
# Buổi 10: Project cuối khóa - xây một app TypeScript thực chiến và tự audit type safety

## Mục tiêu
- Tổng hợp toàn bộ kiến thức TypeScript đã học
- Hoàn thiện một project nhỏ có type system rõ ràng
- Tự review mức độ an toàn kiểu của code
- Tự đánh giá mức độ sẵn sàng dùng TypeScript trong dự án thật

## Prompt 1 - Nhờ AI dẫn tôi làm project từ đầu
\`\`\`
Hãy đóng vai mentor TypeScript và dẫn tôi làm project cuối khóa.

Cho tôi chọn 1 trong các project:
1. Quản lý danh sách công việc
2. Quản lý sản phẩm
3. Form đăng ký người dùng
4. Ứng dụng ghi chú
5. Dashboard nhỏ với React + TypeScript

Sau khi tôi chọn, hãy dẫn tôi theo lộ trình:
1. phân tích dữ liệu chính
2. xác định type/interface nào cần có
3. xác định function signature nào quan trọng
4. xác định chỗ nên dùng generic hoặc utility type
5. xác định chỗ có dữ liệu ngoài/API nếu có
6. xác định chỗ cần React typing nếu là UI app
7. để tôi tự build từng phần
8. sau mỗi phần, review rất kỹ như mentor
9. cuối cùng, giúp tôi audit toàn bộ type safety của project

Mục tiêu là để tôi thật sự biết dùng TypeScript như công cụ thiết kế code an toàn hơn.
\`\`\`

## Prompt 2 - Nhờ AI audit project cuối khóa
\`\`\`
Tôi sẽ gửi cho bạn project TypeScript cuối khóa của tôi.
Bạn hãy audit như mentor TypeScript kỹ tính.

Đánh giá theo 8 nhóm tiêu chí:
1. Mô hình hóa dữ liệu
2. Chất lượng type/interface
3. Function typing
4. Union/intersection/narrowing
5. Generic và utility types
6. API typing hoặc data boundary
7. React typing nếu có
8. Mức độ an toàn và dễ maintain tổng thể

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
Hãy đóng vai reviewer cuối khóa TypeScript.

Tôi sẽ gửi code project của tôi.
Bạn phải review như thật, không nể nang.

Cách review mong muốn:
- đánh giá tư duy type-safe
- đánh giá mô hình hóa dữ liệu
- đánh giá function signatures
- đánh giá cách dùng generic/utility types
- đánh giá boundary với dữ liệu ngoài
- đánh giá độ sạch và khả năng mở rộng của type system
- chỉ rõ điểm nào chứng tỏ tôi đã hiểu TypeScript
- chỉ rõ điểm nào cho thấy tôi vẫn đang thêm type theo kiểu đối phó

Cuối cùng, hãy nói thật:
- tôi đã đủ nền tảng để dùng TypeScript nghiêm túc trong dự án thật chưa?
- nếu chưa, tôi cần luyện thêm phần nào?
\`\`\`

## Gợi ý project
Chọn 1 trong các project:
1. Quản lý danh sách công việc
2. Quản lý sản phẩm
3. Form đăng ký người dùng
4. Ứng dụng ghi chú
5. Dashboard nhỏ với React + TypeScript

## Yêu cầu bắt buộc
- Có type hoặc interface rõ ràng
- Có function signature đầy đủ cho các hàm chính
- Có dùng generic hoặc utility type ít nhất một lần
- Có xử lý dữ liệu array/object thực tế
- Có boundary rõ với dữ liệu ngoài nếu có API
- Không lạm dụng \`any\`

## Checklist tự đánh giá
- Có dùng \`any\` quá nhiều không?
- Tên type/interface có rõ nghĩa không?
- Hàm có type đầy đủ không?
- Có chỗ nào union cần narrowing mà tôi bỏ qua không?
- Có dữ liệu ngoài nào đang bị “tin mù quáng” không?
- Code có dễ đọc và dễ mở rộng không?
- Tôi có thể giải thích vì sao từng type chính tồn tại không?

## Bài tập cuối khóa
- Hoàn thành project
- Tự audit bằng AI theo các prompt trên
- Refactor lại những chỗ type còn mơ hồ hoặc lạm dụng any
- Hoàn thiện phiên bản final đến khi đủ chắc
      `
    }
  ]
};