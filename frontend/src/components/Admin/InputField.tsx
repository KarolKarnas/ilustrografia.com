import * as Form from "@radix-ui/react-form";

type Props = {
  shortName: string;
  name: string;
  value: string;
  required: boolean;
  onChangeFun: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField = ({
  shortName,
  name,
  value,
  required,
  onChangeFun,
}: Props) => {
  return (
    <Form.Field className="flex flex-col" name={shortName}>
      <div className="flex items-baseline justify-between">
        <Form.Label className=" text-lg font-semibold leading-8 text-zinc-600">
          {name}
        </Form.Label>
        <Form.Message className="text-md text-red-400" match="valueMissing">
          Please enter your {name}
        </Form.Message>

        <Form.Message className="text-md text-red-400" match="typeMismatch">
          Please provide a valid {name}
        </Form.Message>

        {value !== '' ? <Form.Message className="text-md text-red-400" match={(value) => value.trim() === ""}>
          Just empty spaces here...
        </Form.Message> : null}
      </div>
      <Form.Control asChild>
        <input
          className="inline-flex w-full items-center justify-center rounded-none border border-solid border-zinc-500 bg-slate-200 p-2 text-zinc-600 focus:rounded-none focus:outline-dashed focus:outline-red-300 "
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
export default InputField;
