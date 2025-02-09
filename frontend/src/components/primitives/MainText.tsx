import { ReactNode } from "react";

type MainTextProps = {
  children: ReactNode;
  alwaysLight?: boolean;
};

const MainText = ({ children, alwaysLight }: MainTextProps) => {
  return (
    <span
      className={`${
        alwaysLight ? "text-ivory" : " text-eerie-black dark:text-ivory"
      }  text-center`}
    >
      {children}
    </span>
  );
};

export default MainText;
