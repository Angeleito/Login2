import { useState, useEffect } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [completedTasks, setCompletedTasks] = useState(() => {
    const savedCompletedTasks = localStorage.getItem("completedTasks");
    return savedCompletedTasks ? JSON.parse(savedCompletedTasks) : [];
  });
  const [task, setTask] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
  }, [completedTasks]);

  const addTask = () => {
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  const toggleTask = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const taskToRemove = tasks[index];
    setCompletedTasks([...completedTasks, taskToRemove]);
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const clearCompletedTasks = () => {
    setCompletedTasks([]);
  };

  return (
    <main>
      <div className="p-4 bg-white dark:bg-gray-500 rounded-3xl shadow-2xl shadow-gray-950">
        <h2 className="text-xl font-bold mb-2">To-Do List</h2>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border-2 border-gray-400 rounded-lg p-2 w-full mb-2 "
        />
        <button
          onClick={addTask}
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
        >
          Add Task
        </button>
        <ul className="mt-4 flex flex-col gap-2">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`p-2 border-solid border-2 border-gray-400 rounded-lg flex justify-between items-center ${
                task.completed ? "line-through" : ""
              }`}
            >
              <span onClick={() => toggleTask(index)}>{task.text}</span>
              <button
                onClick={() => removeTask(index)}
                className="bg-red-500 hover:bg-red-600 text-white p-1 rounded"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        {completedTasks.length > 0 && (
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2 border-t-2 border-solid border-black">Completed Tasks</h2>
            <ul className="flex flex-col gap-2">
              {completedTasks.map((task, index) => (
                <li key={index} className="p-2 line-through border-solid border-2 border-gray-400 rounded-lg">
                  {task.text}
                </li>
              ))}
            </ul>
            <button
              onClick={clearCompletedTasks}
              className="bg-red-500 hover:bg-red-600 text-white p-2 rounded mt-2"
            >
              Clear Completed Tasks
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default TodoList;