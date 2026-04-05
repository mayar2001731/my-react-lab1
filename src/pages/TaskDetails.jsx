import { useParams } from "react-router-dom";

export default function TaskDetails() {
  const { id } = useParams();

  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  const task = todos.find((t) => t.id.toString() === id);

  if (!task) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">Task not found</h1>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Task Details</h1>
      <p className="text-lg mb-2">
        <span className="font-semibold">Task:</span> {task.text}
      </p>
      <p className="text-lg">
        <span className="font-semibold">Completed:</span>{" "}
        {task.completed ? "Yes" : "No"}
      </p>
    </div>
  );
}