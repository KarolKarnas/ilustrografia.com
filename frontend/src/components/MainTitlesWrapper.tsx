import { ReactNode } from "react";

type MainTitlesWrapperProps = {
  children: ReactNode;
};

const MainTitlesWrapper = ({ children }: MainTitlesWrapperProps) => {
  return (
    <div className="flex w-full flex-col items-center p-2 md:w-2/3 md:p-0">
      {children}
    </div>
  );
};
export default MainTitlesWrapper;
