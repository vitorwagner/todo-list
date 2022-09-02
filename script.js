const createTaskButton = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const inputTask = document.getElementById('texto-tarefa');

function createTask() {
  const task = document.createElement('li');
  task.innerText = inputTask.value;
  list.appendChild(task);
}

createTaskButton.addEventListener('click', createTask);
