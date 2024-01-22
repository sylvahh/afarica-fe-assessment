import React from 'react';
import RiskRange from './risk-range';
import { makeApiRequest } from '@/services/api';
import { STOCKS } from '@/global.type';
import spinner from '@/components/spinner';
import Portfolio from './portfolio';

const RiskPortfolioList = () => {
  const [risk, setRisk] = React.useState([3]);
  const [gettingList, setGettingList] = React.useState(true);
  const [portfolioList, setPortfolioList] = React.useState<STOCKS[]>([]);
  const [filterdPortfolioList, setFilteredPortfolioList] = React.useState<STOCKS[]>([]);

  const getPorfolioList = () => {
    makeApiRequest('/v1/stocks', 'GET')
      .then((res) => {
        const stocks = res.data.stocks as STOCKS[];
        setPortfolioList(stocks);
        setGettingList(false);
      })
      .catch((err) => console.error(err));
  };

  const updatePortfolioList = React.useCallback(() => {
    const updatedList = portfolioList.filter((item) => item['Risk Score'] === Number(risk[0].toFixed()));
    setFilteredPortfolioList(updatedList);
  }, [risk, portfolioList]);

  React.useEffect(() => {
    window.addEventListener('load', getPorfolioList);

    updatePortfolioList();
  }, [updatePortfolioList]);

  return (
    <div className='bg-[#230b59] relative flex-1 lg:pb-10'>
      <RiskRange risk={risk} setRisk={setRisk} />

      {gettingList ? (
        spinner('mini')
      ) : (
        <div className='flex flex-col gap-10 py-10'>
          {filterdPortfolioList.map((item, idx) => (
            <Portfolio {...item} key={idx} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RiskPortfolioList;
