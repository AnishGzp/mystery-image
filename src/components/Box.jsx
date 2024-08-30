import "./Box.css";

export default function Box({ display, setDisplay }) {
  return (
    <div className="box-container">
      <div className="title">Click the Box for a surprise</div>
      <div className="box">
        <h1
          onClick={() => {
            setDisplay("flex");
          }}
        >
          Click me!
        </h1>
      </div>
    </div>
  );
}
