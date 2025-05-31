import { motion } from 'framer-motion';

/**
 * ShimmerTop component creates a horizontal shimmer effect for the top face of the button
 *
 * Features:
 * - Two white bars that move horizontally across the button
 * - Skewed bars (15deg) to create a dynamic shimmer effect
 * - Infinite loop animation with a delay between iterations
 * - Positioned absolutely to overlay on the button face
 *
 * @component
 * @returns {JSX.Element} An animated shimmer overlay for the top button face
 */
const ShimmerTop = () => {
  return (
    <motion.div
      animate={{
        left: ['-10%', '100%'], // Animate from left side to right side
      }}
      transition={{
        type: 'tween',
        duration: 1.5, // Animation duration
        ease: 'linear', // Constant speed
        repeat: Infinity, // Loop forever
        repeatDelay: 1, // Wait 1 second between iterations
      }}
      className='h-[100%] flex gap-1 absolute z-20'
    >
      {/* First shimmer bar - narrower */}
      <div
        style={{
          transform: 'skewX(15deg)', // Skew for dynamic effect
        }}
        className='bg-white h-[100%] w-[10px]'
      />

      {/* Second shimmer bar - wider */}
      <div
        style={{
          transform: 'skewX(15deg)', // Skew for dynamic effect
        }}
        className='bg-white h-[100%] w-[20px]'
      />
    </motion.div>
  );
};

export default ShimmerTop;
