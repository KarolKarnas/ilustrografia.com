import { FaPaperPlane } from "react-icons/fa";
import SocialLinks from "./SocialLinks";
import FooterLinks from "./FooterLinks";
import AppLinks from "./AppLinks";

const Footer = () => {
  return (
    <footer className="flex w-full flex-col bg-ivory pt-16  shadow-2xl   transition-colors   duration-500 dark:bg-black-magic    dark:text-ivory dark:shadow-red-magic">
      <div className="   flex w-full flex-col items-center justify-center gap-16 md:flex-row  md:items-start md:justify-evenly md:gap-0  ">
        <div className=" flex  w-64 flex-col items-center justify-center">
          {" "}
          <span className=" my-2  mb-4 text-center font-cormorant-infant  text-3xl font-semibold italic text-eerie-black drop-shadow-red-heading dark:text-ivory dark:drop-shadow-xl md:text-2xl ">
            Ilustrografia
          </span>
          {/* <span className=" md:text-md text-red-magic  mb-4 text-center font-montserrat text-xs font-semibold uppercase  tracking-hero drop-shadow-lg">
          Reality Full of Magic
            </span> */}
          <strong className="text-center  text-lg font-medium italic  text-eerie-black drop-shadow-red-heading dark:text-ivory dark:drop-shadow-lg">
            Slavic Legends, Paintings, Posters, Prints, Fine Art Prints, Fantasy
            Illustrations
          </strong>
          <div className="flex items-center text-red-magic">
            <FaPaperPlane className=" mr-2" />
            <a
              href="mailto:ilustrografia@gmail.com"
              className="font-cormorant-infant text-xl font-semibold
               italic text-red-magic hover:text-eerie-black dark:hover:text-ivory"
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
        <div className="  flex  w-64 flex-col items-center justify-center">
          {" "}
          <span className=" my-2  mb-4 text-center font-cormorant-infant  text-3xl font-semibold italic text-eerie-black drop-shadow-red-heading dark:text-ivory dark:drop-shadow-xl md:text-2xl ">
            Pages
          </span>
          <div className="flex flex-col items-center justify-center gap-3">
            <FooterLinks />
          </div>
        </div>
        <div className="flex  w-64  flex-col items-center justify-center">
          {" "}
          <span className=" my-2  mb-4 text-center font-cormorant-infant  text-3xl font-semibold italic text-eerie-black drop-shadow-red-heading dark:text-ivory dark:drop-shadow-xl md:text-2xl ">
            Client
          </span>
          <div className="w-30 flex items-center gap-x-1">
            <AppLinks />
          </div>
        </div>
      </div>
      <div className="mt-16 flex w-full justify-center gap-1 border-t border-red-magic/60 bg-moon-dust py-1 text-center dark:bg-eerie-black">
        Made with 🧠 by{" "}
        <a className=" underline hover:text-red-magic" rel="noreferrer" target="_blank" href="https://github.com/KarolKarnas">
          Karol Karnas
        </a>
      </div>
    </footer>
  );
};
export default Footer;
