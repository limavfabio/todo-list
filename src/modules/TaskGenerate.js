import tasks from './tasks';
import trashIconPng from '../assets/trash-icon.png';

export default class TaskGenerate {
  constructor(taskName, taskIndex) {
    this.taskName = taskName;
    this.taskIndex = taskIndex;
  }

  static renderTask(taskIndex) {
    const tasksContainer = document.getElementById('tasks-container');
    const trashIcon = new Image();
    trashIcon.src = trashIconPng;
    tasksContainer.innerHTML += `<li class="task-item">
        <input type="checkbox">
        ${tasks[taskIndex].text}
        <img src="${trashIcon.src}" class="trash-icon">
      </li>`;
  }
}
