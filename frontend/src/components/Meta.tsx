import { Helmet } from "react-helmet-async";

type MetaProps = {
  title?: string;
  description?: string;
  keywords?: string;
};

const Meta = ({
  title = "Ilustrografia · Illustration · Digital Painting · Fantasy · Legends ",
  description = "Reality Full of Magic",
  keywords = "Art-print, Painting on Canvas, Fantasy, Digital Painting, Prints, Poster",
}: MetaProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};
export default Meta;
