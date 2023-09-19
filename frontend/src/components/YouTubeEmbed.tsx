type YouTubeEmbedProps ={
  embedId: string
}

const YouTubeEmbed = ({ embedId } : YouTubeEmbedProps) => {
  return (
    // <div className="aspect-w-16 aspect-h-9">

    <div>
    <iframe
      className=" w-[350px] h-[200px] md:w-96 md:h-[216px]  xl:w-128 xl:h-[288px] mx-auto"
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