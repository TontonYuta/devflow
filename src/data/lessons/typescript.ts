import { Lesson } from '../../types';

export const typescriptLesson: Lesson = {
  id: 'typescript-mastery',
  icon: 'file-code',
  title: 'TypeScript Thực chiến',
  description:
    'Lộ trình 20 buổi học TypeScript từ cơ bản đến chuyên sâu, chia nhỏ dễ học, có bài tập thực hành và mini project để giúp người học viết code an toàn, ít lỗi và dễ bảo trì hơn.',
  points: [
    'Hiểu TypeScript là gì và vì sao nên dùng',
    'Nắm chắc kiểu dữ liệu, hàm, object, type và interface',
    'Làm việc với generics, utility types, async và API',
    'Biết dùng TypeScript với React thực tế',
    'Có bài tập và project để luyện tư duy code an toàn'
  ],
  chapters: [
    {
      id: 'ts-01',
      title: 'Buổi 1: TypeScript là gì? Vì sao nên học?',
      level: 'beginner',
      content: `
# Buổi 1: TypeScript là gì? Vì sao nên học?

## Mục tiêu
- Hiểu TypeScript là gì
- Biết điểm khác nhau giữa JavaScript và TypeScript
- Hiểu lợi ích của kiểu dữ liệu tĩnh

## Nội dung chính
- TypeScript là JavaScript có thêm hệ thống kiểu
- Phát hiện lỗi sớm ngay khi viết code
- Gợi ý code tốt hơn trong VS Code
- Code dễ đọc và dễ bảo trì hơn

## Ví dụ
\`\`\`typescript
function tinhTong(a: number, b: number): number {
  return a + b;
}

// tinhTong(5, '10'); // Báo lỗi ngay
\`\`\`

## Bài tập luyện tập
1. Viết lại một ví dụ JavaScript đơn giản sang TypeScript
2. Tạo một hàm cộng 2 số với kiểu dữ liệu rõ ràng
3. Thử truyền sai kiểu dữ liệu để xem TypeScript cảnh báo

## Bài tập thử thách
- Viết 3 ví dụ ngắn cho thấy TypeScript giúp tránh lỗi như thế nào
      `
    },
    {
      id: 'ts-02',
      title: 'Buổi 2: Cài đặt môi trường và chạy file TypeScript',
      level: 'beginner',
      content: `
# Buổi 2: Cài đặt môi trường và chạy file TypeScript

## Mục tiêu
- Biết cách tạo project TypeScript
- Hiểu vai trò của \`tsconfig.json\`
- Biết biên dịch file TS sang JS

## Nội dung chính
- Cài TypeScript
- Tạo file \`.ts\`
- Lệnh \`tsc\`
- File \`tsconfig.json\`
- TypeScript compile sang JavaScript

## Ví dụ
\`\`\`bash
npm install -D typescript
npx tsc --init
npx tsc
\`\`\`

## Bài tập luyện tập
1. Tạo project TypeScript mới
2. Tạo file \`main.ts\`
3. Viết một dòng \`console.log\` trong TypeScript
4. Biên dịch sang JavaScript

## Bài tập thử thách
- Tạo cấu hình TypeScript cơ bản cho một project nhỏ
      `
    },
    {
      id: 'ts-03',
      title: 'Buổi 3: Kiểu dữ liệu cơ bản trong TypeScript',
      level: 'beginner',
      content: `
# Buổi 3: Kiểu dữ liệu cơ bản trong TypeScript

## Mục tiêu
- Nắm chắc các kiểu dữ liệu cơ bản
- Biết khai báo biến có kiểu rõ ràng
- Hiểu cách TypeScript kiểm tra kiểu

## Nội dung chính
- \`string\`
- \`number\`
- \`boolean\`
- \`null\`
- \`undefined\`
- \`any\`
- \`unknown\`

## Ví dụ
\`\`\`typescript
let hoTen: string = 'Nguyễn Văn A';
let tuoi: number = 25;
let dangHoc: boolean = true;
\`\`\`

## Bài tập luyện tập
1. Tạo 6 biến với 6 kiểu dữ liệu khác nhau
2. Thử gán sai kiểu để xem lỗi
3. So sánh \`any\` và \`unknown\`

## Bài tập thử thách
- Viết một file TypeScript mô tả thông tin cá nhân với kiểu dữ liệu rõ ràng
      `
    },
    {
      id: 'ts-04',
      title: 'Buổi 4: Array, Tuple và Enum',
      level: 'beginner',
      content: `
# Buổi 4: Array, Tuple và Enum

## Mục tiêu
- Biết dùng mảng trong TypeScript
- Hiểu tuple khác array thế nào
- Biết khi nào nên dùng enum

## Nội dung chính
- Mảng kiểu \`string[]\`, \`number[]\`
- \`Array<T>\`
- Tuple
- Enum cơ bản

## Ví dụ
\`\`\`typescript
const soThich: string[] = ['Code', 'Đọc sách'];
const thongTin: [string, number] = ['Nam', 22];

enum TrangThai {
  Moi,
  DangXuLy,
  HoanThanh
}
\`\`\`

## Bài tập luyện tập
1. Tạo một mảng tên môn học
2. Tạo tuple chứa tên và tuổi
3. Tạo enum cho trạng thái đơn hàng

## Bài tập thử thách
- Tạo danh sách sản phẩm và trạng thái của từng sản phẩm bằng enum
      `
    },
    {
      id: 'ts-05',
      title: 'Buổi 5: Function trong TypeScript',
      level: 'beginner',
      content: `
# Buổi 5: Function trong TypeScript

## Mục tiêu
- Biết khai báo kiểu cho tham số
- Biết kiểu trả về của hàm
- Viết hàm an toàn hơn

## Nội dung chính
- Kiểu tham số
- Kiểu trả về
- Tham số mặc định
- Optional parameter
- Void

## Ví dụ
\`\`\`typescript
function chaoTen(ten: string): string {
  return 'Xin chào ' + ten;
}

function hienThiThongBao(message: string): void {
  console.log(message);
}
\`\`\`

## Bài tập luyện tập
1. Viết hàm tính tổng
2. Viết hàm kiểm tra số chẵn
3. Viết hàm có tham số tùy chọn
4. Viết hàm không trả về gì

## Bài tập thử thách
- Viết bộ 5 hàm nhỏ có kiểu dữ liệu đầy đủ
      `
    },
    {
      id: 'ts-06',
      title: 'Buổi 6: Type inference và khi nào cần ghi kiểu rõ ràng',
      level: 'beginner',
      content: `
# Buổi 6: Type inference và khi nào cần ghi kiểu rõ ràng

## Mục tiêu
- Hiểu TypeScript tự đoán kiểu như thế nào
- Biết khi nào nên để TS suy luận
- Biết khi nào nên ghi rõ kiểu

## Nội dung chính
- Type inference
- Explicit typing
- Khi nào cần khai báo rõ ràng
- Những lỗi thường gặp khi dựa quá nhiều vào suy luận

## Ví dụ
\`\`\`typescript
const ten = 'Linh'; // TS tự hiểu là string
let diem: number = 10; // ghi rõ kiểu
\`\`\`

## Bài tập luyện tập
1. Tạo 5 biến để TS tự suy luận kiểu
2. Tạo 5 biến khai báo kiểu rõ ràng
3. So sánh kết quả giữa 2 cách

## Bài tập thử thách
- Viết đoạn code vừa dùng suy luận kiểu vừa dùng explicit typing hợp lý
      `
    },
    {
      id: 'ts-07',
      title: 'Buổi 7: Object và kiểu dữ liệu cho object',
      level: 'beginner',
      content: `
# Buổi 7: Object và kiểu dữ liệu cho object

## Mục tiêu
- Biết mô tả cấu trúc object
- Hiểu vì sao object cần kiểu rõ ràng
- Biết thêm, sửa thuộc tính đúng cách

## Nội dung chính
- Object type
- Thuộc tính bắt buộc
- Thuộc tính tùy chọn
- Readonly property

## Ví dụ
\`\`\`typescript
const user: {
  name: string;
  age: number;
  email?: string;
} = {
  name: 'An',
  age: 20
};
\`\`\`

## Bài tập luyện tập
1. Tạo object mô tả học sinh
2. Thêm thuộc tính optional
3. Tạo object sản phẩm có giá và số lượng

## Bài tập thử thách
- Tạo object cho hồ sơ người dùng với ít nhất 6 thuộc tính
      `
    },
    {
      id: 'ts-08',
      title: 'Buổi 8: Type Alias',
      level: 'intermediate',
      content: `
# Buổi 8: Type Alias

## Mục tiêu
- Biết tạo bí danh kiểu dữ liệu
- Giúp code gọn hơn và dễ tái sử dụng
- Biết union type cơ bản

## Nội dung chính
- \`type\`
- Type alias cho object
- Union type
- Literal type

## Ví dụ
\`\`\`typescript
type TrangThai = 'moi' | 'dang_xu_ly' | 'hoan_thanh';

type SanPham = {
  id: number;
  ten: string;
  gia: number;
};
\`\`\`

## Bài tập luyện tập
1. Tạo type cho sản phẩm
2. Tạo type cho trạng thái đơn hàng
3. Tạo biến chỉ nhận một số giá trị cố định

## Bài tập thử thách
- Tạo hệ thống type cho user, order, product trong một app bán hàng nhỏ
      `
    },
    {
      id: 'ts-09',
      title: 'Buổi 9: Interface',
      level: 'intermediate',
      content: `
# Buổi 9: Interface

## Mục tiêu
- Hiểu interface là gì
- Biết dùng interface cho object
- Biết phân biệt interface và type ở mức cơ bản

## Nội dung chính
- \`interface\`
- Optional properties
- Readonly properties
- Interface cho function
- Interface mở rộng

## Ví dụ
\`\`\`typescript
interface NguoiDung {
  id: number;
  ten: string;
  email: string;
  soDienThoai?: string;
}
\`\`\`

## Bài tập luyện tập
1. Tạo interface cho học sinh
2. Tạo interface cho bài viết blog
3. Tạo interface cho hàm tính tổng

## Bài tập thử thách
- Viết lại một object type bằng interface
      `
    },
    {
      id: 'ts-10',
      title: 'Buổi 10: Type vs Interface trong thực tế',
      level: 'intermediate',
      content: `
# Buổi 10: Type vs Interface trong thực tế

## Mục tiêu
- Hiểu điểm giống và khác nhau giữa type và interface
- Biết khi nào nên dùng type
- Biết khi nào nên dùng interface

## Nội dung chính
- So sánh \`type\` và \`interface\`
- Interface extend
- Type intersection
- Tư duy chọn công cụ phù hợp

## Ví dụ
\`\`\`typescript
interface BaseUser {
  id: number;
  ten: string;
}

type Admin = BaseUser & {
  role: 'admin';
};
\`\`\`

## Bài tập luyện tập
1. Viết cùng một kiểu dữ liệu bằng type và interface
2. Tạo ví dụ dùng interface extend
3. Tạo ví dụ dùng intersection type

## Bài tập thử thách
- Chia dữ liệu của một app nhỏ thành type và interface hợp lý
      `
    },
    {
      id: 'ts-11',
      title: 'Buổi 11: Union, Intersection và Narrowing',
      level: 'intermediate',
      content: `
# Buổi 11: Union, Intersection và Narrowing

## Mục tiêu
- Hiểu cách kết hợp nhiều kiểu dữ liệu
- Biết thu hẹp kiểu để xử lý an toàn
- Viết logic điều kiện đúng kiểu hơn

## Nội dung chính
- Union type
- Intersection type
- Type narrowing
- \`typeof\`
- \`in\`
- \`instanceof\`

## Ví dụ
\`\`\`typescript
function hienThiGiaTri(value: string | number) {
  if (typeof value === 'string') {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
\`\`\`

## Bài tập luyện tập
1. Tạo hàm nhận string hoặc number
2. Dùng \`typeof\` để xử lý khác nhau
3. Tạo 2 type rồi kết hợp bằng intersection

## Bài tập thử thách
- Tạo hàm xử lý user hoặc admin bằng narrowing
      `
    },
    {
      id: 'ts-12',
      title: 'Buổi 12: Generic cơ bản',
      level: 'intermediate',
      content: `
# Buổi 12: Generic cơ bản

## Mục tiêu
- Hiểu generic là gì
- Biết vì sao generic mạnh hơn any
- Viết hàm tái sử dụng với nhiều kiểu dữ liệu

## Nội dung chính
- Generic function
- Generic type parameter
- Giữ mối liên kết kiểu dữ liệu đầu vào và đầu ra

## Ví dụ
\`\`\`typescript
function layPhanTuDauTien<T>(mang: T[]): T {
  return mang[0];
}
\`\`\`

## Bài tập luyện tập
1. Viết hàm lấy phần tử cuối của mảng
2. Viết hàm bọc dữ liệu vào object
3. Thử dùng hàm generic với number, string, boolean

## Bài tập thử thách
- Viết 3 hàm generic thay thế cách dùng \`any\`
      `
    },
    {
      id: 'ts-13',
      title: 'Buổi 13: Generic nâng cao',
      level: 'intermediate',
      content: `
# Buổi 13: Generic nâng cao

## Mục tiêu
- Biết dùng generic với object và interface
- Hiểu generic constraint
- Biết dùng generic trong code thực tế hơn

## Nội dung chính
- Generic interface
- Generic type
- \`extends\`
- Constraint

## Ví dụ
\`\`\`typescript
function layId<T extends { id: number }>(item: T): number {
  return item.id;
}
\`\`\`

## Bài tập luyện tập
1. Viết generic interface cho API response
2. Viết hàm chỉ nhận object có \`name\`
3. Tạo generic type cho danh sách phân trang

## Bài tập thử thách
- Tạo mô hình dữ liệu trả về từ API có generic
      `
    },
    {
      id: 'ts-14',
      title: 'Buổi 14: Utility Types quan trọng',
      level: 'advanced',
      content: `
# Buổi 14: Utility Types quan trọng

## Mục tiêu
- Biết dùng các utility type phổ biến
- Giảm lặp code
- Tăng tốc khi viết model dữ liệu

## Nội dung chính
- \`Partial<T>\`
- \`Required<T>\`
- \`Pick<T, K>\`
- \`Omit<T, K>\`
- \`Record<K, T>\`

## Ví dụ
\`\`\`typescript
type User = {
  id: number;
  name: string;
  email: string;
};

type UserUpdate = Partial<User>;
type UserPreview = Pick<User, 'id' | 'name'>;
\`\`\`

## Bài tập luyện tập
1. Tạo kiểu cập nhật user bằng \`Partial\`
2. Tạo kiểu hiển thị ngắn bằng \`Pick\`
3. Tạo kiểu bỏ trường nhạy cảm bằng \`Omit\`

## Bài tập thử thách
- Thiết kế đầy đủ kiểu create, update, preview cho product hoặc user
      `
    },
    {
      id: 'ts-15',
      title: 'Buổi 15: Class trong TypeScript',
      level: 'advanced',
      content: `
# Buổi 15: Class trong TypeScript

## Mục tiêu
- Hiểu class trong TypeScript
- Biết access modifier
- Biết constructor và method

## Nội dung chính
- \`class\`
- \`constructor\`
- \`public\`
- \`private\`
- \`protected\`
- \`readonly\`

## Ví dụ
\`\`\`typescript
class NguoiDung {
  constructor(
    public name: string,
    private password: string
  ) {}

  hienThiTen() {
    return this.name;
  }
}
\`\`\`

## Bài tập luyện tập
1. Tạo class Student
2. Tạo constructor cho tên và tuổi
3. Tạo method hiển thị thông tin
4. Dùng private cho dữ liệu nhạy cảm

## Bài tập thử thách
- Tạo class ProductManager nhỏ với method thêm và hiển thị sản phẩm
      `
    },
    {
      id: 'ts-16',
      title: 'Buổi 16: Async, Promise và API với TypeScript',
      level: 'advanced',
      content: `
# Buổi 16: Async, Promise và API với TypeScript

## Mục tiêu
- Biết khai báo kiểu cho Promise
- Biết xử lý dữ liệu bất đồng bộ an toàn hơn
- Biết định kiểu cho dữ liệu API trả về

## Nội dung chính
- \`Promise<T>\`
- \`async/await\`
- Type cho dữ liệu response
- Bắt lỗi với \`try/catch\`

## Ví dụ
\`\`\`typescript
type User = {
  id: number;
  name: string;
};

async function layNguoiDung(): Promise<User[]> {
  const response = await fetch('/api/users');
  return response.json();
}
\`\`\`

## Bài tập luyện tập
1. Viết hàm async trả về danh sách user
2. Tạo type cho dữ liệu API
3. Dùng \`Promise<string>\` trong ví dụ đơn giản

## Bài tập thử thách
- Mô phỏng API trả về product list và định kiểu đầy đủ
      `
    },
    {
      id: 'ts-17',
      title: 'Buổi 17: TypeScript với DOM',
      level: 'advanced',
      content: `
# Buổi 17: TypeScript với DOM

## Mục tiêu
- Biết thao tác với phần tử HTML bằng TypeScript
- Hiểu vì sao cần ép kiểu đúng cách
- Tránh lỗi null khi làm việc với DOM

## Nội dung chính
- \`document.querySelector\`
- Element type assertion
- Kiểm tra null
- Event type cơ bản

## Ví dụ
\`\`\`typescript
const button = document.querySelector('button');

if (button) {
  button.addEventListener('click', () => {
    console.log('Clicked');
  });
}
\`\`\`

## Bài tập luyện tập
1. Chọn một input và lấy giá trị
2. Chọn một button và bắt sự kiện click
3. Kiểm tra null trước khi thao tác DOM

## Bài tập thử thách
- Tạo form nhỏ và xử lý submit bằng TypeScript
      `
    },
    {
      id: 'ts-18',
      title: 'Buổi 18: TypeScript với React cơ bản',
      level: 'advanced',
      content: `
# Buổi 18: TypeScript với React cơ bản

## Mục tiêu
- Biết định kiểu props cho component
- Biết dùng TypeScript với state
- Viết component React an toàn hơn

## Nội dung chính
- Type cho props
- Type cho event
- Type với \`useState\`
- Optional props

## Ví dụ
\`\`\`tsx
type ButtonProps = {
  label: string;
  onClick: () => void;
};

function Button({ label, onClick }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}
\`\`\`

## Bài tập luyện tập
1. Tạo component Button có props
2. Tạo component Card có title và description
3. Tạo state đếm số bằng TypeScript

## Bài tập thử thách
- Tạo component ProductCard có props và state rõ kiểu
      `
    },
    {
      id: 'ts-19',
      title: 'Buổi 19: TypeScript với React nâng cao',
      level: 'advanced',
      content: `
# Buổi 19: TypeScript với React nâng cao

## Mục tiêu
- Biết dùng generic với component
- Biết định kiểu form, list, API data trong React
- Tổ chức kiểu dữ liệu tốt hơn trong app

## Nội dung chính
- Generic component
- Form event type
- State phức tạp
- Props kết hợp union type
- Tách file types riêng

## Ví dụ
\`\`\`tsx
type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
};

function List<T>({ items, renderItem }: ListProps<T>) {
  return <div>{items.map(renderItem)}</div>;
}
\`\`\`

## Bài tập luyện tập
1. Tạo list component generic
2. Tạo form nhập user với kiểu rõ ràng
3. Tách type ra file riêng

## Bài tập thử thách
- Tạo mini dashboard React + TypeScript có list dữ liệu typed rõ ràng
      `
    },
    {
      id: 'ts-20',
      title: 'Buổi 20: Mini Project và dự án cuối khóa TypeScript',
      level: 'advanced',
      content: `
# Buổi 20: Mini Project và dự án cuối khóa TypeScript

## Mục tiêu
- Kết hợp toàn bộ kiến thức TypeScript đã học
- Tạo project nhỏ có cấu trúc dữ liệu rõ ràng
- Tự đánh giá mức độ làm chủ TypeScript

## Gợi ý project
Chọn 1 trong các project:
1. Quản lý danh sách công việc
2. Quản lý sản phẩm
3. Form đăng ký người dùng
4. Ứng dụng ghi chú
5. Dashboard nhỏ với React + TypeScript

## Yêu cầu bắt buộc
- Có type hoặc interface rõ ràng
- Có function có kiểu trả về
- Có dùng generic hoặc utility type ít nhất một lần
- Có xử lý dữ liệu mảng/object
- Có ít nhất một tính năng thực tế

## Checklist tự đánh giá
- Có dùng \`any\` quá nhiều không?
- Tên type và interface có rõ nghĩa không?
- Hàm có kiểu đầy đủ không?
- Dữ liệu API có được định kiểu không?
- Code có dễ đọc và dễ mở rộng không?

## Bài tập cuối khóa
- Hoàn thành project
- Tự refactor code lần 2
- Ghi lại những chỗ TypeScript đã giúp bạn tránh lỗi
      `
    }
  ]
};