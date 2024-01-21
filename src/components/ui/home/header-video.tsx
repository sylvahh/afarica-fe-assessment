import { headerVideo } from '@constants/assests';
import Button from '@components/button';
import { Fade } from 'react-awesome-reveal';

const HeaderVideo = () => {
  return (
    <Fade direction='down'  triggerOnce>
      <section className=' flex flex-col -mt-20 lg:mt-auto mb-20 float-end lg:float-none lg:flex-row justify-center gap-10 lg:gap-5 top-0 -z-10'>
        <div className='flex flex-col items-center lg:items-start justify-center text-center lg:text-start space-y-10 order-2 lg:order-first w-full lg:pl-20'>
          <h1 className='text-3xl lg:text-[58px] leading-tight font-bold '>
            Managed investing made to grow your wealth
          </h1>
          <p className='lg:text-xl'>
            We'll build you a smart, sophisticated investment portfolio <br /> designed to help you achieve your goals.
          </p>

          <Button
            title='get started'
            action={() => {}}
            style='px-5 py-3 rounded-full bg-black text-white hover:bg-opacity-80'
          />
        </div>
        <div className='lg:mt-10'>
          <video
            className='header-vid mx-auto w-full lg:w-[80%] lg:h-[85%] object-cover rounded-md'
            src={headerVideo}
            autoPlay
            controls={false}
            loop
            muted
            preload='auto'>
            <source type='video/webm' src={headerVideo}></source>
          </video>
        </div>
      </section>
    </Fade>
  );
};

export default HeaderVideo;
