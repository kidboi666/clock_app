const API_KEY = "b39f5690eaec8677b57800dbdb132a19";

function onGeoOk(position) {
  console.log(position)
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${API_KEY}`
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const $weather = document.querySelector('#weather span:first-child');
    const $city = document.querySelector('#weather span:second-child');
    $city.innerText = data.name;
    $weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  });
}
function onGeoError() {
  alert(`can't find you. no weather for you`)
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);