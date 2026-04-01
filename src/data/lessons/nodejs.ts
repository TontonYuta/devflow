import { Lesson } from '../../types';

export const nodejsLesson: Lesson = {
  id: 'nodejs-mastery',
  icon: 'server',
  title: 'Node.js & Express',
  description:
    'Lộ trình 20 buổi học Node.js và Express từ cơ bản đến chuyên sâu, chia nhỏ dễ học, có bài tập thực hành và mini project để giúp người học xây dựng backend vững chắc, tạo API rõ ràng và xử lý xác thực, middleware, database theo cách thực tế.',
  points: [
    'Hiểu Node.js là gì và cách backend hoạt động',
    'Nắm chắc Express, routing, request, response và middleware',
    'Biết xây RESTful API, validate dữ liệu và xử lý lỗi',
    'Làm việc với auth, JWT, database và cấu trúc project thực tế',
    'Có bài tập và project để luyện xây backend hoàn chỉnh'
  ],
  chapters: [
    {
      id: 'node-01',
      title: 'Buổi 1: Node.js là gì? Vì sao nên học backend bằng JavaScript?',
      level: 'beginner',
      content: `
# Buổi 1: Node.js là gì? Vì sao nên học backend bằng JavaScript?

## Mục tiêu
- Hiểu Node.js là gì
- Biết Node.js khác JavaScript trên trình duyệt thế nào
- Hiểu vì sao Node.js rất phổ biến cho backend

## Nội dung chính
- Node.js là môi trường chạy JavaScript ngoài trình duyệt
- Node.js dùng V8 Engine
- Frontend và backend có thể dùng chung JavaScript hoặc TypeScript
- Node.js mạnh ở I/O bất đồng bộ và xử lý nhiều kết nối

## Ví dụ
\`\`\`javascript
console.log('Xin chào Node.js');
\`\`\`

## Bài tập luyện tập
1. Giải thích Node.js bằng lời của bạn
2. So sánh JavaScript trong trình duyệt và Node.js
3. Nêu 3 lý do nên học Node.js

## Bài tập thử thách
- Tìm 3 sản phẩm phổ biến đang dùng Node.js ở phía backend và mô tả ngắn lý do
      `
    },
    {
      id: 'node-02',
      title: 'Buổi 2: Cài đặt Node.js và chạy file JavaScript đầu tiên',
      level: 'beginner',
      content: `
# Buổi 2: Cài đặt Node.js và chạy file JavaScript đầu tiên

## Mục tiêu
- Cài Node.js thành công
- Biết chạy file JS bằng terminal
- Làm quen với npm

## Nội dung chính
- Kiểm tra phiên bản Node và npm
- Chạy file bằng lệnh \`node\`
- Tạo project bằng \`npm init\`
- Vai trò của \`package.json\`

## Ví dụ
\`\`\`bash
node app.js
npm init -y
\`\`\`

## Bài tập luyện tập
1. Tạo file \`app.js\`
2. In ra dòng chữ "Backend đầu tiên của tôi"
3. Khởi tạo project với \`npm init -y\`

## Bài tập thử thách
- Tạo một project nhỏ gồm 3 file JS và chạy một file chính từ terminal
      `
    },
    {
      id: 'node-03',
      title: 'Buổi 3: Module trong Node.js',
      level: 'beginner',
      content: `
# Buổi 3: Module trong Node.js

## Mục tiêu
- Hiểu module là gì
- Biết tách code thành nhiều file
- Biết export và import dữ liệu hoặc hàm

## Nội dung chính
- Tách file để dễ quản lý
- \`module.exports\`
- \`require()\`
- Giới thiệu ES Modules ở mức cơ bản

## Ví dụ
\`\`\`javascript
// math.js
function tinhTong(a, b) {
  return a + b;
}

module.exports = { tinhTong };
\`\`\`

\`\`\`javascript
// app.js
const { tinhTong } = require('./math');

console.log(tinhTong(2, 3));
\`\`\`

## Bài tập luyện tập
1. Tạo file chứa hàm cộng và trừ
2. Import các hàm đó vào file chính
3. Chạy chương trình và in kết quả

## Bài tập thử thách
- Tách project thành file \`config\`, \`utils\`, \`app\` đơn giản
      `
    },
    {
      id: 'node-04',
      title: 'Buổi 4: Node.js core modules cơ bản',
      level: 'beginner',
      content: `
# Buổi 4: Node.js core modules cơ bản

## Mục tiêu
- Biết Node.js có sẵn nhiều module mạnh mẽ
- Làm quen với một số module quan trọng
- Biết đọc thông tin hệ thống và đường dẫn file

## Nội dung chính
- \`path\`
- \`os\`
- \`fs\` giới thiệu
- \`http\` giới thiệu

## Ví dụ
\`\`\`javascript
const os = require('os');
const path = require('path');

console.log(os.platform());
console.log(path.join(__dirname, 'data', 'users.json'));
\`\`\`

## Bài tập luyện tập
1. In ra hệ điều hành hiện tại
2. Tạo đường dẫn tới file trong thư mục con bằng \`path.join\`
3. In thư mục hiện tại bằng \`__dirname\`

## Bài tập thử thách
- Tạo file script in ra thông tin cơ bản của máy tính
      `
    },
    {
      id: 'node-05',
      title: 'Buổi 5: Làm việc với file bằng fs',
      level: 'beginner',
      content: `
# Buổi 5: Làm việc với file bằng fs

## Mục tiêu
- Biết đọc và ghi file trong Node.js
- Hiểu sự khác nhau giữa sync và async
- Làm quen với dữ liệu text và JSON

## Nội dung chính
- \`fs.readFile\`
- \`fs.writeFile\`
- \`fs.readFileSync\`
- Xử lý lỗi khi làm việc với file

## Ví dụ
\`\`\`javascript
const fs = require('fs');

fs.writeFile('note.txt', 'Xin chào Node.js', (err) => {
  if (err) console.error(err);
  else console.log('Đã ghi file');
});
\`\`\`

## Bài tập luyện tập
1. Tạo file text bằng Node.js
2. Đọc nội dung file vừa tạo
3. Tạo file JSON và đọc ra console

## Bài tập thử thách
- Viết chương trình lưu danh sách công việc vào file JSON
      `
    },
    {
      id: 'node-06',
      title: 'Buổi 6: HTTP server cơ bản với Node.js thuần',
      level: 'beginner',
      content: `
# Buổi 6: HTTP server cơ bản với Node.js thuần

## Mục tiêu
- Hiểu backend nhận request và trả response như thế nào
- Tạo server đầu tiên không cần framework
- Biết lắng nghe cổng

## Nội dung chính
- Module \`http\`
- Tạo server
- Request và response
- \`listen()\`

## Ví dụ
\`\`\`javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello from Node server');
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
\`\`\`

## Bài tập luyện tập
1. Tạo server trả về chuỗi đơn giản
2. Đổi response theo từng URL
3. Đổi port server

## Bài tập thử thách
- Tạo server nhỏ có 3 đường dẫn: \`/\`, \`/about\`, \`/contact\`
      `
    },
    {
      id: 'node-07',
      title: 'Buổi 7: RESTful API là gì?',
      level: 'beginner',
      content: `
# Buổi 7: RESTful API là gì?

## Mục tiêu
- Hiểu API là gì
- Hiểu REST và các HTTP methods cơ bản
- Biết cách frontend và backend giao tiếp

## Nội dung chính
- API là cầu nối dữ liệu
- RESTful API
- \`GET\`, \`POST\`, \`PUT\`, \`PATCH\`, \`DELETE\`
- Resource và endpoint

## Ví dụ
\`\`\`text
GET    /api/products
GET    /api/products/1
POST   /api/products
PATCH  /api/products/1
DELETE /api/products/1
\`\`\`

## Bài tập luyện tập
1. Mô tả API cho danh sách sản phẩm
2. Mô tả API cho quản lý học viên
3. Ghép từng hành động với đúng HTTP method

## Bài tập thử thách
- Thiết kế API sơ bộ cho một app ghi chú hoặc blog
      `
    },
    {
      id: 'node-08',
      title: 'Buổi 8: Express.js và server đầu tiên',
      level: 'beginner',
      content: `
# Buổi 8: Express.js và server đầu tiên

## Mục tiêu
- Hiểu Express là gì
- Biết vì sao Express giúp backend dễ viết hơn
- Tạo server Express đầu tiên

## Nội dung chính
- Cài Express
- Tạo app Express
- Route cơ bản
- \`app.listen()\`

## Ví dụ
\`\`\`javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express');
});

app.listen(3000, () => {
  console.log('Server đang chạy ở cổng 3000');
});
\`\`\`

## Bài tập luyện tập
1. Cài Express vào project
2. Tạo route \`/\`
3. Tạo route \`/about\`
4. Chạy server thành công

## Bài tập thử thách
- Tạo server Express có 4 route trả về nội dung khác nhau
      `
    },
    {
      id: 'node-09',
      title: 'Buổi 9: Routing trong Express',
      level: 'intermediate',
      content: `
# Buổi 9: Routing trong Express

## Mục tiêu
- Biết tạo nhiều route rõ ràng hơn
- Hiểu params và query
- Tổ chức logic theo endpoint

## Nội dung chính
- \`app.get\`
- \`app.post\`
- \`req.params\`
- \`req.query\`
- Route động

## Ví dụ
\`\`\`javascript
app.get('/products/:id', (req, res) => {
  res.send(\`Sản phẩm \${req.params.id}\`);
});
\`\`\`

## Bài tập luyện tập
1. Tạo route \`/users/:id\`
2. Tạo route nhận query \`?keyword=\`
3. In params và query ra console

## Bài tập thử thách
- Tạo API lọc danh sách sản phẩm theo từ khóa query
      `
    },
    {
      id: 'node-10',
      title: 'Buổi 10: Request, Response và gửi dữ liệu JSON',
      level: 'intermediate',
      content: `
# Buổi 10: Request, Response và gửi dữ liệu JSON

## Mục tiêu
- Hiểu rõ request và response
- Biết gửi JSON về frontend
- Biết dùng status code cơ bản

## Nội dung chính
- \`req\`
- \`res\`
- \`res.json()\`
- \`res.send()\`
- \`res.status()\`

## Ví dụ
\`\`\`javascript
app.get('/api/products', (req, res) => {
  res.status(200).json([
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Chuột' }
  ]);
});
\`\`\`

## Bài tập luyện tập
1. Tạo route trả JSON danh sách học sinh
2. Tạo route trả thông báo lỗi 404
3. Tạo route trả về object có \`message\`

## Bài tập thử thách
- Tạo API trả về dữ liệu cấu trúc rõ ràng gồm \`success\`, \`data\`, \`message\`
      `
    },
    {
      id: 'node-11',
      title: 'Buổi 11: Nhận dữ liệu từ client bằng req.body',
      level: 'intermediate',
      content: `
# Buổi 11: Nhận dữ liệu từ client bằng req.body

## Mục tiêu
- Biết frontend gửi dữ liệu lên backend như thế nào
- Biết dùng \`express.json()\`
- Tạo API POST cơ bản

## Nội dung chính
- Middleware \`express.json()\`
- \`req.body\`
- POST dữ liệu JSON
- Tạo dữ liệu mới trong mảng tạm

## Ví dụ
\`\`\`javascript
app.use(express.json());

app.post('/api/products', (req, res) => {
  const newProduct = {
    id: Date.now(),
    name: req.body.name,
    price: req.body.price
  };

  res.status(201).json(newProduct);
});
\`\`\`

## Bài tập luyện tập
1. Tạo API thêm sản phẩm
2. Nhận dữ liệu từ Postman
3. Trả về sản phẩm vừa tạo

## Bài tập thử thách
- Tạo API thêm học viên với kiểm tra 2 trường bắt buộc
      `
    },
    {
      id: 'node-12',
      title: 'Buổi 12: Middleware trong Express',
      level: 'intermediate',
      content: `
# Buổi 12: Middleware trong Express

## Mục tiêu
- Hiểu middleware là gì
- Biết middleware chạy ở đâu trong luồng request
- Tạo middleware đơn giản

## Nội dung chính
- Middleware toàn cục
- Middleware theo route
- \`next()\`
- Logger middleware

## Ví dụ
\`\`\`javascript
const logger = (req, res, next) => {
  console.log(req.method, req.url);
  next();
};

app.use(logger);
\`\`\`

## Bài tập luyện tập
1. Tạo middleware log request
2. Tạo middleware kiểm tra tham số đơn giản
3. Áp dụng middleware cho một route riêng

## Bài tập thử thách
- Tạo middleware chặn request nếu thiếu một query nhất định
      `
    },
    {
      id: 'node-13',
      title: 'Buổi 13: CRUD hoàn chỉnh với Express',
      level: 'intermediate',
      content: `
# Buổi 13: CRUD hoàn chỉnh với Express

## Mục tiêu
- Xây API đầy đủ hơn
- Biết tạo, đọc, cập nhật, xóa dữ liệu
- Hiểu luồng xử lý CRUD phổ biến

## Nội dung chính
- GET all
- GET by id
- POST
- PUT hoặc PATCH
- DELETE

## Ví dụ
\`\`\`javascript
app.delete('/api/products/:id', (req, res) => {
  res.json({ message: 'Đã xóa sản phẩm' });
});
\`\`\`

## Bài tập luyện tập
1. Tạo CRUD cho sản phẩm
2. Tạo CRUD cho bài viết
3. Trả status code phù hợp cho từng route

## Bài tập thử thách
- Hoàn thiện CRUD cho danh sách công việc có trạng thái hoàn thành
      `
    },
    {
      id: 'node-14',
      title: 'Buổi 14: Tách router, controller và cấu trúc project',
      level: 'advanced',
      content: `
# Buổi 14: Tách router, controller và cấu trúc project

## Mục tiêu
- Biết vì sao không nên để mọi thứ trong một file
- Biết tách router và controller
- Tổ chức project dễ mở rộng hơn

## Nội dung chính
- Thư mục \`routes/\`
- Thư mục \`controllers/\`
- Thư mục \`middlewares/\`
- Thư mục \`models/\` ở mức giới thiệu
- Tư duy tách trách nhiệm

## Ví dụ
\`\`\`text
src/
├── routes/
├── controllers/
├── middlewares/
└── app.js
\`\`\`

## Bài tập luyện tập
1. Tách route sản phẩm ra file riêng
2. Tách controller xử lý logic ra riêng
3. Tổ chức lại project hiện có

## Bài tập thử thách
- Thiết kế cấu trúc project cho app blog backend
      `
    },
    {
      id: 'node-15',
      title: 'Buổi 15: Validation dữ liệu đầu vào',
      level: 'advanced',
      content: `
# Buổi 15: Validation dữ liệu đầu vào

## Mục tiêu
- Hiểu vì sao backend phải kiểm tra dữ liệu
- Biết validate cơ bản trước khi xử lý
- Trả lỗi rõ ràng hơn cho frontend

## Nội dung chính
- Kiểm tra field bắt buộc
- Kiểm tra kiểu dữ liệu
- Kiểm tra độ dài
- Trả lỗi 400 với thông tin hợp lý

## Ví dụ
\`\`\`javascript
app.post('/api/products', (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({ message: 'Thiếu dữ liệu' });
  }

  res.status(201).json({ name, price });
});
\`\`\`

## Bài tập luyện tập
1. Validate tên sản phẩm không được rỗng
2. Validate giá phải là số
3. Trả lỗi rõ ràng khi dữ liệu sai

## Bài tập thử thách
- Tạo bộ validate cho form đăng ký người dùng
      `
    },
    {
      id: 'node-16',
      title: 'Buổi 16: Xử lý lỗi trong Express',
      level: 'advanced',
      content: `
# Buổi 16: Xử lý lỗi trong Express

## Mục tiêu
- Biết bắt và trả lỗi đúng cách
- Tránh server chết khi có lỗi
- Tạo middleware xử lý lỗi tập trung

## Nội dung chính
- \`try/catch\`
- Middleware xử lý lỗi
- 404 handler
- Chuẩn hóa phản hồi lỗi

## Ví dụ
\`\`\`javascript
app.use((err, req, res, next) => {
  res.status(500).json({ message: 'Có lỗi xảy ra' });
});
\`\`\`

## Bài tập luyện tập
1. Tạo route giả lập lỗi
2. Tạo middleware error handler
3. Tạo route 404 cơ bản

## Bài tập thử thách
- Chuẩn hóa response lỗi cho toàn project
      `
    },
    {
      id: 'node-17',
      title: 'Buổi 17: Authentication với JWT',
      level: 'advanced',
      content: `
# Buổi 17: Authentication với JWT

## Mục tiêu
- Hiểu JWT là gì
- Biết luồng đăng nhập và cấp token
- Biết bảo vệ route bằng token

## Nội dung chính
- Login
- Token
- Header Authorization
- \`jsonwebtoken\`
- Verify token

## Ví dụ
\`\`\`javascript
const jwt = require('jsonwebtoken');

const token = jwt.sign({ userId: 1 }, 'SECRET_KEY', {
  expiresIn: '1h',
});
\`\`\`

## Bài tập luyện tập
1. Tạo API login giả
2. Cấp token sau khi đăng nhập
3. Trả token về client

## Bài tập thử thách
- Thiết kế luồng đăng nhập, lưu token và gọi API profile
      `
    },
    {
      id: 'node-18',
      title: 'Buổi 18: Middleware xác thực và phân quyền cơ bản',
      level: 'advanced',
      content: `
# Buổi 18: Middleware xác thực và phân quyền cơ bản

## Mục tiêu
- Biết bảo vệ route riêng tư
- Biết đọc token từ request header
- Biết phân biệt user thường và admin ở mức cơ bản

## Nội dung chính
- Middleware auth
- \`req.headers.authorization\`
- Gắn user vào request
- Kiểm tra role

## Ví dụ
\`\`\`javascript
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Chưa đăng nhập' });
  }

  next();
};
\`\`\`

## Bài tập luyện tập
1. Tạo middleware kiểm tra token
2. Bảo vệ route profile
3. Tạo middleware role admin đơn giản

## Bài tập thử thách
- Tạo 2 route: một cho user thường, một chỉ cho admin
      `
    },
    {
      id: 'node-19',
      title: 'Buổi 19: Kết nối database và làm việc với dữ liệu thật',
      level: 'advanced',
      content: `
# Buổi 19: Kết nối database và làm việc với dữ liệu thật

## Mục tiêu
- Hiểu backend thực tế cần database
- Biết luồng kết nối và thao tác dữ liệu cơ bản
- Chuẩn bị cho project backend hoàn chỉnh

## Nội dung chính
- Database là gì
- SQL và NoSQL ở mức khái quát
- Kết nối database
- Model dữ liệu
- CRUD với database thay vì mảng tạm

## Ví dụ
\`\`\`text
User
Product
Order
Post
\`\`\`

## Bài tập luyện tập
1. Thiết kế bảng hoặc collection cho user
2. Thiết kế dữ liệu cho sản phẩm
3. Mô tả luồng tạo bài viết lưu vào database

## Bài tập thử thách
- Thiết kế schema dữ liệu cho app blog hoặc app học online
      `
    },
    {
      id: 'node-20',
      title: 'Buổi 20: Mini Project và dự án cuối khóa Node.js & Express',
      level: 'advanced',
      content: `
# Buổi 20: Mini Project và dự án cuối khóa Node.js & Express

## Mục tiêu
- Kết hợp toàn bộ kiến thức backend đã học
- Tạo API hoàn chỉnh hơn
- Tự đánh giá mức độ làm chủ Node.js và Express

## Gợi ý project
Chọn 1 trong các project:
1. API quản lý sản phẩm
2. API blog mini
3. API quản lý khóa học
4. API to-do app
5. API user + auth cơ bản

## Yêu cầu bắt buộc
- Có Express server
- Có routing rõ ràng
- Có middleware
- Có validate dữ liệu
- Có xử lý lỗi
- Có ít nhất một route được bảo vệ bằng auth
- Có kết nối dữ liệu thật hoặc mô phỏng dữ liệu rõ ràng

## Checklist tự đánh giá
- Route có rõ ràng không?
- Dữ liệu trả về có nhất quán không?
- Middleware có tách riêng không?
- Có validate đầu vào không?
- Có xử lý lỗi và auth chưa?
- Project có dễ mở rộng không?

## Bài tập cuối khóa
- Hoàn thành project
- Tự refactor cấu trúc thư mục
- Ghi chú những phần backend bạn đã hiểu chắc và những phần cần luyện thêm
      `
    }
  ]
};