import PopperTab from './components/PopperTab';

interface Tab {
  tab: string;
  value: string;
  content: React.ReactNode;
}

const Separator = () => {
  return <div className='w-[1px] h-4 bg-gray-300 rounded-full' />;
};

const PopperTabs = ({ tabs }: { tabs: Tab[] }) => {
  return (
    <div className='flex items-center gap-2 border border-gray-300 rounded-md p-1'>
      {tabs.map((tab, index) => {
        return (
          <>
            <PopperTab key={tab.value} id={index + 1} tab={tab} />
            {index !== tabs.length - 1 && <Separator />}
          </>
        );
      })}
    </div>
  );
};

export default PopperTabs;
