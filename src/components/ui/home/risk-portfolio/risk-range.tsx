import React from 'react';
import { Range } from 'react-range';

const RiskRange = ({ risk, setRisk }: { risk: number[]; setRisk: React.Dispatch<React.SetStateAction<number[]>> }) => {
    return (
      <div className=' bg-[#f9f9f9] space-y-5 -mt-10  lg:w-[75%] mx-5 lg:mx-auto px-4 pt-3 pb-5 rounded-lg shadow-lg active:scale-[1.02] hover:scale-[1.02]'>
        <h1 className='text-[#230b59] text-xl font-bold'>Risk score: {risk}</h1>
        <div className=' hover:bg-hover shadow-sm '>
          <Range
            step={0.1}
            min={0.5}
            max={10}
            values={risk}
            onChange={(value) => setRisk(value)}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                style={{ ...props.style }}
                className='w-full h-2 border group hover:shadow active:shadow   hover:scale-110 bg-slate-200 rounded-full'>
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                }}
                className='h-[30px] w-[10px] bg-blue-400 active:bg-blue-700  hover:bg-blue-700  group-hover:w-[20px] active:w-[20px]  outline-none flex items-center justify-center shadow-black shadow'>
                {' '}
              </div>
            )}
          />
        </div>
      </div>
    );
};

export default RiskRange;
