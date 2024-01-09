const $todoButton = document.querySelector('#todo-text');
const $todoWrap = document.querySelector('#todo-wrap');

function onClickActivateToDoList() {
  const todoWrapCondition = $todoWrap.style.opacity;
  if (todoWrapCondition === '0.8') {
    $todoWrap.style.opacity = "0";
  } else {
    $todoWrap.style.opacity = "0.8";
  }
}

$todoButton.addEventListener('click', onClickActivateToDoList)