import React, { useState } from "react";
import Items from "./Items";

function Input() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (inputValue === " " || inputValue === "" || inputValue == []) {
      alert("Please Enter Something");
      return;
    }
    items.push(inputValue);
    setInputValue("");
    console.log(items);
  };
  return (
    <>
      <div className="w-150 h-20  rounded-2xl flex items-center gap-3  justify-center text-white ">
        <input
          id="todo"
          type="text"
          placeholder="Enter your Todo"
          className="w-125 h-15 rounded-2xl px-3  cursor-pointer outline-none border-1 border-transparent text-xl font-semibold duration-200  hover:border-white "
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) =>
            (e.key === "Enter" || e.keyCode === 13) && addItem()
          }
        />
        <button
          className="w-20 h-12 rounded-2xl  bg-transparent  text-2xl cursor-pointer border-2 border-green-500 hover:text-white  duration-200 active:bg-green-700  active:border-green-600 text-green-600"
          onClick={() => addItem()}
        >
          <i className="ri-add-circle-line "></i>
        </button>
      </div>
      <Items items={items} setItems={setItems} />
    </>
  );
}

export default Input;
