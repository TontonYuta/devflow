export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'done';
  priority: 'low' | 'medium' | 'high';
  createdAt: number;
}

export interface Chapter {
  id: string;
  title: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  content: string;
}

export interface Lesson {
  id: string;
  icon: 'code' | 'zap' | 'cpu' | 'arrow' | 'shield' | 'gauge' | 'file-code' | 'git-branch' | 'test-tube' | 'server' | 'database' | 'layers';
  title: string;
  description: string;
  points: string[];
  chapters: Chapter[];
}

