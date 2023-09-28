import { ReactNode } from "react";

type Props = {
  children: ReactNode;
}

const MainTitlesWrapper = ({children}: Props) => {
  return (
    <div className="flex w-full md:w-2/3 p-2 md:p-0 flex-col items-center">
      {children}
    </div>
  )
}
export default MainTitlesWrapper