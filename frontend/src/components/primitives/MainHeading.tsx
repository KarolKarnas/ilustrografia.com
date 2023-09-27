import { ReactNode } from "react";

type Props = {
  children: ReactNode;
}


const MainHeading = ({children} : Props) => {
  return (
    <h3 className=" my-2 text-center font-cormorant-infant  text-3xl font-semibold italic text-eerie-black drop-shadow-red-heading dark:text-ivory dark:drop-shadow-xl md:text-6xl ">
    {children}
  </h3>
  )
}
export default MainHeading