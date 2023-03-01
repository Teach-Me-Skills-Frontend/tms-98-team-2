import { TaskView } from './view/index.js';

export class TaskController {

    constructor (test) {
        this.view = new TaskView (test);
    }

    hiFromTaskView = () => {
        this.view.sayHi()
    }
}
