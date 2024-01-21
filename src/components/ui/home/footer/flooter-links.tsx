import { footerGroupLinks } from '@/constants/data';
import FooterLink from './footer-link';
import { instagram, linkedIn, x, youtube } from '@/constants/assests';

const { about, legal, accounts, products } = footerGroupLinks;
const FooterLinks = () => {
  const footerLinks = [
    {
      title: 'about us',
      links: about,
    },
    {
      title: 'legal',
      links: legal,
    },
    {
      title: 'accounts',
      links: accounts,
    },
    {
      title: 'products',
      links: products,
    },
  ];
  return (
    <div className=' flex lg:gap-10 flex-wrap'>
      {footerLinks.map((link, idx) => (
        <FooterLink {...link} key={idx} />
      ))}
      <div className='flex flex-col p-5 lg:p-10'>
        <h1 className=' first-letter:uppercase font-bold text-lg mb-5'>Social</h1>
        <div className=' flex lg:flex-col gap-x-10 lg:gap-x-0  gap-3  flex-wrap l'>
          <a href='#' className='flex gap-3'>
            <img src={instagram} alt='' className='' /> Instagram
          </a>
          <a href='#' className='flex gap-3'>
            <img src={x} alt='' className='' /> X
          </a>
          <a href='#' className='flex gap-3'>
            <img src={youtube} alt='' className='' /> Youtube
          </a>
          <a href='#' className='flex gap-3'>
            <img src={linkedIn} alt='' className='' /> Linked In
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
