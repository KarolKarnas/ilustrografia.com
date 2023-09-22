import React, { useRef, useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
// import clsx from "clsx";

const ThemeSwitcher: React.FC = (): JSX.Element => {
  const switcher = useRef<HTMLDivElement | null>(null);
  const switcherButton = useRef<HTMLButtonElement>(null);

  const [activeTheme, setActiveTheme] = useState<string>("light");

  const setDarkTheme = () => {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";

    setActiveTheme("dark");
  };

  const setLightTheme = () => {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";

    setActiveTheme("light");
  };

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  }, []);

  const handleChangeTheme = () => {
    // console.log(activeTheme)
    activeTheme === "light" ? setDarkTheme() : setLightTheme();
  };

  return (
    <>
      <div
        // className="fixed right-5 bottom-5 z-[9999]"
        id="theme-switcher"
        ref={switcher}
      >
        <div className="relative">
          <button
            ref={switcherButton}
            className={`  ${
              activeTheme === "light" ? "text-yellow-100" : "text-ivory"
            } bg-red-400  rounded-3xl p-2 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 `}
            type="button"
            id="themeSwitcher"
            aria-expanded="false"
            onClick={() => handleChangeTheme()}
          >
            {activeTheme === "light" ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </>
  );
};

export default ThemeSwitcher;
