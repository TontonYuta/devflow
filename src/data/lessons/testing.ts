import { Lesson } from '../../types';

export const testingLesson: Lesson = {
  id: 'testing-mastery',
  icon: 'test-tube',
  title: 'Kiểm thử (Testing)',
  description:
    'Lộ trình 20 buổi học Testing từ cơ bản đến chuyên sâu, chia nhỏ dễ học, có bài tập thực hành và mini project để giúp người học tự tin kiểm tra code, tránh bug và nâng cấp hệ thống an toàn hơn.',
  points: [
    'Hiểu tư duy kiểm thử và các cấp độ test quan trọng',
    'Nắm chắc unit test, integration test và E2E test',
    'Biết test hàm JavaScript/TypeScript với Vitest hoặc Jest',
    'Biết test React component với React Testing Library',
    'Biết xây chiến lược test thực tế với mock, coverage và CI'
  ],
  chapters: [
    {
      id: 'test-01',
      title: 'Buổi 1: Testing là gì? Vì sao phải viết test?',
      level: 'beginner',
      content: `
# Buổi 1: Testing là gì? Vì sao phải viết test?

## Mục tiêu
- Hiểu testing là gì
- Biết vì sao dự án càng lớn càng cần test
- Hiểu testing giúp giảm rủi ro như thế nào

## Nội dung chính
- Test là code dùng để kiểm tra code
- Test giúp phát hiện lỗi sớm
- Test giúp tự tin khi sửa hoặc nâng cấp hệ thống
- Test giảm việc phải bấm tay lặp đi lặp lại

## Ví dụ
\`\`\`text
Nếu sửa hàm tính tiền mà không có test,
bạn có thể vô tình làm sai giảm giá, tổng tiền hoặc thuế.
\`\`\`

## Bài tập luyện tập
1. Nêu 3 lợi ích của việc viết test
2. Nêu 3 rủi ro khi không có test
3. Mô tả một bug mà test có thể giúp phát hiện sớm

## Bài tập thử thách
- Viết một đoạn ngắn giải thích vì sao test không phải là “việc thừa”
      `
    },
    {
      id: 'test-02',
      title: 'Buổi 2: Các loại test quan trọng trong dự án',
      level: 'beginner',
      content: `
# Buổi 2: Các loại test quan trọng trong dự án

## Mục tiêu
- Phân biệt unit, integration và E2E test
- Hiểu mỗi loại test dùng để làm gì
- Biết khi nào nên dùng từng loại

## Nội dung chính
- Unit Test
- Integration Test
- E2E Test
- Test kim tự tháp (testing pyramid) ở mức cơ bản

## Ví dụ
\`\`\`text
Unit Test: kiểm tra hàm tính tổng
Integration Test: kiểm tra form + validation + submit
E2E Test: mở trình duyệt, đăng nhập, chuyển trang, xác nhận kết quả
\`\`\`

## Bài tập luyện tập
1. Phân loại 5 ví dụ test vào đúng nhóm
2. Nêu ưu và nhược điểm của từng loại
3. Chọn loại test phù hợp cho một trang đăng nhập

## Bài tập thử thách
- Phân tích một app blog nhỏ và liệt kê test nào nên là unit, test nào nên là E2E
      `
    },
    {
      id: 'test-03',
      title: 'Buổi 3: Tư duy viết test tốt',
      level: 'beginner',
      content: `
# Buổi 3: Tư duy viết test tốt

## Mục tiêu
- Hiểu test tốt không chỉ là test chạy xanh
- Biết test hành vi quan trọng thay vì test vụn vặt
- Hiểu nguyên tắc Arrange - Act - Assert

## Nội dung chính
- Test cái gì quan trọng với người dùng hoặc hệ thống
- Tránh test những thứ quá nhỏ, dễ vỡ mà ít giá trị
- Mô hình Arrange - Act - Assert
- Tên test rõ ràng

## Ví dụ
\`\`\`text
Arrange: chuẩn bị dữ liệu
Act: gọi hàm hoặc tương tác
Assert: kiểm tra kết quả
\`\`\`

## Bài tập luyện tập
1. Viết lại 3 tên test cho rõ ràng hơn
2. Chia một test đơn giản thành Arrange, Act, Assert
3. Nêu 2 ví dụ test có giá trị và 2 ví dụ test ít giá trị

## Bài tập thử thách
- Phân tích một component nhỏ và chọn 3 hành vi đáng test nhất
      `
    },
    {
      id: 'test-04',
      title: 'Buổi 4: Cài môi trường test với Vitest hoặc Jest',
      level: 'beginner',
      content: `
# Buổi 4: Cài môi trường test với Vitest hoặc Jest

## Mục tiêu
- Biết cài môi trường test cơ bản
- Chạy được test đầu tiên
- Hiểu file test thường được đặt thế nào

## Nội dung chính
- Vitest hoặc Jest là gì
- File test thường có đuôi:
  - \`.test.js\`
  - \`.spec.js\`
  - \`.test.ts\`
- Lệnh chạy test
- Chạy một file test đầu tiên

## Ví dụ
\`\`\`javascript
import { describe, it, expect } from 'vitest';

describe('Demo', () => {
  it('chạy được test đầu tiên', () => {
    expect(1 + 1).toBe(2);
  });
});
\`\`\`

## Bài tập luyện tập
1. Cài môi trường test
2. Tạo file test đầu tiên
3. Chạy lệnh test và xem kết quả

## Bài tập thử thách
- Tạo một project nhỏ có 2 file code và 2 file test tương ứng
      `
    },
    {
      id: 'test-05',
      title: 'Buổi 5: Assertion cơ bản với expect',
      level: 'beginner',
      content: `
# Buổi 5: Assertion cơ bản với expect

## Mục tiêu
- Biết assertion là gì
- Biết dùng các matcher phổ biến
- Kiểm tra kết quả đúng sai rõ ràng

## Nội dung chính
- \`toBe\`
- \`toEqual\`
- \`toContain\`
- \`toBeTruthy\`
- \`toBeFalsy\`
- \`toThrow\`

## Ví dụ
\`\`\`javascript
expect(2 + 3).toBe(5);
expect(['HTML', 'CSS']).toContain('CSS');
\`\`\`

## Bài tập luyện tập
1. Viết test cho phép cộng
2. Viết test kiểm tra mảng có chứa phần tử
3. Viết test kiểm tra một hàm ném lỗi

## Bài tập thử thách
- Tạo một file test dùng ít nhất 5 matcher khác nhau
      `
    },
    {
      id: 'test-06',
      title: 'Buổi 6: Unit Test cho hàm JavaScript đơn giản',
      level: 'beginner',
      content: `
# Buổi 6: Unit Test cho hàm JavaScript đơn giản

## Mục tiêu
- Biết test một hàm độc lập
- Hiểu input và output trong unit test
- Viết test cho nhiều trường hợp khác nhau

## Nội dung chính
- Hàm cộng, trừ, kiểm tra số chẵn
- Test dữ liệu bình thường
- Test dữ liệu biên
- Test dữ liệu sai

## Ví dụ
\`\`\`javascript
function tinhTong(a, b) {
  return a + b;
}
\`\`\`

## Bài tập luyện tập
1. Test hàm tính tổng
2. Test hàm kiểm tra số chẵn
3. Test hàm đổi chuỗi thành chữ hoa

## Bài tập thử thách
- Viết test cho hàm tính điểm trung bình có xử lý dữ liệu không hợp lệ
      `
    },
    {
      id: 'test-07',
      title: 'Buổi 7: Test case, edge case và dữ liệu biên',
      level: 'beginner',
      content: `
# Buổi 7: Test case, edge case và dữ liệu biên

## Mục tiêu
- Hiểu không chỉ test “trường hợp đẹp”
- Biết nghĩ tới edge case
- Tăng độ chắc chắn cho test

## Nội dung chính
- Trường hợp thông thường
- Trường hợp rỗng
- Trường hợp âm
- Trường hợp null, undefined
- Dữ liệu biên

## Ví dụ
\`\`\`text
Hàm chia:
- 10 / 2
- 0 / 5
- 5 / 0
- -10 / 2
\`\`\`

## Bài tập luyện tập
1. Liệt kê test case cho hàm kiểm tra mật khẩu
2. Liệt kê edge case cho hàm tính tuổi
3. Viết test cho dữ liệu rỗng và sai kiểu

## Bài tập thử thách
- Chọn một hàm bạn từng viết và bổ sung thêm 5 edge case
      `
    },
    {
      id: 'test-08',
      title: 'Buổi 8: Test với TypeScript',
      level: 'intermediate',
      content: `
# Buổi 8: Test với TypeScript

## Mục tiêu
- Biết test code TypeScript
- Hiểu lợi ích type-safe trong test
- Viết test rõ ràng hơn với dữ liệu có kiểu

## Nội dung chính
- File test \`.test.ts\`
- Type cho input test
- Type cho mock data
- Kết hợp TypeScript với Vitest hoặc Jest

## Ví dụ
\`\`\`typescript
type User = {
  id: number;
  name: string;
};
\`\`\`

## Bài tập luyện tập
1. Tạo một hàm TypeScript và test nó
2. Tạo mock data có type rõ ràng
3. Test một hàm xử lý object kiểu TypeScript

## Bài tập thử thách
- Viết test cho hàm lọc danh sách sản phẩm typed bằng TypeScript
      `
    },
    {
      id: 'test-09',
      title: 'Buổi 9: Mock function và spy',
      level: 'intermediate',
      content: `
# Buổi 9: Mock function và spy

## Mục tiêu
- Hiểu mock function là gì
- Biết kiểm tra hàm có được gọi hay không
- Biết kiểm tra gọi bao nhiêu lần và với dữ liệu gì

## Nội dung chính
- Mock function
- Spy
- \`toHaveBeenCalled\`
- \`toHaveBeenCalledTimes\`
- \`toHaveBeenCalledWith\`

## Ví dụ
\`\`\`javascript
const onSave = vi.fn();
onSave('hello');

expect(onSave).toHaveBeenCalledWith('hello');
\`\`\`

## Bài tập luyện tập
1. Tạo một mock function
2. Kiểm tra hàm được gọi 1 lần
3. Kiểm tra hàm được gọi với đúng tham số

## Bài tập thử thách
- Test một hàm callback trong component hoặc utility function
      `
    },
    {
      id: 'test-10',
      title: 'Buổi 10: Mock module, API và thời gian',
      level: 'intermediate',
      content: `
# Buổi 10: Mock module, API và thời gian

## Mục tiêu
- Biết mock những thứ phụ thuộc bên ngoài
- Không để test phụ thuộc vào API thật
- Biết test code có timeout hoặc timer

## Nội dung chính
- Mock API
- Mock module
- Fake timers
- Test async code mà không chờ quá lâu

## Ví dụ
\`\`\`javascript
vi.useFakeTimers();
\`\`\`

## Bài tập luyện tập
1. Mock một hàm gọi API
2. Test hàm dùng \`setTimeout\`
3. Mock module tiện ích đơn giản

## Bài tập thử thách
- Test một hàm tải dữ liệu giả lập thành công và thất bại
      `
    },
    {
      id: 'test-11',
      title: 'Buổi 11: Kiểm thử bất đồng bộ',
      level: 'intermediate',
      content: `
# Buổi 11: Kiểm thử bất đồng bộ

## Mục tiêu
- Biết test Promise và async/await
- Hiểu vì sao test async dễ sai nếu viết thiếu await
- Biết kiểm tra kết quả thành công và lỗi

## Nội dung chính
- Test Promise
- \`async/await\` trong test
- Kiểm tra reject và throw
- Chờ dữ liệu trả về đúng cách

## Ví dụ
\`\`\`javascript
it('lấy dữ liệu thành công', async () => {
  const result = await fetchUser();
  expect(result.name).toBe('An');
});
\`\`\`

## Bài tập luyện tập
1. Test một hàm async trả về object
2. Test một hàm async ném lỗi
3. Test nhiều trường hợp thành công/thất bại

## Bài tập thử thách
- Viết test cho hàm login giả lập có delay và trả token
      `
    },
    {
      id: 'test-12',
      title: 'Buổi 12: React Testing Library - tư duy test UI',
      level: 'intermediate',
      content: `
# Buổi 12: React Testing Library - tư duy test UI

## Mục tiêu
- Hiểu triết lý của React Testing Library
- Biết test theo cách người dùng nhìn và dùng giao diện
- Tránh test implementation detail quá sâu

## Nội dung chính
- Render component
- Query theo text, role, label
- Test theo hành vi người dùng
- Ưu tiên cách truy vấn gần với trải nghiệm thật

## Ví dụ
\`\`\`tsx
render(<Counter />);
screen.getByRole('button', { name: 'Tăng' });
\`\`\`

## Bài tập luyện tập
1. Render một component đơn giản
2. Tìm một nút theo role
3. Tìm một đoạn text trên giao diện

## Bài tập thử thách
- Viết test cho một card sản phẩm hiển thị đúng tên và giá
      `
    },
    {
      id: 'test-13',
      title: 'Buổi 13: Test state và event trong React component',
      level: 'intermediate',
      content: `
# Buổi 13: Test state và event trong React component

## Mục tiêu
- Biết test component có state
- Biết giả lập click và input
- Kiểm tra UI thay đổi sau tương tác

## Nội dung chính
- \`fireEvent\` hoặc cách tương tác người dùng
- Click button
- Gõ input
- Kiểm tra số đếm hoặc text thay đổi

## Ví dụ
\`\`\`tsx
fireEvent.click(buttonElement);
expect(screen.getByText('Số lần bấm: 1')).toBeInTheDocument();
\`\`\`

## Bài tập luyện tập
1. Test counter component
2. Test input hiển thị đúng giá trị đang nhập
3. Test nút ẩn/hiện nội dung

## Bài tập thử thách
- Tạo component tab đơn giản và test chuyển tab
      `
    },
    {
      id: 'test-14',
      title: 'Buổi 14: Test form, validation và thông báo lỗi',
      level: 'advanced',
      content: `
# Buổi 14: Test form, validation và thông báo lỗi

## Mục tiêu
- Biết test form React
- Kiểm tra validation hoạt động đúng
- Biết test thông báo lỗi và submit thành công

## Nội dung chính
- Form input
- Submit event
- Validation required
- Hiển thị message lỗi
- Kiểm tra hàm submit được gọi đúng

## Ví dụ
\`\`\`text
Người dùng bấm submit khi email trống
-> hiển thị lỗi "Email không được để trống"
\`\`\`

## Bài tập luyện tập
1. Test form đăng nhập với email rỗng
2. Test mật khẩu quá ngắn
3. Test submit thành công

## Bài tập thử thách
- Tạo và test form đăng ký có 3 trường, 3 loại lỗi khác nhau
      `
    },
    {
      id: 'test-15',
      title: 'Buổi 15: Integration Test - kiểm tra nhiều phần phối hợp với nhau',
      level: 'advanced',
      content: `
# Buổi 15: Integration Test - kiểm tra nhiều phần phối hợp với nhau

## Mục tiêu
- Hiểu integration test khác unit test ra sao
- Biết test luồng gồm nhiều phần kết hợp
- Tăng độ tin cậy cho tính năng thực tế hơn

## Nội dung chính
- Component + state + API mock
- Form + validation + submit
- Danh sách + filter + render
- Luồng tương tác nhiều bước

## Ví dụ
\`\`\`text
Test một trang:
- nhập từ khóa
- bấm tìm kiếm
- hiển thị kết quả
\`\`\`

## Bài tập luyện tập
1. Test danh sách có bộ lọc
2. Test form gửi dữ liệu rồi hiện kết quả
3. Test component gọi API giả và render dữ liệu

## Bài tập thử thách
- Tạo integration test cho mini todo app
      `
    },
    {
      id: 'test-16',
      title: 'Buổi 16: E2E Testing với Playwright hoặc Cypress',
      level: 'advanced',
      content: `
# Buổi 16: E2E Testing với Playwright hoặc Cypress

## Mục tiêu
- Hiểu E2E test là gì
- Biết khi nào nên dùng E2E
- Làm quen với công cụ test ở mức trình duyệt thật

## Nội dung chính
- E2E test mô phỏng người dùng thật
- Truy cập trang
- Điền form
- Bấm nút
- Kiểm tra URL và nội dung sau hành động

## Ví dụ
\`\`\`javascript
await page.goto('/login');
await page.fill('input[name="email"]', 'test@example.com');
await page.click('button[type="submit"]');
\`\`\`

## Bài tập luyện tập
1. Viết E2E test mở trang chủ
2. Test luồng đăng nhập đơn giản
3. Kiểm tra chuyển trang sau submit

## Bài tập thử thách
- Viết E2E test cho luồng tạo một công việc mới trong todo app
      `
    },
    {
      id: 'test-17',
      title: 'Buổi 17: Test chiến lược cho frontend và backend',
      level: 'advanced',
      content: `
# Buổi 17: Test chiến lược cho frontend và backend

## Mục tiêu
- Biết phân bổ test hợp lý trong dự án
- Không lạm dụng E2E
- Biết nơi nào nên test kỹ hơn

## Nội dung chính
- Unit test nhiều
- Integration test vừa phải
- E2E test ít nhưng đúng chỗ
- Test logic backend
- Test UI và luồng người dùng

## Ví dụ
\`\`\`text
Frontend:
- test component
- test form
- test route quan trọng

Backend:
- test service
- test validation
- test auth logic
\`\`\`

## Bài tập luyện tập
1. Chọn chiến lược test cho app blog
2. Chọn chiến lược test cho app bán hàng
3. Phân bổ loại test cho một tính năng login

## Bài tập thử thách
- Viết kế hoạch test ngắn cho app học online của bạn
      `
    },
    {
      id: 'test-18',
      title: 'Buổi 18: Coverage, chất lượng test và test flakiness',
      level: 'advanced',
      content: `
# Buổi 18: Coverage, chất lượng test và test flakiness

## Mục tiêu
- Hiểu coverage là gì
- Biết coverage cao chưa chắc test tốt
- Biết nhận diện test dễ lỗi vặt

## Nội dung chính
- Test coverage
- Chất lượng test quan trọng hơn số lượng
- Test flaky là gì
- Viết test ổn định hơn
- Tránh phụ thuộc thời gian, mạng thật, dữ liệu không ổn định

## Ví dụ
\`\`\`text
Coverage 100% nhưng chỉ test cho chạy qua code
-> vẫn có thể không bắt được bug quan trọng
\`\`\`

## Bài tập luyện tập
1. Giải thích coverage bằng lời của bạn
2. Nêu 3 dấu hiệu của test kém chất lượng
3. Nêu 3 nguyên nhân làm test flaky

## Bài tập thử thách
- Phân tích một test dễ hỏng và đề xuất cách sửa ổn định hơn
      `
    },
    {
      id: 'test-19',
      title: 'Buổi 19: Tự động chạy test với CI',
      level: 'advanced',
      content: `
# Buổi 19: Tự động chạy test với CI

## Mục tiêu
- Hiểu vì sao nên chạy test tự động khi push code
- Biết khái niệm CI ở mức cơ bản
- Hiểu test trong pull request giúp team an toàn hơn

## Nội dung chính
- CI là gì
- Chạy test khi push hoặc mở PR
- Fail build khi test lỗi
- Vai trò của pipeline kiểm tra chất lượng

## Ví dụ
\`\`\`text
Push code
-> CI chạy test
-> nếu test fail thì chưa nên merge
\`\`\`

## Bài tập luyện tập
1. Mô tả luồng CI đơn giản
2. Giải thích vì sao test nên chạy trong pull request
3. Nêu lợi ích của tự động hóa test

## Bài tập thử thách
- Thiết kế quy trình kiểm tra code trước khi merge cho team nhỏ
      `
    },
    {
      id: 'test-20',
      title: 'Buổi 20: Mini Project và dự án cuối khóa Testing',
      level: 'advanced',
      content: `
# Buổi 20: Mini Project và dự án cuối khóa Testing

## Mục tiêu
- Kết hợp toàn bộ kiến thức testing đã học
- Tạo bộ test cho một app nhỏ
- Tự đánh giá mức độ làm chủ testing

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
- Có ít nhất 1 E2E test cho luồng quan trọng
- Có mock hoặc fake data
- Có test cho cả trường hợp thành công và lỗi

## Checklist tự đánh giá
- Tên test có rõ ràng không?
- Test có tập trung vào hành vi quan trọng không?
- Có quá phụ thuộc implementation detail không?
- Có đủ test cho các edge case quan trọng không?
- Bộ test có giúp bạn tự tin refactor không?

## Bài tập cuối khóa
- Hoàn thành bộ test cho project
- Tự rà soát test thừa và test thiếu
- Viết ghi chú: phần nào của testing bạn đã hiểu chắc, phần nào cần luyện thêm
      `
    }
  ]
};