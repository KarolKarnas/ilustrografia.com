import { useMouseMove } from "../hooks/componentHooks";
import { v4 as uuidv4 } from 'uuid';
import MainStrongText from "./primitives/MainStrongText";


type Props = {
 
  src: string;
  reverse?: boolean;
  text?: string;
};

const ImageMouseMoving = ({ src, reverse,text }: Props) => {

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
  return (<div id={id}>
    {text && <MainStrongText>{text}</MainStrongText>}
    <img  className="dark:invert-90" src={src} alt={`magic visual element`} />
    </div>
  );
};
export default ImageMouseMoving;
