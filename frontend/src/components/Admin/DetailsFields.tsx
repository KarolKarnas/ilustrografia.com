import { Details } from "../../types/Product";
import * as Form from "@radix-ui/react-form";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import InputTextField from "./InputTextField";

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
      <Form.Field name="story">
       
          <Form.Label className=" form-label">
            Story
          </Form.Label>
          <Form.Message className="form-message" match="valueMissing">
            Please enter story of the Creature
          </Form.Message>
      
        <Form.Control asChild>
          <textarea
            required
            className="input-text h-64"
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

      <InputTextField
        shortName={"latinName"}
        name={"Latin Name"}
        onChangeFun={(e) => {
          const newLatinName = e.target.value;
          setLatinName(newLatinName);
          setDetails({ ...details, latinName: newLatinName });
        }}
        value={latinName}
        required={false}
      />

      <InputTextField
        shortName={"ytLink"}
        name={"Youtube Link"}
        onChangeFun={(e) => {
          const newYtLink = e.target.value;
          setYtLink(newYtLink);
          setDetails({ ...details, ytLink: newYtLink });
        }}
        value={ytLink}
        required={false}
      />

      
      <InputTextField
        shortName={"occurrence"}
        name={"Occurrence"}
        onChangeFun={(e) => {
          const newOccurrence = e.target.value;
          setOccurrence(newOccurrence);
          setDetails({ ...details, occurrence: newOccurrence });
        }}
        value={occurrence}
        required={false}
      />
    
    </>
  );
};
export default DetailsFields;
