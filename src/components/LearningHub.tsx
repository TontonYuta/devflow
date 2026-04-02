import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Code2,
  Zap,
  Cpu,
  ArrowRight,
  ChevronLeft,
  BookOpen,
  Shield,
  Gauge,
  FileCode,
  GitBranch,
  TestTube,
  Server,
  Database,
  Layers,
  CheckCircle2,
  Network,
} from 'lucide-react';
import { lessons } from '../data/lessons';
import { Lesson, Chapter } from '../types';
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface LearnCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  points: string[];
  isCompleted: boolean;
  onClick: () => void;
}

function LearnCard({
  icon,
  title,
  description,
  points,
  isCompleted,
  onClick,
}: LearnCardProps) {
  return (
    <div
      onClick={onClick}
      className={`p-8 border rounded-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col hover:shadow-xl hover:-translate-y-1 relative overflow-hidden ${
        isCompleted
          ? 'bg-green-50/50 border-green-200 hover:bg-green-50'
          : 'bg-white/60 border-ink/20 hover:bg-white'
      }`}
    >
      {isCompleted && (
        <div className="absolute top-4 right-4 bg-green-100 text-green-700 text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-wider flex items-center gap-1">
          <CheckCircle2 size={12} />
          Đã học
        </div>
      )}
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shrink-0 ${
          isCompleted ? 'bg-green-100 text-green-700' : 'bg-ink/5'
        }`}
      >
        {icon}
      </div>
      <h4 className="font-heading font-bold text-2xl mb-3">{title}</h4>
      <p className="text-sm text-ink/60 leading-relaxed mb-6 flex-grow">
        {description}
      </p>
      <ul className="space-y-2 mt-auto">
        {points.map((p, i) => (
          <li
            key={i}
            className="flex items-center gap-2 text-xs font-medium opacity-70"
          >
            <div
              className={`w-1 h-1 rounded-full shrink-0 ${
                isCompleted ? 'bg-green-500' : 'bg-ink'
              }`}
            />
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

interface LearningHubProps {
  selectedLessonId?: string | null;
  onCompleteLesson?: (id: string) => void;
  completedLessons?: string[];
  onResetLessonSelection?: () => void;
  onSelectLesson?: (id: string) => void;
}

export default function LearningHub({
  selectedLessonId,
  onCompleteLesson,
  completedLessons = [],
  onResetLessonSelection,
  onSelectLesson,
}: LearningHubProps) {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(null);

  useEffect(() => {
    if (selectedLessonId) {
      const lesson = lessons.find((l) => l.id === selectedLessonId);
      if (lesson) {
        setSelectedLesson(lesson);
        if (lesson.chapters && lesson.chapters.length > 0) {
          setSelectedChapterId(lesson.chapters[0].id);
        }
      }
    } else {
      setSelectedLesson(null);
    }
  }, [selectedLessonId]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code2 className="text-blue-600" />;
      case 'zap':
        return <Zap className="text-orange-500" />;
      case 'cpu':
        return <Cpu className="text-purple-600" />;
      case 'arrow':
        return <ArrowRight className="text-green-600" />;
      case 'shield':
        return <Shield className="text-red-500" />;
      case 'gauge':
        return <Gauge className="text-teal-600" />;
      case 'file-code':
        return <FileCode className="text-blue-500" />;
      case 'git-branch':
        return <GitBranch className="text-orange-600" />;
      case 'test-tube':
        return <TestTube className="text-green-500" />;
      case 'server':
        return <Server className="text-indigo-500" />;
      case 'database':
        return <Database className="text-emerald-600" />;
      case 'layers':
        return <Layers className="text-pink-500" />;
      case 'network':
        return <Network className="text-cyan-600" />;
      default:
        return <Code2 />;
    }
  };

  const handleSelectLesson = (lesson: Lesson) => {
    setSelectedLesson(lesson);
    if (lesson.chapters && lesson.chapters.length > 0) {
      setSelectedChapterId(lesson.chapters[0].id);
    } else {
      setSelectedChapterId(null);
    }
    if (onSelectLesson) {
      onSelectLesson(lesson.id);
    }
  };

  const selectedChapter = selectedLesson?.chapters?.find(
    (c) => c.id === selectedChapterId
  );

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'advanced':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getLevelLabel = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'Cơ bản';
      case 'intermediate':
        return 'Trung bình';
      case 'advanced':
        return 'Nâng cao';
      default:
        return level;
    }
  };

  return (
    <div className="max-w-5xl mx-auto pb-20">
      <AnimatePresence mode="wait">
        {!selectedLesson ? (
          <motion.div
            key="grid"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="space-y-12"
          >
            <div className="text-center space-y-4">
              <h3 className="font-heading font-bold text-4xl">Lộ trình học tập</h3>
              <p className="text-ink/60 max-w-xl mx-auto">
                Chọn một chủ đề để bắt đầu học từ cơ bản đến nâng cao.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lessons.map((lesson) => (
                <LearnCard
                  key={lesson.id}
                  icon={getIcon(lesson.icon)}
                  title={lesson.title}
                  description={lesson.description}
                  points={lesson.points}
                  isCompleted={completedLessons.includes(lesson.id)}
                  onClick={() => handleSelectLesson(lesson)}
                />
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="detail"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <button
              onClick={() => {
                setSelectedLesson(null);
                if (onResetLessonSelection) onResetLessonSelection();
              }}
              className="flex items-center gap-2 text-sm font-bold opacity-60 hover:opacity-100 transition-opacity"
            >
              <ChevronLeft size={16} />
              QUAY LẠI DANH SÁCH
            </button>

            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/3 shrink-0 space-y-4">
                <div className="bg-white/80 border border-ink/20 rounded-2xl p-6 shadow-sm sticky top-6">
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-ink/10">
                    <div className="w-12 h-12 rounded-xl bg-ink/5 flex items-center justify-center shrink-0">
                      {getIcon(selectedLesson.icon)}
                    </div>
                    <div>
                      <h2 className="font-heading font-bold text-xl">
                        {selectedLesson.title}
                      </h2>
                      <p className="text-xs text-ink/60 mt-1">
                        {selectedLesson.chapters?.length || 0} bài học
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {selectedLesson.chapters?.map((chapter, index) => (
                      <button
                        key={chapter.id}
                        onClick={() => setSelectedChapterId(chapter.id)}
                        className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                          selectedChapterId === chapter.id
                            ? 'bg-ink text-white border-ink shadow-lg translate-x-2'
                            : 'bg-white border-ink/10 hover:border-ink/30 hover:bg-ink/5 hover:translate-x-1'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <span className="text-xs font-mono opacity-60 mb-1 block">
                              Bài {index + 1}
                            </span>
                            <h4 className="font-medium text-sm leading-tight">
                              {chapter.title}
                            </h4>
                          </div>
                          <span
                            className={`text-[10px] px-2 py-1 rounded-full border whitespace-nowrap ${
                              selectedChapterId === chapter.id
                                ? 'bg-white/20 border-white/20 text-white'
                                : getLevelColor(chapter.level)
                            }`}
                          >
                            {getLevelLabel(chapter.level)}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>

                  {selectedLesson && (
                    <div className="mt-6 pt-6 border-t border-ink/10">
                      <button
                        onClick={() =>
                          onCompleteLesson && onCompleteLesson(selectedLesson.id)
                        }
                        className={`w-full py-3 rounded-xl font-bold text-sm transition-all ${
                          completedLessons.includes(selectedLesson.id)
                            ? 'bg-green-100 text-green-700 hover:bg-green-200 shadow-sm'
                            : 'bg-ink text-white hover:bg-ink/90 shadow-md'
                        }`}
                      >
                        {completedLessons.includes(selectedLesson.id)
                          ? 'Đã hoàn thành (Hoàn tác)'
                          : 'Đánh dấu hoàn thành'}
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="bg-white/80 border border-ink/20 rounded-2xl p-8 lg:p-10 shadow-sm min-h-[600px]">
                  {selectedChapter ? (
                    <div className="prose prose-sm max-w-none prose-headings:font-heading prose-headings:font-bold prose-a:text-blue-600 prose-pre:p-0 prose-pre:bg-transparent">
                      <Markdown
                        components={{
                          code({ node, inline, className, children, ...props }: any) {
                            const match = /language-(\w+)/.exec(className || '');
                            return !inline && match ? (
                              <SyntaxHighlighter
                                {...props}
                                children={String(children).replace(/\n$/, '')}
                                style={vscDarkPlus}
                                language={match[1]}
                                PreTag="div"
                                className="rounded-xl my-4 text-sm !bg-[#1E1E1E] p-4"
                              />
                            ) : (
                              <code
                                {...props}
                                className="bg-ink/10 px-1.5 py-0.5 rounded-md font-mono text-sm text-pink-600"
                              >
                                {children}
                              </code>
                            );
                          },
                        }}
                      >
                        {selectedChapter.content}
                      </Markdown>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-ink/40 space-y-4 py-20">
                      <BookOpen size={48} className="opacity-20" />
                      <p>Chọn một bài học ở danh sách bên trái để bắt đầu</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}