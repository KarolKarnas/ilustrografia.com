import * as Form from "@radix-ui/react-form";

type Props = {
  shortName: string;
  name: string;
  value: number;
  required: boolean;
  minValue?: number;
  onChangeFun: (e: React.ChangeEvent<HTMLInputElement>) => void;
  minimal?: boolean;
};

const InputNumberField = ({
  shortName,
  name,
  value,
  required,
  minValue,
  minimal,
  onChangeFun,
}: Props) => {
  return (
    <Form.Field className="flex flex-col" name={shortName}>
      <div className={`${minimal ? "relative" : null} flex items-baseline justify-between`}>
        <Form.Label className={minimal ? ('opacity-30 text-2xs absolute bottom-0 text-center w-full uppercase') : `form-label`}>{name}</Form.Label>
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
