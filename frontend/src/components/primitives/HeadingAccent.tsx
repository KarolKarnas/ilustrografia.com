import { ReactNode } from "react";

type HeadingAccentProps = {
  children: ReactNode;
}


const HeadingAccent = ({children} : HeadingAccentProps) => {
  return (
    <span role="contentinfo" className=" md:text-md mb-4  text-center font-montserrat text-xs font-semibold uppercase tracking-hero  text-red-magic drop-shadow-lg">
    {children}
  </span>
  )
}
export default HeadingAccent