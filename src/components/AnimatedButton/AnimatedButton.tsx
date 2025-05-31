import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * A button component with smooth animated transitions for its content
 *
 * @component
 * @description
 * This component wraps button content with Framer Motion animations that trigger
 * when the content changes. The animation includes a vertical slide, opacity fade,
 * and blur effect for smooth transitions between different button states.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <AnimatedButton onClick={() => console.log('clicked')}>
 *   Click Me
 * </AnimatedButton>
 * ```
 *
 * @example
 * ```tsx
 * // With changing content
 * const [count, setCount] = useState(0);
 * <AnimatedButton onClick={() => setCount(count + 1)}>
 *   <span key={count}>Count: {count}</span>
 * </AnimatedButton>
 * ```
 *
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} props - Standard HTML button attributes
 * @returns {JSX.Element} A button element with animated content transitions
 */
const AnimatedButton = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const { children } = props;
  /**
   * Extract the key from children if it's a valid React element
   * This ensures proper animation transitions when content changes
   */
  const childKey = React.isValidElement(children) ? children.key : undefined;

  return (
    <button {...props}>
      <AnimatePresence mode='popLayout' initial={false}>
        <motion.div
          key={childKey}
          initial={{
            y: -20,
            opacity: 0,
            filter: 'blur(5px)',
          }}
          animate={{
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
          }}
          exit={{
            y: 20,
            opacity: 0,
            filter: 'blur(5px)',
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </button>
  );
};

export default AnimatedButton;
