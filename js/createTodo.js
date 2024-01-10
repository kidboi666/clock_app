const $newTodo = document.querySelector('#new-todo');
const $createTodo = document.querySelector('#create-todo');
const $todoList = document.querySelector('#todo-list');
const $todoAddText = document.querySelector('#todo-add-text')
const $todoInput = document.querySelector('#todo-value')
let toDos = [];

function savedTodo() {
  localStorage.setItem('toDos', JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement; // 클릭한 타겟의 부모요소를 할당
  li.remove(); // 할당한새끼 제거
  console.log(li.id)
  toDos = toDos.filter((toDo) => {
    return toDo.id !== parseInt(li.id);
  });
  savedTodo();
}

function paintTodo(newTodo) {
  const li = document.createElement('li'); // li를 문서에 만들고 변수에 할당
  li.id = newTodo.id; // 인자로 받은 매개변수의 아이디값을 변수에 할당한 html의 li요소인 li의 프로퍼티 id로 할당해줌
  const span = document.createElement('span');
  span.innerText = newTodo.text; // 생성한 span요소에 매개변수의 프로퍼티 text값을 출력해줌
  const button = document.createElement('button');
  button.innerText = 'X'
  button.addEventListener('click', deleteTodo);
  li.append(span);
  li.append(button);
  $todoList.append(li);
}

function onClickTodo(event) {
  event.preventDefault();
  const newTodo = $todoInput.value; // 입력값 변수 할당
  $todoInput.value = ""; // 입력값 비우기
  const newTodoObj = { // 입력값 고유id(현재시간)를 가진 객체 값으로 형 변환
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj); // 입력값 리스트에 푸쉬
  paintTodo(newTodoObj); // id가 저장된 입력값인 객체를 paintTodo를 호출하면서 인자로 보내줌
  savedTodo(); // 로컬 스토리지에 저장
}

function onClickNewTodo(event) {
  event.preventDefault();
  $newTodo.classList.add("hidden")
  $createTodo.classList.remove("hidden")
  $todoAddText.classList.add("hidden")
}

$newTodo.addEventListener('click', onClickNewTodo);
$createTodo.addEventListener('submit', onClickTodo);

const savedTodos = localStorage.getItem('toDos'); // savedTodos에 로컬스토리지에 저장된 값 가져옴

if(savedTodos !== null) {
  $newTodo.classList.add("hidden")
  $createTodo.classList.remove("hidden")
  $todoAddText.classList.add("hidden")
  const parsedTodos = JSON.parse(savedTodos); // 재출력을 위해 savedTodos를 배열로 변환
  toDos = parsedTodos; // 배열리스트에 변환한 배열 넣어줌
  parsedTodos.forEach(paintTodo); // 그려줌
}