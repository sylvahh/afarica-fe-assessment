import React from 'react';
import { savingsTypesData } from '@constants/data';
import SavingsTypeCard from '@components/cards/saving-types-cards';

type SavingTabsType = 'retirement' | 'education' | 'home' | 'all';

const savingsTabs: SavingTabsType[] = ['retirement', 'education', 'home', 'all'];

const SavingsTypes = () => {
  const [activeTab, setActiveTab] = React.useState<SavingTabsType>('retirement');

  const filterdSavingsType =
    activeTab === 'all'
      ? [...new Map(savingsTypesData.map((item) => [item.title, item])).values()]
      : savingsTypesData.filter((item) => {
          if (item.category === activeTab) {
            return item;
          }
        });

  return (
    <section className='flex flex-col bg-[#f9f9f9] justify-center lg:justify-normal gap-10 my-10 lg:p-20 p-5'>
      <div className='space-y-5 text-center lg:text-left'>
        <h1 className='text-3xl lg:text-5xl font-bold '>What are you saving for?</h1>
        <p className='text-xl text-gray'>We have a range of account types to help you get there.</p>
      </div>

      <ul className='flex  space-x-5 lg:space-x-10 justify-center py-5 px-10 border border-black w-fit rounded-full '>
        {savingsTabs.map((item, idx) => (
          <li
            onClick={() => setActiveTab(item)}
            key={idx}
            className={`${
              activeTab === item ? 'border-b' : ''
            } hover:border-b border-black hover:scale-105 transition-all duration-300 `}>
            <button className='capitalize font-bold'>{item}</button>
          </li>
        ))}
      </ul>
      <div className=' flex gap-10  flex-wrap'>
        {filterdSavingsType.map((item, idx) => (
          <SavingsTypeCard {...item} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default SavingsTypes;
