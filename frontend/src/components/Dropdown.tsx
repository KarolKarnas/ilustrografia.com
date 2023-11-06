import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Link } from "react-router-dom";

import { UserInfoOptions } from "../types/User";
import { FaUserAlt } from "react-icons/fa";
import LineDivider from "./primitives/LineDivider";

interface Props {
  userInfo: UserInfoOptions;
  handleLogout: () => Promise<void>;
}

const Dropdown = ({ userInfo, handleLogout }: Props) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="focus:outline-none">
        <div data-testid='logged-user' className="cursor-pointer rounded-3xl bg-red-magic p-2 text-ivory transition duration-300 ease-in-out hover:outline-none md:hover:scale-110  ">
          <FaUserAlt className="" />
        </div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          side="bottom"
          className="DropdownMenuContent dark:bg-bg-black-magic/50 mt-2 flex w-64 flex-col gap-2 border border-red-magic/50  bg-ivory p-4 text-sm font-semibold uppercase text-eerie-black shadow-xl dark:bg-black-magic dark:text-ivory"

          // border border-red-magic/60
        >
          <DropdownMenu.Arrow className=" fill-red-magic stroke-red-magic" />
          <Link to={"/profile"} className="mx-auto">
            <DropdownMenu.Item className=" transition duration-500 hover:scale-110 hover:text-red-magic hover:outline-none    focus:scale-110 focus:text-red-magic focus:outline-none ">
              {" "}
              {userInfo.name} User
            </DropdownMenu.Item>
          </Link>
          <LineDivider />
          <DropdownMenu.Item
            onClick={handleLogout}
            className="mx-auto  transition duration-500 hover:scale-110 hover:cursor-pointer hover:text-red-magic hover:outline-none    focus:scale-110 focus:text-red-magic focus:outline-none "
          >
            Logout
          </DropdownMenu.Item>
          {userInfo.isAdmin && (
            <>
              <LineDivider />
              <DropdownMenu.Sub>
                <DropdownMenu.SubTrigger className="mx-auto  transition duration-500 hover:scale-110 hover:cursor-pointer hover:text-red-magic    hover:outline-none focus:scale-110 focus:text-red-magic focus:outline-none  ">
                  Admin
                </DropdownMenu.SubTrigger>
                <DropdownMenu.Portal>
                  <DropdownMenu.Content
                    side="bottom"
                    // sideOffset={98}
                    className=" DropdownMenuContent dark:bg-bg-black-magic/50 focus:outline:none mt-2 flex w-64 flex-col gap-2 border  border-red-magic/50 bg-ivory p-4 text-sm font-semibold uppercase text-eerie-black shadow-hero  dark:bg-black-magic dark:text-ivory"
                  >
                    <Link className="mx-auto   " to={"/admin/product-list"}>
                      <DropdownMenu.Item className=" transition duration-500 hover:scale-110 hover:text-red-magic hover:outline-none    focus:scale-110 focus:text-red-magic focus:outline-none">
                        Product List
                      </DropdownMenu.Item>
                    </Link>
                    <LineDivider />
                    <Link className="mx-auto  " to={"/admin/user-list"}>
                      <DropdownMenu.Item className=" transition duration-500 hover:scale-110 hover:text-red-magic hover:outline-none    focus:scale-110 focus:text-red-magic focus:outline-none">
                        User List
                      </DropdownMenu.Item>
                    </Link>
                    <LineDivider />
                    <Link className="mx-auto  " to={"/admin/order-list"}>
                      <DropdownMenu.Item className=" transition duration-500 hover:scale-110 hover:text-red-magic hover:outline-none    focus:scale-110 focus:text-red-magic focus:outline-none">
                        Order List
                      </DropdownMenu.Item>
                    </Link>
                    <DropdownMenu.Arrow className=" fill-red-magic stroke-red-magic" />
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Sub>
            </>
          )}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
