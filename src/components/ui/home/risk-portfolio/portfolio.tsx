import { bgColors } from "@/constants/data";
import { STOCKS } from "@/global.type";
import React from "react";


const Portfolio = (item:STOCKS) => {
    return (
      <React.Fragment>
        <div className='flex flex-col px-5 lg:px-10 gap-3'>
          {Object.entries(item).map(([key, value], idx) => {
            const excludedkeys = ['id', 'risk score'];

            if (!excludedkeys.includes(key.toLocaleLowerCase())) {
              const splittedValue = String(value).split('%');
              if (Number(splittedValue[0]) > 0) {
                return (
                  <div key={idx} className='flex w-full justify-between items-center'>
                    <p className='w-1/3'>{key}</p>
                    <div
                      className='flex justify-start items-center transition-all duration-300 rounded min-w-8 h-10'
                      style={{ width: value, background: bgColors[idx] }}>
                      <p className='p-2'> {value}</p>
                    </div>
                  </div>
                );
              }
            }
          })}
        </div>
        <hr className=' px-5 border-slate-500' />
        <div className='flex px-5 lg:px-10 gap-5 flex-wrap'>
          {Object.entries(item).map(([key, value], idx) => {
            const splittedValue = String(value).split('%');
            if (Number(splittedValue[0]) < 1)
              return (
                <div key={idx} className=' text-slate-400 flex items-center space-x-5 transition-all'>
                  <p className=''>{key}</p>
                  <div className='   duration-300 '>{value}</div>
                  <span>|</span>
                </div>
              );
          })}
        </div>
      </React.Fragment>
    );
}

export default Portfolio