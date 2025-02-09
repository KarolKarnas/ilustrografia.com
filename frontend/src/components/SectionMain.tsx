import { ReactNode } from "react";

type SectionMainProps = {
  children: ReactNode;
  color?: "second";
  url?: "neo-slavic" | "fantasy-illustrations";
};
const SectionMain = ({ children, color, url }: SectionMainProps) => {
  return (
    <div
      data-testid={`${url}-section`}
      className={`${
        color === "second"
          ? "bg-fair-space dark:bg-outer-space"
          : "bg-moon-dust dark:bg-angel-space"
      } ${
        url === "neo-slavic"
          ? `bg-neo-slavic bg-cover bg-fixed `
          : url === "fantasy-illustrations"
          ? ` bg-fantasy-illustrations bg-cover bg-fixed`
          : null
      } flex w-full flex-col items-center justify-center  gap-12 rounded-xl px-2 pb-36 pt-16  shadow-hero md:px-24 lg:px-16 xl:px-10 2xl:px-24`}
    >
      {children}
    </div>
  );
};
export default SectionMain;
