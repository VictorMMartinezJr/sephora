import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import FooterLinks from "./FooterLinks";
import { CONTACT_LINKS, QUICK_LINKS, TOP_CATEGORIES } from "../constants";
import FooterContactLink from "./FooterContactLink";

const Footer = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      duration: 0.5,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#footer",
        start: "top 80%",
        toggleActions: "play none none none",
        scroller: "#main-container",
      },
    });

    tl.from(".footer__h2", {
      opacity: 0,
      y: 50,
    })
      .from(".footer__newsletter", {
        y: 50,
        opacity: 0,
      })
      .from(
        ".footer__links",
        {
          y: 50,
          opacity: 0,
        },
        "<",
      );
  });

  return (
    <footer
      id="footer"
      className="shadow-[0_0px_20px_0px_rgba(0,0,0,0.1)] shadow-black/50 pb-18 mt-18 xl:mt-36 snap-start flex flex-col justify-center items-center px-4 text-rose-950"
    >
      <div className="flex flex-col xl:flex-row xl:justify-between items-center gap-2 my-4 xl:w-3/4">
        {/* --- Title --- */}
        <h2 className="footer__h2 text-4xl xs:text-5xl sm:text-6xl xl:text-8xl font-bold text-rose-950 tracking-tighter">
          SEPHORA
        </h2>

        {/* --- Newsletter --- */}
        <div className="footer__newsletter flex flex-col items-center gap-2">
          <p className="font-bold xl:text-lg">SUBSCRIPE TO OUR NEWSLETTER!</p>
          <button className="border-2 px-4 py-2 text-sm font-semibold cursor-pointer">
            SUBSCRIBE
          </button>
        </div>
      </div>

      {/* --- Quicklinks --- */}
      <div className="footer__links flex flex-col gap-2  w-full sm:items-center">
        <FooterLinks data={QUICK_LINKS} title="QUICK LINKS" />
      </div>

      {/* --- Top Catagories --- */}
      <div className="footer__links flex flex-col gap-2  w-full sm:items-center my-8">
        <FooterLinks data={TOP_CATEGORIES} title="TOP CATEGORIES" />
      </div>

      {/* --- Contact --- */}
      <div className="footer__links flex flex-col gap-2  w-full sm:items-center">
        <p className="font-bold text-rose-950 sm:text-lg">CONTACT US</p>
        <ul className="flex flex-col sm:flex-row gap-1 sm:gap-4 pl-2 cursor-pointer">
          <FooterContactLink data={CONTACT_LINKS} />
        </ul>
      </div>

      {/* --- Copyright --- */}
      <div className="copyright-box flex-center transform translate-y-10">
        <p className="opacity-30">&copy;2026 VMMJr. - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
