import { motion } from 'motion/react';
import { Task } from '../types';
import { cn } from '../lib/utils';
import Roadmap from './Roadmap';
import { lessons } from '../data/lessons';
import {
  Bot,
  Sparkles,
  ExternalLink,
  MessageSquare,
  Search,
  Users,
  ArrowRight,
  BookOpen,
  Clock3,
  CheckCircle2,
} from 'lucide-react';

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
  onViewAllTasks,
}: DashboardProps) {
  const completedTasks = tasks.filter((t) => t.status === 'done').length;
  const inProgressTasks = tasks.filter((t) => t.status === 'in-progress').length;
  const totalTasks = tasks.length;

  const totalLessons = lessons.length;
  const completedLessonsCount = completedLessons.length;
  const progressPercent =
    totalLessons > 0 ? Math.round((completedLessonsCount / totalLessons) * 100) : 0;

  const nextLesson =
    lessons.find((lesson) => !completedLessons.includes(lesson.id)) || lessons[0];

  const recentTasks = tasks.slice(0, 5);

  const aiTools = [
    {
      name: 'Claude',
      company: 'Anthropic',
      description:
        'Mạnh về coding thực tế, viết code sạch, xử lý codebase lớn và reasoning tốt.',
      url: 'https://claude.ai',
      icon: <Bot className="text-amber-600" size={22} />,
      color: 'bg-amber-50 border-amber-200 hover:border-amber-400',
    },
    {
      name: 'Gemini',
      company: 'Google',
      description:
        'Mạnh về toán học, reasoning và context lớn. Hợp cho học tập và phân tích.',
      url: 'https://gemini.google.com',
      icon: <Sparkles className="text-blue-600" size={22} />,
      color: 'bg-blue-50 border-blue-200 hover:border-blue-400',
    },
    {
      name: 'Grok',
      company: 'xAI',
      description:
        'Mạnh reasoning, toán và coding benchmark. Phong cách tự nhiên hơn.',
      url: 'https://grok.x.ai',
      icon: <Bot className="text-purple-600" size={22} />,
      color: 'bg-purple-50 border-purple-200 hover:border-purple-400',
    },
    {
      name: 'ChatGPT',
      company: 'OpenAI',
      description:
        'Đa năng, giỏi giải thích code, debug, lên ý tưởng và học công nghệ mới.',
      url: 'https://chat.openai.com',
      icon: <MessageSquare className="text-emerald-600" size={22} />,
      color: 'bg-emerald-50 border-emerald-200 hover:border-emerald-400',
    },
    {
      name: 'DeepSeek',
      company: 'DeepSeek',
      description:
        'Rất mạnh về toán, coding logic và bài tập thuật toán theo kiểu drill.',
      url: 'https://chat.deepseek.com',
      icon: <Bot className="text-cyan-600" size={22} />,
      color: 'bg-cyan-50 border-cyan-200 hover:border-cyan-400',
    },
    {
      name: 'Perplexity',
      company: 'Perplexity',
      description:
        'Mạnh tìm kiếm có nguồn, hợp để research công nghệ và tìm tài liệu nhanh.',
      url: 'https://www.perplexity.ai',
      icon: <Search className="text-indigo-600" size={22} />,
      color: 'bg-indigo-50 border-indigo-200 hover:border-indigo-400',
    },
    {
      name: 'Copilot',
      company: 'Microsoft',
      description:
        'Tích hợp mạnh trong IDE, hỗ trợ autocomplete, refactor và flow coding hằng ngày.',
      url: 'https://copilot.microsoft.com',
      icon: <Users className="text-red-600" size={22} />,
      color: 'bg-red-50 border-red-200 hover:border-red-400',
    },
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
        <StatCard
          label="Tổng nhiệm vụ"
          value={totalTasks.toString()}
          sub={`${inProgressTasks} đang thực hiện`}
        />
        <StatCard
          label="Nhiệm vụ hoàn thành"
          value={completedTasks.toString()}
          sub="Tiến độ công việc"
        />
        <StatCard
          label="Tiến độ học tập"
          value={`${progressPercent}%`}
          sub={`${completedLessonsCount}/${totalLessons} chủ đề đã học`}
        />
      </div>

      {/* Learning focus + recent tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8">
        {/* Continue learning */}
        <div className="border border-ink/20 rounded-2xl bg-white/50 shadow-sm p-7">
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <p className="text-[10px] uppercase tracking-widest opacity-50 mb-2">
                Tiếp tục học
              </p>
              <h3 className="font-heading font-bold text-2xl flex items-center gap-2">
                <BookOpen size={22} />
                Học theo lộ trình
              </h3>
              <p className="text-sm text-ink/60 mt-2 max-w-xl">
                Mỗi lesson được thiết kế theo kiểu học cùng AI mentor, có prompt,
                bài tập và checklist rõ ràng.
              </p>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-xs bg-ink/5 rounded-full px-3 py-1.5">
              <Clock3 size={14} className="opacity-60" />
              <span className="opacity-70">Roadmap đang mở rộng</span>
            </div>
          </div>

          {nextLesson ? (
            <div className="rounded-2xl border border-ink/15 bg-ink/[0.03] p-5">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-50 mb-2">
                    Chủ đề tiếp theo
                  </p>
                  <h4 className="font-bold text-xl">{nextLesson.title}</h4>
                  <p className="text-sm text-ink/65 mt-2 leading-relaxed">
                    {nextLesson.description}
                  </p>
                </div>

                {completedLessonsCount > 0 && (
                  <div className="flex items-center gap-1 text-[10px] bg-green-100 text-green-700 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider whitespace-nowrap">
                    <CheckCircle2 size={12} />
                    {completedLessonsCount} đã xong
                  </div>
                )}
              </div>

              <div className="h-2 rounded-full bg-ink/10 overflow-hidden mb-5">
                <div
                  className="h-full bg-ink rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              {onSelectLesson && (
                <button
                  onClick={() => onSelectLesson(nextLesson.id)}
                  className="inline-flex items-center gap-2 bg-ink text-white px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-ink/90 transition-colors"
                >
                  Mở lesson này
                  <ArrowRight size={16} />
                </button>
              )}
            </div>
          ) : (
            <div className="rounded-2xl border border-green-200 bg-green-50 p-5 text-green-700">
              Bạn đã hoàn thành toàn bộ lộ trình hiện tại.
            </div>
          )}
        </div>

        {/* Recent tasks */}
        <div className="space-y-4">
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
            <div className="grid grid-cols-[40px_1.5fr_1fr_1fr] p-4 border-b border-ink/20 bg-ink/5">
              <div className="col-header">ID</div>
              <div className="col-header">Tên nhiệm vụ</div>
              <div className="col-header">Trạng thái</div>
              <div className="col-header">Ưu tiên</div>
            </div>

            {recentTasks.length > 0 ? (
              recentTasks.map((task, i) => (
                <div key={task.id} className="data-row group">
                  <div className="data-value opacity-50 group-hover:opacity-100">
                    0{i + 1}
                  </div>
                  <div className="font-medium truncate pr-4">{task.title}</div>
                  <div>
                    <span
                      className={cn(
                        'text-[10px] px-2 py-1 rounded-full uppercase font-bold tracking-tighter transition-colors',
                        task.status === 'done'
                          ? 'bg-green-100 text-green-700 group-hover:bg-green-800 group-hover:text-green-100'
                          : task.status === 'in-progress'
                          ? 'bg-blue-100 text-blue-700 group-hover:bg-blue-800 group-hover:text-blue-100'
                          : 'bg-gray-100 text-gray-700 group-hover:bg-gray-800 group-hover:text-gray-100'
                      )}
                    >
                      {task.status === 'done'
                        ? 'Hoàn thành'
                        : task.status === 'in-progress'
                        ? 'Đang làm'
                        : 'Cần làm'}
                    </span>
                  </div>
                  <div className="data-value text-xs uppercase opacity-70 group-hover:opacity-100">
                    {task.priority === 'high'
                      ? 'Cao'
                      : task.priority === 'medium'
                      ? 'Trung bình'
                      : 'Thấp'}
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

      {/* Roadmap full width */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-heading font-bold text-2xl">Roadmap học tập</h3>
            <p className="text-sm text-ink/60 mt-1">
              Toàn bộ lộ trình từ nền tảng đến nâng cao, gồm cả Networking / CCNA.
            </p>
          </div>
        </div>

        <Roadmap completedLessons={completedLessons} onSelectLesson={onSelectLesson} />
      </section>

      {/* AI tools */}
      <section className="mt-6">
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
                <ExternalLink
                  size={18}
                  className="opacity-40 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <h4 className="font-bold text-lg mb-1">{tool.name}</h4>
              <p className="text-[10px] uppercase tracking-widest opacity-50 mb-3">
                {tool.company}
              </p>
              <p className="text-sm opacity-75 leading-relaxed flex-1">
                {tool.description}
              </p>
            </a>
          ))}
        </div>

        <p className="text-center text-xs opacity-50 mt-6">
          Hầu hết đều có tier miễn phí mạnh. Nên kết hợp nhiều AI tùy theo nhiệm vụ.
        </p>
      </section>
    </motion.div>
  );
}