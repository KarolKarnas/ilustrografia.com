
import AppLinks from "./AppLinks";
import { useState } from "react";
import SocialLinks from "./SocialLinks";
import MainLinks from "./MainLinks";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleMobileClick = () => {
    setIsActive(!isActive);
  }

  return (
    <header className="bg-ivory shadow text-eerie-black dark:bg-black-magic dark:text-ivory  w-full py-4 transition-colors    duration-500">
      <nav className="flex items-center justify-evenly">
        <div className="w-30 hidden items-center gap-x-3 lg:flex">
          <SocialLinks />
        </div>
        <div className="hidden items-center gap-x-4 lg:flex lg:gap-x-10">
          <MainLinks mobile={false} />
        </div>
        <div className="w-30 hidden gap-x-3 lg:flex lg:items-center">
          <AppLinks />
        </div>

        {/* <div className="md:hidden"> */}
        <div className="flex w-full items-center justify-between px-3 lg:hidden">
          <button
            id="menu-btn"
            onClick={handleClick}
            type="button"
            className={
              isActive
                ? "hamburger open z-40 block focus:outline-none lg:hidden"
                : "hamburger z-40 block focus:outline-none lg:hidden"
            }
          >
            <span className="hamburger-top bg-eerie-black dark:bg-ivory "></span>
            <span className="hamburger-middle bg-eerie-black dark:bg-ivory "></span>
            <span className="hamburger-bottom bg-eerie-black dark:bg-ivory "></span>
          </button>

          <div className="w-30 flex items-center gap-x-3 lg:hidden">
            <AppLinks />
          </div>
        </div>

        {/* MOBILE MENU */}

        <div
          id="menu"
          className={
            isActive
              ? "bg-red-50 text-eerie-black dark:bg-eerie-black dark:text-ivory absolute bottom-0 left-0 top-0 z-30 flex min-h-screen w-full flex-col items-center space-y-8 self-end py-1 pt-40 text-lg uppercase"
              : "hidden"
          }
          onClick={handleMobileClick}
        >
          <MainLinks mobile={true} />
          <div className="w-30 flex items-center gap-x-3">
            <SocialLinks />
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;

{
  /* <Link to={'/profile'}>{userInfo.name}</Link>
							<p className='hover:cursor-pointer' onClick={handleLogout}>
								Logout
							</p> */
}
