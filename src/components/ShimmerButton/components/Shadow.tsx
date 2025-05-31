import { motion, type AnimationControls } from 'framer-motion';
import { cn } from '../../../lib/utils';

/**
 * Props for the Shadow component
 * @interface ShadowProps
 */
interface ShadowProps {
  /**
   * Animation controls for the shadow element, passed from parent component
   */
  shadowControls: AnimationControls;
  /**
   * Additional CSS classes for styling the shadow container
   * @default ''
   */
  shadowStyles?: string;
}

/**
 * Shadow component creates the animated shadow effect for the ShimmerButton
 *
 * Features:
 * - Responsive to button press/release animations via animation controls
 * - Semi-transparent black shadow with trapezoidal clip path
 * - Positioned at the bottom of the button to create 3D depth
 * - Customizable styling through shadowStyles prop
 *
 * @component
 * @param {ShadowProps} props - The component props
 * @returns {JSX.Element} An animated shadow element
 */
const Shadow = ({ shadowControls, shadowStyles = '' }: ShadowProps) => {
  // Merge default and custom styles for the shadow container
  const styles = cn(
    'h-[15%] flex items-center justify-center w-[100%] absolute',
    shadowStyles
  );

  return (
    <div className={styles}>
      {/* Animated shadow with trapezoidal shape */}
      <motion.div
        transition={{
          type: 'tween',
          duration: 0.15, // Quick response to button interactions
          ease: 'easeOut',
        }}
        animate={shadowControls} // Controlled by parent component
        style={{
          clipPath: 'polygon(2% 0%, 98% 0%, 100% 100%, 0% 100%)', // Trapezoidal shape
        }}
        data-testid='shimmer-btn-shadow'
        className='bg-black/80 h-[100%] w-[90%]'
      ></motion.div>
    </div>
  );
};

export default Shadow;
