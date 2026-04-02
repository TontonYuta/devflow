import { Lesson } from '../../types';

export const testingLesson: Lesson = {
  id: 'testing-mastery',
  icon: 'test-tube',
  title: 'Kiểm thử (Testing)',
  description:
    'Lộ trình Testing theo phong cách tự học cùng AI mentor. Mỗi buổi học đi kèm prompt cực chi tiết để học viên chỉ cần copy vào AI là có thể học từ bản chất, hiểu chiến lược test, viết unit/integration/E2E test, test React component và được review như học cùng mentor testing 1-1.',
  points: [
    'Mỗi buổi có prompt cực chi tiết để copy vào AI và học ngay',
    'AI đóng vai mentor testing, dạy từ bản chất chứ không chỉ đưa cú pháp framework',
    'Có prompt học lý thuyết, prompt viết test, prompt review và prompt phản biện chiến lược test',
    'Tập trung vào năng lực thật: chọn đúng thứ cần test, viết test có giá trị, tránh flaky test, biết phân bổ unit/integration/E2E',
    'Có bài tập theo kiểu test tính năng thật thay vì chỉ test ví dụ đồ chơi',
    'Học xong có thể tự xây một bộ test thực tế hơn cho app nhỏ và biết đọc chất lượng test của mình'
  ],
  chapters: [
    {
      id: 'test-01',
      title: 'Buổi 1: Testing là gì và vì sao dự án nghiêm túc phải có test?',
      level: 'beginner',
      content: `
# Buổi 1: Testing là gì và vì sao dự án nghiêm túc phải có test?

## Mục tiêu
- Hiểu testing là gì
- Hiểu test giúp giảm rủi ro như thế nào
- Không còn nghĩ test là việc “thừa”
- Bắt đầu nhìn code dưới góc nhìn chất lượng và an toàn thay đổi

## Cách học buổi này
Bạn sẽ copy từng prompt bên dưới vào AI theo đúng thứ tự.
Không học lướt. Sau mỗi prompt phải tự giải thích lại bằng lời của bạn.

## Prompt 1 - Nhờ AI dạy lý thuyết từ gốc
\`\`\`
Bạn hãy đóng vai một mentor Testing cực giỏi, chuyên dạy kiểm thử cho lập trình viên web.

Hôm nay hãy dạy tôi buổi đầu tiên về Testing theo phong cách:
- cực dễ hiểu nhưng không hời hợt
- giải thích từ bản chất
- luôn nói vì sao kiến thức này quan trọng
- gắn với ví dụ thực tế của dự án phần mềm
- không dùng thuật ngữ khó nếu chưa giải thích

Chủ đề hôm nay:
- Testing là gì?
- Vì sao phải viết test?
- Test giúp gì khi sửa code, refactor, nâng cấp tính năng?
- Vì sao dự án càng lớn càng cần test?

Tôi muốn bạn dạy theo format:
1. Testing là gì?
2. Test là “code để kiểm tra code” nghĩa là gì?
3. Nếu không có test thì rủi ro gì xảy ra?
4. Test giúp team tự tin ra sao khi sửa code?
5. Cho 5 ví dụ bug mà test có thể phát hiện sớm
6. Vì sao test không chỉ dành cho dự án lớn?
7. Chỉ ra 8 hiểu lầm phổ biến của người mới về testing
8. Đặt cho tôi 5 câu hỏi kiểm tra hiểu bài
9. Sau khi tôi trả lời, bạn phải chấm và sửa thật kỹ

Dùng tiếng Việt và dạy như mentor thật sự.
\`\`\`

## Prompt 2 - Nhờ AI luyện tư duy "giá trị của test"
\`\`\`
Tôi muốn luyện tư duy nhìn một tính năng và thấy test có ích ở đâu.

Hãy cho tôi 6 tính năng quen thuộc:
- form đăng nhập
- tính tiền đơn hàng
- lọc sản phẩm
- đổi mật khẩu
- giỏ hàng
- phân quyền admin/user

Với mỗi tính năng:
1. hỏi tôi bug nào dễ xảy ra
2. hỏi tôi nếu không có test thì team sẽ kiểm tra thủ công thế nào
3. hỏi tôi test sẽ giúp giảm rủi ro ở đâu
4. sau đó bạn mới chữa
5. nếu tôi trả lời chung chung, hãy bắt tôi nói cụ thể hơn

Mục tiêu là để tôi thấy test là công cụ bảo vệ chất lượng, không phải thủ tục.
\`\`\`

## Prompt 3 - Nhờ AI kiểm tra hiểu bài
\`\`\`
Hãy kiểm tra xem tôi đã thật sự hiểu Testing buổi 1 chưa.

Tôi muốn có:
- 3 câu hỏi trắc nghiệm có giải thích đáp án
- 3 câu hỏi tự luận ngắn
- 2 tình huống thực tế
- 1 câu hỏi tư duy: vì sao một đoạn code “đang chạy tốt hôm nay” vẫn rất cần test?

Sau khi tôi trả lời, bạn hãy:
- chấm điểm từng câu
- giải thích chỗ sai
- nói tôi đang ở mức nào: chưa hiểu / hiểu cơ bản / hiểu chắc
\`\`\`

## Bài tập buổi này
1. Nêu 5 lợi ích của việc viết test
2. Chọn 1 tính năng bạn từng làm và phân tích test có thể bảo vệ nó thế nào
3. Viết một đoạn ngắn giải thích vì sao test không phải việc thừa

## Tiêu chuẩn hoàn thành
- Hiểu test có giá trị thật
- Biết liên hệ test với rủi ro của tính năng
- Có động lực học test nghiêm túc hơn
      `
    },
    {
      id: 'test-02',
      title: 'Buổi 2: Unit, Integration, E2E và cách chọn đúng loại test',
      level: 'beginner',
      content: `
# Buổi 2: Unit, Integration, E2E và cách chọn đúng loại test

## Mục tiêu
- Phân biệt unit test, integration test, E2E test
- Hiểu mỗi loại test giải quyết bài toán gì
- Biết khi nào nên dùng từng loại
- Bắt đầu có tư duy testing pyramid

## Prompt 1 - Nhờ AI dạy test levels từ bản chất
\`\`\`
Hãy dạy tôi Testing buổi 2 như một mentor chất lượng phần mềm.

Chủ đề:
- unit test
- integration test
- E2E test
- testing pyramid

Tôi muốn bạn dạy theo cấu trúc:
1. Unit test là gì?
2. Integration test là gì?
3. E2E test là gì?
4. Mỗi loại test mạnh ở điểm nào và yếu ở điểm nào?
5. Vì sao không nên chỉ viết E2E?
6. Vì sao không nên chỉ có unit test?
7. Testing pyramid là gì ở mức dễ hiểu?
8. Cho ví dụ thực tế:
   - hàm tính tổng tiền
   - form đăng nhập
   - luồng mua hàng
9. Chỉ ra lỗi phổ biến:
   - gọi sai tên loại test
   - viết nhầm integration thành unit
   - lạm dụng E2E
10. Tạo checklist chọn loại test phù hợp

Dạy như mentor đang xây nền chiến lược test cho junior.
\`\`\`

## Prompt 2 - Nhờ AI luyện phân loại test
\`\`\`
Tôi muốn luyện tư duy chọn đúng loại test.

Hãy cho tôi 10 ví dụ test hoặc tính năng, ví dụ:
- kiểm tra hàm format tiền
- kiểm tra form đăng nhập hiển thị lỗi
- kiểm tra tạo todo từ đầu đến cuối trên trình duyệt
- kiểm tra API mock + component render dữ liệu
- kiểm tra route chuyển trang sau login
- kiểm tra validate email
- kiểm tra giỏ hàng cộng tổng
- kiểm tra modal mở khi click
- kiểm tra backend service tính giảm giá
- kiểm tra checkout end-to-end

Với mỗi ví dụ:
1. hỏi tôi nên xếp vào loại test nào
2. hỏi tôi vì sao
3. hỏi tôi có loại test nào khác cũng có thể dùng không
4. sau đó bạn mới chữa
\`\`\`

## Prompt 3 - Nhờ AI review test strategy choice của tôi
\`\`\`
Tôi sẽ mô tả một tính năng và cách tôi muốn test nó.
Bạn hãy review:
1. Tôi đang chọn đúng loại test chưa?
2. Có đang test quá nặng tay không?
3. Có chỗ nào đáng lẽ chỉ cần unit test mà tôi lại định dùng E2E không?
4. Có chỗ nào E2E là cần nhưng tôi lại bỏ qua không?
5. Nếu tối ưu effort, tôi nên phân bổ test thế nào?
\`\`\`

## Bài tập buổi này
- Phân loại ít nhất 12 ví dụ test vào unit/integration/E2E
- Viết lý do cho từng lựa chọn

## Tiêu chuẩn hoàn thành
- Phân biệt rõ 3 cấp độ test
- Biết loại test nào phù hợp cho từng bài toán
- Bắt đầu nghĩ theo chiến lược thay vì viết test bừa
      `
    },
    {
      id: 'test-03',
      title: 'Buổi 3: Tư duy viết test tốt - hành vi quan trọng, AAA và tên test rõ ràng',
      level: 'beginner',
      content: `
# Buổi 3: Tư duy viết test tốt - hành vi quan trọng, AAA và tên test rõ ràng

## Mục tiêu
- Hiểu test tốt không chỉ là test xanh
- Biết ưu tiên hành vi quan trọng
- Biết Arrange - Act - Assert
- Biết đặt tên test rõ ràng, có giá trị đọc hiểu

## Prompt 1 - Nhờ AI dạy testing mindset
\`\`\`
Hãy dạy tôi Testing buổi 3 như mentor testing thực chiến.

Chủ đề:
- test hành vi quan trọng
- Arrange / Act / Assert
- test readable
- test value
- avoid low-value tests

Tôi muốn bạn dạy theo cấu trúc:
1. Vì sao test xanh chưa chắc là test tốt?
2. Test có giá trị là test như thế nào?
3. Arrange / Act / Assert là gì?
4. Vì sao tên test rất quan trọng?
5. Nên test hành vi nào trước?
6. Khi nào test trở thành “ít giá trị” hoặc “quá dễ vỡ”?
7. Cho ví dụ:
   - test tên mơ hồ vs test tên rõ
   - test implementation detail vs test hành vi
8. Chỉ ra lỗi phổ biến:
   - test mọi thứ vụn vặt
   - assert quá nhiều trong một test
   - tên test không nói lên điều gì
9. Tạo checklist viết test readable và valuable

Dạy như mentor đang sửa tư duy viết test cho junior.
\`\`\`

## Prompt 2 - Nhờ AI giao bài thực hành viết test readable
\`\`\`
Hãy giao cho tôi bài thực hành buổi 3:
1. cho tôi 5 tên test mơ hồ và yêu cầu tôi viết lại cho rõ
2. cho tôi 3 ví dụ test lộn xộn và yêu cầu chia thành Arrange / Act / Assert
3. cho tôi 5 hành vi trong một app nhỏ và yêu cầu chọn 3 cái đáng test nhất

Sau đó:
- chấm câu trả lời của tôi
- chỉ ra test nào có giá trị, test nào ít giá trị
- giải thích thật kỹ
\`\`\`

## Prompt 3 - Nhờ AI review chất lượng test mindset của tôi
\`\`\`
Tôi sẽ gửi cho bạn một số test tôi viết.
Bạn hãy review:
1. Tên test có rõ không?
2. Test đang kiểm tra hành vi quan trọng hay chuyện vụn vặt?
3. Cấu trúc AAA có rõ không?
4. Assert có đủ gọn và đúng trọng tâm không?
5. Có test nào dễ vỡ mà ít giá trị không?

Hãy review như mentor testing khó tính.
\`\`\`

## Bài tập buổi này
- Viết lại 10 tên test cho rõ ràng hơn
- Chọn 3 tính năng nhỏ và xác định hành vi đáng test nhất
- Viết 3 test theo đúng AAA

## Tiêu chuẩn hoàn thành
- Biết phân biệt test có giá trị và test ít giá trị
- Biết dùng AAA
- Biết đặt tên test rõ ràng
      `
    },
    {
      id: 'test-04',
      title: 'Buổi 4: Setup Vitest/Jest, matcher cơ bản và test hàm JavaScript/TypeScript',
      level: 'beginner',
      content: `
# Buổi 4: Setup Vitest/Jest, matcher cơ bản và test hàm JavaScript/TypeScript

## Mục tiêu
- Cài được môi trường test
- Chạy được test đầu tiên
- Dùng được matcher cơ bản
- Test được hàm thuần JavaScript/TypeScript

## Prompt 1 - Nhờ AI dạy setup và assertion từ nền tảng
\`\`\`
Hãy dạy tôi Testing buổi 4 như mentor JavaScript/TypeScript testing.

Chủ đề:
- Vitest hoặc Jest
- file test
- describe
- it/test
- expect
- toBe
- toEqual
- toContain
- toThrow

Tôi muốn bạn dạy theo cấu trúc:
1. Vitest/Jest là gì?
2. File test thường được tổ chức ra sao?
3. describe/it dùng để làm gì?
4. expect là gì?
5. Khi nào dùng toBe, khi nào dùng toEqual?
6. toContain và toThrow dùng cho bài toán nào?
7. Cho ví dụ test hàm JS/TS đơn giản:
   - cộng/trừ
   - chữ hoa
   - kiểm tra mảng
   - kiểm tra lỗi
8. Chỉ ra lỗi phổ biến:
   - matcher dùng sai
   - test không chạy do setup sai
   - nhầm toBe với toEqual
9. Tạo checklist setup + assertion cơ bản

Dạy như mentor đang đưa junior vào thế giới test thật sự.
\`\`\`

## Prompt 2 - Nhờ AI dẫn tôi viết unit test đầu tiên
\`\`\`
Hãy dẫn tôi thực hành buổi 4:
1. cài Vitest hoặc Jest
2. tạo file test đầu tiên
3. viết test cho hàm tính tổng
4. viết test cho hàm đổi chuỗi thành chữ hoa
5. viết test kiểm tra lỗi khi input không hợp lệ
6. thêm ví dụ TypeScript nếu phù hợp

Tôi muốn bạn:
- hướng dẫn từng bước
- để tôi tự làm trước
- sau mỗi bước, review:
  - setup đã đúng chưa
  - matcher đã đúng chưa
  - test case có đủ rõ không
  - TypeScript có hỗ trợ rõ ràng hơn không
\`\`\`

## Prompt 3 - Nhờ AI review unit test đầu tiên của tôi
\`\`\`
Tôi sẽ gửi cho bạn các file test đầu tiên của tôi.
Bạn hãy review:
1. Setup có đúng không?
2. Matcher có dùng đúng không?
3. Test có dễ đọc không?
4. Có case nào còn thiếu không?
5. Có dấu hiệu viết test kiểu đối phó không?

Hãy review như mentor testing khó tính.
\`\`\`

## Bài tập buổi này
- Cài và chạy được môi trường test
- Viết ít nhất 6 unit test cho hàm JS/TS đơn giản
- Dùng ít nhất 4 matcher khác nhau

## Tiêu chuẩn hoàn thành
- Môi trường test chạy được
- Hiểu matcher cơ bản
- Test được hàm thuần JS/TS
      `
    },
    {
      id: 'test-05',
      title: 'Buổi 5: Test case, edge case, async test, mock function và spy',
      level: 'intermediate',
      content: `
# Buổi 5: Test case, edge case, async test, mock function và spy

## Mục tiêu
- Biết mở rộng test beyond happy path
- Biết nghĩ tới edge case
- Biết test code async
- Biết mock function và spy
- Tăng độ chắc chắn của unit test

## Prompt 1 - Nhờ AI dạy sâu về test robustness
\`\`\`
Hãy dạy tôi Testing buổi 5 như mentor testing thực chiến.

Chủ đề:
- normal case
- edge case
- invalid case
- async test
- Promise
- async/await
- mock function
- spy
- toHaveBeenCalled
- toHaveBeenCalledWith

Tôi muốn bạn dạy theo cấu trúc:
1. Vì sao chỉ test happy path là chưa đủ?
2. Edge case là gì?
3. Những loại dữ liệu nào nên được nghĩ tới:
   - rỗng
   - null/undefined
   - âm
   - biên
   - sai kiểu
4. Async test khác gì test sync?
5. Vì sao thiếu await dễ làm test sai?
6. Mock function giúp gì?
7. Spy dùng khi nào?
8. Cho ví dụ thực tế:
   - callback được gọi
   - API function async
   - validate input biên
9. Chỉ ra lỗi phổ biến:
   - quên test edge case
   - test async thiếu await
   - mock quá tay
10. Tạo checklist unit test robust

Dạy như mentor đang nâng chất test của junior.
\`\`\`

## Prompt 2 - Nhờ AI giao bài thực hành robust unit test
\`\`\`
Hãy giao cho tôi bài thực hành buổi 5:
1. viết test cho một hàm có nhiều edge case
2. viết test cho một hàm async thành công/thất bại
3. tạo mock callback và kiểm tra được gọi đúng
4. tạo spy cho một function và kiểm tra số lần gọi

Tôi muốn bạn:
- không cho đáp án ngay
- để tôi tự làm
- sau khi tôi gửi code, review:
  - edge case đã đủ chưa
  - async test có đúng chưa
  - mock/spy có dùng đúng mục đích không
  - có case nào quan trọng tôi bỏ sót không
\`\`\`

## Prompt 3 - Nhờ AI review độ chắc của test của tôi
\`\`\`
Tôi sẽ gửi cho bạn một số unit test.
Bạn hãy review:
1. Test đã có đủ happy path + edge case chưa?
2. Async handling có an toàn không?
3. Mock/spy có đang đúng chỗ không?
4. Có chỗ nào test quá hời hợt không?
5. Nếu bug lọt, bug dễ lọt ở vùng nào nhất?
\`\`\`

## Bài tập buổi này
- Viết test cho ít nhất 3 hàm có edge case
- Viết ít nhất 2 async test
- Dùng mock/spy trong ít nhất 2 tình huống

## Tiêu chuẩn hoàn thành
- Biết nghĩ beyond happy path
- Biết test async
- Biết mock/spy ở mức nền tảng
      `
    },
    {
      id: 'test-06',
      title: 'Buổi 6: React Testing Library - test UI theo cách người dùng sử dụng',
      level: 'intermediate',
      content: `
# Buổi 6: React Testing Library - test UI theo cách người dùng sử dụng

## Mục tiêu
- Hiểu triết lý của React Testing Library
- Biết render component
- Biết query theo role, text, label
- Bắt đầu test UI theo hành vi thay vì implementation detail

## Prompt 1 - Nhờ AI dạy RTL mindset
\`\`\`
Hãy dạy tôi Testing buổi 6 như mentor Front-end testing.

Chủ đề:
- React Testing Library
- render
- screen
- getByRole
- getByText
- getByLabelText
- test UI theo hành vi người dùng

Tôi muốn bạn dạy theo cấu trúc:
1. Vì sao test UI nên gần với cách người dùng dùng app?
2. React Testing Library khác gì với cách test implementation detail?
3. render giúp gì?
4. screen dùng để làm gì?
5. Khi nào nên ưu tiên getByRole?
6. Khi nào dùng getByText, getByLabelText?
7. Cho ví dụ thực tế:
   - button
   - heading
   - input
   - form label
8. Chỉ ra lỗi phổ biến:
   - query theo class hoặc DOM detail vô ích
   - test thứ người dùng không quan tâm
   - không ưu tiên role/label
9. Tạo checklist test UI đúng tinh thần RTL

Dạy như mentor đang dạy junior test UI có giá trị thật.
\`\`\`

## Prompt 2 - Nhờ AI dẫn tôi viết RTL đầu tiên
\`\`\`
Hãy dẫn tôi thực hành buổi 6:
1. render một button component
2. tìm button bằng role
3. render một card và tìm text
4. render một input có label và query bằng label
5. tạo một component nhỏ rồi viết 2-3 test UI cơ bản

Tôi muốn bạn:
- hướng dẫn từng bước
- để tôi tự làm trước
- sau mỗi bước, review:
  - query đã đúng tinh thần người dùng chưa
  - test có đang chạm implementation detail không
  - component có dễ test không
\`\`\`

## Prompt 3 - Nhờ AI review RTL style của tôi
\`\`\`
Tôi sẽ gửi cho bạn các test React Testing Library của tôi.
Bạn hãy review:
1. Query có đúng tinh thần RTL không?
2. Tôi có đang query thứ người dùng không quan tâm không?
3. Test có readable không?
4. Có chỗ nào đang phụ thuộc implementation detail không?
5. Có thể viết test gần hành vi người dùng hơn không?

Hãy review như mentor Front-end testing khó tính.
\`\`\`

## Bài tập buổi này
- Viết ít nhất 6 test bằng RTL
- Dùng role, text, label đúng chỗ
- Tự giải thích vì sao query đó “gần người dùng”

## Tiêu chuẩn hoàn thành
- Hiểu triết lý RTL
- Biết render và query UI
- Bắt đầu test component đúng hướng
      `
    },
    {
      id: 'test-07',
      title: 'Buổi 7: Test state, event, form, validation và component tương tác',
      level: 'intermediate',
      content: `
# Buổi 7: Test state, event, form, validation và component tương tác

## Mục tiêu
- Biết test component có state
- Biết giả lập click, input, submit
- Biết test validation và thông báo lỗi
- Biết test UI thay đổi sau tương tác

## Prompt 1 - Nhờ AI dạy interactive UI testing
\`\`\`
Hãy dạy tôi Testing buổi 7 như mentor Front-end testing thực chiến.

Chủ đề:
- click event
- input event
- submit form
- state update
- validation message
- user interaction

Tôi muốn bạn dạy theo cấu trúc:
1. Vì sao test tương tác là phần cực quan trọng trong UI testing?
2. State thay đổi nên được kiểm tra qua UI như thế nào?
3. Khi test form, nên nghĩ theo flow người dùng ra sao?
4. Validation nên test ở cấp hành vi nào?
5. Cho ví dụ thực tế:
   - counter
   - toggle
   - input live preview
   - login form
6. Chỉ ra lỗi phổ biến:
   - test state nội bộ thay vì nhìn UI
   - click nhưng không assert thay đổi
   - form test quá hời hợt
7. Tạo checklist interactive component testing

Dạy như mentor đang dạy junior test UI có tương tác thật.
\`\`\`

## Prompt 2 - Nhờ AI giao bài thực hành interaction testing
\`\`\`
Hãy giao cho tôi bài thực hành buổi 7:
1. test counter component
2. test toggle ẩn/hiện nội dung
3. test input hiển thị giá trị đang nhập
4. test form login có validation
5. test submit thành công/thất bại

Tôi muốn bạn:
- không cho đáp án ngay
- để tôi tự làm
- sau khi tôi gửi code, review:
  - interaction flow đã đủ chưa
  - assert có đúng chỗ không
  - validation có test đủ trường hợp không
  - test có gần trải nghiệm thật không
\`\`\`

## Prompt 3 - Nhờ AI review test UI tương tác của tôi
\`\`\`
Tôi sẽ gửi cho bạn các test component tương tác.
Bạn hãy review:
1. Tôi đã test hành vi thật của user chưa?
2. Có state change nào quan trọng bị bỏ sót không?
3. Form validation có đủ chưa?
4. Test có dễ đọc không?
5. Có bug nào vẫn dễ lọt qua bộ test này không?
\`\`\`

## Bài tập buổi này
- Viết test cho ít nhất 3 component tương tác
- Có ít nhất 1 form với validation
- Bao phủ cả success và error flow cơ bản

## Tiêu chuẩn hoàn thành
- Biết test component có state
- Biết test tương tác và form
- Bắt đầu có bộ test UI thực dụng hơn
      `
    },
    {
      id: 'test-08',
      title: 'Buổi 8: Integration testing - test nhiều phần phối hợp với nhau',
      level: 'advanced',
      content: `
# Buổi 8: Integration testing - test nhiều phần phối hợp với nhau

## Mục tiêu
- Hiểu integration test khác unit test ra sao ở thực tế
- Biết test nhiều phần phối hợp
- Biết mock API ở mức vừa đủ
- Bắt đầu test flow thật hơn của tính năng

## Prompt 1 - Nhờ AI dạy integration mindset
\`\`\`
Hãy dạy tôi Testing buổi 8 như mentor testing thực chiến.

Chủ đề:
- integration test
- component + state + API
- form + validation + submit
- list + filter + render
- mock API ở mức vừa đủ

Tôi muốn bạn dạy theo cấu trúc:
1. Integration test khác unit test ở điểm nào?
2. Khi nào integration test cho nhiều giá trị hơn unit test?
3. Vì sao integration test thường gần tính năng thật hơn?
4. Mock API nên dùng ở mức nào để test không quá giả?
5. Cho ví dụ thực tế:
   - form submit + validation + callback
   - list fetch data + render
   - search/filter flow
6. Chỉ ra lỗi phổ biến:
   - viết integration test nhưng thực ra chỉ là unit test bọc ngoài
   - mock quá sâu làm test giả tạo
   - integration test quá to và khó hiểu
7. Tạo checklist integration test tốt

Dạy như mentor đang nâng test của junior lên gần sản phẩm thật hơn.
\`\`\`

## Prompt 2 - Nhờ AI giao bài thực hành integration test
\`\`\`
Hãy giao cho tôi bài thực hành buổi 8:
1. test component danh sách có filter
2. test form submit rồi hiển thị kết quả
3. test component fetch API giả rồi render dữ liệu
4. test luồng loading -> success -> error nếu phù hợp

Tôi muốn bạn:
- không cho đáp án ngay
- để tôi tự làm
- sau khi tôi gửi code, review:
  - flow đã đủ integration chưa
  - mock có hợp lý không
  - assert có bao phủ hành vi quan trọng không
  - test có quá to hoặc quá mơ hồ không
\`\`\`

## Prompt 3 - Nhờ AI review integration quality của tôi
\`\`\`
Tôi sẽ gửi cho bạn một số integration test.
Bạn hãy review:
1. Chúng có thật sự test nhiều phần phối hợp với nhau không?
2. Mock có đang quá tay không?
3. Flow quan trọng đã được assert đủ chưa?
4. Có chỗ nào đáng lẽ nên tách thành unit test không?
5. Có chỗ nào đáng lẽ cần integration test nhưng tôi bỏ qua không?
\`\`\`

## Bài tập buổi này
- Viết ít nhất 3 integration test
- Mỗi test phải bao phủ một flow có nhiều phần phối hợp

## Tiêu chuẩn hoàn thành
- Hiểu integration test có giá trị ở đâu
- Viết được test flow thực tế hơn
- Biết mock vừa đủ
      `
    },
    {
      id: 'test-09',
      title: 'Buổi 9: E2E testing, flaky test, coverage, CI và chiến lược test thực tế',
      level: 'advanced',
      content: `
# Buổi 9: E2E testing, flaky test, coverage, CI và chiến lược test thực tế

## Mục tiêu
- Hiểu E2E test là gì và khi nào đáng dùng
- Hiểu flaky test là gì
- Hiểu coverage là chỉ số tham khảo, không phải mục tiêu duy nhất
- Hiểu CI giúp test bảo vệ team thế nào
- Biết xây chiến lược test thực tế

## Prompt 1 - Nhờ AI dạy test strategy thực chiến
\`\`\`
Hãy dạy tôi Testing buổi 9 như mentor quality engineering.

Chủ đề:
- E2E test
- Playwright/Cypress ở mức khái niệm
- flaky test
- coverage
- CI
- test strategy
- testing pyramid trong thực tế

Tôi muốn bạn dạy theo cấu trúc:
1. E2E test là gì?
2. Khi nào E2E rất đáng giá?
3. Vì sao không nên lạm dụng E2E?
4. Flaky test là gì và vì sao team rất ghét?
5. Coverage giúp gì và không giúp gì?
6. Vì sao coverage cao chưa chắc test tốt?
7. CI giúp gì cho chất lượng team?
8. Làm sao phân bổ unit/integration/E2E trong dự án thật?
9. Cho ví dụ chiến lược test cho:
   - app blog
   - app bán hàng
   - dashboard nội bộ
10. Chỉ ra lỗi phổ biến:
   - chạy theo % coverage
   - quá nhiều E2E
   - test không ổn định
11. Tạo checklist test strategy thực tế

Dạy như mentor đang thiết kế test strategy cho team nhỏ.
\`\`\`

## Prompt 2 - Nhờ AI luyện xây test strategy
\`\`\`
Tôi muốn luyện cách chọn chiến lược test.

Hãy cho tôi 6 ứng dụng, ví dụ:
- blog mini
- app bán hàng
- dashboard admin
- app học online
- form đăng ký nhiều bước
- todo app có sync dữ liệu

Với mỗi ứng dụng:
1. hỏi tôi nên ưu tiên unit/integration/E2E thế nào
2. hỏi tôi flow nào phải có E2E
3. hỏi tôi nơi nào coverage quan trọng hơn
4. hỏi tôi chỗ nào dễ sinh flaky test
5. sau đó bạn mới chữa
\`\`\`

## Prompt 3 - Nhờ AI review chiến lược test của tôi
\`\`\`
Tôi sẽ gửi cho bạn test strategy của tôi cho một ứng dụng.
Bạn hãy review:
1. Phân bổ unit/integration/E2E có hợp lý không?
2. Có chỗ nào đang lãng phí effort không?
3. Flow quan trọng có đang thiếu E2E không?
4. Có dấu hiệu chạy theo coverage không?
5. Nếu đưa vào CI, phần nào nên bắt buộc chạy trước merge?
\`\`\`

## Bài tập buổi này
- Thiết kế test strategy cho 2 ứng dụng khác nhau
- Nêu rõ flow nào cần unit, integration, E2E
- Viết policy ngắn cho coverage/flaky/CI

## Tiêu chuẩn hoàn thành
- Hiểu chiến lược test thực tế
- Không thần thánh hóa coverage
- Biết E2E nên dùng ít nhưng đúng chỗ
      `
    },
    {
      id: 'test-10',
      title: 'Buổi 10: Project cuối khóa - xây bộ test thực tế cho một ứng dụng nhỏ',
      level: 'advanced',
      content: `
# Buổi 10: Project cuối khóa - xây bộ test thực tế cho một ứng dụng nhỏ

## Mục tiêu
- Tổng hợp toàn bộ kiến thức testing đã học
- Hoàn thiện bộ test có chiến lược cho một app nhỏ
- Tự review chất lượng test của mình
- Tự đánh giá mức độ sẵn sàng áp dụng testing trong dự án thật

## Prompt 1 - Nhờ AI dẫn tôi làm project từ đầu
\`\`\`
Hãy đóng vai mentor Testing và dẫn tôi làm project cuối khóa.

Cho tôi chọn 1 trong các project:
1. Todo app
2. Form đăng nhập / đăng ký
3. Product list có tìm kiếm
4. Counter + settings + persistence
5. Blog mini có danh sách và chi tiết

Sau khi tôi chọn, hãy dẫn tôi theo lộ trình:
1. phân tích tính năng chính
2. xác định hành vi quan trọng nhất cần test
3. xác định phần nào nên là unit test
4. xác định phần nào nên là integration test
5. xác định có cần E2E không, nếu có thì flow nào
6. để tôi tự viết từng phần test
7. sau mỗi phần, review rất kỹ như mentor
8. cuối cùng, giúp tôi audit toàn bộ bộ test

Mục tiêu là để tôi thật sự biết xây một test suite nhỏ nhưng có giá trị.
\`\`\`

## Prompt 2 - Nhờ AI audit project cuối khóa
\`\`\`
Tôi sẽ gửi cho bạn bộ test cuối khóa của tôi.
Bạn hãy audit như mentor testing kỹ tính.

Đánh giá theo 8 nhóm tiêu chí:
1. Chọn đúng hành vi cần test
2. Chất lượng unit test
3. Chất lượng integration test
4. E2E test nếu có
5. Tên test và readability
6. Edge case coverage
7. Mock/async handling
8. Mức độ tự tin bộ test mang lại khi refactor

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
Hãy đóng vai reviewer cuối khóa về Testing.

Tôi sẽ gửi test suite của tôi.
Bạn phải review như thật, không nể nang.

Cách review mong muốn:
- đánh giá tư duy chọn thứ cần test
- đánh giá chất lượng từng cấp độ test
- đánh giá readability và maintainability
- đánh giá mức độ thực dụng của test
- chỉ rõ điểm nào chứng tỏ tôi đã hiểu testing mindset
- chỉ rõ điểm nào cho thấy tôi vẫn đang viết test theo kiểu đối phó

Cuối cùng, hãy nói thật:
- tôi đã đủ nền tảng để áp dụng testing vào dự án thật chưa?
- nếu chưa, tôi cần luyện thêm phần nào?
\`\`\`

## Gợi ý project
Chọn 1 trong các project:
1. Todo app
2. Form đăng nhập / đăng ký
3. Product list có tìm kiếm
4. Counter + settings + persistence
5. Blog mini có danh sách và chi tiết

## Yêu cầu bắt buộc
- Có ít nhất 5 unit test
- Có ít nhất 2 integration test
- Có ít nhất 1 E2E test nếu phù hợp
- Có mock hoặc fake data
- Có test cho cả success flow và error/edge case
- Có chiến lược rõ ràng vì sao mỗi test thuộc cấp độ đó

## Checklist tự đánh giá
- Tên test có rõ ràng không?
- Test có tập trung vào hành vi quan trọng không?
- Có phụ thuộc implementation detail quá nhiều không?
- Có đủ edge case quan trọng không?
- Bộ test có giúp bạn tự tin refactor không?
- Có test nào dư thừa hoặc ít giá trị không?

## Bài tập cuối khóa
- Hoàn thành bộ test cho project
- Tự audit bằng AI theo các prompt trên
- Rà soát lại test thừa và test thiếu
- Hoàn thiện phiên bản final đến khi đủ chắc
      `
    }
  ]
};