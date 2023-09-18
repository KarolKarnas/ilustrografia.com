export type SliderItemProps = {
  imageSrc: string;
  imageAlt: string;
  ytLink?: string
};

const SliderItem = ({ imageSrc, imageAlt }: SliderItemProps) => {
  return (
    <li className="w-full flex-shrink-0">
      <img src={imageSrc} alt={imageAlt} className="h-auto w-full select-none" />
    </li>
  );
};
export default SliderItem;
