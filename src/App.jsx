import React from "react";
import "./App.css";
import "remixicon/fonts/remixicon.css";
import Input from "./components/Input";
function App() {
  return (
    <div className="h-screen w-screen bg-slate-800 flex justify-center py-15">
      <div className="h-120 w-160 shadow-xl rounded-2xl bg-linear-to-t from-gray-500 to-zinc-800 p-5 flex flex-col gap-5 items-center border-white ">
        <Input />
      </div>
    </div>
  );
}

export default App;
