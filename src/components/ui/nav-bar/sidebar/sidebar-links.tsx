import React from 'react';
import ManagedInvesting from '../managed-investing';
import DirectInvesting from '../direct-investing';
import AccountTypes from '../account-types';
import Support from '../support';

const SidebarLinks = ({showSidebar}: {showSidebar: boolean}) => {
  const [activeDropdown, setActiveDropdown] = React.useState<number | null>(null);

    React.useEffect(() => {
        if (!showSidebar) {
          setActiveDropdown(null)
      }

  }, [showSidebar]);
  const handleShowDropdown = (id: number) => {
    setActiveDropdown(activeDropdown === id  ? null : id);
  };
  return (
    <div className='bg-white'>
      <div className='flex  flex-col lg:flex-row flex-1 space-y-5 items-start w-full'>
        <div className='border-b px-5 pb-5 w-full'>
          <ManagedInvesting isActive={activeDropdown === 1} handleDropdown={handleShowDropdown} />
        </div>
        <div className='border-b px-5 pb-5 w-full'>
          <DirectInvesting isActive={activeDropdown === 2} handleDropdown={handleShowDropdown} />
        </div>
        <div className='border-b px-5 pb-5 w-full'>
          <a href='#' title='spend & save' className='font-semibold text-sm hover:scale-105'>
            Spend & Save
          </a>
        </div>
        <div className='border-b px-5 pb-5 w-full'>
          <a href='#' title='crypto' className='font-semibold text-sm hover:scale-105'>
            Crypto
          </a>
        </div>
        <div className='border-b px-5 pb-5 w-full'>
          <a href='#' title='tax filling' className='font-semibold text-sm hover:scale-105'>
            Tax filling
          </a>
        </div>
        <div className='border-b px-5 pb-5 w-full'>
          <AccountTypes isActive={activeDropdown === 3} handleDropdown={handleShowDropdown} />
        </div>

        {/* <div className='flex flex-col space-y-10 items-start '> */}
        <div className='border-b px-5 pb-5 w-full'>
          <a href='#' title='spend & save' className='font-semibold text-sm hover:scale-105'>
            Pricing
          </a>
        </div>
        <div className='border-b px-5 pb-5 w-full'>
          <Support isActive={activeDropdown === 4} handleDropdown={handleShowDropdown} />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default SidebarLinks;
