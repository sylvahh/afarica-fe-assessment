import { chevronDown } from '@constants/assests';
import DropdownWrapper from '@components/dropdown-wrapper';
type SupportProps = {
  handleDropdown: (id: number) => void;
  isActive: boolean;
};
const Support = ({ isActive, handleDropdown }: SupportProps) => {
  const ref = 4;
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
              Support
            </a>
          </div>
        </div>
        <div className='flex flex-col gap-10 flex-1'>
          <div className='w-full px-5'>
            <h2 className=' font-mono font-thin uppercase pb-3 text-gray-600'>Investing products</h2>

            <div className='flex flex-col gap-3'>
              <a href='#' className='hover:scale-105  text-base capitalize'>
                Transfer an account
              </a>
              <a href='#' className='hover:scale-105  text-base'>
                Help center
              </a>
            </div>
          </div>
          <div className='w-full px-5'>
            <h2 className=' font-mono font-thin uppercase pb-3 text-gray-600'>Investing products</h2>

            <div className='flex flex-col gap-3'>
              <a href='#' className='hover:scale-105  text-base capitalize'>
                Personal finance how-tos
              </a>
              <a href='#' className='hover:scale-105  text-base'>
                Wealthsimple Magazine
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className='flex items-center  bg-white'>
      <button onClick={() => handleDropdown(ref)} className={`${isActive ? 'scale-105' : ''} top-nav_btn`}>
        Support
        <img src={chevronDown} alt='chevron' className='w-4 ml-1' />
      </button>
      {mobileDrawer}
      <DropdownWrapper isActive={isActive}>
        <div className='flex w-full h-full '>
          <div className='bg-[#7472721a] w-[40%] p-20 group cursor-pointer'>
            <div className='space-y-10 flex flex-col justify-center items-start'>
              <h1 className='text-3xl font-semibold'>Support </h1>
              <p className=' text-base font-medium'>
                Need a hand? we are here to help. Get in touch with our team anytime, or browse our articles to help
                answer questions
              </p>
            </div>
          </div>

          <div className='flex justify-between gap-10 flex-1 p-20'>
            <div className='w-full'>
              <h2 className=' font-mono font-thin uppercase pb-3 text-gray-600'>help</h2>
              <hr />
              <div className='flex flex-col gap-3 mt-3'>
                <a href='#' className='hover:scale-105 capitalize'>
                  Transfer an account
                </a>
                <a href='#' className='hover:scale-105'>
                  Help center
                </a>
              </div>
            </div>

            <div className='w-full'>
              <h2 className=' font-mono font-thin uppercase pb-3 text-gray-600'>learn</h2>
              <hr />
              <div className='flex flex-col gap-3 mt-3'>
                <a href='#' className='hover:scale-105 capitalize'>
                  Personal finance how-tos
                </a>
                <a href='#' className='hover:scale-105'>
                  Wealthsimple Magazine
                </a>
              </div>
            </div>

            <div className='w-full'>
              <h2 className=' font-mono font-thin uppercase pb-3 text-gray-600'>tools</h2>
              <hr />
              <div className='flex flex-col gap-3 mt-3'>
                <a href='#' className='hover:scale-105'>
                  Tax calculator
                </a>
                <a href='#' className='hover:scale-105'>
                  RRSP calculator
                </a>{' '}
                <a href='#' className='hover:scale-105'>
                  TFSA calculator
                </a>{' '}
                <a href='#' className='hover:scale-105'>
                  Retirement calculator
                </a>
                <a href='#' className='hover:scale-105'>
                  Fee calculator
                </a>
              </div>
            </div>
          </div>
        </div>
      </DropdownWrapper>
    </div>
  );
};

export default Support;
