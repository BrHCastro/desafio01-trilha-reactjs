import { useState } from "react";

import "../styles/tasklist.scss";

import { FiTrash, FiCheckSquare } from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify";
import "!style-loader!css-loader!react-toastify/dist/ReactToastify.css";

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  function handleNotification(
    message: string,
    type: "error" | "success" | "info" | "warning"
  ) {
    toast[type](message);
  }

  function handleCreateNewTask() {
    if (newTaskTitle.trim() === "") {
      handleNotification("O título da Task não pode ser vazio! 🚫", "error");
      return;
    }

    const newTask: Task = {
      id: Math.random(),
      title: newTaskTitle,
      isComplete: false,
    };

    setTasks([...tasks, newTask]);
    setNewTaskTitle("");
    handleNotification("Task criada! 👌", "success");
  }

  function handleToggleTaskCompletion(id: number) {
    const setTaskCompletion = tasks.map((task) => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
        handleNotification(`Task, ${task.title}, atualizada! 👍`, "info");
      }
      return task;
    });

    setTasks(setTaskCompletion);
  }

  function handleRemoveTask(id: number) {
    // Remova uma task da listagem pelo ID
    const removeTask = tasks.filter((task) => task.id !== id);
    handleNotification(`Task removida! 🗑️`, "warning");
    setTasks(removeTask);
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <section className="task-list container">
        <header>
          <h2>Minhas tasks</h2>

          <div className="input-group">
            <input
              type="text"
              placeholder="Adicionar novo todo"
              onChange={(e) => setNewTaskTitle(e.target.value)}
              value={newTaskTitle}
            />
            <button
              type="submit"
              data-testid="add-task-button"
              onClick={handleCreateNewTask}
            >
              <FiCheckSquare size={16} color="#fff" />
            </button>
          </div>
        </header>

        <main>
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                <div
                  className={task.isComplete ? "completed" : ""}
                  data-testid="task"
                >
                  <label className="checkbox-container">
                    <input
                      type="checkbox"
                      readOnly
                      checked={task.isComplete}
                      onClick={() => handleToggleTaskCompletion(task.id)}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <p>{task.title}</p>
                </div>

                <button
                  type="button"
                  data-testid="remove-task-button"
                  onClick={() => handleRemoveTask(task.id)}
                >
                  <FiTrash size={16} />
                </button>
              </li>
            ))}
          </ul>
        </main>
      </section>
    </>
  );
}
