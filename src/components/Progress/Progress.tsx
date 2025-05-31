import * as ProgressPrimitive from '@radix-ui/react-progress';
import { cn } from '../../lib/utils';

interface ProgressProps {
  value?: number;
  className?: string;
}

/**
 * A progress bar component built on top of Radix UI Progress primitive.
 * Changes color based on the progress value - red (<30%), orange (<70%), or green.
 *
 * @param {Object} props
 * @param {number} [props.value=0] - The current progress value (0-100)
 * @param {string} [props.className] - Additional CSS classes to apply
 */
const Progress = ({ value = 0, className }: ProgressProps) => {
  const getProgressColor = (value: number) => {
    if (value < 30) return 'bg-red-500 dark:bg-red-400';
    if (value < 70) return 'bg-orange-500 dark:bg-orange-400';
    return 'bg-green-500 dark:bg-green-400';
  };

  return (
    <ProgressPrimitive.Root
      className={cn(
        'relative h-2 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800',
        className
      )}
    >
      <ProgressPrimitive.Indicator
        className={cn(
          'h-full w-full flex-1 transition-all duration-300 ease-in-out',
          getProgressColor(value || 0)
        )}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
};

export default Progress;
