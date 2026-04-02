import { Lesson } from '../../types';

export const htmlLesson: Lesson = {
  id: 'html-mastery',
  icon: 'code',
  title: 'HTML',
  description:
    'Lộ trình HTML theo phong cách tự học cùng AI mentor. Mỗi buổi học đi kèm prompt cực chi tiết để học viên chỉ cần copy vào AI là có thể học theo từng bước, làm bài, được chữa lỗi, được phản biện và nâng cấp bài làm như học cùng mentor 1-1.',
  points: [
    'Mỗi buổi học có prompt chi tiết để copy vào AI và học ngay',
    'AI đóng vai mentor, giải thích từ gốc, không dạy qua loa',
    'Có prompt học lý thuyết, prompt làm bài, prompt chữa bài, prompt nâng cấp',
    'Tập trung vào năng lực làm được sản phẩm thật, không chỉ nhớ thẻ',
    'Học viên có thể tự học theo từng bước mà không bị mơ hồ',
    'Có project xuyên suốt để ghép các buổi học thành sản phẩm hoàn chỉnh'
  ],
  chapters: [
    {
      id: 'html-01',
      title: 'Buổi 1: Hiểu HTML từ gốc và tạo file HTML đầu tiên',
      level: 'beginner',
      content: `
# Buổi 1: Hiểu HTML từ gốc và tạo file HTML đầu tiên

## Mục tiêu
- Hiểu HTML là gì và không phải là gì
- Hiểu vai trò của HTML trong một website
- Biết cấu trúc chuẩn của một file HTML
- Tạo được file HTML đầu tiên chạy đúng trên trình duyệt

## Cách học buổi này
Bạn sẽ **copy từng prompt bên dưới vào AI** theo đúng thứ tự.
Không học lướt. Học xong mỗi prompt phải tự gõ lại code.

## Prompt 1 - Nhờ AI dạy lý thuyết từ gốc
\`\`\`
Bạn hãy đóng vai một mentor Front-end cực giỏi, chuyên dạy người mới học HTML từ con số 0.

Nhiệm vụ của bạn là dạy tôi bài đầu tiên về HTML theo phong cách:
- dễ hiểu nhưng không hời hợt
- giải thích từ bản chất
- ví dụ ngắn, rõ, thực tế
- luôn nói vì sao phải học phần này
- không dùng thuật ngữ khó nếu chưa giải thích

Chủ đề hôm nay: HTML là gì và cấu trúc chuẩn của file HTML đầu tiên.

Tôi muốn bạn dạy theo format sau:
1. HTML là gì?
2. HTML dùng để làm gì trong website?
3. Phân biệt HTML, CSS, JavaScript thật rõ cho người mới
4. Trình duyệt đọc file HTML như thế nào?
5. Giải thích từng phần trong cấu trúc chuẩn:
   - <!DOCTYPE html>
   - <html>
   - <head>
   - <body>
   - <title>
   - meta charset
   - meta viewport
6. Cho tôi 1 ví dụ file HTML hoàn chỉnh, rất cơ bản nhưng đúng chuẩn
7. Chỉ ra 7 lỗi sai phổ biến của người mới
8. Đặt cho tôi 5 câu hỏi kiểm tra hiểu bài, tăng dần độ khó
9. Sau khi tôi trả lời, bạn phải chấm và sửa thật kỹ

Lưu ý:
- Dùng tiếng Việt
- Không trả lời quá ngắn
- Luôn giải thích “tại sao”
- Đừng chỉ đưa định nghĩa, hãy giúp tôi hiểu bản chất
\`\`\`

## Prompt 2 - Nhờ AI hướng dẫn thực hành
\`\`\`
Tôi đang học HTML buổi 1. Hãy đóng vai mentor thực hành và hướng dẫn tôi tạo file index.html đầu tiên.

Tôi muốn bạn hướng dẫn theo cách sau:
1. Nói rõ tôi cần tạo file gì
2. Viết cho tôi khung HTML hoàn chỉnh
3. Giải thích từng dòng code trong khung đó
4. Giao cho tôi 1 nhiệm vụ nhỏ:
   - tạo 1 tiêu đề chính
   - tạo 1 đoạn văn giới thiệu
   - đổi title của tab trình duyệt
5. Sau đó yêu cầu tôi tự gõ lại code bằng tay
6. Tiếp theo, bạn yêu cầu tôi gửi code lên để bạn review
7. Khi review, bạn phải chỉ ra:
   - lỗi cú pháp
   - lỗi cấu trúc
   - phần nào đúng
   - phần nào có thể viết sạch hơn

Hãy bắt đầu như một mentor đang ngồi cạnh tôi.
\`\`\`

## Prompt 3 - Nhờ AI kiểm tra hiểu bài
\`\`\`
Hãy kiểm tra xem tôi đã thật sự hiểu buổi 1 HTML chưa.

Đừng hỏi kiểu lý thuyết quá dễ. Hãy tạo:
- 3 câu hỏi trắc nghiệm có giải thích đáp án
- 3 câu hỏi tự luận ngắn
- 2 bài tập code nhỏ
- 1 câu hỏi tư duy: vì sao nội dung hiển thị phải nằm trong body chứ không phải head?

Sau khi tôi trả lời, bạn hãy:
- chấm điểm từng câu
- giải thích chỗ sai
- cho tôi biết tôi đang ở mức nào: chưa hiểu / hiểu cơ bản / hiểu chắc
\`\`\`

## Bài tập buổi này
1. Tạo file \`index.html\`
2. Viết cấu trúc HTML hoàn chỉnh
3. Thêm:
   - 1 tiêu đề chính
   - 2 đoạn văn
   - title phù hợp
4. Tự gõ lại toàn bộ khung HTML từ trí nhớ

## Tiêu chuẩn hoàn thành
- Không thiếu \`<!DOCTYPE html>\`
- Có \`head\` và \`body\`
- Nội dung hiển thị nằm đúng trong \`body\`
- Code dễ đọc, thụt dòng rõ
      `
    },
    {
      id: 'html-02',
      title: 'Buổi 2: Thẻ, phần tử, thuộc tính và cách đọc code HTML',
      level: 'beginner',
      content: `
# Buổi 2: Thẻ, phần tử, thuộc tính và cách đọc code HTML

## Mục tiêu
- Hiểu thẻ mở, thẻ đóng, phần tử HTML
- Hiểu thuộc tính và giá trị thuộc tính
- Biết cách “đọc” một dòng HTML thay vì chỉ chép lại
- Bắt đầu có tư duy phân tích cú pháp

## Prompt 1 - Nhờ AI dạy thật sâu về cú pháp HTML
\`\`\`
Bạn hãy đóng vai mentor Front-end dạy tôi HTML buổi 2.

Chủ đề hôm nay là:
- thẻ HTML
- phần tử HTML
- thuộc tính HTML
- cách đọc một dòng code HTML đúng bản chất

Tôi muốn bạn dạy cực rõ theo format sau:
1. Thẻ là gì?
2. Phần tử là gì?
3. Thuộc tính là gì?
4. Giá trị thuộc tính là gì?
5. Phân biệt rõ cho người mới giữa:
   - tag
   - element
   - attribute
   - content
6. Cho tôi nhiều ví dụ từ rất đơn giản đến hơi phức tạp
7. Bóc tách từng ví dụ theo kiểu:
   - đây là thẻ gì
   - đây là thuộc tính gì
   - đây là nội dung gì
   - dòng code này có nhiệm vụ gì
8. Giải thích các thuộc tính phổ biến:
   - href
   - src
   - alt
   - id
   - class
   - title
   - name
   - placeholder
9. Chỉ ra lỗi sai người mới thường gặp khi viết thuộc tính
10. Cuối cùng cho tôi 5 bài tập phân tích code HTML

Yêu cầu rất quan trọng:
- Dùng tiếng Việt
- Giải thích sâu nhưng không lan man
- Tôi là người mới nên mọi thuật ngữ khó đều phải được giải thích
\`\`\`

## Prompt 2 - Nhờ AI huấn luyện kỹ năng đọc code
\`\`\`
Tôi muốn luyện kỹ năng đọc code HTML như người có tư duy, không phải nhìn thấy đâu chép đó.

Hãy cho tôi 10 dòng HTML từ dễ đến vừa.
Với mỗi dòng:
- yêu cầu tôi tự phân tích trước
- hỏi tôi:
  - tên thẻ là gì
  - phần nội dung là gì
  - thuộc tính nào đang được dùng
  - mục đích của dòng code là gì
- chờ tôi trả lời
- sau đó bạn mới chữa

Hãy đóng vai mentor nghiêm khắc nhưng dễ hiểu.
Nếu tôi trả lời mơ hồ, bạn bắt tôi nói rõ hơn.
\`\`\`

## Prompt 3 - Nhờ AI ra bài tập thực hành
\`\`\`
Hãy giao cho tôi bài tập HTML buổi 2 theo kiểu thực hành.

Yêu cầu:
1. Tạo 1 thẻ a có href và title
2. Tạo 1 thẻ img có src và alt
3. Tạo 1 input có type, name, placeholder
4. Tạo 1 đoạn văn có title
5. Sau khi tôi làm xong, bạn review từng dòng cực chi tiết:
   - dòng nào đúng
   - dòng nào sai
   - sai vì sao
   - sửa thế nào
   - có cách viết nào tốt hơn không

Hãy review như mentor code thật sự, đừng chỉ nói “đúng rồi” hoặc “ổn”.
\`\`\`

## Bài tập buổi này
- Tự viết 5 phần tử HTML có thuộc tính
- Tự giải thích bằng lời từng dòng
- Gửi lên AI để được bắt lỗi

## Tiêu chuẩn hoàn thành
- Hiểu rõ cấu tạo một phần tử HTML
- Không còn nhầm thẻ với thuộc tính
- Đọc được HTML cơ bản của người khác
      `
    },
    {
      id: 'html-03',
      title: 'Buổi 3: Văn bản, tiêu đề, đoạn văn và phân cấp nội dung',
      level: 'beginner',
      content: `
# Buổi 3: Văn bản, tiêu đề, đoạn văn và phân cấp nội dung

## Mục tiêu
- Dùng đúng \`h1\` đến \`h6\`
- Dùng đúng \`p\`, \`br\`, \`hr\`
- Biết nhấn mạnh nội dung bằng thẻ đúng nghĩa
- Hiểu rằng HTML không chỉ là “hiển thị chữ”, mà là tổ chức thông tin

## Prompt 1 - Nhờ AI dạy cách viết nội dung HTML đúng tư duy
\`\`\`
Bạn là mentor Front-end. Hôm nay hãy dạy tôi HTML buổi 3 về:
- heading
- paragraph
- line break
- horizontal rule
- strong
- em
- mark
- small

Nhưng tôi không muốn học kiểu liệt kê thẻ.
Tôi muốn bạn dạy theo tư duy tổ chức nội dung.

Hãy dạy theo cấu trúc này:
1. Vì sao một trang web cần có phân cấp nội dung?
2. Heading dùng để làm gì? Tại sao không phải cứ chữ to là heading?
3. Phân biệt vai trò của:
   - h1 đến h6
   - p
   - br
   - hr
4. Giải thích khi nào dùng:
   - strong
   - em
   - mark
   - small
5. Cho tôi 1 ví dụ bài viết ngắn có cấu trúc đẹp
6. Cho tôi 1 ví dụ bài viết sai cấu trúc và phân tích vì sao sai
7. Chỉ ra các lỗi phổ biến:
   - dùng nhiều h1
   - dùng br thay cho p
   - dùng heading chỉ để trang trí
8. Cuối cùng, cho tôi 1 checklist để tự kiểm tra một bài HTML có cấu trúc tốt hay không

Dạy thật kỹ như đang đào tạo một junior thật sự.
\`\`\`

## Prompt 2 - Nhờ AI biến tôi thành người viết HTML có cấu trúc
\`\`\`
Hãy giao cho tôi một bài tập viết nội dung HTML.

Bối cảnh:
Tôi cần tạo 1 bài giới thiệu bản thân dạng blog ngắn.

Yêu cầu bài làm:
- 1 h1
- ít nhất 2 h2
- mỗi phần có đoạn văn riêng
- dùng strong và em hợp lý
- có 1 hr để tách phần
- không dùng thẻ một cách máy móc

Tôi muốn bạn:
1. đưa đề bài
2. không cho lời giải ngay
3. bắt tôi tự làm
4. sau khi tôi gửi code, bạn review như mentor:
   - cấu trúc nội dung đã ổn chưa
   - heading có logic chưa
   - dùng strong/em có đúng nghĩa chưa
   - có gì đang viết theo kiểu “cho có” không
5. sau đó bắt tôi sửa lại bản 2
\`\`\`

## Prompt 3 - Nhờ AI phản biện bài làm của tôi
\`\`\`
Tôi sẽ gửi cho bạn một đoạn HTML có các heading và paragraph.
Bạn hãy đóng vai reviewer khó tính và phản biện thật kỹ.

Khi review, bắt buộc phải đánh giá theo 4 tiêu chí:
1. Cấu trúc nội dung
2. Phân cấp heading
3. Tính dễ đọc
4. Tính đúng nghĩa của các thẻ nhấn mạnh

Không được review chung chung.
Phải chỉ ra cụ thể:
- dòng nào ổn
- dòng nào chưa ổn
- vì sao
- sửa như thế nào
- cách viết nào gọn và tốt hơn
\`\`\`

## Bài tập buổi này
- Viết 1 bài giới thiệu bản thân dạng blog
- Có cấu trúc rõ
- Có heading logic
- Có nhấn mạnh từ khóa đúng cách

## Tiêu chuẩn hoàn thành
- Chỉ có 1 \`h1\`
- Heading không nhảy loạn
- Không lạm dụng \`br\`
- Nội dung đọc mạch lạc
      `
    },
    {
      id: 'html-04',
      title: 'Buổi 4: Link, ảnh, đường dẫn và điều hướng cơ bản',
      level: 'beginner',
      content: `
# Buổi 4: Link, ảnh, đường dẫn và điều hướng cơ bản

## Mục tiêu
- Tạo được liên kết trong trang và ra ngoài
- Biết dùng ảnh đúng cách
- Hiểu relative path và absolute path
- Dựng được menu điều hướng đơn giản

## Prompt 1 - Nhờ AI giải thích thật rõ về link và ảnh
\`\`\`
Hãy đóng vai mentor Front-end dạy tôi buổi 4 HTML về:
- thẻ a
- href
- target
- liên kết tuyệt đối và tương đối
- anchor link bằng id
- thẻ img
- src, alt, width, height
- cấu trúc thư mục cơ bản của project

Tôi muốn được học theo kiểu:
1. giải thích bản chất từng khái niệm
2. cho ví dụ thực tế
3. giải thích tại sao người mới hay nhầm đường dẫn
4. chỉ rõ khi nào dùng:
   - link ngoài
   - link nội bộ
   - link tới section trong cùng trang
5. giải thích alt thật kỹ:
   - alt để làm gì
   - vì sao alt quan trọng
   - alt nào là tốt, alt nào là vô nghĩa
6. cho tôi 8 lỗi sai phổ biến của người mới khi làm link và ảnh
7. cuối cùng, cho tôi 1 sơ đồ tư duy ngắn để nhớ toàn bộ buổi học

Hãy dạy như mentor thật sự, không tóm tắt sơ sài.
\`\`\`

## Prompt 2 - Nhờ AI ra bài tập dựng menu và trang profile mini
\`\`\`
Hãy giao cho tôi một bài tập thực hành HTML buổi 4.

Yêu cầu:
- tạo 1 menu điều hướng có 3 liên kết
- tạo 1 liên kết ra website bên ngoài
- tạo 1 nút đi tới phần liên hệ trong cùng trang
- chèn 2 ảnh có alt rõ ràng
- tạo cấu trúc thư mục đơn giản với thư mục images

Tôi muốn bạn:
1. mô tả đề bài thật rõ
2. chia bài tập thành từng bước nhỏ
3. bắt tôi tự làm từng bước
4. sau mỗi bước, yêu cầu tôi gửi code
5. review thật kỹ từng lỗi về:
   - href
   - đường dẫn ảnh
   - alt
   - target
   - id dùng cho anchor link
\`\`\`

## Prompt 3 - Nhờ AI tạo bài kiểm tra tình huống
\`\`\`
Hãy tạo cho tôi một bài kiểm tra tình huống về link và ảnh trong HTML.

Tôi muốn có:
- 5 câu hỏi tình huống thực tế
- ví dụ: khi nào dùng target="_blank", khi nào không nên dùng
- ví dụ: alt như thế nào là tốt
- ví dụ: vì sao ảnh không hiện
- ví dụ: khi nào dùng relative path

Sau khi tôi trả lời, hãy:
- chấm từng câu
- giải thích sâu chỗ sai
- nói rõ tôi thiếu tư duy ở đâu
\`\`\`

## Bài tập buổi này
- Dựng 1 trang profile mini có:
  - ảnh đại diện
  - menu điều hướng
  - liên kết mạng xã hội
  - nút tới phần liên hệ

## Tiêu chuẩn hoàn thành
- Link hoạt động đúng
- Ảnh hiển thị đúng
- Alt có ý nghĩa
- Điều hướng trong trang không lỗi
      `
    },
    {
      id: 'html-05',
      title: 'Buổi 5: Danh sách, div, span, block/inline và dựng hồ sơ cá nhân',
      level: 'beginner',
      content: `
# Buổi 5: Danh sách, div, span, block/inline và dựng hồ sơ cá nhân

## Mục tiêu
- Biết tạo danh sách có cấu trúc
- Hiểu block và inline
- Dùng \`div\` và \`span\` có chủ đích
- Dựng được trang hồ sơ cá nhân phiên bản 1

## Prompt 1 - Nhờ AI dạy tư duy nhóm nội dung
\`\`\`
Bạn hãy dạy tôi HTML buổi 5 với vai trò mentor.

Chủ đề:
- ul, ol, li
- danh sách lồng nhau
- block và inline
- div và span
- cách nhóm nội dung hợp lý trong một trang web

Nhưng tôi không muốn học theo kiểu “đây là thẻ này, đây là thẻ kia”.
Tôi muốn học theo tư duy xây một trang.

Hãy dạy theo trình tự:
1. Vì sao phải chia nội dung thành nhóm?
2. Khi nào nên dùng danh sách?
3. Khi nào không nên dùng danh sách?
4. Block và inline khác nhau ở bản chất gì?
5. div để làm gì?
6. span để làm gì?
7. Người mới hay lạm dụng div như thế nào?
8. Cho tôi 3 ví dụ:
   - 1 ví dụ dùng list đúng
   - 1 ví dụ dùng list sai
   - 1 ví dụ dùng div/span sai và cách sửa
9. Cuối cùng tóm tắt thành checklist quyết định nhanh:
   - nội dung này nên dùng p, list, div hay span?

Dạy cực kỳ thực chiến.
\`\`\`

## Prompt 2 - Nhờ AI hướng dẫn dựng trang hồ sơ cá nhân
\`\`\`
Tôi muốn bạn đóng vai mentor và dẫn tôi dựng một trang hồ sơ cá nhân bằng HTML.

Trang cần có:
- tiêu đề chính
- ảnh đại diện
- phần giới thiệu
- danh sách kỹ năng
- danh sách mục tiêu học tập
- một vài từ được nhấn mạnh trong câu bằng span hoặc strong nếu hợp lý

Hãy hướng dẫn tôi theo kiểu:
1. phân tích yêu cầu
2. chia cấu trúc trang thành các khối
3. nói rõ khối nào dùng div, khối nào dùng list
4. yêu cầu tôi tự code từng phần
5. mỗi phần tôi gửi lên thì bạn review
6. nếu tôi dùng thẻ không hợp lý, bạn phải phản biện ngay

Tôi muốn được học như một junior đang được mentor kèm trực tiếp.
\`\`\`

## Prompt 3 - Nhờ AI review cấu trúc trang
\`\`\`
Tôi sẽ gửi cho bạn code HTML của trang hồ sơ cá nhân.
Bạn hãy review theo tiêu chí:
1. Nhóm nội dung đã logic chưa?
2. Danh sách dùng có đúng chỗ không?
3. Có chỗ nào đang lạm dụng div không?
4. Có chỗ nào nên dùng span hoặc strong khác đi không?
5. Bố cục HTML đã dễ đọc chưa?

Hãy review cụ thể theo từng vùng, không nói chung chung.
Sau đó yêu cầu tôi viết lại phiên bản tốt hơn.
\`\`\`

## Bài tập buổi này
- Hoàn thành trang hồ sơ cá nhân phiên bản 1

## Tiêu chuẩn hoàn thành
- Có các khối nội dung rõ ràng
- Danh sách dùng đúng chỗ
- Không lạm dụng div
- Code đọc dễ hiểu
      `
    },
    {
      id: 'html-06',
      title: 'Buổi 6: Bảng và cách biểu diễn dữ liệu đúng mục đích',
      level: 'intermediate',
      content: `
# Buổi 6: Bảng và cách biểu diễn dữ liệu đúng mục đích

## Mục tiêu
- Tạo được bảng dữ liệu đúng chuẩn
- Biết khi nào nên dùng bảng
- Không dùng bảng để chia layout
- Thêm bảng hợp lý vào project cá nhân

## Prompt 1 - Nhờ AI dạy bảng theo tư duy dữ liệu
\`\`\`
Hãy dạy tôi HTML buổi 6 về bảng, nhưng phải dạy theo tư duy biểu diễn dữ liệu, không chỉ dạy cú pháp.

Chủ đề cần dạy:
- table
- tr
- th
- td
- thead
- tbody
- tfoot
- colspan
- rowspan

Yêu cầu cách dạy:
1. Giải thích bảng trong HTML dùng để làm gì
2. Phân biệt bảng dữ liệu và layout thật rõ
3. Từng thẻ có vai trò gì
4. Dùng ví dụ thực tế:
   - thời khóa biểu
   - bảng giá
   - bảng kỹ năng
5. Chỉ ra các sai lầm phổ biến:
   - dùng bảng để chia bố cục
   - không có th
   - dữ liệu lộn xộn
6. Cho tôi 5 câu hỏi để tự quyết định khi nào nên dùng bảng, khi nào không

Dạy kỹ như đang sửa tư duy cho người mới.
\`\`\`

## Prompt 2 - Nhờ AI giao bài tập bảng thực tế
\`\`\`
Hãy giao cho tôi 3 bài tập thực hành về bảng HTML:
1. bảng thời khóa biểu
2. bảng kỹ năng cá nhân
3. bảng thông tin khóa học

Mỗi bài tập cần:
- mô tả yêu cầu rõ
- các cột/hàng gợi ý
- mức độ tăng dần
- không cho đáp án ngay

Sau đó khi tôi gửi code, hãy review cực kỹ:
- dữ liệu có logic không
- có dùng th đúng chưa
- nên thêm thead/tbody không
- bảng có đang bị lạm dụng không
- code có sạch không
\`\`\`

## Prompt 3 - Nhờ AI bắt lỗi tư duy
\`\`\`
Tôi muốn bạn đóng vai reviewer khó tính.

Tôi sẽ gửi cho bạn một đoạn HTML có bảng.
Bạn phải đánh giá:
- bảng này có thực sự cần là bảng không?
- nếu không cần, nên đổi sang cấu trúc nào?
- nếu cần, cấu trúc bảng này đã hợp lý chưa?
- có thiếu th, thead, tbody hay không?
- dữ liệu có dễ đọc không?

Mục tiêu là giúp tôi không học bảng một cách máy móc.
\`\`\`

## Bài tập buổi này
- Thêm 1 bảng hợp lý vào project cá nhân:
  - bảng kỹ năng
  - hoặc bảng lộ trình học

## Tiêu chuẩn hoàn thành
- Bảng có ý nghĩa dữ liệu rõ ràng
- Không dùng bảng để dựng layout
- Có hàng tiêu đề hợp lý
      `
    },
    {
      id: 'html-07',
      title: 'Buổi 7: Form cơ bản và tư duy tạo trải nghiệm nhập liệu',
      level: 'intermediate',
      content: `
# Buổi 7: Form cơ bản và tư duy tạo trải nghiệm nhập liệu

## Mục tiêu
- Hiểu form dùng để làm gì
- Dùng được các input phổ biến
- Tạo được form liên hệ hoặc đăng ký cơ bản
- Bắt đầu nghĩ về trải nghiệm người dùng, không chỉ là “đủ trường”

## Prompt 1 - Nhờ AI dạy form như một mentor UX cơ bản
\`\`\`
Hãy dạy tôi HTML buổi 7 về form, nhưng theo hướng thực chiến.

Chủ đề:
- form
- input text
- email
- password
- number
- button submit
- name
- placeholder

Tôi muốn bạn dạy theo cấu trúc:
1. Form trong HTML dùng để làm gì?
2. Vì sao form là nơi người dùng “tương tác” chứ không chỉ nhập dữ liệu?
3. Giải thích từng loại input cơ bản và khi nào nên dùng
4. Vai trò của:
   - name
   - placeholder
   - value
   - button submit
5. Cho tôi 3 ví dụ form thực tế:
   - đăng nhập
   - đăng ký
   - liên hệ
6. Phân tích form nào tốt, form nào dở
7. Chỉ ra 10 lỗi người mới hay mắc khi tạo form
8. Cuối cùng, cho tôi checklist để tự đánh giá một form cơ bản

Hãy dạy kỹ, có ví dụ, có phản biện, không dạy qua loa.
\`\`\`

## Prompt 2 - Nhờ AI dẫn tôi tạo form thật
\`\`\`
Hãy đóng vai mentor và dẫn tôi tạo một form liên hệ cho trang hồ sơ cá nhân.

Yêu cầu form:
- họ tên
- email
- chủ đề
- nội dung liên hệ
- nút gửi

Cách hướng dẫn tôi muốn:
1. phân tích mục tiêu form
2. xác định từng trường cần thiết
3. nói rõ tại sao có trường này, tại sao không cần thêm trường kia
4. yêu cầu tôi tự code
5. review thật kỹ khi tôi gửi code:
   - dùng input type đã đúng chưa
   - tên field đã rõ chưa
   - cấu trúc form đã ổn chưa
   - có field nào thừa không

Đừng chỉ viết hộ. Hãy buộc tôi tư duy.
\`\`\`

## Prompt 3 - Nhờ AI đóng vai người dùng khó tính
\`\`\`
Hãy đóng vai một người dùng khó tính đang phải điền form của tôi.

Tôi sẽ gửi code form HTML.
Bạn hãy phản biện theo góc nhìn người dùng:
- trường nào gây khó hiểu?
- placeholder nào vô nghĩa?
- thứ tự field có hợp lý không?
- nút submit có rõ ràng không?
- form có đang dài dòng không?

Sau đó chuyển vai thành mentor kỹ thuật và nói tôi cần sửa gì trong HTML.
\`\`\`

## Bài tập buổi này
- Tạo form liên hệ hoặc form đăng ký cơ bản cho project cá nhân

## Tiêu chuẩn hoàn thành
- Form có mục tiêu rõ
- Trường nhập liệu hợp lý
- Không có field thừa
- HTML đủ sạch để nâng cấp sau
      `
    },
    {
      id: 'html-08',
      title: 'Buổi 8: Form nâng cao, label, validation và form dễ dùng',
      level: 'intermediate',
      content: `
# Buổi 8: Form nâng cao, label, validation và form dễ dùng

## Mục tiêu
- Dùng được checkbox, radio, select, textarea
- Viết form có label đúng chuẩn
- Thêm validation cơ bản hợp lý
- Hiểu form thân thiện với người dùng là gì

## Prompt 1 - Nhờ AI dạy form chuẩn hơn
\`\`\`
Hãy dạy tôi HTML buổi 8 về form nâng cao theo góc nhìn mentor kỹ tính.

Chủ đề bắt buộc:
- label
- for
- checkbox
- radio
- select
- option
- textarea
- required
- minlength
- maxlength
- checked
- selected
- disabled
- readonly

Tôi muốn bạn dạy theo logic:
1. Vì sao label cực kỳ quan trọng?
2. Vì sao placeholder không thay thế được label?
3. Khi nào dùng checkbox, khi nào dùng radio?
4. Khi nào dùng select, khi nào không nên dùng?
5. Validation cơ bản nên dùng như thế nào để vừa đủ?
6. Cho ví dụ form tốt và form tệ
7. Chỉ ra lỗi sai phổ biến của người mới
8. Tạo cho tôi checklist “form dễ dùng”

Yêu cầu:
- phải có ví dụ HTML
- phải có giải thích “vì sao”
- phải phản biện tư duy sai của người mới
\`\`\`

## Prompt 2 - Nhờ AI giao bài thực chiến
\`\`\`
Hãy giao cho tôi một bài tập thực chiến:
Tạo form đăng ký tư vấn hoặc form khảo sát sở thích.

Form cần có:
- họ tên
- email
- thành phố (select)
- mục tiêu học tập (radio hoặc checkbox nếu hợp lý)
- mô tả ngắn (textarea)
- các field bắt buộc được đánh dấu hợp lý

Tôi muốn bạn:
1. đưa đề bài rõ ràng
2. không cho đáp án ngay
3. đợi tôi làm
4. sau đó review như mentor:
   - label đã đúng chưa
   - checkbox/radio đã hợp lý chưa
   - validation đã quá tay hay chưa đủ
   - form có dễ hiểu không
   - field nào đang thừa
5. yêu cầu tôi sửa lại bản 2
\`\`\`

## Prompt 3 - Nhờ AI audit form của tôi
\`\`\`
Tôi sẽ gửi code HTML của form.
Bạn hãy audit theo 5 tiêu chí:
1. Đúng kỹ thuật
2. Dễ hiểu với người dùng
3. Dễ dùng
4. Có tính accessibility cơ bản
5. Cấu trúc HTML có sạch không

Mỗi tiêu chí phải có nhận xét cụ thể.
Cuối cùng, chấm điểm form của tôi trên thang 10 và nói tôi cần sửa gì để lên level tốt hơn.
\`\`\`

## Bài tập buổi này
- Hoàn thiện form final cho project cá nhân

## Tiêu chuẩn hoàn thành
- Mọi input quan trọng đều có label
- Validation vừa đủ
- Cấu trúc field hợp lý
- Form dễ hiểu và dễ điền
      `
    },
    {
      id: 'html-09',
      title: 'Buổi 9: Semantic HTML và cách viết HTML có nghĩa',
      level: 'intermediate',
      content: `
# Buổi 9: Semantic HTML và cách viết HTML có nghĩa

## Mục tiêu
- Hiểu semantic HTML là gì
- Không dùng div cho mọi thứ
- Biết dùng header, nav, main, section, article, aside, footer
- Refactor project cá nhân sang HTML rõ nghĩa hơn

## Prompt 1 - Nhờ AI dạy semantic như người làm nghề
\`\`\`
Hãy dạy tôi HTML buổi 9 về semantic HTML thật sâu.

Tôi không muốn học kiểu nhớ tên thẻ.
Tôi muốn hiểu bản chất của semantic HTML.

Hãy dạy theo cấu trúc:
1. Semantic HTML là gì?
2. Vì sao semantic HTML quan trọng với:
   - con người đọc code
   - cấu trúc nội dung
   - accessibility
   - SEO cơ bản
3. Giải thích thật rõ các thẻ:
   - header
   - nav
   - main
   - section
   - article
   - aside
   - footer
4. Phân biệt:
   - section và article
   - div và section
   - nav và khối link thông thường
5. Cho 1 ví dụ trang viết rất tệ toàn div
6. Refactor nó thành semantic HTML và giải thích từng quyết định
7. Liệt kê 10 lỗi semantic người mới hay mắc
8. Cho tôi 1 checklist tự hỏi trước khi chọn thẻ semantic

Dạy như mentor chuyên review code của junior.
\`\`\`

## Prompt 2 - Nhờ AI dẫn tôi refactor project
\`\`\`
Tôi đã có một trang HTML cá nhân.
Hãy giúp tôi refactor trang đó sang semantic HTML.

Cách làm tôi muốn:
1. Tôi gửi code cũ
2. Bạn phân tích cấu trúc nội dung của trang
3. Bạn nói khối nào nên là header, nav, main, section, footer...
4. Bạn không làm thay ngay, mà hướng dẫn tôi sửa từng phần
5. Sau mỗi lần tôi sửa, bạn review tiếp
6. Nếu tôi chọn semantic sai, bạn phải giải thích vì sao sai

Mục tiêu là để tôi thực sự hiểu cách chọn thẻ, không phải chỉ copy đáp án.
\`\`\`

## Prompt 3 - Nhờ AI phản biện semantic của tôi
\`\`\`
Tôi sẽ gửi cho bạn HTML của tôi.
Bạn hãy chỉ tập trung review semantic HTML.

Yêu cầu review:
- chỗ nào nên giữ
- chỗ nào semantic chưa đúng
- chỗ nào đang dùng section vô tội vạ
- chỗ nào đáng ra vẫn nên là div
- chỗ nào thiếu main/nav/header/footer

Cuối cùng, hãy tạo cho tôi một phiên bản checklist cá nhân để tôi tự audit sau này.
\`\`\`

## Bài tập buổi này
- Refactor toàn bộ project cá nhân sang semantic HTML

## Tiêu chuẩn hoàn thành
- Có cấu trúc semantic rõ
- Mỗi vùng nội dung có vai trò hợp lý
- Không lạm dụng section
- HTML dễ đọc hơn bản cũ
      `
    },
    {
      id: 'html-10',
      title: 'Buổi 10: SEO cơ bản, accessibility cơ bản và cách tự audit HTML',
      level: 'advanced',
      content: `
# Buổi 10: SEO cơ bản, accessibility cơ bản và cách tự audit HTML

## Mục tiêu
- Hiểu HTML ảnh hưởng SEO ra sao
- Hiểu HTML ảnh hưởng accessibility ra sao
- Biết các tiêu chuẩn căn bản để tự rà soát bài làm
- Hoàn thiện project cá nhân ở mức sạch và có tư duy nghề

## Prompt 1 - Nhờ AI dạy SEO và accessibility ở mức người mới cần biết
\`\`\`
Hãy dạy tôi buổi 10 về SEO cơ bản và accessibility cơ bản trong HTML.

Tôi là người học HTML, chưa cần kiến thức quá sâu như chuyên gia SEO hay a11y.
Tôi cần hiểu đủ để viết HTML có chất lượng.

Hãy dạy theo cấu trúc:
1. HTML liên quan gì đến SEO?
2. HTML liên quan gì đến accessibility?
3. Giải thích vai trò của:
   - title
   - meta description
   - heading hierarchy
   - alt
   - label
   - button và a
   - semantic HTML
4. Cho ví dụ tốt và xấu
5. Chỉ ra 12 lỗi phổ biến mà junior hay mắc
6. Cho tôi 1 checklist audit HTML trước khi nộp bài
7. Cho tôi 5 tình huống thực tế để tôi tự quyết định đúng/sai

Yêu cầu:
- giải thích dễ hiểu
- có ví dụ HTML
- có phản biện tư duy sai
\`\`\`

## Prompt 2 - Nhờ AI audit project final của tôi
\`\`\`
Tôi sẽ gửi cho bạn project HTML của tôi.
Bạn hãy audit như một mentor kỹ tính theo đúng 5 nhóm tiêu chí sau:

1. Cấu trúc nội dung
2. Semantic HTML
3. Form usability
4. SEO cơ bản
5. Accessibility cơ bản

Với mỗi nhóm tiêu chí, bạn phải:
- nêu điểm tốt
- nêu lỗi cụ thể
- giải thích vì sao là lỗi
- cho hướng sửa cụ thể
- ưu tiên lỗi nghiêm trọng trước

Cuối cùng:
- chấm điểm tổng trên thang 100
- xếp loại: yếu / ổn / tốt / rất tốt
- cho tôi danh sách 5 việc cần sửa ngay
\`\`\`

## Prompt 3 - Nhờ AI đóng vai reviewer cuối khóa
\`\`\`
Hãy đóng vai reviewer cuối khóa HTML.

Tôi sẽ gửi code project của tôi.
Bạn phải review như thật, không nể nang.

Cách review mong muốn:
- chia theo từng phần của project
- đánh giá cấu trúc
- đánh giá semantic
- đánh giá độ sạch của HTML
- đánh giá tính dễ dùng của form
- đánh giá SEO và accessibility cơ bản
- chỉ rõ điểm nào chứng tỏ tôi đã hiểu bài
- chỉ rõ điểm nào cho thấy tôi vẫn đang code theo kiểu chắp vá

Cuối cùng, hãy nói thật:
- tôi đã sẵn sàng học CSS chưa?
- nếu chưa, tôi cần luyện thêm phần nào?
\`\`\`

## Bài tập buổi này
- Audit toàn bộ project cá nhân
- Sửa lại theo góp ý
- Tạo phiên bản final sạch nhất có thể

## Tiêu chuẩn hoàn thành
- Có title và meta description hợp lý
- Heading có logic
- Alt và label ổn
- Semantic tốt
- Code đủ sạch để bước sang CSS
      `
    }
  ]
};