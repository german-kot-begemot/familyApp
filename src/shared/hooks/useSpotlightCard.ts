import { useEffect, useRef } from 'react';

export const useSpotlightCard = () => {
  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const isHovered = useRef(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frameId: number;

    const animate = () => {
      if (isHovered.current && cardRef.current) {
        currentPos.current.x +=
          (mousePos.current.x - currentPos.current.x) * 0.08;

        currentPos.current.y +=
          (mousePos.current.y - currentPos.current.y) * 0.08;

        cardRef.current.style.setProperty(
          '--mouse-x',
          `${currentPos.current.x}px`,
        );

        cardRef.current.style.setProperty(
          '--mouse-y',
          `${currentPos.current.y}px`,
        );
      }

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    mousePos.current.x = e.clientX - rect.left;
    mousePos.current.y = e.clientY - rect.top;
  };

  return {
    cardRef,
    handleMouseMove,
    handleMouseEnter: () => {
      isHovered.current = true;
    },
    handleMouseLeave: () => {
      isHovered.current = false;
    },
  };
};
