import { ChildCard } from '@/features/kids/ChildCard';
import { getKidsByFamilyId } from '@/features/kids/kidsApi';
import { useBoundStore } from '@/store/store';
import { useEffect, useState } from 'react';

export const KidsPage = () => {
  const kids = useBoundStore((state) => state.kids);
  const setKids = useBoundStore((state) => state.setKids);
  const userRole = useBoundStore((state) => state.user?.role);
  const [isLoading, setIsLoading] = useState(true);
  const familyId = 'family123';

  useEffect(() => {
    const fetchKids = async () => {
      try {
        const response = await getKidsByFamilyId(familyId); // TODO: [BACKEND-READY] Получать familyId из глобального состояния после реализации аутентификации и получения данных о семье при входе в приложение. Пока что используем заглушку.
        setKids(response || []);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchKids();
  }, [familyId, setKids]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {userRole === 'parent' && (
        <div className="kids-holder flex items-center gap-4 justify-evenly flex-wrap">
          {kids.map((kid) => (
            <ChildCard key={kid.id} kid={kid} />
          ))}
        </div>
      )}
    </>
  );
};
