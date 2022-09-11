const createTaskButton = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const inputTask = document.getElementById('texto-tarefa');
const clearButton = document.getElementById('apaga-tudo');
const saveButton = document.getElementById('salvar-tarefas');
const clearDoneButton = document.getElementById('remover-finalizados');

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

function loadSavedList() {
  list.innerHTML = localStorage.getItem('List');
}

window.onload = loadSavedList;

list.addEventListener('dblclick', completeToggle);
createTaskButton.addEventListener('click', createTask);
clearButton.addEventListener('click', () => {
  list.innerHTML = '';
});
saveButton.addEventListener('click', () => {
  localStorage.setItem('List', list.innerHTML);
});
clearDoneButton.addEventListener('click', () => {
  for (let i = list.children.length - 1; i >= 0; i -= 1) {
    if (list.children[i].classList.contains('completed')) {
      list.children[i].remove();
    }
  }
});
