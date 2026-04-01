import { motion } from 'motion/react';
import { Bot, Sparkles, ExternalLink, MessageSquare, Search, Users } from 'lucide-react';

export default function AIArchitect() {
  const aiTools = [
    {
      name: 'Claude',
      company: 'Anthropic',
      description: 'Mạnh nhất về coding, đọc code lớn, phân tích kiến trúc và viết code sạch, an toàn. Xuất sắc toán & reasoning phức tạp.',
      url: 'https://claude.ai',
      icon: <Bot className="text-amber-600" size={24} />,
      color: 'bg-amber-50 border-amber-200 hover:border-amber-400'
    },
    {
      name: 'Gemini',
      company: 'Google',
      description: 'Hiệu suất cao về toán, reasoning và coding. Context siêu lớn, tích hợp tốt với Google ecosystem.',
      url: 'https://gemini.google.com',
      icon: <Sparkles className="text-blue-600" size={24} />,
      color: 'bg-blue-50 border-blue-200 hover:border-blue-400'
    },
    {
      name: 'Grok',
      company: 'xAI',
      description: 'Mạnh về reasoning, toán học và coding thực tế. Phong cách tự nhiên, ít kiểm duyệt, tốc độ tốt.',
      url: 'https://grok.x.ai',
      icon: <Bot className="text-purple-600" size={24} />,
      color: 'bg-purple-50 border-purple-200 hover:border-purple-400'
    },
    {
      name: 'ChatGPT',
      company: 'OpenAI',
      description: 'Trợ lý đa năng, giỏi giải thích code, debug, toán và học lập trình. Ecosystem phong phú.',
      url: 'https://chat.openai.com',
      icon: <MessageSquare className="text-emerald-600" size={24} />,
      color: 'bg-emerald-50 border-emerald-200 hover:border-emerald-400'
    },
    {
      name: 'DeepSeek',
      company: 'DeepSeek',
      description: 'Chuyên gia toán học & coding logic. Hiệu suất cực cao với chi phí thấp (rất mạnh AIME, GSM8K).',
      url: 'https://chat.deepseek.com',
      icon: <Bot className="text-cyan-600" size={24} />,
      color: 'bg-cyan-50 border-cyan-200 hover:border-cyan-400'
    },
    {
      name: 'Perplexity AI',
      company: 'Perplexity',
      description: 'Tìm kiếm + coding chính xác, trả lời có nguồn tham chiếu rõ ràng. Rất tốt cho research code.',
      url: 'https://www.perplexity.ai',
      icon: <Search className="text-indigo-600" size={24} />,
      color: 'bg-indigo-50 border-indigo-200 hover:border-indigo-400'
    },
    {
      name: 'Copilot',
      company: 'Microsoft',
      description: 'Tích hợp sâu với GitHub, VS Code, Office. Mạnh coding thực tế và tự động hóa công việc.',
      url: 'https://copilot.microsoft.com',
      icon: <Users className="text-red-600" size={24} />,
      color: 'bg-red-50 border-red-200 hover:border-red-400'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      <div className="text-center space-y-4 mb-12">
        <h3 className="font-heading font-bold text-4xl">Trợ lý AI Miễn phí & Trực tuyến</h3>
        <p className="text-ink/60 max-w-xl mx-auto">
          Các AI chatbot mạnh về toán học và lập trình (sắp xếp theo hiệu suất coding & toán từ cao đến thấp).
          Hầu hết đều có tier miễn phí sử dụng tốt.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {aiTools.map((tool) => (
          <a
            key={tool.name}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col p-6 rounded-2xl border transition-all duration-300 group ${tool.color} hover:shadow-xl hover:-translate-y-1`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                {tool.icon}
              </div>
              <ExternalLink size={20} className="opacity-40 group-hover:opacity-100 transition-opacity" />
            </div>
            <h4 className="font-bold text-xl mb-1">{tool.name}</h4>
            <p className="text-[10px] uppercase tracking-widest opacity-50 mb-4">{tool.company}</p>
            <p className="text-sm opacity-80 leading-relaxed flex-1">
              {tool.description}
            </p>
          </a>
        ))}
      </div>

      <div className="mt-12 p-8 border border-ink/20 rounded-2xl bg-white/50 shadow-sm hover:shadow-md transition-shadow">
        <h4 className="font-bold mb-6 flex items-center gap-2 text-lg">
          <Sparkles size={20} className="text-blue-600" />
          Mẹo sử dụng AI hiệu quả cho toán & coding
        </h4>
        <ul className="space-y-4 text-sm opacity-80 list-none">
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-ink mt-2 shrink-0" />
            <span><strong>Cung cấp ngữ cảnh rõ ràng:</strong> Nêu framework, phiên bản, input/output mong muốn.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-ink mt-2 shrink-0" />
            <span><strong>Chia nhỏ nhiệm vụ:</strong> Hỏi từng bước (plan → code → test → optimize).</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-ink mt-2 shrink-0" />
            <span><strong>Yêu cầu giải thích + test case:</strong> Luôn hỏi "giải thích từng dòng" và đưa test case.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-ink mt-2 shrink-0" />
            <span><strong>Kết hợp nhiều AI:</strong> Dùng Claude/Gemini cho code lớn, DeepSeek cho toán, Perplexity cho research.</span>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}