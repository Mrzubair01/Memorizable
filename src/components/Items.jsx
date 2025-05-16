import React, { useState } from "react";
function Items(props) {
  const { items, setItems } = props;
  const [isEditable, setIsEditable] = useState(false);
  const deleteItem = (index) => {
    const newItems = items.filter((item, i) => i !== index);
    props.setItems(newItems);
  };
  const toggleDone = (index) => {
    const temp = document.querySelectorAll(".content");
    temp[index].classList.add("line-through");
  };

  if (items.length === 0 || items[0] === "No Items") {
    return (
      <div
        className="mainBox w-150 h-100  duration-200 overflow-auto flex flex-col gap-5 p-3 rounded border-1 hover:border-transparent text-white capitalize 
    [&::-webkit-scrollbar]:w-2  [&::-webkit-scrollbar]:bg-gray-500 [&::-webkit-scrollbar-thumb]:bg-gray-700
    [&::-webkit-scrollbar]:rounded-4xl [&::-webkit-scrollbar-thumb]:rounded-4xl
    "
      ></div>
    );
  } else {
    return (
      <div
        className="mainBox w-150 h-100  duration-200 overflow-auto flex flex-col gap-5 p-3 rounded border-1 hover:border-transparent text-white capitalize 
    [&::-webkit-scrollbar]:w-2  [&::-webkit-scrollbar]:bg-gray-500 [&::-webkit-scrollbar-thumb]:bg-gray-700
    [&::-webkit-scrollbar]:rounded-4xl [&::-webkit-scrollbar-thumb]:rounded-4xl
    "
      >
        {items.map((item, index) => (
          <div className="w-full p-2 flex justify-between bg-cyan-700 rounded-lg gap-3 items-center">
            <h1 className="snum ">{index + 1}.</h1>
            {isEditable ? (
              <input
                className="text-center outline-none px-2 capitalize text-"
                type="text"
                value={item}
                onChange={(e) =>
                  setItems(
                    items.map((item, i) =>
                      i === index ? e.target.value : item
                    )
                  )
                }
                onKeyDown={(e) =>
                  e.key === "Enter" && setIsEditable(!isEditable)
                }
              />
            ) : (
              <h1
                className={` task px-2 capitalize content`}
                onDoubleClick={() => setIsEditable(!isEditable)}
              >
                {item}
              </h1>
            )}
            <div className="flex gap-3 ">
              <button
                className="done text-green-600 text-2xl hover:cursor-pointer hover:text-green-500 duration-300 active:text-green-700"
                onClick={() => toggleDone(index)}
              >
                <i className="ri-check-double-line"></i>
              </button>
              <button
                className="delete text-red-700 text-xl hover:cursor-pointer hover:text-red-500 duration-300 active:text-red-700"
                onClick={() => deleteItem(index)}
              >
                <i class="ri-delete-bin-2-line"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Items;
