import { TaskView } from "./view/index.js";
import { TaskModel } from "./model/index.js";
import { TaskStatus } from "./constant.js";

export class TaskController {
  constructor() {
    this.model = new TaskModel();
    this.view = new TaskView({
      getTasks: this.model.getCurrentTasks,
      getUsers: this.model.getUsers,
      getCounters: this.model.getValue,
      onTaskAdd: this.createNewTask,
      onTaskDel:this.deleteTask,
      onTaskStatus:this.setStatus,
      onUserAdd:this.newUser,
      onUserDelete:this.deleteUser,
      onDeleteAllTasks: this.deleteAllTask,
      onDoneAllTasks: this.doneAllTasks,
      onEditTask: this.editTask,
    });
  }

  updateToDo = () => {
    this.view.updateCounters(this.model.getValue(this.model.getCurrentTasks()), 'counter_todo')
  }
  updateInProg = () => {
    this.view.updateCounters(this.model.getValue(this.model.getCurrentTasks()), 'counter_inprogress')
  }
  updateDone = () => {
    this.view.updateCounters(this.model.getValue(this.model.getCurrentTasks()), 'counter_done')
  }

  createNewTask = (newTask) => {
    this.view.createNewTask(newTask, this.model.addTask(newTask));
    this.updateToDo()
  };

  deleteTask=(taskId)=>{
    this.model.removeTask(taskId);
    this.updateToDo();
    this.updateDone();
  };

  setStatus=(taskId,toStatus)=>{
    this.model.setTaskStatus(taskId,toStatus);
    this.updateToDo()
    this.updateInProg()
    this.updateDone()
  };

  doneAllTasks = () => {
    this.view.renderNewCards(this.model.getCurrentTasks());
    this.model.doneAll(this.model.getCurrentTasks())
    this.updateInProg()
    this.updateDone()
  }
  newUser = (userName) => {
    this.model.addUser(userName);
  };
  deleteUser=(index)=>{
    this.model.delUser(index);
    
  }

  deleteAllTask = () => {
   this.view.deleteAllTasks()
   this.model.removeAllTask()
   this.updateDone()
  }

  editTask = (taskId, textTitle, textDescription, userSelect) => {
    this.model.editTask(taskId, textTitle, textDescription, userSelect);
    this.view.showEditTask(this.model.getCurrentTasks())
  }

  
}
