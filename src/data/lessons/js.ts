import { Lesson } from '../../types';

export const jsLesson: Lesson = {
  id: 'js-mastery',
  icon: 'cpu',
  title: 'JavaScript',
  description:
    'Lộ trình 20 buổi học JavaScript từ cơ bản đến chuyên sâu, chia nhỏ dễ học, có bài tập thực hành và mini project để giúp người mới làm chủ JavaScript một cách chắc chắn.',
  points: [
    'Hiểu JavaScript là gì và cách hoạt động trong trang web',
    'Nắm chắc biến, kiểu dữ liệu, điều kiện, vòng lặp, hàm',
    'Làm việc với mảng, object, DOM và sự kiện',
    'Biết localStorage, async/await, fetch API',
    'Có bài tập và project để luyện tư duy lập trình thực tế'
  ],
  chapters: [
    {
      id: 'js-01',
      title: 'Buổi 1: JavaScript là gì? Cách thêm JavaScript vào HTML',
      level: 'beginner',
      content: `
# Buổi 1: JavaScript là gì? Cách thêm JavaScript vào HTML

## Mục tiêu
- Hiểu JavaScript là gì
- Biết JavaScript dùng để làm gì
- Biết 2 cách thêm JavaScript vào trang web

## Nội dung chính
- JavaScript là ngôn ngữ lập trình cho web
- JS giúp trang web tương tác và xử lý dữ liệu
- Viết JS trực tiếp trong HTML
- Nối file JS ngoài vào HTML
- Cách mở console để xem kết quả

## Ví dụ
\`\`\`html
<script>
  console.log('Xin chào JavaScript');
</script>
\`\`\`

\`\`\`html
<script src="script.js"></script>
\`\`\`

## Bài tập luyện tập
1. Tạo file \`script.js\`
2. Kết nối file JS với HTML
3. In ra dòng chữ "Tôi đang học JavaScript" trong console

## Bài tập thử thách
- Tạo 3 lệnh \`console.log()\` khác nhau để kiểm tra file JS đã chạy
      `
    },
    {
      id: 'js-02',
      title: 'Buổi 2: Biến và cách lưu dữ liệu',
      level: 'beginner',
      content: `
# Buổi 2: Biến và cách lưu dữ liệu

## Mục tiêu
- Hiểu biến là gì
- Biết dùng \`let\` và \`const\`
- Biết khi nào nên dùng mỗi loại

## Nội dung chính
- Biến giống như chiếc hộp để lưu dữ liệu
- \`let\`: có thể thay đổi
- \`const\`: không gán lại giá trị mới
- Cách đặt tên biến rõ nghĩa

## Ví dụ
\`\`\`javascript
let tuoi = 20;
tuoi = 21;

const ten = 'An';
\`\`\`

## Bài tập luyện tập
1. Tạo biến lưu tên, tuổi, nghề nghiệp
2. Đổi giá trị của một biến dùng \`let\`
3. Tạo một biến bằng \`const\` và thử gán lại để xem điều gì xảy ra

## Bài tập thử thách
- Tạo 5 biến mô tả thông tin cá nhân và in ra bằng \`console.log()\`
      `
    },
    {
      id: 'js-03',
      title: 'Buổi 3: Kiểu dữ liệu cơ bản',
      level: 'beginner',
      content: `
# Buổi 3: Kiểu dữ liệu cơ bản

## Mục tiêu
- Hiểu các kiểu dữ liệu phổ biến
- Biết phân biệt số, chuỗi, boolean
- Biết dùng \`typeof\`

## Nội dung chính
- Number
- String
- Boolean
- Null
- Undefined
- Kiểm tra kiểu dữ liệu bằng \`typeof\`

## Ví dụ
\`\`\`javascript
const gia = 100;
const ten = 'Bút chì';
const conHang = true;

console.log(typeof gia); // number
console.log(typeof ten); // string
console.log(typeof conHang); // boolean
\`\`\`

## Bài tập luyện tập
1. Tạo 5 biến với 5 kiểu dữ liệu khác nhau
2. Dùng \`typeof\` để kiểm tra từng biến
3. Phân biệt \`null\` và \`undefined\`

## Bài tập thử thách
- Tạo một danh sách biến mô tả một sản phẩm và kiểm tra kiểu dữ liệu của từng biến
      `
    },
    {
      id: 'js-04',
      title: 'Buổi 4: Toán tử và phép so sánh',
      level: 'beginner',
      content: `
# Buổi 4: Toán tử và phép so sánh

## Mục tiêu
- Biết cộng, trừ, nhân, chia trong JS
- Biết so sánh 2 giá trị
- Hiểu kết quả true và false

## Nội dung chính
- Toán tử số học: \`+\`, \`-\`, \`*\`, \`/\`, \`%\`
- Toán tử gán
- Toán tử so sánh:
  - \`>\`
  - \`<\`
  - \`>=\`
  - \`<=\`
  - \`===\`
  - \`!==\`

## Ví dụ
\`\`\`javascript
const tong = 10 + 5;
const kiemTra = 20 > 10;

console.log(tong); // 15
console.log(kiemTra); // true
\`\`\`

## Bài tập luyện tập
1. Tính tổng 2 số
2. Kiểm tra tuổi có đủ 18 không
3. So sánh 2 giá trị bằng \`===\`

## Bài tập thử thách
- Viết chương trình nhỏ tính điểm trung bình của 3 môn
      `
    },
    {
      id: 'js-05',
      title: 'Buổi 5: Câu điều kiện if, else, else if',
      level: 'beginner',
      content: `
# Buổi 5: Câu điều kiện if, else, else if

## Mục tiêu
- Hiểu chương trình ra quyết định như thế nào
- Biết dùng \`if\`, \`else\`, \`else if\`
- Tạo logic đơn giản

## Nội dung chính
- Nếu đúng thì làm gì
- Nếu sai thì làm gì
- Nhiều nhánh điều kiện

## Ví dụ
\`\`\`javascript
const tuoi = 18;

if (tuoi >= 18) {
  console.log('Bạn đã đủ tuổi');
} else {
  console.log('Bạn chưa đủ tuổi');
}
\`\`\`

## Bài tập luyện tập
1. Kiểm tra số dương hay âm
2. Kiểm tra học sinh đậu hay rớt
3. Phân loại điểm: giỏi, khá, trung bình

## Bài tập thử thách
- Viết chương trình kiểm tra một người có được giảm giá vé hay không
      `
    },
    {
      id: 'js-06',
      title: 'Buổi 6: Vòng lặp và cách lặp lại công việc',
      level: 'beginner',
      content: `
# Buổi 6: Vòng lặp và cách lặp lại công việc

## Mục tiêu
- Hiểu vì sao cần vòng lặp
- Biết dùng \`for\` và \`while\`
- Biết lặp theo số lần xác định

## Nội dung chính
- Vòng lặp \`for\`
- Vòng lặp \`while\`
- Biến đếm
- \`break\` và \`continue\` cơ bản

## Ví dụ
\`\`\`javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
\`\`\`

## Bài tập luyện tập
1. In các số từ 1 đến 10
2. In các số chẵn từ 1 đến 20
3. Tính tổng các số từ 1 đến 100

## Bài tập thử thách
- Viết chương trình in bảng cửu chương của số 5
      `
    },
    {
      id: 'js-07',
      title: 'Buổi 7: Hàm - đóng gói và tái sử dụng code',
      level: 'beginner',
      content: `
# Buổi 7: Hàm - đóng gói và tái sử dụng code

## Mục tiêu
- Hiểu hàm là gì
- Biết tạo hàm và gọi hàm
- Biết truyền tham số

## Nội dung chính
- Khai báo hàm
- Gọi hàm
- Tham số
- Giá trị trả về với \`return\`

## Ví dụ
\`\`\`javascript
function tinhTong(a, b) {
  return a + b;
}

console.log(tinhTong(3, 4));
\`\`\`

## Bài tập luyện tập
1. Viết hàm chào người dùng
2. Viết hàm tính tổng 2 số
3. Viết hàm kiểm tra số chẵn

## Bài tập thử thách
- Viết hàm tính tiền sau khi giảm giá
      `
    },
    {
      id: 'js-08',
      title: 'Buổi 8: Chuỗi và xử lý văn bản',
      level: 'beginner',
      content: `
# Buổi 8: Chuỗi và xử lý văn bản

## Mục tiêu
- Biết làm việc với text trong JavaScript
- Biết nối chuỗi và chèn biến vào chuỗi
- Biết vài phương thức chuỗi phổ biến

## Nội dung chính
- String
- Nối chuỗi bằng \`+\`
- Template string với \`\`
- \`length\`
- \`toUpperCase()\`
- \`toLowerCase()\`
- \`trim()\`

## Ví dụ
\`\`\`javascript
const ten = 'Lan';
console.log(\`Xin chào \${ten}\`);
\`\`\`

## Bài tập luyện tập
1. Tạo câu chào bằng template string
2. Đếm số ký tự trong một chuỗi
3. Chuyển một chuỗi thành chữ hoa
4. Xóa khoảng trắng đầu và cuối chuỗi

## Bài tập thử thách
- Viết chương trình chuẩn hóa tên người dùng trước khi hiển thị
      `
    },
    {
      id: 'js-09',
      title: 'Buổi 9: Mảng và danh sách dữ liệu',
      level: 'intermediate',
      content: `
# Buổi 9: Mảng và danh sách dữ liệu

## Mục tiêu
- Hiểu mảng là gì
- Biết lưu nhiều giá trị trong một biến
- Biết lấy, thêm, sửa phần tử

## Nội dung chính
- Tạo mảng
- Truy cập phần tử theo chỉ số
- \`push()\`
- \`pop()\`
- \`length\`

## Ví dụ
\`\`\`javascript
const monHoc = ['HTML', 'CSS', 'JavaScript'];

console.log(monHoc[0]);
monHoc.push('React');
\`\`\`

## Bài tập luyện tập
1. Tạo mảng chứa 5 món ăn yêu thích
2. In phần tử đầu tiên và cuối cùng
3. Thêm một phần tử mới
4. Xóa phần tử cuối

## Bài tập thử thách
- Tạo danh sách việc cần làm bằng mảng và thao tác thêm/xóa dữ liệu
      `
    },
    {
      id: 'js-10',
      title: 'Buổi 10: Object - lưu dữ liệu có cấu trúc',
      level: 'intermediate',
      content: `
# Buổi 10: Object - lưu dữ liệu có cấu trúc

## Mục tiêu
- Hiểu object là gì
- Biết lưu dữ liệu theo cặp key-value
- Biết truy cập và cập nhật thuộc tính

## Nội dung chính
- Tạo object
- Truy cập bằng dấu chấm
- Truy cập bằng ngoặc vuông
- Thêm và sửa thuộc tính

## Ví dụ
\`\`\`javascript
const user = {
  name: 'Nam',
  age: 22,
  isAdmin: false
};

console.log(user.name);
user.age = 23;
\`\`\`

## Bài tập luyện tập
1. Tạo object mô tả bản thân
2. In ra tên và tuổi
3. Thêm thuộc tính nghề nghiệp
4. Cập nhật tuổi mới

## Bài tập thử thách
- Tạo object sản phẩm gồm tên, giá, số lượng, trạng thái còn hàng
      `
    },
    {
      id: 'js-11',
      title: 'Buổi 11: Kết hợp mảng, object và vòng lặp',
      level: 'intermediate',
      content: `
# Buổi 11: Kết hợp mảng, object và vòng lặp

## Mục tiêu
- Biết xử lý danh sách object
- Biết duyệt qua dữ liệu thực tế hơn
- Chuẩn bị cho các bài tập mô phỏng ứng dụng

## Nội dung chính
- Mảng object
- Vòng lặp \`for\`
- Vòng lặp \`for...of\`
- Truy cập thuộc tính bên trong từng object

## Ví dụ
\`\`\`javascript
const products = [
  { name: 'Bút', price: 5000 },
  { name: 'Vở', price: 10000 }
];

for (const product of products) {
  console.log(product.name, product.price);
}
\`\`\`

## Bài tập luyện tập
1. Tạo mảng 3 học sinh
2. In tên từng học sinh
3. Tính tổng điểm của cả lớp
4. Tìm học sinh có điểm cao nhất

## Bài tập thử thách
- Tạo danh sách sản phẩm và in ra các sản phẩm có giá lớn hơn 100000
      `
    },
    {
      id: 'js-12',
      title: 'Buổi 12: Hàm nâng cao và arrow function',
      level: 'intermediate',
      content: `
# Buổi 12: Hàm nâng cao và arrow function

## Mục tiêu
- Hiểu cách viết hàm hiện đại
- Biết phân biệt function thường và arrow function
- Biết viết hàm ngắn gọn

## Nội dung chính
- Function declaration
- Function expression
- Arrow function
- Hàm có 1 dòng return

## Ví dụ
\`\`\`javascript
const nhanDoi = (so) => so * 2;
console.log(nhanDoi(5));
\`\`\`

## Bài tập luyện tập
1. Viết lại một hàm thường thành arrow function
2. Viết hàm tính diện tích hình chữ nhật
3. Viết hàm kiểm tra email có chứa ký tự \`@\` hay không

## Bài tập thử thách
- Tạo bộ 5 hàm tiện ích nhỏ để xử lý số và chuỗi
      `
    },
    {
      id: 'js-13',
      title: 'Buổi 13: DOM - JavaScript tương tác với HTML',
      level: 'intermediate',
      content: `
# Buổi 13: DOM - JavaScript tương tác với HTML

## Mục tiêu
- Hiểu DOM là gì
- Biết chọn phần tử HTML bằng JavaScript
- Biết thay đổi nội dung trên trang

## Nội dung chính
- DOM là cây cấu trúc của trang web
- \`document.querySelector()\`
- \`document.querySelectorAll()\`
- \`textContent\`
- \`innerHTML\`

## Ví dụ
\`\`\`javascript
const title = document.querySelector('h1');
title.textContent = 'Tiêu đề mới';
\`\`\`

## Bài tập luyện tập
1. Chọn một thẻ \`h1\` và đổi nội dung
2. Chọn một đoạn văn và đổi màu bằng class
3. Thêm nội dung HTML vào một khối

## Bài tập thử thách
- Tạo trang có nút bấm và đổi tiêu đề khi bấm nút
      `
    },
    {
      id: 'js-14',
      title: 'Buổi 14: Event - bắt sự kiện người dùng',
      level: 'intermediate',
      content: `
# Buổi 14: Event - bắt sự kiện người dùng

## Mục tiêu
- Hiểu sự kiện là gì
- Biết bắt click, input, submit
- Tạo tương tác cơ bản

## Nội dung chính
- \`addEventListener()\`
- Sự kiện \`click\`
- Sự kiện \`input\`
- Sự kiện \`submit\`

## Ví dụ
\`\`\`javascript
const button = document.querySelector('button');

button.addEventListener('click', () => {
  console.log('Bạn vừa bấm nút');
});
\`\`\`

## Bài tập luyện tập
1. Tạo nút bấm hiện thông báo khi click
2. Tạo input và in ra nội dung đang gõ
3. Bắt sự kiện submit của form

## Bài tập thử thách
- Tạo nút bật/tắt nội dung bằng click
      `
    },
    {
      id: 'js-15',
      title: 'Buổi 15: ClassList, style và thao tác giao diện',
      level: 'intermediate',
      content: `
# Buổi 15: ClassList, style và thao tác giao diện

## Mục tiêu
- Biết thêm, xóa, đổi class bằng JS
- Biết thay đổi style trực tiếp
- Tạo hiệu ứng giao diện cơ bản

## Nội dung chính
- \`classList.add()\`
- \`classList.remove()\`
- \`classList.toggle()\`
- \`element.style\`

## Ví dụ
\`\`\`javascript
const box = document.querySelector('.box');
box.classList.toggle('active');
\`\`\`

## Bài tập luyện tập
1. Tạo nút đổi màu nền của box
2. Tạo nút ẩn/hiện menu
3. Tạo chế độ dark mode đơn giản

## Bài tập thử thách
- Tạo accordion hoặc FAQ đóng/mở bằng classList
      `
    },
    {
      id: 'js-16',
      title: 'Buổi 16: Làm việc với form và kiểm tra dữ liệu',
      level: 'advanced',
      content: `
# Buổi 16: Làm việc với form và kiểm tra dữ liệu

## Mục tiêu
- Lấy dữ liệu từ input
- Kiểm tra dữ liệu trước khi gửi
- Hiển thị lỗi thân thiện

## Nội dung chính
- Lấy giá trị bằng \`value\`
- Kiểm tra rỗng
- Kiểm tra độ dài
- Kiểm tra email cơ bản
- Ngăn submit mặc định với \`preventDefault()\`

## Ví dụ
\`\`\`javascript
form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (emailInput.value === '') {
    console.log('Email không được để trống');
  }
});
\`\`\`

## Bài tập luyện tập
1. Tạo form đăng ký đơn giản
2. Kiểm tra họ tên không được rỗng
3. Kiểm tra mật khẩu tối thiểu 6 ký tự
4. Hiển thị lỗi nếu email sai định dạng cơ bản

## Bài tập thử thách
- Tạo form đăng ký có thông báo lỗi riêng cho từng trường
      `
    },
    {
      id: 'js-17',
      title: 'Buổi 17: Array methods quan trọng trong thực tế',
      level: 'advanced',
      content: `
# Buổi 17: Array methods quan trọng trong thực tế

## Mục tiêu
- Biết xử lý mảng hiện đại hơn
- Dùng được các hàm rất hay gặp trong dự án

## Nội dung chính
- \`forEach()\`
- \`map()\`
- \`filter()\`
- \`find()\`
- \`some()\`

## Ví dụ
\`\`\`javascript
const numbers = [1, 2, 3, 4];

const soChan = numbers.filter((item) => item % 2 === 0);
console.log(soChan);
\`\`\`

## Bài tập luyện tập
1. Dùng \`map()\` để nhân đôi các số trong mảng
2. Dùng \`filter()\` để lọc số lớn hơn 10
3. Dùng \`find()\` để tìm sản phẩm theo tên
4. Dùng \`forEach()\` để in danh sách

## Bài tập thử thách
- Tạo danh sách sản phẩm và viết các chức năng lọc, tìm kiếm cơ bản
      `
    },
    {
      id: 'js-18',
      title: 'Buổi 18: localStorage và lưu dữ liệu trên trình duyệt',
      level: 'advanced',
      content: `
# Buổi 18: localStorage và lưu dữ liệu trên trình duyệt

## Mục tiêu
- Hiểu localStorage là gì
- Biết lưu và lấy dữ liệu đơn giản
- Biết chuyển đổi qua lại giữa object và JSON

## Nội dung chính
- \`localStorage.setItem()\`
- \`localStorage.getItem()\`
- \`localStorage.removeItem()\`
- \`JSON.stringify()\`
- \`JSON.parse()\`

## Ví dụ
\`\`\`javascript
const user = { name: 'Linh', age: 20 };

localStorage.setItem('user', JSON.stringify(user));

const data = JSON.parse(localStorage.getItem('user'));
console.log(data.name);
\`\`\`

## Bài tập luyện tập
1. Lưu tên người dùng vào localStorage
2. Đọc dữ liệu đã lưu và hiển thị ra trang
3. Xóa dữ liệu đã lưu

## Bài tập thử thách
- Tạo app ghi chú nhỏ có lưu dữ liệu trong localStorage
      `
    },
    {
      id: 'js-19',
      title: 'Buổi 19: Bất đồng bộ, Promise, async/await và fetch',
      level: 'advanced',
      content: `
# Buổi 19: Bất đồng bộ, Promise, async/await và fetch

## Mục tiêu
- Hiểu bất đồng bộ là gì
- Biết dùng \`async/await\`
- Biết gọi API cơ bản bằng \`fetch\`

## Nội dung chính
- Tác vụ bất đồng bộ
- Promise
- \`async\`
- \`await\`
- \`try...catch\`
- \`fetch()\`

## Ví dụ
\`\`\`javascript
async function layDuLieu() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('Có lỗi xảy ra', error);
  }
}

layDuLieu();
\`\`\`

## Bài tập luyện tập
1. Tạo hàm bất đồng bộ đơn giản
2. Dùng \`fetch\` để lấy danh sách người dùng
3. In dữ liệu ra console
4. Thêm xử lý lỗi bằng \`try...catch\`

## Bài tập thử thách
- Hiển thị danh sách người dùng từ API ra giao diện HTML
      `
    },
    {
      id: 'js-20',
      title: 'Buổi 20: Mini Project và dự án cuối khóa JavaScript',
      level: 'advanced',
      content: `
# Buổi 20: Mini Project và dự án cuối khóa JavaScript

## Mục tiêu
- Kết hợp toàn bộ kiến thức JavaScript đã học
- Tạo sản phẩm nhỏ có tương tác thật
- Tự đánh giá mức độ làm chủ JavaScript

## Dự án gợi ý
Chọn 1 trong các project:
1. To-do list
2. Ứng dụng ghi chú
3. Máy tính đơn giản
4. Form đăng ký có kiểm tra dữ liệu
5. App tìm kiếm sản phẩm đơn giản

## Yêu cầu bắt buộc
- Có biến, điều kiện, vòng lặp, hàm
- Có DOM và event
- Có thao tác giao diện
- Có xử lý dữ liệu mảng hoặc object
- Có ít nhất một chức năng thực tế

## Checklist tự đánh giá
- Code có dễ đọc không?
- Tên biến và hàm có rõ nghĩa không?
- Có chia hàm hợp lý không?
- Có kiểm tra dữ liệu đầu vào không?
- Giao diện có phản hồi khi người dùng tương tác không?

## Bài tập cuối khóa
- Hoàn thành project
- Tự cải thiện code lần 2
- Tự ghi chú những gì mình đã hiểu và những gì cần luyện thêm
      `
    }
  ]
};