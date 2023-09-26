type YouTubeEmbedProps = {
  embedId: string;
  center?: boolean;
};

const YouTubeEmbed = ({ embedId, center }: YouTubeEmbedProps) => {
  return (
    // <div className="aspect-w-16 aspect-h-9">

    <div>
      <iframe
        className={`${
          center ? "mx-auto" : ""
        } h-[200px] w-[350px] shadow-small-hero md:h-[216px]  md:w-96 xl:h-[288px]  xl:w-128`}
        src={`https://www.youtube.com/embed/${embedId}`}
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

    // </div>
  );
};

export default YouTubeEmbed;
