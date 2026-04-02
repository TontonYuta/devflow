import { Lesson } from '../../types';

export const jsLesson: Lesson = {
  id: 'js-mastery',
  icon: 'cpu',
  title: 'JavaScript',
  description:
    'Lộ trình JavaScript theo phong cách tự học cùng AI mentor. Mỗi buổi học đi kèm prompt cực chi tiết để học viên chỉ cần copy vào AI là có thể học từ bản chất, luyện tư duy lập trình, làm bài, được chữa lỗi và được nâng cấp như học cùng mentor 1-1.',
  points: [
    'Mỗi buổi có prompt cực chi tiết để copy vào AI và học ngay',
    'AI đóng vai mentor JavaScript, dạy từ bản chất chứ không chỉ giải thích cú pháp',
    'Có prompt học lý thuyết, prompt làm bài, prompt chữa bài và prompt phản biện',
    'Tập trung vào năng lực thật: tư duy lập trình, xử lý dữ liệu, DOM, event, async',
    'Có project xuyên suốt để ghép các buổi thành sản phẩm hoàn chỉnh',
    'Học xong có thể tự viết JavaScript cho giao diện web có tương tác thật'
  ],
  chapters: [
    {
      id: 'js-01',
      title: 'Buổi 1: JavaScript là gì và cách chạy JavaScript đầu tiên',
      level: 'beginner',
      content: `
# Buổi 1: JavaScript là gì và cách chạy JavaScript đầu tiên

## Mục tiêu
- Hiểu JavaScript là gì
- Phân biệt JavaScript với HTML và CSS
- Biết 2 cách thêm JavaScript vào HTML
- Biết dùng \`console.log()\` và mở DevTools để xem kết quả

## Cách học buổi này
Bạn sẽ copy từng prompt bên dưới vào AI theo đúng thứ tự.
Không học lướt. Sau mỗi prompt phải tự gõ lại code bằng tay.

## Prompt 1 - Nhờ AI dạy lý thuyết từ gốc
\`\`\`
Bạn hãy đóng vai một mentor Front-end cực giỏi, chuyên dạy JavaScript cho người mới từ con số 0.

Hôm nay hãy dạy tôi buổi đầu tiên về JavaScript theo phong cách:
- cực dễ hiểu nhưng không hời hợt
- giải thích từ bản chất
- luôn nói vì sao phải học phần này
- gắn với ví dụ thực tế trong website
- không dùng thuật ngữ khó nếu chưa giải thích

Chủ đề hôm nay:
- JavaScript là gì?
- JavaScript dùng để làm gì trên web?
- JavaScript khác HTML và CSS ở đâu?
- Vì sao website hiện đại gần như luôn cần JavaScript?
- Cách thêm JavaScript vào HTML
- Cách mở console để xem kết quả

Tôi muốn bạn dạy theo format:
1. JavaScript là gì?
2. Vai trò của HTML, CSS, JavaScript trong một trang web
3. JavaScript giúp website tương tác như thế nào?
4. Giải thích 2 cách thêm JavaScript vào HTML:
   - viết trực tiếp trong thẻ script
   - nối file script.js bên ngoài
5. Vì sao cách dùng file JS riêng thường tốt hơn
6. Giải thích console là gì và dùng để làm gì
7. Chỉ ra 8 lỗi sai phổ biến của người mới
8. Đặt cho tôi 5 câu hỏi kiểm tra hiểu bài
9. Sau khi tôi trả lời, bạn phải chấm và sửa thật kỹ

Dùng tiếng Việt và dạy như mentor thật sự.
\`\`\`

## Prompt 2 - Nhờ AI hướng dẫn thực hành
\`\`\`
Tôi đang học JavaScript buổi 1. Hãy đóng vai mentor thực hành và hướng dẫn tôi chạy JavaScript đầu tiên.

Tôi muốn bạn hướng dẫn theo cách sau:
1. nói rõ tôi cần tạo những file gì
2. viết cho tôi ví dụ HTML và script.js cơ bản
3. giải thích từng dòng code
4. hướng dẫn tôi mở console trong trình duyệt
5. giao cho tôi một nhiệm vụ nhỏ:
   - in ra 3 dòng khác nhau bằng console.log()
   - thay đổi nội dung các dòng để tự kiểm tra file JS đã chạy
6. sau đó yêu cầu tôi gửi code lên để bạn review
7. khi review, bạn phải chỉ ra:
   - file JS đã nối đúng chưa
   - lỗi cú pháp nếu có
   - phần nào đúng
   - phần nào có thể viết gọn hơn

Hãy bắt đầu như một mentor đang ngồi cạnh tôi.
\`\`\`

## Prompt 3 - Nhờ AI kiểm tra hiểu bài
\`\`\`
Hãy kiểm tra xem tôi đã thật sự hiểu JavaScript buổi 1 chưa.

Tôi muốn có:
- 3 câu hỏi trắc nghiệm có giải thích đáp án
- 3 câu hỏi tự luận ngắn
- 2 bài tập code nhỏ
- 1 câu hỏi tư duy: vì sao chỉ có HTML và CSS thì trang web vẫn còn “tĩnh”?

Sau khi tôi trả lời, bạn hãy:
- chấm điểm từng câu
- giải thích chỗ sai
- nói tôi đang ở mức nào: chưa hiểu / hiểu cơ bản / hiểu chắc
\`\`\`

## Bài tập buổi này
1. Tạo file \`index.html\`
2. Tạo file \`script.js\`
3. Kết nối JavaScript với HTML
4. In ra 3 dòng khác nhau bằng \`console.log()\`

## Tiêu chuẩn hoàn thành
- JS chạy được trên trình duyệt
- Biết mở console
- Hiểu vai trò cơ bản của JavaScript
      `
    },
    {
      id: 'js-02',
      title: 'Buổi 2: Biến, kiểu dữ liệu và cách lưu thông tin trong chương trình',
      level: 'beginner',
      content: `
# Buổi 2: Biến, kiểu dữ liệu và cách lưu thông tin trong chương trình

## Mục tiêu
- Hiểu biến là gì
- Dùng được \`let\` và \`const\`
- Hiểu các kiểu dữ liệu cơ bản
- Biết dùng \`typeof\`
- Bắt đầu tư duy “lưu dữ liệu để chương trình xử lý”

## Prompt 1 - Nhờ AI dạy từ gốc
\`\`\`
Hãy dạy tôi JavaScript buổi 2 như một mentor lập trình giỏi dạy người mới.

Chủ đề:
- biến là gì
- let
- const
- number
- string
- boolean
- null
- undefined
- typeof

Tôi muốn bạn dạy theo cấu trúc:
1. Biến là gì? Hãy giải thích bằng ví dụ đời thường
2. Vì sao lập trình cần biến?
3. let và const khác nhau thế nào?
4. Khi nào nên dùng let, khi nào nên dùng const?
5. Giải thích từng kiểu dữ liệu cơ bản bằng ví dụ thật rõ
6. Phân biệt null và undefined thật dễ hiểu
7. typeof dùng để làm gì?
8. Chỉ ra lỗi sai phổ biến:
   - đặt tên biến mơ hồ
   - dùng let/const lẫn lộn
   - không phân biệt string và number
9. Cho tôi 8 bài tập nhỏ tăng dần độ khó
10. Sau đó chấm câu trả lời của tôi

Dạy sâu nhưng dễ hiểu, như mentor thật sự.
\`\`\`

## Prompt 2 - Nhờ AI ra bài tập thực hành
\`\`\`
Hãy giao cho tôi bài tập JavaScript buổi 2 theo kiểu thực hành.

Yêu cầu:
1. Tạo biến lưu tên, tuổi, nghề nghiệp, trạng thái học tập
2. Dùng cả let và const
3. Kiểm tra kiểu dữ liệu của từng biến bằng typeof
4. Tạo thêm ví dụ cho null và undefined
5. Sau khi tôi làm xong, bạn review cực kỹ:
   - tên biến có rõ không
   - dùng let/const đã đúng chưa
   - kiểu dữ liệu có đúng như tôi nghĩ không
   - chỗ nào có thể viết tốt hơn

Hãy review như mentor code thật sự.
\`\`\`

## Prompt 3 - Nhờ AI phản biện tư duy của tôi
\`\`\`
Tôi sẽ gửi cho bạn một đoạn code JavaScript có nhiều biến.
Bạn hãy review theo 5 tiêu chí:
1. Tên biến
2. Cách chọn let/const
3. Kiểu dữ liệu
4. Tính rõ ràng
5. Dấu hiệu code non tay

Không được review chung chung.
Phải chỉ ra cụ thể từng chỗ và cách sửa.
\`\`\`

## Bài tập buổi này
- Tạo ít nhất 10 biến mô tả một người dùng hoặc một sản phẩm
- Kiểm tra kiểu dữ liệu của từng biến
- Tự giải thích vì sao bạn chọn let hoặc const

## Tiêu chuẩn hoàn thành
- Hiểu biến là nơi lưu dữ liệu
- Phân biệt được let và const
- Nhận diện được kiểu dữ liệu cơ bản
      `
    },
    {
      id: 'js-03',
      title: 'Buổi 3: Toán tử, so sánh, điều kiện và tư duy ra quyết định',
      level: 'beginner',
      content: `
# Buổi 3: Toán tử, so sánh, điều kiện và tư duy ra quyết định

## Mục tiêu
- Dùng được toán tử số học và so sánh
- Hiểu kết quả boolean là gì
- Dùng được \`if\`, \`else\`, \`else if\`
- Bắt đầu hiểu chương trình “ra quyết định” thế nào

## Prompt 1 - Nhờ AI dạy bản chất logic
\`\`\`
Hãy dạy tôi JavaScript buổi 3 như mentor dạy tư duy lập trình.

Chủ đề:
- toán tử số học
- toán tử gán
- toán tử so sánh
- true và false
- if
- else
- else if

Tôi muốn học theo cấu trúc:
1. Toán tử giúp chương trình làm gì?
2. So sánh là gì trong lập trình?
3. Vì sao boolean cực kỳ quan trọng?
4. Điều kiện if/else giúp chương trình ra quyết định thế nào?
5. Cho ví dụ thực tế:
   - kiểm tra đủ tuổi
   - tính điểm đậu/rớt
   - phân loại học lực
   - kiểm tra sản phẩm còn hàng
6. Giải thích thật rõ:
   - >, <, >=, <=, ===, !==
7. Chỉ ra lỗi phổ biến:
   - nhầm = và ===
   - viết điều kiện rối
   - không hiểu nhánh nào sẽ chạy
8. Cho tôi 10 bài tập ngắn tăng dần độ khó
9. Sau đó chữa thật kỹ

Dạy như mentor đang xây nền logic cho người mới.
\`\`\`

## Prompt 2 - Nhờ AI ra bài thực hành logic
\`\`\`
Hãy giao cho tôi các bài tập JavaScript buổi 3:
1. kiểm tra đủ 18 tuổi
2. kiểm tra số dương/âm/0
3. phân loại điểm giỏi/khá/trung bình/yếu
4. kiểm tra có được giảm giá hay không

Yêu cầu:
- không đưa đáp án ngay
- để tôi tự code
- sau khi tôi gửi code, review theo:
  - logic có đúng không
  - điều kiện có gọn không
  - có nhánh nào bị thiếu không
  - có cách viết nào dễ đọc hơn không
\`\`\`

## Prompt 3 - Nhờ AI phản biện logic của tôi
\`\`\`
Tôi sẽ gửi cho bạn code điều kiện if/else của tôi.
Bạn hãy review như mentor khó tính:
1. Logic có đúng không?
2. Điều kiện có bị thừa hoặc thiếu không?
3. Có trường hợp nào tôi chưa xử lý không?
4. Code có dễ đọc không?
5. Tôi đang hiểu sai tư duy nào?

Hãy chỉ ra thật cụ thể và bắt tôi sửa lại bản tốt hơn.
\`\`\`

## Bài tập buổi này
- Viết ít nhất 6 bài toán điều kiện
- Mỗi bài phải tự giải thích bằng lời chương trình đang quyết định điều gì

## Tiêu chuẩn hoàn thành
- Hiểu boolean
- Viết được điều kiện đúng
- Không còn sợ if/else
      `
    },
    {
      id: 'js-04',
      title: 'Buổi 4: Vòng lặp, hàm và tư duy chia nhỏ bài toán',
      level: 'beginner',
      content: `
# Buổi 4: Vòng lặp, hàm và tư duy chia nhỏ bài toán

## Mục tiêu
- Dùng được \`for\` và \`while\`
- Hiểu vì sao cần hàm
- Biết truyền tham số và dùng \`return\`
- Bắt đầu tư duy chia nhỏ công việc bằng function

## Prompt 1 - Nhờ AI dạy bản chất vòng lặp và hàm
\`\`\`
Hãy dạy tôi JavaScript buổi 4 như mentor dạy tư duy lập trình.

Chủ đề:
- for
- while
- break
- continue
- function
- parameter
- return

Tôi muốn bạn dạy theo cấu trúc:
1. Vì sao lập trình cần vòng lặp?
2. Khi nào dùng for, khi nào dùng while?
3. break và continue dùng để làm gì?
4. Hàm là gì?
5. Vì sao hàm giúp code đỡ lặp và dễ hiểu hơn?
6. Tham số là gì? return là gì?
7. Cho ví dụ thực tế:
   - in danh sách số
   - tính tổng
   - kiểm tra số chẵn
   - tạo hàm chào người dùng
8. Chỉ ra lỗi phổ biến:
   - vòng lặp vô hạn
   - viết hàm nhưng không return
   - viết 1 đoạn code dài mà không chia hàm
9. Cho tôi 8 bài tập tăng dần độ khó
10. Sau đó chữa kỹ từng bài

Dạy như mentor đang sửa tư duy chia bài toán cho junior.
\`\`\`

## Prompt 2 - Nhờ AI giao bài thực hành
\`\`\`
Hãy giao cho tôi các bài tập JavaScript buổi 4:
1. in số từ 1 đến 10
2. in số chẵn từ 1 đến 20
3. tính tổng từ 1 đến 100
4. viết hàm tính tổng 2 số
5. viết hàm kiểm tra số chẵn
6. viết hàm tính tiền sau giảm giá

Yêu cầu:
- không cho đáp án ngay
- để tôi tự làm
- sau khi tôi gửi code, review:
  - vòng lặp có đúng không
  - có bug logic không
  - hàm có nên return không
  - tên hàm có rõ nghĩa không
  - có cách nào chia nhỏ tốt hơn không
\`\`\`

## Prompt 3 - Nhờ AI huấn luyện tư duy chia nhỏ
\`\`\`
Tôi sẽ gửi cho bạn một bài toán JavaScript.
Bạn đừng giải ngay.

Hãy giúp tôi:
1. phân tích đề
2. chia bài toán thành từng bước nhỏ
3. nói bước nào nên dùng vòng lặp, bước nào nên dùng hàm
4. để tôi tự code trước
5. sau đó review cách tôi chia bài toán

Mục tiêu là để tôi học tư duy, không chỉ học đáp án.
\`\`\`

## Bài tập buổi này
- Làm ít nhất 6 bài về loop và function
- Với mỗi bài, viết thêm 1 câu giải thích vì sao bạn dùng loop/hàm như vậy

## Tiêu chuẩn hoàn thành
- Không còn sợ vòng lặp
- Hiểu lợi ích của function
- Bắt đầu chia bài toán thành bước nhỏ
      `
    },
    {
      id: 'js-05',
      title: 'Buổi 5: String, array, object và cách tổ chức dữ liệu',
      level: 'intermediate',
      content: `
# Buổi 5: String, array, object và cách tổ chức dữ liệu

## Mục tiêu
- Xử lý được chuỗi cơ bản
- Hiểu array dùng khi nào
- Hiểu object dùng khi nào
- Biết kết hợp array và object để mô tả dữ liệu thật

## Prompt 1 - Nhờ AI dạy tư duy dữ liệu
\`\`\`
Hãy dạy tôi JavaScript buổi 5 theo tư duy tổ chức dữ liệu.

Chủ đề:
- string
- template string
- length
- trim
- toUpperCase
- toLowerCase
- array
- push
- pop
- object
- key-value

Tôi không muốn học kiểu thuộc hàm.
Tôi muốn hiểu khi nào nên dùng loại dữ liệu nào.

Hãy dạy theo cấu trúc:
1. Chuỗi dùng để làm gì?
2. Khi nào cần array?
3. Khi nào cần object?
4. Array và object khác nhau ở bản chất gì?
5. Cho ví dụ dữ liệu thật:
   - người dùng
   - sản phẩm
   - danh sách việc cần làm
   - danh sách học sinh
6. Giải thích các thao tác string và array cơ bản bằng ví dụ
7. Chỉ ra lỗi phổ biến:
   - dùng array khi cần object
   - dùng object khi dữ liệu là danh sách
   - không hiểu key-value
8. Tạo checklist chọn kiểu dữ liệu phù hợp

Dạy như mentor đang rèn tư duy dữ liệu cho người mới.
\`\`\`

## Prompt 2 - Nhờ AI giao bài thực hành dữ liệu
\`\`\`
Hãy giao cho tôi bài tập JavaScript buổi 5:
1. xử lý một chuỗi tên người dùng
2. tạo mảng món ăn yêu thích
3. tạo object mô tả bản thân
4. tạo mảng object chứa danh sách sản phẩm hoặc học sinh

Tôi muốn bạn:
- không cho đáp án ngay
- để tôi tự làm
- sau khi tôi gửi code, review:
  - tôi đã chọn kiểu dữ liệu đúng chưa
  - tên key có rõ không
  - thao tác với string/array có đúng không
  - cấu trúc dữ liệu có hợp lý không
\`\`\`

## Prompt 3 - Nhờ AI phản biện cấu trúc dữ liệu của tôi
\`\`\`
Tôi sẽ gửi cho bạn một số biến, array và object tôi tạo.
Bạn hãy review theo 5 tiêu chí:
1. Chọn đúng kiểu dữ liệu chưa?
2. Cấu trúc dữ liệu có logic không?
3. Tên biến và key có rõ không?
4. Có chỗ nào đang mô hình hóa dữ liệu non tay không?
5. Có cách nào tổ chức dữ liệu tốt hơn không?

Hãy review cụ thể và bắt tôi sửa lại bản tốt hơn.
\`\`\`

## Bài tập buổi này
- Tạo ít nhất 1 object, 2 array, 1 mảng object
- Tự giải thích vì sao dữ liệu đó nên lưu theo cấu trúc đó

## Tiêu chuẩn hoàn thành
- Biết dùng string/array/object đúng chỗ
- Bắt đầu mô tả được dữ liệu thật bằng JS
      `
    },
    {
      id: 'js-06',
      title: 'Buổi 6: Array methods, xử lý danh sách và tư duy dữ liệu hiện đại',
      level: 'intermediate',
      content: `
# Buổi 6: Array methods, xử lý danh sách và tư duy dữ liệu hiện đại

## Mục tiêu
- Dùng được \`forEach()\`, \`map()\`, \`filter()\`, \`find()\`, \`some()\`
- Xử lý mảng dữ liệu hiện đại hơn
- Biết chọn method phù hợp
- Hiểu đây là công cụ cực hay dùng trong dự án thật

## Prompt 1 - Nhờ AI dạy từ bản chất
\`\`\`
Hãy dạy tôi JavaScript buổi 6 về array methods như mentor dạy người mới.

Chủ đề:
- forEach
- map
- filter
- find
- some

Tôi muốn bạn dạy theo cấu trúc:
1. Vì sao array methods quan trọng hơn việc chỉ dùng for?
2. forEach dùng khi nào?
3. map dùng khi nào?
4. filter dùng khi nào?
5. find dùng khi nào?
6. some dùng khi nào?
7. So sánh thật rõ các method này
8. Cho ví dụ dữ liệu thật:
   - danh sách sản phẩm
   - danh sách học sinh
   - danh sách công việc
9. Chỉ ra lỗi phổ biến:
   - dùng map khi không cần tạo mảng mới
   - dùng filter khi chỉ cần 1 phần tử
   - không hiểu giá trị trả về
10. Tạo checklist chọn method đúng

Dạy thực chiến như mentor Front-end/JavaScript.
\`\`\`

## Prompt 2 - Nhờ AI giao bài tập array methods
\`\`\`
Hãy giao cho tôi các bài tập JavaScript buổi 6:
1. dùng map để nhân đôi danh sách số
2. dùng filter để lọc sản phẩm còn hàng
3. dùng find để tìm user theo id
4. dùng some để kiểm tra có sản phẩm nào hết hàng không
5. dùng forEach để in danh sách ra console

Yêu cầu:
- không cho đáp án ngay
- để tôi tự làm
- sau khi tôi gửi code, review:
  - method tôi chọn đã đúng chưa
  - callback có rõ nghĩa không
  - kết quả trả về có đúng không
  - có cách nào dễ đọc hơn không
\`\`\`

## Prompt 3 - Nhờ AI dạy tư duy chọn công cụ
\`\`\`
Tôi sẽ gửi cho bạn một bài toán xử lý mảng.
Đừng giải ngay.

Hãy hỏi tôi:
1. bài toán này cần biến đổi dữ liệu, lọc dữ liệu hay tìm 1 phần tử?
2. nên dùng method nào?
3. vì sao không dùng method khác?

Sau đó, review quyết định của tôi thật kỹ.
Mục tiêu là để tôi biết chọn công cụ đúng chứ không chỉ code chạy được.
\`\`\`

## Bài tập buổi này
- Làm ít nhất 10 bài tập dùng array methods
- Tự giải thích vì sao bạn chọn method đó

## Tiêu chuẩn hoàn thành
- Không còn chọn method theo cảm tính
- Hiểu giá trị trả về của từng method
- Bắt đầu xử lý danh sách như người học JS nghiêm túc
      `
    },
    {
      id: 'js-07',
      title: 'Buổi 7: DOM, querySelector và thay đổi nội dung trên trang',
      level: 'intermediate',
      content: `
# Buổi 7: DOM, querySelector và thay đổi nội dung trên trang

## Mục tiêu
- Hiểu DOM là gì
- Biết chọn phần tử HTML bằng JavaScript
- Biết đổi text, HTML và class
- Thấy được JavaScript bắt đầu “chạm” vào giao diện thật

## Prompt 1 - Nhờ AI dạy DOM từ bản chất
\`\`\`
Hãy dạy tôi JavaScript buổi 7 về DOM như một mentor Front-end.

Chủ đề:
- DOM là gì
- document
- querySelector
- querySelectorAll
- textContent
- innerHTML
- classList

Tôi muốn bạn dạy theo cấu trúc:
1. DOM là gì?
2. Vì sao JavaScript có thể “nhìn thấy” HTML?
3. querySelector hoạt động ra sao?
4. querySelectorAll khác gì?
5. textContent và innerHTML khác nhau thế nào?
6. classList dùng để làm gì?
7. Cho ví dụ thực tế:
   - đổi tiêu đề
   - thêm nội dung vào card
   - thêm/xóa class
8. Chỉ ra lỗi phổ biến:
   - query sai selector
   - cố thao tác khi phần tử chưa tồn tại
   - lạm dụng innerHTML
9. Tạo checklist thao tác DOM cơ bản

Dạy như mentor đang dẫn tôi bước từ JS thuần sang UI thật.
\`\`\`

## Prompt 2 - Nhờ AI dẫn tôi làm mini practice
\`\`\`
Hãy dẫn tôi thực hành JavaScript buổi 7.

Bài toán:
- chọn một thẻ h1 và đổi nội dung
- chọn một đoạn văn và đổi class
- chọn một khối và thêm nội dung mới
- tạo nút để khi bấm sẽ đổi text của tiêu đề

Hướng dẫn theo cách:
1. nói rõ HTML cần có
2. nói rõ JS cần viết
3. để tôi tự code từng phần
4. sau mỗi phần, review:
   - selector đúng chưa
   - thao tác DOM đúng chưa
   - có cách nào sạch hơn không
\`\`\`

## Prompt 3 - Nhờ AI review thao tác DOM của tôi
\`\`\`
Tôi sẽ gửi cho bạn HTML + JavaScript của phần DOM tôi làm.
Bạn hãy review theo các tiêu chí:
1. Chọn phần tử đã đúng chưa?
2. Tác động lên DOM có an toàn không?
3. Có lạm dụng innerHTML không?
4. Code có dễ đọc không?
5. Có dấu hiệu code non tay không?

Review cụ thể theo từng đoạn.
\`\`\`

## Bài tập buổi này
- Tạo một mini section có tiêu đề, đoạn văn, nút
- Dùng JavaScript để thay đổi nội dung và class

## Tiêu chuẩn hoàn thành
- Hiểu DOM là cầu nối giữa JS và HTML
- Dùng được querySelector
- Biết thay đổi nội dung giao diện
      `
    },
    {
      id: 'js-08',
      title: 'Buổi 8: Event, form, validation và tương tác người dùng',
      level: 'advanced',
      content: `
# Buổi 8: Event, form, validation và tương tác người dùng

## Mục tiêu
- Hiểu event là gì
- Dùng được click, input, submit
- Lấy dữ liệu từ form
- Kiểm tra dữ liệu đầu vào cơ bản
- Biết hiển thị lỗi thân thiện

## Prompt 1 - Nhờ AI dạy tư duy tương tác
\`\`\`
Hãy dạy tôi JavaScript buổi 8 về event và form như mentor Front-end thực chiến.

Chủ đề:
- addEventListener
- click
- input
- submit
- value
- preventDefault
- validation cơ bản

Tôi muốn bạn dạy theo cấu trúc:
1. Event là gì?
2. Vì sao website tương tác được là nhờ event?
3. click, input, submit khác nhau thế nào?
4. Lấy giá trị input bằng value ra sao?
5. preventDefault dùng để làm gì?
6. Validation cơ bản nên nghĩ như thế nào?
7. Cho ví dụ thực tế:
   - nút bấm
   - ô nhập liệu live preview
   - form đăng ký
8. Chỉ ra lỗi phổ biến:
   - quên preventDefault
   - validate quá sơ sài
   - hiển thị lỗi khó hiểu
9. Tạo checklist form JS cơ bản

Dạy như mentor đang dạy làm UI có tương tác thật.
\`\`\`

## Prompt 2 - Nhờ AI giao bài thực chiến form
\`\`\`
Hãy giao cho tôi bài thực hành JavaScript buổi 8:
Tạo form đăng ký đơn giản gồm:
- họ tên
- email
- mật khẩu
- nút submit

Yêu cầu:
1. lấy được dữ liệu từ input
2. kiểm tra họ tên không rỗng
3. kiểm tra email có chứa @
4. kiểm tra mật khẩu tối thiểu 6 ký tự
5. hiển thị lỗi phù hợp
6. chặn submit mặc định nếu dữ liệu sai

Tôi muốn bạn:
- không cho đáp án ngay
- để tôi tự làm
- sau khi tôi gửi code, review:
  - event dùng đúng chưa
  - validation có đủ chưa
  - lỗi hiển thị có thân thiện không
  - code có bị rối không
\`\`\`

## Prompt 3 - Nhờ AI đóng vai người dùng khó tính
\`\`\`
Tôi sẽ gửi cho bạn code form của tôi.
Bạn hãy đóng vai người dùng khó tính rồi phản biện:
1. Form có dễ hiểu không?
2. Thông báo lỗi có rõ không?
3. Có field nào gây khó chịu không?
4. Validation có hợp lý không?
5. Từ góc nhìn kỹ thuật, code JS của tôi cần sửa gì?

Hãy phản biện như mentor UX + JS cùng lúc.
\`\`\`

## Bài tập buổi này
- Tạo form đăng ký có validation cơ bản
- Hiển thị lỗi theo từng field

## Tiêu chuẩn hoàn thành
- Lấy được dữ liệu từ form
- Biết kiểm tra dữ liệu cơ bản
- Giao diện có phản hồi khi người dùng submit
      `
    },
    {
      id: 'js-09',
      title: 'Buổi 9: localStorage, dữ liệu cục bộ và bất đồng bộ với fetch',
      level: 'advanced',
      content: `
# Buổi 9: localStorage, dữ liệu cục bộ và bất đồng bộ với fetch

## Mục tiêu
- Hiểu localStorage là gì
- Biết lưu/đọc/xóa dữ liệu cục bộ
- Hiểu JSON.stringify và JSON.parse
- Hiểu async/await, fetch ở mức cơ bản
- Bắt đầu thấy JS kết nối với dữ liệu ngoài

## Prompt 1 - Nhờ AI dạy dữ liệu cục bộ và async
\`\`\`
Hãy dạy tôi JavaScript buổi 9 như mentor thực chiến.

Chủ đề:
- localStorage
- setItem
- getItem
- removeItem
- JSON.stringify
- JSON.parse
- async
- await
- try...catch
- fetch

Tôi muốn bạn dạy theo cấu trúc:
1. localStorage là gì?
2. Khi nào localStorage hữu ích?
3. Vì sao object phải stringify trước khi lưu?
4. parse để làm gì?
5. Bất đồng bộ là gì theo cách dễ hiểu?
6. async/await giúp code dễ đọc hơn thế nào?
7. fetch dùng để làm gì?
8. try...catch nên dùng khi nào?
9. Cho ví dụ thực tế:
   - lưu tên user
   - lưu todo list nhỏ
   - gọi API lấy users
10. Chỉ ra lỗi phổ biến:
   - quên parse/stringify
   - không xử lý lỗi fetch
   - không hiểu async là gì
11. Tạo checklist dùng localStorage và fetch an toàn

Dạy như mentor đang mở rộng thế giới JS cho người mới.
\`\`\`

## Prompt 2 - Nhờ AI giao bài thực hành localStorage + fetch
\`\`\`
Hãy giao cho tôi 2 bài thực hành:
1. lưu và đọc dữ liệu user từ localStorage
2. gọi API người dùng bằng fetch rồi in ra giao diện hoặc console

Yêu cầu:
- không cho đáp án ngay
- để tôi tự làm
- sau khi tôi gửi code, review:
  - localStorage dùng đúng chưa
  - stringify/parse đúng chưa
  - async/await đúng chưa
  - có bắt lỗi bằng try...catch không
  - code có rõ ràng không
\`\`\`

## Prompt 3 - Nhờ AI phản biện code bất đồng bộ của tôi
\`\`\`
Tôi sẽ gửi cho bạn code localStorage hoặc fetch của tôi.
Bạn hãy review theo 5 tiêu chí:
1. Logic có đúng không?
2. Dữ liệu có được xử lý đúng kiểu không?
3. Async/await có đang dùng đúng không?
4. Có xử lý lỗi không?
5. Code có dễ đọc và dễ bảo trì không?

Chỉ ra thật cụ thể từng lỗi và hướng sửa.
\`\`\`

## Bài tập buổi này
- Lưu dữ liệu cục bộ bằng localStorage
- Gọi thử 1 API bằng fetch
- Hiển thị hoặc log dữ liệu nhận được

## Tiêu chuẩn hoàn thành
- Hiểu localStorage hoạt động ra sao
- Biết gọi API cơ bản
- Không còn sợ async/await ở mức cơ bản
      `
    },
    {
      id: 'js-10',
      title: 'Buổi 10: Project cuối khóa - xây một ứng dụng JavaScript hoàn chỉnh',
      level: 'advanced',
      content: `
# Buổi 10: Project cuối khóa - xây một ứng dụng JavaScript hoàn chỉnh

## Mục tiêu
- Tổng hợp toàn bộ kiến thức đã học
- Hoàn thiện một sản phẩm JS có tương tác thật
- Tự đánh giá mức độ làm chủ JavaScript
- Biết tự review code như một người học nghiêm túc

## Prompt 1 - Nhờ AI dẫn tôi làm project từ đầu
\`\`\`
Hãy đóng vai mentor JavaScript và dẫn tôi làm project cuối khóa.

Cho tôi chọn 1 trong các project:
1. To-do list
2. Ứng dụng ghi chú
3. Form đăng ký có validation
4. App tìm kiếm sản phẩm đơn giản
5. Danh sách người dùng lấy từ API

Sau khi tôi chọn, hãy dẫn tôi theo lộ trình:
1. phân tích yêu cầu
2. chia app thành các chức năng nhỏ
3. xác định dữ liệu cần dùng
4. xác định phần nào cần DOM, event, array/object, localStorage hoặc fetch
5. yêu cầu tôi tự code từng phần
6. sau mỗi phần, review rất kỹ như mentor
7. nếu code của tôi rối, hãy giúp tôi refactor
8. cuối cùng, giúp tôi tự audit project

Mục tiêu là để tôi thật sự tự xây được một app JavaScript nhỏ.
\`\`\`

## Prompt 2 - Nhờ AI audit project cuối khóa
\`\`\`
Tôi sẽ gửi cho bạn project JavaScript cuối khóa của tôi.
Bạn hãy audit như mentor Front-end kỹ tính.

Đánh giá theo 7 nhóm tiêu chí:
1. Hiểu đề bài
2. Cấu trúc dữ liệu
3. Logic JavaScript
4. Chia hàm và đặt tên
5. DOM và event
6. Validation / localStorage / fetch nếu có
7. Mức độ rõ ràng và trưởng thành của code

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
Hãy đóng vai reviewer cuối khóa JavaScript.

Tôi sẽ gửi code project của tôi.
Bạn phải review như thật, không nể nang.

Cách review mong muốn:
- đánh giá tư duy lập trình
- đánh giá cấu trúc dữ liệu
- đánh giá cách chia hàm
- đánh giá DOM/event
- đánh giá độ sạch và dễ đọc của code
- chỉ rõ điểm nào chứng tỏ tôi đã hiểu JavaScript
- chỉ rõ điểm nào cho thấy tôi vẫn đang code theo kiểu chắp vá

Cuối cùng, hãy nói thật:
- tôi đã sẵn sàng học React chưa?
- nếu chưa, tôi cần luyện thêm phần nào?
\`\`\`

## Dự án gợi ý
Chọn 1 trong các project:
1. To-do list
2. Ứng dụng ghi chú
3. Form đăng ký có validation
4. App tìm kiếm sản phẩm đơn giản
5. Danh sách người dùng lấy từ API

## Yêu cầu bắt buộc
- Có biến, điều kiện, vòng lặp, hàm
- Có xử lý array hoặc object
- Có DOM và event
- Có ít nhất một chức năng thực tế
- Nếu phù hợp, có localStorage hoặc fetch

## Checklist tự đánh giá
- Code có dễ đọc không?
- Tên biến và hàm có rõ nghĩa không?
- Có chia hàm hợp lý không?
- Có xử lý dữ liệu đầu vào không?
- Giao diện có phản hồi khi người dùng tương tác không?
- Có logic nào bị rối hoặc lặp không?

## Bài tập cuối khóa
- Hoàn thành project
- Tự audit bằng AI theo các prompt trên
- Sửa lại bản final đến khi đủ chắc
      `
    }
  ]
};