import _ from 'lodash'; // eslint-disable-line
import './style.css';
import TaskGenerate from './modules/TaskGenerate.js';
import remove from './modules/remove.js'; // eslint-disable-line
import add from './modules/add.js'; // eslint-disable-line
import tasks from './modules/tasks.js';

// If local storage = true, then push tasks to tasks array
if (localStorage.getItem('tasks')) {
    tasks.push(...JSON.parse(localStorage.getItem('tasks')));
    TaskGenerate.reloadTasks();
}