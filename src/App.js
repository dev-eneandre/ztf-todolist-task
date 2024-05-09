import { useState } from "react";
import "./App.css";
import Todo from "./Components/Todo";
import icons from "./icons";
import FlipMove from "react-flip-move";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [updateATodo, setUpdateATodo] = useState("");
  const [updateField, setUpdateField] = useState({
    visibility: false,
    indexValue: 0,
  });
  const [isPopUpActive, setIsPopUpActive] = useState(false);

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        status: false,
        todo,
      },
    ]);
    setTodo("");
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const updateTodo = (index) => {
    setIsPopUpActive(true);
    setUpdateField({ visibility: true, indexValue: index });
   
  };

  const updateSelectedTodo = (e) => {
    e.preventDefault();
    const newTodos = [...todos];
    newTodos.splice(updateField.indexValue, 1, {
      visibility: false,
      todo: updateATodo,
    });
    setTodos(newTodos);
    setUpdateATodo("");
    setIsPopUpActive(false);
  };

  const customEnterAnimation = {
    from: { transform: "translateY(-100%)" },
    to: { transform: "translateY(0)" },
  };

  const customLeaveAnimation = {
    from: { transform: "translateX(0)" },
    to: { transform: "translateX(-10%)" },
  };
  return (
    <div className="">
      <div className=" bg-cyan-900 flex justify-between items-center">
        <form className="p-2 w-full">
          <input
            placeholder="Write a todo"
            className="w-1/3 px-2 py-3 rounded-md border border-gray-900"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            type="submit"
            onClick={addTodo}
            className="bg-green-950 text-white px-6 py-3 h-fit rounded-md ml-3 inline-flex gap-x-4 items-center"
          >
            {icons.add2()}
          </button>
        </form>
      </div>

      <FlipMove
        className="p-5"
        typeName={null}
        enterAnimation={customEnterAnimation}
        leaveAnimation={customLeaveAnimation}
      >
        {todos.map((todo, index) => (
          <Todo
            key={index}
            todo={todo.todo}
            updateTodo={() => updateTodo(index)}
            deleteTodo={() => deleteTodo(index)}
          />
        ))}
      </FlipMove>

      {isPopUpActive && (
        <div className="fixed  w-full h-screen bg-filter left-0 -top-0 z-[9999] ">
          <div className="h-full flex justify-center items-center ">
            <div className="bg-white rounded-xl px-10 py-7 relative">
              <div
                className="text-lg rounded-full p-2 flex h-fit items-center cursor-pointer justify-center bg-[#EB4335] font-bold absolute right-4 top-5"
                onClick={() => setIsPopUpActive(false)}
              >
                <icons.close />
              </div>
              <div className="flex justify-between gap-x-5 items-center">
                <form className="p-2 w-full inline-flex gap-x-2 items-center mt-5">
                  <input
                    placeholder="update this todo"
                    className="w-full px-2 py-3 rounded-md outline-none border-gray-900 border-b"
                    value={updateATodo}
                    onChange={(e) => setUpdateATodo(e.target.value)}
                  />
                  <button
                    type="submit"
                    onClick={updateSelectedTodo}
                    className=" "
                  >
                    {icons.done()}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
