const createTaskButton = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const inputTask = document.getElementById('texto-tarefa');
const clearButton = document.getElementById('apaga-tudo');

function createTask() {
  if (inputTask.value === '') return;
  const task = document.createElement('li');
  task.innerText = inputTask.value;
  list.appendChild(task);
  inputTask.value = '';
}

function completeToggle(event) {
  event.target.classList.toggle('completed');
}

list.addEventListener('click', (event) => {
  const selected = document.querySelector('.selected');
  if (!document.querySelector('.selected') === false) {
    selected.classList.remove('selected');
  }
  event.target.classList.add('selected');
});

list.addEventListener('dblclick', completeToggle);
createTaskButton.addEventListener('click', createTask);
clearButton.addEventListener('click', () => {
  list.innerHTML = '';
});
