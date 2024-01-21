import { logo, tldrIcon } from '@constants/assests';
import Button from '@components/button';
import FooterLinks from './flooter-links';
// import FooterLinks from './flooter-links';

const Footer = () => {
  return (
    <footer className='bg-black text-white space-y-16 mt-10 p-5 lg:pb-5 lg:p-20'>
      <div className='flex flex-col  gap-10 lg:gap-0 lg:flex-row  lg:justify-between'>
        <div className='lg:w-1/3'>
          <div className='bg-white p-2 rounded-full w-[35%] mb-5'>
            <img src={tldrIcon} alt='' className='' />
          </div>
          <p>Sign up for our weekly non-boring newsletter about money, markets, and more.</p>
          <a href='#' className='underline'>
            Meet TLDR
          </a>
        </div>
        <div className='flex flex-col gap-5  lg:w-1/2'>
          <div className='flex justify-between gap-10  '>
            <input
              type='email'
              placeholder='Enter your email'
              name='email'
              id='email'
              className='w-full py-3 px-5 rounded-full'
            />
            <Button
              title='subcribe'
              action={() => {}}
              style='w-1/2 block px-5 py-2 bg-white text-black rounded-full  hover:bg-opacity-80'
            />
          </div>
          <small>
            By providing your email, you are consenting to receive communications from Wealthsimple Media Inc. Visit our
            <a href='#' className='underline'>
              Privacy Policy
            </a>
            for more info, or contact us at
            <a href='#' className='underline '>
              privacy@wealthsimple.com
            </a>
            or 80 Spadina Ave., Toronto, ON
          </small>
        </div>
      </div>

      <hr />

      <div className='flex justify-between items-center'>
        <a href='#' className='bg-white p-2 flex justify-center items-center rounded-lg'>
          <img src={logo} alt='logo' className='w-[200px]' />
        </a>
        <div>
          <select name='lang' className='border text-black  p-2 '>
            <option value=''>English</option>
            <option value='fr'>Francais</option>
          </select>
        </div>
      </div>
      <FooterLinks />

      <div className='text-sm text-center'>
        <pre>© 2016–2024, Wealthsimple Technologies Inc. <br className='lg:hidden' /> All Rights Reserved.</pre>
        <small >
          For further details see our
          <a href='#' className='underline px-1'>
            Legal Disclosures
          </a>
          . By using this website, you accept our
          <a href='#' className='underline px-1'>
            Terms of Use
          </a>
          and
          <a href='#' className='underline px-1'>
            Privacy Policy
          </a>
          . For information about filing a complaint please visit
          <a href='#' className='underline px-1'>
            How to File a Complaint
          </a>
          .
        </small>
      </div>
    </footer>
  );
};

export default Footer;
