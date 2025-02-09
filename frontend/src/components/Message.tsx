type MessageProps = {
  variant: "good" | "bad";
  message: string;
};

const Message = ({ variant, message }: MessageProps) => {
  if (variant === "good") {
    return (
      <div className=" rounded-sm  border  border-green-400 bg-green-200 p-4 text-green-900">
        {message}
      </div>
    );
  } else if (variant === "bad") {
    return (
      <div className=" rounded-sm  border  border-red-magic bg-red-100 p-4 text-red-800">
        {message}
      </div>
    );
  } else {
    return <div>Something went wrong</div>;
  }
};
export default Message;
