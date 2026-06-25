import { useBoundStore } from '@/store/store';
import { TaskCard } from './TaskCard';
import { useEffect, useState } from 'react';
import { getTasksByFamilyId } from '@/shared/api/api';
import { Button } from '@/components/ui/button';
import { Task } from './tasksTypes';
import { Modal } from '@/shared/ui/Modal';

export const TasksPage = () => {
  const tasks = useBoundStore((s) => s.tasks);
  const setTasks = useBoundStore((s) => s.setTasks);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
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
          <TaskCard key={task.id} task={task} onClick={setSelectedTask} />
        ))}
      </div>
      {userRole === 'parent' && (
        <div className="btn-holder p-4 flex justify-end">
          <Button
            onClick={() => console.log('Клик!')}
            className="border border-transparent transition-all duration-200 ease-out
    hover:-translate-y-px hover:border-muted-foreground/20 active:translate-y-0 active:scale-[0.99]"
          >
            Add new Task
          </Button>
        </div>
      )}
      <Modal open={selectedTask !== null} onClose={() => setSelectedTask(null)}>
        {selectedTask && (
          <div>
            <h2>{selectedTask.title}</h2>
            <p>{selectedTask.description}</p>
          </div>
        )}
      </Modal>
    </>
  );
};
