import { TaskView } from './view/index.js';
import { TaskModel } from './model/index.js';

export class TaskController {

    constructor () {
        this.model = new TaskModel();

        this.view = new TaskView ({
            tasks: this.model.getCurrentTasks(),
            onTaskAdd: this.createNewTask
        });
    }

    createNewTask = (newTask) => {
        this.model.addTask(newTask);
    }
}
