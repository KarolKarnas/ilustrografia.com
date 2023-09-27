import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const MainStrongText = ({children} : Props) => {
  return (
    <strong className="text-center font-cormorant-infant text-3xl font-semibold italic  text-eerie-black drop-shadow-red-heading dark:text-ivory dark:drop-shadow-lg">
    {children}
  </strong>
  )
}
export default MainStrongText