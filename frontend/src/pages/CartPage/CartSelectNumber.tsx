import * as Select from "@radix-ui/react-select";
import React from "react";
import { FaChevronDown, FaCheck } from "react-icons/fa6";
import { VariationCart } from "../../types/Product";

type SelectNumberProps = {
  selectNumber: number;
  onChange: (variation: VariationCart, qty: number) => Promise<void>;
  variation: VariationCart;
  defaultValue: string;
};

const SelectNumber = ({
  selectNumber,
  onChange,
  variation,
  defaultValue,
}: SelectNumberProps) => {
  return (
    <Select.Root
      defaultValue={defaultValue}
      disabled={selectNumber <= 0}
      onValueChange={(value) => onChange(variation, Number(value))}
    >
      <Select.Trigger className="inline-flex h-7 items-center justify-center  gap-[5px] rounded-md bg-white px-2 text-2xs leading-none text-black-magic shadow-md outline-none focus:outline-1 focus:outline-fair-space/60 dark:bg-black-magic dark:text-ivory dark:focus:outline-fair-space/5 md:h-10 md:px-4 md:text-[13px]">
        <Select.Value placeholder="Select Rating" />
        <Select.Icon>
          <FaChevronDown />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="">
          <Select.Viewport className=" w-20 rounded-md border border-red-magic/50 bg-white text-black-magic shadow-lg dark:bg-black-magic">
            <Select.Group>
              {Array.from({ length: selectNumber }, (_, index) => (
                <Select.Item
                  className={` ${
                    index === selectNumber - 1
                      ? ""
                      : "border-b border-b-red-magic/50"
                  } relative  flex h-8 select-none items-center justify-center  text-[13px] leading-none text-black-magic hover:cursor-pointer focus:outline focus:outline-2 data-[highlighted]:outline-none data-[highlighted]:hover:bg-red-magic data-[highlighted]:focus:bg-red-magic dark:bg-black-magic dark:text-ivory`}
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
