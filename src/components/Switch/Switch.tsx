import { Switch as RadixSwitch } from 'radix-ui';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const Switch = ({
  isChecked,
  activeState,
  inactiveState,
  activeLabel,
  inactiveLabel,
  onCheckedChange,
  switchRootClassName,
  switchThumbClassName,
}: {
  isChecked: boolean;
  onCheckedChange: (val: boolean) => void;

  activeState?: React.ReactNode;
  inactiveState?: React.ReactNode;
  activeLabel?: React.ReactNode;
  inactiveLabel?: React.ReactNode;

  switchRootClassName?: string;
  switchThumbClassName?: string;
}) => {
  return (
    <RadixSwitch.Root
      className={cn(
        'w-14 h-8 bg-gray-100 rounded-full relative data-[state=checked]:bg-black transition-colors flex items-center',
        switchRootClassName
      )}
      checked={isChecked}
      onCheckedChange={onCheckedChange}
    >
      <RadixSwitch.Thumb
        className={cn(
          'bg-white flex items-center justify-center w-6 h-6 rounded-full absolute top-1 left-1 transition-transform data-[state=checked]:translate-x-6',
          switchThumbClassName
        )}
      >
        <AnimatePresence initial={false} mode='popLayout'>
          <motion.div
            key={isChecked ? 'thumb-is-checked' : 'thumb-is-unchecked'}
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 0.2,
              ease: 'easeOut',
            }}
          >
            {isChecked ? (
              <motion.div
                key='active-state'
                transition={{
                  duration: 0.3,
                }}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
              >
                {activeState}
              </motion.div>
            ) : (
              <motion.div
                key='inactive-state'
                transition={{
                  duration: 0.3,
                }}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
              >
                {inactiveState}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </RadixSwitch.Thumb>
      <div
        style={{
          justifyContent: isChecked ? 'flex-start' : 'flex-end',
        }}
        className='w-[100%] flex items-center'
      >
        <AnimatePresence initial={false}>
          <motion.span
            transition={{
              duration: 0.3,
              ease: 'easeOut',
            }}
            initial={{
              opacity: 0,
              x: isChecked ? -2 : 2,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            key={isChecked ? 'label-is-checked' : 'label-is-unchecked'}
            className='px-[4px] text-[7px] font-semibold uppercase'
          >
            {isChecked ? activeLabel : inactiveLabel}
          </motion.span>
        </AnimatePresence>
      </div>
    </RadixSwitch.Root>
  );
};

export default Switch;
