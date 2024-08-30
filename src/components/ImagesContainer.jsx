import Images from "./Images";
import "./ImagesContainer.css";

export default function ImagesContainer({ display, setDisplay }) {
  let imageSource = [
    "https://via.placeholder.com/80",
    "https://via.placeholder.com/80",
    "https://via.placeholder.com/80",
    "https://via.placeholder.com/80",
    "https://via.placeholder.com/80",
    "https://via.placeholder.com/80",
  ];
  let imageText = [
    "Text 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim neque necessitatibus iure culpa quaerat et eos sed beatae temporibus minus.",
    "Text 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim neque necessitatibus iure culpa quaerat et eos sed beatae temporibus minus.",
    " Text 3Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim neque necessitatibus iure culpa quaerat et eos sed beatae temporibus minus.",
    "Text 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim neque necessitatibus iure culpa quaerat et eos sed beatae temporibus minus.",
    "Text 5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim neque necessitatibus iure culpa quaerat et eos sed beatae temporibus minus.",
    "Text 6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim neque necessitatibus iure culpa quaerat et eos sed beatae temporibus minus.",
  ];
  console.log(imageSource[2]);

  return (
    <div className="image-container" style={{ display: display }}>
      <Images index={0} imageSource={imageSource[0]} imageText={imageText[0]} />
      <Images index={1} imageSource={imageSource[1]} imageText={imageText[1]} />
      <Images index={2} imageSource={imageSource[2]} imageText={imageText[2]} />
      <Images index={3} imageSource={imageSource[3]} imageText={imageText[3]} />
      <Images index={4} imageSource={imageSource[4]} imageText={imageText[4]} />
      <Images index={5} imageSource={imageSource[5]} imageText={imageText[5]} />
      <button onClick={() => setDisplay("none")}>Remove</button>
    </div>
  );
}
