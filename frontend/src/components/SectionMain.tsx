import { ReactNode } from "react";
type Props = {
  children: ReactNode;
  color?: 'second'
};
const SectionMain = ({ children, color }: Props) => {
  return (
    <div className={`${color === 'second' ? 'bg-fair-space dark:bg-outer-space' : 'bg-moon-dust dark:bg-angel-space'} flex flex-col items-center justify-center rounded-xl  px-2 py-16 shadow-hero  md:px-24 lg:px-16 xl:px-10 2xl:px-24`}>
      {children}
    </div>
  );
};
export default SectionMain;
