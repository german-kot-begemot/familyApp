// import { useBoundStore } from '@/store/store';
import { Reward } from './rewardsTypes';
import { Star } from 'lucide-react';
import '../TasksPage/taskStyles.css';
import { useSpotlightCard } from '@/shared/hooks/useSpotlightCard';

interface RewardCardProps {
  reward: Reward;
  onEdit?: (reward: Reward) => void; //  из родительской страницы
  onDelete?: (rewardId: string) => void; //  из родительской страницы
  onClick?: (reward: Reward) => void;
}

export const RewardCard = ({ reward, onClick }: RewardCardProps) => {
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
        onClick={() => onClick && onClick(reward)}
      >
        <div
          className="card-content flex flex-col gap-2 p-4 justify-between items-center 
        w-full h-auto cursor-pointer"
        >
          <img
            src={reward.image}
            alt={reward.title}
            className="w-full max-h-32 h-auto object-cover rounded-md"
          />
          <h3 className="text-center text-[14px] overflow-hidden text-ellipsis">
            {reward.title}
          </h3>
          <div className="flex items-center gap-1 text-[14px]">
            <Star size={14} />
            {reward.points}
          </div>
        </div>
      </div>
    </>
  );
};
