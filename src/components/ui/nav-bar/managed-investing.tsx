import { chevronDown, rightArrow } from '@constants/assests';
import DropdownWrapper from '@components/dropdown-wrapper';

type ManagedInvestionProps = {
  handleDropdown: (id: number) => void;
  isActive: boolean;
};

const ManagedInvesting = ({ handleDropdown, isActive }: ManagedInvestionProps) => {
  const ref = 1;

  const mobileDrawer = (
    <div
      className={`fixed bg-white lg:hidden  ${
        isActive ? 'top-[6%] ' : '-z-[20] -translate-y-full'
      }    left-0 w-screen h-full shadow-md  transition-all duration-500 `}>
      <div className='flex flex-col  w-full h-full space-y-5 '>
        <button
          onClick={() => handleDropdown(ref)}
          className=' flex justify-end items-center px-4 border-b py-4 font-bold '>
          <img src={chevronDown} alt='chevron' className='w-5 mr-1 rotate-180 lg:rotate-0' />
        </button>
        {/* <hr /> */}
        <div className='w-full'>
          <div className='px-5'>
            <a href='#' className='hover:scale-105 underline text-base'>
              Managed investing
            </a>
          </div>
        </div>
        <div className='flex flex-col gap-10 flex-1'>
          <div className='w-full px-5'>
            <h2 className=' font-mono font-thin uppercase pb-3 text-gray-600'>Portfolios</h2>

            <div className='flex flex-col gap-3 '>
              <a href='#' className='hover:scale-105 underline text-base'>
                Classic portfolio Socially
              </a>
              <a href='#' className='hover:scale-105 underline text-base'>
                Responsible portfolio
              </a>
              <a href='#' className='hover:scale-105 underline text-base'>
                Halal portfolio
              </a>
            </div>
          </div>
          <div className='w-full px-5'>
            <h2 className='font-mono font-thin uppercase pb-3 text-gray-600'>Alternative investing</h2>

            <div className='flex flex-col gap-3'>
              <a href='#' className='hover:scale-105 underline text-base'>
                Private credit
              </a>
              <a href='#' className='hover:scale-105 underline text-base'>
                Private equity
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className='flex items-center  '>
      <button onClick={() => handleDropdown(ref)} className={`${isActive ? 'scale-105' : ''} top-nav_btn`}>
        <span> Managed investing</span>
        <img src={chevronDown} alt='chevron' className='w-4 ml-1 rotate- lg:rotate-0' />
      </button>
      {mobileDrawer}
      <DropdownWrapper isActive={isActive}>
        <div className='flex w-full h-full '>
          <div className='bg-[#7472721a] w-[40%] p-20 group cursor-pointer'>
            <div className='space-y-10 flex flex-col justify-center items-start'>
              <h1 className='text-3xl font-semibold'>Managed Investing </h1>
              <p className=' text-base font-medium'>
                Let us build you a custom portfolio that's designed for long-term growth. Plus, get expert advice
                whenever you need it.
              </p>
              <button className=' bg-black p-2 rounded-full group-hover:scale-125'>
                <img src={rightArrow} alt='right arrow' className='w-5  ' />
              </button>
            </div>
          </div>
          <div className='flex justify-between gap-10 flex-1 p-20'>
            <div className='w-full'>
              <h2 className=' font-mono font-thin uppercase pb-3 text-gray-600'>Portfolios</h2>
              <hr />
              <div className='flex flex-col gap-3 mt-3'>
                <a href='#' className='hover:scale-105'>
                  Classic portfolio Socially
                </a>
                <a href='#' className='hover:scale-105'>
                  Responsible portfolio
                </a>
                <a href='#' className='hover:scale-105'>
                  Halal portfolio
                </a>
              </div>
            </div>
            <div className='w-full'>
              <h2 className=' font-mono font-thin uppercase pb-3 text-gray-600'>Alternative investing</h2>
              <hr />
              <div className='flex flex-col gap-3 mt-3'>
                <a href='#' className='hover:scale-105'>
                  Private credit
                </a>
                <a href='#' className='hover:scale-105'>
                  Private equity
                </a>
              </div>
            </div>
          </div>
        </div>
      </DropdownWrapper>
    </div>
  );
};

export default ManagedInvesting;
