import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts/TodoContext";
import { nanoid } from "nanoid";
import TodoForm from "./components/TodoForm";
import TodoItems from "./components/TodoItems";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: nanoid(), ...todo }, ...prev]);
  };
  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
    toast.success("Task updated successfully");
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    toast.success("Task deleted successfully");
  };
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  useEffect(() => {
    const myTodos = JSON.parse(localStorage.getItem("todos"));
    if (myTodos && myTodos.length > 0) {
      setTodos(myTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div
        className="bg-[url(/mainBg.avif)]
      bg-cover bg-no-repeat bg-center
      min-h-screen py-8"
      >
        <div className="w-full max-w-2xl mx-auto shadow-md  rounded-xl px-6 py-3 text-white backdrop-blur-xl">
          <h1 className="text-4xl font-bold text-center mb-8 mt-2 font-serif">
            Manage Your Todos
          </h1>
          <div className="mb-4 ">
            <TodoForm />
          </div>
          <div
            className="flex flex-col items-center gap-y-5 py-5  h-[50vh] overflow-y-auto rounded-lg
          [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-[#163056]
  [&::-webkit-scrollbar-track]:p-5
  [&::-webkit-scrollbar-thumb]:bg-[#708cb5]
  [&::-webkit-scrollbar-thumb]:rounded-3xl
  [&::-webkit-scrollbar-track]:rounded
  [&::-webkit-scrollbar-thumb]:border
  [&::-webkit-scrollbar-thumb]:border-[#be9fbb]
          "
          >
            {todos.map((todo) => (
              // <div key={todo.id} className="w-full ">

              // </div>
              <div key={todo.id} className="w-[98%] ">
                <TodoItems todo={todo} />
              </div>
            ))}
          </div>
        </div>
        <img
          src="/SignLogo.png"
          alt="Developer's Sign"
          className="w-25 h-25 rounded-full fixed bottom-5 right-5"
        />
      </div>
    </TodoProvider>
  );
}

export default App;
