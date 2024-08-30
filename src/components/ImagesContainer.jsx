import "./ImagesContainer.css";

export default function ImagesContainer({ display, setDisplay }) {
  let imageSource = [
    "https://via.placeholder.com/80",
    "https://via.placeholder.com/80",
    "https://via.placeholder.com/80",
    "https://via.placeholder.com/80",
  ];
  console.log(imageSource[2]);

  return (
    <div className="image-container" style={{ display: display }}>
      {imageSource.map((imageItem, index) => (
        <div className={`image image-${index}`} key={index}>
          <img src={imageItem} alt="Image" />
        </div>
      ))}
      <button onClick={() => setDisplay("none")}>Remove</button>
    </div>
  );
}
