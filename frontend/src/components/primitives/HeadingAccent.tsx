import { ReactNode } from "react";

type Props = {
  children: ReactNode;
}


const HeadingAccent = ({children} : Props) => {
  return (
    <span className=" md:text-md mb-4  text-center font-montserrat text-xs font-semibold uppercase tracking-hero  text-red-magic drop-shadow-lg">
    {children}
  </span>
  )
}
export default HeadingAccent