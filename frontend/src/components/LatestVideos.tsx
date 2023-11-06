import { SearchResult } from "../types/Yt";
import YouTubeEmbed from "./YouTubeEmbed";

export type Props = {
  youtubeItems: SearchResult[];
};

const LatestVideos = ({ youtubeItems }: Props) => {
  console.log(youtubeItems);
  return (
    // <div className="w-full min-w-full">

    <div className=" grid md:grid-cols-2 xl:grid-cols-3 min-w-full gap-y-10 z-10 ">
      {youtubeItems.map((item, index) => (
        <YouTubeEmbed center key={index} embedId={item.id.videoId} />
      ))}
    </div>
    // </div>
  );
};
export default LatestVideos;
