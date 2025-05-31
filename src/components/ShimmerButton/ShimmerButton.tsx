import React, { useCallback } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import Shadow from './components/Shadow';
import ShimmerTop from './components/ShimmerTop';
import ShimmerBottom from './components/ShimmerBottom';
import { cn } from '../../lib/utils';

/**
 * Props for the ShimmerButton component
 * @interface ShimmerButtonProps
 * @extends {React.HTMLAttributes<HTMLButtonElement>}
 */
interface ShimmerButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * Width of the button in pixels
   * @default 250
   */
  width?: number;
  /**
   * Height of the button in pixels
   * @default 60
   */
  height?: number;
  /**
   * Additional CSS classes for the shadow element
   * @default ''
   */
  shadowStyles?: string;
  /**
   * Additional CSS classes for the main content face
   * @default ''
   */
  contentFaceStyles?: string;
  /**
   * Additional CSS classes for the bottom face
   * @default ''
   */
  bottomFaceStyles?: string;
}

/**
 * A shimmer button component with animated shimmer effects and 3D appearance
 *
 * Features a layered design with:
 * - Main content face with shimmer animation
 * - Bottom face for 3D depth effect
 * - Animated shadow that responds to press interactions
 * - Customizable styling for all faces
 *
 * @component
 * @example
 * ```tsx
 * <ShimmerButton
 *   width={300}
 *   height={80}
 *   contentFaceStyles="bg-blue-300"
 *   bottomFaceStyles="bg-blue-500"
 *   onClick={() => console.log('clicked')}
 * >
 *   Shimmer Me!
 * </ShimmerButton>
 * ```
 *
 * @param {ShimmerButtonProps} props - The component props
 * @returns {JSX.Element} A button with shimmer animations and 3D effects
 */
const ShimmerButton = (props: ShimmerButtonProps) => {
  const {
    children,
    width,
    height,
    shadowStyles = '',
    contentFaceStyles = '',
    bottomFaceStyles = '',
    ...rest
  } = props;

  // Animation controls for the shadow element
  const shadowControls = useAnimationControls();

  /**
   * Handles the button press animation by moving the shadow upward
   * to create a pressed-in effect
   */
  const handlePress = useCallback(() => {
    shadowControls.start({
      y: -10,
    });
  }, [shadowControls]);

  /**
   * Handles the button release animation by resetting the shadow position
   * to restore the 3D appearance
   */
  const handleRelease = useCallback(() => {
    shadowControls.start({
      y: 0,
    });
  }, [shadowControls]);

  // Merge default and custom styles for the content face
  const contentFaceStylesMerged = cn(
    'h-[85%] w-[100%] relative bg-yellow-300',
    contentFaceStyles
  );

  // Merge default and custom styles for the bottom face
  const bottomFaceStylesMerged = cn(
    'h-[15%] w-[100%] bg-yellow-500 flex gap-1 relative',
    bottomFaceStyles
  );

  return (
    <button
      style={{
        width: width ?? '250px',
        height: height ?? '60px',
      }}
      className='relative'
    >
      {/* Main button content with press animation */}
      <motion.div
        className='h-[85%] w-[100%] overflow-hidden relative z-20'
        whileTap={{ y: 10 }}
        transition={{ type: 'tween', duration: 0.15, ease: 'easeOut' }}
        onPointerDown={handlePress}
        onPointerUp={handleRelease}
        onPointerLeave={handleRelease}
      >
        {/* Content face with shimmer effect */}
        <div
          className={contentFaceStylesMerged}
          style={{
            clipPath: 'polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)',
          }}
          data-testid='shimmer-btn-content-face'
        >
          {/* Top shimmer animation */}
          <ShimmerTop />

          {/* Button content container */}
          <div
            className='h-[100%] w-[100%] relative z-20'
            style={{
              ...rest,
            }}
          >
            {children}
          </div>
        </div>

        {/* Bottom face for 3D depth effect */}
        <div
          className={bottomFaceStylesMerged}
          style={{
            clipPath: 'polygon(0% 0%, 100% 0%, 97% 100%, 3% 100%)',
          }}
          data-testid='shimmer-btn-bottom-face'
        >
          {/* Bottom shimmer animation */}
          <ShimmerBottom />
        </div>
      </motion.div>

      {/* Animated shadow element */}
      <Shadow shadowStyles={shadowStyles} shadowControls={shadowControls} />
    </button>
  );
};

export default ShimmerButton;
