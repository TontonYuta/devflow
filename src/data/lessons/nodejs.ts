import { Lesson } from '../../types';

export const nodejsLesson: Lesson = {
  id: 'nodejs-mastery',
  icon: 'server',
  title: 'Node.js & Express',
  description:
    'Lộ trình Node.js & Express theo phong cách tự học cùng AI mentor. Mỗi buổi học đi kèm prompt cực chi tiết để học viên chỉ cần copy vào AI là có thể học từ bản chất, hiểu backend, xây API, xử lý middleware, auth, validation, database và được review như học cùng mentor 1-1.',
  points: [
    'Mỗi buổi có prompt cực chi tiết để copy vào AI và học ngay',
    'AI đóng vai mentor backend, dạy từ bản chất chứ không chỉ liệt kê lệnh hay API',
    'Có prompt học lý thuyết, prompt build feature, prompt review và prompt phản biện kiến trúc',
    'Tập trung vào năng lực thật: routing, request/response, middleware, auth, validation, project structure',
    'Có project xuyên suốt để ghép các buổi thành một backend thực tế',
    'Học xong có thể tự xây một backend Node.js/Express nhỏ có API rõ ràng và cấu trúc tốt'
  ],
  chapters: [
    {
      id: 'node-01',
      title: 'Buổi 1: Node.js là gì và vì sao JavaScript có thể chạy ở backend?',
      level: 'beginner',
      content: `
# Buổi 1: Node.js là gì và vì sao JavaScript có thể chạy ở backend?

## Mục tiêu
- Hiểu Node.js là gì
- Phân biệt JavaScript trong trình duyệt và JavaScript trong Node.js
- Hiểu vai trò của backend trong một ứng dụng
- Thấy được vì sao Node.js phổ biến trong phát triển backend

## Cách học buổi này
Bạn sẽ copy từng prompt bên dưới vào AI theo đúng thứ tự.
Không học lướt. Sau mỗi prompt phải tự giải thích lại bằng lời của bạn.

## Prompt 1 - Nhờ AI dạy lý thuyết từ gốc
\`\`\`
Bạn hãy đóng vai một mentor Backend cực giỏi, chuyên dạy Node.js cho người mới từ con số 0.

Hôm nay hãy dạy tôi buổi đầu tiên về Node.js theo phong cách:
- cực dễ hiểu nhưng không hời hợt
- giải thích từ bản chất
- luôn nói vì sao kiến thức này quan trọng
- gắn với ví dụ thực tế của app web
- không dùng thuật ngữ khó nếu chưa giải thích

Chủ đề hôm nay:
- Node.js là gì?
- Node.js khác JavaScript trên trình duyệt ở đâu?
- Backend là gì?
- Frontend và backend phối hợp với nhau như thế nào?
- Vì sao nhiều công ty dùng Node.js cho backend?

Tôi muốn bạn dạy theo format:
1. Backend là gì?
2. Vai trò của backend trong một app web
3. Node.js là gì?
4. Vì sao JavaScript có thể chạy ngoài trình duyệt?
5. So sánh JavaScript trong browser và trong Node.js
6. Nêu các điểm mạnh của Node.js:
   - dùng chung ngôn ngữ với frontend
   - I/O bất đồng bộ
   - ecosystem lớn
7. Cho 5 ví dụ sản phẩm hoặc bài toán phù hợp với Node.js
8. Chỉ ra 8 hiểu lầm phổ biến của người mới về Node.js
9. Đặt cho tôi 5 câu hỏi kiểm tra hiểu bài
10. Sau khi tôi trả lời, bạn phải chấm và sửa thật kỹ

Dùng tiếng Việt và dạy như mentor thật sự.
\`\`\`

## Prompt 2 - Nhờ AI luyện tư duy backend
\`\`\`
Tôi muốn luyện tư duy nhìn một ứng dụng dưới góc nhìn backend.

Hãy cho tôi 5 ứng dụng quen thuộc:
- app blog
- app bán hàng
- app học online
- app chat
- app quản lý công việc

Với mỗi ứng dụng:
1. hỏi tôi backend phải làm những việc gì
2. hỏi tôi dữ liệu nào backend phải quản lý
3. hỏi tôi frontend sẽ gọi backend để làm gì
4. sau đó bạn mới chữa
5. nếu tôi trả lời mơ hồ, hãy bắt tôi nói cụ thể hơn

Mục tiêu là để tôi hiểu backend không chỉ là “viết API”.
\`\`\`

## Prompt 3 - Nhờ AI kiểm tra hiểu bài
\`\`\`
Hãy kiểm tra xem tôi đã thật sự hiểu Node.js buổi 1 chưa.

Tôi muốn có:
- 3 câu hỏi trắc nghiệm có giải thích đáp án
- 3 câu hỏi tự luận ngắn
- 2 tình huống thực tế về frontend/backend
- 1 câu hỏi tư duy: vì sao dùng JavaScript ở cả frontend và backend có thể là lợi thế?

Sau khi tôi trả lời, bạn hãy:
- chấm điểm từng câu
- giải thích chỗ sai
- nói tôi đang ở mức nào: chưa hiểu / hiểu cơ bản / hiểu chắc
\`\`\`

## Bài tập buổi này
1. Giải thích Node.js bằng lời của bạn
2. So sánh JS browser và Node.js
3. Nêu 3 việc backend phải làm trong một app bất kỳ

## Tiêu chuẩn hoàn thành
- Hiểu Node.js là môi trường chạy JS ngoài trình duyệt
- Hiểu backend là gì
- Thấy rõ vai trò của Node.js trong hệ thống web
      `
    },
    {
      id: 'node-02',
      title: 'Buổi 2: Cài Node.js, chạy file đầu tiên và hiểu project Node cơ bản',
      level: 'beginner',
      content: `
# Buổi 2: Cài Node.js, chạy file đầu tiên và hiểu project Node cơ bản

## Mục tiêu
- Cài Node.js thành công
- Biết chạy file JS bằng terminal
- Biết npm là gì
- Hiểu \`package.json\` ở mức nền tảng

## Prompt 1 - Nhờ AI hướng dẫn cài đặt như mentor kỹ thuật
\`\`\`
Hãy đóng vai mentor kỹ thuật và hướng dẫn tôi cài Node.js từ đầu.

Tôi muốn bạn hướng dẫn theo cách:
1. giải thích Node.js cần cài ở đâu và vì sao
2. hướng dẫn theo từng bước cho Windows hoặc macOS hoặc Linux
3. sau khi cài xong, hướng dẫn tôi kiểm tra bằng:
   - node -v
   - npm -v
4. giải thích npm là gì
5. hướng dẫn tôi tạo file app.js và chạy bằng node app.js
6. hướng dẫn tôi khởi tạo project bằng npm init -y
7. giải thích package.json là gì ở mức dễ hiểu
8. nếu có lỗi thường gặp, hãy chỉ luôn cách xử lý

Dùng tiếng Việt và hướng dẫn như mentor đang ngồi cạnh tôi.
\`\`\`

## Prompt 2 - Nhờ AI giải thích project Node đầu tiên
\`\`\`
Tôi vừa tạo xong project Node.js đầu tiên. Hãy giúp tôi hiểu các thành phần cơ bản.

Tôi muốn bạn giải thích:
1. app.js dùng để làm gì
2. package.json là gì
3. scripts trong package.json là gì
4. dependency là gì
5. khác nhau giữa chạy file bằng node và chạy bằng npm script

Cách giải thích tôi muốn:
- dễ hiểu
- gắn với ví dụ thật
- nói rõ phần nào người mới cần hiểu trước
- phần nào tạm chưa cần đào quá sâu
\`\`\`

## Prompt 3 - Nhờ AI kiểm tra thiết lập môi trường
\`\`\`
Tôi sẽ gửi cho bạn:
- phiên bản Node và npm
- nội dung package.json của tôi
- file app.js đơn giản

Bạn hãy review:
1. môi trường đã ổn chưa
2. project đã khởi tạo đúng chưa
3. tôi có hiểu package.json đúng chưa
4. có lỗi setup nào cần sửa ngay không
\`\`\`

## Bài tập buổi này
- Cài Node.js
- Chạy thành công một file JS
- Khởi tạo project bằng npm
- Tự giải thích package.json là gì

## Tiêu chuẩn hoàn thành
- Node và npm hoạt động
- Chạy được file JS qua terminal
- Biết project Node cơ bản bắt đầu từ đâu
      `
    },
    {
      id: 'node-03',
      title: 'Buổi 3: Module, core modules và làm việc với file trong Node.js',
      level: 'beginner',
      content: `
# Buổi 3: Module, core modules và làm việc với file trong Node.js

## Mục tiêu
- Hiểu module là gì
- Biết tách code thành nhiều file
- Biết dùng \`require()\`, \`module.exports\`
- Biết làm quen với \`path\`, \`os\`, \`fs\`
- Biết đọc/ghi file cơ bản

## Prompt 1 - Nhờ AI dạy module và core modules từ bản chất
\`\`\`
Hãy dạy tôi Node.js buổi 3 như một mentor backend.

Chủ đề:
- module
- require
- module.exports
- path
- os
- fs
- readFile
- writeFile

Tôi muốn bạn dạy theo cấu trúc:
1. Vì sao backend project phải tách code thành nhiều file?
2. Module trong Node.js là gì?
3. require và module.exports hoạt động ra sao?
4. path dùng để làm gì?
5. os dùng để làm gì?
6. fs dùng để làm gì?
7. Phân biệt đọc/ghi file sync và async ở mức dễ hiểu
8. Cho ví dụ thực tế:
   - tách file utils
   - đọc file JSON
   - ghi file note
9. Chỉ ra lỗi phổ biến:
   - tách file nhưng không rõ trách nhiệm
   - import/export nhầm
   - đọc file mà không xử lý lỗi
10. Tạo checklist tư duy module + file system

Dạy như mentor đang xây nền code organization cho junior backend.
\`\`\`

## Prompt 2 - Nhờ AI dẫn tôi thực hành module và fs
\`\`\`
Hãy dẫn tôi thực hành buổi 3:
1. tạo file math.js có hàm cộng và trừ
2. import vào app.js
3. tạo file config đơn giản
4. dùng path.join để tạo đường dẫn file
5. dùng fs ghi một file text
6. dùng fs đọc lại file đó
7. tạo một file JSON và đọc ra object

Tôi muốn bạn:
- hướng dẫn từng bước
- giải thích vì sao
- để tôi tự làm từng phần
- sau mỗi phần, review:
  - chia file đã hợp lý chưa
  - import/export đã đúng chưa
  - xử lý file đã ổn chưa
  - có chỗ nào dễ lỗi không
\`\`\`

## Prompt 3 - Nhờ AI review cấu trúc file của tôi
\`\`\`
Tôi sẽ gửi cho bạn cấu trúc file và code module Node.js của tôi.
Bạn hãy review:
1. Tách module đã hợp lý chưa?
2. File nào đang ôm quá nhiều trách nhiệm?
3. Import/export có rõ không?
4. Dùng fs/path đã đúng mục đích chưa?
5. Có cách tổ chức nào gọn hơn không?

Hãy review cụ thể như mentor backend khó tính.
\`\`\`

## Bài tập buổi này
- Tạo project nhỏ có ít nhất 3 module
- Dùng fs để đọc/ghi file
- Dùng path để tạo đường dẫn an toàn

## Tiêu chuẩn hoàn thành
- Biết tách code thành module
- Biết đọc/ghi file cơ bản
- Bắt đầu có tư duy tổ chức backend code
      `
    },
    {
      id: 'node-04',
      title: 'Buổi 4: HTTP server, request/response và tư duy backend thuần Node',
      level: 'beginner',
      content: `
# Buổi 4: HTTP server, request/response và tư duy backend thuần Node

## Mục tiêu
- Hiểu backend nhận request và trả response như thế nào
- Tạo được HTTP server bằng Node.js thuần
- Biết response theo URL khác nhau
- Bắt đầu hiểu nền tảng trước khi học Express

## Prompt 1 - Nhờ AI dạy HTTP từ góc nhìn backend
\`\`\`
Hãy dạy tôi Node.js buổi 4 như mentor backend.

Chủ đề:
- http module
- createServer
- req
- res
- listen
- URL
- request/response cycle

Tôi muốn bạn dạy theo cấu trúc:
1. Điều gì xảy ra khi trình duyệt gọi tới một backend?
2. HTTP request là gì?
3. HTTP response là gì?
4. Node.js thuần tạo server như thế nào?
5. req và res đại diện cho gì?
6. listen(port) nghĩa là gì?
7. Cho ví dụ server có nhiều URL:
   - /
   - /about
   - /contact
8. Chỉ ra lỗi phổ biến:
   - không hiểu request/response cycle
   - không trả response
   - trả response sai kiểu
9. Tạo checklist tư duy HTTP cơ bản

Dạy như mentor đang xây nền backend fundamentals cho junior.
\`\`\`

## Prompt 2 - Nhờ AI dẫn tôi build server Node thuần
\`\`\`
Hãy dẫn tôi thực hành buổi 4:
1. tạo server Node thuần
2. trả về chuỗi đơn giản
3. phân nhánh theo URL
4. đổi port server
5. log req.url và req.method ra console

Tôi muốn bạn:
- hướng dẫn từng bước
- giải thích từng quyết định
- để tôi tự làm trước
- sau mỗi bước, review:
  - server đã chạy đúng chưa
  - response có được trả ra không
  - tư duy URL handling đã đúng chưa
\`\`\`

## Prompt 3 - Nhờ AI review hiểu biết HTTP của tôi
\`\`\`
Tôi sẽ gửi cho bạn code HTTP server Node thuần của tôi.
Bạn hãy review:
1. Tôi có hiểu request/response chưa?
2. Code có rõ ràng không?
3. Tôi có đang xử lý URL theo kiểu chắp vá không?
4. Phần nào là nền tảng cần nhớ khi sang Express?
5. Có lỗi logic nào không?

Hãy review như mentor backend thật sự.
\`\`\`

## Bài tập buổi này
- Tạo server Node thuần có 3 đường dẫn
- Mỗi đường dẫn trả một response khác nhau
- Tự giải thích request/response cycle

## Tiêu chuẩn hoàn thành
- Hiểu nền tảng HTTP server
- Biết request đi vào và response đi ra
- Sẵn sàng học Express với nền chắc hơn
      `
    },
    {
      id: 'node-05',
      title: 'Buổi 5: RESTful API, Express và server Express đầu tiên',
      level: 'beginner',
      content: `
# Buổi 5: RESTful API, Express và server Express đầu tiên

## Mục tiêu
- Hiểu API là gì
- Hiểu RESTful API ở mức nền tảng
- Biết Express là gì
- Tạo được server Express đầu tiên
- Thấy được vì sao Express làm backend dễ hơn Node thuần

## Prompt 1 - Nhờ AI dạy API và Express từ bản chất
\`\`\`
Hãy dạy tôi Node.js buổi 5 như mentor backend thực chiến.

Chủ đề:
- API là gì
- RESTful API
- resource
- endpoint
- GET, POST, PUT, PATCH, DELETE
- Express là gì
- app.get
- app.listen

Tôi muốn bạn dạy theo cấu trúc:
1. API là gì trong một ứng dụng web?
2. Frontend và backend giao tiếp qua API như thế nào?
3. RESTful API là gì?
4. Resource và endpoint nghĩa là gì?
5. Giải thích ý nghĩa của các HTTP methods cơ bản
6. Express giúp gì so với Node http thuần?
7. Cho ví dụ thực tế:
   - /api/products
   - /api/posts
   - /api/users
8. Chỉ ra lỗi phổ biến:
   - gọi mọi thứ là API nhưng không hiểu resource
   - dùng sai HTTP method
   - không hiểu vì sao Express tiện hơn
9. Tạo checklist tư duy API nền tảng

Dạy như mentor đang đưa junior vào thế giới backend thật sự.
\`\`\`

## Prompt 2 - Nhờ AI dẫn tôi tạo server Express đầu tiên
\`\`\`
Hãy dẫn tôi thực hành buổi 5:
1. cài express
2. tạo file server/app
3. tạo route /
4. tạo route /about
5. chạy server thành công
6. tạo vài route API đơn giản

Tôi muốn bạn:
- hướng dẫn từng bước
- giải thích ngắn gọn từng dòng quan trọng
- để tôi tự làm trước
- sau mỗi bước, review:
  - Express setup đã đúng chưa
  - route có rõ ràng chưa
  - tôi có hiểu vì sao Express gọn hơn không
\`\`\`

## Prompt 3 - Nhờ AI review hiểu biết API của tôi
\`\`\`
Tôi sẽ gửi cho bạn các route Express đầu tiên của tôi.
Bạn hãy review:
1. Route đã đặt đúng tinh thần RESTful chưa?
2. Method đã đúng chưa?
3. Tên endpoint có rõ không?
4. Tôi có đang tư duy đúng về resource không?
5. Có gì cần chỉnh từ sớm để đỡ thành thói quen xấu?
\`\`\`

## Bài tập buổi này
- Tạo server Express đầu tiên
- Tạo ít nhất 5 endpoint cơ bản
- Tự mô tả resource tương ứng với từng endpoint

## Tiêu chuẩn hoàn thành
- Hiểu API là gì
- Tạo được Express server
- Bắt đầu tư duy theo resource và endpoint
      `
    },
    {
      id: 'node-06',
      title: 'Buổi 6: Routing, params, query, req/res và gửi dữ liệu JSON',
      level: 'intermediate',
      content: `
# Buổi 6: Routing, params, query, req/res và gửi dữ liệu JSON

## Mục tiêu
- Dùng được params và query
- Hiểu \`req\` và \`res\` rõ hơn
- Biết trả về JSON
- Biết dùng status code cơ bản
- Bắt đầu viết API có dữ liệu rõ ràng

## Prompt 1 - Nhờ AI dạy request data flow
\`\`\`
Hãy dạy tôi Node.js buổi 6 như mentor backend.

Chủ đề:
- req
- res
- req.params
- req.query
- res.send
- res.json
- res.status

Tôi muốn bạn dạy theo cấu trúc:
1. req chứa gì?
2. res dùng để làm gì?
3. params là gì? Khi nào dùng?
4. query là gì? Khi nào dùng?
5. res.send khác res.json ở đâu?
6. status code cơ bản nên hiểu thế nào?
7. Cho ví dụ thực tế:
   - /users/:id
   - /products?keyword=abc
   - JSON response chuẩn
8. Chỉ ra lỗi phổ biến:
   - nhầm params và query
   - trả response thiếu cấu trúc
   - không dùng status code phù hợp
9. Tạo checklist viết API response rõ ràng

Dạy như mentor đang sửa data flow trong đầu junior backend.
\`\`\`

## Prompt 2 - Nhờ AI giao bài thực hành routing
\`\`\`
Hãy giao cho tôi bài thực hành buổi 6:
1. tạo route /users/:id
2. tạo route /products với query keyword
3. tạo route trả về JSON danh sách sản phẩm
4. tạo route trả về object có success, data, message
5. tạo route trả lỗi 404 đơn giản

Yêu cầu:
- không cho đáp án ngay
- để tôi tự làm
- sau khi tôi gửi code, review:
  - params/query dùng đúng chưa
  - JSON có rõ ràng không
  - status code có hợp lý không
  - req/res flow có hiểu đúng không
\`\`\`

## Prompt 3 - Nhờ AI review style API response của tôi
\`\`\`
Tôi sẽ gửi cho bạn một số route Express của tôi.
Bạn hãy review theo 5 tiêu chí:
1. Route rõ nghĩa
2. params/query đúng mục đích
3. Response structure rõ ràng
4. Status code hợp lý
5. Mức độ dễ dùng cho frontend

Hãy review như mentor backend khó tính.
\`\`\`

## Bài tập buổi này
- Viết ít nhất 6 route dùng params/query/json/status
- Chuẩn hóa response cơ bản

## Tiêu chuẩn hoàn thành
- Biết nhận dữ liệu từ URL
- Biết trả JSON rõ ràng
- Hiểu \`req\` và \`res\` hơn ở mức thực chiến
      `
    },
    {
      id: 'node-07',
      title: 'Buổi 7: req.body, middleware, validation và xử lý lỗi',
      level: 'intermediate',
      content: `
# Buổi 7: req.body, middleware, validation và xử lý lỗi

## Mục tiêu
- Nhận dữ liệu từ client bằng \`req.body\`
- Hiểu middleware là gì
- Viết validation cơ bản
- Biết xử lý lỗi nhất quán
- Hiểu backend không chỉ “chạy được” mà còn phải an toàn và rõ ràng

## Prompt 1 - Nhờ AI dạy request pipeline
\`\`\`
Hãy dạy tôi Node.js buổi 7 như mentor backend thực chiến.

Chủ đề:
- express.json
- req.body
- middleware
- next
- validation
- try/catch
- error handler
- 404 handler

Tôi muốn bạn dạy theo cấu trúc:
1. Frontend gửi dữ liệu lên backend như thế nào?
2. express.json dùng để làm gì?
3. req.body lấy dữ liệu ra sao?
4. Middleware là gì trong luồng request?
5. next() dùng để làm gì?
6. Vì sao backend phải validate dữ liệu đầu vào?
7. Vì sao backend phải xử lý lỗi tập trung?
8. Cho ví dụ thực tế:
   - thêm sản phẩm
   - thêm user
   - validate field bắt buộc
   - trả lỗi 400/500/404
9. Chỉ ra lỗi phổ biến:
   - quên express.json
   - validate quá sơ sài
   - trả lỗi mơ hồ
   - middleware lẫn logic business
10. Tạo checklist request pipeline an toàn

Dạy như mentor đang sửa tư duy backend quality cho junior.
\`\`\`

## Prompt 2 - Nhờ AI dẫn tôi build POST flow hoàn chỉnh
\`\`\`
Hãy dẫn tôi thực hành buổi 7:
1. bật express.json
2. tạo API POST nhận dữ liệu sản phẩm hoặc user
3. validate dữ liệu đầu vào
4. tạo middleware logger đơn giản
5. tạo middleware error handler cơ bản
6. tạo route 404 cơ bản

Cách hướng dẫn:
- giải thích từng bước
- để tôi tự làm trước
- sau mỗi bước, review:
  - req.body đã lấy đúng chưa
  - validate có đủ chưa
  - middleware đã đúng trách nhiệm chưa
  - response lỗi có rõ không
\`\`\`

## Prompt 3 - Nhờ AI audit chất lượng backend flow của tôi
\`\`\`
Tôi sẽ gửi cho bạn code POST route, middleware và error handling của tôi.
Bạn hãy review theo 6 tiêu chí:
1. Request parsing
2. Validation
3. Middleware design
4. Error handling
5. Status code
6. Độ rõ ràng tổng thể

Hãy chỉ ra thật cụ thể từng lỗi và hướng sửa.
\`\`\`

## Bài tập buổi này
- Tạo ít nhất 2 POST API có validation
- Thêm logger middleware
- Thêm error handler cơ bản

## Tiêu chuẩn hoàn thành
- Hiểu request pipeline
- Biết validate dữ liệu
- Biết backend cần trả lỗi rõ ràng
      `
    },
    {
      id: 'node-08',
      title: 'Buổi 8: CRUD hoàn chỉnh, router/controller và cấu trúc project backend',
      level: 'advanced',
      content: `
# Buổi 8: CRUD hoàn chỉnh, router/controller và cấu trúc project backend

## Mục tiêu
- Xây CRUD hoàn chỉnh
- Biết tách router và controller
- Biết tổ chức project backend rõ ràng
- Hiểu separation of concerns ở mức thực chiến

## Prompt 1 - Nhờ AI dạy kiến trúc backend cơ bản
\`\`\`
Hãy dạy tôi Node.js buổi 8 như mentor backend.

Chủ đề:
- CRUD
- router
- controller
- routes/
- controllers/
- middlewares/
- separation of concerns

Tôi muốn bạn dạy theo cấu trúc:
1. CRUD trong backend nghĩa là gì?
2. Vì sao project không nên để tất cả trong một file?
3. Router chịu trách nhiệm gì?
4. Controller chịu trách nhiệm gì?
5. Middleware nên để ở đâu?
6. Tư duy separation of concerns là gì?
7. Cho ví dụ cấu trúc project backend:
   - routes
   - controllers
   - middlewares
   - utils hoặc config nếu cần
8. Chỉ ra lỗi phổ biến:
   - route file chứa hết logic
   - controller làm quá nhiều việc
   - project không có cấu trúc
9. Tạo checklist cấu trúc backend sạch

Dạy như mentor đang chuẩn hóa project structure cho junior.
\`\`\`

## Prompt 2 - Nhờ AI dẫn tôi refactor project
\`\`\`
Hãy dẫn tôi thực hành buổi 8:
1. tạo CRUD cho resource products hoặc posts
2. tách route sang file riêng
3. tách controller sang file riêng
4. giữ middleware ở chỗ hợp lý
5. tổ chức project lại cho rõ ràng

Tôi muốn bạn:
- để tôi tự làm từng bước
- giải thích vì sao mỗi bước quan trọng
- sau mỗi bước, review:
  - route/controller đã tách đúng chưa
  - CRUD có đủ chưa
  - project structure có sạch không
  - có file nào đang ôm quá nhiều trách nhiệm không
\`\`\`

## Prompt 3 - Nhờ AI review kiến trúc project của tôi
\`\`\`
Tôi sẽ gửi cho bạn cấu trúc project backend và code CRUD của tôi.
Bạn hãy review:
1. Router có gọn không?
2. Controller có rõ trách nhiệm không?
3. Middleware đã đặt đúng chỗ chưa?
4. CRUD có nhất quán không?
5. Project có dễ mở rộng không?

Hãy review như mentor technical lead.
\`\`\`

## Bài tập buổi này
- Xây CRUD hoàn chỉnh cho 1 resource
- Tách router/controller/middleware
- Dọn project structure sạch hơn

## Tiêu chuẩn hoàn thành
- Có CRUD rõ ràng
- Project không còn dồn mọi thứ vào một file
- Bắt đầu có tư duy kiến trúc backend
      `
    },
    {
      id: 'node-09',
      title: 'Buổi 9: Auth với JWT, middleware xác thực và bảo vệ route',
      level: 'advanced',
      content: `
# Buổi 9: Auth với JWT, middleware xác thực và bảo vệ route

## Mục tiêu
- Hiểu auth là gì
- Hiểu JWT là gì ở mức nền tảng
- Biết luồng login và cấp token
- Biết middleware xác thực route
- Hiểu phân biệt route public và private

## Prompt 1 - Nhờ AI dạy auth từ góc nhìn sản phẩm
\`\`\`
Hãy dạy tôi Node.js buổi 9 như mentor backend thực chiến.

Chủ đề:
- auth
- login
- token
- JWT
- Authorization header
- verify token
- auth middleware
- role cơ bản nếu cần

Tôi muốn bạn dạy theo cấu trúc:
1. Auth là gì?
2. Một hệ thống đăng nhập thường hoạt động ra sao?
3. JWT là gì ở mức dễ hiểu?
4. Token được cấp và được gửi lại như thế nào?
5. Authorization header là gì?
6. Middleware xác thực hoạt động thế nào?
7. Route public và private khác nhau ra sao?
8. Cho ví dụ thực tế:
   - login
   - profile
   - dashboard
   - admin route
9. Chỉ ra lỗi phổ biến:
   - hiểu JWT như phép màu
   - verify token hời hợt
   - không tách public/private rõ
10. Tạo checklist auth flow cơ bản

Dạy như mentor đang mở cánh cửa auth cho junior backend.
\`\`\`

## Prompt 2 - Nhờ AI dẫn tôi build auth flow cơ bản
\`\`\`
Hãy dẫn tôi thực hành buổi 9:
1. tạo API login giả
2. cấp token JWT sau khi login thành công
3. tạo middleware kiểm tra token
4. bảo vệ route /profile
5. tạo thêm ví dụ route chỉ cho admin nếu cần ở mức đơn giản

Tôi muốn bạn:
- giải thích từng bước
- để tôi tự làm trước
- sau mỗi bước, review:
  - token flow đã đúng chưa
  - middleware auth đã đúng chưa
  - route protection có rõ không
  - logic bảo mật có đang quá sơ sài không
\`\`\`

## Prompt 3 - Nhờ AI review auth architecture của tôi
\`\`\`
Tôi sẽ gửi cho bạn code login, JWT và auth middleware của tôi.
Bạn hãy review theo 6 tiêu chí:
1. Login flow
2. Token generation
3. Token verification
4. Route protection
5. Error response khi auth fail
6. Mức độ rõ ràng của code

Hãy review như mentor backend khó tính nhưng công bằng.
\`\`\`

## Bài tập buổi này
- Tạo login API giả
- Cấp JWT
- Bảo vệ ít nhất 2 route bằng auth middleware

## Tiêu chuẩn hoàn thành
- Hiểu auth flow cơ bản
- Biết dùng JWT ở mức nền tảng
- Biết bảo vệ route private
      `
    },
    {
      id: 'node-10',
      title: 'Buổi 10: Database, tích hợp dữ liệu thật và project cuối khóa backend',
      level: 'advanced',
      content: `
# Buổi 10: Database, tích hợp dữ liệu thật và project cuối khóa backend

## Mục tiêu
- Hiểu backend thực tế phải làm việc với database
- Biết kết nối lại toàn bộ kiến thức đã học
- Hoàn thiện một backend nhỏ nhưng bài bản
- Tự đánh giá mức độ sẵn sàng cho backend project thật

## Prompt 1 - Nhờ AI dẫn tôi làm project từ đầu
\`\`\`
Hãy đóng vai mentor backend và dẫn tôi làm project cuối khóa Node.js & Express.

Cho tôi chọn 1 trong các project:
1. API quản lý sản phẩm
2. API blog mini
3. API quản lý khóa học
4. API to-do app
5. API user + auth cơ bản

Sau khi tôi chọn, hãy dẫn tôi theo lộ trình:
1. phân tích yêu cầu
2. xác định resource chính
3. xác định routes
4. xác định request/response shape
5. xác định middleware cần có
6. xác định validation cần có
7. xác định auth cần có hay không
8. xác định dữ liệu sẽ lưu thế nào
9. nếu có database thì hướng dẫn tích hợp ở mức phù hợp
10. để tôi tự build từng phần
11. sau mỗi phần, review rất kỹ như mentor

Mục tiêu là để tôi thật sự tự xây được một backend nhỏ nhưng bài bản.
\`\`\`

## Prompt 2 - Nhờ AI audit project cuối khóa
\`\`\`
Tôi sẽ gửi cho bạn project backend cuối khóa của tôi.
Bạn hãy audit như mentor backend kỹ tính.

Đánh giá theo 8 nhóm tiêu chí:
1. Hiểu bài toán
2. Thiết kế API
3. Routing và controller
4. Validation
5. Middleware
6. Error handling
7. Auth nếu có
8. Project structure và độ rõ ràng tổng thể

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
Hãy đóng vai reviewer cuối khóa backend Node.js/Express.

Tôi sẽ gửi code project của tôi.
Bạn phải review như thật, không nể nang.

Cách review mong muốn:
- đánh giá tư duy backend
- đánh giá API design
- đánh giá request/response flow
- đánh giá validation và error handling
- đánh giá middleware/auth
- đánh giá cấu trúc project
- chỉ rõ điểm nào chứng tỏ tôi đã hiểu backend foundation
- chỉ rõ điểm nào cho thấy tôi vẫn đang ghép API theo kiểu chắp vá

Cuối cùng, hãy nói thật:
- tôi đã đủ nền tảng để làm project backend nghiêm túc hơn chưa?
- nếu chưa, tôi cần luyện thêm phần nào?
\`\`\`

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
- Có validation dữ liệu
- Có xử lý lỗi
- Có ít nhất một route được bảo vệ bằng auth nếu phù hợp
- Có dữ liệu thật hoặc mô phỏng dữ liệu có cấu trúc rõ ràng
- Có cấu trúc project dễ mở rộng

## Checklist tự đánh giá
- API có rõ ràng không?
- Route có đặt đúng tinh thần resource không?
- Response có nhất quán không?
- Validation có đủ chưa?
- Error handling có rõ không?
- Middleware có hợp lý không?
- Project có dễ maintain không?

## Bài tập cuối khóa
- Hoàn thành project
- Tự audit bằng AI theo các prompt trên
- Sửa lại bản final đến khi đủ chắc
      `
    }
  ]
};