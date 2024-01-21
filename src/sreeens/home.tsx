import React from 'react';
import HeaderVideo from '@ui/home/header-video';
import { managedPortfolios } from '../constants/data';
import InvestmentTypes from '@ui/home/investment-types';
import { sloth } from '../constants/assests';
import SwitchEasy from '@ui/home/switch-easy';
import SavingsTypes from '@ui/home/savings-types';
import WealthGrowth from '@ui/home/weath-growth';
import FAQAccordion from '@ui/home/faq-accordion';
import Footer from '@/components/ui/home/footer/foooter';
import Button from '@/components/button';
import MangagedPorpfoliosCard from '@/components/cards/managed-portfolios-card';
import RiskPortfolioList from '@/components/ui/home/risk-portfolio/risk-portfolio';
import { Fade } from 'react-awesome-reveal';
const Home = () => {
  return (
    <Fade direction='up' triggerOnce>
      <HeaderVideo />
        <div className='mt-20 lg:mt-0 lg:p-20 bg-slate-100'>
          <h1 className='text-3xl lg:text-5xl font-bold text-center lg:text-start'>
            Professionally managed portfolios,
            <br className='hidden lg:block' /> tailored to you.
          </h1>
          <div className='flex  mt-10 gap-5 flex-wrap lg:flex-nowrap w-full'>
            {managedPortfolios.map((item, idx) => (
              <MangagedPorpfoliosCard {...item} key={idx} />
            ))}
          </div>
        </div>
      <RiskPortfolioList />

      <InvestmentTypes />

      <div className=' relative flex flex-col justify-center items-center lg:bg-slate-100 p-5 my-10 lg:p-20 space-y-5 text-center lg:text-start'>
        <h1 className='text-3xl lg:text-5xl font-bold'>Let your taxes pay you for a change.</h1>
        <div className='w-full text-center space-y-5'>
          <strong>Tax-Loss Harvesting can find many small wins to boost your after-tax returns.</strong>
          <p className=' mx-auto lg:max-w-[50%]'>
            Our software monitors your investments to automatically trade similar assets that lose value, which can help
            you lower your tax bill while still keeping your portfolio on track. When you offset your capital gains by
            claiming many small losses, you can put the savings right back to work in the market. No tractors or shovels
            required.
          </p>
          <Button title='learn more' style='border border-black p-3 rounded-md hover:bg-black hover:text-white' />
        </div>
        <div className='hidden lg:block absolute right-[10%] floating-sloth'>
          <img src={sloth} alt='sloth' className='w-[250px]' />
        </div>
      </div>

      <SwitchEasy />
      <SavingsTypes />
      <WealthGrowth />

      <div className='mb-10 p-5 lg:p-20 bg-[#f9f9f9]'>
        <div className='flex justify-center items-center flex-col px-5 lg:px-10'>
          <div className=' flex w-full'>
            <span className='text-3xl lg:text-6xl font-bold font-serif'>“</span>
            <p className=' border-b-2 border-black w-full' />
          </div>
          <p className='text-xl lg:text-4xl  lg:px-10 text-justify font-serif '>
            <br />
            The best way to achieve your financial goals is by investing in low-cost, diversified portfolios of
            risk-appropriate assets.
            <br />
            <br />
            Our goal is to set you up for reliable returns across a range of market conditions.
            <span className='text-3xl lg:text-6xl font-bold font-serif'>”</span>
          </p>
        </div>
      </div>
      <FAQAccordion />
      <Footer />
    </Fade>
  );
};

export default Home;
