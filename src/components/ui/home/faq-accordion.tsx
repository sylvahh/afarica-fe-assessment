import React from 'react';
import { chevronDown } from '@constants/assests';
import { faqData } from '@constants/data';

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='lg:p-20 flex flex-col gap-10 w-full items-center justify-center'>
      <h1 className='text-5xl font-bold '>FAQs</h1>
      <div className='flex flex-col items-center gap-5 w-full border lg:max-w-[50%]'>
        {faqData.map((faq, index) => (
          <div key={index} className='faq-section flex flex-col w-full'>
            <button className='flex justify-between text-xl font-bold w-full p-5' onClick={() => handleToggle(index)}>
              <h1 className='text-left'>{faq.title}</h1>
              <img src={chevronDown} alt='chevron' className={`${openIndex === index ? ' rotate-180' : ''} w-5`} />
            </button>

            <div className={`${openIndex === index ? 'h-full block' : 'h-0 hidden'} p-5 transition-all duration-300`}>
              {faq.content.map((item, idx) => (
                <p key={idx} className=' text-gray-600 text-xl pb-3'>
                  {' '}
                  {item}{' '}
                </p>
              ))}
            </div>
            <hr />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQAccordion;
