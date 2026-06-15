interface RegularLink {
  text: string;
}
interface FooterLinksProps {
  data: RegularLink[];
  title: string;
}

const FooterLinks = ({ data, title }: FooterLinksProps) => {
  return (
    <>
      <p className="font-bold text-rose-950 sm:text-lg">{title}</p>
      <ul className="flex flex-col sm:flex-row gap-1 sm:gap-4 pl-2 cursor-pointer">
        {data.map((link, i) => (
          <li key={i}>{link.text}</li>
        ))}
      </ul>
    </>
  );
};

export default FooterLinks;
