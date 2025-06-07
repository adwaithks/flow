import PopperTabsDemo from './PopperTabsDemo/PopperTabsDemo';
import PushButton from '../components/PushButton/PushButton';
import ShimmerButton from '../components/ShimmerButton/ShimmerButton';
import AnimatedButtonDemo from './AnimatedButtonDemo/AnimatedButtonDemo';
import SwitchDemo from './SwitchDemo/SwitchDemo';
import ShadowTrackingText from '../components/ShadowTrackingText/ShadowTrackingText';
import RevealCard from '../components/RevealCard/RevealCard';

const Playground = () => {
  return (
    <div className='flex flex-col gap-4 items-center justify-center h-[100%]'>
      <div className='w-[100%] p-2 mt-2 flex items-center justify-center'>
        <PopperTabsDemo />
      </div>

      <SwitchDemo />

      <>
        <p>Card Components</p>
        <div className='flex flex-wrap gap-4 max-w-4xl justify-center'>
          {/* Data Security Card */}
          <RevealCard
            overlay={
              <div className='text-2xl font-semibold tracking-tighter p-2 text-white bg-gradient-to-r from-purple-800 via-purple-700 to-purple-900 w-full h-full items-center justify-center flex'>
                unless it's <br /> you listening
              </div>
            }
          >
            <div className='text-2xl font-semibold tracking-tighter p-2 text-black flex items-center justify-center'>
              your data <br /> doesn't speak
            </div>
          </RevealCard>
        </div>
      </>

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

      <ShadowTrackingText>Shadow tracking text</ShadowTrackingText>
    </div>
  );
};

export default Playground;
