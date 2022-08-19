/*
 * @jest-environment jsdom
 */
import TaskGenerate from '../src/modules/TaskGenerate.js';

test('Check tasks object lenght after adding some tasks', () => {
  document.body.innerHTML = '<div id="tasks-container"></div>';
  let tasksContainer = document.querySelector('#tasks-container');
  TaskGenerate.addTask('test');
  expect(tasksContainer.children.length).toBe(1);
  TaskGenerate.addTask('test2');
  expect(tasksContainer.children.length).toBe(2);
});

// My implementation of the add task is the following:
// TaskGenerate.addTask(text = 'string') takes a string as a parameter
// and pushes a new task object into the array tasks
// Then runs TaskGenerate.reloadTasks, which empties the DOM
// and reprints all tasks to the DOM based on the tasks array

// Then runs
// To test specifically the TaskGenerate.addTask method:
// I will have to mock the Dom,
// Because when reloading the tasks,
// It will try to vars.tasksContainer.innerHTML = ''
// and then tasks.forEach(TasksGenerate.renderTask())
// and then tasks.forEach(isCompleted?)
