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
    <Form.Field name={shortName}>
      <Form.Label className=" form-label">{name}</Form.Label>
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

      <Form.Control asChild>
        <input
          className="input-text"
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
