import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  alwaysLight?: boolean;
};

const MainText = ({ children, alwaysLight }: Props) => {
  return (
    <span className={`${alwaysLight ? 'text-ivory' : ' text-eerie-black dark:text-ivory'}  text-center`} >
      {children}
    </span>
  );
};

export default MainText;
