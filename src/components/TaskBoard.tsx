import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, X, Trash2, Edit2 } from 'lucide-react';
import { Task } from '../types';
import { cn } from '../lib/utils';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';

interface TaskBoardProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export default function TaskBoard({ tasks, setTasks }: TaskBoardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'todo' as Task['status'],
    priority: 'medium' as Task['priority']
  });

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const newTasks = [...tasks];
      const taskIndex = newTasks.findIndex(t => t.id === result.draggableId);
      if (taskIndex !== -1) {
        newTasks[taskIndex].status = destination.droppableId as Task['status'];
        setTasks(newTasks);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingTask) {
      setTasks(tasks.map(t => t.id === editingTask.id ? { ...t, ...formData } : t));
    } else {
      const newTask: Task = {
        id: Date.now().toString(),
        ...formData,
        createdAt: Date.now()
      };
      setTasks([...tasks, newTask]);
    }
    closeModal();
  };

  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setTasks(tasks.filter(t => t.id !== id));
  };

  const openModal = (task?: Task) => {
    if (task) {
      setEditingTask(task);
      setFormData({
        title: task.title,
        description: task.description,
        status: task.status,
        priority: task.priority
      });
    } else {
      setEditingTask(null);
      setFormData({
        title: '',
        description: '',
        status: 'todo',
        priority: 'medium'
      });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingTask(null);
  };

  const columns: { id: Task['status']; title: string }[] = [
    { id: 'todo', title: 'Cần làm' },
    { id: 'in-progress', title: 'Đang thực hiện' },
    { id: 'done', title: 'Hoàn thành' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6 h-full flex flex-col"
    >
      <div className="flex justify-between items-end shrink-0">
        <div>
          <h3 className="font-heading font-bold text-2xl">Bảng nhiệm vụ</h3>
          <p className="text-xs opacity-50">Quản lý hành trình học tập và các cột mốc dự án của bạn.</p>
        </div>
        <button 
          onClick={() => openModal()}
          className="flex items-center gap-2 bg-ink text-bg px-4 py-2 rounded-lg text-xs font-bold hover:bg-ink/90 transition-colors"
        >
          <Plus size={16} />
          NHIỆM VỤ MỚI
        </button>
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-3 gap-6 flex-1 min-h-0">
          {columns.map(col => {
            const columnTasks = tasks.filter(t => t.status === col.id);
            return (
              <div key={col.id} className="flex flex-col h-full bg-ink/5 rounded-2xl p-5 border border-ink/10 shadow-inner">
                <div className="flex items-center justify-between mb-4 shrink-0">
                  <h4 className="text-[10px] uppercase font-bold tracking-widest opacity-40">{col.title}</h4>
                  <span className="text-[10px] font-mono bg-ink/10 px-2 py-0.5 rounded-full">{columnTasks.length}</span>
                </div>
                
                <Droppable droppableId={col.id}>
                  {(provided, snapshot) => (
                    <div 
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className={cn(
                        "flex-1 overflow-y-auto space-y-3 min-h-[150px] rounded-lg transition-colors",
                        snapshot.isDraggingOver ? "bg-ink/5" : ""
                      )}
                    >
                      {columnTasks.map((task, index) => (
                        <Draggable key={task.id} draggableId={task.id} index={index}>
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              onClick={() => openModal(task)}
                              className={cn(
                                "p-4 border border-ink/10 rounded-xl bg-white shadow-sm hover:border-ink/30 hover:shadow-md transition-all cursor-pointer group relative",
                                snapshot.isDragging ? "shadow-xl rotate-3 scale-105 z-50 ring-2 ring-ink/20" : ""
                              )}
                            >
                              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                                <button 
                                  onClick={(e) => { e.stopPropagation(); openModal(task); }}
                                  className="p-1.5 hover:bg-ink/5 rounded text-ink/60 hover:text-ink"
                                >
                                  <Edit2 size={14} />
                                </button>
                                <button 
                                  onClick={(e) => handleDelete(task.id, e)}
                                  className="p-1.5 hover:bg-red-50 rounded text-red-400 hover:text-red-600"
                                >
                                  <Trash2 size={14} />
                                </button>
                              </div>

                              <h5 className="text-sm font-bold group-hover:text-ink transition-colors pr-12">{task.title}</h5>
                              <p className="text-xs opacity-50 mt-1 line-clamp-2">{task.description}</p>
                              <div className="flex items-center justify-between mt-4">
                                <span className={cn(
                                  "text-[8px] px-1.5 py-0.5 rounded uppercase font-bold",
                                  task.priority === 'high' ? "bg-red-50 text-red-600" : 
                                  task.priority === 'medium' ? "bg-yellow-50 text-yellow-600" : "bg-blue-50 text-blue-600"
                                )}>
                                  {task.priority === 'high' ? 'Cao' : task.priority === 'medium' ? 'Trung bình' : 'Thấp'}
                                </span>
                                <span className="text-[8px] font-mono opacity-30">
                                  {new Date(task.createdAt).toLocaleDateString('vi-VN')}
                                </span>
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            );
          })}
        </div>
      </DragDropContext>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-ink/20 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-bg w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-ink/10"
            >
              <div className="p-6 border-b border-ink/10 flex justify-between items-center bg-white/50">
                <h3 className="font-heading font-bold text-xl">
                  {editingTask ? 'Chỉnh sửa nhiệm vụ' : 'Thêm nhiệm vụ mới'}
                </h3>
                <button onClick={closeModal} className="p-2 hover:bg-ink/5 rounded-full transition-colors">
                  <X size={20} className="opacity-50" />
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="p-6 space-y-4 bg-white">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-50">Tiêu đề</label>
                  <input 
                    required
                    type="text" 
                    value={formData.title}
                    onChange={e => setFormData({...formData, title: e.target.value})}
                    className="w-full p-3 rounded-lg border border-ink/20 bg-transparent focus:outline-none focus:border-ink/50 transition-colors text-sm"
                    placeholder="Nhập tiêu đề nhiệm vụ..."
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-50">Mô tả</label>
                  <textarea 
                    value={formData.description}
                    onChange={e => setFormData({...formData, description: e.target.value})}
                    className="w-full p-3 rounded-lg border border-ink/20 bg-transparent focus:outline-none focus:border-ink/50 transition-colors text-sm min-h-[100px] resize-y"
                    placeholder="Mô tả chi tiết..."
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest opacity-50">Trạng thái</label>
                    <select 
                      value={formData.status}
                      onChange={e => setFormData({...formData, status: e.target.value as Task['status']})}
                      className="w-full p-3 rounded-lg border border-ink/20 bg-transparent focus:outline-none focus:border-ink/50 transition-colors text-sm appearance-none"
                    >
                      <option value="todo">Cần làm</option>
                      <option value="in-progress">Đang thực hiện</option>
                      <option value="done">Hoàn thành</option>
                    </select>
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest opacity-50">Độ ưu tiên</label>
                    <select 
                      value={formData.priority}
                      onChange={e => setFormData({...formData, priority: e.target.value as Task['priority']})}
                      className="w-full p-3 rounded-lg border border-ink/20 bg-transparent focus:outline-none focus:border-ink/50 transition-colors text-sm appearance-none"
                    >
                      <option value="low">Thấp</option>
                      <option value="medium">Trung bình</option>
                      <option value="high">Cao</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4 flex justify-end gap-3">
                  <button 
                    type="button"
                    onClick={closeModal}
                    className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-ink/5 transition-colors"
                  >
                    Hủy
                  </button>
                  <button 
                    type="submit"
                    className="px-6 py-2 rounded-lg text-sm font-bold bg-ink text-bg hover:bg-ink/90 transition-colors shadow-md"
                  >
                    {editingTask ? 'Cập nhật' : 'Tạo mới'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
