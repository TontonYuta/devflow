import { motion } from 'motion/react';
import { 
  Code2, Zap, Cpu, Palette, BrainCircuit, CheckCircle2, Circle, 
  Shield, Gauge, FileCode, GitBranch, TestTube, Server, Database, 
  Layers, Sparkles, ExternalLink 
} from 'lucide-react';
import { cn } from '../lib/utils';

interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isAI?: boolean;        // Đánh dấu bước AI
}

const roadmapData: RoadmapStep[] = [
  {
    id: 'html',
    title: 'HTML Cơ Bản',
    description: 'Nắm vững cấu trúc và Semantic HTML',
    icon: <Code2 size={20} />
  },
  {
    id: 'css',
    title: 'CSS & Bố cục',
    description: 'Làm chủ Flexbox, Grid và Responsive Design',
    icon: <Palette size={20} />
  },
  {
    id: 'js',
    title: 'JavaScript Cốt lõi',
    description: 'ES6+, Async/Await, DOM Manipulation',
    icon: <Cpu size={20} />
  },
  {
    id: 'typescript',
    title: 'TypeScript',
    description: 'Kiểu dữ liệu tĩnh, Interfaces, Generics',
    icon: <FileCode size={20} />
  },
  {
    id: 'react',
    title: 'React 19 & TypeScript',
    description: 'Components, Hooks, State Management',
    icon: <Code2 size={20} />
  },
  {
    id: 'nextjs',
    title: 'Next.js (Full-stack)',
    description: 'App Router, Server Components, Server Actions',
    icon: <Layers size={20} />
  },
  {
    id: 'tailwind',
    title: 'Tailwind CSS 4',
    description: 'Utility-first styling, @theme, Dark mode',
    icon: <Zap size={20} />
  },
  {
    id: 'nodejs',
    title: 'Node.js & Express',
    description: 'Xây dựng RESTful API, Middleware, Authentication',
    icon: <Server size={20} />
  },
  {
    id: 'database',
    title: 'Cơ sở dữ liệu & ORM',
    description: 'SQL, NoSQL, Prisma, MongoDB',
    icon: <Database size={20} />
  },
  {
    id: 'git',
    title: 'Git & GitHub',
    description: 'Version Control, Branching, Collaboration',
    icon: <GitBranch size={20} />
  },
  {
    id: 'testing',
    title: 'Kiểm thử (Testing)',
    description: 'Unit Test, Integration, E2E với React Testing Library',
    icon: <TestTube size={20} />
  },
  {
    id: 'security',
    title: 'Bảo mật Web',
    description: 'XSS, CSRF, Authentication, Authorization',
    icon: <Shield size={20} />
  },
  {
    id: 'optimization',
    title: 'Tối ưu Hiệu suất',
    description: 'Core Web Vitals, Lazy Loading, Code Splitting',
    icon: <Gauge size={20} />
  },
  {
    id: 'ai',
    title: 'Tư duy AI & Trợ lý AI',
    description: 'Prompt Engineering, Sử dụng AI để code nhanh hơn, debug và học tập',
    icon: <BrainCircuit size={20} />,
    isAI: true
  }
];

interface RoadmapProps {
  completedLessons?: string[];
  onSelectLesson?: (id: string) => void;
}

export default function Roadmap({ completedLessons = [], onSelectLesson }: RoadmapProps) {
  const getStepStatus = (stepId: string, index: number) => {
    if (completedLessons.includes(stepId)) return 'completed';
    
    const firstUncompletedIndex = roadmapData.findIndex(s => !completedLessons.includes(s.id));
    if (index === firstUncompletedIndex) return 'current';
    
    return 'upcoming';
  };

  return (
    <div className="bg-white/60 border border-ink/20 rounded-2xl p-8 shadow-sm h-full">
      <div className="mb-8">
        <h3 className="font-heading font-bold text-2xl">Lộ trình Học tập</h3>
        <p className="text-sm text-ink/60 mt-1">Hành trình trở thành Full-stack Developer hiện đại</p>
      </div>

      <div className="relative">
        {/* Đường kẻ dọc */}
        <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-ink/10 via-ink/10 to-transparent" />

        <div className="space-y-8">
          {roadmapData.map((step, index) => {
            const status = getStepStatus(step.id, index);
            const isAI = step.isAI;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08 }}
                onClick={() => onSelectLesson && onSelectLesson(step.id)}
                className={cn(
                  "relative flex gap-6 items-start group cursor-pointer hover:translate-x-2 transition-all duration-300 rounded-xl p-2 -mx-2",
                  status === 'upcoming' && "opacity-60",
                  isAI && "bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-100"
                )}
              >
                {/* Icon Status */}
                <div className={cn(
                  "relative z-10 w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border-4 border-white transition-all duration-300 shadow-sm",
                  status === 'completed' ? "bg-green-500 text-white" :
                  status === 'current' ? "bg-blue-600 text-white ring-4 ring-blue-500/30" :
                  "bg-white border-ink/20 text-ink/50 group-hover:text-ink/70"
                )}>
                  {status === 'completed' ? (
                    <CheckCircle2 size={26} />
                  ) : status === 'current' ? (
                    step.icon
                  ) : (
                    <Circle size={24} />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className={cn(
                      "font-bold text-lg transition-colors",
                      status === 'current' ? "text-blue-600" : 
                      isAI ? "text-purple-700" : "text-ink"
                    )}>
                      {step.title}
                    </h4>

                    {isAI && (
                      <div className="flex items-center gap-1 text-[10px] bg-purple-100 text-purple-700 px-2.5 py-0.5 rounded-full font-medium">
                        <Sparkles size={13} />
                        HOT
                      </div>
                    )}

                    <span className={cn(
                      "text-[10px] px-3 py-0.5 rounded-full uppercase font-bold tracking-wider ml-auto",
                      status === 'completed' ? "bg-green-100 text-green-700" :
                      status === 'current' ? "bg-blue-100 text-blue-700" :
                      "bg-ink/5 text-ink/50"
                    )}>
                      {status === 'completed' ? '✓ Hoàn thành' :
                       status === 'current' ? 'Đang học' : 'Sắp tới'}
                    </span>
                  </div>

                  <p className="text-sm text-ink/70 leading-relaxed pr-4">
                    {step.description}
                  </p>

                  {/* Link AI Tools cho bước AI */}
                  {isAI && status !== 'upcoming' && (
                    <div className="mt-4 flex items-center gap-2 text-xs text-purple-600 hover:text-purple-700 transition-colors">
                      <ExternalLink size={15} />
                      <span className="font-medium">Khám phá trợ lý AI mạnh về coding & toán →</span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}