export default class Task {
    constructor(description, id, completed = false) {
        this.description = description;
        this.completed = completed;
        this.id = id;
    }

    tasks = [];
}

