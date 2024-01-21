import { wealthGrowthData } from '../../../constants/data';
import WealthGrowthCard from '../../cards/wealth-growth-cards';

const WealthGrowth = () => {
  return (
    <section className='flex flex-col bg-white justify-center lg:justify-normal gap-10 my-10 lg:p-20 p-5'>
      <div className='space-y-5 text-center lg:text-left lg:w-1/2'>
        <h1 className='text-3xl lg:text-5xl font-bold '>Get more as your wealth grows</h1>
        <p className='text-xl text-gray'>
          Whether you’re just starting out or you’re an experienced investor, we’re here to help. And as your wealth
          grows, so do your benefits.
        </p>
      </div>
      <div className=' flex gap-10  flex-wrap'>
        {wealthGrowthData.map((item, idx) => (
          <WealthGrowthCard {...item} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default WealthGrowth;
