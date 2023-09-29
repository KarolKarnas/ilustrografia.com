import { FaPaperPlane } from "react-icons/fa";
import SocialLinks from "./SocialLinks";
import FooterLinks from "./FooterLinks";
import AppLinks from "./AppLinks";

const Footer = () => {
  return (
    <div className=" dark:bg-black-magic mt-20 flex flex-col justify-center items-center gap-20 md:gap-0 md:flex-row  w-full md:items-start md:justify-evenly  bg-ivory py-16   shadow-2xl dark:shadow-red-magic transition-colors    duration-500 dark:text-ivory">
      <div className=" flex  w-64 flex-col items-center justify-center">
        {" "}
        <span className=" my-2  mb-4 text-center font-cormorant-infant  text-3xl font-semibold italic text-eerie-black drop-shadow-red-heading dark:text-ivory dark:drop-shadow-xl md:text-2xl ">
          Ilustrografia
        </span>
        {/* <span className=" md:text-md text-red-magic  mb-4 text-center font-montserrat text-xs font-semibold uppercase  tracking-hero drop-shadow-lg">
        Reality Full of Magic
          </span> */}
        <strong className="text-center font-cormorant-infant text-xl font-light italic  text-eerie-black drop-shadow-red-heading dark:text-ivory dark:drop-shadow-lg">
          Slavic Legends, Paintings, Posters, Prints, Fine Art Prints, Fantasy
          Illustrations
        </strong>
        <div className="text-red-magic flex items-center">
          <FaPaperPlane className=" mr-2" />
          <a
            href="mailto:ilustrografia@gmail.com"
            className="text-red-magic font-cormorant-infant text-xl
             font-semibold italic hover:text-eerie-black dark:hover:text-ivory"
          >
            {" "}
            ilustrografia@gmail.com
          </a>
        </div>
        <span className=" my-2  mb-4 text-center font-cormorant-infant  text-3xl font-semibold italic text-eerie-black drop-shadow-red-heading dark:text-ivory dark:drop-shadow-xl md:text-2xl ">
          Find Us
        </span>
        <div className="w-30 flex items-center gap-x-1">
          <SocialLinks />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        {" "}
        <span className=" my-2  mb-4 text-center font-cormorant-infant  text-3xl font-semibold italic text-eerie-black drop-shadow-red-heading dark:text-ivory dark:drop-shadow-xl md:text-2xl ">
          Pages
        </span>
        <div className="flex flex-col items-center justify-center gap-3">
          <FooterLinks />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        {" "}
        <span className=" my-2  mb-4 text-center font-cormorant-infant  text-3xl font-semibold italic text-eerie-black drop-shadow-red-heading dark:text-ivory dark:drop-shadow-xl md:text-2xl ">
          Client
        </span>
        <div className="w-30 flex items-center gap-x-1">
          <AppLinks />
        </div>
      </div>
    </div>
  );
};
export default Footer;
