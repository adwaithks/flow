import { HoverCard } from 'radix-ui';
import React, { useState } from 'react';
import PopperTabContentPopup from './PopperTabContentPopup';

const PopperTab = (props: {
  tab: { value: string; tab: string; content: React.ReactNode };
  id: number;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { tab, id } = props;

  return (
    <HoverCard.Root
      onOpenChange={val => setIsOpen(val)}
      openDelay={0}
      closeDelay={100}
    >
      <HoverCard.Trigger asChild>
        <span
          tabIndex={id}
          className={`${isOpen ? 'text-black bg-gray-100' : 'text-gray-700'} px-3 py-1 tracking-wider cursor-pointer capitalize text-sm rounded-md font-regular`}
        >
          {tab.tab}
        </span>
      </HoverCard.Trigger>

      <PopperTabContentPopup>{tab.content}</PopperTabContentPopup>
    </HoverCard.Root>
  );
};

export default PopperTab;
