import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Link } from "react-router-dom";
import LineDivider from "./primitives/LineDivider";

type DropdownProjectsProps = {
  footer?: boolean;
};

const DropdownProjects = ({ footer }: DropdownProjectsProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="focus:outline-none">
        <div
          className={`${
            footer
              ? "border-red-magic text-xs  uppercase hover:scale-110  hover:border-b-2 hover:text-red-magic hover:transition hover:duration-500"
              : "border-red-magic text-sm font-semibold uppercase hover:scale-110  hover:border-b-2 hover:text-red-magic hover:transition hover:duration-500"
          }`}
        >
          Projects
        </div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          side="bottom"
          className="DropdownMenuContent dark:bg-bg-black-magic/50 z-50 mt-2 flex w-64 flex-col gap-2 border  border-red-magic/50 bg-ivory p-4 text-sm font-semibold uppercase text-eerie-black shadow-xl   dark:bg-black-magic dark:text-ivory"
        >
          <DropdownMenu.Arrow className=" fill-red-magic stroke-red-magic" />
          <Link to="/projects/neo-slavic-census" className="mx-auto">
            <DropdownMenu.Item className=" transition duration-500 hover:scale-110 hover:text-red-magic hover:outline-none    focus:scale-110 focus:text-red-magic focus:outline-none ">
              Neo-slavic Census
            </DropdownMenu.Item>
          </Link>
          <LineDivider />

          <Link to="/projects/fantasy-illustrations" className="mx-auto">
            <DropdownMenu.Item className="transition duration-500 hover:scale-110 hover:cursor-pointer hover:text-red-magic hover:outline-none    focus:scale-110 focus:text-red-magic focus:outline-none ">
              Fantasy Illustrations
            </DropdownMenu.Item>
          </Link>
          <LineDivider />
          <Link to="/projects/polish-legends-characters" className="mx-auto">
            <DropdownMenu.Item className="transition duration-500 hover:scale-110 hover:cursor-pointer hover:text-red-magic hover:outline-none    focus:scale-110 focus:text-red-magic focus:outline-none ">
              Polish Legends Characters
            </DropdownMenu.Item>
          </Link>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
export default DropdownProjects;
