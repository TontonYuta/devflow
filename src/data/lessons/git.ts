import { Lesson } from '../../types';

export const gitLesson: Lesson = {
  id: 'git-mastery',
  icon: 'git-branch',
  title: 'Git & Làm việc nhóm',
  description:
    'Lộ trình 20 buổi học Git và GitHub từ cơ bản đến chuyên sâu, chia nhỏ dễ học, có bài tập thực hành và tình huống làm việc nhóm để giúp người học quản lý phiên bản, cộng tác an toàn và xử lý sự cố tự tin hơn.',
  points: [
    'Hiểu Git là gì và vòng đời file trong Git',
    'Làm chủ commit, branch, merge, pull, push và GitHub',
    'Biết xử lý conflict, làm việc nhóm và code review',
    'Biết dùng stash, reset, revert, rebase ở mức thực tế',
    'Có bài tập và mini project mô phỏng quy trình teamwork'
  ],
  chapters: [
    {
      id: 'git-01',
      title: 'Buổi 1: Git là gì? Vì sao lập trình viên phải biết Git?',
      level: 'beginner',
      content: `
# Buổi 1: Git là gì? Vì sao lập trình viên phải biết Git?

## Mục tiêu
- Hiểu Git là gì
- Biết Git giải quyết vấn đề gì
- Hiểu sự khác nhau giữa lưu file bình thường và quản lý phiên bản

## Nội dung chính
- Git là hệ thống quản lý phiên bản
- Git giúp lưu lịch sử thay đổi của code
- Có thể quay lại phiên bản cũ khi làm hỏng code
- Hỗ trợ làm việc nhóm mà không ghi đè lẫn nhau

## Ví dụ
\`\`\`text
Không dùng Git:
file-v1-final-lan-cuoi-final-thuc-su.html

Dùng Git:
mỗi lần thay đổi đều có commit rõ ràng
\`\`\`

## Bài tập luyện tập
1. Giải thích Git bằng lời của bạn
2. Nêu 3 lợi ích của Git
3. So sánh làm dự án có Git và không có Git

## Bài tập thử thách
- Phân tích một tình huống làm hỏng code và giải thích Git giúp như thế nào
      `
    },
    {
      id: 'git-02',
      title: 'Buổi 2: Cài đặt Git và cấu hình ban đầu',
      level: 'beginner',
      content: `
# Buổi 2: Cài đặt Git và cấu hình ban đầu

## Mục tiêu
- Cài Git thành công
- Biết kiểm tra phiên bản Git
- Biết cấu hình tên và email

## Nội dung chính
- Cài Git trên máy
- \`git --version\`
- \`git config --global user.name\`
- \`git config --global user.email\`

## Ví dụ
\`\`\`bash
git --version
git config --global user.name "Nguyen Van A"
git config --global user.email "a@example.com"
\`\`\`

## Bài tập luyện tập
1. Kiểm tra Git đã cài đúng chưa
2. Cấu hình tên và email
3. Xem lại cấu hình bằng lệnh phù hợp

## Bài tập thử thách
- Tìm và giải thích ý nghĩa của cấu hình global trong Git
      `
    },
    {
      id: 'git-03',
      title: 'Buổi 3: Khởi tạo repository và vòng đời file trong Git',
      level: 'beginner',
      content: `
# Buổi 3: Khởi tạo repository và vòng đời file trong Git

## Mục tiêu
- Biết tạo repo Git mới
- Hiểu vòng đời của file trong Git
- Biết modified, staged, committed là gì

## Nội dung chính
- \`git init\`
- Working directory
- Staging area
- Commit history
- Trạng thái file

## Ví dụ
\`\`\`bash
git init
git status
\`\`\`

## Bài tập luyện tập
1. Tạo một thư mục dự án mới
2. Khởi tạo Git trong thư mục đó
3. Tạo một file mới và xem trạng thái của nó
4. Chỉnh sửa file và quan sát trạng thái thay đổi

## Bài tập thử thách
- Vẽ sơ đồ 3 vùng chính của Git bằng lời hoặc ghi chú
      `
    },
    {
      id: 'git-04',
      title: 'Buổi 4: git status, git add, git commit',
      level: 'beginner',
      content: `
# Buổi 4: git status, git add, git commit

## Mục tiêu
- Biết kiểm tra trạng thái file
- Biết đưa file vào staging
- Biết tạo commit đầu tiên

## Nội dung chính
- \`git status\`
- \`git add\`
- \`git add .\`
- \`git commit -m\`
- Ý nghĩa của commit message

## Ví dụ
\`\`\`bash
git status
git add index.html
git commit -m "Tạo trang chủ đầu tiên"
\`\`\`

## Bài tập luyện tập
1. Tạo 2 file mới
2. Thêm một file vào staging
3. Commit file đó với message rõ ràng
4. Sửa tiếp file và commit lần nữa

## Bài tập thử thách
- Tạo 3 commit liên tiếp mô tả quá trình làm một giao diện nhỏ
      `
    },
    {
      id: 'git-05',
      title: 'Buổi 5: Lịch sử commit và cách đọc git log',
      level: 'beginner',
      content: `
# Buổi 5: Lịch sử commit và cách đọc git log

## Mục tiêu
- Biết xem lịch sử commit
- Hiểu commit gồm những thông tin gì
- Biết đọc log gọn và dễ hiểu hơn

## Nội dung chính
- \`git log\`
- \`git log --oneline\`
- Hash commit
- Author
- Date
- Commit message

## Ví dụ
\`\`\`bash
git log
git log --oneline
\`\`\`

## Bài tập luyện tập
1. Xem toàn bộ lịch sử commit
2. Xem log dạng ngắn
3. Xác định commit mới nhất
4. So sánh log đầy đủ và log ngắn

## Bài tập thử thách
- Tạo lịch sử commit rõ ràng cho một bài tập HTML nhỏ rồi tự đọc lại log
      `
    },
    {
      id: 'git-06',
      title: 'Buổi 6: .gitignore và quản lý file không nên commit',
      level: 'beginner',
      content: `
# Buổi 6: .gitignore và quản lý file không nên commit

## Mục tiêu
- Hiểu vì sao không phải file nào cũng nên đưa lên Git
- Biết tạo file .gitignore
- Biết bỏ qua file rác và file nhạy cảm

## Nội dung chính
- \`.gitignore\`
- Bỏ qua:
  - node_modules
  - file build
  - .env
  - file tạm của editor
- Vì sao không nên commit secrets

## Ví dụ
\`\`\`gitignore
node_modules
dist
.env
.vscode
\`\`\`

## Bài tập luyện tập
1. Tạo file .gitignore
2. Thêm node_modules vào ignore
3. Thêm .env vào ignore
4. Kiểm tra file đã được bỏ qua chưa

## Bài tập thử thách
- Viết file .gitignore phù hợp cho project React hoặc Node.js
      `
    },
    {
      id: 'git-07',
      title: 'Buổi 7: So sánh thay đổi với git diff',
      level: 'beginner',
      content: `
# Buổi 7: So sánh thay đổi với git diff

## Mục tiêu
- Biết xem phần code đã thay đổi
- Hiểu dòng nào thêm, dòng nào xóa
- Biết diff trước khi commit

## Nội dung chính
- \`git diff\`
- \`git diff --staged\`
- So sánh working tree và staging
- Tập thói quen kiểm tra thay đổi trước khi commit

## Ví dụ
\`\`\`bash
git diff
git diff --staged
\`\`\`

## Bài tập luyện tập
1. Sửa một file và xem diff
2. Add file rồi xem diff staged
3. So sánh 2 trạng thái khác nhau

## Bài tập thử thách
- Thực hiện một thay đổi dài 5 dòng và tự đọc diff để giải thích thay đổi đó
      `
    },
    {
      id: 'git-08',
      title: 'Buổi 8: Hoàn tác thay đổi an toàn',
      level: 'intermediate',
      content: `
# Buổi 8: Hoàn tác thay đổi an toàn

## Mục tiêu
- Biết bỏ staging
- Biết khôi phục file chưa commit
- Hiểu sự khác nhau giữa các kiểu hoàn tác

## Nội dung chính
- \`git restore\`
- \`git restore --staged\`
- Hoàn tác file modified
- Cẩn thận khi xóa thay đổi chưa lưu

## Ví dụ
\`\`\`bash
git restore index.html
git restore --staged index.html
\`\`\`

## Bài tập luyện tập
1. Add nhầm một file rồi bỏ staging
2. Sửa file rồi hoàn tác về bản gần nhất
3. Quan sát sự khác nhau giữa modified và staged

## Bài tập thử thách
- Tạo tình huống add nhầm 3 file và xử lý đúng từng bước
      `
    },
    {
      id: 'git-09',
      title: 'Buổi 9: Branch - làm việc trên nhánh riêng',
      level: 'intermediate',
      content: `
# Buổi 9: Branch - làm việc trên nhánh riêng

## Mục tiêu
- Hiểu branch là gì
- Biết vì sao không nên code trực tiếp trên main
- Biết tạo và chuyển branch

## Nội dung chính
- \`git branch\`
- \`git checkout -b\`
- \`git switch\`
- main branch
- feature branch

## Ví dụ
\`\`\`bash
git branch
git checkout -b feature/login
\`\`\`

## Bài tập luyện tập
1. Tạo nhánh mới cho tính năng login
2. Chuyển qua lại giữa main và branch mới
3. Commit một thay đổi trên branch riêng

## Bài tập thử thách
- Tạo 3 nhánh tương ứng cho 3 tính năng khác nhau
      `
    },
    {
      id: 'git-10',
      title: 'Buổi 10: Merge - gộp nhánh an toàn',
      level: 'intermediate',
      content: `
# Buổi 10: Merge - gộp nhánh an toàn

## Mục tiêu
- Biết gộp branch vào main
- Hiểu merge diễn ra như thế nào
- Biết kiểm tra lịch sử sau khi merge

## Nội dung chính
- \`git merge\`
- Merge từ feature vào main
- Fast-forward và merge commit ở mức cơ bản
- Kiểm tra kết quả sau merge

## Ví dụ
\`\`\`bash
git checkout main
git merge feature/login
\`\`\`

## Bài tập luyện tập
1. Tạo branch mới
2. Commit thay đổi trên branch đó
3. Merge branch vào main
4. Kiểm tra log sau merge

## Bài tập thử thách
- Thực hiện quy trình tạo feature branch và merge hoàn chỉnh cho một tính năng nhỏ
      `
    },
    {
      id: 'git-11',
      title: 'Buổi 11: Remote repository và GitHub',
      level: 'intermediate',
      content: `
# Buổi 11: Remote repository và GitHub

## Mục tiêu
- Hiểu remote là gì
- Biết kết nối repo local với GitHub
- Biết push code lần đầu

## Nội dung chính
- Git local và GitHub remote
- \`git remote add origin\`
- \`git push -u origin main\`
- Vai trò của GitHub trong teamwork

## Ví dụ
\`\`\`bash
git remote add origin https://github.com/ten-ban/ten-repo.git
git push -u origin main
\`\`\`

## Bài tập luyện tập
1. Tạo repo trên GitHub
2. Kết nối repo local với GitHub
3. Push code lần đầu
4. Mở repo trên web để kiểm tra

## Bài tập thử thách
- Tạo một repo mới từ đầu và đẩy toàn bộ project cá nhân lên GitHub
      `
    },
    {
      id: 'git-12',
      title: 'Buổi 12: Pull, fetch và đồng bộ code từ remote',
      level: 'intermediate',
      content: `
# Buổi 12: Pull, fetch và đồng bộ code từ remote

## Mục tiêu
- Biết lấy code mới nhất từ GitHub
- Hiểu sự khác nhau giữa fetch và pull
- Tránh bị lệch code khi làm việc nhóm

## Nội dung chính
- \`git fetch\`
- \`git pull\`
- Đồng bộ nhánh local với remote
- Kiểm tra thay đổi trước khi merge

## Ví dụ
\`\`\`bash
git fetch
git pull origin main
\`\`\`

## Bài tập luyện tập
1. Kéo code mới nhất từ remote
2. So sánh fetch và pull
3. Kiểm tra branch local đã cập nhật chưa

## Bài tập thử thách
- Mô phỏng tình huống có thay đổi trên GitHub rồi đồng bộ về máy
      `
    },
    {
      id: 'git-13',
      title: 'Buổi 13: Làm việc nhóm với GitHub Flow',
      level: 'intermediate',
      content: `
# Buổi 13: Làm việc nhóm với GitHub Flow

## Mục tiêu
- Hiểu workflow làm việc nhóm cơ bản
- Biết luồng tạo nhánh, code, push và mở PR
- Làm quen với cách các team thực tế cộng tác

## Nội dung chính
- main luôn ổn định
- Tạo branch cho từng task
- Commit nhỏ, rõ ràng
- Push branch
- Mở Pull Request
- Review trước khi merge

## Ví dụ
\`\`\`text
main
 -> feature/navbar
 -> push
 -> pull request
 -> review
 -> merge
\`\`\`

## Bài tập luyện tập
1. Tạo một branch cho task mới
2. Commit và push branch đó
3. Mô tả các bước mở Pull Request

## Bài tập thử thách
- Viết quy trình teamwork ngắn gọn cho nhóm 3 người dùng GitHub Flow
      `
    },
    {
      id: 'git-14',
      title: 'Buổi 14: Pull Request và code review',
      level: 'advanced',
      content: `
# Buổi 14: Pull Request và code review

## Mục tiêu
- Hiểu Pull Request là gì
- Biết cách mô tả thay đổi trong PR
- Hiểu vai trò của code review

## Nội dung chính
- PR là yêu cầu gộp code
- Base branch và compare branch
- Viết mô tả PR rõ ràng
- Review comment
- Approve và merge

## Ví dụ
\`\`\`text
Tiêu đề PR:
Thêm giao diện trang đăng nhập

Mô tả:
- Tạo LoginForm component
- Thêm validate cơ bản
- Cập nhật route /login
\`\`\`

## Bài tập luyện tập
1. Viết tiêu đề PR tốt
2. Viết mô tả PR cho một thay đổi nhỏ
3. Đọc và phản hồi một comment review giả định

## Bài tập thử thách
- Soạn một PR hoàn chỉnh cho tính năng thêm trang profile
      `
    },
    {
      id: 'git-15',
      title: 'Buổi 15: Xử lý merge conflict',
      level: 'advanced',
      content: `
# Buổi 15: Xử lý merge conflict

## Mục tiêu
- Hiểu conflict xảy ra khi nào
- Biết cách đọc file bị conflict
- Biết giải quyết conflict an toàn

## Nội dung chính
- Merge conflict
- Dấu \`<<<<<<<\`, \`=======\`, \`>>>>>>>\`
- Chọn code đúng
- Add lại file sau khi sửa
- Commit giải quyết conflict

## Ví dụ
\`\`\`html
<<<<<<< HEAD
<button class="bg-blue-500">Nút của bạn</button>
=======
<button class="bg-red-500">Nút của đồng đội</button>
>>>>>>> feature/button
\`\`\`

## Bài tập luyện tập
1. Mô phỏng conflict trong một file
2. Chọn phần code đúng
3. Xóa dấu conflict marker
4. Commit sau khi giải quyết xong

## Bài tập thử thách
- Tạo tình huống 2 người cùng sửa một dòng và xử lý conflict đúng quy trình
      `
    },
    {
      id: 'git-16',
      title: 'Buổi 16: git stash - cất tạm công việc đang làm',
      level: 'advanced',
      content: `
# Buổi 16: git stash - cất tạm công việc đang làm

## Mục tiêu
- Biết cất tạm thay đổi chưa commit
- Chuyển task nhanh mà không mất code
- Biết lấy lại phần đã stash

## Nội dung chính
- \`git stash\`
- \`git stash list\`
- \`git stash apply\`
- \`git stash pop\`

## Ví dụ
\`\`\`bash
git stash
git stash list
git stash pop
\`\`\`

## Bài tập luyện tập
1. Sửa file nhưng chưa commit
2. Stash thay đổi đó
3. Chuyển branch
4. Quay lại và khôi phục phần đã stash

## Bài tập thử thách
- Mô phỏng tình huống đang làm dang dở nhưng phải nhảy sang sửa bug gấp
      `
    },
    {
      id: 'git-17',
      title: 'Buổi 17: reset, revert và cách quay lại an toàn',
      level: 'advanced',
      content: `
# Buổi 17: reset, revert và cách quay lại an toàn

## Mục tiêu
- Hiểu reset và revert khác nhau thế nào
- Biết khi nào nên dùng từng lệnh
- Tránh phá lịch sử chung của team

## Nội dung chính
- \`git reset\`
- \`git reset --soft\`
- \`git reset --hard\`
- \`git revert\`
- Undo local vs undo shared history

## Ví dụ
\`\`\`bash
git revert <commit-hash>
\`\`\`

## Bài tập luyện tập
1. Tạo 2 commit liên tiếp
2. Revert một commit
3. Tìm hiểu tác động của reset mềm và reset cứng

## Bài tập thử thách
- Giải thích vì sao trong teamwork thường ưu tiên revert hơn hard reset với code đã push
      `
    },
    {
      id: 'git-18',
      title: 'Buổi 18: Rebase cơ bản và lịch sử commit gọn hơn',
      level: 'advanced',
      content: `
# Buổi 18: Rebase cơ bản và lịch sử commit gọn hơn

## Mục tiêu
- Hiểu rebase là gì
- Biết điểm khác merge
- Biết giữ lịch sử commit gọn hơn ở mức cơ bản

## Nội dung chính
- \`git rebase\`
- Merge vs rebase
- Rebase branch cá nhân
- Cảnh giác khi rebase lịch sử đã chia sẻ

## Ví dụ
\`\`\`bash
git checkout feature/login
git rebase main
\`\`\`

## Bài tập luyện tập
1. Rebase branch cá nhân lên main mới nhất
2. So sánh log trước và sau rebase
3. Nêu ưu và nhược điểm của rebase

## Bài tập thử thách
- Mô phỏng tình huống main đã cập nhật và bạn cần làm sạch branch trước khi mở PR
      `
    },
    {
      id: 'git-19',
      title: 'Buổi 19: Chiến lược commit message và làm việc nhóm chuyên nghiệp',
      level: 'advanced',
      content: `
# Buổi 19: Chiến lược commit message và làm việc nhóm chuyên nghiệp

## Mục tiêu
- Viết commit message rõ ràng và dễ đọc
- Biết chia commit hợp lý
- Có thói quen teamwork tốt hơn

## Nội dung chính
- Commit nhỏ, đúng ý nghĩa
- Message rõ động từ
- Tránh commit kiểu "fix", "update" quá mơ hồ
- Quy ước commit trong team
- Giới thiệu Conventional Commits ở mức cơ bản

## Ví dụ
\`\`\`text
feat: thêm form đăng nhập
fix: sửa lỗi validate email
refactor: tách Navbar thành component riêng
\`\`\`

## Bài tập luyện tập
1. Viết lại 5 commit message mơ hồ thành rõ ràng hơn
2. Chia một thay đổi lớn thành 3 commit nhỏ
3. Thử dùng prefix feat, fix, refactor

## Bài tập thử thách
- Viết bộ quy tắc commit message ngắn cho team 4 người
      `
    },
    {
      id: 'git-20',
      title: 'Buổi 20: Mini Project và mô phỏng quy trình làm việc nhóm với Git',
      level: 'advanced',
      content: `
# Buổi 20: Mini Project và mô phỏng quy trình làm việc nhóm với Git

## Mục tiêu
- Kết hợp toàn bộ kiến thức Git đã học
- Mô phỏng quy trình làm việc nhóm thực tế
- Tự đánh giá mức độ làm chủ Git và GitHub

## Gợi ý project
Chọn 1 trong các tình huống:
1. Team 2 người làm landing page
2. Team 3 người làm blog mini
3. Team 2 người làm app to-do
4. Team 3 người làm dashboard đơn giản

## Yêu cầu bắt buộc
- Có repo Git
- Có branch riêng cho từng task
- Có commit message rõ ràng
- Có push lên GitHub
- Có ít nhất 1 Pull Request mô phỏng
- Có ít nhất 1 tình huống conflict hoặc rebase hoặc revert

## Checklist tự đánh giá
- Có làm việc trên branch riêng không?
- Commit có rõ ràng không?
- PR có mô tả đầy đủ không?
- Có hiểu cách xử lý conflict không?
- Có biết khi nào dùng stash, revert, rebase không?

## Bài tập cuối khóa
- Hoàn thành project theo nhóm hoặc tự mô phỏng
- Viết lại quy trình làm việc của bạn từ lúc tạo branch đến lúc merge
- Tự ghi lại những lỗi Git bạn từng gặp và cách xử lý
      `
    }
  ]
};