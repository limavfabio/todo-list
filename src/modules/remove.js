import * as vars from './variables.js';
import tasks from './tasks.js';
import TaskGenerate from './TaskGenerate.js';

// A click listener to remove the task
export default vars.tasksContainer.addEventListener('click', (event) => {
  const { target } = event;
  if (target.classList.contains('trash-icon')) {
    const taskItem = target.parentElement;
    const taskIndex = Array.prototype.indexOf.call(vars.tasksContainer.children, taskItem);
    tasks.splice(taskIndex, 1);
    TaskGenerate.reloadTasks();
    TaskGenerate.resetTasksId();
    TaskGenerate.refreshLocalStorage();
  }
});