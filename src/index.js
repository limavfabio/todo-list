import _ from 'lodash'; // eslint-disable-line
import './style.css';
import TaskGenerate from './modules/TaskGenerate.js';
import remove from './modules/remove.js'; // eslint-disable-line
import add from './modules/add.js'; // eslint-disable-line
import tasks from './modules/tasks.js';
import editTask from './modules/editTask.js'; // eslint-disable-line
import * as vars from './modules/variables.js'; // eslint-disable-line
import completed from './modules/completed.js'; // eslint-disable-line

// If local storage = true, then push tasks to tasks array
if (localStorage.getItem('tasks')) {
  tasks.push(...JSON.parse(localStorage.getItem('tasks')));
  TaskGenerate.reloadTasks();
}

// Add add icon the addTaskBtn
vars.addTaskBtn.innerHTML = '<i class="fas fa-plus"></i>';

// If a target property completed is true, then set checkbox to checked and text to strike through
for (let i = 0; i < tasks.length; i += 1) {
  if (tasks[i].completed) {
    vars.tasksContainer.children[i].children[0].checked = true;
    vars.tasksContainer.children[i].children[1].style.textDecoration = 'line-through';
  }
}

// when click on clearAllBtn, then remove all completed tasks
vars.clearAllBtn.addEventListener('click', () => {
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].completed) {
      tasks.splice(i, 1);
      i -= 1;
    }
  }
  TaskGenerate.reloadTasks();
  TaskGenerate.resetTasksId();
  TaskGenerate.refreshLocalStorage();
});