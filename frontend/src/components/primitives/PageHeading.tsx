import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  alwaysLight?: boolean;
};

const PageHeading = ({ children, alwaysLight }: Props) => {
  return (
    <h1
      className={` ${
        alwaysLight
          ? "text-ivory drop-shadow-xl"
          : "text-eerie-black drop-shadow-red-heading dark:text-ivory dark:drop-shadow-xl"
      } my-5 text-center font-cormorant-infant  text-5xl font-semibold italic `}
    >
      {children}
    </h1>
  );
};
export default PageHeading;
