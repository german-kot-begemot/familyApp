// import { useBoundStore } from '@/store/store';
import { Task } from './tasksTypes';
import { Star } from 'lucide-react';
import '../TasksPage/taskStyles.css';
import { useSpotlightCard } from '@/shared/hooks/useSpotlightCard';

interface TaskCardProps {
  task: Task;
  onEdit?: (task: Task) => void; //  из родительской страницы
  onDelete?: (taskId: string) => void; //  из родительской страницы
  onClick?: (task: Task) => void;
}

export const TaskCard = ({ task, onClick }: TaskCardProps) => {
  //   const userRole = useBoundStore((state) => state.user?.role);
  //   const removeTask = useBoundStore((state) => state.removeTask);
  //   const updateTask = useBoundStore((state) => state.updateTask);
  const { cardRef, handleMouseMove, handleMouseEnter, handleMouseLeave } =
    useSpotlightCard();

  return (
    <>
      <div
        ref={cardRef}
        className="card text-sm max-w-40 h-auto bg-(--card-bg-color) rounded-md 
        transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02]  
        hover:shadow-xl active:scale-[0.98]"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => onClick && onClick(task)}
      >
        <div
          className="card-content flex flex-col gap-2 p-4 justify-between items-center 
        w-full h-auto cursor-pointer"
        >
          <img
            src={task.image}
            alt={task.title}
            className="w-full max-h-32 h-auto object-cover rounded-md"
          />
          <h3 className="text-center text-[14px] overflow-hidden text-ellipsis">
            {task.title}
          </h3>
          <div className="flex items-center gap-1 text-[14px]">
            <Star size={14} />
            {task.points}
          </div>
        </div>
      </div>
    </>
  );
};
