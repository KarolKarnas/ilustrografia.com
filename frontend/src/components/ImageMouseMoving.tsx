import { useMouseMove } from "../hooks/componentHooks";
import { v4 as uuidv4 } from 'uuid';


type Props = {
 
  src: string;
  reverse?: boolean;
};

const ImageMouseMoving = ({ src, reverse }: Props) => {

  const id = uuidv4()
  useMouseMove((e) => {
    const image = document.getElementById(id);

    if (reverse) {
      if (image) {
        image.style.transform = `translateX(${
          (e.clientX - 700) / -6
        }px) translateY(${(e.clientY - 400) / -10}px)`;
      }
    } else if (!reverse) {
      if (image) {
        image.style.transform = `translateX(${
          (e.clientX - 1000) / 4
        }px) translateY(${(e.clientY - 200) / 4}px)`;
      }
    }
  });
  return (
    <img id={id} className="dark:invert-90" src={src} alt={`magic visual element`} />
  );
};
export default ImageMouseMoving;
