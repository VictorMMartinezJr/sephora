import { IoBagHandle } from "react-icons/io5";
import { IoHeart } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

{
  /* --- Nav Icons --- */
}
export interface NavIcon {
  icon: React.ReactNode;
}
export const navIcons: NavIcon[] = [
  { icon: <IoBagHandle /> },
  { icon: <IoHeart /> },
  { icon: <FaUser /> },
];

{
  /* --- Product Data --- */
}
interface Product {
  src: string;
  alt: string;
  name: string;
  price: string;
}
export const productData: Product[] = [
  {
    src: "/assets/products/vitaminC-serum.png",
    alt: "Vitamin C Serum",
    name: "Vitamin C Serum",
    price: "$22.00",
  },
  {
    src: "/assets/products/healthy-lotion.png",
    alt: "Healthy Lotion",
    name: "Healthy Lotion",
    price: "$13.99",
  },
  {
    src: "/assets/products/facewash.png",
    alt: "Face Wash",
    name: "Hydrating Cleanser",
    price: "$12.99",
  },
  {
    src: "/assets/products/sunscreen.png",
    alt: "Sunscreen",
    name: "SPF 50 Sunscreen",
    price: "$25.00",
  },
  {
    src: "/assets/products/valentino.png",
    alt: "Valentino",
    name: "Valentino",
    price: "$99.99",
  },
  {
    src: "/assets/products/missDior.png",
    alt: "Miss Dior",
    name: "Miss Dior",
    price: "$89.99",
  },
  {
    src: "/assets/products/hydroboost.png",
    alt: "Hydroboost",
    name: "Hydroboost",
    price: "$14.99",
  },
];

{
  /* --- Reviews --- */
}
interface Review {
  name: string;
  imgURL: string;
  review: string;
  positionX?: string;
  positionY?: string;
}
export const REVIEWS_DATA: Review[] = [
  {
    name: "Sarah M.",
    imgURL: "assets/reviews/reviewer-1.jpg",
    review:
      "I've been using the Vitamin C serum for just three weeks and my dark spots are almost entirely gone. My skin hasn't looked this radiant since my early twenties. Will absolutely be repurchasing!",
    positionX: "2xl:translate-x-20",
  },
  {
    name: "Jessica T.",
    imgURL: "assets/reviews/reviewer-2.jpg",
    review:
      "Most serums leave my skin feeling super sticky, but this formula absorbs instantly. It sits perfectly under my makeup and gives me that healthy, glass-skin look all day long.",
    positionX: "xl:translate-x-50",
  },
  {
    name: "Elena R.",
    imgURL: "assets/reviews/reviewer-3.jpg",
    review:
      "I am always terrified to try new skincare because I break out instantly. This is incredibly gentle but shockingly effective. My redness has calmed down significantly. Pure perfection.",
    positionX: "xl:translate-x-30 2xl:translate-x-90",
  },
  {
    name: "David K.",
    imgURL: "assets/reviews/reviewer-4.jpg",
    review:
      "The glow is real. My skin feels noticeably smoother after a week. The bottle was smaller than expected, but it goes a long way.",
    positionX: "xl:translate-x-20 2xl:translate-x-30",
    positionY: "2xl:translate-y-15",
  },
  {
    name: "Amanda L.",
    imgURL: "assets/reviews/reviewer-5.jpg",
    review:
      "This completely saved my skin this winter. It locks in deep hydration without feeling heavy or clogging my pores. My face feels incredibly plump and soft. 10/10 recommend!",
    positionX: "2xl:translate-x-40",
  },
  {
    name: "Marcus P.",
    imgURL: "assets/reviews/reviewer-6.jpg",
    review:
      "I don't like complicated routines. I use this right after washing my face at night, and I wake up looking refreshed. It has completely cleared up my occasional breakouts.",
    positionX: "xl:translate-x-25 xl:translate-x-45",
    positionY: "xl:translate-y-30",
  },
  {
    name: "Sophia W.",
    imgURL: "assets/reviews/reviewer-7.jpg",
    review:
      "I was highly skeptical because of the social media hype, but it actually lives up to it. My complexion looks so bright and clear that I've completely stopped wearing foundation. It's a game changer.",
    positionX: "xl:translate-x-45 2xl:translate-x-90",
  },
];

{
  /* --- Brands --- */
}
interface Brand {
  imgSrc: string;
  alt: string;
}
export const BRANDS_DATA: Brand[] = [
  {
    imgSrc: "assets/brand-loreal.png",
    alt: "LoReal",
  },
  {
    imgSrc: "assets/brand-milk.png",
    alt: "Milk",
  },
  {
    imgSrc: "assets/brand-nars.png",
    alt: "Nras",
  },
  {
    imgSrc: "assets/brand-nyc.png",
    alt: "nyc",
  },
];

{
  /* --- Footer --- */
}
interface regularLink {
  text: string;
}
export const QUICK_LINKS: regularLink[] = [
  {
    text: "HOME",
  },
  {
    text: "ABOUT",
  },
  {
    text: "SERVICES",
  },
  {
    text: "BLOG",
  },
  {
    text: "CONTACT US",
  },
];

export const TOP_CATEGORIES: regularLink[] = [
  {
    text: "MAKEUP",
  },
  {
    text: "FRAGRANCE",
  },
  {
    text: "SKINCARE",
  },
  {
    text: "COLLECTIONS",
  },
];

import { IoMdPin, IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
interface contactLink {
  icon: React.ReactNode;
  text: string;
}
export const CONTACT_LINKS: contactLink[] = [
  {
    icon: <IoMdPin />,
    text: "570 Camden Street, Verdi NV, 89439",
  },
  {
    icon: <IoIosMail />,
    text: "contact@sephora.com",
  },
  {
    icon: <FaPhone />,
    text: "+1 (470) 823-7609",
  },
];
