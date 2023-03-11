import { TaskView } from './view/index.js';
import { TaskStatus } from './constant.js';
export const tasks = [{
    title: "Task 1",
    description: "Description Task 1",
    userId: 'User 1',
    id: window.crypto.randomUUID(),
    date: '11.03.2023',
    status: TaskStatus.inProgress
},{
    title: "Task 2",
    description: "Description Task 2",
    userId: 'User 1',
    id: window.crypto.randomUUID(),
    date: '11.03.2023',
    status: TaskStatus.toDo
},{
    title: "Task 3",
    description: "Description Task 3",
    userId: 'User 1',
    id: window.crypto.randomUUID(),
    date: '11.03.2023',
    status: TaskStatus.done
},{
    title: "Task 5",
    description: "Description Task 2",
    userId: 'User 1',
    id: window.crypto.randomUUID(),
    date: '11.03.2023',
    status: TaskStatus.toDo
},{
    title: "Task 6",
    description: "Description Task 3",
    userId: 'User 1',
    id: window.crypto.randomUUID(),
    date: '11.03.2023',
    status: TaskStatus.done
},{
    title: "Task 6",
    description: "Description Task 3",
    userId: 'User 1',
    id: window.crypto.randomUUID(),
    date: '11.03.2023',
    status: TaskStatus.done
}]
export class TaskController {

    constructor () {
        tasks
        const statusCount = this.getValue(tasks)
        this.view = new TaskView (tasks, statusCount);
        this.createNewTask();
        

    }

    createNewTask = () => {
        
        this.view.createTask(tasks);
        
        // this.storage
    }

    getValue = (tasks) => {
        let todoValue = 0;
        let inProgressValue = 0;
        let doneValue = 0;
        
        for(const task of tasks) {
            if (task.status === TaskStatus.toDo) {
                todoValue += 1
            } 
            if (task.status === TaskStatus.inProgress) {
                inProgressValue += 1
            } 
            if (task.status === TaskStatus.done) {
                doneValue += 1
            } 
        }

        const statusCount = {
            todo: todoValue,
            inProgress: inProgressValue,
            done: doneValue,
        }
        console.log(statusCount)

        return statusCount
    }
}
