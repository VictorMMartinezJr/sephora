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
