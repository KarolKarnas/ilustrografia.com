type Props = {
  variant: 'good' | 'bad',
  message: string
}

const Message = ({variant, message}: Props) => {
  if (variant === 'good') {
    return (<div className=" border  border-green-400  rounded-sm p-4 bg-green-200 text-green-900">{message}</div>)
  }else if (variant === 'bad') {
    return (<div className=" border  border-red-400  rounded-sm p-4 bg-red-100 text-red-800">{message}</div>)
  } else {
    return (<div>Something went wrong</div>)
  }
}
export default Message