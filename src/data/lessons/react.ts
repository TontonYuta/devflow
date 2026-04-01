import { Lesson } from '../../types';

export const reactLesson: Lesson = {
  id: 'react-19-mastery',
  icon: 'code',
  title: 'React 19 & TypeScript',
  description:
    'Lộ trình 20 buổi học React 19 và TypeScript từ cơ bản đến chuyên sâu, chia nhỏ dễ học, có bài tập thực hành và mini project để giúp người học xây dựng giao diện hiện đại, tái sử dụng tốt và dễ mở rộng.',
  points: [
    'Hiểu React là gì và tư duy component',
    'Nắm chắc JSX, props, state, event và hooks',
    'Biết tổ chức dữ liệu, form, context và custom hooks',
    'Làm việc với TypeScript trong React an toàn hơn',
    'Tiếp cận các kỹ thuật hiện đại như useTransition, useActionState'
  ],
  chapters: [
    {
      id: 'react-01',
      title: 'Buổi 1: React là gì? Vì sao nên học React?',
      level: 'beginner',
      content: `
# Buổi 1: React là gì? Vì sao nên học React?

## Mục tiêu
- Hiểu React là gì
- Biết React giải quyết vấn đề gì
- Hiểu tư duy chia giao diện thành component

## Nội dung chính
- React là thư viện xây dựng giao diện
- Tư duy chia nhỏ UI thành các khối tái sử dụng
- So sánh cách làm HTML/CSS/JS thuần với React
- React phù hợp khi app lớn dần lên

## Ví dụ
\`\`\`tsx
function App() {
  return <h1>Xin chào React</h1>;
}
\`\`\`

## Bài tập luyện tập
1. Giải thích React bằng lời của bạn
2. Liệt kê 3 giao diện có thể chia thành component
3. Viết component đầu tiên hiển thị một tiêu đề

## Bài tập thử thách
- Phân tích một trang web và chia thử thành các component nhỏ
      `
    },
    {
      id: 'react-02',
      title: 'Buổi 2: Cài đặt môi trường React với Vite + TypeScript',
      level: 'beginner',
      content: `
# Buổi 2: Cài đặt môi trường React với Vite + TypeScript

## Mục tiêu
- Tạo project React mới
- Hiểu cấu trúc thư mục cơ bản
- Chạy được app React đầu tiên

## Nội dung chính
- Tạo project bằng Vite
- Ý nghĩa của \`main.tsx\`, \`App.tsx\`
- \`index.html\` và \`#root\`
- Chạy dev server

## Ví dụ
\`\`\`bash
npm create vite@latest
npm install
npm run dev
\`\`\`

## Bài tập luyện tập
1. Tạo project React + TypeScript
2. Chạy app thành công trên trình duyệt
3. Đổi nội dung \`App.tsx\`

## Bài tập thử thách
- Tự giải thích vai trò của \`main.tsx\` và \`App.tsx\`
      `
    },
    {
      id: 'react-03',
      title: 'Buổi 3: JSX - cách viết giao diện trong React',
      level: 'beginner',
      content: `
# Buổi 3: JSX - cách viết giao diện trong React

## Mục tiêu
- Hiểu JSX là gì
- Biết viết giao diện bằng JSX
- Biết chèn JavaScript vào JSX

## Nội dung chính
- JSX là cú pháp gần giống HTML trong JavaScript
- Dùng dấu \`{}\` để chèn biến
- Một component phải trả về một khối hợp lệ
- \`className\` thay cho \`class\`

## Ví dụ
\`\`\`tsx
function Welcome() {
  const name = 'Lan';
  return <h1>Xin chào {name}</h1>;
}
\`\`\`

## Bài tập luyện tập
1. Tạo một component hiển thị tên của bạn
2. Hiển thị tuổi và nghề nghiệp bằng JSX
3. Dùng \`className\` cho một thẻ

## Bài tập thử thách
- Tạo một card hồ sơ cá nhân bằng JSX
      `
    },
    {
      id: 'react-04',
      title: 'Buổi 4: Component cơ bản và cách tái sử dụng',
      level: 'beginner',
      content: `
# Buổi 4: Component cơ bản và cách tái sử dụng

## Mục tiêu
- Hiểu component là gì
- Biết tạo nhiều component riêng
- Biết tái sử dụng component

## Nội dung chính
- Function component
- Quy tắc đặt tên component
- Tách component ra file riêng
- Dùng component lồng nhau

## Ví dụ
\`\`\`tsx
function Button() {
  return <button>Nhấn vào tôi</button>;
}

function App() {
  return (
    <div>
      <Button />
      <Button />
    </div>
  );
}
\`\`\`

## Bài tập luyện tập
1. Tạo component Header
2. Tạo component Footer
3. Gọi lại component nhiều lần trong \`App\`

## Bài tập thử thách
- Tạo giao diện trang chủ đơn giản bằng 4 component
      `
    },
    {
      id: 'react-05',
      title: 'Buổi 5: Props - truyền dữ liệu vào component',
      level: 'beginner',
      content: `
# Buổi 5: Props - truyền dữ liệu vào component

## Mục tiêu
- Hiểu props là gì
- Biết truyền dữ liệu từ cha xuống con
- Biết dùng props với TypeScript

## Nội dung chính
- Props giúp component linh hoạt hơn
- Destructuring props
- Type cho props
- Optional props cơ bản

## Ví dụ
\`\`\`tsx
type UserCardProps = {
  name: string;
  age: number;
};

function UserCard({ name, age }: UserCardProps) {
  return <p>{name} - {age} tuổi</p>;
}
\`\`\`

## Bài tập luyện tập
1. Tạo component Card nhận \`title\`
2. Tạo component Button nhận \`label\`
3. Tạo component Product nhận tên và giá

## Bài tập thử thách
- Tạo danh sách 3 card khác nhau bằng cùng một component
      `
    },
    {
      id: 'react-06',
      title: 'Buổi 6: Render có điều kiện',
      level: 'beginner',
      content: `
# Buổi 6: Render có điều kiện

## Mục tiêu
- Biết hiển thị khác nhau theo dữ liệu
- Biết dùng \`if\`, toán tử 3 ngôi và \`&&\`
- Tạo UI linh hoạt hơn

## Nội dung chính
- Điều kiện trong JSX
- Hiển thị khi đăng nhập / chưa đăng nhập
- Hiển thị khi có dữ liệu / không có dữ liệu

## Ví dụ
\`\`\`tsx
function Status({ isLoggedIn }: { isLoggedIn: boolean }) {
  return <div>{isLoggedIn ? 'Đã đăng nhập' : 'Chưa đăng nhập'}</div>;
}
\`\`\`

## Bài tập luyện tập
1. Hiển thị thông báo theo trạng thái online/offline
2. Hiển thị nút khác nhau theo vai trò user/admin
3. Ẩn hiện một khối nội dung bằng \`&&\`

## Bài tập thử thách
- Tạo component hiển thị trạng thái đơn hàng theo nhiều mức
      `
    },
    {
      id: 'react-07',
      title: 'Buổi 7: Render danh sách và key',
      level: 'beginner',
      content: `
# Buổi 7: Render danh sách và key

## Mục tiêu
- Biết hiển thị mảng dữ liệu ra giao diện
- Hiểu vai trò của \`map()\`
- Biết vì sao cần \`key\`

## Nội dung chính
- Duyệt danh sách bằng \`map()\`
- Hiển thị item theo dữ liệu
- \`key\` trong React
- Tránh dùng index bừa bãi

## Ví dụ
\`\`\`tsx
const items = ['HTML', 'CSS', 'React'];

function List() {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
\`\`\`

## Bài tập luyện tập
1. Render danh sách môn học
2. Render danh sách sản phẩm
3. Gán key đúng cho từng item

## Bài tập thử thách
- Tạo component FAQ hiển thị từ một mảng dữ liệu
      `
    },
    {
      id: 'react-08',
      title: 'Buổi 8: Event - bắt sự kiện trong React',
      level: 'intermediate',
      content: `
# Buổi 8: Event - bắt sự kiện trong React

## Mục tiêu
- Biết xử lý click, change, submit
- Biết gắn hàm vào sự kiện
- Hiểu event trong React

## Nội dung chính
- \`onClick\`
- \`onChange\`
- \`onSubmit\`
- Viết handler function
- Event type cơ bản với TypeScript

## Ví dụ
\`\`\`tsx
function ButtonClick() {
  const handleClick = () => {
    console.log('Đã click');
  };

  return <button onClick={handleClick}>Click</button>;
}
\`\`\`

## Bài tập luyện tập
1. Tạo nút hiện thông báo khi click
2. Tạo input hiển thị giá trị đang gõ
3. Tạo form bắt sự kiện submit

## Bài tập thử thách
- Tạo component đếm số lần click
      `
    },
    {
      id: 'react-09',
      title: 'Buổi 9: State với useState',
      level: 'intermediate',
      content: `
# Buổi 9: State với useState

## Mục tiêu
- Hiểu state là gì
- Biết tạo state và cập nhật state
- Hiểu re-render xảy ra khi nào

## Nội dung chính
- \`useState\`
- State kiểu số, chuỗi, boolean
- Cập nhật state đúng cách
- Tư duy dữ liệu làm thay đổi UI

## Ví dụ
\`\`\`tsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
\`\`\`

## Bài tập luyện tập
1. Tạo bộ đếm số
2. Tạo nút bật/tắt trạng thái
3. Tạo input lưu giá trị vào state

## Bài tập thử thách
- Tạo tab đơn giản bằng state
      `
    },
    {
      id: 'react-10',
      title: 'Buổi 10: Form controlled component',
      level: 'intermediate',
      content: `
# Buổi 10: Form controlled component

## Mục tiêu
- Hiểu controlled component là gì
- Biết quản lý dữ liệu form bằng state
- Tạo form React cơ bản

## Nội dung chính
- Input gắn với state
- \`value\` và \`onChange\`
- Form nhiều trường
- Submit form

## Ví dụ
\`\`\`tsx
import { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');

  return (
    <input
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  );
}
\`\`\`

## Bài tập luyện tập
1. Tạo form đăng nhập
2. Tạo form liên hệ
3. Hiển thị dữ liệu đã nhập ra màn hình

## Bài tập thử thách
- Tạo form đăng ký với 4 trường dữ liệu
      `
    },
    {
      id: 'react-11',
      title: 'Buổi 11: useEffect và vòng đời component',
      level: 'intermediate',
      content: `
# Buổi 11: useEffect và vòng đời component

## Mục tiêu
- Hiểu component mount, update, unmount
- Biết dùng \`useEffect\`
- Biết cleanup function

## Nội dung chính
- \`useEffect(() => {}, [])\`
- Dependency array
- Chạy khi state thay đổi
- Cleanup để tránh rò rỉ bộ nhớ

## Ví dụ
\`\`\`tsx
import { useEffect } from 'react';

function PageTitle() {
  useEffect(() => {
    document.title = 'React App';
  }, []);

  return <div>Đã cập nhật title</div>;
}
\`\`\`

## Bài tập luyện tập
1. Đổi title của tab khi component render
2. Log ra console khi state đổi
3. Tạo đồng hồ cập nhật mỗi giây

## Bài tập thử thách
- Tạo component đồng hồ có cleanup interval đúng cách
      `
    },
    {
      id: 'react-12',
      title: 'Buổi 12: Lifting State Up và chia sẻ dữ liệu',
      level: 'intermediate',
      content: `
# Buổi 12: Lifting State Up và chia sẻ dữ liệu

## Mục tiêu
- Hiểu khi nào cần đưa state lên component cha
- Biết chia sẻ dữ liệu giữa nhiều component con
- Tổ chức state hợp lý hơn

## Nội dung chính
- State chung đặt ở component cha
- Truyền dữ liệu xuống bằng props
- Truyền hàm xuống để component con thay đổi dữ liệu

## Ví dụ
\`\`\`tsx
function Parent() {
  const [message, setMessage] = useState('Xin chào');

  return (
    <>
      <ChildInput onChangeMessage={setMessage} />
      <ChildPreview message={message} />
    </>
  );
}
\`\`\`

## Bài tập luyện tập
1. Tạo input ở component con đổi dữ liệu ở cha
2. Tạo 2 component cùng dùng chung một state
3. Tạo bộ lọc danh sách từ component con

## Bài tập thử thách
- Tạo app mini tính tiền với state đặt ở component cha
      `
    },
    {
      id: 'react-13',
      title: 'Buổi 13: Custom Hooks',
      level: 'intermediate',
      content: `
# Buổi 13: Custom Hooks

## Mục tiêu
- Hiểu custom hook là gì
- Biết tách logic dùng lại
- Giảm lặp code trong nhiều component

## Nội dung chính
- Quy tắc đặt tên hook với \`use...\`
- Hook dùng lại logic state và effect
- Tách logic khỏi UI

## Ví dụ
\`\`\`tsx
import { useState } from 'react';

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue((prev) => !prev);

  return { value, toggle };
}
\`\`\`

## Bài tập luyện tập
1. Viết hook \`useToggle\`
2. Viết hook \`useCounter\`
3. Dùng custom hook trong 2 component khác nhau

## Bài tập thử thách
- Tạo custom hook xử lý ô tìm kiếm
      `
    },
    {
      id: 'react-14',
      title: 'Buổi 14: useMemo, useCallback và tối ưu cơ bản',
      level: 'advanced',
      content: `
# Buổi 14: useMemo, useCallback và tối ưu cơ bản

## Mục tiêu
- Hiểu khi nào app re-render nhiều
- Biết dùng \`useMemo\` và \`useCallback\`
- Tối ưu những chỗ cần thiết

## Nội dung chính
- Re-render trong React
- \`useMemo\` ghi nhớ giá trị tính toán
- \`useCallback\` ghi nhớ hàm
- Tối ưu vừa đủ, không lạm dụng

## Ví dụ
\`\`\`tsx
const total = useMemo(() => {
  return items.reduce((sum, item) => sum + item.price, 0);
}, [items]);
\`\`\`

## Bài tập luyện tập
1. Tính tổng giỏ hàng bằng \`useMemo\`
2. Dùng \`useCallback\` cho hàm click
3. Quan sát khi component con render lại

## Bài tập thử thách
- Tạo danh sách lớn và thử tối ưu bộ lọc
      `
    },
    {
      id: 'react-15',
      title: 'Buổi 15: Context API',
      level: 'advanced',
      content: `
# Buổi 15: Context API

## Mục tiêu
- Hiểu vấn đề prop drilling
- Biết dùng Context để chia sẻ dữ liệu toàn cục
- Tạo theme hoặc auth đơn giản

## Nội dung chính
- \`createContext\`
- Provider
- \`useContext\`
- Truyền dữ liệu xuống nhiều tầng

## Ví dụ
\`\`\`tsx
const ThemeContext = createContext('light');

function ThemeText() {
  const theme = useContext(ThemeContext);
  return <p>Theme hiện tại: {theme}</p>;
}
\`\`\`

## Bài tập luyện tập
1. Tạo ThemeContext
2. Tạo AuthContext đơn giản
3. Hiển thị dữ liệu context trong component con sâu

## Bài tập thử thách
- Tạo dark mode bằng Context API
      `
    },
    {
      id: 'react-16',
      title: 'Buổi 16: Làm việc với API trong React',
      level: 'advanced',
      content: `
# Buổi 16: Làm việc với API trong React

## Mục tiêu
- Biết lấy dữ liệu từ API
- Biết hiển thị loading, error, success
- Tổ chức state dữ liệu rõ ràng hơn

## Nội dung chính
- \`fetch\`
- \`async/await\`
- Gọi API trong \`useEffect\`
- State cho loading, data, error
- Type dữ liệu trả về với TypeScript

## Ví dụ
\`\`\`tsx
type User = {
  id: number;
  name: string;
};

function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch('/api/users');
      const data = await res.json();
      setUsers(data);
    }

    fetchUsers();
  }, []);

  return <div>{users.length} users</div>;
}
\`\`\`

## Bài tập luyện tập
1. Gọi API lấy danh sách user
2. Hiển thị loading khi đang tải
3. Hiển thị lỗi khi fetch thất bại

## Bài tập thử thách
- Tạo giao diện danh sách sản phẩm lấy từ API
      `
    },
    {
      id: 'react-17',
      title: 'Buổi 17: Router và chia nhiều trang trong React',
      level: 'advanced',
      content: `
# Buổi 17: Router và chia nhiều trang trong React

## Mục tiêu
- Hiểu app nhiều trang trong SPA
- Biết định nghĩa route
- Tổ chức page và layout cơ bản

## Nội dung chính
- Tư duy routing
- Trang chủ, trang chi tiết, trang không tìm thấy
- Link điều hướng
- Layout dùng chung

## Ví dụ
\`\`\`tsx
// Ví dụ ý tưởng
// /
// /about
// /products
// /products/:id
\`\`\`

## Bài tập luyện tập
1. Tạo 3 trang: Home, About, Contact
2. Tạo menu điều hướng
3. Tạo trang 404 đơn giản

## Bài tập thử thách
- Tạo app blog mini có trang danh sách và trang chi tiết
      `
    },
    {
      id: 'react-18',
      title: 'Buổi 18: React 19 - useTransition và trải nghiệm mượt hơn',
      level: 'advanced',
      content: `
# Buổi 18: React 19 - useTransition và trải nghiệm mượt hơn

## Mục tiêu
- Hiểu cập nhật ưu tiên cao và thấp
- Biết dùng \`useTransition\`
- Giúp UI mượt hơn khi xử lý dữ liệu nặng

## Nội dung chính
- Tương tác quan trọng và cập nhật nền
- \`useTransition\`
- \`isPending\`
- Tình huống tìm kiếm, lọc danh sách lớn

## Ví dụ
\`\`\`tsx
const [isPending, startTransition] = useTransition();

startTransition(() => {
  setFilteredItems(expensiveFilter(items, keyword));
});
\`\`\`

## Bài tập luyện tập
1. Tạo ô tìm kiếm lọc danh sách
2. Dùng \`useTransition\` cho việc lọc
3. Hiển thị trạng thái đang xử lý

## Bài tập thử thách
- Tạo danh sách lớn và so sánh trải nghiệm có và không có \`useTransition\`
      `
    },
    {
      id: 'react-19',
      title: 'Buổi 19: React 19 - Form hiện đại với useActionState',
      level: 'advanced',
      content: `
# Buổi 19: React 19 - Form hiện đại với useActionState

## Mục tiêu
- Hiểu cách xử lý form hiện đại hơn
- Biết trạng thái pending, success, error
- Viết form rõ ràng hơn

## Nội dung chính
- \`useActionState\`
- Action function
- Pending state
- Trả kết quả thành công / thất bại
- Kết hợp TypeScript cho dữ liệu form

## Ví dụ
\`\`\`tsx
const [state, formAction, isPending] = useActionState(loginAction, null);
\`\`\`

## Bài tập luyện tập
1. Tạo form đăng nhập đơn giản
2. Hiển thị trạng thái đang gửi
3. Hiển thị thông báo thành công hoặc lỗi

## Bài tập thử thách
- Tạo form đăng ký có xử lý trạng thái submit rõ ràng
      `
    },
    {
      id: 'react-20',
      title: 'Buổi 20: Mini Project và dự án cuối khóa React',
      level: 'advanced',
      content: `
# Buổi 20: Mini Project và dự án cuối khóa React

## Mục tiêu
- Kết hợp toàn bộ kiến thức React đã học
- Tạo app nhỏ có cấu trúc tốt
- Tự đánh giá mức độ làm chủ React

## Gợi ý project
Chọn 1 trong các project:
1. To-do app
2. App quản lý ghi chú
3. App danh sách sản phẩm
4. App blog mini
5. Dashboard nhỏ

## Yêu cầu bắt buộc
- Có component tái sử dụng
- Có props và state
- Có form hoặc event
- Có render danh sách
- Có ít nhất 1 hook tùy chỉnh hoặc context hoặc fetch API

## Checklist tự đánh giá
- Component có chia nhỏ hợp lý không?
- Props và state có rõ ràng không?
- Tên component có dễ hiểu không?
- Có tách logic khỏi UI ở những chỗ cần thiết không?
- Code có dễ mở rộng không?

## Bài tập cuối khóa
- Hoàn thành project
- Tự refactor code lần 2
- Ghi lại những phần React bạn đã hiểu chắc và những phần cần luyện thêm
      `
    }
  ]
};