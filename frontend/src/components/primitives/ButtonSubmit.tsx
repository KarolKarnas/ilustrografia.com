import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ButtonSubmit = ({ children }: Props) => {
  return (
    <button className="h-10 w-full bg-black-magic  text-xs font-semibold uppercase text-ivory  transition-colors duration-300 hover:bg-red-magic dark:border dark:border-red-magic dark:bg-red-magic/60 dark:hover:bg-red-magic/80 md:px-32">
      {children}
    </button>
  );
};
export default ButtonSubmit;
