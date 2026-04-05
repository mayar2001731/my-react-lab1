import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Tasks() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!text.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setText("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const filteredTodos = todos.filter((t) => {
    if (filter === "completed") return t.completed;
    if (filter === "active") return !t.completed;
    return true;
  });

  return (
    <div className="p-6 max-w-xl mx-auto">

      <h1 className="text-2xl font-bold mb-4 text-center">Tasks</h1>

      {/* input */}
      <div className="flex gap-2 mb-4">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add task..."
          className="border px-3 py-2 flex-1"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2"
        >
          Add
        </button>
      </div>

      {/* filters */}
      <div className="flex gap-2 mb-4 justify-center">
        <button onClick={() => setFilter("all")} className="border px-3 py-1">
          All
        </button>
        <button onClick={() => setFilter("active")} className="border px-3 py-1">
          Active
        </button>
        <button onClick={() => setFilter("completed")} className="border px-3 py-1">
          Completed
        </button>
      </div>

      {/* list */}
      <div>
        {filteredTodos.map((todo) => (
          <div
            key={todo.id}
            className="flex justify-between items-center border p-2 mb-2"
          >
            <Link
              to={`/tasks/${todo.id}`}
              className={`flex-1 ${
                todo.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {todo.text}
            </Link>

            <button
              onClick={() => toggleTodo(todo.id)}
              className="bg-green-500 text-white px-2 py-1 ml-2"
            >
              ✓
            </button>

            <button
              onClick={() => deleteTodo(todo.id)}
              className="bg-red-500 text-white px-2 py-1 ml-2"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}