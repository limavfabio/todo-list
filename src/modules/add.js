import * as vars from './variables.js';
import TaskGenerate from './TaskGenerate.js';

// Add task and add to localStorage
export default vars.addTaskBtn.addEventListener('click', () => {
  const text = vars.addTaskInput.value;
  if (text) {
    TaskGenerate.addTask(text);
    TaskGenerate.refreshLocalStorage();
    vars.addTaskInput.value = '';
  }
});
