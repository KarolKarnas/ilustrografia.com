import * as Form from "@radix-ui/react-form";

type Props = {
  shortName: string;
  name: string;
  value?: string;
  required: boolean;
  onChangeFun: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputTextField = ({
  shortName,
  name,
  value,
  required,
  onChangeFun,
}: Props) => {
  return (
    <Form.Field className="flex flex-col" name={shortName}>
      <div className="flex items-baseline justify-between">
        <Form.Label className="form-label">{name}</Form.Label>
        <Form.Message className="form-message" match="valueMissing">
          Please enter your {name}
        </Form.Message>
        <Form.Message className="form-message" match="typeMismatch">
          Please provide a valid {name}
        </Form.Message>
        {value !== "" ? (
          <Form.Message
            className="form-message"
            match={(value) => value.trim() === ""}
          >
            Just empty spaces here...
          </Form.Message>
        ) : null}
      </div>

      <Form.Control asChild>
        <input
          className="form-input"
          type="text"
          placeholder={`Enter ${name}`}
          value={value}
          onChange={(e) => {
            onChangeFun(e);
          }}
          required={required}
        />
      </Form.Control>
    </Form.Field>
  );
};
export default InputTextField;
