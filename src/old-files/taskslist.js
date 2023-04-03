export default class Tasks {
    constructor() {
        this.taskslist = [];
    }

    addTask(task) {
        this.taskslist.push(task);
    }

    removeTask(task) {
        this.taskslist = this.tasks.filter((t) => t.id !== task.id);
    }

    clearCompleted() {
        this.taskslist = this.tasks.filter((task) => task.completed === false);
    }
}