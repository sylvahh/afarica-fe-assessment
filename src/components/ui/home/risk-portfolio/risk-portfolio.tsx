import RiskPortfolioList from './risk-portfolio-list';

const RiskPortfolio = () => {
  return (
    <div className='my-10 pt-10 lg:p-20 bg-black space-y-10 lg:space-y-20 text-white'>
      <div className='valley-bg text-center lg:rounded-lg  relative'>
        <div className=' absolute w-full h-full top-0' />
        <h1 className=' text-xl lg:text-4xl font-bold py-5'>
          What level of risk bests suits you <span>➳</span>
        </h1>
      </div>
      <div className='flex gap-20 lg:gap-10 flex-col lg:flex-row '>
        <div className='lg:w-1/3 px-5 lg:px-0'>
          <p>
            Sure, everyone wants to maximize their returns — but not everyone’s comfortable with the ups and downs that
            come with long-term investing. Whether you like to play it safe, take big bets, or both, how do you get the
            highest return for your comfort zone?
          </p>
        </div>
        <RiskPortfolioList />
      </div>
    </div>
  );
};

export default RiskPortfolio;
