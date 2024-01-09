const $newTodo = document.querySelector('#new-todo');
const $createTodo = document.querySelector('#create-todo');

function onClickNewTodo() {
  $newTodo.classList.add("hidden")
  $createTodo.classList.remove("hidden")
}

$newTodo.addEventListener('click', onClickNewTodo)