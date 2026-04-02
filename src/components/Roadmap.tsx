import { motion } from 'motion/react';
import {
  Code2,
  Zap,
  Cpu,
  Palette,
  BrainCircuit,
  CheckCircle2,
  Circle,
  Shield,
  Gauge,
  FileCode,
  GitBranch,
  TestTube,
  Server,
  Database,
  Layers,
  Sparkles,
  ExternalLink,
  Network,
} from 'lucide-react';
import { cn } from '../lib/utils';

interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isAI?: boolean;
  isInfra?: boolean;
  isSecurity?: boolean;
}

const roadmapData: RoadmapStep[] = [
  {
    id: 'html',
    title: 'HTML Cơ Bản',
    description: 'Nắm vững cấu trúc trang web, semantic HTML và tư duy markup đúng chuẩn.',
    icon: <Code2 size={20} />,
  },
  {
    id: 'css',
    title: 'CSS & Bố cục',
    description: 'Làm chủ layout, spacing, responsive và cách tạo giao diện dễ đọc, dễ mở rộng.',
    icon: <Palette size={20} />,
  },
  {
    id: 'js',
    title: 'JavaScript Cốt lõi',
    description: 'ES6+, DOM, async/await, array methods và tư duy lập trình nền tảng.',
    icon: <Cpu size={20} />,
  },
  {
    id: 'git',
    title: 'Git & GitHub',
    description: 'Version control, branching, collaboration và workflow làm việc như dev thật.',
    icon: <GitBranch size={20} />,
  },
  {
    id: 'typescript',
    title: 'TypeScript',
    description: 'Kiểu dữ liệu tĩnh, interfaces, generics và tư duy type-safe trong dự án thật.',
    icon: <FileCode size={20} />,
  },
  {
    id: 'react',
    title: 'React 19 & TypeScript',
    description: 'Component, state, hooks, data flow và cách xây app React có cấu trúc rõ ràng.',
    icon: <Code2 size={20} />,
  },
  {
    id: 'tailwind',
    title: 'Tailwind CSS 4',
    description: 'Utility-first styling, @theme, design tokens và xây UI nhanh nhưng vẫn sạch.',
    icon: <Zap size={20} />,
  },
  {
    id: 'nextjs',
    title: 'Next.js (Full-stack)',
    description: 'App Router, Server Components, metadata, form flow và app full-stack hiện đại.',
    icon: <Layers size={20} />,
  },
  {
    id: 'nodejs',
    title: 'Node.js & Express',
    description: 'RESTful API, middleware, auth, routing và backend foundation thực chiến.',
    icon: <Server size={20} />,
  },
  {
    id: 'database',
    title: 'Cơ sở dữ liệu & ORM',
    description: 'SQL, NoSQL, Prisma, data modeling và tư duy lưu trữ dữ liệu đúng cách.',
    icon: <Database size={20} />,
  },
  {
    id: 'networking-ccna',
    title: 'Mạng máy tính (CCNA)',
    description: 'IP, subnetting, VLAN, routing, NAT, DNS và troubleshooting mạng theo tư duy CCNA.',
    icon: <Network size={20} />,
    isInfra: true,
  },
  {
    id: 'cybersecurity-foundation',
    title: 'CyberSecurity',
    description: 'Security foundation, IAM, system/network/web security, logging và incident mindset.',
    icon: <Shield size={20} />,
    isSecurity: true,
  },
  {
    id: 'testing',
    title: 'Kiểm thử (Testing)',
    description: 'Unit, integration, E2E testing và chiến lược test có giá trị trong dự án thật.',
    icon: <TestTube size={20} />,
  },
  {
    id: 'optimization',
    title: 'Tối ưu Hiệu suất',
    description: 'Core Web Vitals, lazy loading, render performance và audit tối ưu có hệ thống.',
    icon: <Gauge size={20} />,
  },
  {
    id: 'ai',
    title: 'Tư duy AI & Trợ lý AI',
    description: 'Prompting, debug với AI, review cùng AI và workflow học/code hiệu quả hơn.',
    icon: <BrainCircuit size={20} />,
    isAI: true,
  },
];

interface RoadmapProps {
  completedLessons?: string[];
  onSelectLesson?: (id: string) => void;
}

