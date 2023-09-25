import { FaMoon, FaSun } from "react-icons/fa6";
import { useAppDispatch, useAppSelector } from "../slices/reduxHooks";
import { setTheme } from "../slices/themeSlice";


const ThemeSwitcher = () => {

  const activeTheme = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  return (
    <>
      <div
  
      >
        <div className="relative">
          <button
   
            className={`  rounded-3xl bg-red-magic  p-2 text-ivory transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 `}
            type="button"
            id="themeSwitcher"
            aria-expanded="false"
            onClick={() => dispatch(setTheme())}
          >
            {activeTheme === "light" ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </>
  );
};

export default ThemeSwitcher;
