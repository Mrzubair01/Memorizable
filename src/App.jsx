import React from "react";
import "./App.css";
import "remixicon/fonts/remixicon.css";
import Input from "./components/Input";
function App() {
  return (
    <div className="h-screen w-screen bg-[url(https://cdn.vectorstock.com/i/500p/84/87/abstract-glowing-blue-lines-vector-47388487.avif)]  bg-center no-bg-repeat bg-cover  flex flex-col items-center gap-2 justify-start py-15">
      <h1
        className="text-6xl font-extrabold  font-mono "
        style={{
          webkitTextStrokeColor: "black",
          webkitTextStrokeWidth: "2px",
          color: "white",
        }}
      >
        Zubair's Creations
      </h1>
      <div className="h-120 w-160 shadow-xl rounded-2xl backdrop-blur-sm  p-5 flex flex-col gap-5 items-center border-white ">
        <Input />
      </div>
    </div>
  );
}

export default App;
