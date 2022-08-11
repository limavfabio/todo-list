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
    for (let i = 0; i < tasks.length; i += 1) {
      if (tasks[i].completed) {
        vars.tasksContainer.children[i].children[0].checked = true;
        vars.tasksContainer.children[i].children[1].style.textDecoration = 'line-through';
      }
    }
  }

  static renderTask(taskIndex) {
    const trashIcon = new Image();
    trashIcon.src = trashIconPng;
    vars.tasksContainer.innerHTML += `<li class="task-item">
        <input class="checkbox" type="checkbox">
        <input class="task-text" value="${tasks[taskIndex].text}">
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
