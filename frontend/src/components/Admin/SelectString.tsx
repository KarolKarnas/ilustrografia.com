import * as Select from "@radix-ui/react-select";
import React from "react";
import { FaChevronDown, FaCheck } from "react-icons/fa6";

type SelectStringProps = {
  options: string[];
  onChange: React.Dispatch<React.SetStateAction<string>>;
  name: string;
};

const SelectString = ({ options, onChange, name }: SelectStringProps) => {
  return (
    <Select.Root
      disabled={options.length <= 0}
      onValueChange={(value) => onChange(value)}
    >
      <Select.Trigger className="inline-flex h-10 items-center  justify-center gap-[5px] rounded-md bg-white px-4 text-[13px] leading-none text-black-magic shadow-md outline-none focus:outline-1 focus:outline-fair-space/60 dark:bg-black-magic dark:text-ivory dark:focus:outline-fair-space/5">
        <Select.Value placeholder={`Select ${name}`} />
        <Select.Icon>
          <FaChevronDown />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="">
          <Select.Viewport className="  rounded-md border border-red-magic/50 bg-white text-black-magic shadow-lg dark:bg-black-magic">
            <Select.Group>
              {options.map((option, index) => (
                <Select.Item
                  className={` ${
                    index === options.length - 1
                      ? ""
                      : "border-b border-b-red-magic/50"
                  } relative  flex h-8 select-none items-center justify-center  whitespace-nowrap px-4 text-[13px] leading-none text-black-magic hover:cursor-pointer focus:outline focus:outline-2 data-[highlighted]:outline-none data-[highlighted]:hover:bg-red-magic data-[highlighted]:focus:bg-red-magic dark:bg-black-magic dark:text-ivory`}
                  key={index}
                  value={option}
                >
                  <Select.ItemText>{option}</Select.ItemText>
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

export default SelectString;
