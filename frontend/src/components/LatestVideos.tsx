import { SearchResult } from "../types/Yt";
import YouTubeEmbed from "./YouTubeEmbed";

export type Props = {
  youtubeItems: SearchResult[];
};

const LatestVideos = ({ youtubeItems }: Props) => {
  console.log(youtubeItems);
  return (
    // <div className="w-full min-w-full">
      
      <div className="flex justify-evenly min-w-full">
        {youtubeItems.map((item, index) => (
          <YouTubeEmbed key={index} embedId={item.id.videoId} />
        ))}
      </div>
    // </div>
  );
};
export default LatestVideos;
