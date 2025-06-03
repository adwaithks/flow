import { HoverCard } from 'radix-ui';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface TabContentPopupProps {
  children: ReactNode;
}

const TabContentPopup = ({ children }: TabContentPopupProps) => {
  return (
    <HoverCard.Portal>
      <HoverCard.Content
        side='bottom'
        sideOffset={8}
        className='p-2 z-50 rounded-lg shadow-lg border border-gray-100 bg-white'
        asChild
        onPointerDownOutside={e => e.preventDefault()}
      >
        {/* container animation - opactiy */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.1,
            ease: 'easeOut',
          }}
        >
          {/* content animation - opacity and x */}
          <motion.div
            transition={{
              duration: 0.2,
              ease: 'easeOut',
            }}
            initial={{
              filter: 'blur(5px)',
              opacity: 0,
              x: -40,
            }}
            animate={{
              filter: 'blur(0px)',
              opacity: 1,
              x: 0,
            }}
          >
            {children}
          </motion.div>
        </motion.div>
      </HoverCard.Content>
    </HoverCard.Portal>
  );
};

export default TabContentPopup;
