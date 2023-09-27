import { FaDragon, FaPaintbrush } from "react-icons/fa6";
import {FaShoppingBasket} from 'react-icons/fa'


import { ReactNode } from "react";

type Props = {
  children: ReactNode;
}

const IconDivider = ({children}: Props) => {
  return (
    <div className="flex items-center py-3">
      <div className="my-auto h-px w-24 sm:w-64 self-stretch bg-gradient-to-tr from-transparent via-red-magic to-transparent opacity-80 dark:opacity-100"></div>
      <p className="px-6 text-3xl text-red-magic">
{children}
      </p>
      <div className="my-auto h-px w-24 sm:w-64 self-stretch bg-gradient-to-tr from-transparent via-red-magic to-transparent opacity-80 dark:opacity-100"></div>
    </div>
  );
};
export default IconDivider;
