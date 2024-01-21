import React from 'react';
import SidebarLinks from './sidebar-links';
import { logo, xmark } from '@constants/assests';
import Button from '@components/button';

type SidebarProps = {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({ showSidebar, setShowSidebar }: SidebarProps) => {
  return (
    <div className={`${showSidebar ? '  z-50 ' : '-translate-x-full'} flex flex-col lg:hidden sidebar`}>
      <div className='flex justify-between items-center p-2 bg-white'>
        <a href='/'>
          <img src={logo} alt='logo' className='w-[175px]' />
        </a>
        <button onClick={() => setShowSidebar(false)} className='block lg:hidden p-2'>
          <img src={xmark} alt='x-mark' className='w-8' />
        </button>
      </div>

      <hr />

      <nav className={`my-10 flex-1`}>
        {/* nav links */}
        <ul className={`space-y-4 overflow-auto pb-5`}>
          <SidebarLinks showSidebar={showSidebar} />
        </ul>
      </nav>
      <div className='flex justify-center space-x-10 '>
        <Button title='log in' action={() => {}} style='px-5 py-2 rounded-full border border-black' />
        <Button
          title='get started'
          action={() => {}}
          style='px-5 py-2 rounded-full bg-black text-white hover:bg-opacity-80'
        />
      </div>
    </div>
  );
};

export default Sidebar;
