import { Lesson } from '../../types';

export const databaseLesson: Lesson = {
  id: 'database-mastery',
  icon: 'database',
  title: 'Cơ sở dữ liệu & ORM',
  description:
    'Lộ trình Cơ sở dữ liệu & ORM theo phong cách tự học cùng AI mentor. Mỗi buổi học đi kèm prompt cực chi tiết để học viên chỉ cần copy vào AI là có thể học từ bản chất, luyện tư duy thiết kế dữ liệu, viết truy vấn, dùng ORM và được review như học cùng mentor backend 1-1.',
  points: [
    'Mỗi buổi có prompt cực chi tiết để copy vào AI và học ngay',
    'AI đóng vai mentor backend, dạy từ bản chất chứ không chỉ đưa định nghĩa',
    'Có prompt học lý thuyết, prompt phân tích bài toán, prompt viết schema, prompt chữa bài',
    'Tập trung vào năng lực thật: thiết kế dữ liệu, truy vấn đúng, chọn SQL/NoSQL đúng, dùng ORM hợp lý',
    'Có project xuyên suốt để ghép các buổi thành một hệ thống dữ liệu hoàn chỉnh',
    'Học xong có thể tự thiết kế database cho một app thật và tự review schema của mình'
  ],
  chapters: [
    {
      id: 'db-01',
      title: 'Buổi 1: Database là gì và vì sao ứng dụng cần lưu dữ liệu?',
      level: 'beginner',
      content: `
# Buổi 1: Database là gì và vì sao ứng dụng cần lưu dữ liệu?

## Mục tiêu
- Hiểu database là gì từ góc nhìn ứng dụng thực tế
- Hiểu vì sao dữ liệu không thể chỉ lưu trong biến
- Biết phân biệt dữ liệu tạm thời và dữ liệu cần lưu bền vững
- Bắt đầu hình dung dữ liệu chính của một ứng dụng

## Cách học buổi này
Bạn sẽ copy từng prompt bên dưới vào AI theo đúng thứ tự.
Không học lướt. Sau mỗi prompt phải tự viết lại bằng lời của bạn.

## Prompt 1 - Nhờ AI dạy lý thuyết từ gốc
\`\`\`
Bạn hãy đóng vai một mentor Backend cực giỏi, chuyên dạy người mới học cơ sở dữ liệu từ con số 0.

Hôm nay hãy dạy tôi buổi đầu tiên về database theo phong cách:
- cực dễ hiểu nhưng không hời hợt
- giải thích từ bản chất
- gắn với ví dụ thực tế như app bán hàng, app học online, app blog
- luôn nói vì sao kiến thức này quan trọng
- không dùng thuật ngữ khó nếu chưa giải thích

Chủ đề hôm nay:
- Database là gì?
- Vì sao ứng dụng cần database?
- Dữ liệu nào cần lưu?
- Vì sao không thể chỉ lưu trong biến JavaScript?
- Database giúp ứng dụng hoạt động như thế nào theo thời gian?

Tôi muốn bạn dạy theo format:
1. Database là gì?
2. Vì sao app thực tế luôn cần nơi lưu dữ liệu?
3. Phân biệt lưu dữ liệu trong RAM/biến và lưu trong database
4. Cho ví dụ dữ liệu của:
   - app blog
   - app bán hàng
   - app học online
   - app chat
5. Giải thích thế nào là dữ liệu bền vững
6. Chỉ ra 8 hiểu lầm phổ biến của người mới về database
7. Đặt cho tôi 5 câu hỏi kiểm tra hiểu bài
8. Sau khi tôi trả lời, bạn phải chấm và sửa thật kỹ

Dùng tiếng Việt và giải thích như một mentor thật sự.
\`\`\`

## Prompt 2 - Nhờ AI luyện tư duy phân tích dữ liệu của app
\`\`\`
Tôi muốn luyện tư duy nhìn một ứng dụng và nhận ra dữ liệu chính của nó.

Hãy cho tôi 5 ứng dụng quen thuộc:
- app học online
- app bán hàng
- app blog
- app quản lý công việc
- app đặt lịch

Với mỗi ứng dụng:
1. yêu cầu tôi tự nêu ra các loại dữ liệu chính
2. hỏi thêm:
   - dữ liệu nào là cốt lõi?
   - dữ liệu nào liên quan đến người dùng?
   - dữ liệu nào cần lưu lâu dài?
3. chờ tôi trả lời
4. sau đó bạn mới chữa
5. nếu tôi trả lời mơ hồ, hãy bắt tôi nói cụ thể hơn

Mục tiêu là giúp tôi bắt đầu nhìn sản phẩm dưới góc nhìn dữ liệu.
\`\`\`

## Prompt 3 - Nhờ AI kiểm tra hiểu bài
\`\`\`
Hãy kiểm tra xem tôi đã thật sự hiểu database buổi 1 chưa.

Tôi muốn có:
- 3 câu hỏi trắc nghiệm có giải thích đáp án
- 3 câu hỏi tự luận ngắn
- 2 tình huống thực tế
- 1 câu hỏi tư duy: nếu app có 10.000 user thì vì sao không thể lưu dữ liệu theo kiểu biến tạm trong code?

Sau khi tôi trả lời, bạn hãy:
- chấm điểm từng câu
- giải thích chỗ sai
- nói tôi đang ở mức nào: chưa hiểu / hiểu cơ bản / hiểu chắc
\`\`\`

## Bài tập buổi này
1. Liệt kê dữ liệu chính của 3 ứng dụng bất kỳ
2. Giải thích vì sao mỗi loại dữ liệu đó cần được lưu
3. Viết lại bằng lời của bạn: database giúp ích gì cho ứng dụng?

## Tiêu chuẩn hoàn thành
- Hiểu vai trò của database
- Nhìn được ứng dụng dưới góc nhìn dữ liệu
- Không còn nhầm giữa dữ liệu tạm và dữ liệu cần lưu bền vững
      `
    },
    {
      id: 'db-02',
      title: 'Buổi 2: SQL vs NoSQL và cách chọn loại database phù hợp',
      level: 'beginner',
      content: `
# Buổi 2: SQL vs NoSQL và cách chọn loại database phù hợp

## Mục tiêu
- Hiểu sự khác nhau giữa SQL và NoSQL
- Biết ưu và nhược điểm của mỗi hướng
- Biết phân tích bài toán để chọn database
- Không học thuộc kiểu “SQL tốt hơn NoSQL” hoặc ngược lại

## Prompt 1 - Nhờ AI dạy từ bản chất
\`\`\`
Bạn hãy đóng vai mentor Backend dạy tôi buổi 2 về SQL và NoSQL.

Tôi không muốn học kiểu học thuộc bảng so sánh.
Tôi muốn hiểu bản chất và biết cách chọn đúng.

Hãy dạy theo cấu trúc:
1. SQL là gì?
2. NoSQL là gì?
3. Dữ liệu quan hệ nghĩa là gì?
4. Dữ liệu dạng document nghĩa là gì?
5. So sánh thật rõ:
   - cấu trúc dữ liệu
   - tính chặt chẽ
   - tính linh hoạt
   - cách mở rộng
   - kiểu bài toán phù hợp
6. Cho ví dụ thực tế:
   - PostgreSQL
   - MySQL
   - MongoDB
7. Chỉ ra hiểu lầm phổ biến của người mới:
   - nghĩ NoSQL là không có schema
   - nghĩ SQL luôn chậm hơn
   - nghĩ MongoDB luôn dễ hơn
8. Cho tôi 5 tình huống thực tế và hỏi nên chọn SQL hay NoSQL, vì sao
9. Sau đó hãy chấm câu trả lời của tôi

Dạy thật kỹ như mentor đang sửa tư duy chọn công nghệ cho junior backend.
\`\`\`

## Prompt 2 - Nhờ AI luyện kỹ năng chọn database
\`\`\`
Tôi muốn luyện tư duy chọn database.

Hãy cho tôi 8 tình huống sản phẩm, ví dụ:
- app blog
- app chat
- app quản lý kho
- app học online
- app ghi chú cá nhân
- app phân quyền người dùng
- app TMĐT
- app analytics đơn giản

Với mỗi tình huống:
1. yêu cầu tôi tự chọn SQL hoặc NoSQL
2. bắt tôi giải thích rõ vì sao
3. hỏi thêm:
   - dữ liệu có quan hệ mạnh không?
   - có cần tính nhất quán cao không?
   - schema có thay đổi nhiều không?
4. sau đó bạn mới chữa
5. nếu tôi chọn chưa tốt, hãy phân tích trade-off thật rõ

Tôi muốn luyện tư duy quyết định, không phải học thuộc.
\`\`\`

## Prompt 3 - Nhờ AI phản biện câu trả lời của tôi
\`\`\`
Tôi sẽ đưa ra lựa chọn database cho một ứng dụng.
Bạn hãy đóng vai reviewer khó tính và phản biện.

Khi review, hãy đánh giá:
1. Tôi có hiểu bản chất dữ liệu của app không?
2. Tôi có đang chọn theo trào lưu không?
3. Tôi có phân tích đủ về quan hệ dữ liệu chưa?
4. Tôi có đánh giá đúng độ linh hoạt của schema chưa?
5. Tôi có bỏ sót ràng buộc nghiệp vụ nào không?

Cuối cùng, hãy cho tôi câu trả lời tốt hơn nếu cần.
\`\`\`

## Bài tập buổi này
- So sánh SQL và NoSQL bằng lời của bạn
- Chọn database cho 3 bài toán khác nhau và giải thích lý do

## Tiêu chuẩn hoàn thành
- Không còn hiểu SQL/NoSQL theo kiểu mơ hồ
- Biết chọn dựa trên bài toán, không chọn theo cảm tính
      `
    },
    {
      id: 'db-03',
      title: 'Buổi 3: Bảng, hàng, cột, kiểu dữ liệu và mô hình dữ liệu quan hệ',
      level: 'beginner',
      content: `
# Buổi 3: Bảng, hàng, cột, kiểu dữ liệu và mô hình dữ liệu quan hệ

## Mục tiêu
- Hiểu table, row, column trong SQL
- Biết chọn kiểu dữ liệu cơ bản
- Biết bắt đầu biến dữ liệu thật thành mô hình bảng
- Hiểu rằng thiết kế dữ liệu là bước cực quan trọng

## Prompt 1 - Nhờ AI dạy cấu trúc SQL từ gốc
\`\`\`
Hãy dạy tôi SQL buổi 3 như một mentor backend giỏi dạy người mới.

Chủ đề:
- table
- row
- column
- kiểu dữ liệu cơ bản:
  - INT
  - VARCHAR
  - TEXT
  - BOOLEAN
  - DATE
  - TIMESTAMP

Tôi muốn bạn dạy theo cấu trúc:
1. Bảng trong SQL là gì?
2. Hàng là gì?
3. Cột là gì?
4. Vì sao chọn kiểu dữ liệu đúng rất quan trọng?
5. Giải thích từng kiểu dữ liệu bằng ví dụ thực tế
6. Cho 5 tình huống chọn kiểu dữ liệu và bắt tôi tự trả lời
7. Chỉ ra lỗi phổ biến:
   - dùng TEXT cho mọi thứ
   - không hiểu khác nhau giữa VARCHAR và TEXT
   - dùng kiểu dữ liệu không phù hợp
8. Cuối cùng, tóm tắt thành checklist chọn kiểu dữ liệu

Dạy thật kỹ, nhiều ví dụ, không giải thích hời hợt.
\`\`\`

## Prompt 2 - Nhờ AI dẫn tôi thiết kế bảng đầu tiên
\`\`\`
Tôi muốn bạn đóng vai mentor và dẫn tôi thiết kế các bảng SQL đầu tiên.

Bối cảnh:
Tôi cần thiết kế dữ liệu cho một app học online đơn giản.

Hãy giúp tôi:
1. xác định các bảng chính
2. xác định cột của từng bảng
3. chọn kiểu dữ liệu cho từng cột
4. giải thích tại sao chọn kiểu đó
5. chưa cần nói quá sâu về quan hệ, chỉ tập trung vào cấu trúc bảng trước
6. yêu cầu tôi tự đề xuất bảng users, courses, lessons
7. sau đó review đề xuất của tôi thật kỹ

Tôi muốn được học như junior đang được mentor kèm 1-1.
\`\`\`

## Prompt 3 - Nhờ AI review cấu trúc bảng của tôi
\`\`\`
Tôi sẽ gửi cho bạn thiết kế bảng của tôi.
Bạn hãy review theo các tiêu chí:
1. Tên bảng có rõ không?
2. Tên cột có rõ không?
3. Kiểu dữ liệu có hợp lý không?
4. Có cột nào đang thiếu hoặc thừa không?
5. Có dấu hiệu thiết kế theo cảm tính không?

Hãy chỉ ra thật cụ thể và yêu cầu tôi sửa lại phiên bản tốt hơn.
\`\`\`

## Bài tập buổi này
- Thiết kế bảng users
- Thiết kế bảng products hoặc courses
- Chọn kiểu dữ liệu cho từng cột và tự giải thích

## Tiêu chuẩn hoàn thành
- Hiểu rõ table, row, column
- Chọn kiểu dữ liệu có lý do
- Biết mô tả dữ liệu dưới dạng bảng
      `
    },
    {
      id: 'db-04',
      title: 'Buổi 4: Primary key, foreign key và quan hệ dữ liệu',
      level: 'beginner',
      content: `
# Buổi 4: Primary key, foreign key và quan hệ dữ liệu

## Mục tiêu
- Hiểu primary key và foreign key
- Hiểu 1-1, 1-n, n-n
- Biết vì sao database quan hệ mạnh ở chỗ liên kết dữ liệu
- Thiết kế được quan hệ cơ bản giữa các bảng

## Prompt 1 - Nhờ AI dạy tư duy quan hệ dữ liệu
\`\`\`
Hãy dạy tôi database buổi 4 về khóa chính, khóa ngoại và quan hệ dữ liệu thật sâu.

Tôi muốn bạn dạy theo cấu trúc:
1. Primary key là gì?
2. Vì sao mỗi bản ghi cần được định danh duy nhất?
3. Foreign key là gì?
4. Vì sao bảng phải liên kết được với nhau?
5. Giải thích thật rõ các quan hệ:
   - một - một
   - một - nhiều
   - nhiều - nhiều
6. Cho ví dụ thực tế:
   - user và posts
   - user và profile
   - students và courses
7. Chỉ ra lỗi sai phổ biến:
   - lưu dữ liệu lặp thay vì liên kết
   - không hiểu foreign key bám vào đâu
   - nhầm nhiều - nhiều với một - nhiều
8. Cho tôi 5 bài tập nhận diện quan hệ
9. Sau đó chấm câu trả lời của tôi

Dạy như mentor đang sửa tận gốc tư duy relational database cho junior.
\`\`\`

## Prompt 2 - Nhờ AI dẫn tôi thiết kế quan hệ cho app thật
\`\`\`
Tôi muốn bạn dẫn tôi thiết kế quan hệ dữ liệu cho một app blog hoặc app học online.

Cách làm:
1. liệt kê các bảng chính
2. hỏi tôi bảng nào liên kết với bảng nào
3. hỏi tôi quan hệ là 1-1, 1-n hay n-n
4. nếu tôi chọn sai, giải thích thật kỹ
5. sau đó giúp tôi xác định:
   - primary key
   - foreign key
6. cuối cùng bắt tôi tự mô tả sơ đồ quan hệ bằng lời

Tôi muốn được học như đang vẽ ERD cùng mentor.
\`\`\`

## Prompt 3 - Nhờ AI phản biện quan hệ tôi thiết kế
\`\`\`
Tôi sẽ gửi cho bạn thiết kế quan hệ dữ liệu của tôi.
Bạn hãy review theo 5 tiêu chí:
1. Quan hệ có đúng bản chất nghiệp vụ không?
2. Có bảng nào đáng ra nên liên kết mà tôi lại đi lặp dữ liệu không?
3. Foreign key tôi đặt đã đúng chưa?
4. Có quan hệ n-n nào cần bảng trung gian không?
5. Thiết kế này có dễ mở rộng không?

Hãy review cụ thể, bắt lỗi thật kỹ, không nói chung chung.
\`\`\`

## Bài tập buổi này
- Thiết kế quan hệ cho 1 app blog hoặc học online
- Xác định PK và FK của từng bảng

## Tiêu chuẩn hoàn thành
- Hiểu PK/FK rõ
- Biết phân loại quan hệ
- Biết liên kết bảng đúng theo nghiệp vụ
      `
    },
    {
      id: 'db-05',
      title: 'Buổi 5: SQL thực chiến - SELECT, WHERE, ORDER BY, LIMIT',
      level: 'beginner',
      content: `
# Buổi 5: SQL thực chiến - SELECT, WHERE, ORDER BY, LIMIT

## Mục tiêu
- Biết đọc và viết truy vấn SELECT cơ bản
- Lọc, sắp xếp, giới hạn dữ liệu
- Hiểu truy vấn là cách “hỏi” database
- Bắt đầu có tư duy đọc yêu cầu rồi viết SQL

## Prompt 1 - Nhờ AI dạy truy vấn như ngôn ngữ đặt câu hỏi
\`\`\`
Hãy dạy tôi SQL buổi 5 theo cách dễ hiểu nhất.

Chủ đề:
- SELECT *
- SELECT cột cụ thể
- alias
- WHERE
- AND
- OR
- ORDER BY
- ASC
- DESC
- LIMIT

Tôi muốn học theo tư duy:
“SQL là cách đặt câu hỏi cho database”.

Hãy dạy theo cấu trúc:
1. SELECT dùng để làm gì?
2. Vì sao không phải lúc nào cũng nên dùng SELECT *?
3. WHERE giúp lọc dữ liệu ra sao?
4. ORDER BY dùng khi nào?
5. LIMIT dùng khi nào?
6. Cho ví dụ thật thực tế:
   - lấy user đang active
   - lấy 5 sản phẩm đắt nhất
   - lấy khóa học miễn phí
7. Cho tôi 10 yêu cầu bằng tiếng Việt và bắt tôi tự viết SQL
8. Sau đó chữa thật kỹ từng câu

Dạy như mentor đang luyện tư duy query cho junior backend.
\`\`\`

## Prompt 2 - Nhờ AI giao bài tập SQL
\`\`\`
Hãy giao cho tôi 8 bài tập SQL cơ bản về SELECT, WHERE, ORDER BY, LIMIT.

Mỗi bài nên:
- có mô tả ngắn về bảng
- có yêu cầu rõ
- tăng dần độ khó
- không cho đáp án ngay

Sau khi tôi gửi câu SQL của mình, hãy review:
- cú pháp đúng chưa
- logic đúng chưa
- có viết dư không
- có cách nào rõ hơn không
- nếu sai, phải giải thích vì sao sai
\`\`\`

## Prompt 3 - Nhờ AI đóng vai interviewer SQL cơ bản
\`\`\`
Hãy đóng vai interviewer backend junior và hỏi tôi các câu SQL cơ bản.

Mỗi câu hỏi:
1. đưa yêu cầu bằng ngôn ngữ tự nhiên
2. bắt tôi viết câu SQL
3. sau đó chấm theo:
   - đúng cú pháp
   - đúng logic
   - rõ ràng
   - có thói quen xấu nào không

Hãy nghiêm khắc nhưng dễ hiểu.
\`\`\`

## Bài tập buổi này
- Viết 10 truy vấn SQL cơ bản từ dữ liệu giả định
- Tự giải thích mỗi truy vấn đang “hỏi” database điều gì

## Tiêu chuẩn hoàn thành
- Viết được SELECT cơ bản
- Dùng WHERE/ORDER/LIMIT đúng chỗ
- Bắt đầu đọc yêu cầu thành truy vấn
      `
    },
    {
      id: 'db-06',
      title: 'Buổi 6: INSERT, UPDATE, DELETE, JOIN và GROUP BY',
      level: 'intermediate',
      content: `
# Buổi 6: INSERT, UPDATE, DELETE, JOIN và GROUP BY

## Mục tiêu
- Biết thao tác CRUD ở mức SQL
- Hiểu rủi ro của UPDATE/DELETE thiếu điều kiện
- Biết JOIN để nối dữ liệu
- Biết GROUP BY để tổng hợp dữ liệu

## Prompt 1 - Nhờ AI dạy SQL thao tác dữ liệu và tổng hợp dữ liệu
\`\`\`
Hãy dạy tôi SQL buổi 6 theo phong cách mentor thực chiến.

Chủ đề:
- INSERT
- UPDATE
- DELETE
- INNER JOIN
- LEFT JOIN
- COUNT
- SUM
- AVG
- GROUP BY
- HAVING

Tôi muốn bạn dạy theo cấu trúc:
1. INSERT dùng để làm gì?
2. UPDATE và DELETE nguy hiểm ở đâu nếu thiếu WHERE?
3. JOIN giải quyết bài toán gì?
4. INNER JOIN và LEFT JOIN khác nhau thế nào?
5. GROUP BY giúp làm gì?
6. HAVING khác WHERE thế nào ở mức dễ hiểu?
7. Cho ví dụ thực tế:
   - user và posts
   - order và user
   - thống kê số bài viết mỗi tác giả
   - tổng tiền đơn hàng
8. Chỉ ra lỗi phổ biến người mới hay mắc
9. Cho tôi 8 yêu cầu SQL hỗn hợp và bắt tôi tự viết
10. Sau đó chấm thật kỹ

Dạy như mentor đang huấn luyện backend junior đi làm.
\`\`\`

## Prompt 2 - Nhờ AI giao bài tập hỗn hợp
\`\`\`
Hãy giao cho tôi các bài tập SQL thực chiến về:
- thêm dữ liệu
- cập nhật dữ liệu
- xóa dữ liệu
- nối dữ liệu giữa các bảng
- thống kê dữ liệu

Mỗi bài:
- mô tả rõ ngữ cảnh
- nêu các bảng liên quan
- có độ khó tăng dần
- không đưa đáp án ngay

Khi tôi gửi câu SQL, hãy review thật kỹ:
- có an toàn không
- có đúng logic không
- JOIN đã đúng chưa
- GROUP BY có đúng không
- có thói quen nguy hiểm nào không
\`\`\`

## Prompt 3 - Nhờ AI phản biện câu SQL của tôi
\`\`\`
Tôi sẽ gửi cho bạn một số câu SQL của tôi.
Bạn hãy review như reviewer khó tính.

Đánh giá theo:
1. Cú pháp
2. Logic
3. Mức độ an toàn
4. Độ rõ ràng
5. Mức độ phù hợp với bài toán

Nếu có câu nào nguy hiểm, hãy cảnh báo thật rõ.
Nếu có cách viết tốt hơn, hãy đưa ra và giải thích vì sao.
\`\`\`

## Bài tập buổi này
- Viết CRUD cơ bản cho 2 bảng
- Viết ít nhất 3 câu JOIN
- Viết ít nhất 3 câu GROUP BY

## Tiêu chuẩn hoàn thành
- Biết thêm/sửa/xóa dữ liệu an toàn
- Hiểu JOIN để nối dữ liệu
- Biết thống kê dữ liệu cơ bản
      `
    },
    {
      id: 'db-07',
      title: 'Buổi 7: Thiết kế schema, chuẩn hóa dữ liệu và tư duy mở rộng',
      level: 'intermediate',
      content: `
# Buổi 7: Thiết kế schema, chuẩn hóa dữ liệu và tư duy mở rộng

## Mục tiêu
- Hiểu vì sao schema tốt quan trọng hơn viết truy vấn giỏi
- Biết tránh lặp dữ liệu
- Biết tách bảng hợp lý
- Thiết kế schema đủ sạch để mở rộng sau này

## Prompt 1 - Nhờ AI dạy tư duy schema design
\`\`\`
Hãy dạy tôi database buổi 7 về thiết kế schema và chuẩn hóa dữ liệu.

Tôi không muốn học theo kiểu học thuộc normal form.
Tôi muốn học theo tư duy thiết kế dữ liệu hợp lý cho sản phẩm thật.

Hãy dạy theo cấu trúc:
1. Schema là gì?
2. Vì sao schema tốt giúp project khỏe về lâu dài?
3. Dữ liệu lặp gây hại gì?
4. Khi nào nên tách bảng?
5. Khi nào tách quá mức lại gây phức tạp?
6. Giải thích chuẩn hóa ở mức cơ bản, dễ hiểu
7. Cho ví dụ:
   - schema xấu có dữ liệu lặp
   - schema được cải thiện
8. Chỉ ra lỗi phổ biến của người mới:
   - nhét quá nhiều cột vào một bảng
   - lặp name/email ở nhiều nơi
   - chưa nghĩ đến mở rộng sau này
9. Cho tôi checklist đánh giá schema

Dạy như mentor đang review thiết kế database của junior.
\`\`\`

## Prompt 2 - Nhờ AI dẫn tôi thiết kế schema cho app thật
\`\`\`
Tôi muốn bạn giúp tôi thiết kế schema cho một ứng dụng thật.

Hãy chọn một trong các bài toán sau để dẫn tôi:
- app blog
- app bán hàng
- app học online
- app quản lý công việc

Cách dẫn tôi học:
1. hỏi tôi tính năng chính của app
2. từ tính năng, hỏi tôi cần những bảng nào
3. hỏi tôi bảng nào đang bị dư hoặc bị lặp
4. giúp tôi tách bảng hợp lý
5. hỏi tôi app này sau này mở rộng thì cần tính đến gì
6. sau đó review toàn bộ schema tôi đề xuất

Tôi muốn được luyện tư duy hệ thống chứ không chỉ vẽ bảng cho xong.
\`\`\`

## Prompt 3 - Nhờ AI audit schema của tôi
\`\`\`
Tôi sẽ gửi schema database của tôi.
Bạn hãy audit theo 6 tiêu chí:
1. Đúng nghiệp vụ
2. Ít lặp dữ liệu
3. Quan hệ hợp lý
4. Dễ mở rộng
5. Tên bảng/cột rõ ràng
6. Có chỗ nào thiết kế non tay không

Hãy chỉ ra cụ thể từng vấn đề và yêu cầu tôi sửa phiên bản tốt hơn.
\`\`\`

## Bài tập buổi này
- Thiết kế schema cho 1 ứng dụng nhỏ
- Tự tìm các chỗ dữ liệu lặp và tối ưu lại

## Tiêu chuẩn hoàn thành
- Schema có logic
- Ít lặp dữ liệu
- Có tư duy mở rộng cơ bản
      `
    },
    {
      id: 'db-08',
      title: 'Buổi 8: Prisma ORM - schema, migration và CRUD với Prisma Client',
      level: 'advanced',
      content: `
# Buổi 8: Prisma ORM - schema, migration và CRUD với Prisma Client

## Mục tiêu
- Hiểu ORM là gì và vì sao dùng ORM
- Biết Prisma schema, model, migration
- Biết CRUD cơ bản với Prisma Client
- Hiểu cách Prisma nối code với database

## Prompt 1 - Nhờ AI dạy Prisma từ bản chất
\`\`\`
Hãy dạy tôi buổi 8 về Prisma ORM như một mentor Node.js/TypeScript.

Chủ đề:
- ORM là gì?
- Prisma là gì?
- Prisma schema
- model
- field
- @id
- @default
- @unique
- migration
- Prisma Client
- create, findMany, findUnique, update, delete

Tôi muốn bạn dạy theo cấu trúc:
1. ORM giải quyết vấn đề gì?
2. Vì sao nhiều dự án Node.js dùng Prisma?
3. Prisma schema là gì?
4. model trong Prisma tương ứng với gì trong database?
5. migration dùng để làm gì?
6. Prisma Client giúp CRUD như thế nào?
7. So sánh Prisma với SQL thuần ở mức dễ hiểu
8. Chỉ ra hiểu lầm phổ biến của người mới khi học ORM
9. Cho ví dụ từ schema đến code CRUD
10. Tóm tắt thành checklist học Prisma cho người mới

Dạy kỹ như mentor đang dẫn một junior backend mới vào team.
\`\`\`

## Prompt 2 - Nhờ AI dẫn tôi làm Prisma thực hành
\`\`\`
Tôi muốn bạn đóng vai mentor và dẫn tôi làm Prisma thực hành.

Bài toán:
Tạo project đơn giản với Prisma cho app blog hoặc học online.

Hãy hướng dẫn theo từng bước:
1. xác định model cần có
2. viết schema.prisma
3. giải thích từng field
4. giải thích từng annotation như @id, @default, @unique
5. hướng dẫn tư duy migration
6. hướng dẫn viết CRUD cơ bản bằng Prisma Client
7. sau mỗi bước, yêu cầu tôi tự viết trước
8. sau đó review code của tôi thật kỹ

Tôi muốn hiểu, không muốn chỉ copy.
\`\`\`

## Prompt 3 - Nhờ AI review Prisma code của tôi
\`\`\`
Tôi sẽ gửi schema Prisma và code Prisma Client của tôi.
Bạn hãy review theo các tiêu chí:
1. Model có hợp lý không?
2. Quan hệ có khai báo đúng không?
3. Migration có logic không?
4. Query Prisma có rõ ràng không?
5. Có chỗ nào tôi đang dùng Prisma theo kiểu máy móc không?

Hãy chỉ ra cụ thể, giải thích kỹ, và cho tôi phiên bản tốt hơn nếu cần.
\`\`\`

## Bài tập buổi này
- Thiết kế schema Prisma cho 1 app nhỏ
- Viết CRUD cơ bản bằng Prisma Client

## Tiêu chuẩn hoàn thành
- Hiểu model và migration
- Viết được CRUD cơ bản với Prisma
- Thấy được cách ORM kết nối code và database
      `
    },
    {
      id: 'db-09',
      title: 'Buổi 9: MongoDB, document database và Mongoose',
      level: 'advanced',
      content: `
# Buổi 9: MongoDB, document database và Mongoose

## Mục tiêu
- Hiểu document database hoạt động ra sao
- Biết collection và document
- Biết khi nào MongoDB phù hợp
- Biết tạo schema/model và CRUD cơ bản với Mongoose

## Prompt 1 - Nhờ AI dạy MongoDB từ góc nhìn khác với SQL
\`\`\`
Hãy dạy tôi buổi 9 về MongoDB và Mongoose như một mentor backend.

Tôi muốn bạn tập trung giúp tôi hiểu:
- MongoDB là gì?
- document database nghĩa là gì?
- collection và document là gì?
- document khác row trong SQL thế nào?
- khi nào MongoDB phù hợp hơn PostgreSQL?
- Mongoose là gì?
- schema và model trong Mongoose là gì?
- CRUD cơ bản với Mongoose

Hãy dạy theo cấu trúc:
1. Tư duy document database
2. So sánh document với row
3. Ưu và nhược điểm của MongoDB
4. Ví dụ document user, post, note
5. Khi nào nên nhúng dữ liệu, khi nào nên reference ở mức dễ hiểu
6. Mongoose giúp gì trong Node.js
7. Chỉ ra lỗi sai phổ biến khi người mới học MongoDB
8. Cho tôi 5 tình huống chọn MongoDB hay SQL
9. Sau đó chấm câu trả lời của tôi

Dạy kỹ và nhiều ví dụ thực tế.
\`\`\`

## Prompt 2 - Nhờ AI dẫn tôi làm Mongoose thực hành
\`\`\`
Tôi muốn bạn dẫn tôi làm thực hành MongoDB với Mongoose.

Bài toán:
Tạo model User và Post đơn giản.

Hãy hướng dẫn theo từng bước:
1. xác định document cần lưu
2. viết Mongoose schema
3. tạo model
4. giải thích required, unique, default
5. viết CRUD cơ bản
6. yêu cầu tôi tự code trước từng phần
7. sau đó review code của tôi thật kỹ

Tôi muốn hiểu tư duy document, không muốn học vẹt.
\`\`\`

## Prompt 3 - Nhờ AI phản biện lựa chọn MongoDB của tôi
\`\`\`
Tôi sẽ mô tả một ứng dụng và nói rằng tôi muốn dùng MongoDB.
Bạn hãy đóng vai reviewer khó tính và phản biện.

Hãy đánh giá:
1. MongoDB có thực sự phù hợp không?
2. Tôi có đang chọn vì thấy “dễ hơn” không?
3. Cấu trúc document của tôi có ổn không?
4. Có chỗ nào tôi nên reference thay vì nhúng không?
5. Mongoose schema của tôi có đang quá lỏng không?

Hãy review kỹ như mentor backend thật sự.
\`\`\`

## Bài tập buổi này
- Tạo 2 model Mongoose
- Viết CRUD cơ bản
- So sánh lại với cách làm bằng Prisma/SQL

## Tiêu chuẩn hoàn thành
- Hiểu tư duy document database
- Biết dùng Mongoose ở mức cơ bản
- Biết khi nào MongoDB phù hợp
      `
    },
    {
      id: 'db-10',
      title: 'Buổi 10: Project cuối khóa - thiết kế database như một backend developer',
      level: 'advanced',
      content: `
# Buổi 10: Project cuối khóa - thiết kế database như một backend developer

## Mục tiêu
- Tổng hợp toàn bộ kiến thức đã học
- Chọn SQL hoặc NoSQL có lý do
- Thiết kế schema rõ ràng
- Viết CRUD cơ bản và tự audit toàn bộ hệ thống dữ liệu

## Prompt 1 - Nhờ AI dẫn tôi làm project từ đầu
\`\`\`
Hãy đóng vai mentor backend và dẫn tôi làm project cuối khóa về database.

Cho tôi chọn 1 trong các project:
1. app blog
2. app học online
3. app bán hàng
4. app quản lý công việc
5. app quản lý người dùng và phân quyền

Sau khi tôi chọn, hãy dẫn tôi theo đúng lộ trình:
1. phân tích tính năng chính
2. liệt kê dữ liệu chính
3. chọn SQL hay NoSQL và giải thích vì sao
4. thiết kế schema/database model
5. xác định quan hệ dữ liệu
6. xác định truy vấn CRUD quan trọng
7. nếu dùng SQL thì gợi ý Prisma
8. nếu dùng MongoDB thì gợi ý Mongoose
9. yêu cầu tôi tự làm từng bước
10. sau mỗi bước review thật kỹ như mentor

Mục tiêu là để tôi thật sự tự thiết kế được database của một app.
\`\`\`

## Prompt 2 - Nhờ AI audit project cuối khóa
\`\`\`
Tôi sẽ gửi cho bạn project cuối khóa về database của tôi.
Bạn hãy audit như mentor backend kỹ tính.

Đánh giá theo 7 nhóm tiêu chí:
1. Phân tích bài toán
2. Chọn SQL/NoSQL
3. Thiết kế schema
4. Quan hệ dữ liệu
5. Khả năng mở rộng
6. CRUD/query
7. Mức độ rõ ràng và trưởng thành của tư duy thiết kế

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
Hãy đóng vai reviewer cuối khóa về database/backend foundation.

Tôi sẽ gửi thiết kế database, schema và một phần CRUD của tôi.
Bạn phải review như thật, không nể nang.

Cách review mong muốn:
- đánh giá tư duy phân tích bài toán
- đánh giá cách chia bảng hoặc chia collection
- đánh giá quan hệ dữ liệu
- đánh giá mức độ lặp dữ liệu
- đánh giá khả năng mở rộng
- đánh giá việc dùng Prisma hoặc Mongoose
- chỉ rõ điểm nào chứng tỏ tôi đã hiểu database
- chỉ rõ điểm nào cho thấy tôi vẫn thiết kế theo kiểu chắp vá

Cuối cùng, hãy nói thật:
- tôi đã đủ nền tảng database để học backend sâu hơn chưa?
- nếu chưa, tôi cần luyện thêm phần nào?
\`\`\`

## Gợi ý project
Chọn 1 trong các project:
1. Database cho app blog
2. Database cho app học online
3. Database cho app bán hàng
4. Database cho app quản lý công việc
5. Database cho app quản lý người dùng và phân quyền

## Yêu cầu bắt buộc
- Có phân tích dữ liệu rõ ràng
- Có chọn SQL hoặc NoSQL có lý do
- Có schema rõ ràng
- Có quan hệ dữ liệu hợp lý nếu dùng SQL
- Có ít nhất một luồng CRUD hoàn chỉnh
- Có dùng Prisma hoặc Mongoose ở mức cơ bản

## Checklist tự đánh giá
- Schema có dễ hiểu không?
- Có lặp dữ liệu không cần thiết không?
- Quan hệ dữ liệu có hợp lý không?
- Dễ mở rộng thêm tính năng mới không?
- CRUD/query có rõ ràng không?
- Lý do chọn SQL/NoSQL có thuyết phục không?

## Bài tập cuối khóa
- Hoàn thành project
- Tự audit bằng AI theo các prompt trên
- Sửa lại bản final đến khi đủ chắc
      `
    }
  ]
};