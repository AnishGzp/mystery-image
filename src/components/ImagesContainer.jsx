import Images from "./Images";
import "./ImagesContainer.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";

export default function ImagesContainer({ display, setDisplay }) {
  let imageSource = [img1, img2, img3, img4, img5, img6, img7];
  let imageText = [
    "Very few people volunteer for community service projects, resulting in poor participation in cleanliness drives and social initiatives.",
    "In our community, some young people are often seen being rude or disrespectful to elderly residents, ignoring their needs or making them uncomfortable. Prompt: Brainstorm ways to promote respect and kindness towards the elderly and create a more supportive environment for them.",
    "Our school or neighbourhood park is frequently littered with trash, despite having dustbins available. Some people spit everywhere. Sometimes it is along with things they chew. It's really very sad that the public places are dirtied due to some of these people",
    "Despite having separate bins for recycling and compost, people are not segregating their waste properly.",
    "There have been instances of eve-teasing making women and girls feel unsafe when they go out alone. Cases of rape and molestation are rampant",
    "There's excessive noise in your neighbourhood due to loud music and honking, disturbing everyone, especially the elderly and students.",
    "Very few people volunteer for community service projects, resulting in poor participation in cleanliness drives and social initiatives.",
  ];
  console.log(imageSource[2]);

  return (
    <div className="image-container" style={{ display: display }}>
      <div className="image-content">
        <Images
          index={0}
          imageSource={imageSource[0]}
          imageText={imageText[0]}
        />
        <Images
          index={1}
          imageSource={imageSource[1]}
          imageText={imageText[1]}
        />
        <Images
          index={2}
          imageSource={imageSource[2]}
          imageText={imageText[2]}
        />
      </div>
      <button onClick={() => setDisplay("none")}>Remove</button>
      <div className="image-content">
        <Images
          index={3}
          imageSource={imageSource[3]}
          imageText={imageText[3]}
        />
        <Images
          index={4}
          imageSource={imageSource[4]}
          imageText={imageText[4]}
        />
        <Images
          index={5}
          imageSource={imageSource[5]}
          imageText={imageText[5]}
        />
        <Images
          index={6}
          imageSource={imageSource[6]}
          imageText={imageText[6]}
        />
      </div>
    </div>
  );
}
