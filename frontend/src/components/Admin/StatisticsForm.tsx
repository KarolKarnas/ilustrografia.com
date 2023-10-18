import * as Form from "@radix-ui/react-form";
import { SyntheticEvent, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import InputTextField from "./InputTextField";
import _ from "lodash";

type Props = {
  statistics: string[];
  setStatistics: React.Dispatch<React.SetStateAction<string[]>>;
};
const StatisticsForm = ({ statistics, setStatistics }: Props) => {
  const [newStatistic, setNewStatistic] = useState("");
  // Statistic
  const handleSubmitStatistic = (e: SyntheticEvent) => {
    e.preventDefault();
    if (newStatistic.trim() === "") {
      setNewStatistic("");
      return toast.error("Just empty spaces here...");
    }

    if (_.find(statistics, function(statistic)  {return statistic === newStatistic})) {
      setNewStatistic("");
      return toast.error(`We already have '${newStatistic}' in Statistics`);

    }

    setStatistics([...statistics, newStatistic]);
    setNewStatistic("")
    return toast.success("Statistic added successfully, remember to save changes");
  };

  const handleDeleteStatistic = (index: number) => {
    const updatedStatistics = statistics.filter((_statistic, i) => i !== index);
    setStatistics(updatedStatistics);
  };
  return (
    <div className="rounded-xl bg-angel-dust p-4 md:p-8 shadow-xl dark:bg-angel-space">
      <div className="flex flex-col">
        <h4 className=" mb-2 font-montserrat text-base font-semibold text-black-magic dark:text-ivory">
          Statistics list
        </h4>
        <div className="mb-2 flex flex-col gap-1">
          {statistics?.map((statistic, index) => (
            <div key={index} className="flex items-center text-sm">
              <span
                onClick={() => handleDeleteStatistic(index)}
                className="mr-2 cursor-pointer rounded-3xl bg-red-magic p-2 text-xs text-ivory transition duration-300 ease-in-out md:hover:-translate-y-1 md:hover:scale-110 "
              >
                <FaTrash />
              </span>
              <span className="">{statistic}</span>
            </div>
          ))}
        </div>
      </div>
      <Form.Root className="w-full" onSubmit={(e) => handleSubmitStatistic(e)}>
        <InputTextField
          shortName="newStatistic"
          name="New Statistic"
          value={newStatistic}
          required={true}
          onChangeFun={(e) => setNewStatistic(e.target.value)}
        />

        <Form.Submit asChild>
          <button className="			mt-5	h-6 w-full border border-black-magic bg-black-magic text-2xs font-semibold     uppercase text-ivory transition-colors duration-300  hover:border-red-magic hover:bg-red-magic/80 dark:border-red-magic/50 dark:bg-red-magic/20 dark:hover:border-red-magic dark:hover:bg-red-magic/80 md:h-10 md:w-full md:text-xs">
            Add Statistic
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
};
export default StatisticsForm;
