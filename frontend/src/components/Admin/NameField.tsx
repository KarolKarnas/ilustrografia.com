import * as Form from "@radix-ui/react-form";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { getError } from "../../utils/utils";
import _ from "lodash";
import { ApiError } from "../../types/ApiError";

type Props = {
  updateError: FetchBaseQueryError | SerializedError | undefined;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setSlug: React.Dispatch<React.SetStateAction<string>>;
};

// toast.error(getError(error as ApiError));

const NameField = ({ updateError, name, setName, setSlug }: Props) => {
  return (
    <Form.Field className="flex flex-col" name="name">
      <div className="flex items-baseline justify-between">
        <Form.Label className=" form-label">Name</Form.Label>
        <Form.Message className="text-md text-red-magic" match="valueMissing">
          Please enter your name
        </Form.Message>
        {/* {updateError && (
          <Form.Message
            className="form-message"
            match="typeMismatch"
            forceMatch={Boolean(updateError)}
          >
            {getError(updateError as ApiError)}
          </Form.Message>
        )} */}

        {name !== "" ? (
          <Form.Message
            className="form-message"
            match={(name) => name.trim() === ""}
          >
            Just empty spaces here...
          </Form.Message>
        ) : null}
      </div>

      <Form.Control asChild>
        <input
          className="form-input"
          type="text"
          required
          placeholder="Enter name"
          value={name}
          onChange={(e) => {
            const newName = e.target.value;
            const newSlug = _.kebabCase(newName);

            setName(newName);
            setSlug(newSlug);
          }}
        />
      </Form.Control>
    </Form.Field>
  );
};
export default NameField;
