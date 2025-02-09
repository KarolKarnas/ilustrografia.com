import { SearchResult } from "../types/Yt";
import YouTubeEmbed from "./YouTubeEmbed";

export type LatestVideosProps = {
  youtubeItems: SearchResult[];
};

const LatestVideos = ({ youtubeItems }: LatestVideosProps) => {
  return (
    <div className=" z-10 grid min-w-full gap-y-10 md:grid-cols-2 xl:grid-cols-3 ">
      {youtubeItems.map((item, index) => (
        <YouTubeEmbed center key={index} embedId={item.id.videoId} />
      ))}
    </div>
  );
};
export default LatestVideos;
