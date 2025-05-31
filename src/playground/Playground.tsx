import PushButton from '../components/PushButton/PushButton';
import AnimatedButtonDemo from './AnimatedButtonDemo/AnimatedButtonDemo';

const Playground = () => {
  return (
    <div className='flex flex-col gap-4 items-center justify-center h-[100vh]'>
      <>
        <p>animated button</p>
        <AnimatedButtonDemo />
      </>

      <>
        <p>push button</p>
        <PushButton
          style={{
            width: '240px',
            height: '50px',
          }}
        >
          Pay now
        </PushButton>
      </>
    </div>
  );
};

export default Playground;
