import { flower, halalCoin, pieChart, rightArrow } from '@constants/assests';

const InvestmentTypes = () => {
  return (
    <section className='flex flex-col lg:grid grid-cols-5 grid-rows-5 gap-10 py-10 lg:p-20'>
      <div className='col-span-2 row-span-5 col-start-4 row-start-1'>
        <div className='investment-types_card flex-col group bg-[#F4E9D3]'>
          <div className='space-y-3.5 px-5 lg:px-10'>
            <h1>Socially responsible investing</h1>
            <p>
              Invest in socially responsible companies across the globe, so you can grow your wealth while creating the
              world you want.
            </p>
            <button className=' '>
              <img src={rightArrow} alt='right arrow' className='w-5  ' />
            </button>
          </div>
          <div className='img-container'>
            <img src={flower} alt='flower' className='max-h-[280px]  ' />
          </div>
        </div>
      </div>
      <div className='col-span-3 row-span-5 col-start-1 row-start-1 flex flex-col gap-10 order-first lg:order-none'>
        <div className='lg:mr-10 space-y-10 text-center lg:text-start px-5'>
          <h1 className='text-3xl lg:text-5xl font-bold'>
            Investing that fits your <br /> goals and values
          </h1>
          <p className='text-xl lg:pr-10'>
            We’ll get to know you and what you’re saving for, then place you in a portfolio that helps you get there.
          </p>
        </div>

        <div className='investment-types_card flex-col group bg-[#F9F2EF]'>
          <div className='space-y-10 px-5 lg:px-10'>
            <h1>Classic portfolio</h1>
            <p>
              Smart and diversified, built for long-term growth in fluctuating markets with a wide range of low-fee
              ETFs.
            </p>
            <button className=''>
              <img src={rightArrow} alt='right arrow' className='w-5  ' />
            </button>
          </div>
          <div className='img-container'>
            <img src={pieChart} alt='pieChart' />
          </div>
        </div>
      </div>

      <div className='col-span-5 row-span-2 row-start-6'>
        <div className='investment-types_card flex-col lg:flex-row group bg-[#F1F0F0]'>
          <div className='space-y-10 px-5 lg:px-10 w-full '>
            <h1>Halal investing</h1>

            <p>
              Smart and diversified, built for long-term growth in fluctuating markets with a wide range of low-fee
              ETFs.
            </p>

            <button className=''>
              <img src={rightArrow} alt='right arrow' className='w-5  ' />
            </button>
          </div>
          <div className='img-container'>
            <img src={halalCoin} alt='halalCoin' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentTypes;
