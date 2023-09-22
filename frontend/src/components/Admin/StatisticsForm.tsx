import * as Form from "@radix-ui/react-form";
import { SyntheticEvent, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

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
    setStatistics([...statistics, newStatistic]);
  };

  const handleDeleteStatistic = (index: number) => {
    const updatedStatistics = statistics.filter((_statistic, i) => i !== index);
    setStatistics(updatedStatistics);
  };
  return (
    <Form.Root className="w-full" onSubmit={(e) => handleSubmitStatistic(e)}>
      <div className="flex flex-col">
        <h3>Statistics list</h3>
        {statistics?.map((statistic, index) => (
          <div key={index} className="flex items-center">
            <FaTrash
              className="hover:cursor-pointer hover:text-red-300"
              onClick={() => handleDeleteStatistic(index)}
            />{" "}
            {statistic}
          </div>
        ))}
      </div>

      <Form.Field className="flex flex-col" name="statistic">
        <div className="flex items-baseline justify-between">
          <Form.Label className=" text-lg font-semibold leading-8 text-zinc-600">
            New Statistic
          </Form.Label>
          <Form.Message className="text-md text-red-magic" match="valueMissing">
            Please enter New Statistic
          </Form.Message>
          <Form.Message className="text-md text-red-magic" match="typeMismatch">
            Please provide a valid New Statistic
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="inline-flex w-full items-center justify-center rounded-none border border-solid border-zinc-500 bg-slate-200 p-2 text-zinc-600 focus:rounded-none focus:outline-dashed focus:outline-red-300 "
            type="text"
            required
            placeholder="Enter 	New Statistic"
            value={newStatistic}
            onChange={(e) => setNewStatistic(e.target.value)}
          />
        </Form.Control>
      </Form.Field>

      <Form.Submit asChild>
        <button
          // add disabled styling
          className="mt-5 w-full bg-zinc-900 py-2 text-center text-white hover:cursor-pointer  hover:bg-red-200"
          // disabled={isLoading}
        >
          Add Statistic
        </button>
      </Form.Submit>
    </Form.Root>
  );
};
export default StatisticsForm;
