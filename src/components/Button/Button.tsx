import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * A cool button component with smooth animations! 🚀
 * Wraps your content with some sweet Framer Motion transitions.
 * Just pass in your props like a regular button and watch the magic happen.
 *
 * @param props - All the usual button props you'd expect (it's just a button, but cooler)
 */
const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { children } = props;
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

export default Button;
