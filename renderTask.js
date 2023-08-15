const taskContainer = document.querySelector('.task-container');
const taskTemplate = document.querySelector('#task')
  .content
  .querySelector('.task_day');

  export const createTask = (task) => {
  const element = taskTemplate.cloneNode(true);
  element.querySelector('.day').textContent = `День: ${task.day}`;

  return element;
};

export const renderTask = (id) => {
  const taskFragment = document.createDocumentFragment();
  taskFragment.append(createTask(id));
  taskContainer.append(taskFragment);

};