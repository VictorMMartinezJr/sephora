interface contactLink {
  icon: React.ReactNode;
  text: string;
}
interface FooterContactLinksProps {
  data: contactLink[];
}
const FooterContactLink = ({ data }: FooterContactLinksProps) => {
  return (
    <>
      {data.map((link, i) => (
        <li key={i} className="flex items-center gap-2">
          <div className="border border-pink-500 rounded-full p-2">
            {link.icon}
          </div>
          {link.text}
        </li>
      ))}
    </>
  );
};

export default FooterContactLink;
