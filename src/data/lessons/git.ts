import { Lesson } from '../../types';

export const gitLesson: Lesson = {
  id: 'git-mastery',
  icon: 'git-branch',
  title: 'Git & Làm việc nhóm',
  description:
    'Lộ trình Git & Làm việc nhóm theo phong cách tự học cùng AI mentor. Mỗi buổi học đi kèm prompt cực chi tiết để học viên chỉ cần copy vào AI là có thể học từ bản chất, luyện lệnh Git, mô phỏng teamwork, xử lý sự cố và được review như học cùng mentor 1-1.',
  points: [
    'Mỗi buổi có prompt cực chi tiết để copy vào AI và học ngay',
    'AI đóng vai mentor Git, dạy từ bản chất chứ không chỉ liệt kê lệnh',
    'Có prompt học lý thuyết, prompt mô phỏng terminal, prompt xử lý sự cố, prompt review workflow',
    'Tập trung vào năng lực thật: commit rõ, branch sạch, merge an toàn, làm việc nhóm tốt',
    'Có bài tập mô phỏng quy trình teamwork thay vì chỉ học lệnh rời rạc',
    'Học xong có thể dùng Git tự tin trong dự án cá nhân và teamwork cơ bản'
  ],
  chapters: [
    {
      id: 'git-01',
      title: 'Buổi 1: Git là gì và vì sao lập trình viên phải dùng Git?',
      level: 'beginner',
      content: `
# Buổi 1: Git là gì và vì sao lập trình viên phải dùng Git?

## Mục tiêu
- Hiểu Git là gì từ góc nhìn thực tế
- Hiểu Git giải quyết vấn đề gì
- Phân biệt lưu file bình thường và quản lý phiên bản
- Bắt đầu nhìn code như một lịch sử thay đổi, không chỉ là file hiện tại

## Cách học buổi này
Bạn sẽ copy từng prompt bên dưới vào AI theo đúng thứ tự.
Không học lướt. Sau mỗi prompt phải tự giải thích lại bằng lời của bạn.

## Prompt 1 - Nhờ AI dạy lý thuyết từ gốc
\`\`\`
Bạn hãy đóng vai một mentor Front-end/Backend cực giỏi, chuyên dạy Git cho người mới từ con số 0.

Hôm nay hãy dạy tôi buổi đầu tiên về Git theo phong cách:
- cực dễ hiểu nhưng không hời hợt
- giải thích từ bản chất
- gắn với tình huống thực tế của lập trình viên
- luôn nói vì sao kiến thức này quan trọng
- không dùng thuật ngữ khó nếu chưa giải thích

Chủ đề hôm nay:
- Git là gì?
- Vì sao Git ra đời?
- Git giải quyết vấn đề gì?
- Vì sao lập trình viên phải biết Git?
- Git khác gì với kiểu lưu file: final, final-final, ban-cuoi-cung?

Tôi muốn bạn dạy theo format:
1. Git là gì?
2. Git giải quyết những vấn đề nào trong thực tế?
3. So sánh làm dự án có Git và không có Git
4. Cho 5 tình huống thực tế:
   - sửa hỏng code
   - muốn quay lại phiên bản cũ
   - 2 người sửa cùng dự án
   - cần xem ai sửa gì
   - cần thử tính năng mới mà không phá code chính
5. Giải thích vì sao Git rất quan trọng khi đi làm
6. Chỉ ra 8 hiểu lầm phổ biến của người mới về Git
7. Đặt cho tôi 5 câu hỏi kiểm tra hiểu bài
8. Sau khi tôi trả lời, bạn phải chấm và sửa thật kỹ

Dùng tiếng Việt và dạy như mentor thật sự.
\`\`\`

## Prompt 2 - Nhờ AI luyện tư duy phiên bản hóa
\`\`\`
Tôi muốn luyện tư duy quản lý phiên bản như lập trình viên.

Hãy cho tôi 6 tình huống thực tế, ví dụ:
- tôi sửa hỏng giao diện
- tôi muốn thử tính năng mới
- tôi muốn xem lịch sử thay đổi
- tôi muốn làm việc cùng bạn tôi
- tôi muốn quay lại bản ổn định
- tôi muốn biết ai làm hỏng bug

Với mỗi tình huống:
1. hỏi tôi Git giúp được gì
2. hỏi tôi nếu không có Git thì sẽ khổ thế nào
3. chờ tôi trả lời
4. sau đó bạn mới chữa
5. nếu tôi trả lời mơ hồ, hãy bắt tôi nói cụ thể hơn

Mục tiêu là giúp tôi thấy Git là công cụ giải quyết vấn đề thật, không chỉ là lệnh.
\`\`\`

## Prompt 3 - Nhờ AI kiểm tra hiểu bài
\`\`\`
Hãy kiểm tra xem tôi đã thật sự hiểu Git buổi 1 chưa.

Tôi muốn có:
- 3 câu hỏi trắc nghiệm có giải thích đáp án
- 3 câu hỏi tự luận ngắn
- 2 tình huống thực tế
- 1 câu hỏi tư duy: vì sao “lưu nhiều bản file bằng tay” không thể thay thế Git trong dự án thật?

Sau khi tôi trả lời, bạn hãy:
- chấm điểm từng câu
- giải thích chỗ sai
- nói tôi đang ở mức nào: chưa hiểu / hiểu cơ bản / hiểu chắc
\`\`\`

## Bài tập buổi này
1. Giải thích Git bằng lời của bạn
2. Nêu 5 lợi ích của Git
3. Phân tích 2 tình huống Git giúp bạn thế nào

## Tiêu chuẩn hoàn thành
- Hiểu Git là công cụ quản lý phiên bản
- Nhìn thấy giá trị thực tế của Git
- Không còn nghĩ Git chỉ là “đẩy code lên GitHub”
      `
    },
    {
      id: 'git-02',
      title: 'Buổi 2: Cài Git, cấu hình ban đầu và làm quen với terminal Git',
      level: 'beginner',
      content: `
# Buổi 2: Cài Git, cấu hình ban đầu và làm quen với terminal Git

## Mục tiêu
- Cài Git thành công
- Biết kiểm tra phiên bản Git
- Biết cấu hình tên và email
- Bắt đầu quen với việc dùng terminal để thao tác Git

## Prompt 1 - Nhờ AI hướng dẫn cài đặt như mentor kỹ thuật
\`\`\`
Hãy đóng vai mentor kỹ thuật và hướng dẫn tôi cài Git từ đầu.

Tôi muốn bạn hướng dẫn theo cách:
1. giải thích Git cần cài ở đâu và vì sao
2. hướng dẫn theo từng bước cho Windows hoặc macOS hoặc Linux
3. sau khi cài xong, hướng dẫn tôi kiểm tra bằng:
   - git --version
4. giải thích user.name và user.email trong Git là gì
5. hướng dẫn tôi cấu hình:
   - git config --global user.name
   - git config --global user.email
6. hướng dẫn tôi kiểm tra lại cấu hình
7. nếu có lỗi thường gặp, hãy nói luôn cách xử lý
8. cuối cùng, hãy giải thích vì sao config global lại tiện

Dùng tiếng Việt và hướng dẫn như người đang ngồi cạnh tôi.
\`\`\`

## Prompt 2 - Nhờ AI đóng vai terminal coach
\`\`\`
Tôi muốn bạn đóng vai terminal coach cho người mới học Git.

Hãy cho tôi từng bước nhỏ để:
1. mở terminal
2. kiểm tra Git
3. cấu hình Git
4. xem lại cấu hình

Mỗi bước:
- nói rõ lệnh cần gõ
- giải thích lệnh đó làm gì
- đợi tôi xác nhận đã làm xong
- nếu tôi gặp lỗi, bạn phải chẩn đoán theo triệu chứng

Tôi muốn được học chậm mà chắc.
\`\`\`

## Prompt 3 - Nhờ AI kiểm tra và bắt lỗi cài đặt
\`\`\`
Tôi sẽ gửi cho bạn các lệnh tôi đã chạy và kết quả terminal.
Bạn hãy kiểm tra giúp tôi:
1. Git đã cài đúng chưa?
2. Cấu hình user.name, user.email đã đúng chưa?
3. Có lỗi nào cần sửa ngay không?
4. Có gì tôi đang hiểu sai về config global không?

Review kỹ, ngắn gọn nhưng chính xác.
\`\`\`

## Bài tập buổi này
- Cài Git
- Cấu hình tên và email
- Kiểm tra lại bằng terminal
- Giải thích được config global là gì

## Tiêu chuẩn hoàn thành
- Git hoạt động trên máy
- Biết tự kiểm tra phiên bản
- Biết cấu hình ban đầu đúng cách
      `
    },
    {
      id: 'git-03',
      title: 'Buổi 3: Repository, git init và vòng đời file trong Git',
      level: 'beginner',
      content: `
# Buổi 3: Repository, git init và vòng đời file trong Git

## Mục tiêu
- Hiểu repository là gì
- Biết dùng \`git init\`
- Hiểu working directory, staging area, commit history
- Hiểu vòng đời của file trong Git

## Prompt 1 - Nhờ AI dạy bản chất 3 vùng của Git
\`\`\`
Hãy dạy tôi Git buổi 3 thật sâu nhưng dễ hiểu.

Chủ đề:
- repository
- git init
- working directory
- staging area
- commit history
- trạng thái file trong Git

Tôi muốn bạn dạy theo cấu trúc:
1. Repository là gì?
2. git init làm gì?
3. Giải thích thật rõ 3 vùng chính:
   - working directory
   - staging area
   - commit history
4. Giải thích vòng đời file:
   - untracked
   - modified
   - staged
   - committed
5. Cho ví dụ thực tế từng bước
6. Chỉ ra lỗi hiểu sai phổ biến của người mới
7. Tạo cho tôi 1 sơ đồ tư duy đơn giản bằng lời để nhớ 3 vùng của Git
8. Đặt cho tôi 5 câu hỏi kiểm tra hiểu bài

Dạy như mentor đang sửa tư duy Git cho junior.
\`\`\`

## Prompt 2 - Nhờ AI mô phỏng terminal thực hành
\`\`\`
Hãy đóng vai mentor terminal và dẫn tôi thực hành buổi 3.

Bài toán:
- tạo một thư mục dự án mới
- khởi tạo Git
- tạo một file mới
- chỉnh sửa file
- quan sát trạng thái thay đổi

Tôi muốn bạn hướng dẫn theo từng bước:
1. nói lệnh cần chạy
2. giải thích ngắn lệnh đó
3. yêu cầu tôi chạy
4. yêu cầu tôi gửi lại kết quả terminal
5. sau đó giải thích trạng thái file đang ở đâu trong vòng đời Git

Mục tiêu là để tôi thật sự hiểu, không chỉ nhớ lệnh.
\`\`\`

## Prompt 3 - Nhờ AI kiểm tra hiểu vòng đời file
\`\`\`
Hãy kiểm tra xem tôi đã hiểu vòng đời file trong Git chưa.

Tạo cho tôi:
- 4 câu hỏi tình huống
- 3 câu hỏi tự luận ngắn
- 1 bài tập yêu cầu tôi nói file đang ở trạng thái nào

Sau khi tôi trả lời, hãy chấm:
- đúng/sai
- tôi đang nhầm ở chỗ nào
- cách nhớ ngắn nhất cho tôi
\`\`\`

## Bài tập buổi này
- Tạo repo Git mới
- Tạo file mới, chỉnh sửa file
- Dùng lời của bạn để mô tả file đang ở trạng thái nào

## Tiêu chuẩn hoàn thành
- Hiểu repo là gì
- Hiểu 3 vùng chính của Git
- Hiểu file thay đổi như thế nào trong Git
      `
    },
    {
      id: 'git-04',
      title: 'Buổi 4: git status, git add, git commit và tư duy commit sạch',
      level: 'beginner',
      content: `
# Buổi 4: git status, git add, git commit và tư duy commit sạch

## Mục tiêu
- Dùng được \`git status\`, \`git add\`, \`git commit\`
- Hiểu staging để làm gì
- Biết viết commit message rõ ràng
- Bắt đầu có tư duy commit nhỏ, đúng ý nghĩa

## Prompt 1 - Nhờ AI dạy commit từ bản chất
\`\`\`
Hãy dạy tôi Git buổi 4 về:
- git status
- git add
- git add .
- git commit -m

Nhưng tôi không muốn học kiểu nhớ lệnh.
Tôi muốn hiểu bản chất.

Hãy dạy theo cấu trúc:
1. git status dùng để làm gì?
2. Vì sao phải có bước staging?
3. git add thực sự đang làm gì?
4. git commit tạo ra cái gì?
5. Vì sao commit message quan trọng?
6. Thế nào là commit tốt, thế nào là commit tệ?
7. Chỉ ra lỗi phổ biến:
   - add bừa
   - commit quá nhiều thứ cùng lúc
   - message kiểu "update", "fix bug", "done"
8. Cho tôi 5 ví dụ commit message tốt và xấu
9. Cho tôi 5 bài tập tình huống và bắt tôi chọn cách commit hợp lý

Dạy như mentor đang sửa thói quen Git từ sớm cho junior.
\`\`\`

## Prompt 2 - Nhờ AI dẫn tôi thực hành commit
\`\`\`
Hãy dẫn tôi thực hành Git buổi 4 theo từng bước:
1. tạo 2 file mới
2. sửa một file
3. dùng git status để xem trạng thái
4. add đúng file cần add
5. commit với message rõ ràng
6. sửa tiếp file rồi commit lần nữa

Mỗi bước:
- nói lệnh cần chạy
- nói tôi nên quan sát điều gì ở terminal
- hỏi tôi tại sao tôi lại add file đó
- nếu tôi add quá nhiều file, hãy cảnh báo
- nếu commit message tệ, hãy bắt tôi viết lại
\`\`\`

## Prompt 3 - Nhờ AI review lịch sử commit của tôi
\`\`\`
Tôi sẽ gửi cho bạn danh sách commit message của tôi.
Bạn hãy review như mentor khó tính.

Đánh giá theo:
1. message có rõ nghĩa không?
2. commit có đang gom quá nhiều thay đổi không?
3. có dấu hiệu commit theo kiểu chữa cháy không?
4. tôi có đang dùng động từ tốt không?
5. nên viết lại message nào?

Cuối cùng, hãy cho tôi 1 bộ nguyên tắc commit message ngắn để áp dụng hằng ngày.
\`\`\`

## Bài tập buổi này
- Tạo ít nhất 4 commit có ý nghĩa rõ ràng
- Mỗi commit chỉ chứa một thay đổi hợp lý

## Tiêu chuẩn hoàn thành
- Biết staging và commit đúng cách
- Commit message rõ nghĩa
- Không commit kiểu gom tất cả vào một cục
      `
    },
    {
      id: 'git-05',
      title: 'Buổi 5: git log, git diff, .gitignore và cách đọc thay đổi',
      level: 'beginner',
      content: `
# Buổi 5: git log, git diff, .gitignore và cách đọc thay đổi

## Mục tiêu
- Biết xem lịch sử commit
- Biết đọc sự thay đổi trước khi commit
- Biết dùng .gitignore
- Hình thành thói quen kiểm tra trước khi đẩy code

## Prompt 1 - Nhờ AI dạy tư duy quan sát thay đổi
\`\`\`
Hãy dạy tôi Git buổi 5 theo tư duy "quan sát trước khi hành động".

Chủ đề:
- git log
- git log --oneline
- git diff
- git diff --staged
- .gitignore

Tôi muốn bạn dạy theo cấu trúc:
1. Vì sao phải xem lịch sử commit?
2. git log và git log --oneline khác nhau thế nào?
3. git diff giúp gì trước khi commit?
4. git diff --staged dùng khi nào?
5. .gitignore dùng để làm gì?
6. Vì sao không nên commit:
   - node_modules
   - file build
   - .env
   - file tạm editor
7. Chỉ ra 10 lỗi phổ biến của người mới
8. Cho tôi checklist kiểm tra trước khi commit

Dạy thật thực chiến như mentor đang chữa thói quen ẩu.
\`\`\`

## Prompt 2 - Nhờ AI giao bài tập đọc thay đổi
\`\`\`
Hãy giao cho tôi các bài tập thực hành:
1. tạo vài commit rồi đọc lại bằng git log
2. sửa một file và xem bằng git diff
3. add file rồi xem bằng git diff --staged
4. tạo file .gitignore phù hợp cho project web

Tôi muốn bạn:
- không cho đáp án ngay
- bắt tôi quan sát terminal
- hỏi tôi thay đổi nào đã staged, thay đổi nào chưa
- nếu tôi commit nhầm file không nên commit, hãy chỉ ra ngay
\`\`\`

## Prompt 3 - Nhờ AI review .gitignore và thói quen pre-commit
\`\`\`
Tôi sẽ gửi cho bạn file .gitignore và mô tả thói quen commit của tôi.
Bạn hãy review:
1. .gitignore đã đủ chưa?
2. Có file nhạy cảm nào tôi quên ignore không?
3. Tôi có đang commit mà không xem diff không?
4. Tôi có thói quen nào nguy hiểm không?
5. Hãy cho tôi 1 checklist pre-commit 30 giây để dùng hằng ngày
\`\`\`

## Bài tập buổi này
- Tạo .gitignore cho 1 project web
- Dùng git log, git diff, git diff --staged
- Tự mô tả thay đổi của mình trước khi commit

## Tiêu chuẩn hoàn thành
- Biết xem lịch sử
- Biết xem thay đổi trước khi commit
- Biết ignore file không nên đưa vào Git
      `
    },
    {
      id: 'git-06',
      title: 'Buổi 6: Hoàn tác an toàn với restore, reset, revert và stash',
      level: 'intermediate',
      content: `
# Buổi 6: Hoàn tác an toàn với restore, reset, revert và stash

## Mục tiêu
- Biết bỏ staging, bỏ thay đổi, cất tạm công việc
- Hiểu reset và revert khác nhau thế nào
- Biết khi nào dùng stash
- Tránh phá lịch sử hoặc làm mất code do dùng lệnh sai

## Prompt 1 - Nhờ AI dạy undo trong Git thật rõ
\`\`\`
Hãy dạy tôi Git buổi 6 về hoàn tác thay đổi thật sâu nhưng dễ hiểu.

Chủ đề:
- git restore
- git restore --staged
- git stash
- git stash list
- git stash apply
- git stash pop
- git reset
- git reset --soft
- git reset --hard
- git revert

Tôi muốn bạn dạy theo cấu trúc:
1. Trong Git có những kiểu "undo" nào?
2. Khi nào chỉ cần bỏ staging?
3. Khi nào cần bỏ thay đổi chưa commit?
4. Khi nào nên stash?
5. reset khác revert ở đâu?
6. Vì sao reset --hard nguy hiểm?
7. Vì sao trong teamwork thường ưu tiên revert hơn reset lịch sử đã push?
8. Cho tôi 8 tình huống thực tế và bắt tôi chọn lệnh phù hợp
9. Sau đó chấm và giải thích rất kỹ

Dạy như mentor đang ngăn junior phá repo của team.
\`\`\`

## Prompt 2 - Nhờ AI mô phỏng tình huống cứu cháy
\`\`\`
Hãy tạo cho tôi các tình huống Git thực tế cần undo:
1. add nhầm file
2. sửa file nhưng chưa commit và muốn bỏ
3. đang làm dở phải chuyển sang sửa bug gấp
4. commit một thay đổi sai và muốn hoàn tác an toàn
5. lỡ reset sai và cần hiểu chuyện gì xảy ra

Với mỗi tình huống:
- hỏi tôi sẽ dùng lệnh gì
- vì sao
- rủi ro là gì
- chờ tôi trả lời
- sau đó bạn mới chữa

Mục tiêu là để tôi học cách suy nghĩ trước khi gõ lệnh.
\`\`\`

## Prompt 3 - Nhờ AI review quyết định undo của tôi
\`\`\`
Tôi sẽ mô tả một tình huống Git và cách tôi định xử lý.
Bạn hãy review như mentor khó tính:
1. Cách xử lý của tôi có an toàn không?
2. Tôi có đang dùng lệnh quá mạnh không?
3. Có lựa chọn an toàn hơn không?
4. Rủi ro mất code là gì?
5. Nếu trong teamwork thì có gì cần khác?

Hãy phản biện kỹ và giải thích rõ trade-off.
\`\`\`

## Bài tập buổi này
- Mô phỏng ít nhất 5 tình huống undo khác nhau
- Tự chọn lệnh phù hợp và giải thích vì sao

## Tiêu chuẩn hoàn thành
- Không còn mơ hồ giữa restore/reset/revert/stash
- Biết ưu tiên cách an toàn
- Biết nghĩ trước khi undo
      `
    },
    {
      id: 'git-07',
      title: 'Buổi 7: Branch, merge và tư duy làm việc trên nhánh riêng',
      level: 'intermediate',
      content: `
# Buổi 7: Branch, merge và tư duy làm việc trên nhánh riêng

## Mục tiêu
- Hiểu branch là gì
- Biết vì sao không nên code trực tiếp trên main
- Biết tạo, chuyển, làm việc trên branch
- Biết merge branch an toàn vào main

## Prompt 1 - Nhờ AI dạy branch từ bản chất
\`\`\`
Hãy dạy tôi Git buổi 7 về branch và merge như mentor dạy đi làm.

Chủ đề:
- git branch
- git switch
- git checkout -b
- main branch
- feature branch
- git merge
- fast-forward
- merge commit ở mức cơ bản

Tôi muốn bạn dạy theo cấu trúc:
1. Branch là gì?
2. Vì sao branch cực kỳ quan trọng khi làm việc nhóm?
3. Vì sao không nên code trực tiếp trên main?
4. Feature branch dùng thế nào?
5. Merge thực sự đang làm gì?
6. Fast-forward và merge commit khác nhau ra sao ở mức dễ hiểu?
7. Cho ví dụ workflow thực tế từ lúc tạo branch đến lúc merge
8. Chỉ ra lỗi phổ biến:
   - quên chuyển branch
   - commit nhầm lên main
   - merge mà không hiểu mình đang gộp gì
9. Tạo 5 tình huống và bắt tôi chọn thao tác đúng

Dạy như mentor đang xây nền teamwork cho junior.
\`\`\`

## Prompt 2 - Nhờ AI dẫn tôi workflow branch hoàn chỉnh
\`\`\`
Hãy dẫn tôi thực hành một workflow branch hoàn chỉnh:
1. đang ở main
2. tạo branch feature/login
3. sửa code và commit trên branch này
4. quay về main
5. merge feature/login vào main
6. đọc lại log sau khi merge

Cách hướng dẫn:
- nói lệnh từng bước
- giải thích ngắn mục đích
- hỏi tôi đang đứng ở branch nào
- nếu tôi làm sai branch, hãy chỉ ra ngay
- sau cùng, giúp tôi tóm tắt toàn bộ quy trình bằng lời
\`\`\`

## Prompt 3 - Nhờ AI review workflow branch của tôi
\`\`\`
Tôi sẽ mô tả quy trình branch và merge mà tôi vừa làm.
Bạn hãy review:
1. Workflow có sạch không?
2. Có bước nào nguy hiểm hoặc thừa không?
3. Tôi có đang làm việc quá trực tiếp trên main không?
4. Commit trên branch có đủ rõ ràng không?
5. Merge của tôi có đúng thời điểm không?

Hãy phản biện thật kỹ và cho tôi phiên bản workflow tốt hơn.
\`\`\`

## Bài tập buổi này
- Tạo ít nhất 3 feature branch
- Mỗi branch làm 1 thay đổi nhỏ
- Merge lại vào main đúng quy trình

## Tiêu chuẩn hoàn thành
- Hiểu branch như không gian làm việc riêng
- Không còn muốn code trực tiếp trên main
- Merge có chủ đích và có kiểm tra
      `
    },
    {
      id: 'git-08',
      title: 'Buổi 8: GitHub, remote, push, pull, fetch và đồng bộ với remote',
      level: 'intermediate',
      content: `
# Buổi 8: GitHub, remote, push, pull, fetch và đồng bộ với remote

## Mục tiêu
- Hiểu remote repository là gì
- Biết kết nối local repo với GitHub
- Biết push code lên remote
- Biết pull/fetch để đồng bộ code

## Prompt 1 - Nhờ AI dạy local vs remote thật rõ
\`\`\`
Hãy dạy tôi Git buổi 8 về GitHub và remote thật dễ hiểu.

Chủ đề:
- Git local
- GitHub remote
- git remote add origin
- git push -u origin main
- git fetch
- git pull

Tôi muốn bạn dạy theo cấu trúc:
1. Local repo là gì?
2. Remote repo là gì?
3. GitHub đóng vai trò gì trong teamwork?
4. push thực sự đang làm gì?
5. fetch và pull khác nhau ra sao?
6. Khi nào chỉ nên fetch trước?
7. Chỉ ra lỗi phổ biến:
   - không hiểu local và remote khác nhau
   - pull bừa mà không biết có gì thay đổi
   - push nhầm branch
8. Tạo 6 tình huống thực tế để tôi chọn lệnh phù hợp
9. Sau đó chấm và chữa kỹ

Dạy như mentor đang hướng dẫn junior làm việc với repo team.
\`\`\`

## Prompt 2 - Nhờ AI dẫn tôi kết nối GitHub
\`\`\`
Hãy đóng vai mentor kỹ thuật và dẫn tôi:
1. tạo repo trên GitHub
2. kết nối repo local với remote
3. push code lần đầu
4. kiểm tra code đã lên GitHub chưa
5. tạo thay đổi mới rồi push tiếp
6. fetch hoặc pull để đồng bộ

Mỗi bước:
- nói rõ lệnh
- giải thích ngắn
- chỉ ra lỗi hay gặp
- nếu có cảnh báo gì, hãy nói rõ
\`\`\`

## Prompt 3 - Nhờ AI review thao tác với remote của tôi
\`\`\`
Tôi sẽ gửi cho bạn các lệnh Git tôi đã dùng với GitHub.
Bạn hãy review:
1. tôi đã kết nối remote đúng chưa?
2. tôi có đang hiểu đúng push/pull/fetch không?
3. có thao tác nào nguy hiểm hoặc thiếu hiểu biết không?
4. nếu làm việc nhóm thì tôi cần cẩn thận điểm nào?
5. hãy cho tôi 1 checklist đồng bộ code an toàn
\`\`\`

## Bài tập buổi này
- Tạo repo GitHub
- Push code lần đầu
- Mô phỏng ít nhất 1 lần fetch hoặc pull

## Tiêu chuẩn hoàn thành
- Hiểu local và remote
- Biết push code lên GitHub
- Biết cách đồng bộ thay đổi từ remote
      `
    },
    {
      id: 'git-09',
      title: 'Buổi 9: GitHub Flow, Pull Request, code review và conflict',
      level: 'advanced',
      content: `
# Buổi 9: GitHub Flow, Pull Request, code review và conflict

## Mục tiêu
- Hiểu workflow teamwork cơ bản
- Biết tạo Pull Request
- Biết viết mô tả PR rõ ràng
- Hiểu conflict là gì và xử lý conflict an toàn

## Prompt 1 - Nhờ AI dạy teamwork workflow
\`\`\`
Hãy dạy tôi Git buổi 9 về làm việc nhóm với GitHub Flow.

Chủ đề:
- main luôn ổn định
- tạo branch cho từng task
- push branch
- mở Pull Request
- code review
- merge
- merge conflict
- conflict markers

Tôi muốn bạn dạy theo cấu trúc:
1. GitHub Flow là gì?
2. Vì sao main phải giữ ổn định?
3. Pull Request thực sự dùng để làm gì?
4. Code review quan trọng ra sao?
5. Conflict xảy ra khi nào?
6. Cách đọc conflict marker:
   - <<<<<<<
   - =======
   - >>>>>>>
7. Cách xử lý conflict an toàn
8. Lỗi phổ biến của người mới khi teamwork với Git
9. Tạo 5 tình huống teamwork và bắt tôi chọn quy trình đúng

Dạy như mentor team lead đang đào tạo member mới.
\`\`\`

## Prompt 2 - Nhờ AI mô phỏng teamwork
\`\`\`
Hãy mô phỏng cho tôi một workflow teamwork với GitHub Flow.

Tình huống:
- tôi làm tính năng login
- đồng đội làm navbar
- cả hai cùng sửa một file layout
- sau đó xảy ra conflict

Hãy dẫn tôi theo từng bước:
1. tạo branch
2. commit và push branch
3. mô tả cách mở Pull Request
4. mô tả cách review code
5. tạo tình huống conflict giả lập
6. yêu cầu tôi tự nói cách xử lý
7. sau đó chữa thật kỹ

Mục tiêu là giúp tôi hình dung teamwork thật.
\`\`\`

## Prompt 3 - Nhờ AI review PR và cách xử lý conflict của tôi
\`\`\`
Tôi sẽ gửi cho bạn:
- tiêu đề PR
- mô tả PR
- cách tôi định xử lý conflict

Bạn hãy review theo các tiêu chí:
1. PR title có rõ không?
2. PR description có đủ bối cảnh không?
3. Tôi có giải thích đúng thay đổi không?
4. Cách xử lý conflict của tôi có an toàn không?
5. Có bước nào thiếu trước khi merge không?

Hãy review như reviewer khó tính nhưng công bằng.
\`\`\`

## Bài tập buổi này
- Mô phỏng 1 Pull Request hoàn chỉnh
- Viết title + description cho PR
- Mô phỏng 1 conflict và tự xử lý

## Tiêu chuẩn hoàn thành
- Hiểu GitHub Flow
- Biết PR dùng để làm gì
- Không sợ conflict ở mức cơ bản
      `
    },
    {
      id: 'git-10',
      title: 'Buổi 10: Rebase, chiến lược commit và project cuối khóa Git',
      level: 'advanced',
      content: `
# Buổi 10: Rebase, chiến lược commit và project cuối khóa Git

## Mục tiêu
- Hiểu rebase là gì ở mức thực chiến
- Biết khi nào nên dùng rebase, khi nào không
- Biết viết lịch sử commit gọn và chuyên nghiệp
- Hoàn thiện một workflow Git đủ tốt cho dự án cá nhân hoặc teamwork nhỏ

## Prompt 1 - Nhờ AI dạy rebase và lịch sử commit sạch
\`\`\`
Hãy dạy tôi Git buổi 10 về:
- rebase
- merge vs rebase
- lịch sử commit gọn
- chiến lược commit message
- conventional commits ở mức cơ bản

Tôi muốn bạn dạy theo cấu trúc:
1. Rebase là gì?
2. Rebase khác merge ở đâu?
3. Khi nào rebase rất hữu ích?
4. Khi nào không nên rebase, đặc biệt với lịch sử đã chia sẻ?
5. Vì sao lịch sử commit sạch lại quan trọng?
6. Thế nào là commit message chuyên nghiệp?
7. Giới thiệu conventional commits ở mức cơ bản:
   - feat
   - fix
   - refactor
   - docs
   - chore
8. Chỉ ra lỗi phổ biến:
   - rebase mà không hiểu mình đang làm gì
   - commit message quá mơ hồ
   - chia commit quá tệ
9. Cho tôi 5 tình huống và bắt tôi chọn merge hay rebase
10. Sau đó chữa thật kỹ

Dạy như mentor đang chuẩn hóa workflow Git cho junior đi làm.
\`\`\`

## Prompt 2 - Nhờ AI dẫn tôi làm project cuối khóa
\`\`\`
Hãy đóng vai mentor Git và dẫn tôi làm project cuối khóa.

Cho tôi chọn 1 trong các tình huống:
1. Tự làm landing page nhưng mô phỏng quy trình teamwork
2. Team 2 người làm blog mini
3. Team 2 người làm app to-do
4. Tự làm một project nhỏ nhưng có đầy đủ branch, PR, merge, revert hoặc stash

Sau khi tôi chọn, hãy dẫn tôi theo lộ trình:
1. tạo repo
2. xác định các task
3. chia task thành branch riêng
4. commit theo từng bước rõ ràng
5. push lên GitHub
6. mô phỏng PR
7. mô phỏng review
8. mô phỏng một sự cố Git và cách xử lý
9. review toàn bộ workflow của tôi như mentor

Mục tiêu là để tôi dùng Git như người làm việc thật.
\`\`\`

## Prompt 3 - Nhờ AI audit workflow Git của tôi
\`\`\`
Tôi sẽ gửi cho bạn toàn bộ workflow Git của tôi:
- cách chia branch
- commit message
- cách push/pull
- cách mở PR
- cách xử lý conflict hoặc revert/rebase

Bạn hãy audit như mentor kỹ tính theo 6 tiêu chí:
1. Tư duy branch
2. Chất lượng commit
3. Độ an toàn khi thao tác
4. Tư duy teamwork
5. Độ sạch của lịch sử Git
6. Mức độ trưởng thành khi dùng Git

Với mỗi tiêu chí:
- nêu điểm tốt
- nêu lỗi cụ thể
- giải thích vì sao là lỗi
- cho hướng sửa cụ thể

Cuối cùng:
- chấm điểm tổng trên thang 100
- xếp loại: yếu / ổn / tốt / rất tốt
- cho tôi 5 thói quen Git cần giữ lâu dài
\`\`\`

## Dự án cuối khóa
Chọn 1 trong các tình huống:
1. Team 2 người làm landing page
2. Team 3 người làm blog mini
3. Team 2 người làm app to-do
4. Tự mô phỏng workflow teamwork trên project cá nhân

## Yêu cầu bắt buộc
- Có repo Git
- Có branch riêng cho từng task
- Có commit message rõ ràng
- Có push lên GitHub
- Có ít nhất 1 PR mô phỏng
- Có ít nhất 1 tình huống stash, revert, conflict hoặc rebase
- Có mô tả lại toàn bộ workflow

## Checklist tự đánh giá
- Có làm việc trên branch riêng không?
- Commit có rõ nghĩa không?
- Có xem diff trước khi commit không?
- Có hiểu khi nào dùng stash/revert/rebase không?
- Có biết mở PR và mô tả thay đổi không?
- Workflow có đủ sạch để teamwork không?

## Bài tập cuối khóa
- Hoàn thành project
- Tự audit bằng AI theo các prompt trên
- Sửa lại workflow của bạn đến khi đủ chắc
      `
    }
  ]
};