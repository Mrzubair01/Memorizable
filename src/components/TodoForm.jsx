import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";
import toast from "react-hot-toast";

const TodoForm = () => {
  const [todos, setTodos] = useState("");
  const { addTodo } = useTodo();
  const add = (e) => {
    e.preventDefault();
    if (!todos) return;
    if (todos.trim() === "") {
      toast.error("Task cannot be empty");
      return;
    } else {
      addTodo({
        text: todos,
        isCompleted: false,
      });
      setTodos("");
      toast.success("Task added successfully");
    }
  };
  return (
    <main>
      <form className="flex" onSubmit={add}>
        <input
          type="text"
          placeholder="Write Todo..."
          className="w-full border border-r-0 border-black/10 rounded-l-lg px-3 outline-none hover:border-green-600  duration-150 bg-white/20 py-2.5  font-medium font-mono"
          value={todos}
          onChange={(e) => setTodos(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-r-lg cursor-pointer hover:bg-green-700 transition font-medium  px-3 py-1 bg-green-600 text-white shrink-0"
        >
          Add
        </button>
      </form>
    </main>
  );
};

export default TodoForm;
