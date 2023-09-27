import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  color?: "second";
  url?: 'neo-slavic' | 'fantasy-illustrations'
};
const SectionMain = ({ children, color, url}: Props) => {
  return (
    <div
      className={`${
        color === "second"
          ? "bg-fair-space dark:bg-outer-space"
          : "bg-moon-dust dark:bg-angel-space"
      } ${url === 'neo-slavic' ? `bg-neo-slavic bg-cover bg-fixed ` : url === 'fantasy-illustrations' ? ` bg-fantasy-illustrations bg-cover bg-fixed` : null} flex flex-col items-center justify-center rounded-xl  px-2 py-16 shadow-hero gap-12  md:px-24 lg:px-16 xl:px-10 2xl:px-24`}
    >
      
      {children}
    </div>
  );
};
export default SectionMain;
