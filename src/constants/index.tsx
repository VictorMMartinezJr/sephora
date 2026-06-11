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
