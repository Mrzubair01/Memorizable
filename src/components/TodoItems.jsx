import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";
import { motion } from "framer-motion";
const TodoItems = ({ todo }) => {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.text);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();
  const editTodo = () => {
    updateTodo(todo.id, { ...todo, text: todoMsg });
    setIsTodoEditable(false);
  };
  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div>
      <motion.div
        initial={{ transform: "translateY(-100px)" }}
        animate={{ transform: "translateY(0px)" }}
        transition={{ type: "spring", duration: 0.5 }}
        exit={{ transform: "translateY(-100px)" }}
        className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300   text-black font-mono ${
          todo.isCompleted ? "bg-[#9bc279]" : "bg-[#be9fbb]"
        }`}
      >
        <input
          type="checkbox"
          className="cursor-pointer"
          // checked={todo.isCompleted}
          onChange={toggleCompleted}
        />
        <input
          type="text"
          className={`border outline-none w-full bg-transparent rounded-lg ${
            isTodoEditable ? "border-black/10 px-2" : "border-transparent"
          } ${todo.isCompleted ? "line-through" : ""}`}
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          readOnly={!isTodoEditable}
        />
        {/* Edit, Save Button */}
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-200 duration-200  shrink-0 disabled:opacity-50 cursor-pointer "
          onClick={() => {
            if (todo.isCompleted) return;

            if (isTodoEditable) {
              editTodo();
            } else setIsTodoEditable((prev) => !prev);
          }}
          disabled={todo.isCompleted}
        >
          {isTodoEditable ? "📁" : "✏️"}
        </button>
        {/* Delete Todo Button */}
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-200 duration-200 shrink-0 cursor-pointer "
          onClick={() => deleteTodo(todo.id)}
        >
          ❌
        </button>
      </motion.div>
    </div>
  );
};

export default TodoItems;
