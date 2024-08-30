import { useState } from "react";
import "./App.css";
import Box from "./components/Box";
import ImagesContainer from "./components/ImagesContainer";

function App() {
  const [display, setDisplay] = useState("none");
  return (
    <>
      <Box display={display} setDisplay={setDisplay} />
      <ImagesContainer display={display} setDisplay={setDisplay} />
    </>
  );
}

export default App;
