import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { 
  LayoutDashboard, 
  Terminal, 
  CheckSquare, 
  BookOpen, 
  ChevronRight,
  Zap,
  Cpu
} from 'lucide-react';
import { cn } from './lib/utils';
import { Task } from './types';

// Import components
import Dashboard from './components/Dashboard';
import AIArchitect from './components/AIArchitect';
import TaskBoard from './components/TaskBoard';
import LearningHub from './components/LearningHub';

export default function App() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'architect' | 'tasks' | 'learn'>('dashboard');
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null);

  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', title: 'Học React 19 Hooks', description: 'Khám phá useTransition và useActionState', status: 'in-progress', priority: 'high', createdAt: Date.now() },
    { id: '2', title: 'Làm chủ Tailwind 4', description: 'Hiểu về directive @theme mới', status: 'todo', priority: 'medium', createdAt: Date.now() },
    { id: '3', title: 'Tích hợp Gemini API', description: 'Xây dựng tính năng AI với @google/genai', status: 'done', priority: 'high', createdAt: Date.now() },
  ]);

  const handleSelectLesson = (id: string) => {
    setSelectedLessonId(id);
    setActiveTab('learn');
  };

  const handleCompleteLesson = (id: string) => {
    if (completedLessons.includes(id)) {
      setCompletedLessons(completedLessons.filter(lessonId => lessonId !== id));
    } else {
      setCompletedLessons([...completedLessons, id]);
    }
  };

  const handleResetLessonSelection = () => {
    setSelectedLessonId(null);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r border-ink/20 flex flex-col bg-bg">
        <div className="p-6 border-b border-ink/20">
          <h1 className="font-mono text-xl font-bold tracking-tighter flex items-center gap-2">
            <Cpu className="w-6 h-6" />
            DEVFLOW
          </h1>
          <p className="text-[10px] uppercase tracking-widest opacity-50 mt-1">Kiến trúc sư App hiện đại</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <SidebarItem 
            icon={<LayoutDashboard size={18} />} 
            label="Bảng điều khiển" 
            active={activeTab === 'dashboard'} 
            onClick={() => setActiveTab('dashboard')} 
          />
          <SidebarItem 
            icon={<Terminal size={18} />} 
            label="Trợ lý AI" 
            active={activeTab === 'architect'} 
            onClick={() => setActiveTab('architect')} 
          />
          <SidebarItem 
            icon={<CheckSquare size={18} />} 
            label="Bảng nhiệm vụ" 
            active={activeTab === 'tasks'} 
            onClick={() => setActiveTab('tasks')} 
          />
          <SidebarItem 
            icon={<BookOpen size={18} />} 
            label="Trung tâm học tập" 
            active={activeTab === 'learn'} 
            onClick={() => setActiveTab('learn')} 
          />
        </nav>

        <div className="p-6 border-t border-ink/20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-ink text-bg flex items-center justify-center font-mono text-xs">
              JD
            </div>
            <div>
              <p className="text-xs font-bold">Lập trình viên trẻ</p>
              <p className="text-[10px] opacity-50">Chế độ học tập</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col bg-bg overflow-hidden relative">
        {/* Header */}
        <header className="h-16 border-b border-ink/20 flex items-center justify-between px-8 bg-bg/80 backdrop-blur-md z-10">
          <h2 className="font-mono text-sm uppercase tracking-widest opacity-70">
            {activeTab === 'dashboard' ? 'Bảng điều khiển' : 
             activeTab === 'architect' ? 'Trợ lý AI' : 
             activeTab === 'tasks' ? 'Bảng nhiệm vụ' : 'Trung tâm học tập'}
          </h2>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-ink/5 rounded-full transition-colors">
              <Zap size={18} className="text-ink/60" />
            </button>
            <div className="h-4 w-[1px] bg-ink/20" />
            <span className="text-[10px] font-mono opacity-50">v1.0.4-stable</span>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8">
          <AnimatePresence mode="wait">
            {activeTab === 'dashboard' && <Dashboard key="dashboard" tasks={tasks} completedLessons={completedLessons} onSelectLesson={handleSelectLesson} onViewAllTasks={() => setActiveTab('tasks')} />}
            {activeTab === 'architect' && <AIArchitect key="architect" />}
            {activeTab === 'tasks' && <TaskBoard key="tasks" tasks={tasks} setTasks={setTasks} />}
            {activeTab === 'learn' && <LearningHub key="learn" selectedLessonId={selectedLessonId} onCompleteLesson={handleCompleteLesson} completedLessons={completedLessons} onResetLessonSelection={handleResetLessonSelection} onSelectLesson={handleSelectLesson} />}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

function SidebarItem({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
        active ? "bg-ink text-bg shadow-lg translate-x-1" : "text-ink/60 hover:bg-ink/5 hover:text-ink"
      )}
    >
      {icon}
      {label}
      {active && <ChevronRight size={14} className="ml-auto opacity-50" />}
    </button>
  );
}
