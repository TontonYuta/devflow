import { Lesson } from '../../types';

export const reactLesson: Lesson = {
  id: 'react-19-mastery',
  icon: 'code',
  title: 'React 19 & TypeScript',
  description:
    'Lộ trình React 19 & TypeScript theo phong cách tự học cùng AI mentor. Mỗi buổi học đi kèm prompt cực chi tiết để học viên chỉ cần copy vào AI là có thể học từ bản chất, hiểu component, state, hooks, TypeScript, data flow và được review như học cùng mentor 1-1.',
  points: [
    'Mỗi buổi có prompt cực chi tiết để copy vào AI và học ngay',
    'AI đóng vai mentor React, dạy từ bản chất chứ không chỉ giải thích API',
    'Có prompt học lý thuyết, prompt build feature, prompt review và prompt phản biện kiến trúc',
    'Tập trung vào năng lực thật: component thinking, state flow, form, hooks, context, API, TypeScript',
    'Có project xuyên suốt để ghép các buổi thành một app React thực tế',
    'Học xong có thể tự xây một app React nhỏ có cấu trúc rõ ràng, dễ mở rộng và an toàn kiểu dữ liệu hơn'
  ],
  chapters: [
    {
      id: 'react-01',
      title: 'Buổi 1: React là gì và vì sao nên học React theo tư duy component?',
      level: 'beginner',
      content: `
# Buổi 1: React là gì và vì sao nên học React theo tư duy component?

## Mục tiêu
- Hiểu React là gì
- Hiểu React giải quyết vấn đề gì
- Bắt đầu tư duy chia giao diện thành component
- Phân biệt làm UI bằng HTML/CSS/JS thuần và bằng React

## Cách học buổi này
Bạn sẽ copy từng prompt bên dưới vào AI theo đúng thứ tự.
Không học lướt. Sau mỗi prompt phải tự giải thích lại bằng lời của bạn.

## Prompt 1 - Nhờ AI dạy lý thuyết từ gốc
\`\`\`
Bạn hãy đóng vai một mentor Front-end cực giỏi, chuyên dạy React cho người đã biết HTML, CSS và JavaScript cơ bản.

Hôm nay hãy dạy tôi buổi đầu tiên về React theo phong cách:
- cực dễ hiểu nhưng không hời hợt
- giải thích từ bản chất
- luôn nói vì sao kiến thức này quan trọng
- gắn với ví dụ giao diện thực tế
- không dùng thuật ngữ khó nếu chưa giải thích

Chủ đề hôm nay:
- React là gì?
- React giải quyết vấn đề gì?
- Vì sao React phổ biến?
- Tư duy component là gì?
- Khi nào nên dùng React thay vì chỉ dùng HTML/CSS/JS thuần?

Tôi muốn bạn dạy theo format:
1. React là gì?
2. React khác gì với JavaScript thuần thao tác DOM?
3. Component là gì?
4. Vì sao chia giao diện thành component lại mạnh?
5. Cho 5 ví dụ UI có thể tách thành component
6. Phân tích lợi ích của React khi app lớn dần
7. Chỉ ra 8 hiểu lầm phổ biến của người mới về React
8. Đặt cho tôi 5 câu hỏi kiểm tra hiểu bài
9. Sau khi tôi trả lời, bạn phải chấm và sửa thật kỹ

Dùng tiếng Việt và dạy như mentor thật sự.
\`\`\`

## Prompt 2 - Nhờ AI luyện tư duy component
\`\`\`
Tôi muốn luyện tư duy nhìn một giao diện và chia nó thành component.

Hãy cho tôi 6 ví dụ giao diện, ví dụ:
- landing page
- trang blog
- dashboard
- trang sản phẩm
- form đăng nhập
- trang profile cá nhân

Với mỗi giao diện:
1. yêu cầu tôi chia thành các component nhỏ
2. hỏi tôi component nào có thể tái sử dụng
3. hỏi tôi component nào chỉ mang tính bố cục
4. sau đó bạn mới chữa
5. nếu tôi chia quá thô hoặc quá vụn, hãy phản biện thật kỹ

Mục tiêu là để tôi bắt đầu nhìn UI theo component, không theo trang lớn.
\`\`\`

## Prompt 3 - Nhờ AI kiểm tra hiểu bài
\`\`\`
Hãy kiểm tra xem tôi đã thật sự hiểu React buổi 1 chưa.

Tôi muốn có:
- 3 câu hỏi trắc nghiệm có giải thích đáp án
- 3 câu hỏi tự luận ngắn
- 2 bài tập chia giao diện thành component
- 1 câu hỏi tư duy: vì sao React đặc biệt hữu ích khi giao diện lớn dần và phải tái sử dụng nhiều phần?

Sau khi tôi trả lời, bạn hãy:
- chấm điểm từng câu
- giải thích chỗ sai
- nói tôi đang ở mức nào: chưa hiểu / hiểu cơ bản / hiểu chắc
\`\`\`

## Bài tập buổi này
1. Giải thích React bằng lời của bạn
2. Chia một giao diện quen thuộc thành các component
3. Nêu 3 lợi ích của tư duy component

## Tiêu chuẩn hoàn thành
- Hiểu React là thư viện UI
- Hiểu component là đơn vị xây giao diện
- Bắt đầu có tư duy chia nhỏ UI
      `
    },
    {
      id: 'react-02',
      title: 'Buổi 2: Tạo project React 19 với Vite + TypeScript và hiểu cấu trúc cơ bản',
      level: 'beginner',
      content: `
# Buổi 2: Tạo project React 19 với Vite + TypeScript và hiểu cấu trúc cơ bản

## Mục tiêu
- Tạo được project React + TypeScript
- Chạy được dev server
- Hiểu \`main.tsx\`, \`App.tsx\`, \`index.html\`
- Bắt đầu làm quen với TypeScript trong môi trường React

## Prompt 1 - Nhờ AI hướng dẫn setup như mentor kỹ thuật
\`\`\`
Hãy đóng vai mentor kỹ thuật và hướng dẫn tôi tạo project React 19 với Vite + TypeScript.

Tôi muốn bạn hướng dẫn theo cách:
1. giải thích vì sao Vite phù hợp cho người mới học React
2. hướng dẫn lệnh tạo project
3. giải thích vì sao nên học React cùng TypeScript từ sớm
4. hướng dẫn chạy app bằng dev server
5. giải thích các file cơ bản:
   - index.html
   - main.tsx
   - App.tsx
6. nói rõ luồng render từ main.tsx vào App.tsx
7. nếu có lỗi setup thường gặp, hãy nói luôn cách xử lý

Dùng tiếng Việt và hướng dẫn như mentor đang ngồi cạnh tôi.
\`\`\`

## Prompt 2 - Nhờ AI giải thích cấu trúc project React
\`\`\`
Tôi vừa tạo xong project React + TypeScript. Hãy giúp tôi hiểu cấu trúc project như một mentor.

Tôi muốn bạn giải thích:
1. main.tsx làm gì?
2. App.tsx làm gì?
3. index.html có vai trò gì trong project React?
4. tsconfig có vai trò gì ở mức cơ bản?
5. vì sao React app lại có root element?
6. phần nào là quan trọng nhất người mới cần hiểu trước?
7. cuối cùng hãy giúp tôi mô tả sơ đồ render của app bằng lời

Đừng chỉ liệt kê file. Hãy giúp tôi thật sự hiểu app bắt đầu chạy từ đâu.
\`\`\`

## Prompt 3 - Nhờ AI kiểm tra hiểu cấu trúc project
\`\`\`
Tôi sẽ mô tả lại cấu trúc project React bằng lời của tôi.
Bạn hãy review:
1. Tôi hiểu đúng file nào?
2. Tôi đang mơ hồ chỗ nào?
3. Tôi có nhầm giữa môi trường build và logic React không?
4. Hãy cho tôi phiên bản giải thích ngắn gọn, dễ nhớ hơn
\`\`\`

## Bài tập buổi này
- Tạo project React + TypeScript
- Chạy thành công dev server
- Tự giải thích \`main.tsx\` và \`App.tsx\`

## Tiêu chuẩn hoàn thành
- Project chạy được
- Hiểu luồng render cơ bản
- Không còn mù cấu trúc project
      `
    },
    {
      id: 'react-03',
      title: 'Buổi 3: JSX, component cơ bản và props với TypeScript',
      level: 'beginner',
      content: `
# Buổi 3: JSX, component cơ bản và props với TypeScript

## Mục tiêu
- Hiểu JSX là gì
- Biết tạo function component
- Biết tách component ra file riêng
- Biết truyền props và gõ type cho props
- Bắt đầu thấy React + TypeScript phối hợp thế nào

## Prompt 1 - Nhờ AI dạy JSX và props từ bản chất
\`\`\`
Hãy dạy tôi React buổi 3 như một mentor Front-end.

Chủ đề:
- JSX
- function component
- return JSX
- className
- props
- destructuring props
- type cho props bằng TypeScript

Tôi muốn bạn dạy theo cấu trúc:
1. JSX là gì?
2. JSX khác HTML ở điểm nào?
3. Vì sao component thường là function?
4. Props là gì?
5. Vì sao props giúp component tái sử dụng?
6. TypeScript giúp gì khi dùng props?
7. Cho ví dụ thực tế:
   - Button nhận label
   - Card nhận title và description
   - UserCard nhận name và age
8. Chỉ ra lỗi phổ biến:
   - viết JSX sai cú pháp
   - không type props
   - đặt tên props mơ hồ
   - tạo component nhưng quá cứng
9. Tạo checklist viết component + props sạch

Dạy như mentor đang xây nền React + TypeScript cho junior.
\`\`\`

## Prompt 2 - Nhờ AI dẫn tôi build component thật
\`\`\`
Hãy dẫn tôi thực hành buổi 3:
1. tạo component Header
2. tạo component Footer
3. tạo component Card nhận props
4. render nhiều Card khác nhau từ cùng một component
5. tách component ra file riêng
6. thêm type cho props bằng TypeScript

Tôi muốn bạn:
- giải thích từng bước
- để tôi tự làm trước
- sau mỗi bước, review:
  - JSX đã đúng chưa
  - component có đang tái sử dụng được không
  - props có rõ ràng không
  - type có hợp lý không
\`\`\`

## Prompt 3 - Nhờ AI review component và props của tôi
\`\`\`
Tôi sẽ gửi cho bạn component React của tôi.
Bạn hãy review theo 6 tiêu chí:
1. JSX có sạch không?
2. Component có rõ trách nhiệm không?
3. Props có đặt tên tốt không?
4. TypeScript cho props có đủ chưa?
5. Component có tái sử dụng được không?
6. Có dấu hiệu code non tay nào không?

Hãy review cụ thể như mentor React khó tính.
\`\`\`

## Bài tập buổi này
- Tạo ít nhất 4 component
- Dùng props typed bằng TypeScript
- Render nhiều biến thể từ cùng một component

## Tiêu chuẩn hoàn thành
- Hiểu JSX
- Biết viết component cơ bản
- Biết props giúp tái sử dụng UI
      `
    },
    {
      id: 'react-04',
      title: 'Buổi 4: Render có điều kiện, render danh sách và key',
      level: 'beginner',
      content: `
# Buổi 4: Render có điều kiện, render danh sách và key

## Mục tiêu
- Biết hiển thị UI theo điều kiện
- Biết render danh sách bằng \`map()\`
- Hiểu vai trò của \`key\`
- Bắt đầu thấy UI trong React phụ thuộc dữ liệu mạnh thế nào

## Prompt 1 - Nhờ AI dạy UI theo dữ liệu
\`\`\`
Hãy dạy tôi React buổi 4 như mentor Front-end.

Chủ đề:
- render có điều kiện
- toán tử 3 ngôi
- &&
- map
- render list
- key

Tôi muốn bạn dạy theo cấu trúc:
1. Vì sao UI trong React phụ thuộc dữ liệu?
2. Render có điều kiện nghĩa là gì?
3. Khi nào dùng if, khi nào dùng ?, khi nào dùng &&?
4. Render danh sách bằng map hoạt động ra sao?
5. key dùng để làm gì?
6. Vì sao không nên dùng index làm key bừa bãi?
7. Cho ví dụ thực tế:
   - trạng thái đăng nhập/chưa đăng nhập
   - danh sách sản phẩm
   - FAQ
   - trạng thái đơn hàng
8. Chỉ ra lỗi phổ biến:
   - logic điều kiện rối
   - map nhưng quên return
   - key không ổn định
9. Tạo checklist render UI theo dữ liệu

Dạy như mentor đang sửa tư duy data-driven UI cho junior.
\`\`\`

## Prompt 2 - Nhờ AI giao bài thực hành dữ liệu -> UI
\`\`\`
Hãy giao cho tôi bài thực hành buổi 4:
1. tạo component hiển thị trạng thái online/offline
2. tạo component hiển thị nút khác nhau cho user/admin
3. render danh sách sản phẩm từ một mảng dữ liệu
4. render FAQ từ mảng object
5. gán key hợp lý cho từng item

Yêu cầu:
- không cho đáp án ngay
- để tôi tự làm
- sau khi tôi gửi code, review:
  - điều kiện có đúng không
  - list render có sạch không
  - key có ổn không
  - có cách nào dễ đọc hơn không
\`\`\`

## Prompt 3 - Nhờ AI phản biện cách tôi render UI
\`\`\`
Tôi sẽ gửi cho bạn code React có điều kiện và danh sách.
Bạn hãy review:
1. Logic điều kiện có rõ không?
2. Có trường hợp nào tôi chưa xử lý không?
3. List render có sạch không?
4. key có đúng tinh thần React không?
5. Có dấu hiệu code non tay không?

Hãy review cụ thể và yêu cầu tôi sửa phiên bản tốt hơn.
\`\`\`

## Bài tập buổi này
- Tạo ít nhất 3 UI có điều kiện
- Render ít nhất 2 danh sách từ data
- Giải thích vì sao bạn chọn key đó

## Tiêu chuẩn hoàn thành
- Biết render theo điều kiện
- Biết render list bằng \`map()\`
- Hiểu vai trò của key
      `
    },
    {
      id: 'react-05',
      title: 'Buổi 5: Event, useState và controlled form',
      level: 'intermediate',
      content: `
# Buổi 5: Event, useState và controlled form

## Mục tiêu
- Hiểu event trong React
- Dùng được \`onClick\`, \`onChange\`, \`onSubmit\`
- Hiểu state là gì
- Dùng được \`useState\`
- Biết controlled form hoạt động thế nào

## Prompt 1 - Nhờ AI dạy data flow cơ bản trong React
\`\`\`
Hãy dạy tôi React buổi 5 như một mentor Front-end.

Chủ đề:
- event
- onClick
- onChange
- onSubmit
- useState
- controlled input
- value
- setState

Tôi muốn bạn dạy theo cấu trúc:
1. Event trong React là gì?
2. useState là gì?
3. Vì sao khi state đổi thì UI đổi?
4. Controlled component là gì?
5. value + onChange phối hợp ra sao?
6. onSubmit nên xử lý thế nào?
7. Cho ví dụ thực tế:
   - counter
   - bật/tắt
   - input live preview
   - form đăng nhập
8. Chỉ ra lỗi phổ biến:
   - quên bind value
   - state đặt tên mơ hồ
   - form logic rối
   - không hiểu controlled/uncontrolled
9. Tạo checklist state + form cơ bản

Dạy như mentor đang xây nền React interactivity cho junior.
\`\`\`

## Prompt 2 - Nhờ AI dẫn tôi build feature tương tác
\`\`\`
Hãy dẫn tôi thực hành buổi 5:
1. tạo button counter
2. tạo toggle hiển thị/ẩn nội dung
3. tạo input hiển thị text đang gõ
4. tạo form đăng nhập controlled gồm email và password
5. bắt sự kiện submit và log dữ liệu

Tôi muốn bạn:
- giải thích từng bước
- để tôi tự làm trước
- sau mỗi bước, review:
  - event đã đúng chưa
  - state có đặt đúng chỗ không
  - controlled form có đúng chưa
  - code có đang bị rối không
\`\`\`

## Prompt 3 - Nhờ AI review state flow của tôi
\`\`\`
Tôi sẽ gửi cho bạn code React có state và form.
Bạn hãy review:
1. State có đặt tên rõ không?
2. useState đang dùng đúng chưa?
3. Form đã controlled đúng chưa?
4. Event handler có rõ ràng không?
5. Data flow có dễ hiểu không?

Hãy review như mentor React khó tính.
\`\`\`

## Bài tập buổi này
- Tạo 3 feature tương tác nhỏ
- Tạo 1 form controlled
- Tự giải thích dữ liệu chảy từ đâu đến đâu

## Tiêu chuẩn hoàn thành
- Hiểu event trong React
- Hiểu useState
- Biết làm controlled form cơ bản
      `
    },
    {
      id: 'react-06',
      title: 'Buổi 6: useEffect, fetch API và trạng thái loading/error/data',
      level: 'intermediate',
      content: `
# Buổi 6: useEffect, fetch API và trạng thái loading/error/data

## Mục tiêu
- Hiểu \`useEffect\` ở mức thực chiến
- Hiểu lifecycle cơ bản của component
- Biết gọi API trong React
- Biết quản lý loading, error, data
- Bắt đầu làm app “sống” thay vì chỉ UI tĩnh

## Prompt 1 - Nhờ AI dạy side effects và data fetching
\`\`\`
Hãy dạy tôi React buổi 6 như mentor Front-end thực chiến.

Chủ đề:
- useEffect
- mount/update/unmount ở mức dễ hiểu
- dependency array
- fetch API
- async/await
- loading state
- error state
- data state

Tôi muốn bạn dạy theo cấu trúc:
1. useEffect dùng để làm gì?
2. Vì sao React cần side effect?
3. Dependency array ảnh hưởng gì?
4. Gọi API trong React thường đi theo flow nào?
5. Vì sao nên tách loading/error/data?
6. Cho ví dụ thực tế:
   - fetch users
   - loading spinner
   - error message
7. Chỉ ra lỗi phổ biến:
   - dependency sai
   - effect chạy lặp vô hạn
   - không xử lý loading/error
8. Tạo checklist fetch data trong React sạch

Dạy như mentor đang dạy junior viết component data-fetching đầu tiên.
\`\`\`

## Prompt 2 - Nhờ AI giao bài thực hành fetch
\`\`\`
Hãy giao cho tôi bài thực hành buổi 6:
1. gọi API lấy danh sách users
2. tạo state cho users
3. tạo state loading
4. tạo state error
5. hiển thị danh sách ra UI
6. hiển thị loading và error phù hợp

Tôi muốn bạn:
- không cho đáp án ngay
- để tôi tự làm
- sau khi tôi gửi code, review:
  - useEffect đã đúng chưa
  - state có chia rõ chưa
  - loading/error có xử lý hợp lý không
  - TypeScript cho dữ liệu đã tốt chưa
\`\`\`

## Prompt 3 - Nhờ AI phản biện cách tôi fetch data
\`\`\`
Tôi sẽ gửi cho bạn component fetch data của tôi.
Bạn hãy review:
1. useEffect có sạch không?
2. Dependency array có đúng không?
3. Loading/error/data flow có rõ không?
4. Có chỗ nào dễ bug không?
5. Có thể refactor gọn hơn không?

Hãy review như mentor React thực chiến.
\`\`\`

## Bài tập buổi này
- Gọi ít nhất 1 API
- Hiển thị loading, error, success
- Type dữ liệu trả về bằng TypeScript

## Tiêu chuẩn hoàn thành
- Hiểu \`useEffect\` ở mức cơ bản
- Biết fetch data trong React
- Biết quản lý 3 trạng thái loading/error/data
      `
    },
    {
      id: 'react-07',
      title: 'Buổi 7: Lifting state up, custom hooks và tổ chức logic dùng lại',
      level: 'intermediate',
      content: `
# Buổi 7: Lifting state up, custom hooks và tổ chức logic dùng lại

## Mục tiêu
- Hiểu khi nào cần đưa state lên component cha
- Biết chia sẻ dữ liệu giữa component con
- Biết custom hook là gì
- Biết tách logic khỏi UI để code gọn hơn

## Prompt 1 - Nhờ AI dạy state architecture
\`\`\`
Hãy dạy tôi React buổi 7 như mentor Front-end.

Chủ đề:
- lifting state up
- state chung ở component cha
- truyền data xuống bằng props
- truyền callback xuống component con
- custom hooks
- tách logic khỏi UI

Tôi muốn bạn dạy theo cấu trúc:
1. Vì sao không nên đặt state bừa ở mọi nơi?
2. Khi nào state nên nằm ở component cha?
3. Lifting state up là gì?
4. Custom hook là gì?
5. Vì sao custom hook giúp code sạch hơn?
6. Cho ví dụ thực tế:
   - input con thay đổi preview ở component khác
   - filter danh sách từ component con
   - hook useToggle
   - hook useCounter
7. Chỉ ra lỗi phổ biến:
   - state đặt sai chỗ
   - prop drilling sớm
   - custom hook viết nhưng vẫn dính UI
8. Tạo checklist tổ chức state và logic

Dạy như mentor đang sửa state architecture cho junior.
\`\`\`

## Prompt 2 - Nhờ AI dẫn tôi refactor logic
\`\`\`
Hãy dẫn tôi thực hành buổi 7:
1. tạo component cha có state chung
2. tạo component con nhập dữ liệu
3. tạo component con hiển thị dữ liệu
4. truyền callback xuống con để thay đổi state ở cha
5. viết custom hook useToggle hoặc useCounter
6. dùng custom hook trong 2 component khác nhau

Tôi muốn bạn:
- giải thích từng bước
- để tôi tự làm trước
- sau mỗi bước, review:
  - state có đang đặt đúng chỗ không
  - callback flow có rõ không
  - custom hook có thực sự reusable không
\`\`\`

## Prompt 3 - Nhờ AI review state organization của tôi
\`\`\`
Tôi sẽ gửi cho bạn code React của tôi.
Bạn hãy review:
1. State nên nằm ở đâu?
2. Tôi có đang đặt state quá thấp hoặc quá cao không?
3. Có logic nào nên tách thành custom hook không?
4. Có prop drilling nào bắt đầu gây khó chịu không?
5. Có cách tổ chức nào dễ scale hơn không?

Hãy review như mentor React khó tính.
\`\`\`

## Bài tập buổi này
- Tạo ít nhất 1 flow lifting state up
- Tạo ít nhất 2 custom hooks nhỏ
- Tự giải thích vì sao state nằm ở vị trí đó

## Tiêu chuẩn hoàn thành
- Hiểu state ownership
- Biết custom hook dùng để tách logic
- Tư duy tổ chức code rõ hơn
      `
    },
    {
      id: 'react-08',
      title: 'Buổi 8: Context API, React Router và tổ chức app nhiều trang',
      level: 'advanced',
      content: `
# Buổi 8: Context API, React Router và tổ chức app nhiều trang

## Mục tiêu
- Hiểu prop drilling là gì
- Biết Context API giải quyết gì
- Hiểu app nhiều trang trong SPA
- Biết routing cơ bản
- Bắt đầu tổ chức app React lớn hơn

## Prompt 1 - Nhờ AI dạy app architecture cơ bản
\`\`\`
Hãy dạy tôi React buổi 8 như mentor Front-end thực chiến.

Chủ đề:
- prop drilling
- Context API
- createContext
- Provider
- useContext
- React Router
- page
- layout

Tôi muốn bạn dạy theo cấu trúc:
1. Prop drilling là gì?
2. Khi nào Context API hữu ích?
3. Context API không nên bị lạm dụng như thế nào?
4. SPA routing là gì?
5. App nhiều trang trong React hoạt động ra sao?
6. Cho ví dụ thực tế:
   - theme
   - auth
   - navbar điều hướng
   - trang Home/About/Contact
7. Chỉ ra lỗi phổ biến:
   - dùng Context cho mọi state
   - context value quá to
   - routing không có cấu trúc
8. Tạo checklist tổ chức app nhiều trang

Dạy như mentor đang giúp junior vượt qua app một trang đơn giản.
\`\`\`

## Prompt 2 - Nhờ AI giao bài thực hành app structure
\`\`\`
Hãy giao cho tôi bài thực hành buổi 8:
1. tạo ThemeContext hoặc AuthContext đơn giản
2. dùng context ở component con sâu
3. tạo app có ít nhất 3 trang
4. tạo menu điều hướng
5. thêm layout dùng chung nếu phù hợp

Tôi muốn bạn:
- không cho đáp án ngay
- để tôi tự làm
- sau khi tôi gửi code, review:
  - context có dùng đúng chỗ không
  - router có sạch không
  - page structure có rõ không
  - có chỗ nào đang over-engineer không
\`\`\`

## Prompt 3 - Nhờ AI review architecture của app React tôi
\`\`\`
Tôi sẽ gửi cho bạn cấu trúc app React có context và router.
Bạn hãy review:
1. Context dùng có hợp lý không?
2. Route chia có rõ không?
3. Page và shared component có tách đúng không?
4. Có chỗ nào đang prop drill vô ích không?
5. Project structure có dễ mở rộng không?

Hãy review như mentor technical lead.
\`\`\`

## Bài tập buổi này
- Tạo 1 context đơn giản
- Tạo app 3-4 trang
- Tổ chức layout/page/shared component rõ ràng

## Tiêu chuẩn hoàn thành
- Hiểu Context API ở mức nền tảng
- Biết routing cơ bản
- Bắt đầu tổ chức app React rõ hơn
      `
    },
    {
      id: 'react-09',
      title: 'Buổi 9: React 19, hiệu năng cơ bản và các hook hiện đại',
      level: 'advanced',
      content: `
# Buổi 9: React 19, hiệu năng cơ bản và các hook hiện đại

## Mục tiêu
- Hiểu re-render trong React
- Biết \`useMemo\`, \`useCallback\`
- Biết \`useTransition\`
- Biết \`useActionState\` ở mức nền tảng
- Thấy React 19 giúp trải nghiệm mượt và xử lý form tốt hơn thế nào

## Prompt 1 - Nhờ AI dạy React 19 và performance mindset
\`\`\`
Hãy dạy tôi React buổi 9 như mentor React hiện đại.

Chủ đề:
- re-render
- useMemo
- useCallback
- useTransition
- isPending
- useActionState

Tôi muốn bạn dạy theo cấu trúc:
1. Re-render là gì?
2. Khi nào cần tối ưu và khi nào chưa cần?
3. useMemo giúp gì?
4. useCallback giúp gì?
5. useTransition giúp gì cho UX?
6. useActionState giúp gì cho form flow?
7. Cho ví dụ thực tế:
   - filter danh sách lớn
   - callback truyền xuống con
   - pending khi xử lý tác vụ nặng
   - form submit có trạng thái rõ ràng
8. Chỉ ra lỗi phổ biến:
   - tối ưu quá sớm
   - dùng memoization mê tín
   - không hiểu useTransition thực sự giải quyết gì
9. Tạo checklist React performance cơ bản + React 19 hooks

Dạy như mentor React 19 đang nâng chuẩn code cho junior.
\`\`\`

## Prompt 2 - Nhờ AI giao bài thực hành hook hiện đại
\`\`\`
Hãy giao cho tôi bài thực hành buổi 9:
1. tạo danh sách có filter và dùng useMemo
2. tạo callback truyền xuống component con và dùng useCallback
3. tạo ô tìm kiếm hoặc filter danh sách lớn và dùng useTransition
4. tạo form đơn giản có trạng thái submit bằng useActionState hoặc mô phỏng luồng tương tự nếu môi trường chưa hỗ trợ đầy đủ

Tôi muốn bạn:
- không cho đáp án ngay
- để tôi tự làm
- sau khi tôi gửi code, review:
  - tối ưu đã đúng chỗ chưa
  - useTransition có cải thiện UX thật không
  - useActionState flow có rõ không
  - có gì đang overkill không
\`\`\`

## Prompt 3 - Nhờ AI phản biện cách tôi tối ưu React
\`\`\`
Tôi sẽ gửi cho bạn code React đã dùng useMemo/useCallback/useTransition/useActionState.
Bạn hãy review:
1. Tôi có hiểu đúng mục đích từng hook không?
2. Có hook nào đang dùng sai chỗ không?
3. Có chỗ nào đáng lẽ không cần tối ưu?
4. UX có thật sự tốt hơn không?
5. Có cách nào đơn giản và sạch hơn không?

Hãy review như mentor React khó tính nhưng thực tế.
\`\`\`

## Bài tập buổi này
- Dùng ít nhất 2 hook tối ưu hoặc hook hiện đại
- Giải thích vì sao bạn dùng chúng
- So sánh trước/sau nếu có

## Tiêu chuẩn hoàn thành
- Hiểu re-render và tối ưu cơ bản
- Bắt đầu làm quen React 19 mindset
- Không dùng hook hiện đại theo kiểu học vẹt
      `
    },
    {
      id: 'react-10',
      title: 'Buổi 10: Project cuối khóa - xây một app React 19 & TypeScript hoàn chỉnh',
      level: 'advanced',
      content: `
# Buổi 10: Project cuối khóa - xây một app React 19 & TypeScript hoàn chỉnh

## Mục tiêu
- Tổng hợp toàn bộ kiến thức đã học
- Hoàn thiện một app React nhỏ nhưng bài bản
- Biết tự review kiến trúc, state flow và TypeScript
- Tự đánh giá mức độ sẵn sàng cho project thật

## Prompt 1 - Nhờ AI dẫn tôi làm project từ đầu
\`\`\`
Hãy đóng vai mentor React và dẫn tôi làm project cuối khóa.

Cho tôi chọn 1 trong các project:
1. To-do app
2. Ứng dụng ghi chú
3. App danh sách sản phẩm
4. Blog mini
5. Dashboard nhỏ

Sau khi tôi chọn, hãy dẫn tôi theo lộ trình:
1. phân tích yêu cầu
2. xác định component tree
3. xác định dữ liệu và state
4. xác định chỗ cần props, context hoặc custom hook
5. xác định form/event/fetch nếu có
6. xác định chỗ TypeScript cần type rõ
7. nếu phù hợp, xác định chỗ cần tối ưu hoặc React 19 hook
8. để tôi tự build từng phần
9. sau mỗi phần, review rất kỹ như mentor
10. cuối cùng, giúp tôi audit toàn bộ app

Mục tiêu là để tôi thật sự tự xây được một app React nhỏ nhưng bài bản.
\`\`\`

## Prompt 2 - Nhờ AI audit project cuối khóa
\`\`\`
Tôi sẽ gửi cho bạn project React cuối khóa của tôi.
Bạn hãy audit như mentor Front-end kỹ tính.

Đánh giá theo 8 nhóm tiêu chí:
1. Hiểu bài toán
2. Component tree
3. Props/state flow
4. Form/event/data handling
5. Hooks và custom hooks
6. TypeScript
7. Tối ưu và độ sạch của code
8. Mức độ trưởng thành tổng thể của app

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
Hãy đóng vai reviewer cuối khóa React 19 & TypeScript.

Tôi sẽ gửi app của tôi.
Bạn phải review như thật, không nể nang.

Cách review mong muốn:
- đánh giá tư duy component
- đánh giá data flow
- đánh giá state placement
- đánh giá hooks
- đánh giá TypeScript
- đánh giá khả năng mở rộng
- chỉ rõ điểm nào chứng tỏ tôi đã hiểu React
- chỉ rõ điểm nào cho thấy tôi vẫn đang ghép UI theo kiểu chắp vá

Cuối cùng, hãy nói thật:
- tôi đã đủ nền tảng để làm project React nghiêm túc hơn chưa?
- nếu chưa, tôi cần luyện thêm phần nào?
\`\`\`

## Gợi ý project
Chọn 1 trong các project:
1. To-do app
2. Ứng dụng ghi chú
3. App danh sách sản phẩm
4. Blog mini
5. Dashboard nhỏ

## Yêu cầu bắt buộc
- Có component tái sử dụng
- Có props và state
- Có form hoặc event
- Có render danh sách
- Có ít nhất 1 custom hook hoặc context hoặc fetch API
- Có TypeScript cho dữ liệu chính
- Có cấu trúc project rõ ràng

## Checklist tự đánh giá
- Component có chia nhỏ hợp lý không?
- Props và state có rõ ràng không?
- Tên component, biến, type có dễ hiểu không?
- Có tách logic khỏi UI ở chỗ cần thiết không?
- Code có dễ mở rộng không?
- TypeScript có giúp bắt lỗi sớm không?
- Tôi có thể giải thích data flow của app không?

## Bài tập cuối khóa
- Hoàn thành project
- Tự audit bằng AI theo các prompt trên
- Sửa lại bản final đến khi đủ chắc
      `
    }
  ]
};