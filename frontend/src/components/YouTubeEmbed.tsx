type YouTubeEmbedProps = {
  embedId: string;
  center?: boolean;
  mobileCenter?: boolean;
};

const YouTubeEmbed = ({ embedId, center, mobileCenter }: YouTubeEmbedProps) => {
  return (
    // <div className="aspect-w-16 aspect-h-9">

    <div>
      <iframe
        className={`${
          center ? "mx-auto" : mobileCenter ? "mx-auto md:mx-0" : ""
        } h-[180px] w-[320px] shadow-small-hero transition-transform  duration-500 md:h-[216px]  md:w-96 md:hover:translate-y-[-1rem] md:hover:scale-110 xl:h-[220px] xl:w-[400px]`}
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
