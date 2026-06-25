import { useBoundStore } from '@/store/store';
import { RewardCard } from './RewardCard';
import { useEffect, useState } from 'react';
import { getRewarsByFamilyId } from '@/shared/api/rewardsApi';
import { Button } from '@/components/ui/button';
import { Modal } from '@/shared/ui/Modal';
import { Reward } from './rewardsTypes';

export const RewardsPage = () => {
  const rewards = useBoundStore((state) => state.rewards);
  const [isLoading, setIsLoading] = useState(true);
  const userRole = useBoundStore((state) => state.user?.role);
  const [selectedReward, setSelectedReward] = useState<Reward | null>(null);

  useEffect(() => {
    const fetchRewards = async () => {
      try {
        const response = await getRewarsByFamilyId('family123'); // TODO: [BACKEND-READY] Получать familyId из глобального состояния после реализации аутентификации и получения данных о семье при входе в приложение. Пока что используем заглушку.
        useBoundStore.setState({ rewards: response.rewards });
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRewards();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="rewards-container flex flex-row flex-wrap gap-4">
        {rewards.map((reward) => (
          <RewardCard
            key={reward.id}
            reward={reward}
            onClick={() => console.log('Clicked reward:', reward)}
          />
        ))}
      </div>
      {userRole === 'parent' && (
        <div className="btn-holder p-4 gap-2 flex justify-end">
          <Button
            onClick={() => console.log('Клик!')}
            className="add-btn border border-transparent transition-all duration-200 ease-out
            hover:-translate-y-px hover:border-muted-foreground/20 active:translate-y-0 active:scale-[0.99]"
          >
            Add new Task
          </Button>

          <Button
            onClick={() => console.log('Клик!')}
            className="del-btn border border-transparent transition-all duration-200 ease-out
            hover:-translate-y-px hover:border-muted-foreground/20 active:translate-y-0 active:scale-[0.99]"
          >
            Delete Task
          </Button>
        </div>
      )}
      <Modal
        open={selectedReward !== null}
        onClose={() => setSelectedReward(null)}
      >
        {selectedReward && (
          <div>
            <h2>{selectedReward.title}</h2>
            <p>{selectedReward.description}</p>
          </div>
        )}
      </Modal>
    </>
  );
};
