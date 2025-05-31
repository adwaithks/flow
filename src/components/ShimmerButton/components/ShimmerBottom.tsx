import { motion } from 'framer-motion';

/**
 * ShimmerBottom component creates a horizontal shimmer effect for the bottom face of the button
 *
 * Features:
 * - Two semi-transparent white bars that move horizontally
 * - Reverse skewed bars (-15deg) to match the bottom face perspective
 * - Infinite loop animation synchronized with ShimmerTop
 * - Positioned absolutely with slight margin offset for proper alignment
 *
 * @component
 * @returns {JSX.Element} An animated shimmer overlay for the bottom button face
 */
const ShimmerBottom = () => {
  return (
    <motion.div
      animate={{
        left: ['-10%', '100%'], // Animate from left side to right side
      }}
      transition={{
        type: 'tween',
        duration: 1.5, // Animation duration (matches ShimmerTop)
        ease: 'linear', // Constant speed
        repeat: Infinity, // Loop forever
        repeatDelay: 1, // Wait 1 second between iterations (matches ShimmerTop)
      }}
      className='flex gap-1 ml-[5px] absolute top-0 h-full'
    >
      {/* First shimmer bar - narrower, semi-transparent */}
      <div
        style={{
          transform: 'skewX(-15deg)', // Reverse skew to match bottom face angle
        }}
        className='bg-white/50 h-[100%] w-[10px]'
      />

      {/* Second shimmer bar - wider, semi-transparent */}
      <div
        style={{
          transform: 'skewX(-15deg)', // Reverse skew to match bottom face angle
        }}
        className='bg-white/50 h-[100%] w-[20px]'
      />
    </motion.div>
  );
};

export default ShimmerBottom;
