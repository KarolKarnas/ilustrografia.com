import * as Select from "@radix-ui/react-select";
import React from "react";
import { FaChevronDown, FaCheck } from "react-icons/fa6";

type Props = {
  selectNumber: number;
  onChange: (value: React.SetStateAction<number>) => void;
};

const SelectNumber = ({ selectNumber, onChange }: Props) => {
  return (
    <Select.Root
      defaultValue={"5"}
      onValueChange={(value) => onChange(Number(value))}
    >
      <Select.Trigger className="inline-flex h-[35px] items-center  justify-center gap-[5px] border border-red-magic/50 bg-white px-4 text-[13px] leading-none text-black-magic shadow-md outline-none focus:outline focus:outline-offset-0 focus:outline-red-magic dark:bg-black-magic dark:text-ivory">
        <Select.Value placeholder="Select Rating" />
        <Select.Icon>
          <FaChevronDown />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="">
     
          <Select.Viewport className=" w-14 border border-red-magic/50 bg-white dark:bg-black-magic text-black-magic shadow-lg">
            <Select.Group>
              {Array.from({ length: selectNumber }, (_, index) => (
                <Select.Item
                  className={` ${
                    index === selectNumber - 1
                      ? ""
                      : "border-b border-b-red-magic/50"
                  } relative  flex h-[25px] select-none items-center justify-center pl-[25px] pr-[35px] text-[13px] leading-none text-black-magic hover:cursor-pointer data-[highlighted]:outline-none data-[highlighted]:hover:bg-red-magic dark:bg-black-magic dark:text-ivory focus:outline focus:outline-2 data-[highlighted]:focus:bg-red-magic`}
                  key={index + 1}
                  value={(index + 1).toString()}
                >
                  <Select.ItemText>{index + 1}</Select.ItemText>
                  <Select.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
                    <FaCheck />
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton />
          <Select.Arrow />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default SelectNumber;
