import React from "react";
import "./App.css";
import myImage from "./ImageInSrc.png";
import ReactPlayer from "react-player";

function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: "100vw", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column" }}>
        <div className="title red">abderrezague mohamed</div>

        <img src={myImage} alt="srbc" />

        <img src={"/imageInPublic.png"} alt="public" />
        <ReactPlayer url="https://www.youtube.com/watch?v=ug50zmP9I7s" />
      </div>
    </div>
  );
}

export default App;
