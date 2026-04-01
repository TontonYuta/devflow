import { Lesson } from '../../types';

export const databaseLesson: Lesson = {
  id: 'database-mastery',
  icon: 'database',
  title: 'Cơ sở dữ liệu & ORM',
  description:
    'Lộ trình 20 buổi học Cơ sở dữ liệu và ORM từ cơ bản đến chuyên sâu, chia nhỏ dễ học, có bài tập thực hành và mini project để giúp người học hiểu cách lưu trữ dữ liệu, thiết kế database, làm việc với SQL, NoSQL, Prisma ORM và MongoDB theo cách thực tế.',
  points: [
    'Hiểu database là gì và cách dữ liệu được lưu trữ',
    'Nắm chắc SQL, bảng, quan hệ, truy vấn và thiết kế dữ liệu',
    'Biết phân biệt SQL và NoSQL, PostgreSQL và MongoDB',
    'Biết dùng Prisma ORM và Mongoose để làm việc với dữ liệu',
    'Có bài tập và project để luyện tư duy thiết kế database thực tế'
  ],
  chapters: [
    {
      id: 'db-01',
      title: 'Buổi 1: Database là gì? Vì sao ứng dụng cần cơ sở dữ liệu?',
      level: 'beginner',
      content: `
# Buổi 1: Database là gì? Vì sao ứng dụng cần cơ sở dữ liệu?

## Mục tiêu
- Hiểu database là gì
- Biết vì sao ứng dụng cần nơi lưu dữ liệu
- Hình dung dữ liệu được dùng như thế nào trong app

## Nội dung chính
- Database là nơi lưu trữ dữ liệu có tổ chức
- Ứng dụng cần lưu:
  - người dùng
  - bài viết
  - sản phẩm
  - đơn hàng
- Khác nhau giữa lưu tạm trong biến và lưu trong database
- Dữ liệu cần được lưu bền vững và truy xuất lại sau này

## Ví dụ
\`\`\`text
User:
- id
- name
- email

Product:
- id
- name
- price
\`\`\`

## Bài tập luyện tập
1. Liệt kê 5 loại dữ liệu một ứng dụng học online cần lưu
2. Liệt kê 5 loại dữ liệu một app bán hàng cần lưu
3. Giải thích vì sao không thể chỉ lưu dữ liệu trong biến JavaScript

## Bài tập thử thách
- Phân tích một app quen thuộc và mô tả dữ liệu chính của nó
      `
    },
    {
      id: 'db-02',
      title: 'Buổi 2: SQL vs NoSQL - hiểu đúng để chọn đúng',
      level: 'beginner',
      content: `
# Buổi 2: SQL vs NoSQL - hiểu đúng để chọn đúng

## Mục tiêu
- Phân biệt SQL và NoSQL
- Biết ưu và nhược điểm của từng loại
- Biết khi nào nên dùng mỗi hướng

## Nội dung chính
- SQL là database quan hệ
- NoSQL là database phi quan hệ
- SQL dùng bảng, hàng, cột
- NoSQL thường dùng document giống JSON
- Tính chặt chẽ và tính linh hoạt

## Ví dụ
\`\`\`text
SQL:
Users table
Orders table

NoSQL:
users collection
orders collection
\`\`\`

## Bài tập luyện tập
1. So sánh SQL và NoSQL bằng bảng ngắn
2. Nêu ví dụ 3 hệ quản trị SQL
3. Nêu ví dụ 3 hệ quản trị NoSQL

## Bài tập thử thách
- Chọn database phù hợp cho app chat và giải thích lý do
      `
    },
    {
      id: 'db-03',
      title: 'Buổi 3: Bảng, hàng, cột và kiểu dữ liệu trong SQL',
      level: 'beginner',
      content: `
# Buổi 3: Bảng, hàng, cột và kiểu dữ liệu trong SQL

## Mục tiêu
- Hiểu cấu trúc dữ liệu trong SQL
- Biết bảng, hàng, cột là gì
- Biết một số kiểu dữ liệu phổ biến

## Nội dung chính
- Table
- Row
- Column
- Kiểu dữ liệu:
  - INT
  - VARCHAR
  - TEXT
  - BOOLEAN
  - DATE
  - TIMESTAMP

## Ví dụ
\`\`\`sql
CREATE TABLE users (
  id INT,
  name VARCHAR(100),
  email VARCHAR(255),
  is_active BOOLEAN
);
\`\`\`

## Bài tập luyện tập
1. Thiết kế bảng users đơn giản
2. Thiết kế bảng products đơn giản
3. Chọn kiểu dữ liệu phù hợp cho từng cột

## Bài tập thử thách
- Thiết kế bảng courses cho app học lập trình
      `
    },
    {
      id: 'db-04',
      title: 'Buổi 4: Khóa chính, khóa ngoại và quan hệ dữ liệu',
      level: 'beginner',
      content: `
# Buổi 4: Khóa chính, khóa ngoại và quan hệ dữ liệu

## Mục tiêu
- Hiểu primary key và foreign key
- Biết vì sao các bảng có thể liên kết với nhau
- Hiểu các loại quan hệ cơ bản

## Nội dung chính
- Primary key
- Foreign key
- Quan hệ:
  - một - một
  - một - nhiều
  - nhiều - nhiều

## Ví dụ
\`\`\`text
Users 1 --- N Posts
Courses N --- N Students
\`\`\`

## Bài tập luyện tập
1. Xác định primary key cho bảng users
2. Tạo quan hệ user và posts
3. Tạo ví dụ quan hệ course và lessons

## Bài tập thử thách
- Thiết kế quan hệ dữ liệu cho app blog
      `
    },
    {
      id: 'db-05',
      title: 'Buổi 5: Cài PostgreSQL và làm quen với database SQL thực tế',
      level: 'beginner',
      content: `
# Buổi 5: Cài PostgreSQL và làm quen với database SQL thực tế

## Mục tiêu
- Biết PostgreSQL là gì
- Cài hoặc kết nối PostgreSQL thành công
- Tạo database đầu tiên

## Nội dung chính
- PostgreSQL là hệ quản trị SQL phổ biến
- Tạo database
- Kết nối bằng công cụ quản lý database
- Tư duy môi trường local development

## Ví dụ
\`\`\`sql
CREATE DATABASE learning_app;
\`\`\`

## Bài tập luyện tập
1. Tạo database mới
2. Tạo bảng users đầu tiên
3. Xem lại cấu trúc bảng vừa tạo

## Bài tập thử thách
- Tạo database cho app học online gồm 3 bảng cơ bản
      `
    },
    {
      id: 'db-06',
      title: 'Buổi 6: SELECT - lấy dữ liệu từ bảng',
      level: 'beginner',
      content: `
# Buổi 6: SELECT - lấy dữ liệu từ bảng

## Mục tiêu
- Biết truy vấn dữ liệu
- Biết lấy tất cả cột hoặc một vài cột
- Làm quen với câu lệnh SQL phổ biến nhất

## Nội dung chính
- \`SELECT *\`
- Chọn cột cụ thể
- Đổi tên cột bằng alias

## Ví dụ
\`\`\`sql
SELECT * FROM users;

SELECT name, email FROM users;

SELECT name AS full_name FROM users;
\`\`\`

## Bài tập luyện tập
1. Lấy toàn bộ users
2. Chỉ lấy tên và email
3. Đổi tên cột trong kết quả

## Bài tập thử thách
- Viết truy vấn lấy tên, giá và mô tả từ bảng products
      `
    },
    {
      id: 'db-07',
      title: 'Buổi 7: WHERE, ORDER BY, LIMIT - lọc và sắp xếp dữ liệu',
      level: 'beginner',
      content: `
# Buổi 7: WHERE, ORDER BY, LIMIT - lọc và sắp xếp dữ liệu

## Mục tiêu
- Biết lọc dữ liệu theo điều kiện
- Biết sắp xếp dữ liệu
- Biết giới hạn số lượng kết quả

## Nội dung chính
- \`WHERE\`
- \`AND\`, \`OR\`
- \`ORDER BY\`
- \`ASC\`, \`DESC\`
- \`LIMIT\`

## Ví dụ
\`\`\`sql
SELECT * FROM products
WHERE price > 100000
ORDER BY price DESC
LIMIT 5;
\`\`\`

## Bài tập luyện tập
1. Lọc user đang hoạt động
2. Lọc sản phẩm có giá lớn hơn một mức
3. Sắp xếp bài viết mới nhất
4. Lấy 10 bản ghi đầu tiên

## Bài tập thử thách
- Viết truy vấn lọc khóa học miễn phí và sắp xếp theo tên
      `
    },
    {
      id: 'db-08',
      title: 'Buổi 8: INSERT, UPDATE, DELETE - thay đổi dữ liệu',
      level: 'intermediate',
      content: `
# Buổi 8: INSERT, UPDATE, DELETE - thay đổi dữ liệu

## Mục tiêu
- Biết thêm, sửa, xóa dữ liệu
- Hiểu rủi ro khi cập nhật hoặc xóa thiếu điều kiện
- Biết thao tác CRUD ở mức SQL cơ bản

## Nội dung chính
- \`INSERT INTO\`
- \`UPDATE\`
- \`DELETE\`
- Tầm quan trọng của \`WHERE\`

## Ví dụ
\`\`\`sql
INSERT INTO users (name, email)
VALUES ('An', 'an@example.com');

UPDATE users
SET name = 'An Nguyễn'
WHERE id = 1;

DELETE FROM users
WHERE id = 1;
\`\`\`

## Bài tập luyện tập
1. Thêm 3 user mới
2. Cập nhật tên của một user
3. Xóa một user theo id

## Bài tập thử thách
- Tạo dữ liệu mẫu cho bảng products và cập nhật giá hàng loạt có điều kiện
      `
    },
    {
      id: 'db-09',
      title: 'Buổi 9: JOIN - nối dữ liệu giữa nhiều bảng',
      level: 'intermediate',
      content: `
# Buổi 9: JOIN - nối dữ liệu giữa nhiều bảng

## Mục tiêu
- Hiểu vì sao cần JOIN
- Biết nối dữ liệu giữa bảng liên quan
- Biết dùng INNER JOIN và LEFT JOIN cơ bản

## Nội dung chính
- \`INNER JOIN\`
- \`LEFT JOIN\`
- Nối users và posts
- Đọc kết quả dữ liệu sau khi JOIN

## Ví dụ
\`\`\`sql
SELECT posts.title, users.name
FROM posts
INNER JOIN users ON posts.author_id = users.id;
\`\`\`

## Bài tập luyện tập
1. JOIN users với posts
2. JOIN orders với users
3. Thử LEFT JOIN để lấy cả user chưa có bài viết

## Bài tập thử thách
- Viết truy vấn lấy danh sách khóa học kèm tên giảng viên
      `
    },
    {
      id: 'db-10',
      title: 'Buổi 10: GROUP BY, COUNT, SUM - tổng hợp dữ liệu',
      level: 'intermediate',
      content: `
# Buổi 10: GROUP BY, COUNT, SUM - tổng hợp dữ liệu

## Mục tiêu
- Biết đếm, cộng, tính trung bình dữ liệu
- Biết nhóm dữ liệu theo cột
- Hiểu các truy vấn thống kê cơ bản

## Nội dung chính
- \`COUNT()\`
- \`SUM()\`
- \`AVG()\`
- \`GROUP BY\`
- \`HAVING\`

## Ví dụ
\`\`\`sql
SELECT author_id, COUNT(*) AS total_posts
FROM posts
GROUP BY author_id;
\`\`\`

## Bài tập luyện tập
1. Đếm số bài viết mỗi user
2. Tính tổng tiền đơn hàng
3. Tính giá trung bình sản phẩm
4. Lọc nhóm có số lượng lớn hơn 3

## Bài tập thử thách
- Viết truy vấn thống kê số học viên theo từng khóa học
      `
    },
    {
      id: 'db-11',
      title: 'Buổi 11: Chuẩn hóa dữ liệu và tư duy thiết kế schema',
      level: 'intermediate',
      content: `
# Buổi 11: Chuẩn hóa dữ liệu và tư duy thiết kế schema

## Mục tiêu
- Hiểu vì sao thiết kế schema quan trọng
- Biết tránh lặp dữ liệu không cần thiết
- Hiểu tư duy chuẩn hóa ở mức cơ bản

## Nội dung chính
- Tránh lặp dữ liệu
- Tách bảng hợp lý
- Chuẩn hóa đơn giản
- Khi nào nên tách bảng, khi nào không

## Ví dụ
\`\`\`text
Không nên:
orders có lặp name, email quá nhiều nếu đã có bảng users

Nên:
orders liên kết tới users bằng user_id
\`\`\`

## Bài tập luyện tập
1. Tìm ví dụ dữ liệu bị lặp
2. Tách một bảng lớn thành 2 bảng hợp lý
3. Thiết kế lại schema blog gọn hơn

## Bài tập thử thách
- Tối ưu schema cho app bán hàng nhỏ để giảm lặp dữ liệu
      `
    },
    {
      id: 'db-12',
      title: 'Buổi 12: Index, unique và hiệu năng cơ bản',
      level: 'intermediate',
      content: `
# Buổi 12: Index, unique và hiệu năng cơ bản

## Mục tiêu
- Hiểu index là gì
- Biết unique giúp tránh trùng dữ liệu
- Có tư duy tối ưu truy vấn ở mức cơ bản

## Nội dung chính
- Index
- Unique constraint
- Tối ưu cột hay tìm kiếm
- Không phải cột nào cũng nên index

## Ví dụ
\`\`\`sql
CREATE UNIQUE INDEX users_email_unique
ON users(email);
\`\`\`

## Bài tập luyện tập
1. Đánh dấu email là duy nhất
2. Chọn cột nên index trong bảng posts
3. Giải thích vì sao tìm theo email thường nhanh hơn khi có index

## Bài tập thử thách
- Phân tích một app nhỏ và chọn 3 cột nên index
      `
    },
    {
      id: 'db-13',
      title: 'Buổi 13: Transaction và tính toàn vẹn dữ liệu',
      level: 'advanced',
      content: `
# Buổi 13: Transaction và tính toàn vẹn dữ liệu

## Mục tiêu
- Hiểu transaction là gì
- Biết vì sao nhiều thao tác cần thành công cùng nhau
- Hiểu rollback ở mức cơ bản

## Nội dung chính
- Transaction
- Commit
- Rollback
- Ví dụ chuyển tiền, tạo đơn hàng

## Ví dụ
\`\`\`text
Bước 1: trừ tiền ví
Bước 2: tạo đơn hàng

Nếu bước 2 lỗi thì bước 1 cũng phải hoàn tác
\`\`\`

## Bài tập luyện tập
1. Mô tả tình huống cần transaction
2. Giải thích commit và rollback
3. Phân tích lỗi nếu không dùng transaction

## Bài tập thử thách
- Thiết kế luồng đặt hàng cần transaction
      `
    },
    {
      id: 'db-14',
      title: 'Buổi 14: Prisma ORM là gì? Vì sao nên dùng ORM?',
      level: 'advanced',
      content: `
# Buổi 14: Prisma ORM là gì? Vì sao nên dùng ORM?

## Mục tiêu
- Hiểu ORM là gì
- Biết Prisma giúp gì cho project Node.js/TypeScript
- Hiểu lợi ích type-safe khi làm việc với database

## Nội dung chính
- ORM là lớp trung gian giữa code và database
- Prisma giúp viết code dễ đọc hơn SQL thuần trong nhiều tình huống
- Type-safe query
- Schema tập trung

## Ví dụ
\`\`\`typescript
const users = await prisma.user.findMany();
\`\`\`

## Bài tập luyện tập
1. Giải thích ORM bằng lời của bạn
2. So sánh Prisma và SQL thuần
3. Nêu 3 lợi ích khi dùng Prisma

## Bài tập thử thách
- Viết cùng một thao tác lấy user bằng ngôn ngữ tự nhiên và bằng code Prisma
      `
    },
    {
      id: 'db-15',
      title: 'Buổi 15: Prisma schema, model và migration',
      level: 'advanced',
      content: `
# Buổi 15: Prisma schema, model và migration

## Mục tiêu
- Biết đọc và viết schema Prisma
- Biết model tương ứng với bảng dữ liệu
- Hiểu migration là gì

## Nội dung chính
- File \`schema.prisma\`
- \`model\`
- \`@id\`
- \`@default\`
- \`@unique\`
- Migration

## Ví dụ
\`\`\`prisma
model User {
  id    Int    @id @default(autoincrement())
  email String @unique
  name  String?
}
\`\`\`

## Bài tập luyện tập
1. Tạo model User
2. Tạo model Post
3. Tạo quan hệ user và posts
4. Chạy migration đầu tiên

## Bài tập thử thách
- Thiết kế schema Prisma cho app học online gồm User, Course, Lesson
      `
    },
    {
      id: 'db-16',
      title: 'Buổi 16: CRUD với Prisma Client',
      level: 'advanced',
      content: `
# Buổi 16: CRUD với Prisma Client

## Mục tiêu
- Biết dùng Prisma Client để thao tác dữ liệu
- Biết create, find, update, delete
- Hiểu cách query an toàn hơn với TypeScript

## Nội dung chính
- \`create()\`
- \`findMany()\`
- \`findUnique()\`
- \`update()\`
- \`delete()\`

## Ví dụ
\`\`\`typescript
const user = await prisma.user.create({
  data: {
    email: 'linh@example.com',
    name: 'Linh',
  },
});
\`\`\`

## Bài tập luyện tập
1. Tạo user mới
2. Lấy danh sách user
3. Tìm user theo email
4. Cập nhật tên user
5. Xóa user theo id

## Bài tập thử thách
- Viết CRUD cho bảng courses bằng Prisma
      `
    },
    {
      id: 'db-17',
      title: 'Buổi 17: Quan hệ dữ liệu với Prisma',
      level: 'advanced',
      content: `
# Buổi 17: Quan hệ dữ liệu với Prisma

## Mục tiêu
- Biết khai báo quan hệ trong Prisma
- Biết lấy dữ liệu kèm quan hệ
- Hiểu \`include\` và \`select\`

## Nội dung chính
- Quan hệ 1-nhiều
- Quan hệ nhiều-nhiều ở mức cơ bản
- \`include\`
- \`select\`

## Ví dụ
\`\`\`typescript
const users = await prisma.user.findMany({
  include: {
    posts: true,
  },
});
\`\`\`

## Bài tập luyện tập
1. Lấy user kèm bài viết
2. Lấy khóa học kèm danh sách bài học
3. Chỉ lấy một số trường bằng \`select\`

## Bài tập thử thách
- Tạo truy vấn lấy chi tiết khóa học gồm lesson và instructor
      `
    },
    {
      id: 'db-18',
      title: 'Buổi 18: MongoDB và tư duy document database',
      level: 'advanced',
      content: `
# Buổi 18: MongoDB và tư duy document database

## Mục tiêu
- Hiểu MongoDB lưu dữ liệu kiểu document
- Biết collection và document là gì
- Biết khi nào MongoDB phù hợp hơn SQL

## Nội dung chính
- Database
- Collection
- Document
- BSON / JSON
- Schema linh hoạt

## Ví dụ
\`\`\`json
{
  "name": "An",
  "email": "an@example.com",
  "skills": ["HTML", "CSS", "JavaScript"]
}
\`\`\`

## Bài tập luyện tập
1. Mô tả 1 document user
2. Mô tả collection posts
3. So sánh document MongoDB với row SQL

## Bài tập thử thách
- Chọn MongoDB hay PostgreSQL cho app ghi chú và giải thích
      `
    },
    {
      id: 'db-19',
      title: 'Buổi 19: Mongoose và làm việc với MongoDB trong Node.js',
      level: 'advanced',
      content: `
# Buổi 19: Mongoose và làm việc với MongoDB trong Node.js

## Mục tiêu
- Biết Mongoose là gì
- Biết tạo schema và model với MongoDB
- Biết CRUD cơ bản bằng Mongoose

## Nội dung chính
- Kết nối MongoDB
- Mongoose schema
- Model
- Create, find, update, delete
- Validation cơ bản

## Ví dụ
\`\`\`javascript
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});
\`\`\`

## Bài tập luyện tập
1. Tạo model User bằng Mongoose
2. Tạo mới một user
3. Tìm user theo email
4. Cập nhật tuổi của user

## Bài tập thử thách
- Tạo model Post có title, content, author và createdAt
      `
    },
    {
      id: 'db-20',
      title: 'Buổi 20: Mini Project và dự án cuối khóa Cơ sở dữ liệu & ORM',
      level: 'advanced',
      content: `
# Buổi 20: Mini Project và dự án cuối khóa Cơ sở dữ liệu & ORM

## Mục tiêu
- Kết hợp toàn bộ kiến thức database đã học
- Tạo schema và luồng dữ liệu rõ ràng
- Tự đánh giá mức độ làm chủ SQL, NoSQL và ORM

## Gợi ý project
Chọn 1 trong các project:
1. Database cho app blog
2. Database cho app học online
3. Database cho app bán hàng
4. Database cho app quản lý công việc
5. Database cho app quản lý người dùng và phân quyền

## Yêu cầu bắt buộc
- Có thiết kế schema rõ ràng
- Có quan hệ dữ liệu hợp lý
- Có ít nhất một truy vấn CRUD hoàn chỉnh
- Có lựa chọn rõ giữa SQL hoặc NoSQL
- Có dùng Prisma hoặc Mongoose ở mức cơ bản

## Checklist tự đánh giá
- Schema có dễ hiểu không?
- Có lặp dữ liệu không cần thiết không?
- Quan hệ dữ liệu có hợp lý không?
- Dễ mở rộng thêm tính năng mới không?
- Truy vấn CRUD có rõ ràng không?

## Bài tập cuối khóa
- Hoàn thành schema cho project
- Viết mô tả lý do chọn SQL hoặc NoSQL
- Tự refactor lại model dữ liệu lần 2
      `
    }
  ]
};