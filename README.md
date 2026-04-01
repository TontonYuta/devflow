# DevFlow - Hướng dẫn Cập nhật Nội dung

Chào mừng bạn đến với tài liệu hướng dẫn cập nhật nội dung cho ứng dụng **DevFlow**. Ứng dụng được thiết kế với kiến trúc module hóa, giúp việc thêm, sửa, xóa các chủ đề học tập (Lessons) và lộ trình (Roadmap) trở nên cực kỳ dễ dàng mà không cần can thiệp sâu vào logic cốt lõi.

Dưới đây là hướng dẫn chi tiết từng bước.

---

## 1. Cấu trúc thư mục dữ liệu

Toàn bộ nội dung bài học được lưu trữ tại thư mục `src/data/`:

```text
src/
├── types.ts                 # Định nghĩa kiểu dữ liệu (Lesson, Chapter, Task...)
├── data/
│   ├── lessons.ts           # File tổng hợp tất cả các bài học
│   └── lessons/             # Thư mục chứa từng file bài học riêng biệt
│       ├── html.ts
│       ├── react.ts
│       ├── nextjs.ts
│       └── ...
├── components/
│   ├── Roadmap.tsx          # Chứa dữ liệu của Lộ trình học tập
│   └── LearningHub.tsx      # Nơi render bài học và quản lý Icon
```

---

## 2. Cách Thêm / Sửa một Chủ đề học tập (Lesson)

### Bước 1: Tạo file nội dung mới
Nếu bạn muốn thêm một chủ đề mới (VD: `Docker`), hãy tạo một file mới trong thư mục `src/data/lessons/` (VD: `docker.ts`).

### Bước 2: Viết nội dung theo cấu trúc chuẩn
Copy template dưới đây và điền nội dung của bạn. Nội dung bài học (`content`) hỗ trợ **Markdown** (bao gồm cả code block).

```typescript
// src/data/lessons/docker.ts
import { Lesson } from '../../types';

export const dockerLesson: Lesson = {
  id: 'docker', // ID phải là duy nhất, viết thường, không dấu
  icon: 'server', // Tên icon (Xem mục 4 để biết cách thêm icon mới)
  title: 'Docker Cơ bản',
  description: 'Học cách container hóa ứng dụng của bạn.',
  points: ['Container', 'Image', 'Docker Compose'],
  chapters: [
    {
      id: 'docker-1',
      title: 'Giới thiệu về Docker',
      level: 'beginner', // 'beginner' | 'intermediate' | 'advanced'
      content: `
# Docker là gì?
Docker là một nền tảng phần mềm cho phép bạn xây dựng, kiểm thử và triển khai ứng dụng một cách nhanh chóng.

## Cài đặt
Chạy lệnh sau:
\`\`\`bash
docker run hello-world
\`\`\`
      `
    }
    // Thêm các chapter khác ở đây...
  ]
};
```

### Bước 3: Đăng ký bài học mới vào hệ thống
Mở file `src/data/lessons.ts`, import file bạn vừa tạo và thêm nó vào mảng `lessons`:

```typescript
// src/data/lessons.ts
import { Lesson } from '../types';
// ... các import khác
import { dockerLesson } from './lessons/docker'; // 1. Import file mới

export const lessons: Lesson[] = [
  htmlLesson,
  cssLesson,
  // ...
  dockerLesson // 2. Thêm vào mảng
];
```

---

## 3. Cách Cập nhật Lộ trình học tập (Roadmap)

Lộ trình học tập (hiển thị ở Bảng điều khiển) được quản lý riêng biệt để bạn có thể sắp xếp thứ tự học tùy ý.

Mở file `src/components/Roadmap.tsx` và tìm mảng `roadmapData`. Thêm một object mới vào vị trí bạn muốn:

```typescript
// src/components/Roadmap.tsx
const roadmapData: RoadmapStep[] = [
  // ... các bước trước đó
  {
    id: 'docker', // QUAN TRỌNG: id này PHẢI TRÙNG với id của Lesson ở Bước 2
    title: 'Docker & DevOps',
    description: 'Container hóa ứng dụng',
    icon: <Server size={20} />, // Import icon từ lucide-react
    status: 'upcoming' // Trạng thái mặc định (hệ thống sẽ tự tính toán lại dựa trên tiến độ)
  },
  // ...
];
```

**Lưu ý quan trọng:** Thuộc tính `id` trong `roadmapData` bắt buộc phải khớp chính xác với thuộc tính `id` trong file bài học (VD: `docker.ts`). Điều này giúp hệ thống biết được bài học nào đã hoàn thành để cập nhật màu sắc trên lộ trình, và cho phép click từ lộ trình chuyển thẳng sang bài học.

---

## 4. Cách Thêm Icon mới

Hệ thống sử dụng thư viện `lucide-react` cho các biểu tượng. 

### Thêm icon cho Bài học (LearningHub)
1. Mở file `src/components/LearningHub.tsx`.
2. Import icon bạn muốn từ `lucide-react` ở đầu file.
3. Tìm hàm `getIcon` và thêm một `case` mới:

```typescript
// src/components/LearningHub.tsx
import { ..., Box } from 'lucide-react'; // 1. Import icon

// ...
  const getIcon = (iconName: string) => {
    switch (iconName) {
      // ...
      case 'box': return <Box className="text-blue-500" />; // 2. Thêm case mới
      default: return <Code2 />;
    }
  };
```
Sau đó, trong file bài học (VD: `docker.ts`), bạn chỉ cần set `icon: 'box'`.

### Thêm icon cho Lộ trình (Roadmap)
Trong file `src/components/Roadmap.tsx`, bạn import trực tiếp icon từ `lucide-react` và sử dụng nó trong mảng `roadmapData` (như ví dụ ở Mục 3).

---

## 5. Mẹo viết nội dung Markdown

Phần `content` của mỗi `chapter` hỗ trợ Markdown đầy đủ:

- **Tiêu đề:** Dùng `#`, `##`, `###`
- **In đậm / In nghiêng:** `**In đậm**`, `*In nghiêng*`
- **Danh sách:** Dùng `-` hoặc `1.`, `2.`
- **Link:** `[Tên link](https://...)`
- **Code block:** Sử dụng 3 dấu backtick (\`\`\`) kèm theo tên ngôn ngữ để có highlight màu sắc đẹp mắt:
  
  \`\`\`javascript
  const a = 1;
  console.log(a);
  \`\`\`

Chúc bạn xây dựng được những nội dung học tập tuyệt vời!
