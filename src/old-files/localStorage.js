import Task from "./tasks.js";

let tasks = new Task();

const setTasksToStorage = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
  const getTasksFromStorage = () => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      tasks = JSON.parse(storedTasks);
    }
  };

export { setTasksToStorage, getTasksFromStorage}