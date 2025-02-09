import { ReactNode } from "react";

type MainHeadingProps = {
  children: ReactNode;
  alwaysLight?: boolean;
};

const MainHeading = ({ children, alwaysLight }: MainHeadingProps) => {
  return (
    <h3
      className={` ${
        alwaysLight
          ? "text-ivory drop-shadow-xl"
          : "text-eerie-black drop-shadow-red-heading dark:text-ivory dark:drop-shadow-xl"
      } my-2 text-center font-cormorant-infant  text-4xl font-semibold italic  md:text-6xl`}
    >
      {children}
    </h3>
  );
};
export default MainHeading;
