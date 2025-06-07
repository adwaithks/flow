import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface CardProps {
  children?: React.ReactNode;
  overlay?: React.ReactNode;
  rest?: React.HTMLAttributes<HTMLDivElement>;
}

const RevealCard: React.FC<CardProps> = ({ children, overlay, ...rest }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Use motion values for mouse position
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Add spring animation to the motion values
  const springX = useSpring(mouseX, { duration: 800, mass: 0.1 });
  const springY = useSpring(mouseY, { duration: 800, mass: 0.1 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      // subtract half the height and width of spotlight
      mouseX.set(x - 100);
      mouseY.set(y - 100);
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(mouseX.get() + 1000);
    mouseY.set(mouseY.get() + 1000);
  };

  return (
    <div
      ref={cardRef}
      className={`overflow-hidden border border-gray-100 relative h-[150px] w-[400px] cursor-zoom-in`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {/* Base content layer */}
      <div className='absolute inset-0 z-10 h-[100%] w-[100%] flex items-center justify-center'>
        {children}
      </div>

      {/* Spotlight window that reveals a circular part of the overlay */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          mask: 'radial-gradient(circle, white 70px, rgba(255,255,255,0.8) 75px, rgba(255,255,255,0.1) 80px, transparent 80px)',
        }}
        className='absolute z-30 w-[200px] h-[200px] pointer-events-none'
      >
        <motion.div
          style={{
            x: useTransform(springX, v => -v),
            y: useTransform(springY, v => -v),
          }}
          className='absolute w-[400px] h-[150px]'
        >
          {overlay}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RevealCard;
