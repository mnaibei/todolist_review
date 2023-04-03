import Task from "./tasks.js";
import { setTasksToStorage } from "./localStorage.js";

let tasks = new Task();

const clearTasks = () => {
   return tasks.filter((task) => task.completed === false);
};

const clearBtn = document.querySelector('.clear-task');
clearBtn.addEventListener('click', () => {
    clearTasks();
    setTasksToStorage();
    displayTasks();
});

export { clearTasks, clearBtn };