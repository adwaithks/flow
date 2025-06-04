import { useState } from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import Switch from '../../components/Switch/Switch';

const SwitchDemo = () => {
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);

  return (
    <div>
      <Switch
        isChecked={checked}
        onCheckedChange={val => setChecked(val)}
        activeState={<MoonIcon />}
        inactiveState={<SunIcon />}
        activeLabel={<span className='text-white'>Dark</span>}
        inactiveLabel={<span className='text-black'>Light</span>}
        switchRootClassName='mb-4'
      />

      <Switch
        isChecked={checked2}
        onCheckedChange={val => setChecked2(val)}
        activeState={<MoonIcon />}
        inactiveState={<SunIcon />}
        activeLabel={<span className='text-white'>Dark</span>}
        inactiveLabel={<span className='text-black'>Light</span>}
        switchRootClassName='rounded-none'
        switchThumbClassName='rounded-none'
      />
    </div>
  );
};

export default SwitchDemo;
