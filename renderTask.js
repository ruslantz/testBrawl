export const taskContainer = document.querySelector('.task-container');
const taskTemplate = document.querySelector('#task')
  .content
  .querySelector('.task_day');

export const createTask = (taskData) => {
  const element = taskTemplate.cloneNode(true);
  element.querySelector('.day').textContent = `День: ${taskData.day}`;

  const tasksList = element.querySelector('.exercises'); // Найти список ul
  for (const task of taskData.tasks) {
    const taskItem = document.createElement("li");
    taskItem.textContent = task;
    tasksList.appendChild(taskItem); // Добавить задачу в список
  }

  return element;
};

export const renderTask = (id) => {
  const taskFragment = document.createDocumentFragment();
  taskFragment.append(createTask(id));
  taskContainer.append(taskFragment);
  taskContainer.classList.remove('hidden');
  saveDataTaskToLocalStorage();
};

// Функция для сохранения данных в локальное хранилище
function saveDataTaskToLocalStorage() {
  const taskHTML = taskContainer.innerHTML;
  localStorage.setItem("savedTaskHTML", taskHTML);
}

// Функция для восстановления данных из локального хранилища
export const restoreDataTaskFromLocalStorageHTML = () => {
  const taskHTML = localStorage.getItem("savedTaskHTML");
  if (taskHTML) {
    taskContainer.innerHTML = taskHTML;
  }
}
