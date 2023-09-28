import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  alwaysLight?: boolean;
};

const MainStrongText = ({ children, alwaysLight }: Props) => {
  return (
    <strong
      className={`${
        alwaysLight
          ? "text-ivory drop-shadow-lg"
          : "text-eerie-black drop-shadow-red-heading dark:text-ivory dark:drop-shadow-lg"
      } text-center font-cormorant-infant text-3xl font-semibold italic  `}
    >
      {children}
    </strong>
  );
};
export default MainStrongText;
