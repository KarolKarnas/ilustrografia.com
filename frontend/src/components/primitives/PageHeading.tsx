import { ReactNode } from "react";

type PageHeadingProps = {
  children: ReactNode;
  alwaysLight?: boolean;
};

const PageHeading = ({ children, alwaysLight }: PageHeadingProps) => {
  return (
    <h1
      className={` ${
        alwaysLight
          ? "text-ivory drop-shadow-xl"
          : "text-eerie-black drop-shadow-red-heading dark:text-ivory dark:drop-shadow-xl"
      } mb-2 text-center  font-cormorant-infant text-5xl font-semibold italic `}
    >
      {children}
    </h1>
  );
};
export default PageHeading;
