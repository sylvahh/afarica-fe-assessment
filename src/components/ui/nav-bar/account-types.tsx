import { chevronDown, rightArrow } from '@constants/assests';
import DropdownWrapper from '@components/dropdown-wrapper';
type AccountTypesProps = {
  handleDropdown: (id: number) => void;
  isActive: boolean;
};
const AccountTypes = ({ isActive, handleDropdown }: AccountTypesProps) => {
  const ref = 3;

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
        <div className='w-full'>
          <div className='px-5'>
            <a href='#' className='hover:scale-105  text-base'>
              Account types
            </a>
          </div>
        </div>
        <div className='flex flex-col gap-10 flex-1'>
          <div className='w-full px-5'>
            <h2 className=' font-mono font-thin uppercase pb-3 text-gray-600'>Investing</h2>

            <div className='flex flex-col gap-3'>
              <a href='#' className='hover:scale-105  text-base capitalize'>
                Registered Reqiurement savings plans (RRSP)
              </a>
              <a href='#' className='hover:scale-105  text-base'>
                tax-free saving account (TFSA)
              </a>
              <a href='#' className='hover:scale-105  text-base'>
                First Home Savings Account (FHSA)
              </a>
              <a href='#' className='hover:scale-105  text-base'>
                All accounts
              </a>
            </div>
          </div>
          <div className='w-full px-5'>
            <h2 className=' font-mono font-thin uppercase pb-3 text-gray-600'>SPENDING & SAVING</h2>

            <div className='flex flex-col gap-3'>
              <a href='#' className='hover:scale-105  text-base'>
                High-interest cash account
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className='flex items-center'>
      <button onClick={() => handleDropdown(ref)} className={`${isActive ? 'scale-105' : ''} top-nav_btn`}>
        Account types
        <img src={chevronDown} alt='chevron' className='w-4 ml-1' />
      </button>
      {mobileDrawer}
      <DropdownWrapper isActive={isActive}>
        <div className='flex w-full h-full '>
          <div className='bg-[#7472721a] w-[40%] p-20 group cursor-pointer'>
            <div className='space-y-10 flex flex-col justify-center items-start'>
              <h1 className='text-3xl font-semibold'>Account types </h1>
              <p className=' text-base font-medium'>
                whether you're saving up for the long run or building your first emergency fund, we have accounts that
                will help make the most of your money.
              </p>
              <button className=' bg-black p-2 rounded-full group-hover:scale-125'>
                <img src={rightArrow} alt='right arrow' className='w-5  ' />
              </button>
            </div>
          </div>
          <div className='flex justify-between gap-10 flex-1 p-20'>
            <div className='w-full'>
              <h2 className=' font-mono font-thin uppercase pb-3 text-gray-600'>Investing</h2>
              <hr />
              <div className='flex flex-col gap-3 mt-3'>
                <a href='#' className='hover:scale-105 capitalize'>
                  Registered Reqiurement savings plans (RRSP)
                </a>
                <a href='#' className='hover:scale-105'>
                  tax-free saving account (TFSA)
                </a>
                <a href='#' className='hover:scale-105'>
                  First Home Savings Account (FHSA)
                </a>
                <a href='#' className='hover:scale-105'>
                  All accounts
                </a>
              </div>
            </div>

            <div className='w-full'>
              <h2 className=' font-mono font-thin uppercase pb-3 text-gray-600'>SPENDING & SAVING</h2>
              <hr />
              <div className='flex flex-col gap-3 mt-3'>
                <a href='#' className='hover:scale-105'>
                  High-interest cash account
                </a>
              </div>
            </div>
          </div>
        </div>
      </DropdownWrapper>
    </div>
  );
};

export default AccountTypes;
