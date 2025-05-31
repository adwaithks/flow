import { useEffect, useState } from 'react';
import { CheckCircledIcon, DownloadIcon } from '@radix-ui/react-icons';
import Button from '../../components/Button/Button';
import Progress from '../../components/Progress/Progress';

/**
 * A demo component showcasing the Button component with loading, success, and idle states.
 * Features a cool download button that transitions through a progress bar and success animation.
 */
const ButtonDemo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let progressInterval: number;

    if (isLoading) {
      progressInterval = window.setInterval(() => {
        setProgress(prevProgress => {
          if (prevProgress >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prevProgress + 10;
        });
      }, 250);

      const loadingTimeout = window.setTimeout(() => {
        setIsSuccess(true);
        setIsLoading(false);
        setProgress(0);
      }, 3000);

      return () => {
        clearInterval(progressInterval);
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
    <div className='bg-black h-screen w-screen flex items-center justify-center'>
      <Button
        className={`bg-white text-black w-[240px] px-4 h-[45px] rounded-md relative shadow-lg cursor-pointer`}
        onClick={() => setIsLoading(true)}
      >
        {isLoading ? (
          <div key='loading'>
            <Progress value={progress} />
          </div>
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
      </Button>
    </div>
  );
};

export default ButtonDemo;
