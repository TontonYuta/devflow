import { Lesson } from '../../types';

export const networkingLesson: Lesson = {
  id: 'networking-ccna',
  icon: 'server',
  title: 'Mạng máy tính (CCNA)',
  description:
    'Lộ trình Mạng máy tính theo phong cách tự học cùng AI mentor, bám tư duy CCNA. Mỗi buổi học đi kèm prompt cực chi tiết để học viên chỉ cần copy vào AI là có thể học từ bản chất, luyện subnetting, switching, routing, IP services, security cơ bản và được review như học cùng mentor network 1-1.',
  points: [
    'Mỗi buổi có prompt cực chi tiết để copy vào AI và học ngay',
    'AI đóng vai mentor Network/CCNA, dạy từ bản chất chứ không chỉ học thuộc lệnh',
    'Có prompt học lý thuyết, prompt phân tích topology, prompt làm lab, prompt chữa bài và prompt phản biện',
    'Tập trung vào năng lực thật: đọc sơ đồ mạng, chia subnet, cấu hình switch/router, debug kết nối',
    'Có bài tập theo kiểu tình huống và lab thay vì chỉ nhớ khái niệm',
    'Học xong có nền tảng rất tốt để tiếp tục học CCNA nghiêm túc hơn hoặc làm lab thực chiến'
  ],
  chapters: [
    {
      id: 'net-01',
      title: 'Buổi 1: Mạng máy tính là gì, vì sao thiết bị nói chuyện được với nhau và CCNA học cái gì?',
      level: 'beginner',
      content: `
# Buổi 1: Mạng máy tính là gì, vì sao thiết bị nói chuyện được với nhau và CCNA học cái gì?

## Mục tiêu
- Hiểu mạng máy tính là gì
- Hiểu thiết bị giao tiếp qua mạng để làm gì
- Biết vai trò của switch, router, IP address ở mức nền tảng
- Hiểu học CCNA là học tư duy mạng, không chỉ học lệnh

## Cách học buổi này
Bạn sẽ copy từng prompt bên dưới vào AI theo đúng thứ tự.
Không học lướt. Sau mỗi prompt phải tự giải thích lại bằng lời của bạn.

## Prompt 1 - Nhờ AI dạy lý thuyết từ gốc
\`\`\`
Bạn hãy đóng vai một mentor Network/CCNA cực giỏi, chuyên dạy người mới học mạng máy tính từ con số 0.

Hôm nay hãy dạy tôi buổi đầu tiên về mạng máy tính theo phong cách:
- cực dễ hiểu nhưng không hời hợt
- giải thích từ bản chất
- luôn nói vì sao kiến thức này quan trọng
- gắn với ví dụ thực tế ở nhà, công ty, internet
- không dùng thuật ngữ khó nếu chưa giải thích

Chủ đề hôm nay:
- Mạng máy tính là gì?
- Vì sao các thiết bị có thể giao tiếp với nhau?
- Vai trò của switch, router, địa chỉ IP
- Học CCNA thực chất là học những gì?

Tôi muốn bạn dạy theo format:
1. Mạng máy tính là gì?
2. Vì sao máy tính cần kết nối mạng?
3. Switch làm gì? Router làm gì?
4. Địa chỉ IP giúp gì?
5. Cho ví dụ thực tế:
   - mạng gia đình
   - mạng văn phòng
   - truy cập website trên internet
6. Giải thích vì sao network không chỉ là “cắm dây là chạy”
7. Chỉ ra 8 hiểu lầm phổ biến của người mới về mạng máy tính
8. Đặt cho tôi 5 câu hỏi kiểm tra hiểu bài
9. Sau khi tôi trả lời, bạn phải chấm và sửa thật kỹ

Dùng tiếng Việt và dạy như mentor thật sự.
\`\`\`

## Prompt 2 - Nhờ AI luyện tư duy nhìn thế giới theo góc nhìn mạng
\`\`\`
Tôi muốn luyện tư duy nhìn các tình huống đời thường theo góc nhìn mạng máy tính.

Hãy cho tôi 6 tình huống thực tế, ví dụ:
- điện thoại dùng Wi-Fi ở nhà
- laptop truy cập Google
- camera IP gửi dữ liệu về đầu ghi
- 2 máy tính cùng văn phòng chia sẻ file
- nhân viên công ty vào hệ thống nội bộ
- người dùng ở chi nhánh truy cập server trung tâm

Với mỗi tình huống:
1. hỏi tôi có những thiết bị mạng nào có thể tham gia
2. hỏi tôi dữ liệu phải đi qua những bước nào
3. hỏi tôi switch/router/IP đóng vai trò gì
4. sau đó bạn mới chữa
5. nếu tôi trả lời mơ hồ, hãy bắt tôi nói cụ thể hơn

Mục tiêu là để tôi bắt đầu suy nghĩ theo flow của mạng.
\`\`\`

## Prompt 3 - Nhờ AI kiểm tra hiểu bài
\`\`\`
Hãy kiểm tra xem tôi đã thật sự hiểu buổi 1 Mạng máy tính chưa.

Tôi muốn có:
- 3 câu hỏi trắc nghiệm có giải thích đáp án
- 3 câu hỏi tự luận ngắn
- 2 tình huống thực tế
- 1 câu hỏi tư duy: vì sao muốn học CCNA tốt thì phải hiểu flow của mạng, không chỉ học lệnh Cisco?

Sau khi tôi trả lời, bạn hãy:
- chấm điểm từng câu
- giải thích chỗ sai
- nói tôi đang ở mức nào: chưa hiểu / hiểu cơ bản / hiểu chắc
\`\`\`

## Bài tập buổi này
1. Giải thích mạng máy tính bằng lời của bạn
2. So sánh switch và router ở mức cơ bản
3. Vẽ bằng lời flow khi laptop ở nhà mở một website

## Tiêu chuẩn hoàn thành
- Hiểu mạng máy tính là gì
- Biết switch/router/IP có vai trò gì
- Bắt đầu có tư duy theo flow mạng
      `
    },
    {
      id: 'net-02',
      title: 'Buổi 2: OSI, TCP/IP và cách dữ liệu đi qua các lớp',
      level: 'beginner',
      content: `
# Buổi 2: OSI, TCP/IP và cách dữ liệu đi qua các lớp

## Mục tiêu
- Hiểu mô hình OSI và TCP/IP
- Biết vì sao phải chia mạng thành các lớp
- Hiểu data encapsulation ở mức dễ hiểu
- Bắt đầu đọc vấn đề mạng theo layer

## Prompt 1 - Nhờ AI dạy mô hình lớp từ bản chất
\`\`\`
Hãy dạy tôi buổi 2 về OSI và TCP/IP như một mentor Network/CCNA.

Tôi muốn bạn dạy theo cấu trúc:
1. Vì sao người ta phải chia networking thành các lớp?
2. Mô hình OSI là gì?
3. Mô hình TCP/IP là gì?
4. So sánh OSI và TCP/IP ở mức dễ hiểu
5. Giải thích vai trò từng lớp trong OSI bằng ngôn ngữ người mới cũng hiểu được
6. Data encapsulation là gì?
7. Khi dữ liệu đi từ ứng dụng xuống dây mạng rồi lên máy bên kia thì chuyện gì xảy ra?
8. Cho ví dụ thực tế khi mở một website
9. Chỉ ra 8 lỗi hiểu sai phổ biến về OSI/TCP-IP
10. Tạo cho tôi một cách nhớ OSI dễ hiểu, không học vẹt

Dạy như mentor đang dạy tư duy nền tảng network, không chỉ đọc định nghĩa.
\`\`\`

## Prompt 2 - Nhờ AI luyện phân tích vấn đề theo layer
\`\`\`
Tôi muốn luyện cách nhìn sự cố mạng theo từng layer.

Hãy cho tôi 8 tình huống, ví dụ:
- cáp mạng lỏng
- IP sai
- gateway sai
- DNS lỗi
- web server down
- firewall chặn
- switch port bị shutdown
- app truy cập được IP nhưng không mở được website

Với mỗi tình huống:
1. hỏi tôi vấn đề nằm ở layer nào là chính
2. hỏi tôi vì sao
3. hỏi tôi nên kiểm tra gì đầu tiên
4. sau đó bạn mới chữa

Mục tiêu là để tôi tập suy nghĩ theo layer thay vì đoán bừa.
\`\`\`

## Prompt 3 - Nhờ AI review cách tôi hiểu OSI/TCP-IP
\`\`\`
Tôi sẽ tự giải thích OSI và TCP/IP bằng lời của tôi.
Bạn hãy review:
1. Tôi có hiểu bản chất từng lớp không?
2. Tôi có đang học thuộc lòng mà chưa hiểu flow không?
3. Phần nào tôi còn mơ hồ nhất?
4. Hãy đưa cho tôi một phiên bản giải thích ngắn gọn, dễ nhớ hơn
\`\`\`

## Bài tập buổi này
- Tự giải thích 7 lớp OSI bằng ngôn ngữ của bạn
- So sánh OSI và TCP/IP
- Chọn 5 lỗi mạng và xếp chúng vào layer phù hợp nhất

## Tiêu chuẩn hoàn thành
- Hiểu mô hình lớp là để phân tích vấn đề
- Biết OSI/TCP-IP ở mức nền tảng
- Bắt đầu dùng layer để suy luận lỗi
      `
    },
    {
      id: 'net-03',
      title: 'Buổi 3: Ethernet, MAC address, ARP, switching và frame trong LAN',
      level: 'beginner',
      content: `
# Buổi 3: Ethernet, MAC address, ARP, switching và frame trong LAN

## Mục tiêu
- Hiểu giao tiếp trong LAN hoạt động ra sao
- Biết MAC address là gì
- Hiểu switch học MAC như thế nào
- Biết ARP dùng để nối giữa IP và MAC

## Prompt 1 - Nhờ AI dạy nền tảng Layer 2
\`\`\`
Hãy dạy tôi buổi 3 về Ethernet, MAC, ARP và switching như một mentor CCNA.

Tôi muốn bạn dạy theo cấu trúc:
1. Ethernet là gì?
2. MAC address là gì?
3. Frame ở layer 2 là gì?
4. Switch chuyển frame như thế nào?
5. MAC address table là gì?
6. ARP dùng để làm gì?
7. Vì sao muốn gửi gói IP trong LAN thì vẫn phải biết MAC?
8. Cho ví dụ thực tế:
   - PC A ping PC B trong cùng LAN
   - switch học MAC ra sao
9. Chỉ ra lỗi phổ biến:
   - nhầm MAC với IP
   - không hiểu ARP làm gì
   - nghĩ switch “biết sẵn” mọi thiết bị
10. Tạo checklist hiểu flow trong LAN

Dạy như mentor đang dạy đúng bản chất Layer 2.
\`\`\`

## Prompt 2 - Nhờ AI luyện flow LAN theo từng bước
\`\`\`
Tôi muốn luyện flow khi 2 máy trong cùng LAN giao tiếp.

Hãy cho tôi 5 tình huống, ví dụ:
- cùng VLAN
- switch chưa biết MAC đích
- ARP cache chưa có
- ARP cache đã có
- thiết bị mới vừa cắm vào switch

Với mỗi tình huống:
1. hỏi tôi frame đi như thế nào
2. hỏi tôi switch học gì
3. hỏi tôi khi nào ARP xảy ra
4. sau đó bạn mới chữa
5. nếu tôi trả lời chưa đủ từng bước, hãy bắt tôi nói lại theo flow chi tiết
\`\`\`

## Prompt 3 - Nhờ AI review tư duy Layer 2 của tôi
\`\`\`
Tôi sẽ mô tả flow khi 2 máy trong LAN giao tiếp.
Bạn hãy review:
1. Tôi có phân biệt MAC và IP rõ chưa?
2. Tôi có hiểu ARP đúng chưa?
3. Tôi có hiểu switch forwarding đúng chưa?
4. Bước nào tôi đang bỏ sót?
5. Hãy viết lại flow chuẩn theo từng bước cho tôi
\`\`\`

## Bài tập buổi này
- Viết lại flow ARP + frame forwarding trong LAN
- So sánh MAC address và IP address
- Giải thích switch học MAC ra sao

## Tiêu chuẩn hoàn thành
- Hiểu giao tiếp Layer 2 trong LAN
- Không còn nhầm MAC và IP
- Hiểu ARP là cầu nối IP ↔ MAC
      `
    },
    {
      id: 'net-04',
      title: 'Buổi 4: IPv4, subnet mask, network/host, subnetting và VLSM',
      level: 'intermediate',
      content: `
# Buổi 4: IPv4, subnet mask, network/host, subnetting và VLSM

## Mục tiêu
- Nắm chắc IPv4 và subnet mask
- Hiểu network bit / host bit
- Chia subnet được
- Bắt đầu làm được bài subnetting như một kỹ năng thật

## Prompt 1 - Nhờ AI dạy subnetting từ bản chất
\`\`\`
Hãy dạy tôi buổi 4 về IPv4 và subnetting như một mentor CCNA cực giỏi.

Tôi muốn bạn dạy theo cấu trúc:
1. IPv4 address là gì?
2. Subnet mask dùng để làm gì?
3. Network portion và host portion là gì?
4. Vì sao phải chia subnet?
5. CIDR notation là gì?
6. Cách tính:
   - network address
   - broadcast address
   - usable hosts
7. VLSM là gì và vì sao quan trọng?
8. Cho ví dụ từng bước thật chậm:
   - /24
   - /26
   - /27
   - /30
9. Chỉ ra lỗi phổ biến:
   - nhầm network với host
   - tính sai block size
   - chia subnet không đủ host
10. Tạo checklist làm bài subnetting

Dạy như mentor subnetting rất chắc, ưu tiên hiểu bản chất và quy trình làm bài.
\`\`\`

## Prompt 2 - Nhờ AI cho tôi luyện subnetting như drill
\`\`\`
Tôi muốn luyện subnetting kiểu huấn luyện thật sự.

Hãy tạo cho tôi 15 bài subnetting tăng dần độ khó.
Mỗi bài yêu cầu tôi tìm:
- subnet mask
- network address
- broadcast address
- usable host range
- số host dùng được

Sau mỗi bài:
1. đợi tôi giải
2. chấm từng bước
3. chỉ ra tôi sai ở khâu nào:
   - đổi prefix
   - block size
   - xác định dải
   - đếm host
4. nếu tôi sai, hãy bắt tôi làm lại theo đúng quy trình

Mục tiêu là để tôi thật sự cứng subnetting, không học qua loa.
\`\`\`

## Prompt 3 - Nhờ AI review quy trình làm subnetting của tôi
\`\`\`
Tôi sẽ gửi cho bạn cách tôi giải bài subnetting.
Bạn hãy review:
1. Quy trình của tôi có chuẩn không?
2. Tôi sai nhiều nhất ở bước nào?
3. Có mẹo nào giúp tôi tính nhanh hơn mà vẫn đúng bản chất không?
4. Hãy tối ưu lại quy trình làm bài cho tôi theo kiểu thi CCNA
\`\`\`

## Bài tập buổi này
- Làm ít nhất 20 bài subnetting
- Tự viết quy trình 5 bước giải subnetting
- Giải 3 bài VLSM cơ bản

## Tiêu chuẩn hoàn thành
- Hiểu IPv4 và subnet mask thật chắc
- Làm được subnetting không cần đoán mò
- Bắt đầu thấy VLSM như bài toán logic
      `
    },
    {
      id: 'net-05',
      title: 'Buổi 5: VLAN, trunk, inter-VLAN routing và thiết kế LAN nhiều mạng',
      level: 'intermediate',
      content: `
# Buổi 5: VLAN, trunk, inter-VLAN routing và thiết kế LAN nhiều mạng

## Mục tiêu
- Hiểu VLAN là gì
- Biết trunk dùng để làm gì
- Hiểu inter-VLAN routing
- Bắt đầu thiết kế được LAN có phân đoạn mạng

## Prompt 1 - Nhờ AI dạy segmentation từ bản chất
\`\`\`
Hãy dạy tôi buổi 5 về VLAN, trunk và inter-VLAN routing như một mentor CCNA.

Tôi muốn bạn dạy theo cấu trúc:
1. Vì sao không nên để toàn bộ thiết bị trong một broadcast domain lớn?
2. VLAN là gì?
3. Access port và trunk port khác nhau thế nào?
4. Trunk mang nhiều VLAN ra sao?
5. Vì sao các VLAN khác nhau không tự nói chuyện được?
6. Inter-VLAN routing là gì?
7. Cho ví dụ thực tế:
   - VLAN nhân sự
   - VLAN kế toán
   - VLAN camera
   - VLAN guest
8. Chỉ ra lỗi phổ biến:
   - nhầm VLAN là mạng vật lý
   - không hiểu trunk
   - không hiểu vì sao cần router hoặc Layer 3 switch để các VLAN nói chuyện
9. Tạo checklist tư duy chia mạng bằng VLAN

Dạy như mentor đang giúp tôi thiết kế LAN có tổ chức hơn.
\`\`\`

## Prompt 2 - Nhờ AI luyện phân tích topology VLAN
\`\`\`
Tôi muốn luyện cách đọc topology VLAN.

Hãy cho tôi 6 topology giả định và yêu cầu tôi phân tích:
1. thiết bị nào thuộc VLAN nào
2. cổng nào nên là access
3. cổng nào nên là trunk
4. khi nào cần inter-VLAN routing
5. traffic nào đi được / không đi được
6. sau đó bạn mới chữa

Mục tiêu là để tôi không chỉ nhớ lệnh mà hiểu logic vận hành VLAN.
\`\`\`

## Prompt 3 - Nhờ AI review thiết kế VLAN của tôi
\`\`\`
Tôi sẽ mô tả một LAN nhỏ với các phòng ban và thiết bị.
Bạn hãy review:
1. Cách chia VLAN của tôi có hợp lý không?
2. Chỗ nào nên là access, chỗ nào nên là trunk?
3. Có cần inter-VLAN routing không?
4. Broadcast domain có đang quá lớn không?
5. Nếu đây là doanh nghiệp nhỏ, bạn sẽ tối ưu thiết kế của tôi thế nào?
\`\`\`

## Bài tập buổi này
- Thiết kế VLAN cho 1 văn phòng nhỏ
- Xác định access/trunk ports
- Giải thích flow khi PC ở VLAN 10 muốn nói chuyện với server ở VLAN 20

## Tiêu chuẩn hoàn thành
- Hiểu VLAN là segmentation logic
- Hiểu trunk và inter-VLAN routing
- Bắt đầu thiết kế LAN có tổ chức hơn
      `
    },
    {
      id: 'net-06',
      title: 'Buổi 6: Routing cơ bản - static route, default route và cách router quyết định đường đi',
      level: 'intermediate',
      content: `
# Buổi 6: Routing cơ bản - static route, default route và cách router quyết định đường đi

## Mục tiêu
- Hiểu router chọn đường đi như thế nào
- Biết static route và default route
- Hiểu routing table ở mức nền tảng
- Bắt đầu debug được vấn đề liên mạng

## Prompt 1 - Nhờ AI dạy routing logic từ bản chất
\`\`\`
Hãy dạy tôi buổi 6 về routing như một mentor CCNA.

Tôi muốn bạn dạy theo cấu trúc:
1. Router quyết định đường đi dựa trên cái gì?
2. Routing table là gì?
3. Longest prefix match là gì ở mức dễ hiểu?
4. Static route là gì?
5. Default route là gì?
6. Khi nào nên dùng static route?
7. Cho ví dụ thực tế:
   - 2 LAN nối với nhau qua router
   - chi nhánh đi ra internet qua default route
   - mạng đích cụ thể có static route
8. Chỉ ra lỗi phổ biến:
   - có route nhưng next-hop sai
   - nhầm default route với “mọi thứ tự chạy”
   - không kiểm tra đường về
9. Tạo checklist debug routing cơ bản

Dạy như mentor đang dạy tôi hiểu router thật sự đang suy nghĩ gì.
\`\`\`

## Prompt 2 - Nhờ AI luyện phân tích đường đi
\`\`\`
Tôi muốn luyện tư duy phân tích routing.

Hãy cho tôi 8 topology hoặc bảng route nhỏ.
Với mỗi bài:
1. hỏi tôi gói tin sẽ đi đường nào
2. hỏi tôi router chọn route nào và vì sao
3. hỏi tôi có cần static route hay default route không
4. sau đó bạn mới chữa
5. nếu có chỗ sai logic, hãy bắt tôi giải thích lại từng hop
\`\`\`

## Prompt 3 - Nhờ AI review khả năng phân tích routing của tôi
\`\`\`
Tôi sẽ gửi cho bạn một routing table hoặc topology tôi tự phân tích.
Bạn hãy review:
1. Tôi đã hiểu routing table đúng chưa?
2. Tôi có đang bỏ sót longest prefix match không?
3. Tôi có quên kiểm tra đường về không?
4. Nếu không ping được, tôi nên debug theo thứ tự nào?
5. Hãy đưa cho tôi một quy trình debug routing gọn nhưng chắc
\`\`\`

## Bài tập buổi này
- Phân tích ít nhất 10 tình huống routing
- Viết lại logic static/default route bằng lời của bạn
- Tạo checklist debug khi 2 mạng không nói chuyện được

## Tiêu chuẩn hoàn thành
- Hiểu router chọn đường đi ra sao
- Dùng được static/default route ở mức tư duy
- Bắt đầu debug routing có quy trình
      `
    },
    {
      id: 'net-07',
      title: 'Buổi 7: OSPF cơ bản, dynamic routing và tư duy mạng có thể mở rộng',
      level: 'advanced',
      content: `
# Buổi 7: OSPF cơ bản, dynamic routing và tư duy mạng có thể mở rộng

## Mục tiêu
- Hiểu vì sao dynamic routing cần thiết
- Hiểu OSPF ở mức nền tảng
- Biết neighbor, area, LSA ở mức dễ hiểu
- Bắt đầu thấy tư duy mạng mở rộng hơn static route

## Prompt 1 - Nhờ AI dạy dynamic routing mindset
\`\`\`
Hãy dạy tôi buổi 7 về dynamic routing và OSPF như một mentor CCNA.

Tôi muốn bạn dạy theo cấu trúc:
1. Vì sao static route không còn thuận tiện khi mạng lớn dần?
2. Dynamic routing là gì?
3. OSPF là gì?
4. Neighbor relationship nghĩa là gì?
5. Area trong OSPF là gì ở mức trực giác?
6. Metric/cost dùng để làm gì?
7. Router học route động như thế nào ở mức đơn giản hóa?
8. Cho ví dụ thực tế:
   - mạng nhiều router
   - thêm một mạng mới
   - link chính hỏng, cần chọn đường khác
9. Chỉ ra lỗi phổ biến:
   - học OSPF bằng lệnh mà không hiểu mục tiêu
   - nhầm dynamic route là “tự động nên không cần hiểu”
   - không hiểu tại sao adjacency lại quan trọng
10. Tạo checklist hiểu OSPF ở mức CCNA nền tảng

Dạy như mentor đang mở rộng tư duy routing của tôi lên level cao hơn.
\`\`\`

## Prompt 2 - Nhờ AI luyện phân tích OSPF topology
\`\`\`
Tôi muốn luyện cách nhìn topology có OSPF.

Hãy cho tôi 6 topology đơn giản có nhiều router.
Với mỗi topology:
1. hỏi tôi vì sao static route bắt đầu bất tiện
2. hỏi tôi OSPF giúp gì
3. hỏi tôi route có thể học ra sao
4. hỏi tôi khi link hỏng thì chuyện gì có thể xảy ra
5. sau đó bạn mới chữa

Mục tiêu là để tôi hiểu OSPF như giải pháp cho bài toán mở rộng, không phải bộ lệnh.
\`\`\`

## Prompt 3 - Nhờ AI review cách tôi hiểu dynamic routing
\`\`\`
Tôi sẽ tự giải thích OSPF và dynamic routing bằng lời của tôi.
Bạn hãy review:
1. Tôi có hiểu mục tiêu của OSPF chưa?
2. Tôi có đang nhầm giữa học lệnh và hiểu cơ chế không?
3. Phần nào của OSPF tôi cần nắm chắc trước?
4. Hãy viết lại cho tôi một phiên bản giải thích ngắn, đúng trọng tâm CCNA
\`\`\`

## Bài tập buổi này
- So sánh static routing và dynamic routing
- Tự giải thích OSPF bằng lời của bạn
- Phân tích 3 topology nhiều router và nói vì sao OSPF phù hợp hơn static route

## Tiêu chuẩn hoàn thành
- Hiểu dynamic routing dùng để giải quyết bài toán gì
- Có hình dung đúng về OSPF ở mức nền tảng
- Không học OSPF như học thuộc lệnh
      `
    },
    {
      id: 'net-08',
      title: 'Buổi 8: STP, EtherChannel, WLAN và các dịch vụ IP cơ bản',
      level: 'advanced',
      content: `
# Buổi 8: STP, EtherChannel, WLAN và các dịch vụ IP cơ bản

## Mục tiêu
- Hiểu loop Layer 2 nguy hiểm thế nào
- Hiểu STP và EtherChannel ở mức nền tảng
- Hiểu WLAN cơ bản
- Hiểu DHCP, DNS, NAT ở mức vận hành thực tế

## Prompt 1 - Nhờ AI dạy hạ tầng mạng vận hành ổn định
\`\`\`
Hãy dạy tôi buổi 8 như một mentor CCNA.

Chủ đề:
- loop Layer 2
- STP
- EtherChannel
- WLAN cơ bản
- DHCP
- DNS
- NAT/PAT

Tôi muốn bạn dạy theo cấu trúc:
1. Vì sao loop ở Layer 2 rất nguy hiểm?
2. STP giúp gì?
3. EtherChannel giúp gì?
4. WLAN hoạt động ở mức cơ bản ra sao?
5. DHCP giúp gì trong mạng?
6. DNS giúp gì?
7. NAT/PAT giúp gì khi đi ra internet?
8. Cho ví dụ thực tế:
   - văn phòng có nhiều switch
   - người dùng lấy IP tự động
   - truy cập website bằng tên miền
   - nhiều user cùng ra internet
9. Chỉ ra lỗi phổ biến:
   - không hiểu vì sao loop làm mạng “đơ”
   - nhầm DNS với gateway
   - nhầm DHCP với NAT
10. Tạo checklist hiểu dịch vụ mạng nền tảng

Dạy như mentor đang giúp tôi nhìn mạng như một hệ thống vận hành hoàn chỉnh.
\`\`\`

## Prompt 2 - Nhờ AI luyện tình huống vận hành mạng
\`\`\`
Tôi muốn luyện các tình huống vận hành mạng thực tế.

Hãy cho tôi 10 tình huống, ví dụ:
- loop giữa 2 switch
- user không lấy được IP
- ping được IP nhưng không resolve tên miền
- Wi-Fi chập chờn
- nhiều link giữa 2 switch
- user không ra internet
- DNS sai
- DHCP scope hết địa chỉ
- trunk sai làm WLAN/VLAN lỗi
- NAT lỗi làm chi nhánh không ra ngoài được

Với mỗi tình huống:
1. hỏi tôi nguyên nhân có thể nằm ở đâu
2. hỏi tôi nên kiểm tra gì đầu tiên
3. hỏi tôi dịch vụ/protocol nào liên quan
4. sau đó bạn mới chữa
\`\`\`

## Prompt 3 - Nhờ AI review nền tảng vận hành mạng của tôi
\`\`\`
Tôi sẽ tự giải thích STP, DHCP, DNS, NAT bằng lời của tôi.
Bạn hãy review:
1. Tôi có hiểu đúng vai trò từng thứ không?
2. Tôi có đang nhầm giữa các dịch vụ không?
3. Dịch vụ nào tôi còn hiểu mơ hồ nhất?
4. Hãy đưa cho tôi một sơ đồ tư duy ngắn gọn để nhớ chúng trong hệ thống mạng
\`\`\`

## Bài tập buổi này
- Giải thích vì sao STP cần thiết
- Mô tả luồng khi máy tính lấy IP, resolve DNS và truy cập internet
- Phân tích 5 tình huống lỗi dịch vụ mạng

## Tiêu chuẩn hoàn thành
- Hiểu network services nền tảng
- Nhìn thấy mối liên hệ giữa các dịch vụ
- Bắt đầu phân tích lỗi vận hành có hệ thống
      `
    },
    {
      id: 'net-09',
      title: 'Buổi 9: ACL, NAT security, device hardening và troubleshooting theo quy trình',
      level: 'advanced',
      content: `
# Buổi 9: ACL, NAT security, device hardening và troubleshooting theo quy trình

## Mục tiêu
- Hiểu ACL dùng để lọc lưu lượng
- Hiểu hardening thiết bị ở mức cơ bản
- Biết một số nguyên tắc bảo vệ thiết bị mạng
- Biết debug có quy trình thay vì đoán mò

## Prompt 1 - Nhờ AI dạy network security foundation
\`\`\`
Hãy dạy tôi buổi 9 như một mentor CCNA/Network Security nền tảng.

Chủ đề:
- ACL
- standard ACL
- extended ACL
- rule order
- implicit deny
- device hardening cơ bản
- SSH thay vì Telnet
- password/secret cơ bản
- port security ở mức ý tưởng
- troubleshooting methodology

Tôi muốn bạn dạy theo cấu trúc:
1. ACL là gì?
2. Standard ACL và Extended ACL khác nhau thế nào ở mức dễ hiểu?
3. Vì sao thứ tự rule rất quan trọng?
4. Implicit deny là gì?
5. Hardening thiết bị mạng nghĩa là gì?
6. Vì sao nên dùng SSH thay vì Telnet?
7. Những nguyên tắc bảo vệ router/switch cơ bản là gì?
8. Một quy trình troubleshooting mạng tốt nên đi như thế nào?
9. Cho ví dụ thực tế:
   - chặn một mạng không truy cập được server
   - chỉ cho phép một số loại traffic
   - thiết bị quản trị từ xa an toàn hơn
10. Chỉ ra lỗi phổ biến:
   - viết ACL mà không hiểu luồng traffic
   - quên implicit deny
   - debug lung tung không theo layer
11. Tạo checklist security + troubleshooting cơ bản cho CCNA

Dạy như mentor đang giúp tôi vừa hiểu bảo vệ mạng vừa biết debug chắc tay.
\`\`\`

## Prompt 2 - Nhờ AI luyện troubleshooting methodology
\`\`\`
Tôi muốn luyện debug mạng theo quy trình chuẩn.

Hãy cho tôi 10 tình huống, ví dụ:
- không ping được default gateway
- cùng VLAN nhưng không ping được nhau
- khác VLAN không nói chuyện được
- OSPF không học route
- DNS lỗi
- DHCP lỗi
- ACL chặn nhầm
- NAT sai
- trunk mismatch
- switch port shutdown

Với mỗi tình huống:
1. hỏi tôi nên debug theo layer nào trước
2. hỏi tôi kiểm tra những bước nào theo thứ tự
3. hỏi tôi dấu hiệu nào giúp khoanh vùng nhanh hơn
4. sau đó bạn mới chữa
\`\`\`

## Prompt 3 - Nhờ AI review khả năng debug mạng của tôi
\`\`\`
Tôi sẽ gửi cho bạn quy trình debug một lỗi mạng tôi tự viết.
Bạn hãy review:
1. Quy trình của tôi có logic không?
2. Tôi có đang nhảy bước quá sớm không?
3. Tôi có đang bỏ qua layer cơ bản không?
4. Tôi có hiểu flow traffic đủ rõ để viết ACL không?
5. Hãy viết lại cho tôi một quy trình troubleshooting 7 bước thật chắc
\`\`\`

## Bài tập buổi này
- Phân tích 10 tình huống lỗi mạng theo quy trình
- Tự giải thích ACL bằng ví dụ cụ thể
- Viết checklist hardening thiết bị mạng cơ bản

## Tiêu chuẩn hoàn thành
- Hiểu ACL và device hardening ở mức nền tảng
- Có quy trình troubleshooting rõ ràng
- Không còn debug mạng theo cảm tính
      `
    },
    {
      id: 'net-10',
      title: 'Buổi 10: Project cuối khóa - đọc topology, thiết kế mạng nhỏ và tự audit theo phong cách CCNA',
      level: 'advanced',
      content: `
# Buổi 10: Project cuối khóa - đọc topology, thiết kế mạng nhỏ và tự audit theo phong cách CCNA

## Mục tiêu
- Tổng hợp toàn bộ kiến thức đã học
- Đọc và phân tích một topology hoàn chỉnh
- Thiết kế một mạng nhỏ có logic
- Tự audit kiến thức và mức độ sẵn sàng học CCNA sâu hơn

## Prompt 1 - Nhờ AI dẫn tôi làm project từ đầu
\`\`\`
Hãy đóng vai mentor Network/CCNA và dẫn tôi làm project cuối khóa.

Cho tôi chọn 1 trong các bài toán:
1. Thiết kế mạng cho văn phòng nhỏ
2. Thiết kế mạng cho 1 công ty có 2 tầng
3. Thiết kế mạng cho trường học nhỏ
4. Thiết kế mạng cho doanh nghiệp có nhiều VLAN và kết nối internet
5. Phân tích một topology có switching + routing + services cơ bản

Sau khi tôi chọn, hãy dẫn tôi theo lộ trình:
1. phân tích yêu cầu
2. xác định số lượng mạng/VLAN cần có
3. tính địa chỉ IP và subnet phù hợp
4. xác định switch/router trunk/access
5. xác định inter-VLAN routing hoặc routing giữa các mạng
6. xác định DHCP/DNS/NAT nếu cần
7. xác định các điểm cần bảo mật cơ bản
8. để tôi tự làm từng bước
9. sau mỗi bước, review rất kỹ như mentor
10. cuối cùng, giúp tôi audit toàn bộ thiết kế

Mục tiêu là để tôi thật sự biết đọc topology và thiết kế một mạng nhỏ có logic.
\`\`\`

## Prompt 2 - Nhờ AI audit project cuối khóa
\`\`\`
Tôi sẽ gửi cho bạn topology hoặc bản thiết kế mạng cuối khóa của tôi.
Bạn hãy audit như mentor CCNA kỹ tính.

Đánh giá theo 8 nhóm tiêu chí:
1. Hiểu bài toán
2. Chia mạng / VLAN
3. IP addressing / subnetting
4. Switching logic
5. Routing logic
6. Network services
7. Security cơ bản
8. Troubleshooting readiness

Với mỗi nhóm:
- nêu điểm tốt
- nêu lỗi cụ thể
- giải thích vì sao là lỗi
- cho hướng sửa cụ thể
- ưu tiên lỗi nghiêm trọng trước

Cuối cùng:
- chấm điểm tổng trên thang 100
- xếp loại: yếu / ổn / tốt / rất tốt
- cho tôi 5 phần cần luyện thêm nếu muốn học CCNA sâu hơn
\`\`\`

## Prompt 3 - Nhờ AI đóng vai reviewer cuối khóa
\`\`\`
Hãy đóng vai reviewer cuối khóa về Mạng máy tính theo phong cách CCNA.

Tôi sẽ gửi topology, sơ đồ IP và phần giải thích của tôi.
Bạn phải review như thật, không nể nang.

Cách review mong muốn:
- đánh giá tư duy flow mạng
- đánh giá subnetting/IP addressing
- đánh giá switching và VLAN
- đánh giá routing
- đánh giá services và security cơ bản
- đánh giá khả năng debug sự cố
- chỉ rõ điểm nào chứng tỏ tôi đã hiểu network foundation
- chỉ rõ điểm nào cho thấy tôi vẫn đang học thuộc mà chưa hiểu bản chất

Cuối cùng, hãy nói thật:
- tôi đã đủ nền tảng để học CCNA nghiêm túc hơn chưa?
- nếu chưa, tôi cần luyện thêm phần nào?
\`\`\`

## Gợi ý project
Chọn 1 trong các bài toán:
1. Văn phòng nhỏ có 3 phòng ban
2. Doanh nghiệp nhỏ có guest Wi-Fi + nội bộ
3. Trường học nhỏ có nhiều VLAN
4. Topology nhiều switch + router + internet
5. Lab phân tích routing + services

## Yêu cầu bắt buộc
- Có sơ đồ logic mạng
- Có IP addressing rõ ràng
- Có VLAN hoặc ít nhất nhiều mạng logic
- Có routing giữa các mạng nếu phù hợp
- Có dịch vụ cơ bản như DHCP/DNS/NAT nếu bài toán cần
- Có checklist troubleshooting cơ bản

## Checklist tự đánh giá
- Tôi có hiểu flow mạng của topology này không?
- Chia subnet/VLAN có hợp lý không?
- Routing có rõ ràng không?
- Tôi có hiểu user đi ra internet như thế nào không?
- Tôi có thể debug theo layer không?
- Tôi có thể giải thích vì sao từng thiết bị hoặc dịch vụ tồn tại không?

## Bài tập cuối khóa
- Chọn một bài toán mạng nhỏ
- Thiết kế topology logic
- Chia địa chỉ IP
- Xác định VLAN/routing/services
- Tự audit bằng AI theo các prompt trên
- Hoàn thiện bản final đến khi đủ chắc
      `
    }
  ]
};