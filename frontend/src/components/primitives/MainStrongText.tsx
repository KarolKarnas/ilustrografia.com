import { ReactNode } from "react";

type MainStrongTextProps = {
  children: ReactNode;
  alwaysLight?: boolean;
};

const MainStrongText = ({ children, alwaysLight }: MainStrongTextProps) => {
  return (
    <strong
      className={`${
        alwaysLight
          ? "text-ivory drop-shadow-lg"
          : "text-eerie-black drop-shadow-red-heading dark:text-ivory dark:drop-shadow-lg"
      } text-center font-cormorant-infant text-2xl font-semibold italic md:text-3xl  `}
    >
      {children}
    </strong>
  );
};
export default MainStrongText;
