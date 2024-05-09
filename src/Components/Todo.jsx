import React, { forwardRef, useState } from "react";
import icons from "../icons";

const Todo = ({ todo, updateTodo, deleteTodo, completed }) => {
  const [completedState, setCompletedState] = useState(false);
  return (
    <div className="flex items-center space-x-2 my-3">
      <p onClick={() => setCompletedState(!completedState)}>
        {completedState ? <icons.done /> : <icons.ongoing />}
      </p>
      <p className={`${completedState && "line-through"} capitalize`}>{todo}</p>
      <button
        type="submit"
        onClick={updateTodo}
        className="bg-green-950 text-white p-2 h-fit rounded-md ml-3"
      >
        {icons.edit()}
      </button>
      <button
        type="submit"
        onClick={deleteTodo}
        className="bg-red-800 text-white p-2 h-fit rounded-md ml-3"
      >
        {icons.del()}
      </button>
    </div>
  );
};

const Todos = forwardRef(({ todo, updateTodo, deleteTodo }, ref) => {
  const [completedState, setCompletedState] = useState(false);
  return (
    <div ref={ref} className="flex items-center space-x-2 my-3">
      <p onClick={() => setCompletedState(!completedState)}>
        {completedState ? <icons.done /> : <icons.ongoing />}
      </p>
      <p className={`${completedState && "line-through"} capitalize`}>{todo}</p>
      <button
        type="submit"
        onClick={updateTodo}
        className="bg-green-950 text-white p-2 h-fit rounded-md ml-3"
      >
        {icons.edit()}
      </button>
      <button
        type="submit"
        onClick={deleteTodo}
        className="bg-red-800 text-white p-2 h-fit rounded-md ml-3"
      >
        {icons.del()}
      </button>
    </div>
  );
});

export default Todos;
