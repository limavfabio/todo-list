import * as vars from './variables.js';
import TaskGenerate from './TaskGenerate.js';

// Add task and add to localStorage
export default vars.addTaskBtn.addEventListener('click', () => {
  const taskInputText = vars.addTaskInput.value;
  if (taskInputText) {
    TaskGenerate.addTask(taskInputText);
    TaskGenerate.refreshLocalStorage();
    vars.addTaskInput.value = '';
  }
});
