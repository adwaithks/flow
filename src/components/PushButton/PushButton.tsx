import { motion, useAnimation } from 'framer-motion';
import React, { useCallback } from 'react';

/**
 * Props for the PushButton component
 * @interface PushButtonProps
 * @extends {React.ButtonHTMLAttributes<HTMLButtonElement>}
 */
interface PushButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Color class for the right face of the 3D button effect
   * @default 'bg-lime-500'
   */
  rightFaceColor?: string;
  /**
   * Color class for the bottom face of the 3D button effect
   * @default 'bg-lime-700'
   */
  bottomFaceColor?: string;
}

/**
 * A 3D push button component with animated press effects
 *
 * @component
 * @example
 * ```tsx
 * <PushButton
 *   onClick={() => console.log('clicked')}
 *   rightFaceColor="bg-blue-500"
 *   bottomFaceColor="bg-blue-700"
 * >
 *   Click Me
 * </PushButton>
 * ```
 *
 * @param {PushButtonProps} props - The component props
 * @returns {JSX.Element} A button with 3D push animation effects
 */
const PushButton = (props: PushButtonProps) => {
  const {
    children,
    rightFaceColor = 'bg-lime-500',
    bottomFaceColor = 'bg-lime-700',
    ...rest
  } = props;

  const controlsBottom = useAnimation();
  const controlsRight = useAnimation();

  /**
   * Handles the button press animation by adjusting the clip paths
   * to create a pressed-in effect
   */
  const handlePress = useCallback(() => {
    controlsBottom.start({
      clipPath: 'polygon(2% 92%, 100% 92%, 100% 100%, 2% 100%)',
    });
    controlsRight.start({
      clipPath: 'polygon(2% 8%, 100% 8%, 100% 100%, 0% 100%)',
    });
  }, [controlsBottom, controlsRight]);

  /**
   * Handles the button release animation by resetting the clip paths
   * to restore the 3D appearance
   */
  const handleRelease = useCallback(() => {
    controlsBottom.start({
      clipPath: 'polygon(0% 0%, 98% 0%, 100% 100%, 2% 100%)',
    });
    controlsRight.start({
      clipPath: 'polygon(0% 0%, 100% 8%, 100% 100%, 0% 100%)',
    });
  }, [controlsBottom, controlsRight]);

  return (
    <button className='relative' {...rest}>
      <motion.div
        id='content-face'
        whileTap={{ x: '2%', y: '8%' }}
        transition={{ type: 'tween', duration: 0.15, ease: 'easeOut' }}
        onPointerDown={handlePress}
        onPointerUp={handleRelease}
        onPointerLeave={handleRelease}
        className='border-0 border-lime-500 absolute z-10 bg-black text-white flex items-center justify-center top-0 w-[98%] h-[92%]'
      >
        {children}
      </motion.div>

      {/** right */}
      <motion.div
        id='right-face'
        animate={controlsRight}
        transition={{ type: 'tween', duration: 0.15, ease: 'easeOut' }}
        style={{
          width: '2%',
          pointerEvents: 'none',
          clipPath: 'polygon(0% 0%, 100% 8%, 100% 100%, 0% 100%)',
        }}
        className={`${rightFaceColor} absolute right-0 bottom-0 h-[100%]`}
      ></motion.div>

      {/* bottom */}
      <motion.div
        id='bottom-face'
        animate={controlsBottom}
        transition={{ type: 'tween', duration: 0.15, ease: 'easeOut' }}
        className={`absolute bottom-0 right-0 w-[100%] ${bottomFaceColor}`}
        style={{
          pointerEvents: 'none',
          height: '8%',
          clipPath: 'polygon(0% 0%, 98% 0%, 100% 100%, 2% 100%)',
        }}
      ></motion.div>
    </button>
  );
};

export default PushButton;
