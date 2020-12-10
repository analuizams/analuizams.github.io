function addTask() {
  const button = document.getElementById('criar-tarefa');
  const input = document.getElementById('texto-tarefa');
  const list = document.getElementById('lista-tarefas');

  button.addEventListener('click', function () {
    const newTask = document.createElement('li');
    newTask.innerText = input.value;
    newTask.className = 'task';
    list.appendChild(newTask);
    input.value = '';
  });
}

function changeColorListItem(event) {
  const selectedItem = document.querySelector('.selected');

  if (!selectedItem) {
    event.target.classList.add('selected');
  } else {
    selectedItem.classList.remove('selected');
    event.target.classList.add('selected');
  }
}

function dbClicktem() {
  const taskList = document.getElementById('lista-tarefas');
  taskList.addEventListener('dblclick', function (event) {
    event.target.classList.toggle('completed');
  });
}

// sobre toggle: https://www.w3schools.com/howto/howto_js_toggle_class.asp

function selectTask() {
  const taskList = document.getElementById('lista-tarefas');
  taskList.addEventListener('click', changeColorListItem);
}

function clearAll() {
  const clearBtn = document.getElementById('apaga-tudo');
  clearBtn.addEventListener('click', function () {
    const taskList = document.getElementById('lista-tarefas');
    const listItems = document.querySelectorAll('.task');
    for (let index = 0; index < listItems.length; index += 1) {
      taskList.removeChild(taskList.lastChild);
    }
  });
}

function clearCompleted() {
  const clearComp = document.getElementById('remover-finalizados');
  const tasklist = document.getElementById('lista-tarefas');

  clearComp.addEventListener('click', function () {
    const completed = document.querySelectorAll('.completed');
    for (let index = 0; index < completed.length; index += 1) {
      tasklist.removeChild(completed[index]);
    }
  });
}

function saveList() {
  const saveBtn = document.getElementById('salvar-tarefas');
  saveBtn.addEventListener('click', function () {
    const tasks = document.getElementsByClassName('task');
    for (let index = 0; index < tasks.length; index += 1) {
      localStorage.setItem(index, tasks[index].innerText);
    }
  });
}

function getList() {
  const tasks = document.getElementById('lista-tarefas');
  for (let index = 0; index < localStorage.length; index += 1) {
    const recListItem = document.createElement('li');
    recListItem.innerText = localStorage.getItem(index);
    recListItem.className = 'task';
    tasks.appendChild(recListItem);
  }
}

function removeSelected() {
  const tList = document.getElementById('lista-tarefas');
  const remSelBtn = document.getElementById('remover-selecionado');

  remSelBtn.addEventListener('click', function () {
    const selectedTasks = document.querySelectorAll('.selected');
    for (let index = 0; index < selectedTasks.length; index += 1) {
      tList.removeChild(selectedTasks[index]);
    }
  });
}

window.onload = function () {
  addTask();
  selectTask();
  dbClicktem();
  clearAll();
  clearCompleted();
  saveList();
  getList();
  removeSelected();
};
