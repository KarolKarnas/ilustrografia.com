import SliderItem, { SliderItemProps } from "./SliderItem";
import { SearchResult } from "../types/Yt";

export type SliderProps = {
  items?: SliderItemProps[];
  youtubeItems?: SearchResult[];
};

const Slider = ({ items, youtubeItems }: SliderProps) => {
  return (
    <div className="w-full min-w-full overflow-auto">
      <ul className="m-0 flex min-w-full list-none flex-row p-0">
        {youtubeItems ? (
          youtubeItems.map((item, index) => (
            <SliderItem key={index} embedId={item.id.videoId} />
          ))
        ) : items ? (
          items.map((item, index) => (
            <SliderItem
              key={index}
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
            />
          ))
        ) : (
          <div>No data provided</div>
        )}
      </ul>
    </div>
  );
};
export default Slider;
