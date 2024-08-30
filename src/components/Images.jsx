export default function Images({ index, imageSource, imageText }) {
  return (
    <div className={`image image-${index}`}>
      <img src={imageSource} alt="Image" />
      <p>{imageText}</p>
    </div>
  );
}
