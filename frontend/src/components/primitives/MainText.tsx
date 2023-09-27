import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const MainText = ({ children }: Props) => {
  return (
    <span className="text-center text-eerie-black dark:text-ivory ">
      {children}
    </span>
  );
};

export default MainText;
