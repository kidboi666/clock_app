const $form = document.getElementById('your-id');
const $input = document.querySelector('input');
const $greetings = document.querySelector('#greetings');
const clock = document.querySelector('#clock');
const $formWrap = document.querySelector('#form-wrapper')
const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
  event.preventDefault();
  const username = $input.value;
  $form.classList.add('hidden');
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings();
}
function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  $greetings.textContent = `HELLO ${username}!`;
  $greetings.classList.remove('hidden');
  clock.classList.remove('hidden');
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName == null) {
  clock.classList.add('hidden');
  $form.classList.remove('hidden');
  $form.addEventListener('submit', onLoginSubmit);
} else {
  paintGreetings();
}