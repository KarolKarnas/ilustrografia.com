import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const IconDivider = ({ children }: Props) => {
  return (
    <div className="flex items-center py-3">
      <div className="my-auto h-px w-24 self-stretch bg-gradient-to-tr from-transparent via-red-magic to-transparent opacity-80 dark:opacity-100 sm:w-64"></div>
      <p className="px-6 text-3xl text-red-magic">{children}</p>
      <div className="my-auto h-px w-24 self-stretch bg-gradient-to-tr from-transparent via-red-magic to-transparent opacity-80 dark:opacity-100 sm:w-64"></div>
    </div>
  );
};
export default IconDivider;
