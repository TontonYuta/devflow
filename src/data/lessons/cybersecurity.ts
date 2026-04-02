import { Lesson } from '../../types';

export const cybersecurityLesson: Lesson = {
  id: 'cybersecurity-foundation',
  icon: 'shield',
  title: 'CyberSecurity',
  description:
    'Lộ trình CyberSecurity theo phong cách tự học cùng AI mentor. Mỗi buổi học đi kèm prompt cực chi tiết để học viên chỉ cần copy vào AI là có thể học từ nền tảng CNTT, nguyên lý bảo mật, network/system/web security, log/incident response và được review như học cùng mentor security 1-1.',
  points: [
    'Đi từ nền tảng đến đúng tư duy nghề security, không học tool vặt',
    'Có prompt cực chi tiết để copy vào AI và học ngay',
    'AI đóng vai mentor CyberSecurity, dạy từ bản chất chứ không chỉ liệt kê khái niệm',
    'Tập trung vào năng lực thật: risk thinking, trust boundary, defense in depth, log/incident mindset',
    'Có bài tập theo kiểu phân tích hệ thống, attack surface và lớp phòng thủ',
    'Học xong có nền rất tốt để đi tiếp AppSec, Blue Team, SOC hoặc Security+ / ISC2 CC'
  ],
  chapters: [
    {
      id: 'cyber-01',
      title: 'Buổi 1: CyberSecurity là gì và vì sao phải học từ nền tảng chứ không từ tool?',
      level: 'beginner',
      content: `
# Buổi 1: CyberSecurity là gì và vì sao phải học từ nền tảng chứ không từ tool?

## Mục tiêu
- Hiểu CyberSecurity là gì
- Hiểu vì sao bảo mật là bảo vệ tài sản và giảm rủi ro
- Biết các nhánh lớn trong security
- Không còn nghĩ học security là học hack tool

## Prompt 1 - Nhờ AI dạy lý thuyết từ gốc
\`\`\`text
Bạn hãy đóng vai một mentor CyberSecurity cực giỏi, chuyên dạy người mới vào ngành theo hướng bài bản.

Hôm nay hãy dạy tôi buổi đầu tiên về CyberSecurity theo phong cách:
- cực dễ hiểu nhưng không hời hợt
- giải thích từ bản chất
- luôn nói vì sao kiến thức này quan trọng
- gắn với ví dụ thực tế của doanh nghiệp, website, ứng dụng, hệ thống nội bộ
- không dùng thuật ngữ khó nếu chưa giải thích

Chủ đề hôm nay:
- CyberSecurity là gì?
- Security đang bảo vệ cái gì?
- Vì sao bảo mật không chỉ là “chống hacker”?
- Các nhánh lớn trong security là gì?
- Vì sao người mới không nên bắt đầu bằng tool hoặc pentest trước?

Tôi muốn bạn dạy theo format:
1. CyberSecurity là gì?
2. Những tài sản nào cần được bảo vệ?
3. Security khác IT support hay software development ở đâu?
4. Các nhánh lớn:
   - Network Security
   - System Security
   - AppSec / Web Security
   - Blue Team / SOC
   - Pentest / Offensive Security
   - GRC / Risk / Compliance
5. Vì sao nền tảng network, OS, web rất quan trọng trước khi học security sâu?
6. Cho 6 ví dụ thực tế về rủi ro bảo mật
7. Chỉ ra 8 hiểu lầm phổ biến của người mới về CyberSecurity
8. Đặt cho tôi 5 câu hỏi kiểm tra hiểu bài
9. Sau khi tôi trả lời, hãy chấm và sửa thật kỹ

Dùng tiếng Việt và dạy như mentor thật sự.
\`\`\`

## Prompt 2 - Nhờ AI luyện tư duy “security bảo vệ cái gì”
\`\`\`text
Tôi muốn luyện tư duy nhìn một hệ thống theo góc nhìn security.

Hãy cho tôi 6 ví dụ hệ thống:
- website bán hàng
- dashboard nội bộ công ty
- ứng dụng ngân hàng
- hệ thống camera IP
- hệ thống email doanh nghiệp
- app học online

Với mỗi hệ thống:
1. hỏi tôi tài sản quan trọng nhất là gì
2. hỏi tôi dữ liệu nhạy cảm là gì
3. hỏi tôi nếu bị tấn công thì hậu quả chính là gì
4. sau đó bạn mới chữa
5. nếu tôi trả lời mơ hồ, hãy bắt tôi nói cụ thể hơn
\`\`\`

## Prompt 3 - Nhờ AI kiểm tra hiểu bài
\`\`\`text
Hãy kiểm tra xem tôi đã thật sự hiểu buổi 1 CyberSecurity chưa.

Tôi muốn có:
- 3 câu hỏi trắc nghiệm
- 3 câu hỏi tự luận ngắn
- 2 tình huống thực tế
- 1 câu hỏi tư duy: vì sao học security từ tool trước nền tảng là rất dễ lệch hướng?

Sau khi tôi trả lời:
- chấm điểm từng câu
- giải thích chỗ sai
- nói tôi đang ở mức nào
\`\`\`

## Bài tập buổi này
- Giải thích CyberSecurity bằng lời của bạn
- Liệt kê 5 tài sản quan trọng trong một hệ thống
- So sánh 3 nhánh nghề khác nhau trong security

## Tiêu chuẩn hoàn thành
- Hiểu security là bảo vệ tài sản và giảm rủi ro
- Biết các nhánh lớn trong ngành
- Không còn nghĩ security = tool
      `
    },
    {
      id: 'cyber-02',
      title: 'Buổi 2: Security mindset - CIA, AAA, least privilege, defense in depth',
      level: 'beginner',
      content: `
# Buổi 2: Security mindset - CIA, AAA, least privilege, defense in depth

## Mục tiêu
- Hiểu các nguyên lý bảo mật nền tảng
- Biết CIA triad, AAA, least privilege, defense in depth
- Bắt đầu suy nghĩ như người thiết kế lớp phòng thủ

## Prompt 1 - Nhờ AI dạy security principles
\`\`\`text
Hãy dạy tôi buổi 2 về các nguyên lý nền tảng của CyberSecurity như một mentor security rất chắc nền tảng.

Tôi muốn bạn dạy theo cấu trúc:
1. CIA triad là gì?
2. Availability quan trọng như thế nào bên cạnh confidentiality?
3. AAA là gì?
4. Least privilege là gì?
5. Defense in depth là gì?
6. Fail-safe / deny-by-default là gì ở mức dễ hiểu?
7. Cho ví dụ thực tế ở:
   - web app
   - server nội bộ
   - tài khoản nhân viên
   - hệ thống admin
8. Chỉ ra lỗi phổ biến:
   - chỉ nghĩ security là confidentiality
   - cấp quyền quá rộng
   - chỉ dựa vào một lớp phòng thủ
9. Tạo checklist security principles cơ bản

Dạy như mentor đang xây nền tư duy bảo mật cho người mới.
\`\`\`

## Prompt 2 - Nhờ AI luyện phân tích lớp phòng thủ
\`\`\`text
Tôi muốn luyện tư duy phân tích security principles trong hệ thống thật.

Hãy cho tôi 8 tình huống như:
- user nội bộ truy cập dashboard admin
- backup hệ thống
- account nhân viên nghỉ việc
- file nhạy cảm lưu trên server
- API quan trọng
- VPN cho nhân viên từ xa
- tài khoản database
- hệ thống email công ty

Với mỗi tình huống:
1. hỏi tôi CIA nào quan trọng nhất
2. hỏi tôi least privilege áp dụng ra sao
3. hỏi tôi defense in depth nên gồm những lớp nào
4. sau đó bạn mới chữa
\`\`\`

## Prompt 3 - Nhờ AI review security mindset của tôi
\`\`\`text
Tôi sẽ mô tả một hệ thống và cách tôi muốn bảo vệ nó.
Bạn hãy review:
1. Tôi có áp dụng CIA đúng không?
2. Tôi có đang cấp quyền quá rộng không?
3. Tôi có đang phụ thuộc vào một lớp phòng thủ duy nhất không?
4. Có lớp bảo vệ nào quan trọng đang thiếu không?
5. Hãy viết lại tư duy phòng thủ tốt hơn cho tôi
\`\`\`

## Bài tập buổi này
- Giải thích CIA, AAA, least privilege, defense in depth
- Chọn 3 hệ thống và phân tích các lớp phòng thủ
- Tự viết checklist nguyên lý bảo mật cá nhân

## Tiêu chuẩn hoàn thành
- Hiểu các nguyên lý nền tảng
- Có tư duy nhiều lớp phòng thủ
- Biết quyền tối thiểu quan trọng ra sao
      `
    },
    {
      id: 'cyber-03',
      title: 'Buổi 3: Networking foundation for security - IP, subnet, DNS, NAT, firewall, VPN',
      level: 'beginner',
      content: `
# Buổi 3: Networking foundation for security - IP, subnet, DNS, NAT, firewall, VPN

## Mục tiêu
- Hiểu network foundation theo góc nhìn security
- Biết IP, subnet, DNS, NAT, firewall, VPN liên quan gì đến bảo mật
- Không học security trong mơ hồ hạ tầng

## Prompt 1 - Nhờ AI dạy network for security
\`\`\`text
Hãy dạy tôi buổi 3 về networking foundation cho security như một mentor CyberSecurity.

Tôi muốn bạn dạy theo cấu trúc:
1. Vì sao muốn học security thì phải hiểu network?
2. IP address, subnet, gateway là gì ở mức security practitioner cần biết?
3. DNS quan trọng với security ở đâu?
4. NAT giúp gì và không giúp gì?
5. Firewall giúp gì?
6. VPN dùng để làm gì?
7. Cho ví dụ:
   - user truy cập website
   - nhân viên vào mạng công ty từ xa
   - chặn truy cập trái phép giữa các mạng
8. Chỉ ra lỗi phổ biến:
   - không hiểu flow traffic
   - nhầm DNS với connectivity
   - nghĩ NAT = security đầy đủ
9. Tạo checklist network foundation cho người học security
\`\`\`

## Prompt 2 - Nhờ AI luyện phân tích flow traffic
\`\`\`text
Hãy cho tôi 8 tình huống flow traffic:
- user trong LAN ra internet
- VPN từ xa vào mạng công ty
- client resolve DNS rồi mở website
- firewall chặn giữa 2 vùng mạng
- NAT cho nhiều máy cùng ra internet
- server nội bộ không nên public
- subnet tách guest và internal
- traffic từ app tới DB

Với mỗi tình huống:
1. hỏi tôi traffic đi như thế nào
2. hỏi thiết bị hay dịch vụ nào tham gia
3. hỏi rủi ro bảo mật có thể nằm ở đâu
4. sau đó bạn mới chữa
\`\`\`

## Prompt 3 - Nhờ AI review nền mạng của tôi
\`\`\`text
Tôi sẽ tự giải thích IP, subnet, DNS, NAT, firewall, VPN bằng lời của tôi.
Bạn hãy review:
1. Tôi đã hiểu đúng góc nhìn security chưa?
2. Có khái niệm nào tôi đang học thuộc mà chưa hiểu flow không?
3. Tôi còn yếu ở phần nào nhất?
4. Hãy cho tôi một sơ đồ tư duy ngắn gọn để nhớ
\`\`\`

## Bài tập buổi này
- Giải thích vai trò của DNS, NAT, firewall, VPN
- Vẽ bằng lời flow người dùng truy cập website
- Phân tích 3 rủi ro bảo mật xuất phát từ network foundation yếu

## Tiêu chuẩn hoàn thành
- Có nền mạng đủ để học security tiếp
- Hiểu flow traffic tốt hơn
- Không còn mơ hồ với các thành phần mạng cơ bản
      `
    },
    {
      id: 'cyber-04',
      title: 'Buổi 4: System security - Windows, Linux, account, privilege, hardening, patching',
      level: 'intermediate',
      content: `
# Buổi 4: System security - Windows, Linux, account, privilege, hardening, patching

## Mục tiêu
- Hiểu OS security ở mức nền tảng
- Biết account, privilege, service, process quan trọng thế nào
- Hiểu hardening và patching
- Biết tư duy giảm attack surface

## Prompt 1 - Nhờ AI dạy system security foundation
\`\`\`text
Hãy dạy tôi buổi 4 về system security như một mentor CyberSecurity.

Tôi muốn bạn dạy theo cấu trúc:
1. Vì sao security của OS rất quan trọng?
2. Account, privilege và permission liên quan bảo mật ra sao?
3. Service và process có ý nghĩa gì trong security?
4. Hardening là gì?
5. Patching là gì và vì sao quan trọng?
6. Attack surface là gì?
7. Cho ví dụ:
   - Windows workstation
   - Linux server
   - tài khoản admin
   - dịch vụ không cần thiết
8. Chỉ ra lỗi phổ biến:
   - dùng admin quá nhiều
   - không patch
   - bật quá nhiều service
   - cấu hình mặc định quá lỏng
9. Tạo checklist hardening cơ bản cho máy chủ/máy trạm
\`\`\`

## Prompt 2 - Nhờ AI luyện phân tích attack surface
\`\`\`text
Hãy cho tôi 8 tình huống về hệ điều hành:
- server mở quá nhiều service
- user local admin
- password policy yếu
- tài khoản cũ chưa disable
- máy không cập nhật bản vá
- thư mục quyền quá rộng
- SSH/RDP mở không kiểm soát
- script chạy bằng quyền cao

Với mỗi tình huống:
1. hỏi tôi rủi ro là gì
2. hỏi lớp hardening nào nên áp dụng
3. hỏi cách giảm attack surface
4. sau đó bạn mới chữa
\`\`\`

## Prompt 3 - Nhờ AI review tư duy hardening của tôi
\`\`\`text
Tôi sẽ mô tả cách tôi harden một máy chủ hoặc máy trạm.
Bạn hãy review:
1. Tôi có đang bỏ sót các điểm hardening cơ bản không?
2. Privilege có đang quá rộng không?
3. Patch/service/account đã được xử lý đủ chưa?
4. Có gì vẫn đang để mặc định quá nguy hiểm không?
5. Hãy tối ưu checklist hardening cho tôi
\`\`\`

## Bài tập buổi này
- Tạo checklist hardening cơ bản cho Windows hoặc Linux
- Liệt kê 10 điểm làm tăng attack surface
- Phân tích 3 tình huống privilege quá rộng

## Tiêu chuẩn hoàn thành
- Hiểu OS security ở mức nền tảng
- Biết hardening quan trọng thế nào
- Bắt đầu nhìn hệ điều hành như một attack surface
      `
    },
    {
      id: 'cyber-05',
      title: 'Buổi 5: IAM - Authentication, Authorization, MFA, password, access control',
      level: 'intermediate',
      content: `
# Buổi 5: IAM - Authentication, Authorization, MFA, password, access control

## Mục tiêu
- Phân biệt authentication và authorization
- Hiểu MFA, password policy, access control
- Biết vì sao IAM là trung tâm của security hiện đại

## Prompt 1 - Nhờ AI dạy IAM từ bản chất
\`\`\`text
Hãy dạy tôi buổi 5 về IAM như một mentor CyberSecurity.

Tôi muốn bạn dạy theo cấu trúc:
1. IAM là gì?
2. Authentication và authorization khác nhau thế nào?
3. MFA giúp gì?
4. Password policy tốt nên có gì?
5. Access control là gì?
6. RBAC và least privilege liên quan ra sao?
7. Cho ví dụ:
   - user thường
   - admin
   - nhân viên nghỉ việc
   - tài khoản service
8. Chỉ ra lỗi phổ biến:
   - chỉ tập trung login mà quên authorization
   - không có MFA
   - quyền cấp quá rộng
   - offboarding kém
9. Tạo checklist IAM foundation
\`\`\`

## Prompt 2 - Nhờ AI luyện phân tích quyền truy cập
\`\`\`text
Hãy cho tôi 8 tình huống IAM:
- admin panel
- nhân viên HR
- tài khoản database app
- tài khoản thực tập sinh
- user tự xem hồ sơ mình
- tài khoản nghỉ việc
- tài khoản dùng cho automation
- tài khoản support tạm thời

Với mỗi tình huống:
1. hỏi tôi authentication cần mạnh đến mức nào
2. hỏi authorization nên chia quyền ra sao
3. hỏi MFA có nên bắt buộc không
4. sau đó bạn mới chữa
\`\`\`

## Prompt 3 - Nhờ AI review IAM design của tôi
\`\`\`text
Tôi sẽ mô tả hệ thống IAM của tôi.
Bạn hãy review:
1. Tôi đã tách authn và authz rõ chưa?
2. MFA đã hợp lý chưa?
3. Có tài khoản nào đang thừa quyền không?
4. Offboarding/role review có đang yếu không?
5. Hãy tối ưu lại IAM checklist cho tôi
\`\`\`

## Bài tập buổi này
- So sánh authentication và authorization
- Thiết kế quyền cho 1 hệ thống nhỏ
- Tạo checklist IAM cơ bản cho doanh nghiệp nhỏ

## Tiêu chuẩn hoàn thành
- Hiểu IAM là nền của security
- Biết authn/authz khác nhau
- Có tư duy quyền truy cập chặt hơn
      `
    },
    {
      id: 'cyber-06',
      title: 'Buổi 6: Web & App Security foundation - HTTP, session, cookie, OWASP mindset',
      level: 'intermediate',
      content: `
# Buổi 6: Web & App Security foundation - HTTP, session, cookie, OWASP mindset

## Mục tiêu
- Hiểu bảo mật web/app ở mức nền tảng
- Biết HTTP, cookie, session, token liên quan gì đến rủi ro
- Biết OWASP mindset thay vì chỉ nhớ tên lỗ hổng

## Prompt 1 - Nhờ AI dạy appsec foundation
\`\`\`text
Hãy dạy tôi buổi 6 về Web/App Security foundation như một mentor AppSec.

Tôi muốn bạn dạy theo cấu trúc:
1. Vì sao web/app là bề mặt tấn công lớn?
2. HTTP, cookie, session, token liên quan gì đến bảo mật?
3. Trust boundary trong web app nằm ở đâu?
4. Input, auth, session, access control quan trọng ra sao?
5. OWASP mindset là gì ở mức người mới?
6. Cho ví dụ:
   - login
   - session cookie
   - admin panel
   - API từ frontend tới backend
7. Chỉ ra lỗi phổ biến:
   - tin client
   - kiểm tra quyền hời hợt
   - render dữ liệu user không an toàn
8. Tạo checklist appsec foundation cho người mới
\`\`\`

## Prompt 2 - Nhờ AI luyện phân tích attack surface web
\`\`\`text
Hãy cho tôi 8 tính năng web/app:
- login
- reset password
- profile update
- upload file
- search
- comment
- admin dashboard
- public API

Với mỗi tính năng:
1. hỏi tôi attack surface chính là gì
2. hỏi trust boundary nằm ở đâu
3. hỏi lớp bảo vệ cơ bản nên có gì
4. sau đó bạn mới chữa
\`\`\`

## Prompt 3 - Nhờ AI review tư duy AppSec của tôi
\`\`\`text
Tôi sẽ mô tả một web app nhỏ và cách tôi muốn bảo vệ nó.
Bạn hãy review:
1. Attack surface nào tôi đang bỏ sót?
2. Tôi có đang tin frontend quá mức không?
3. Auth/session/access control đã được nghĩ đủ chưa?
4. Chỗ nào dễ phát sinh lỗi OWASP-style nhất?
5. Hãy tối ưu lại tư duy bảo vệ cho tôi
\`\`\`

## Bài tập buổi này
- Phân tích attack surface của 1 web app
- Mô tả trust boundary của frontend/backend
- Tạo checklist appsec foundation

## Tiêu chuẩn hoàn thành
- Hiểu Web/App Security ở mức nền
- Biết trust boundary trong app
- Có tư duy OWASP-style đúng hướng
      `
    },
    {
      id: 'cyber-07',
      title: 'Buổi 7: Logging, monitoring, SIEM mindset và phát hiện bất thường',
      level: 'advanced',
      content: `
# Buổi 7: Logging, monitoring, SIEM mindset và phát hiện bất thường

## Mục tiêu
- Hiểu log quan trọng thế nào trong security
- Biết logging gì hữu ích, logging gì nguy hiểm
- Hiểu monitoring và SIEM mindset
- Biết phát hiện bất thường ở mức nền tảng

## Prompt 1 - Nhờ AI dạy detection mindset
\`\`\`text
Hãy dạy tôi buổi 7 về logging và monitoring như một mentor Blue Team / SOC foundation.

Tôi muốn bạn dạy theo cấu trúc:
1. Vì sao log rất quan trọng trong security?
2. Log khác monitoring ở đâu?
3. SIEM mindset là gì ở mức dễ hiểu?
4. Những sự kiện nào nên log?
5. Những dữ liệu nào không nên log thô?
6. Dấu hiệu bất thường thường là gì?
7. Cho ví dụ:
   - failed login hàng loạt
   - access bất thường vào admin
   - API abuse
   - service crash lặp lại
8. Chỉ ra lỗi phổ biến:
   - không log đủ
   - log quá nhiều mà không dùng được
   - log lộ dữ liệu nhạy cảm
9. Tạo checklist logging/monitoring foundation
\`\`\`

## Prompt 2 - Nhờ AI luyện phát hiện bất thường
\`\`\`text
Hãy cho tôi 8 tình huống log hoặc hành vi bất thường:
- 200 lần login fail
- tài khoản đăng nhập giờ lạ
- user thường gọi endpoint admin
- lưu lượng tăng đột biến
- nhiều lỗi 401/403
- token sai liên tục
- dịch vụ restart nhiều lần
- truy cập từ IP lạ

Với mỗi tình huống:
1. hỏi tôi vì sao đáng nghi
2. hỏi tôi nên log thêm gì
3. hỏi tôi nên cảnh báo hay điều tra ra sao
4. sau đó bạn mới chữa
\`\`\`

## Prompt 3 - Nhờ AI review tư duy detection của tôi
\`\`\`text
Tôi sẽ mô tả hệ thống log/monitoring của tôi.
Bạn hãy review:
1. Có log đủ để điều tra sự cố không?
2. Có log nào đang lộ dữ liệu nhạy cảm không?
3. Có tín hiệu bất thường nào tôi chưa nghĩ tới không?
4. Monitoring hiện tại có quá yếu hoặc quá ồn không?
5. Hãy tối ưu checklist detection cho tôi
\`\`\`

## Bài tập buổi này
- Liệt kê 15 sự kiện nên log
- Liệt kê 5 dữ liệu không nên log thô
- Tạo checklist phát hiện bất thường cơ bản

## Tiêu chuẩn hoàn thành
- Hiểu logging/monitoring trong security
- Bắt đầu có tư duy detection
- Biết log phải hữu ích và an toàn
      `
    },
    {
      id: 'cyber-08',
      title: 'Buổi 8: Incident response, containment, recovery và post-incident thinking',
      level: 'advanced',
      content: `
# Buổi 8: Incident response, containment, recovery và post-incident thinking

## Mục tiêu
- Hiểu incident response là gì
- Biết lifecycle cơ bản của xử lý sự cố
- Biết containment, eradication, recovery
- Hiểu post-incident review quan trọng thế nào

## Prompt 1 - Nhờ AI dạy incident response foundation
\`\`\`text
Hãy dạy tôi buổi 8 về incident response như một mentor Blue Team / Security Operations.

Tôi muốn bạn dạy theo cấu trúc:
1. Incident là gì?
2. Incident response lifecycle cơ bản gồm những bước nào?
3. Containment là gì?
4. Eradication là gì?
5. Recovery là gì?
6. Vì sao post-incident review cực kỳ quan trọng?
7. Cho ví dụ:
   - account compromise
   - web app bị abuse
   - server nhiễm malware
   - lộ secret
8. Chỉ ra lỗi phổ biến:
   - phản ứng cảm tính
   - xóa dấu vết quá sớm
   - không cô lập đủ nhanh
   - không rút kinh nghiệm sau incident
9. Tạo checklist IR cơ bản cho người mới
\`\`\`

## Prompt 2 - Nhờ AI luyện phân tích incident
\`\`\`text
Hãy cho tôi 8 tình huống incident:
- lộ token
- nghi ngờ account bị chiếm
- failed login hàng loạt
- web app bị spam request
- server bị đổi cấu hình lạ
- nghi có malware
- database bị truy cập bất thường
- secret bị push lên repo

Với mỗi tình huống:
1. hỏi tôi dấu hiệu incident là gì
2. hỏi tôi cần containment ra sao
3. hỏi tôi cần điều tra/log gì
4. hỏi recovery nên gồm gì
5. sau đó bạn mới chữa
\`\`\`

## Prompt 3 - Nhờ AI review khả năng xử lý incident của tôi
\`\`\`text
Tôi sẽ mô tả cách tôi xử lý một security incident.
Bạn hãy review:
1. Tôi có xác định đúng mức độ nghiêm trọng không?
2. Tôi có containment đủ nhanh không?
3. Tôi có bỏ sót bước điều tra/chứng cứ không?
4. Recovery và post-incident của tôi có đủ không?
5. Hãy viết lại một playbook đơn giản hơn cho tôi
\`\`\`

## Bài tập buổi này
- Tạo playbook IR đơn giản cho 3 loại incident
- Phân tích 5 tình huống containment
- Viết checklist post-incident review

## Tiêu chuẩn hoàn thành
- Hiểu IR lifecycle
- Biết containment/recovery cơ bản
- Không phản ứng sự cố theo cảm tính
      `
    },
    {
      id: 'cyber-09',
      title: 'Buổi 9: Governance, risk, compliance, awareness và tư duy security trong tổ chức',
      level: 'advanced',
      content: `
# Buổi 9: Governance, risk, compliance, awareness và tư duy security trong tổ chức

## Mục tiêu
- Hiểu security không chỉ là kỹ thuật
- Biết risk, policy, compliance, awareness liên kết với nhau
- Hiểu con người và quy trình cũng là lớp phòng thủ

## Prompt 1 - Nhờ AI dạy GRC foundation
\`\`\`text
Hãy dạy tôi buổi 9 về governance, risk và compliance như một mentor CyberSecurity nền tảng.

Tôi muốn bạn dạy theo cấu trúc:
1. Vì sao security không chỉ là kỹ thuật?
2. Governance là gì?
3. Risk là gì?
4. Compliance là gì?
5. Policy, standard, guideline khác nhau thế nào?
6. Security awareness quan trọng ra sao?
7. Cho ví dụ:
   - policy password
   - offboarding policy
   - phishing awareness
   - access review
8. Chỉ ra lỗi phổ biến:
   - chỉ lo công cụ
   - không có policy rõ
   - không đào tạo con người
   - không quản trị rủi ro
9. Tạo checklist GRC foundation cho người kỹ thuật
\`\`\`

## Prompt 2 - Nhờ AI luyện nhìn security ở mức tổ chức
\`\`\`text
Hãy cho tôi 8 tình huống ở mức tổ chức:
- nhân viên click phishing
- account nghỉ việc chưa bị khóa
- không có policy chia quyền admin
- không review quyền định kỳ
- không có quy trình incident
- backup có nhưng không test restore
- không có awareness training
- công ty lưu quá nhiều dữ liệu nhạy cảm

Với mỗi tình huống:
1. hỏi tôi rủi ro ở mức tổ chức là gì
2. hỏi policy/quy trình nào đang thiếu
3. hỏi biện pháp kỹ thuật nào chưa đủ nếu không có governance
4. sau đó bạn mới chữa
\`\`\`

## Prompt 3 - Nhờ AI review tư duy GRC của tôi
\`\`\`text
Tôi sẽ mô tả một tổ chức nhỏ và cách tôi muốn làm security.
Bạn hãy review:
1. Tôi có đang quá thiên về kỹ thuật không?
2. Policy/procedure nào đang thiếu?
3. Con người có đang là điểm yếu mà tôi bỏ qua không?
4. Risk nào cần quản lý trước?
5. Hãy tối ưu checklist governance/risk cho tôi
\`\`\`

## Bài tập buổi này
- Viết 5 policy/security rule cơ bản cho công ty nhỏ
- Phân tích 5 rủi ro do con người/quy trình
- Tạo checklist awareness cơ bản

## Tiêu chuẩn hoàn thành
- Hiểu security là bài toán của tổ chức
- Biết GRC không tách rời kỹ thuật
- Có tư duy risk ở mức rộng hơn
      `
    },
    {
      id: 'cyber-10',
      title: 'Buổi 10: Định hướng nghề CyberSecurity - Blue Team, AppSec, Pentest, SOC và roadmap tiếp theo',
      level: 'advanced',
      content: `
# Buổi 10: Định hướng nghề CyberSecurity - Blue Team, AppSec, Pentest, SOC và roadmap tiếp theo

## Mục tiêu
- Tổng hợp toàn bộ nền tảng đã học
- Hiểu các nhánh nghề lớn trong CyberSecurity
- Biết mình nên đi tiếp nhánh nào
- Tự đánh giá mức độ sẵn sàng cho lộ trình tiếp theo

## Prompt 1 - Nhờ AI dẫn tôi định hướng nghề
\`\`\`text
Hãy đóng vai mentor CyberSecurity và giúp tôi định hướng nghề sau khi đã học foundation.

Tôi muốn bạn hướng dẫn theo cấu trúc:
1. Sau nền tảng foundation, các nhánh nghề lớn là gì?
2. Blue Team / SOC phù hợp với kiểu người nào?
3. AppSec phù hợp với kiểu người nào?
4. Pentest / Offensive Security phù hợp với kiểu người nào?
5. Network Security / Infrastructure Security phù hợp với ai?
6. GRC / Risk / Compliance phù hợp với ai?
7. Với mỗi nhánh, hãy nói:
   - nền tảng cần mạnh
   - việc hằng ngày
   - kỹ năng kỹ thuật chính
   - điểm khó nhất
8. Đưa cho tôi một khung tự đánh giá để chọn nhánh phù hợp
9. Sau đó hỏi tôi câu hỏi để xác định nhánh phù hợp nhất
\`\`\`

## Prompt 2 - Nhờ AI audit nền tảng hiện tại của tôi
\`\`\`text
Tôi sẽ mô tả nền tảng hiện tại của tôi:
- network
- Linux/Windows
- web/app
- coding
- log/monitoring
- security mindset

Bạn hãy audit:
1. Tôi mạnh ở đâu?
2. Tôi yếu ở đâu?
3. Nhánh nào hợp với tôi nhất hiện tại?
4. Tôi cần học gì tiếp trong 3 tháng tới?
5. Nếu muốn theo Security+ hoặc ISC2 CC, tôi còn thiếu mảng nào?
\`\`\`

## Prompt 3 - Nhờ AI đóng vai reviewer cuối khóa
\`\`\`text
Hãy đóng vai reviewer cuối khóa CyberSecurity foundation.

Tôi sẽ gửi cho bạn:
- phần tôi tự tóm tắt kiến thức đã học
- phần tôi tự đánh giá điểm mạnh/yếu
- nhánh nghề tôi muốn theo

Bạn phải review như thật, không nể nang.

Cách review mong muốn:
- đánh giá mức độ hiểu nền tảng security
- đánh giá network/system/web foundation
- đánh giá security mindset
- đánh giá khả năng phân tích rủi ro
- chỉ rõ điểm nào chứng tỏ tôi đã có nền tốt
- chỉ rõ điểm nào cho thấy tôi còn học rời rạc
- đề xuất roadmap 90 ngày tiếp theo cho tôi

Cuối cùng, hãy nói thật:
- tôi đã đủ nền tảng để đi tiếp CyberSecurity nghiêm túc chưa?
- nếu chưa, tôi cần luyện thêm phần nào?
\`\`\`

## Bài tập cuối khóa
- Tự tóm tắt lại 10 phần quan trọng nhất của foundation
- Tự đánh giá mạnh/yếu ở 6 mảng:
  - network
  - system
  - web/app
  - IAM
  - logging/incident
  - risk mindset
- Chọn 1 nhánh nghề muốn theo
- Viết roadmap 90 ngày tiếp theo

## Tiêu chuẩn hoàn thành
- Nhìn rõ các nhánh nghề security
- Biết mình phù hợp nhánh nào hơn
- Có roadmap tiếp theo rõ ràng
      `
    }
  ]
};