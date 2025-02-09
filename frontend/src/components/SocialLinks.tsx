import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <>
      {" "}
      <a
        rel="noreferrer"
        target="_blank"
        className="rounded-3xl bg-red-magic bg-opacity-60 p-2 transition duration-300 ease-in-out md:hover:-translate-y-1 md:hover:scale-110"
        href="https://www.facebook.com/ilustrografiaPL/"
      >
        <FaFacebook className="text-white" />
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://www.instagram.com/ilustrografia.pl/"
        className="rounded-3xl bg-red-magic bg-opacity-60 p-2 transition duration-300 ease-in-out md:hover:-translate-y-1 md:hover:scale-110"
      >
        <FaInstagram className="text-white" />
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://www.tiktok.com/@ilustrografia.pl"
        className="rounded-3xl bg-red-magic bg-opacity-60 p-2 transition duration-300 ease-in-out md:hover:-translate-y-1 md:hover:scale-110"
      >
        <FaTiktok className="text-white" />
      </a>{" "}
      <a
        rel="noreferrer"
        target="_blank"
        href="https://www.youtube.com/channel/UCH4ljdai9HnOYcKVHWnJ6ng"
        className="rounded-3xl bg-red-magic bg-opacity-60 p-2 transition duration-300 ease-in-out md:hover:-translate-y-1 md:hover:scale-110"
      >
        <FaYoutube className="text-white" />
      </a>
    </>
  );
};
export default SocialLinks;
