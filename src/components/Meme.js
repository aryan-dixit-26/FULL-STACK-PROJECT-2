import React from "react";
import memedata from "../memesData";

const top = {
  position: "absolute",
  fontWeight: "bold",
  textAlign: "center",
  top: "7%",
  left: "20%",
  fontSize: "115px",
  color : "yellow",
};

const bottom = {
  position: "absolute",
  fontWeight: "bold",
  textAlign: "center",
  top: "75%",
  left: "20%",
  fontSize: "115px",
  color : "yellow"
};

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState(
    "https://i.imgflip.com/22bdq6.jpg"
  );
  const [topText, setTopText] = React.useState("");
  const [bottomText, setBottomText] = React.useState("");
  function getImage() {
    const memesArray = memedata.data.memes;
    const randomNumber = Math.round(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }

  const handleTopChange = (event) => {
    let val = event.target.value;
    setTopText((prev) => val);
  };

  const handleBottomChange = (event) => {
    let val = event.target.value;
    setBottomText((prev) => val);
  };
  return (
    <div>
      <form>
        <input
          value={topText}
          onChange={handleTopChange}
          placeholder="ENTER TOP TEXT HERE"
        />
        <input
          value={bottomText}
          onChange={handleBottomChange}
          placeholder="ENTER BOTTOM TEXT HERE"
        />
      </form>
      <button onClick={getImage}>Get A New Image</button>
      <div style={{ position: "relative" }}>
        <h1 style={top}>{topText}</h1>
        <img src={memeImage} alt="" width="250px" className="meme--image" />
        <h1 style={bottom}>{bottomText}</h1>
      </div>
    </div>
  );
}
