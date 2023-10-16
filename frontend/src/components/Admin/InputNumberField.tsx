import * as Form from "@radix-ui/react-form";

type Props = {
  shortName: string;
  name: string;
  value: number;
  required: boolean;
  minValue?: number;
  onChangeFun: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputNumberField = ({
  shortName,
  name,
  value,
  required,
  minValue,

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

        <Form.Message
          className="form-message"
          match={(value) => +value < (minValue ? minValue : 1)}
        >
          The {name} should not be less than {minValue}
        </Form.Message>
      </div>

      <Form.Control asChild>
        <input
          className="form-input"
          type="number"
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
export default InputNumberField;
