import { TaskView } from "./view/index.js";
import { TaskModel } from "./model/index.js";
import { TaskStatus } from "./constant.js";

export class TaskController {
  constructor() {
    this.model = new TaskModel();

    this.view = new TaskView({
      tasks: this.model.getCurrentTasks(),
      onTaskAdd: this.createNewTask,
      onTaskDel:this.deleteTask,
      onTaskStatus:this.setStatus,
      onUserAdd:this.newUser,
    });
  }

  createNewTask = (newTask) => {
    this.model.addTask(newTask);
  };

  deleteTask=(taskId)=>{
    this.model.removeTask(taskId);
  };

  setStatus=(taskId,toStatus)=>{
    this.model.setTaskStatus(taskId,toStatus);
  };
  newUser = (userName) => {
    this.model.addUser(userName);
  };
}
