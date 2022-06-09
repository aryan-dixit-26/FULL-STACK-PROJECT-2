import React from "react";
import Navbar from "./components/navbar";
import Meme from "./components/Meme.js"
import "./style.css"
export default function App() {
  return (
    <div>
      <Navbar />
      <Meme 
        hello={"hello"}
      />
    </div>
  );
}
