import React from 'react';
import ManagedInvesting from './managed-investing';
import DirectInvesting from './direct-investing';
import AccountTypes from './account-types';
import Support from './support';

type TopNavProps = {
  visible: boolean;
  activeDropdown: number | null;
  setActiveDropdown: React.Dispatch<React.SetStateAction<number | null>>;
}; 
const TopNav = ({ visible, activeDropdown, setActiveDropdown, }: TopNavProps) => {
 const onNavbarLeave = () => {
   if (activeDropdown) {
     setActiveDropdown(null);
   }
 };
  const handleShowDropdown = (id: number) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <React.Fragment>
      <div
        onMouseLeave={onNavbarLeave}
        className={` 
        ${visible ? '' : 'transform -translate-y-full'}
       transition-transform ease-linear duration-300  -z-50 hidden lg:block bg-white relative delay-300`}>
        <div className='flex  h-14 w-[90%] mx-auto gap-10'>
          <div className='flex flex-1 space-x-5 items-center border-r'>
            <ManagedInvesting isActive={activeDropdown === 1} handleDropdown={handleShowDropdown} />
            <DirectInvesting isActive={activeDropdown === 2} handleDropdown={handleShowDropdown} />
            <a href='#' title='spend & save' className='font-semibold text-sm hover:scale-105'>
              Spend & Save
            </a>

            <a href='#' title='crypto' className='font-semibold text-sm hover:scale-105'>
              Crypto
            </a>
            <a href='#' title='tax filling' className='font-semibold text-sm hover:scale-105'>
              Tax filling
            </a>
            <AccountTypes isActive={activeDropdown === 3} handleDropdown={handleShowDropdown} />
          </div>

          <div className='flex  space-x-10 items-center'>
            <a href='#' title='spend & save' className='font-semibold text-sm hover:scale-105'>
              Pricing
            </a>
            <Support isActive={activeDropdown === 4} handleDropdown={handleShowDropdown} />
          </div>
        </div>
        <hr className={`lg:block  hidden `} />
      </div>
    </React.Fragment>
  );
};

export default TopNav;
