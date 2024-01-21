import { easySwitch } from '@constants/assests';
import Button from '@components/button';

const SwitchEasy = () => {
  return (
    <section className=' flex flex-col - lg:flex-row justify-center gap-10 lg:gap-5 top-0 -z-10 lg:p-20'>
      <div className='flex flex-col items-center lg:items-start justify-center text-center lg:text-start space-y-10 order-2 lg:order-first w-full '>
        <h1 className='text-3xl lg:text-[64px] leading-tight font-bold '>
          Making the switch <br /> is easy
        </h1>
        <p className='lg:text-2xl lg:pr-20'>
          Coming from another institution? Move more than $5,000 to Wealthsimple, and we'll reimburse the first transfer
          fees charged by your brokerage.
        </p>

        <Button
          title='contact our team'
          action={() => {}}
          style='px-5 py-3 rounded-full border border-black hover:bg-opacity-80'
        />
      </div>
      <div className='lg:mt-10 bg-[#F4E9D3] rounded-2xl'>
        <video
          className='header-vid mx-auto w-full'
          src={easySwitch}
          autoPlay
          controls={false}
          loop
          muted
          preload='auto'>
          <source type='video/webm' src={easySwitch}></source>
        </video>
      </div>
    </section>
  );
};

export default SwitchEasy;
