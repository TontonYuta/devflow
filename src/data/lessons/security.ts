import { Lesson } from '../../types';

export const securityLesson: Lesson = {
  id: 'web-security-mastery',
  icon: 'shield',
  title: 'Bảo mật Web',
  description:
    'Lộ trình 20 buổi học Bảo mật Web từ cơ bản đến chuyên sâu, chia nhỏ dễ học, có bài tập thực hành và tình huống thực tế để giúp người học xây dựng ứng dụng an toàn hơn, giảm rủi ro rò rỉ dữ liệu và bảo vệ người dùng.',
  points: [
    'Hiểu tư duy bảo mật và các lỗ hổng web phổ biến',
    'Nắm chắc XSS, CSRF, Auth, Session, JWT và phân quyền',
    'Biết bảo vệ API bằng validation, CORS, rate limit và security headers',
    'Biết xử lý an toàn dữ liệu người dùng, file upload và secrets',
    'Có bài tập và project để luyện tư duy xây hệ thống web an toàn'
  ],
  chapters: [
    {
      id: 'sec-01',
      title: 'Buổi 1: Bảo mật Web là gì? Vì sao lập trình viên nào cũng phải biết?',
      level: 'beginner',
      content: `
# Buổi 1: Bảo mật Web là gì? Vì sao lập trình viên nào cũng phải biết?

## Mục tiêu
- Hiểu bảo mật web là gì
- Biết vì sao ứng dụng nhỏ cũng cần bảo mật
- Hiểu tư duy “phòng thủ từ đầu” thay vì sửa lỗi muộn

## Nội dung chính
- Bảo mật web là bảo vệ dữ liệu, tài khoản và hệ thống
- Ứng dụng có người dùng thật luôn có rủi ro thật
- Một lỗi nhỏ có thể dẫn tới:
  - lộ tài khoản
  - mất dữ liệu
  - mất quyền kiểm soát hệ thống
- Bảo mật không phải việc của riêng backend hay DevOps

## Ví dụ
\`\`\`text
Một form đăng nhập làm nhanh nhưng lưu mật khẩu sai cách
có thể khiến toàn bộ tài khoản người dùng bị lộ nếu database bị rò rỉ.
\`\`\`

## Bài tập luyện tập
1. Nêu 3 lý do vì sao app web cần bảo mật
2. Liệt kê 5 loại dữ liệu nhạy cảm trong một ứng dụng
3. Giải thích vì sao "app nhỏ nên chưa cần bảo mật" là suy nghĩ nguy hiểm

## Bài tập thử thách
- Phân tích một website quen thuộc và nêu những tài sản cần bảo vệ nhất
      `
    },
    {
      id: 'sec-02',
      title: 'Buổi 2: Tư duy bảo mật cơ bản - không tin đầu vào, không tin client',
      level: 'beginner',
      content: `
# Buổi 2: Tư duy bảo mật cơ bản - không tin đầu vào, không tin client

## Mục tiêu
- Hiểu các nguyên tắc phòng thủ nền tảng
- Biết vì sao không được tin dữ liệu từ phía người dùng
- Hình thành tư duy kiểm tra mọi đầu vào

## Nội dung chính
- Không tin dữ liệu từ form, query, params, headers
- Không tin dữ liệu chỉ vì frontend đã validate
- Mọi kiểm tra quan trọng phải có ở server
- Nguyên tắc ít quyền nhất
- Fail safe: lỗi thì từ chối, không mặc định cho qua

## Ví dụ
\`\`\`text
Frontend có thể chặn tuổi âm,
nhưng hacker có thể gửi request trực tiếp lên API với age = -100.
\`\`\`

## Bài tập luyện tập
1. Nêu 5 nguồn dữ liệu đầu vào cần kiểm tra
2. Giải thích vì sao validate ở frontend là chưa đủ
3. Cho 3 ví dụ dữ liệu client có thể giả mạo

## Bài tập thử thách
- Mô tả một API đơn giản và chỉ ra những điểm không nên tin tưởng từ client
      `
    },
    {
      id: 'sec-03',
      title: 'Buổi 3: HTTP, HTTPS, Cookie và Session ở mức bảo mật cơ bản',
      level: 'beginner',
      content: `
# Buổi 3: HTTP, HTTPS, Cookie và Session ở mức bảo mật cơ bản

## Mục tiêu
- Hiểu vai trò của HTTPS
- Biết cookie và session là gì
- Biết vì sao truyền dữ liệu nhạy cảm qua HTTP là nguy hiểm

## Nội dung chính
- HTTP và HTTPS
- Mã hóa khi truyền dữ liệu
- Cookie lưu trạng thái đăng nhập
- Session phía server
- Cookie có thể mang theo mỗi request

## Ví dụ
\`\`\`text
Nếu đăng nhập qua HTTP thay vì HTTPS,
dữ liệu có thể bị nghe lén trên đường truyền.
\`\`\`

## Bài tập luyện tập
1. So sánh HTTP và HTTPS
2. Giải thích cookie dùng để làm gì
3. Giải thích session giúp server nhớ người dùng như thế nào

## Bài tập thử thách
- Mô tả luồng đăng nhập đơn giản bằng session từ lúc login đến lúc truy cập profile
      `
    },
    {
      id: 'sec-04',
      title: 'Buổi 4: XSS là gì? Hiểu đúng để phòng chống đúng',
      level: 'beginner',
      content: `
# Buổi 4: XSS là gì? Hiểu đúng để phòng chống đúng

## Mục tiêu
- Hiểu XSS là gì
- Biết vì sao XSS nguy hiểm
- Nhận diện tình huống dễ sinh XSS

## Nội dung chính
- XSS là chèn mã độc hại vào nội dung web
- Rủi ro:
  - đánh cắp session
  - giả mạo hành động người dùng
  - thay đổi giao diện trang
- Vùng nguy hiểm:
  - bình luận
  - hồ sơ người dùng
  - nội dung nhập tự do
  - render HTML không an toàn

## Ví dụ
\`\`\`text
Nếu nội dung người dùng nhập được render thẳng như HTML,
trình duyệt có thể hiểu đó là mã thay vì văn bản bình thường.
\`\`\`

## Bài tập luyện tập
1. Nêu 3 nơi trong app dễ sinh XSS
2. Giải thích vì sao bình luận người dùng là vùng rủi ro cao
3. Phân biệt dữ liệu an toàn và dữ liệu chưa xử lý

## Bài tập thử thách
- Phân tích một tính năng “mô tả sản phẩm” và chỉ ra nguy cơ XSS nếu render sai cách
      `
    },
    {
      id: 'sec-05',
      title: 'Buổi 5: Phòng chống XSS trong frontend và backend',
      level: 'beginner',
      content: `
# Buổi 5: Phòng chống XSS trong frontend và backend

## Mục tiêu
- Biết cách giảm rủi ro XSS
- Hiểu escape dữ liệu là gì
- Biết khi nào không được render HTML thô

## Nội dung chính
- Escape dữ liệu đầu ra
- Render text thay vì HTML khi không cần thiết
- Cẩn thận với:
  - dangerouslySetInnerHTML
  - innerHTML
- Sanitize khi thật sự cần hiển thị HTML do người dùng tạo
- React thường tự escape nếu dùng đúng cách

## Ví dụ
\`\`\`tsx
// Tốt hơn: hiển thị như text
<p>{comment}</p>
\`\`\`

## Bài tập luyện tập
1. Nêu 3 cách giảm rủi ro XSS
2. Giải thích vì sao innerHTML dễ nguy hiểm
3. Chỉ ra cách hiển thị text an toàn hơn trong React

## Bài tập thử thách
- Rà soát một component hiển thị nội dung người dùng và đề xuất cách làm an toàn hơn
      `
    },
    {
      id: 'sec-06',
      title: 'Buổi 6: CSRF là gì? Vì sao thao tác “đã đăng nhập” vẫn có thể bị lợi dụng?',
      level: 'beginner',
      content: `
# Buổi 6: CSRF là gì? Vì sao thao tác “đã đăng nhập” vẫn có thể bị lợi dụng?

## Mục tiêu
- Hiểu CSRF là gì
- Biết vì sao request có cookie đăng nhập có thể bị lợi dụng
- Nhận ra các hành động nhạy cảm cần bảo vệ

## Nội dung chính
- CSRF nhắm vào người dùng đang có phiên đăng nhập hợp lệ
- Tác động tới hành động như:
  - đổi mật khẩu
  - chuyển quyền
  - cập nhật hồ sơ
  - thanh toán
- Trình duyệt có thể tự gửi cookie nếu cấu hình không đủ chặt

## Ví dụ
\`\`\`text
Người dùng đang đăng nhập ở một trang,
sau đó bị dụ mở một trang khác có request gửi ngầm tới hệ thống.
\`\`\`

## Bài tập luyện tập
1. Nêu 4 hành động nhạy cảm dễ bị ảnh hưởng bởi CSRF
2. Giải thích vì sao request có cookie hợp lệ chưa chắc là an toàn
3. So sánh XSS và CSRF ở mức đơn giản

## Bài tập thử thách
- Phân tích tính năng đổi email và chỉ ra vì sao nó cần chống CSRF
      `
    },
    {
      id: 'sec-07',
      title: 'Buổi 7: Chống CSRF với token và SameSite cookie',
      level: 'intermediate',
      content: `
# Buổi 7: Chống CSRF với token và SameSite cookie

## Mục tiêu
- Biết các cách phòng chống CSRF phổ biến
- Hiểu vai trò của anti-CSRF token
- Biết thuộc tính SameSite giúp gì cho cookie

## Nội dung chính
- Anti-CSRF token
- Kiểm tra nguồn yêu cầu hợp lệ
- SameSite=Lax
- SameSite=Strict
- Không nên phụ thuộc vào một biện pháp duy nhất

## Ví dụ
\`\`\`text
Form gửi dữ liệu nhạy cảm nên kèm token bí mật do server tạo,
server phải kiểm tra token đó trước khi xử lý hành động.
\`\`\`

## Bài tập luyện tập
1. Giải thích anti-CSRF token hoạt động ở mức ý tưởng
2. So sánh SameSite=Lax và Strict
3. Nêu trường hợp nào cần bảo vệ chống CSRF mạnh hơn

## Bài tập thử thách
- Thiết kế luồng bảo vệ cho form đổi mật khẩu dùng cookie-based auth
      `
    },
    {
      id: 'sec-08',
      title: 'Buổi 8: Authentication và Authorization - khác nhau thế nào?',
      level: 'intermediate',
      content: `
# Buổi 8: Authentication và Authorization - khác nhau thế nào?

## Mục tiêu
- Phân biệt xác thực và phân quyền
- Biết vì sao đăng nhập thành công vẫn chưa đủ
- Hiểu luồng bảo vệ tài nguyên theo vai trò

## Nội dung chính
- Authentication: bạn là ai
- Authorization: bạn được làm gì
- Ví dụ role:
  - guest
  - user
  - admin
- Tách rõ kiểm tra đăng nhập và kiểm tra quyền

## Ví dụ
\`\`\`text
User đã đăng nhập nhưng không có quyền xóa bài viết của người khác.
\`\`\`

## Bài tập luyện tập
1. Phân biệt authn và authz bằng ví dụ
2. Liệt kê 3 hành động cần kiểm tra quyền
3. Tạo bảng role đơn giản cho app blog

## Bài tập thử thách
- Thiết kế quyền cho app học online gồm học viên, giảng viên, admin
      `
    },
    {
      id: 'sec-09',
      title: 'Buổi 9: Lưu mật khẩu an toàn - hashing, salt và điều không bao giờ được làm',
      level: 'intermediate',
      content: `
# Buổi 9: Lưu mật khẩu an toàn - hashing, salt và điều không bao giờ được làm

## Mục tiêu
- Hiểu vì sao không được lưu mật khẩu thô
- Biết hash và salt là gì
- Biết thư viện mạnh thường dùng cho mật khẩu

## Nội dung chính
- Không lưu plain text password
- Hash một chiều
- Salt để chống dò theo bảng có sẵn
- bcrypt
- Argon2
- So sánh password bằng hash thay vì giải mã

## Ví dụ
\`\`\`text
Đăng ký:
mật khẩu -> hash -> lưu hash

Đăng nhập:
mật khẩu nhập vào -> hash lại -> so sánh với hash đã lưu
\`\`\`

## Bài tập luyện tập
1. Giải thích vì sao mã hóa hai chiều không phù hợp để lưu mật khẩu
2. So sánh plain text và hash
3. Nêu vai trò của salt

## Bài tập thử thách
- Mô tả luồng đăng ký và đăng nhập an toàn ở mức backend
      `
    },
    {
      id: 'sec-10',
      title: 'Buổi 10: Session, JWT và nơi lưu token an toàn hơn',
      level: 'intermediate',
      content: `
# Buổi 10: Session, JWT và nơi lưu token an toàn hơn

## Mục tiêu
- Hiểu session và JWT khác nhau thế nào
- Biết ưu nhược điểm cơ bản của mỗi cách
- Biết vì sao nơi lưu token ảnh hưởng lớn tới bảo mật

## Nội dung chính
- Session-based auth
- Token-based auth
- JWT có payload và chữ ký
- Không lưu dữ liệu nhạy cảm trong payload
- HttpOnly cookie
- localStorage và rủi ro khi bị XSS

## Ví dụ
\`\`\`text
JWT giúp client mang theo trạng thái đăng nhập,
nhưng nơi lưu JWT phải được cân nhắc kỹ về bảo mật.
\`\`\`

## Bài tập luyện tập
1. So sánh session và JWT
2. Nêu 2 ưu và 2 nhược điểm của JWT
3. Giải thích vì sao HttpOnly cookie thường an toàn hơn localStorage với token

## Bài tập thử thách
- Chọn một cách auth cho app dashboard nội bộ và giải thích lựa chọn
      `
    },
    {
      id: 'sec-11',
      title: 'Buổi 11: Cookie an toàn - HttpOnly, Secure, SameSite',
      level: 'intermediate',
      content: `
# Buổi 11: Cookie an toàn - HttpOnly, Secure, SameSite

## Mục tiêu
- Biết các thuộc tính cookie quan trọng
- Hiểu từng thuộc tính giúp giảm rủi ro gì
- Biết cấu hình cookie đăng nhập an toàn hơn

## Nội dung chính
- HttpOnly
- Secure
- SameSite
- Path
- Expiry
- Cookie đăng nhập và cookie ứng dụng

## Ví dụ
\`\`\`text
Cookie đăng nhập nên cân nhắc:
- HttpOnly
- Secure
- SameSite=Lax hoặc Strict
\`\`\`

## Bài tập luyện tập
1. Giải thích từng thuộc tính HttpOnly, Secure, SameSite
2. Chọn cấu hình cookie phù hợp cho môi trường production
3. Nêu lý do không nên bỏ qua Secure trên HTTPS

## Bài tập thử thách
- Thiết kế cấu hình cookie cho hệ thống đăng nhập quản trị
      `
    },
    {
      id: 'sec-12',
      title: 'Buổi 12: Security Headers - CSP, HSTS, X-Frame-Options',
      level: 'advanced',
      content: `
# Buổi 12: Security Headers - CSP, HSTS, X-Frame-Options

## Mục tiêu
- Hiểu security headers là gì
- Biết CSP giúp gì cho XSS
- Biết các header quan trọng trong ứng dụng web

## Nội dung chính
- Content-Security-Policy
- Strict-Transport-Security
- X-Frame-Options
- Referrer-Policy
- X-Content-Type-Options
- Helmet trong Node.js

## Ví dụ
\`\`\`text
CSP giúp trình duyệt chỉ tải script từ nguồn bạn cho phép.
\`\`\`

## Bài tập luyện tập
1. Nêu vai trò của CSP
2. Giải thích HSTS giúp gì cho HTTPS
3. Giải thích X-Frame-Options giúp giảm rủi ro nào

## Bài tập thử thách
- Đề xuất bộ headers bảo mật cơ bản cho một app dashboard
      `
    },
    {
      id: 'sec-13',
      title: 'Buổi 13: CORS và kiểm soát nguồn gọi API',
      level: 'advanced',
      content: `
# Buổi 13: CORS và kiểm soát nguồn gọi API

## Mục tiêu
- Hiểu CORS là gì
- Biết vì sao không nên mở mọi nguồn bừa bãi
- Biết cấu hình CORS chặt chẽ hơn

## Nội dung chính
- Same-Origin Policy
- CORS
- Origin
- Preflight ở mức cơ bản
- Chỉ cho phép domain đáng tin cậy
- Không dùng wildcard cho API nhạy cảm

## Ví dụ
\`\`\`text
API admin không nên cho mọi origin truy cập chỉ vì "cho nhanh".
\`\`\`

## Bài tập luyện tập
1. Giải thích CORS bằng lời của bạn
2. Nêu 3 trường hợp không nên dùng Access-Control-Allow-Origin: *
3. Liệt kê các domain có thể được whitelist trong một dự án thực tế

## Bài tập thử thách
- Thiết kế cấu hình CORS cho frontend production, staging và local
      `
    },
    {
      id: 'sec-14',
      title: 'Buổi 14: Bảo mật API - validation, schema check và trust boundary',
      level: 'advanced',
      content: `
# Buổi 14: Bảo mật API - validation, schema check và trust boundary

## Mục tiêu
- Biết API phải kiểm tra dữ liệu đầu vào chặt chẽ
- Hiểu validation giúp giảm rủi ro logic và bảo mật
- Biết phân biệt dữ liệu hợp lệ và dữ liệu chỉ “có vẻ đúng”

## Nội dung chính
- Validate body, params, query
- Kiểm tra kiểu dữ liệu
- Giới hạn độ dài
- Giới hạn giá trị hợp lệ
- Loại bỏ field thừa không mong muốn
- Trust boundary giữa client và server

## Ví dụ
\`\`\`text
API tạo user không nên nhận tự do mọi field như isAdmin từ client.
\`\`\`

## Bài tập luyện tập
1. Liệt kê các rule validate cho form đăng ký
2. Liệt kê các rule validate cho API tạo sản phẩm
3. Nêu ví dụ field nguy hiểm nếu nhận thẳng từ client

## Bài tập thử thách
- Thiết kế validation cho API cập nhật hồ sơ người dùng
      `
    },
    {
      id: 'sec-15',
      title: 'Buổi 15: SQL Injection và truy vấn dữ liệu an toàn',
      level: 'advanced',
      content: `
# Buổi 15: SQL Injection và truy vấn dữ liệu an toàn

## Mục tiêu
- Hiểu SQL Injection là gì ở mức phòng thủ
- Biết vì sao ghép chuỗi truy vấn thủ công rất nguy hiểm
- Biết cách giảm rủi ro bằng query an toàn

## Nội dung chính
- SQL Injection là chèn dữ liệu làm thay đổi ý nghĩa truy vấn
- Rủi ro khi nối chuỗi trực tiếp
- Prepared statements
- Parameterized queries
- ORM giúp giảm lỗi viết query thủ công trong nhiều trường hợp

## Ví dụ
\`\`\`text
Không nên ghép truy vấn từ text người dùng nhập theo kiểu thủ công.
\`\`\`

## Bài tập luyện tập
1. Giải thích vì sao nối chuỗi query là nguy hiểm
2. Nêu 3 cách giảm rủi ro SQL Injection
3. Phân tích form tìm kiếm user và chỉ ra chỗ cần cẩn thận

## Bài tập thử thách
- Rà soát một API login giả định và đề xuất cách truy vấn an toàn hơn
      `
    },
    {
      id: 'sec-16',
      title: 'Buổi 16: Rate limiting, brute-force và bảo vệ endpoint nhạy cảm',
      level: 'advanced',
      content: `
# Buổi 16: Rate limiting, brute-force và bảo vệ endpoint nhạy cảm

## Mục tiêu
- Hiểu vì sao endpoint login và OTP cần bảo vệ
- Biết rate limit giúp giảm tấn công dò đoán
- Biết nơi nào cần áp dụng mạnh hơn

## Nội dung chính
- Rate limiting
- Brute-force
- Login attempts
- Endpoint gửi email, OTP, reset password
- Khóa tạm, delay, captcha ở mức khái quát

## Ví dụ
\`\`\`text
Một IP không nên được thử mật khẩu vô hạn lần trong thời gian ngắn.
\`\`\`

## Bài tập luyện tập
1. Liệt kê 5 endpoint cần rate limit
2. Giải thích brute-force là gì ở mức phòng thủ
3. Đề xuất rule rate limit cho login

## Bài tập thử thách
- Thiết kế lớp bảo vệ cho API reset mật khẩu
      `
    },
    {
      id: 'sec-17',
      title: 'Buổi 17: IDOR, phân quyền theo tài nguyên và lỗi “đã đăng nhập là đủ”',
      level: 'advanced',
      content: `
# Buổi 17: IDOR, phân quyền theo tài nguyên và lỗi “đã đăng nhập là đủ”

## Mục tiêu
- Hiểu rủi ro khi chỉ kiểm tra đã đăng nhập mà không kiểm tra quyền sở hữu
- Biết khái niệm phân quyền theo tài nguyên
- Tránh lỗi cho xem hoặc sửa dữ liệu không thuộc về mình

## Nội dung chính
- Kiểm tra quyền sở hữu dữ liệu
- User chỉ được sửa tài nguyên của chính mình khi phù hợp
- Admin và user có quyền khác nhau
- Không chỉ dựa vào id từ client

## Ví dụ
\`\`\`text
API /orders/:id không nên trả dữ liệu chỉ vì người dùng đã đăng nhập,
mà phải kiểm tra đơn hàng đó có thuộc về họ hay không.
\`\`\`

## Bài tập luyện tập
1. Nêu 3 API cần kiểm tra quyền sở hữu
2. So sánh kiểm tra “logged in” và kiểm tra “đúng quyền”
3. Thiết kế rule quyền cho bài viết cá nhân

## Bài tập thử thách
- Phân tích app quản lý hồ sơ và chỉ ra nơi dễ mắc lỗi truy cập sai tài nguyên
      `
    },
    {
      id: 'sec-18',
      title: 'Buổi 18: File upload, secrets và cấu hình môi trường an toàn',
      level: 'advanced',
      content: `
# Buổi 18: File upload, secrets và cấu hình môi trường an toàn

## Mục tiêu
- Biết file upload cũng là bề mặt tấn công
- Biết cách quản lý secrets an toàn hơn
- Tránh để lộ khóa bí mật trong repo

## Nội dung chính
- Kiểm tra loại file
- Giới hạn kích thước file
- Đổi tên file an toàn
- Không tin phần mở rộng file do client gửi
- .env
- API keys
- Secret rotation ở mức ý tưởng
- Không commit secrets lên Git

## Ví dụ
\`\`\`text
File avatar không nên được chấp nhận vô hạn dung lượng hoặc mọi định dạng.
\`\`\`

## Bài tập luyện tập
1. Nêu 4 rule an toàn cho upload ảnh
2. Giải thích vì sao không được đẩy file .env lên GitHub
3. Liệt kê 5 loại secret thường có trong dự án web

## Bài tập thử thách
- Thiết kế checklist an toàn cho tính năng upload avatar
      `
    },
    {
      id: 'sec-19',
      title: 'Buổi 19: Logging, monitoring và phản ứng khi có sự cố',
      level: 'advanced',
      content: `
# Buổi 19: Logging, monitoring và phản ứng khi có sự cố

## Mục tiêu
- Hiểu bảo mật không dừng ở chỗ “ngăn chặn”
- Biết hệ thống cần ghi log và theo dõi bất thường
- Biết phản ứng cơ bản khi phát hiện sự cố

## Nội dung chính
- Audit log
- Login failed log
- Cảnh báo truy cập bất thường
- Không ghi log dữ liệu nhạy cảm thô
- Quy trình:
  - phát hiện
  - khoanh vùng
  - vô hiệu hóa
  - reset phiên
  - thông báo nội bộ

## Ví dụ
\`\`\`text
Hệ thống nên biết nếu một tài khoản có 100 lần đăng nhập thất bại trong 5 phút.
\`\`\`

## Bài tập luyện tập
1. Liệt kê 5 loại sự kiện nên ghi log
2. Nêu 3 dữ liệu không nên ghi log thô
3. Viết quy trình phản ứng ngắn khi nghi ngờ tài khoản bị chiếm

## Bài tập thử thách
- Thiết kế sơ đồ giám sát cơ bản cho hệ thống đăng nhập
      `
    },
    {
      id: 'sec-20',
      title: 'Buổi 20: Mini Project và dự án cuối khóa Bảo mật Web',
      level: 'advanced',
      content: `
# Buổi 20: Mini Project và dự án cuối khóa Bảo mật Web

## Mục tiêu
- Kết hợp toàn bộ kiến thức bảo mật đã học
- Rà soát một ứng dụng web theo tư duy phòng thủ
- Tự đánh giá mức độ hiểu và áp dụng bảo mật

## Gợi ý project
Chọn 1 trong các project:
1. Blog mini có login
2. Dashboard quản trị
3. App học online có tài khoản
4. App bán hàng có user và admin
5. API backend cho app ghi chú

## Yêu cầu bắt buộc
- Có phân biệt auth và authorization
- Có kế hoạch chống XSS và CSRF
- Có validate API đầu vào
- Có cấu hình cookie hoặc token hợp lý
- Có ít nhất một lớp bảo vệ API như rate limit, CORS hoặc headers
- Có quy tắc quản lý secrets và log

## Checklist tự đánh giá
- Có đang tin dữ liệu từ client quá mức không?
- Mật khẩu đã được lưu an toàn chưa?
- Token hoặc cookie có cấu hình đủ chặt chưa?
- API đã kiểm tra quyền truy cập theo tài nguyên chưa?
- Có header, rate limit và logging cơ bản chưa?

## Bài tập cuối khóa
- Chọn một ứng dụng bạn đã làm hoặc app giả định
- Viết security checklist cho app đó
- Tự rà soát 10 điểm rủi ro và cách giảm rủi ro
- Ghi lại phần nào bạn đã hiểu chắc, phần nào cần học sâu thêm
      `
    }
  ]
};