import tasks from './tasks.js';
import trashIconPng from '../assets/trash-icon.png';
import * as vars from './variables.js';

export default class TaskGenerate {
  constructor(text) {
    this.text = text;
    this.completed = false;
    this.id = tasks.length + 1;
  }

  static addTask(text) {
    const task = new TaskGenerate(text);
    tasks.push(task);
    this.reloadTasks();
  }

  static reloadTasks() {
    vars.tasksContainer.innerHTML = '';
    for (let i = 0; i < tasks.length; i += 1) {
      TaskGenerate.renderTask(i);
    }
  }

  static renderTask(taskIndex) {
    const trashIcon = new Image();
    trashIcon.src = trashIconPng;
    vars.tasksContainer.innerHTML += `<li class="task-item">
        <input type="checkbox">
        <span class="task-text">${tasks[taskIndex].text}</span>
        <img src="${trashIcon.src}" class="trash-icon">
      </li>`;
  }

  static resetTasksId() {
    for (let i = 0; i < tasks.length; i += 1) {
      tasks[i].id = i + 1;
    }
  }

  static refreshLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

}
