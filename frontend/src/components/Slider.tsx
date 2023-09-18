import SliderItem, { SliderItemProps } from "./SliderItem"

export type SliderProps = {
  items: Array<SliderItemProps>
}

const Slider = ({items} : SliderProps) => {
  return (
    <div className="w-full min-w-full overflow-auto">
      <ul className="flex flex-row min-w-full list-none p-0 m-0">
{items.map((item, index) => (
  <SliderItem key={index} imageSrc={item.imageSrc} imageAlt={item.imageAlt}/>
))}

      </ul>
    </div>
  )
}
export default Slider