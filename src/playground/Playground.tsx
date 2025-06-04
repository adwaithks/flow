import PopperTabsDemo from './PopperTabsDemo/PopperTabsDemo';
import PushButton from '../components/PushButton/PushButton';
import ShimmerButton from '../components/ShimmerButton/ShimmerButton';
import AnimatedButtonDemo from './AnimatedButtonDemo/AnimatedButtonDemo';
import SwitchDemo from './SwitchDemo/SwitchDemo';

const Playground = () => {
  return (
    <div className='flex flex-col gap-4 items-center justify-center h-[100%]'>
      <div className='w-[100%] p-2 mt-2 flex items-center justify-center'>
        <PopperTabsDemo />
      </div>

      <SwitchDemo />
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

      <>
        <p>shimmer button</p>
        <ShimmerButton
          style={{
            width: '250px',
            height: '60px',
            display: 'flex',
          }}
        >
          <span className='text-black text-[12px] h-[100%] font-semibold flex items-center justify-center'>
            Pay now
          </span>
        </ShimmerButton>
      </>
    </div>
  );
};

export default Playground;
