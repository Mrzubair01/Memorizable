import { createContext, useContext } from "react";
const TodoContext = createContext({
  todos: [
    {
      id: 1,
      text: "This is first todo",
      isCompleted: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (todo, id) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};
export const TodoProvider = TodoContext.Provider;
// export const TodoProvider = ({ children }) => {
//   const data = {
//     todos: [
//       {
//         id: 1,
//         text: "This is first todo",
//         isCompleted: false,
//       },
//     ],
//     addTodo: (todo) => {},
//     updateTodo: (todo, id) => {},
//     deleteTodo: (id) => {},
//     toggleComplete: (id) => {},
//   };
//   return (
//     <TodoContext.Provider value={{ data }}>{children}</TodoContext.Provider>
//   );
// };
// export const useTodo = () => useContext(TodoContext);
