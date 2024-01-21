import { checkMark } from '@constants/assests';

type SavingsTypeCardProps = {
  title: string;
  text: string;
  list: string[];
};
const SavingsTypeCard = ({ title, text, list }: SavingsTypeCardProps) => {
  return (
    <div className='flex flex-col gap-5 w-full lg:w-[30%] border hover:border-black p-5 lg:p-10 rounded-lg cursor-pointer shadow-sm hover:shadow-md hover:scale-[1.02]'>
      <h1 className='text-2xl  font-bold'>{title}</h1>
      <p className='text-lg text-gray'> {text}</p>
      <ul className='px-5'>
        {list.map((item, idx) => (
          <li className=' flex items-start text-base text-gray-700' key={idx}>
            <img src={checkMark} alt='check-mark' className='w-5 mr-3' /> {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavingsTypeCard;
