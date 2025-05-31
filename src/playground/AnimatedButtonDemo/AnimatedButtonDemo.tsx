import { useEffect, useState } from 'react';
import { CheckCircledIcon, DownloadIcon } from '@radix-ui/react-icons';
import AnimatedButton from '../../components/AnimatedButton/AnimatedButton';

/**
 * A demo component showcasing the Button component with loading, success, and idle states.
 * Features a cool download button that transitions through a progress bar and success animation.
 */
const AnimatedButtonDemo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isLoading) {
      const loadingTimeout = window.setTimeout(() => {
        setIsSuccess(true);
        setIsLoading(false);
      }, 3000);

      return () => {
        clearTimeout(loadingTimeout);
      };
    }
  }, [isLoading]);

  useEffect(() => {
    let successTimeout: number;

    if (isSuccess) {
      successTimeout = window.setTimeout(() => {
        setIsSuccess(false);
      }, 2000);

      return () => {
        clearTimeout(successTimeout);
      };
    }
  }, [isSuccess]);

  return (
    <div className='flex items-center justify-center'>
      <AnimatedButton
        className={`bg-black text-white w-[240px] px-4 h-[50px] rounded-0 relative shadow-lg cursor-pointer`}
        onClick={() => setIsLoading(true)}
      >
        {isLoading ? (
          <div key='loading'>Loading...</div>
        ) : isSuccess ? (
          <div className='flex items-center justify-center gap-2' key='success'>
            <CheckCircledIcon />
            Success
          </div>
        ) : (
          <div key='idle' className='flex items-center justify-center gap-2'>
            <DownloadIcon /> Download
          </div>
        )}
      </AnimatedButton>
    </div>
  );
};

export default AnimatedButtonDemo;
