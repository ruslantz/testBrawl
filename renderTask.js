export const taskContainer = document.querySelector('.task-container');
const taskTemplate = document.querySelector('#task')
  .content
  .querySelector('.task_day');

  export const createTask = (taskData) => {
  const element = taskTemplate.cloneNode(true);
  element.querySelector('.day').textContent = `День: ${taskData.day}`;

  const tasksList = document.createElement("ul");
  for (const task of taskData.tasks) {
    const taskItem = document.createElement("li");
    taskItem.textContent = task;
    tasksList.appendChild(taskItem);
    element.appendChild(tasksList);
  };

  return element;
};

export const renderTask = (id) => {
  const taskFragment = document.createDocumentFragment();
  taskFragment.append(createTask(id));
  taskContainer.append(taskFragment);
  taskContainer.classList.remove('hidden');

};