export default function Roadmap({
  completedLessons = [],
  onSelectLesson,
}: RoadmapProps) {
  const getStepStatus = (stepId: string, index: number) => {
    if (completedLessons.includes(stepId)) return 'completed';

    const firstUncompletedIndex = roadmapData.findIndex(
      (s) => !completedLessons.includes(s.id)
    );

    if (index === firstUncompletedIndex) return 'current';
    return 'upcoming';
  };

  return (
    <div className="bg-white/60 border border-ink/20 rounded-2xl p-8 shadow-sm h-full">
      <div className="mb-8">
        <h3 className="font-heading font-bold text-2xl">Lộ trình Học tập</h3>
        <p className="text-sm text-ink/60 mt-1">
          Hành trình trở thành Full-stack Developer hiện đại với nền tảng hạ tầng,
          bảo mật và AI hỗ trợ.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-ink/10 via-ink/10 to-transparent" />

        <div className="space-y-8">
          {roadmapData.map((step, index) => {
            const status = getStepStatus(step.id, index);
            const isAI = step.isAI;
            const isInfra = step.isInfra;
            const isSecurity = step.isSecurity;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.06 }}
                onClick={() => onSelectLesson && onSelectLesson(step.id)}
                className={cn(
                  'relative flex gap-6 items-start group cursor-pointer hover:translate-x-2 transition-all duration-300 rounded-xl p-2 -mx-2',
                  status === 'upcoming' && 'opacity-60',
                  isAI &&
                    'bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-100',
                  isInfra &&
                    'bg-gradient-to-r from-cyan-50 to-sky-50 border border-cyan-100',
                  isSecurity &&
                    'bg-gradient-to-r from-red-50 to-orange-50 border border-red-100'
                )}
              >
                <div
                  className={cn(
                    'relative z-10 w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border-4 border-white transition-all duration-300 shadow-sm',
                    status === 'completed'
                      ? 'bg-green-500 text-white'
                      : status === 'current'
                      ? isInfra
                        ? 'bg-cyan-600 text-white ring-4 ring-cyan-500/30'
                        : isSecurity
                        ? 'bg-red-600 text-white ring-4 ring-red-500/30'
                        : isAI
                        ? 'bg-purple-600 text-white ring-4 ring-purple-500/30'
                        : 'bg-blue-600 text-white ring-4 ring-blue-500/30'
                      : 'bg-white border-ink/20 text-ink/50 group-hover:text-ink/70'
                  )}
                >
                  {status === 'completed' ? (
                    <CheckCircle2 size={26} />
                  ) : status === 'current' ? (
                    step.icon
                  ) : (
                    <Circle size={24} />
                  )}
                </div>

                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h4
                      className={cn(
                        'font-bold text-lg transition-colors',
                        status === 'current'
                          ? isInfra
                            ? 'text-cyan-700'
                            : isSecurity
                            ? 'text-red-700'
                            : isAI
                            ? 'text-purple-700'
                            : 'text-blue-600'
                          : isAI
                          ? 'text-purple-700'
                          : isInfra
                          ? 'text-cyan-700'
                          : isSecurity
                          ? 'text-red-700'
                          : 'text-ink'
                      )}
                    >
                      {step.title}
                    </h4>

                    {isAI && (
                      <div className="flex items-center gap-1 text-[10px] bg-purple-100 text-purple-700 px-2.5 py-0.5 rounded-full font-medium">
                        <Sparkles size={13} />
                        META-SKILL
                      </div>
                    )}

                    {isInfra && (
                      <div className="flex items-center gap-1 text-[10px] bg-cyan-100 text-cyan-700 px-2.5 py-0.5 rounded-full font-medium">
                        <Network size={13} />
                        HẠ TẦNG
                      </div>
                    )}

                    {isSecurity && (
                      <div className="flex items-center gap-1 text-[10px] bg-red-100 text-red-700 px-2.5 py-0.5 rounded-full font-medium">
                        <Shield size={13} />
                        SECURITY
                      </div>
                    )}

                    <span
                      className={cn(
                        'text-[10px] px-3 py-0.5 rounded-full uppercase font-bold tracking-wider ml-auto',
                        status === 'completed'
                          ? 'bg-green-100 text-green-700'
                          : status === 'current'
                          ? isInfra
                            ? 'bg-cyan-100 text-cyan-700'
                            : isSecurity
                            ? 'bg-red-100 text-red-700'
                            : isAI
                            ? 'bg-purple-100 text-purple-700'
                            : 'bg-blue-100 text-blue-700'
                          : 'bg-ink/5 text-ink/50'
                      )}
                    >
                      {status === 'completed'
                        ? '✓ Hoàn thành'
                        : status === 'current'
                        ? 'Đang học'
                        : 'Sắp tới'}
                    </span>
                  </div>

                  <p className="text-sm text-ink/70 leading-relaxed pr-4">
                    {step.description}
                  </p>

                  {isAI && status !== 'upcoming' && (
                    <div className="mt-4 flex items-center gap-2 text-xs text-purple-600 hover:text-purple-700 transition-colors">
                      <ExternalLink size={15} />
                      <span className="font-medium">
                        Kỹ năng dùng AI để học, debug và code hiệu quả hơn →
                      </span>
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