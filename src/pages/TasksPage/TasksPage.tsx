import { useBoundStore } from '@/store/store';
import { TaskCard } from './TaskCard';
import { useEffect, useState } from 'react';
import { getTasksByFamilyId } from '@/shared/api/api';
import { Button } from '@/components/ui/button';

export const TasksPage = () => {
  const tasks = useBoundStore((s) => s.tasks);
  const setTasks = useBoundStore((s) => s.setTasks);
  const userRole = useBoundStore((state) => state.user?.role);
  // const familyId  = useBoundStore((s) => s.familyId) //TODO: [BACKEND-READY] Получать familyId из глобального состояния после реализации аутентификации и получения данных о семье при входе в приложение. Пока что используем заглушку.
  const familyId = 'family123';
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await getTasksByFamilyId(familyId);
        setTasks(response.tasks);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTasks();
  }, [familyId, setTasks]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="task-container flex flex-row flex-wrap gap-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
      {userRole === 'parent' && (
        <div className="btn-holder p-4 flex justify-end">
          <Button onClick={() => console.log('Клик!')}>Add new Task</Button>
        </div>
      )}
    </>
  );
};
