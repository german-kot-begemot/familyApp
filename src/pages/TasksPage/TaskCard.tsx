// import { useBoundStore } from '@/store/store';
import { Task } from './tasksTypes';
import { Star } from 'lucide-react';
import '../TasksPage/taskStyles.css';
import { useSpotlightCard } from '@/shared/hooks/useSpotlightCard';

interface TaskCardProps {
  task: Task;
  onEdit?: (task: Task) => void; //  из родительской страницы
}

export const TaskCard = ({ task }: TaskCardProps) => {
  //   const userRole = useBoundStore((state) => state.user?.role);
  //   const removeTask = useBoundStore((state) => state.removeTask);
  //   const updateTask = useBoundStore((state) => state.updateTask);
  const { cardRef, handleMouseMove, handleMouseEnter, handleMouseLeave } =
    useSpotlightCard();

  return (
    <>
      <div
        ref={cardRef}
        className="card max-w-40 bg-[#4a6f51] rounded-md "
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="card-content flex flex-col gap-2 justify-between items-center w-full h-20 text-[10px] cursor-pointer">
          <img
            src={task.image}
            alt={task.title}
            className="w-full h-32 object-cover rounded-t-md"
          />
          <h3 className="font-semibold text-center">{task.title}</h3>
          <div className="flex items-center gap-1">
            <Star size={10} />
            {task.points}
          </div>
        </div>
      </div>
    </>
  );
};
