import { Details } from "../../types/Product";
import * as Form from "@radix-ui/react-form";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

type DetailsProps = {
  details: Details;

  setDetails: React.Dispatch<React.SetStateAction<Details>>;
};

const DetailsFields = ({
  details,

  setDetails,
}: DetailsProps) => {
  const [story, setStory] = useState(details.story || "");
  const [latinName, setLatinName] = useState(details.latinName || "");
  const [ytLink, setYtLink] = useState(details.ytLink || "");
  const [occurrence, setOccurrence] = useState(details.occurrence || "");

  useEffect(() => {
    setStory(details.story);
    setLatinName(details.latinName || "");
    setYtLink(details.ytLink || "");
    setOccurrence(details.occurrence || "");
  }, [details]);

  return (
    <>
      {" "}
      <Form.Field className="" name="story">
        <div className="flex items-baseline justify-between">
          <Form.Label className=" text-lg font-semibold leading-8 text-zinc-600">
            Story
          </Form.Label>
          <Form.Message className="text-md text-red-400" match="valueMissing">
            Please enter story of the Creature
          </Form.Message>
        </div>
        <Form.Control asChild>
          <textarea
            required
            className="inline-flex w-full items-center justify-center rounded-none border border-solid border-zinc-500 bg-slate-200 p-2 text-zinc-600 focus:rounded-none focus:outline-dashed focus:outline-red-300 h-64 "
            placeholder="Enter the Story"
            value={story}
            onChange={(e) => {
              const newStory = e.target.value;
              setStory(newStory);
              setDetails({ ...details, story: newStory });
            }}

          />
        </Form.Control>
      </Form.Field>
      <Form.Field className="flex flex-col" name="latinName">
        <div className="flex items-baseline justify-between">
          <Form.Label className=" text-lg font-semibold leading-8 text-zinc-600">
            Latin Name
          </Form.Label>
          <Form.Message className="text-md text-red-400" match="valueMissing">
            Please enter your Latin Name
          </Form.Message>

          <Form.Message className="text-md text-red-400" match="typeMismatch">
            Please provide a valid Latin Name
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="inline-flex w-full items-center justify-center rounded-none border border-solid border-zinc-500 bg-slate-200 p-2 text-zinc-600 focus:rounded-none focus:outline-dashed focus:outline-red-300 "
            type="text"
            placeholder="Enter latin name"
            value={latinName}
            onChange={(e) => {
              const newLatinName = e.target.value;
              setLatinName(newLatinName);
              setDetails({ ...details, latinName: newLatinName });
            }}
          />
        </Form.Control>
      </Form.Field>
      <Form.Field className="flex flex-col" name="ytLink">
        <div className="flex items-baseline justify-between">
          <Form.Label className=" text-lg font-semibold leading-8 text-zinc-600">
            Youtube Link
          </Form.Label>
          <Form.Message className="text-md text-red-400" match="valueMissing">
            Please enter your Youtube Link
          </Form.Message>

          <Form.Message className="text-md text-red-400" match="typeMismatch">
            Please provide a valid Youtube Link
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="inline-flex w-full items-center justify-center rounded-none border border-solid border-zinc-500 bg-slate-200 p-2 text-zinc-600 focus:rounded-none focus:outline-dashed focus:outline-red-300 "
            type="text"
            placeholder="Enter Youtube Link"
            value={ytLink}
            onChange={(e) => {
              const newYtLink = e.target.value;
              setYtLink(newYtLink);
              setDetails({ ...details, ytLink: newYtLink });
            }}
          />
        </Form.Control>
      </Form.Field>
      <Form.Field className="flex flex-col" name="occurrence">
        <div className="flex items-baseline justify-between">
          <Form.Label className=" text-lg font-semibold leading-8 text-zinc-600">
            Youtube Occurrence
          </Form.Label>
          <Form.Message className="text-md text-red-400" match="valueMissing">
            Please enter your Occurrence
          </Form.Message>

          <Form.Message className="text-md text-red-400" match="typeMismatch">
            Please provide a valid Occurrence Link
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="inline-flex w-full items-center justify-center rounded-none border border-solid border-zinc-500 bg-slate-200 p-2 text-zinc-600 focus:rounded-none focus:outline-dashed focus:outline-red-300 "
            type="text"
            placeholder="Enter Occurrence of the Creature"
            value={occurrence}
            onChange={(e) => {
              const newOccurrence = e.target.value;
              setOccurrence(newOccurrence);
              setDetails({ ...details, occurrence: newOccurrence });
            }}
          />
        </Form.Control>
      </Form.Field>
    </>
  );
};
export default DetailsFields;
