import { checkMark, checkMarkWhite, rightArrow } from '@constants/assests';
import { WealthGrowthType } from '@constants/data';


const WealthGrowthCard = ({ asset, title, text, list, fee, bg }: WealthGrowthType) => {
         const textWhite =   title === 'generation'? true:false
  return (
    <div
      style={{ background: bg }}
      className={`${
        textWhite && 'text-white'
      }  flex  flex-col gap-4 w-full lg:w-[30%] border hover:border-black p-5  rounded-lg cursor-pointer shadow-sm hover:shadow-md hover:scale-[1.02]`}>
      <small className='uppercase'>${asset} in assets</small>
      <h1 className={`${textWhite && 'text-white'} flex text-2xl  font-bold capitalize`}>
        {title} <img src={rightArrow} alt='right arrow' className='w-5 ml-3' />
      </h1>
      <p className='text-base text-gray'> {text}</p>
      <ul className='px-5 h-1/2'>
        {list.map((item, idx) => (
          <li className={`${textWhite ? 'text-white' : 'text-gray-700'} flex items-start text-sm `} key={idx}>
            <img src={textWhite? checkMarkWhite: checkMark} alt='check-mark' className='w-5 mr-3' /> {item}
          </li>
        ))}
      </ul>
      <div className='px-5 py-10 rounded-md bg-white text-black'>
        <h3 className='text-3xl'>{fee}</h3>
        <span>Management fee</span>
      </div>
    </div>
  );
};

export default WealthGrowthCard;
