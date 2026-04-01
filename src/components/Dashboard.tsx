import { motion } from 'motion/react';
import { Task } from '../types';
import { cn } from '../lib/utils';
import Roadmap from './Roadmap';
import { lessons } from '../data/lessons';
import { Bot, Sparkles, ExternalLink, MessageSquare, Search, Users } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string;
  sub: string;
}

function StatCard({ label, value, sub }: StatCardProps) {
  return (
    <div className="p-6 border border-ink/20 rounded-2xl bg-white/40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <p className="text-[10px] uppercase tracking-widest opacity-50 mb-1">{label}</p>
      <p className="text-3xl font-mono font-bold">{value}</p>
      <p className="text-[10px] mt-2 opacity-40">{sub}</p>
    </div>
  );
}

interface DashboardProps {
  tasks: Task[];
  completedLessons?: string[];
  onSelectLesson?: (id: string) => void;
  onViewAllTasks?: () => void;
}

export default function Dashboard({ 
  tasks, 
  completedLessons = [], 
  onSelectLesson, 
  onViewAllTasks 
}: DashboardProps) {
  const completedTasks = tasks.filter(t => t.status === 'done').length;
  const inProgressTasks = tasks.filter(t => t.status === 'in-progress').length;
  const totalTasks = tasks.length;
  const totalLessons = lessons.length;
  const completedLessonsCount = completedLessons.length;
  const progressPercent = totalLessons > 0 ? Math.round((completedLessonsCount / totalLessons) * 100) : 0;

  const aiTools = [
    {
      name: 'Claude',
      company: 'Anthropic',
      description: 'Mạnh nhất về coding thực tế, viết code sạch, xử lý codebase lớn và toán phức tạp.',
      url: 'https://claude.ai',
      icon: <Bot className="text-amber-600" size={22} />,
      color: 'bg-amber-50 border-amber-200 hover:border-amber-400'
    },
    {
      name: 'Gemini',
      company: 'Google',
      description: 'Xuất sắc về toán học, reasoning và context lớn. Tích hợp tốt với công cụ Google.',
      url: 'https://gemini.google.com',
      icon: <Sparkles className="text-blue-600" size={22} />,
      color: 'bg-blue-50 border-blue-200 hover:border-blue-400'
    },
    {
      name: 'Grok',
      company: 'xAI',
      description: 'Mạnh reasoning, toán và coding benchmark. Phong cách tự nhiên, ít kiểm duyệt.',
      url: 'https://grok.x.ai',
      icon: <Bot className="text-purple-600" size={22} />,
      color: 'bg-purple-50 border-purple-200 hover:border-purple-400'
    },
    {
      name: 'ChatGPT',
      company: 'OpenAI',
      description: 'Đa năng, giỏi giải thích code, debug và các bài toán lập trình.',
      url: 'https://chat.openai.com',
      icon: <MessageSquare className="text-emerald-600" size={22} />,
      color: 'bg-emerald-50 border-emerald-200 hover:border-emerald-400'
    },
    {
      name: 'DeepSeek',
      company: 'DeepSeek',
      description: 'Chuyên gia toán học & coding logic. Hiệu suất cao, cực kỳ tiết kiệm (rất mạnh AIME, GSM8K).',
      url: 'https://chat.deepseek.com',
      icon: <Bot className="text-cyan-600" size={22} />,
      color: 'bg-cyan-50 border-cyan-200 hover:border-cyan-400'
    },
    {
      name: 'Perplexity AI',
      company: 'Perplexity',
      description: 'Tìm kiếm + coding chính xác, trả lời có nguồn tham chiếu rõ ràng. Tốt cho nghiên cứu code.',
      url: 'https://www.perplexity.ai',
      icon: <Search className="text-indigo-600" size={22} />,
      color: 'bg-indigo-50 border-indigo-200 hover:border-indigo-400'
    },
    {
      name: 'Copilot',
      company: 'Microsoft',
      description: 'Tích hợp sâu GitHub, VS Code. Mạnh hỗ trợ coding thực tế và tự động hóa.',
      url: 'https://copilot.microsoft.com',
      icon: <Users className="text-red-600" size={22} />,
      color: 'bg-red-50 border-red-200 hover:border-red-400'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8 max-w-6xl mx-auto pb-20"
    >
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard label="Tổng nhiệm vụ" value={totalTasks.toString()} sub={`${inProgressTasks} đang thực hiện`} />
        <StatCard label="Nhiệm vụ hoàn thành" value={completedTasks.toString()} sub="Tiến độ công việc" />
        <StatCard label="Tiến độ học tập" value={`${progressPercent}%`} sub={`${completedLessonsCount}/${totalLessons} chủ đề đã học`} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cột trái: Lộ trình học tập */}
        <div className="lg:col-span-1">
          <Roadmap completedLessons={completedLessons} onSelectLesson={onSelectLesson} />
        </div>

        {/* Cột phải: Hoạt động gần đây */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-heading font-bold text-xl">Nhiệm vụ gần đây</h3>
            {onViewAllTasks && (
              <button
                onClick={onViewAllTasks}
                className="text-[10px] font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity"
              >
                Xem tất cả &rarr;
              </button>
            )}
          </div>

          <div className="border border-ink/20 rounded-2xl overflow-hidden bg-white/50 shadow-sm">
            {/* Header bảng */}
            <div className="grid grid-cols-[40px_1.5fr_1fr_1fr] p-4 border-b border-ink/20 bg-ink/5">
              <div className="col-header">ID</div>
              <div className="col-header">Tên nhiệm vụ</div>
              <div className="col-header">Trạng thái</div>
              <div className="col-header">Ưu tiên</div>
            </div>

            {tasks.length > 0 ? (
              tasks.slice(0, 5).map((task, i) => (
                <div key={task.id} className="data-row group">
                  <div className="data-value opacity-50 group-hover:opacity-100">0{i+1}</div>
                  <div className="font-medium truncate pr-4">{task.title}</div>
                  <div>
                    <span className={cn(
                      "text-[10px] px-2 py-1 rounded-full uppercase font-bold tracking-tighter transition-colors",
                      task.status === 'done' ? "bg-green-100 text-green-700 group-hover:bg-green-800 group-hover:text-green-100" :
                      task.status === 'in-progress' ? "bg-blue-100 text-blue-700 group-hover:bg-blue-800 group-hover:text-blue-100" : 
                      "bg-gray-100 text-gray-700 group-hover:bg-gray-800 group-hover:text-gray-100"
                    )}>
                      {task.status === 'done' ? 'Hoàn thành' : task.status === 'in-progress' ? 'Đang làm' : 'Cần làm'}
                    </span>
                  </div>
                  <div className="data-value text-xs uppercase opacity-70 group-hover:opacity-100">
                    {task.priority === 'high' ? 'Cao' : task.priority === 'medium' ? 'Trung bình' : 'Thấp'}
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-ink/50">
                Chưa có nhiệm vụ nào. Hãy tạo nhiệm vụ mới trong Bảng công việc.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Section Trợ lý AI mới */}
      <div className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-heading font-bold text-xl flex items-center gap-2">
            <Sparkles className="text-blue-600" size={24} />
            Trợ lý AI miễn phí (Toán & Coding)
          </h3>
          <p className="text-sm opacity-60">Sắp xếp theo hiệu suất toán & coding 2026</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {aiTools.map((tool) => (
            <a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col p-5 rounded-2xl border transition-all duration-300 ${tool.color} hover:shadow-xl hover:-translate-y-1`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                  {tool.icon}
                </div>
                <ExternalLink size={18} className="opacity-40 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="font-bold text-lg mb-1">{tool.name}</h4>
              <p className="text-[10px] uppercase tracking-widest opacity-50 mb-3">{tool.company}</p>
              <p className="text-sm opacity-75 leading-relaxed flex-1">
                {tool.description}
              </p>
            </a>
          ))}
        </div>

        <p className="text-center text-xs opacity-50 mt-6">
          Hầu hết đều có tier miễn phí mạnh. Nên kết hợp nhiều AI tùy theo nhiệm vụ (Claude cho code lớn, DeepSeek cho toán nhanh...).
        </p>
      </div>
    </motion.div>
  );
}