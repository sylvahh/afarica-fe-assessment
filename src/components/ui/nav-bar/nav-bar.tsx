import React from 'react';
import { logo, menu } from '@constants/assests';
import Button from '@components/button';
import TopNav from './top-nav';
import Sidebar from './sidebar/sidebar';

const NavBar = () => {
  const [showSidebar, setShowSidebar] = React.useState(false);
  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const [visible, setVisible] = React.useState(true);

  const [activeDropdown, setActiveDropdown] = React.useState<number | null>(null);

 

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      const isScrollingUp = currentScrollPos > prevScrollPos;
      setVisible(!isScrollingUp);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <div className={`sticky top-0 z-50`} >
      <div
        className={`
        ${prevScrollPos > 100 ? 'bg-white' : ''} 
        flex flex-col w-full transition-all lg:bg-white duration-300`}>
        <div className='flex w-[90%] mx-auto items-center justify-between py-5'>
          <div className=''>
            <a href='/'>
              <img src={logo} alt='logo' className='w-[175px]' />
            </a>
          </div>
          <div className='flex space-x-5 '>
            <button onClick={() => setShowSidebar(true)} className='lg:hidden'>
              <img src={menu} alt='menu' className='w-10' />
            </button>

            <Button
              title='log in'
              action={() => {}}
              style='hidden lg:block px-5 py-2 rounded-full border border-black'
            />
            <Button
              title='get started'
              action={() => {}}
              style='hidden lg:block px-5 py-2 rounded-full bg-black text-white hover:bg-opacity-80'
            />
          </div>
        </div>
        <hr className='hidden lg:block' />

        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      </div>
      <TopNav visible={visible} activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown}  />
    </div>
  );
};

export default NavBar;
