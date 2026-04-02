import { Lesson } from '../../types';

export const securityLesson: Lesson = {
  id: 'web-security-mastery',
  icon: 'shield',
  title: 'Bảo mật Web',
  description:
    'Lộ trình Bảo mật Web theo phong cách tự học cùng AI mentor. Mỗi buổi học đi kèm prompt cực chi tiết để học viên chỉ cần copy vào AI là có thể học từ bản chất, hiểu rủi ro phổ biến, phân tích trust boundary, thiết kế lớp phòng thủ và được review như học cùng mentor security 1-1.',
  points: [
    'Mỗi buổi có prompt cực chi tiết để copy vào AI và học ngay',
    'AI đóng vai mentor security, dạy từ bản chất chứ không chỉ liệt kê lỗ hổng',
    'Có prompt học lý thuyết, prompt phân tích rủi ro, prompt audit và prompt phản biện',
    'Tập trung vào năng lực thật: threat thinking, auth, XSS, CSRF, validation, API security, secret handling',
    'Có bài tập theo kiểu audit ứng dụng thật thay vì học thuộc định nghĩa',
    'Học xong có thể tự rà soát một app web ở mức nền tảng và đề xuất các lớp phòng thủ hợp lý'
  ],
  chapters: [
    {
      id: 'sec-01',
      title: 'Buổi 1: Bảo mật Web là gì và vì sao lập trình viên nào cũng phải có tư duy phòng thủ?',
      level: 'beginner',
      content: `
# Buổi 1: Bảo mật Web là gì và vì sao lập trình viên nào cũng phải có tư duy phòng thủ?

## Mục tiêu
- Hiểu bảo mật web là gì
- Hiểu vì sao app nhỏ vẫn cần bảo mật
- Bắt đầu có tư duy “phòng thủ từ đầu”
- Nhìn ứng dụng như một hệ thống có tài sản cần bảo vệ

## Cách học buổi này
Bạn sẽ copy từng prompt bên dưới vào AI theo đúng thứ tự.
Không học lướt. Sau mỗi prompt phải tự giải thích lại bằng lời của bạn.

## Prompt 1 - Nhờ AI dạy lý thuyết từ gốc
\`\`\`
Bạn hãy đóng vai một mentor Web Security cực giỏi, chuyên dạy bảo mật cho lập trình viên web từ nền tảng.

Hôm nay hãy dạy tôi buổi đầu tiên về bảo mật web theo phong cách:
- cực dễ hiểu nhưng không hời hợt
- giải thích từ bản chất
- luôn nói vì sao kiến thức này quan trọng
- gắn với ví dụ thực tế của ứng dụng web
- không dùng thuật ngữ khó nếu chưa giải thích

Chủ đề hôm nay:
- Bảo mật web là gì?
- Vì sao ứng dụng nhỏ cũng cần bảo mật?
- Những gì trong ứng dụng cần được bảo vệ?
- Vì sao bảo mật không phải việc của riêng backend hay DevOps?

Tôi muốn bạn dạy theo format:
1. Bảo mật web là gì?
2. Những tài sản nào trong ứng dụng cần bảo vệ?
3. Các rủi ro thật có thể xảy ra nếu bảo mật kém:
   - lộ tài khoản
   - mất dữ liệu
   - bị chiếm quyền
   - mất uy tín
4. Vì sao "app nhỏ nên chưa cần bảo mật" là tư duy nguy hiểm?
5. Vai trò của frontend, backend, database, hạ tầng trong bảo mật
6. Cho 5 ví dụ ứng dụng và tài sản quan trọng nhất cần bảo vệ
7. Chỉ ra 8 hiểu lầm phổ biến của người mới về web security
8. Đặt cho tôi 5 câu hỏi kiểm tra hiểu bài
9. Sau khi tôi trả lời, bạn phải chấm và sửa thật kỹ

Dùng tiếng Việt và dạy như mentor thật sự.
\`\`\`

## Prompt 2 - Nhờ AI luyện tư duy "tài sản cần bảo vệ"
\`\`\`
Tôi muốn luyện tư duy nhìn một ứng dụng theo góc nhìn security.

Hãy cho tôi 6 ứng dụng quen thuộc:
- blog có login
- app học online
- app bán hàng
- dashboard quản trị
- app ghi chú
- app đặt lịch

Với mỗi ứng dụng:
1. hỏi tôi tài sản quan trọng nhất là gì
2. hỏi tôi dữ liệu nhạy cảm là gì
3. hỏi tôi nếu bị tấn công thì hậu quả lớn nhất là gì
4. sau đó bạn mới chữa
5. nếu tôi trả lời mơ hồ, hãy bắt tôi nói cụ thể hơn

Mục tiêu là để tôi bắt đầu nhìn ứng dụng như một hệ thống cần được bảo vệ.
\`\`\`

## Prompt 3 - Nhờ AI kiểm tra hiểu bài
\`\`\`
Hãy kiểm tra xem tôi đã thật sự hiểu buổi 1 Bảo mật Web chưa.

Tôi muốn có:
- 3 câu hỏi trắc nghiệm có giải thích đáp án
- 3 câu hỏi tự luận ngắn
- 2 tình huống thực tế
- 1 câu hỏi tư duy: vì sao một lỗi nhỏ ở chức năng "ít ai để ý" vẫn có thể gây hậu quả lớn?

Sau khi tôi trả lời, bạn hãy:
- chấm điểm từng câu
- giải thích chỗ sai
- nói tôi đang ở mức nào: chưa hiểu / hiểu cơ bản / hiểu chắc
\`\`\`

## Bài tập buổi này
1. Liệt kê 5 loại dữ liệu nhạy cảm trong một app bất kỳ
2. Chọn 1 ứng dụng quen thuộc và nêu tài sản cần bảo vệ nhất
3. Viết bằng lời của bạn: bảo mật web thực ra là bảo vệ cái gì

## Tiêu chuẩn hoàn thành
- Hiểu bảo mật là vấn đề của toàn hệ thống
- Biết nhìn ứng dụng theo góc nhìn “tài sản + rủi ro”
- Không còn nghĩ security chỉ là chuyện nâng cao
      `
    },
    {
      id: 'sec-02',
      title: 'Buổi 2: Tư duy nền tảng - không tin client, không tin đầu vào, hiểu trust boundary',
      level: 'beginner',
      content: `
# Buổi 2: Tư duy nền tảng - không tin client, không tin đầu vào, hiểu trust boundary

## Mục tiêu
- Hiểu nguyên tắc “không tin client”
- Hiểu mọi đầu vào đều có thể bị giả mạo
- Hiểu trust boundary là gì
- Bắt đầu suy nghĩ như người thiết kế lớp phòng thủ

## Prompt 1 - Nhờ AI dạy security mindset từ bản chất
\`\`\`
Hãy dạy tôi Bảo mật Web buổi 2 như một mentor security thực chiến.

Chủ đề:
- không tin client
- không tin đầu vào
- validate ở server
- trust boundary
- least privilege
- fail safe

Tôi muốn bạn dạy theo cấu trúc:
1. Vì sao không được tin dữ liệu từ phía client?
2. Những nguồn đầu vào nào đều phải coi là chưa đáng tin?
3. Trust boundary là gì?
4. Vì sao validate ở frontend là chưa đủ?
5. Nguyên tắc least privilege là gì ở mức dễ hiểu?
6. Fail safe nghĩa là gì?
7. Cho ví dụ thực tế:
   - form đăng ký
   - query string
   - params
   - headers
   - request gửi trực tiếp bằng Postman/cURL
8. Chỉ ra lỗi phổ biến:
   - tin rằng frontend đã chặn nên backend an toàn
   - nhận field nhạy cảm từ client
   - cho qua khi lỗi parse/validate
9. Tạo checklist security mindset cơ bản

Dạy như mentor đang chỉnh lại tư duy phòng thủ cho junior.
\`\`\`

## Prompt 2 - Nhờ AI luyện phân tích trust boundary
\`\`\`
Tôi muốn luyện tư duy trust boundary.

Hãy cho tôi 8 tình huống, ví dụ:
- client gửi body JSON
- client gửi role=admin
- client sửa hidden input
- client đổi query pageSize thành rất lớn
- client gửi file tên đẹp nhưng nội dung xấu
- client nói "frontend đã validate rồi"
- client gửi cookie hợp lệ
- client gửi id tài nguyên của người khác

Với mỗi tình huống:
1. hỏi tôi boundary ở đâu
2. hỏi tôi thứ gì không đáng tin
3. hỏi server nên kiểm tra gì
4. sau đó bạn mới chữa
\`\`\`

## Prompt 3 - Nhờ AI review tư duy phòng thủ của tôi
\`\`\`
Tôi sẽ mô tả một API hoặc tính năng web.
Bạn hãy review:
1. Tôi đang tin client ở điểm nào?
2. Trust boundary nằm ở đâu?
3. Field nào cần kiểm tra lại ở server?
4. Nếu lỗi xảy ra thì nên fail ra sao cho an toàn?
5. Có nguyên tắc least privilege nào cần áp dụng không?

Hãy review như mentor security khó tính.
\`\`\`

## Bài tập buổi này
- Liệt kê mọi nguồn đầu vào của một API đơn giản
- Chỉ ra dữ liệu nào tuyệt đối không nên tin
- Viết lại luồng kiểm tra đầu vào ở server

## Tiêu chuẩn hoàn thành
- Hiểu trust boundary
- Không còn tin dữ liệu từ client một cách ngây thơ
- Bắt đầu có tư duy defensive programming
      `
    },
    {
      id: 'sec-03',
      title: 'Buổi 3: HTTP, HTTPS, cookie, session, JWT và nơi lưu trạng thái đăng nhập',
      level: 'beginner',
      content: `
# Buổi 3: HTTP, HTTPS, cookie, session, JWT và nơi lưu trạng thái đăng nhập

## Mục tiêu
- Hiểu vì sao HTTPS là bắt buộc
- Hiểu cookie và session ở mức nền tảng
- Hiểu session và JWT khác nhau thế nào
- Biết nơi lưu token ảnh hưởng bảo mật ra sao

## Prompt 1 - Nhờ AI dạy auth state từ bản chất
\`\`\`
Hãy dạy tôi Bảo mật Web buổi 3 như mentor security/backend.

Chủ đề:
- HTTP
- HTTPS
- cookie
- session
- JWT
- HttpOnly cookie
- localStorage
- Secure
- SameSite

Tôi muốn bạn dạy theo cấu trúc:
1. HTTP và HTTPS khác nhau ở đâu?
2. Vì sao truyền dữ liệu nhạy cảm qua HTTP là nguy hiểm?
3. Cookie dùng để làm gì?
4. Session dùng để làm gì?
5. JWT là gì ở mức dễ hiểu?
6. Session và JWT khác nhau ra sao?
7. Vì sao nơi lưu token ảnh hưởng rất lớn tới bảo mật?
8. HttpOnly, Secure, SameSite giúp gì?
9. Cho ví dụ thực tế:
   - đăng nhập bằng session
   - đăng nhập bằng JWT
   - token trong localStorage vs HttpOnly cookie
10. Chỉ ra lỗi phổ biến:
   - lưu token nhạy cảm mà không cân nhắc XSS
   - không bật Secure trên production
   - nhầm session với JWT
11. Tạo checklist auth state an toàn cơ bản

Dạy như mentor đang xây nền auth security cho junior.
\`\`\`

## Prompt 2 - Nhờ AI luyện chọn chiến lược auth
\`\`\`
Tôi muốn luyện tư duy chọn session hay JWT và nơi lưu trạng thái đăng nhập.

Hãy cho tôi 6 tình huống, ví dụ:
- dashboard nội bộ
- blog có login đơn giản
- app mobile + web
- SPA dùng API riêng
- hệ thống admin nhạy cảm
- app có nhiều subdomain

Với mỗi tình huống:
1. hỏi tôi nghiêng về session hay JWT
2. hỏi tôi muốn lưu trạng thái ở đâu
3. hỏi tôi rủi ro lớn nhất là gì
4. sau đó bạn mới chữa
5. nếu tôi trả lời hời hợt, hãy bắt tôi nói rõ trade-off
\`\`\`

## Prompt 3 - Nhờ AI review auth storage decision của tôi
\`\`\`
Tôi sẽ mô tả cách ứng dụng của tôi lưu trạng thái đăng nhập.
Bạn hãy review:
1. Cách lưu đó có rủi ro gì?
2. HTTPS đã là bắt buộc chưa?
3. Cookie có nên có HttpOnly/Secure/SameSite không?
4. Tôi có đang bỏ qua nguy cơ XSS hoặc CSRF không?
5. Có cách nào an toàn hơn không?

Hãy review như mentor security/backend.
\`\`\`

## Bài tập buổi này
- So sánh session và JWT bằng lời của bạn
- Chọn cách lưu trạng thái đăng nhập cho 2 bài toán khác nhau
- Giải thích vì sao HTTPS là bắt buộc

## Tiêu chuẩn hoàn thành
- Hiểu cookie/session/JWT ở mức nền tảng
- Biết nơi lưu token không phải quyết định nhỏ
- Không xem nhẹ HTTPS
      `
    },
    {
      id: 'sec-04',
      title: 'Buổi 4: XSS - hiểu đúng, nhận diện đúng và phòng chống đúng',
      level: 'beginner',
      content: `
# Buổi 4: XSS - hiểu đúng, nhận diện đúng và phòng chống đúng

## Mục tiêu
- Hiểu XSS là gì
- Biết vì sao XSS nguy hiểm
- Nhận diện các vùng rủi ro cao
- Biết các nguyên tắc phòng chống XSS cơ bản

## Prompt 1 - Nhờ AI dạy XSS từ bản chất
\`\`\`
Hãy dạy tôi Bảo mật Web buổi 4 như mentor security thực chiến.

Chủ đề:
- XSS
- input người dùng
- output encoding
- render text vs render HTML
- innerHTML
- dangerouslySetInnerHTML
- sanitize

Tôi muốn bạn dạy theo cấu trúc:
1. XSS là gì?
2. Vì sao XSS nguy hiểm với người dùng và hệ thống?
3. Những nơi nào trong app dễ phát sinh XSS?
4. Vì sao dữ liệu người dùng phải được coi là không an toàn khi render?
5. Render text an toàn hơn render HTML ở đâu?
6. innerHTML và dangerouslySetInnerHTML nguy hiểm thế nào?
7. Khi nào sanitize là cần thiết?
8. React giúp giảm rủi ro XSS thế nào nếu dùng đúng?
9. Chỉ ra lỗi phổ biến:
   - render HTML thô
   - tin nội dung do user tạo là “vô hại”
   - trộn UI với HTML chưa xử lý
10. Tạo checklist phòng chống XSS cơ bản

Dạy như mentor đang đào tạo junior tránh một trong những lỗi nguy hiểm nhất.
\`\`\`

## Prompt 2 - Nhờ AI luyện nhận diện vùng XSS
\`\`\`
Tôi muốn luyện cách nhận diện chỗ dễ sinh XSS.

Hãy cho tôi 8 tính năng, ví dụ:
- comment
- bio user
- mô tả sản phẩm
- nội dung blog do admin nhập
- ô tìm kiếm hiển thị lại từ khóa
- thông báo toast có chèn dữ liệu user
- preview nội dung rich text
- dashboard hiển thị dữ liệu nhập tự do

Với mỗi tính năng:
1. hỏi tôi nguy cơ XSS nằm ở đâu
2. hỏi tôi nên render an toàn ra sao
3. hỏi tôi khi nào sanitize là cần
4. sau đó bạn mới chữa
\`\`\`

## Prompt 3 - Nhờ AI review component rủi ro XSS của tôi
\`\`\`
Tôi sẽ gửi cho bạn một component/frontend flow đang hiển thị dữ liệu từ người dùng.
Bạn hãy review:
1. Có nguy cơ XSS không?
2. Chỗ nào đang render không an toàn?
3. Có đang dùng innerHTML hoặc HTML thô nguy hiểm không?
4. Có thể thay bằng render text không?
5. Nếu buộc phải render HTML, cần làm gì thêm?

Hãy review như mentor security khó tính.
\`\`\`

## Bài tập buổi này
- Chọn 3 tính năng trong app và phân tích nguy cơ XSS
- Đề xuất cách render an toàn hơn
- Nêu rõ chỗ nào tuyệt đối không nên render HTML thô

## Tiêu chuẩn hoàn thành
- Hiểu XSS là gì
- Biết chỗ nào dễ phát sinh XSS
- Có nguyên tắc phòng chống XSS cơ bản
      `
    },
    {
      id: 'sec-05',
      title: 'Buổi 5: CSRF, cookie-based auth và cách bảo vệ hành động nhạy cảm',
      level: 'intermediate',
      content: `
# Buổi 5: CSRF, cookie-based auth và cách bảo vệ hành động nhạy cảm

## Mục tiêu
- Hiểu CSRF là gì
- Hiểu vì sao người dùng đang đăng nhập vẫn có thể bị lợi dụng
- Biết anti-CSRF token và SameSite cookie giúp gì
- Biết hành động nào cần phòng vệ mạnh hơn

## Prompt 1 - Nhờ AI dạy CSRF từ góc nhìn người dùng thật
\`\`\`
Hãy dạy tôi Bảo mật Web buổi 5 như mentor security/backend.

Chủ đề:
- CSRF
- cookie-based auth
- anti-CSRF token
- SameSite
- hành động nhạy cảm

Tôi muốn bạn dạy theo cấu trúc:
1. CSRF là gì?
2. Vì sao request có cookie hợp lệ chưa chắc là an toàn?
3. Những hành động nào thường là mục tiêu của CSRF?
4. Anti-CSRF token hoạt động ra sao ở mức ý tưởng?
5. SameSite cookie giúp gì?
6. Vì sao không nên chỉ trông chờ vào một biện pháp duy nhất?
7. Cho ví dụ thực tế:
   - đổi mật khẩu
   - đổi email
   - cập nhật quyền
   - checkout hoặc thanh toán
8. Chỉ ra lỗi phổ biến:
   - nghĩ đã đăng nhập thì request chắc chắn do user tạo ra
   - quên bảo vệ form nhạy cảm
   - cấu hình cookie quá lỏng
9. Tạo checklist chống CSRF cơ bản

Dạy như mentor security đang sửa tư duy “đã auth là đủ”.
\`\`\`

## Prompt 2 - Nhờ AI luyện phân tích hành động nhạy cảm
\`\`\`
Tôi muốn luyện cách nhận diện hành động cần chống CSRF mạnh.

Hãy cho tôi 8 action, ví dụ:
- đổi avatar
- đổi mật khẩu
- xóa tài khoản
- thêm thẻ thanh toán
- cập nhật hồ sơ
- tạo bài viết
- xóa bài viết
- chuyển quyền admin

Với mỗi action:
1. hỏi tôi mức độ nhạy cảm là gì
2. hỏi tôi có cần chống CSRF không
3. hỏi tôi nên thêm lớp bảo vệ nào
4. sau đó bạn mới chữa
\`\`\`

## Prompt 3 - Nhờ AI review thiết kế bảo vệ CSRF của tôi
\`\`\`
Tôi sẽ mô tả cách app của tôi bảo vệ hành động nhạy cảm.
Bạn hãy review:
1. Nếu app dùng cookie-based auth, nguy cơ CSRF nằm ở đâu?
2. Action nào đang được bảo vệ chưa đủ?
3. Anti-CSRF token có cần không?
4. SameSite đã hợp lý chưa?
5. Có lớp bảo vệ nào tôi đang thiếu?

Hãy review như mentor security/backend.
\`\`\`

## Bài tập buổi này
- Chọn 5 hành động nhạy cảm trong một app
- Chỉ ra hành động nào cần chống CSRF mạnh hơn
- Thiết kế luồng bảo vệ cho 1 form nhạy cảm

## Tiêu chuẩn hoàn thành
- Hiểu CSRF là gì
- Biết action nhạy cảm cần được bảo vệ
- Biết anti-CSRF token và SameSite có vai trò gì
      `
    },
    {
      id: 'sec-06',
      title: 'Buổi 6: Authentication, Authorization, mật khẩu an toàn và kiểm tra quyền theo tài nguyên',
      level: 'intermediate',
      content: `
# Buổi 6: Authentication, Authorization, mật khẩu an toàn và kiểm tra quyền theo tài nguyên

## Mục tiêu
- Phân biệt authentication và authorization
- Hiểu vì sao “đã đăng nhập” chưa đủ
- Hiểu cách lưu mật khẩu an toàn
- Hiểu kiểm tra quyền theo tài nguyên để tránh IDOR

## Prompt 1 - Nhờ AI dạy authn/authz + password security
\`\`\`
Hãy dạy tôi Bảo mật Web buổi 6 như mentor security/backend.

Chủ đề:
- authentication
- authorization
- role
- resource ownership
- IDOR
- password hashing
- salt
- bcrypt
- Argon2

Tôi muốn bạn dạy theo cấu trúc:
1. Authentication là gì?
2. Authorization là gì?
3. Vì sao đăng nhập thành công vẫn chưa đủ?
4. Vì sao phải kiểm tra quyền theo tài nguyên?
5. IDOR là gì ở mức phòng thủ?
6. Vì sao không được lưu plain text password?
7. Hash và salt là gì?
8. bcrypt/Argon2 giúp gì?
9. Cho ví dụ thực tế:
   - user xem đơn hàng của mình
   - admin xóa bài viết
   - user không được sửa hồ sơ người khác
10. Chỉ ra lỗi phổ biến:
   - chỉ check logged in mà không check ownership
   - nhận role từ client
   - lưu mật khẩu sai cách
11. Tạo checklist authn/authz/password security

Dạy như mentor đang xây nền auth security vững cho junior.
\`\`\`

## Prompt 2 - Nhờ AI luyện phân tích quyền truy cập
\`\`\`
Tôi muốn luyện tư duy kiểm tra quyền.

Hãy cho tôi 8 API hoặc action, ví dụ:
- GET /orders/:id
- PATCH /profile/:id
- DELETE /posts/:id
- GET /admin/users
- POST /courses
- PATCH /comments/:id
- GET /billing
- DELETE /users/:id

Với mỗi action:
1. hỏi tôi cần kiểm tra gì ngoài việc đăng nhập
2. hỏi tôi có cần kiểm tra role không
3. hỏi tôi có cần kiểm tra ownership không
4. sau đó bạn mới chữa
\`\`\`

## Prompt 3 - Nhờ AI review auth design của tôi
\`\`\`
Tôi sẽ mô tả hệ thống đăng nhập, phân quyền và lưu mật khẩu của tôi.
Bạn hãy review:
1. Authn và authz có bị lẫn với nhau không?
2. Password đang lưu có an toàn không?
3. Có API nào đang chỉ kiểm tra login mà quên ownership không?
4. Có chỗ nào đang tin role từ client không?
5. Nếu bị audit, chỗ nào dễ bị bắt lỗi nhất?
\`\`\`

## Bài tập buổi này
- Thiết kế bảng role/quyền cơ bản cho 1 app
- Mô tả luồng đăng ký/đăng nhập an toàn ở mức backend
- Chọn 3 API và viết rule ownership cho chúng

## Tiêu chuẩn hoàn thành
- Phân biệt được authn và authz
- Hiểu password phải lưu bằng hash
- Hiểu kiểm tra ownership là cực quan trọng
      `
    },
    {
      id: 'sec-07',
      title: 'Buổi 7: Security headers, CORS và bảo vệ bề mặt trình duyệt',
      level: 'advanced',
      content: `
# Buổi 7: Security headers, CORS và bảo vệ bề mặt trình duyệt

## Mục tiêu
- Hiểu security headers là gì
- Hiểu CSP, HSTS, X-Frame-Options, Referrer-Policy, X-Content-Type-Options
- Hiểu CORS là gì
- Biết vì sao không nên mở CORS bừa bãi
- Hiểu trình duyệt cũng là một “mặt trận” bảo mật

## Prompt 1 - Nhờ AI dạy browser-facing security
\`\`\`
Hãy dạy tôi Bảo mật Web buổi 7 như mentor security thực chiến.

Chủ đề:
- security headers
- CSP
- HSTS
- X-Frame-Options
- Referrer-Policy
- X-Content-Type-Options
- CORS
- Same-Origin Policy

Tôi muốn bạn dạy theo cấu trúc:
1. Security headers là gì?
2. Vì sao security headers giúp tăng phòng thủ dù không sửa logic app?
3. CSP giúp gì cho XSS?
4. HSTS giúp gì cho HTTPS?
5. X-Frame-Options giúp gì?
6. CORS là gì và khác với auth như thế nào?
7. Vì sao Access-Control-Allow-Origin: * không phải lúc nào cũng ổn?
8. Cho ví dụ thực tế:
   - dashboard admin
   - public API
   - SPA gọi API riêng
9. Chỉ ra lỗi phổ biến:
   - mở CORS quá rộng
   - bật header theo phong trào mà không hiểu
   - không phân biệt browser policy với server auth
10. Tạo checklist browser-facing security cơ bản

Dạy như mentor đang harden một web app thật.
\`\`\`

## Prompt 2 - Nhờ AI luyện cấu hình bảo vệ trình duyệt
\`\`\`
Tôi muốn luyện cách chọn headers và CORS cho từng loại app.

Hãy cho tôi 6 tình huống, ví dụ:
- dashboard admin nội bộ
- blog công khai
- API public đọc dữ liệu
- app SPA riêng frontend/backend
- hệ thống nhiều môi trường local/staging/prod
- trang có nội dung user-generated

Với mỗi tình huống:
1. hỏi tôi header nào đặc biệt quan trọng
2. hỏi tôi CORS nên chặt đến mức nào
3. hỏi tôi có cần chú ý CSP không
4. sau đó bạn mới chữa
\`\`\`

## Prompt 3 - Nhờ AI review cấu hình browser security của tôi
\`\`\`
Tôi sẽ mô tả app của tôi và cách tôi định cấu hình headers/CORS.
Bạn hãy review:
1. CORS có đang mở quá rộng không?
2. CSP có cần không? nếu có thì vì sao?
3. HSTS có nên bật không?
4. Header nào đang thiếu?
5. Tôi có đang nhầm CORS với auth không?

Hãy review như mentor security khó tính.
\`\`\`

## Bài tập buổi này
- Chọn 1 ứng dụng và đề xuất bộ headers cơ bản
- Thiết kế CORS cho local/staging/prod
- Giải thích vì sao không nên wildcard bừa bãi

## Tiêu chuẩn hoàn thành
- Hiểu vai trò của security headers
- Hiểu CORS không phải cơ chế auth
- Biết cấu hình trình duyệt theo hướng an toàn hơn
      `
    },
    {
      id: 'sec-08',
      title: 'Buổi 8: API Security - validation, schema check, injection và rate limiting',
      level: 'advanced',
      content: `
# Buổi 8: API Security - validation, schema check, injection và rate limiting

## Mục tiêu
- Hiểu API phải phòng thủ mạnh ở đầu vào
- Biết validation giúp giảm rủi ro logic và bảo mật
- Hiểu SQL Injection ở mức phòng thủ
- Biết rate limiting bảo vệ endpoint nhạy cảm
- Bắt đầu nhìn API như bề mặt tấn công chính

## Prompt 1 - Nhờ AI dạy API security từ bản chất
\`\`\`
Hãy dạy tôi Bảo mật Web buổi 8 như mentor backend/security.

Chủ đề:
- validate body/params/query
- schema check
- loại bỏ field thừa
- trust boundary
- SQL Injection
- prepared statement / parameterized query ở mức phòng thủ
- rate limiting
- brute-force
- endpoint nhạy cảm

Tôi muốn bạn dạy theo cấu trúc:
1. Vì sao API là bề mặt tấn công rất quan trọng?
2. Validation giúp gì ngoài chuyện “dữ liệu đẹp”?
3. Vì sao phải kiểm tra cả body, params, query?
4. Vì sao field như isAdmin không nên nhận thẳng từ client?
5. SQL Injection là gì ở mức phòng thủ?
6. Vì sao nối chuỗi query thủ công là nguy hiểm?
7. Rate limiting giúp gì?
8. Endpoint nào cần rate limiting mạnh hơn?
9. Cho ví dụ thực tế:
   - login
   - reset password
   - search user
   - tạo sản phẩm
10. Chỉ ra lỗi phổ biến:
   - validate quá lỏng
   - query thủ công không an toàn
   - không chặn brute-force
11. Tạo checklist API security nền tảng

Dạy như mentor security đang audit một backend thật.
\`\`\`

## Prompt 2 - Nhờ AI luyện audit API
\`\`\`
Tôi muốn luyện cách nhìn một API dưới góc nhìn security.

Hãy cho tôi 8 API giả định, ví dụ:
- POST /login
- POST /register
- PATCH /profile
- GET /users?role=admin
- POST /products
- POST /reset-password
- GET /orders/:id
- POST /upload

Với mỗi API:
1. hỏi tôi cần validate gì
2. hỏi tôi có field nào nguy hiểm nếu nhận thẳng từ client không
3. hỏi tôi có cần rate limit không
4. hỏi tôi có nguy cơ injection hoặc ownership issue không
5. sau đó bạn mới chữa
\`\`\`

## Prompt 3 - Nhờ AI review posture bảo mật API của tôi
\`\`\`
Tôi sẽ gửi cho bạn mô tả API hoặc code handler của tôi.
Bạn hãy review:
1. Input validation đã đủ chưa?
2. Có field nào đáng lẽ phải bị chặn hoặc bỏ qua không?
3. Có nguy cơ injection không?
4. Endpoint này có cần rate limit không?
5. Nếu bị abuse, chỗ nào sẽ gãy đầu tiên?

Hãy review như mentor backend/security khó tính.
\`\`\`

## Bài tập buổi này
- Chọn 5 API và viết security checklist cho từng cái
- Nêu rule validate, rate limit, ownership, injection risk nếu có

## Tiêu chuẩn hoàn thành
- Hiểu API là trust boundary quan trọng
- Biết validate chặt chẽ hơn
- Biết injection/rate limit cần được nghĩ từ sớm
      `
    },
    {
      id: 'sec-09',
      title: 'Buổi 9: File upload, secrets, logging, monitoring và phản ứng sự cố',
      level: 'advanced',
      content: `
# Buổi 9: File upload, secrets, logging, monitoring và phản ứng sự cố

## Mục tiêu
- Hiểu file upload cũng là bề mặt tấn công
- Biết secrets phải được quản lý chặt
- Biết logging gì là hữu ích và logging gì là nguy hiểm
- Hiểu hệ thống cần monitoring và incident response cơ bản

## Prompt 1 - Nhờ AI dạy operational security mindset
\`\`\`
Hãy dạy tôi Bảo mật Web buổi 9 như mentor security thực chiến.

Chủ đề:
- file upload
- file type validation
- file size limit
- safe file naming
- .env
- API keys
- secrets
- không commit secrets
- logging
- monitoring
- incident response cơ bản

Tôi muốn bạn dạy theo cấu trúc:
1. Vì sao upload file là bề mặt tấn công?
2. Vì sao không được tin extension file từ client?
3. Vì sao phải giới hạn kích thước file?
4. Secrets là gì và vì sao không được commit lên Git?
5. Logging gì là hữu ích?
6. Logging gì là nguy hiểm nếu ghi thô?
7. Monitoring giúp gì cho security?
8. Khi nghi ngờ sự cố, phản ứng cơ bản nên gồm những bước nào?
9. Cho ví dụ thực tế:
   - upload avatar
   - .env bị lộ
   - login thất bại liên tục
   - token hoặc secret rò rỉ
10. Chỉ ra lỗi phổ biến:
   - upload file quá thoải mái
   - đẩy secret lên repo
   - log dữ liệu nhạy cảm
   - không có cảnh báo bất thường
11. Tạo checklist operational security cơ bản

Dạy như mentor security đang giúp junior thoát khỏi tư duy “chỉ cần code chạy”.
\`\`\`

## Prompt 2 - Nhờ AI luyện tư duy vận hành an toàn
\`\`\`
Tôi muốn luyện cách xử lý các vấn đề security mang tính vận hành.

Hãy cho tôi 8 tình huống, ví dụ:
- user upload file 50MB
- user đổi tên file thành avatar.png nhưng nội dung bất thường
- .env lỡ bị push lên repo
- API key lộ trong frontend
- log đang ghi raw token
- 1 tài khoản fail login 200 lần
- có request bất thường vào endpoint admin
- nghi có token bị lộ

Với mỗi tình huống:
1. hỏi tôi rủi ro chính là gì
2. hỏi tôi nên xử lý ngay việc gì
3. hỏi tôi cần ghi log/cảnh báo gì
4. sau đó bạn mới chữa
\`\`\`

## Prompt 3 - Nhờ AI review operational security của tôi
\`\`\`
Tôi sẽ mô tả tính năng upload, cách tôi quản lý secrets, logging và monitoring.
Bạn hãy review:
1. Upload flow có an toàn chưa?
2. Secret handling có ổn chưa?
3. Logging có đang lộ dữ liệu nhạy cảm không?
4. Monitoring có đủ để phát hiện bất thường không?
5. Nếu xảy ra sự cố, tôi có thiếu bước phản ứng nào không?

Hãy review như mentor security vận hành.
\`\`\`

## Bài tập buổi này
- Thiết kế checklist upload avatar an toàn
- Viết policy quản lý secrets cơ bản
- Liệt kê 5 sự kiện nên log và 5 dữ liệu không nên log thô

## Tiêu chuẩn hoàn thành
- Hiểu upload và secrets rất nhạy cảm
- Hiểu logging/monitoring là một phần của security
- Biết phản ứng sự cố ở mức nền tảng
      `
    },
    {
      id: 'sec-10',
      title: 'Buổi 10: Project cuối khóa - audit và thiết kế phòng thủ cho một ứng dụng web thực tế',
      level: 'advanced',
      content: `
# Buổi 10: Project cuối khóa - audit và thiết kế phòng thủ cho một ứng dụng web thực tế

## Mục tiêu
- Tổng hợp toàn bộ kiến thức bảo mật đã học
- Audit một ứng dụng web theo tư duy security review
- Thiết kế checklist phòng thủ thực tế
- Tự đánh giá mức độ sẵn sàng để code an toàn hơn trong dự án thật

## Prompt 1 - Nhờ AI dẫn tôi làm project từ đầu
\`\`\`
Hãy đóng vai mentor Web Security và dẫn tôi làm project cuối khóa.

Cho tôi chọn 1 trong các loại ứng dụng:
1. Blog mini có login
2. Dashboard quản trị
3. App học online có tài khoản
4. App bán hàng có user và admin
5. API backend cho app ghi chú

Sau khi tôi chọn, hãy dẫn tôi theo lộ trình:
1. xác định tài sản cần bảo vệ
2. xác định trust boundary
3. xác định bề mặt tấn công chính
4. rà theo từng nhóm:
   - XSS
   - CSRF
   - auth/authz
   - validation/API security
   - cookie/token
   - CORS/headers
   - secrets/logging
5. sắp xếp rủi ro theo mức ưu tiên
6. đề xuất lớp phòng thủ cho từng nhóm
7. để tôi tự phân tích từng bước
8. sau mỗi bước, review rất kỹ như mentor
9. cuối cùng, giúp tôi tạo security checklist hoàn chỉnh

Mục tiêu là để tôi thật sự biết audit một app ở mức nền tảng.
\`\`\`

## Prompt 2 - Nhờ AI audit project cuối khóa
\`\`\`
Tôi sẽ gửi cho bạn security review của tôi cho một ứng dụng web.
Bạn hãy audit như mentor security kỹ tính.

Đánh giá theo 8 nhóm tiêu chí:
1. Nhận diện tài sản cần bảo vệ
2. Nhận diện trust boundary
3. Phân tích rủi ro XSS/CSRF
4. Đánh giá auth/authz
5. Đánh giá API security
6. Đánh giá cookie/token/headers/CORS
7. Đánh giá secrets/logging/upload/monitoring
8. Mức độ trưởng thành của tư duy phòng thủ

Với mỗi nhóm:
- nêu điểm tốt
- nêu lỗi cụ thể
- giải thích vì sao là lỗi
- cho hướng sửa cụ thể
- ưu tiên lỗi nghiêm trọng trước

Cuối cùng:
- chấm điểm tổng trên thang 100
- xếp loại: yếu / ổn / tốt / rất tốt
- cho tôi 5 thói quen security cần giữ lâu dài
\`\`\`

## Prompt 3 - Nhờ AI đóng vai reviewer cuối khóa
\`\`\`
Hãy đóng vai reviewer cuối khóa về Web Security.

Tôi sẽ gửi security checklist hoặc bản audit của tôi.
Bạn phải review như thật, không nể nang.

Cách review mong muốn:
- đánh giá cách tôi nhận diện rủi ro
- đánh giá cách tôi phân loại mức độ nghiêm trọng
- đánh giá chất lượng các lớp phòng thủ tôi đề xuất
- đánh giá xem tôi có đang phòng thủ đúng chỗ hay chỉ học thuộc khái niệm
- chỉ rõ điểm nào chứng tỏ tôi đã hiểu security mindset
- chỉ rõ điểm nào cho thấy tôi vẫn đang nghĩ theo kiểu “vá lỗi sau”

Cuối cùng, hãy nói thật:
- tôi đã đủ nền tảng để code web an toàn hơn trong dự án thật chưa?
- nếu chưa, tôi cần luyện thêm phần nào?
\`\`\`

## Gợi ý project
Chọn 1 trong các project:
1. Blog mini có login
2. Dashboard quản trị
3. App học online có tài khoản
4. App bán hàng có user và admin
5. API backend cho app ghi chú

## Yêu cầu bắt buộc
- Có xác định tài sản cần bảo vệ
- Có phân tích trust boundary
- Có nhận diện ít nhất 10 rủi ro
- Có lớp phòng thủ cho XSS, CSRF, auth/authz, API validation
- Có policy cơ bản cho cookie/token/secrets/logging
- Có sắp xếp ưu tiên xử lý rủi ro

## Checklist tự đánh giá
- Tôi có đang tin client quá mức không?
- Tôi đã nghĩ về XSS và CSRF chưa?
- Tôi đã tách auth và authz rõ chưa?
- API đã validate và kiểm tra quyền đủ chưa?
- Cookie/token có cấu hình hợp lý chưa?
- Tôi có policy secrets/logging/upload đủ cơ bản chưa?
- Tôi có thể giải thích vì sao từng lớp phòng thủ lại cần không?

## Bài tập cuối khóa
- Chọn một ứng dụng thật hoặc giả định
- Viết security checklist cho app đó
- Tự rà soát ít nhất 10 điểm rủi ro và cách giảm rủi ro
- Tự audit bằng AI theo các prompt trên
- Sửa lại checklist đến khi đủ chắc
      `
    }
  ]
};