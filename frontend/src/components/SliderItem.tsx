import YouTubeEmbed from "./YouTubeEmbed";

export type SliderItemProps = {
  imageSrc?: string;
  imageAlt?: string;
  embedId?: string;
};

const SliderItem = ({ imageSrc, imageAlt, embedId }: SliderItemProps) => {
  return (
    <li className="w-full flex-shrink-0">
      {embedId ? (
        <YouTubeEmbed embedId={embedId} />
      ) : (
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-auto w-full select-none"
        />
      )}
    </li>
  );
};
export default SliderItem;
