import {
  motion,
  useMotionValue,
  useTransform,
  useMotionTemplate,
} from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

const ShadowTrackingText = ({ children }: { children: React.ReactNode }) => {
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Motion values for x and y coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Transform coordinates to range -5 to 5
  const transformedX = useTransform(mouseX, [0, containerSize.width], [-5, 5]);
  const transformedY = useTransform(mouseY, [0, containerSize.height], [-5, 5]);

  // Create reactive textShadow template
  const textShadow = useMotionTemplate`${transformedX}px ${transformedY}px 0px black, 0px 0px 0px black, 0px 0px 0px black, 0px 0px 0px black`;

  // Get container dimensions
  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setContainerSize({ width: rect.width, height: rect.height });
    }
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Update motion values
      mouseX.set(x);
      mouseY.set(y);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className='my-12 h-[200px] border-2 border-gray-300 w-[100%] flex items-center justify-center'
    >
      <motion.div
        style={{
          WebkitTextStroke: '1px black',
          textShadow,
        }}
        className='text-green-300 tracking-tighter cursor-pointer font-bold text-[28px]'
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ShadowTrackingText;
