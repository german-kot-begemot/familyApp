import { Child } from './kidsTypes';

type ChildCardProps = {
  kid: Child;
};

export const ChildCard = ({ kid }: ChildCardProps) => {
  return (
    <div
      key={kid.id}
      className="kid-card transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 hover:-translate-y-2 cursor-pointer font-znikomit bg-(--card-bg-color) rounded-md p-4 flex flex-col items-center gap-2"
    >
      <img src={kid.avatarUrl} alt={kid.name} className="rounded-md" />
      <h3 className="text-center font-znikomit font-bold">{kid.name}</h3>
      <p>Age: {kid.age}</p>
      <p>Coins: {kid.coins}</p>
      <p>Level: {kid.level}</p>
      <p>Completed Tasks: {kid.completedTasks}</p>
      <p>Pending Tasks: {kid.pendingTasks}</p>
      <p>Streak: {kid.streak}</p>
    </div>
  );
};
