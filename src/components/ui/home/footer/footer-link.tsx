import { FooterLinks } from "@/constants/data";

const FooterLink = ({ title, links }: { title: string; links: FooterLinks[] }) => {
 return <div className=" flex flex-col space-y-3 p-5 lg:p-10">
    <h1 className=" first-letter:uppercase font-bold text-lg mb-5">{title}</h1>
    {links.map((link, idx) => (
      <a href={link.path} key={idx} className="hover:scale-110">
        {link.title}
      </a>
    ))}
  </div>;
};

export default FooterLink;
