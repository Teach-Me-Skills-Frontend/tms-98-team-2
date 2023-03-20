import { TaskView } from "./view/index.js";
import { TaskModel } from "./model/index.js";
import { TaskStatus } from "./constant.js";

export class TaskController {
  constructor() {
    this.model = new TaskModel();

    this.view = new TaskView({
      tasks: this.model.getCurrentTasks(),
      users: this.model.getUsers(),
      counters: this.model.getValue(this.model.getCurrentTasks()),
      onTaskAdd: this.createNewTask,
      onTaskDel:this.deleteTask,
      onTaskStatus:this.setStatus,
      onUserAdd:this.newUser,
      onUserDelete:this.deleteUser,
      onDeleteAllTasks: this.deleteAllTask,
      onDoneAllTasks: this.doneAllTasks,
    });
  }

  createNewTask = (newTask) => {
    this.view.createNewTask(newTask, this.model.addTask(newTask));
  };

  deleteTask=(taskId)=>{
    this.model.removeTask(taskId);
  };

  setStatus=(taskId,toStatus)=>{
    this.model.setTaskStatus(taskId,toStatus);
  };

  doneAllTasks = () => {
    this.model.doneAll(this.model.getCurrentTasks())
  }
  newUser = (userName) => {
    this.model.addUser(userName);
  };
  deleteUser=(index)=>{
    this.model.delUser(index);
  }

  deleteAllTask = () => {
    while (document.getElementById('card_container_done').firstChild) {
      document.getElementById('card_container_done').removeChild(document.getElementById('card_container_done').firstChild);
   }
  }
}
