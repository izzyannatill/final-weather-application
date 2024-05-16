function displayTemperature(response) {
  let temperatureElement = document.querySelector(".current-temperature-value");
  let temperature = Math.round(response.data.temperature.current);
   temperatureElement.innerHTML = temperature;
  let cityElement = document.querySelector(".current-city");
  cityElement.innerHTML = response.data.city;
  let windy = document.querySelector(".wind");
  windy.innerHTML = response.data.wind.speed;
  let humid = document.querySelector (".humidity");
  humid.innerHTML = response.data.temperature.humidity;
  let forecast = document.querySelector(".description");
  forecast.innerHTML = response.data.condition.description;
  let pic = document.querySelector (".icon");
  pic.innerHTML = `<img src="${response.data.condition.icon_url}"class="icon" />`;
  let feel = document.querySelector(".feels");
  feel.innerHTML = Math.round(response.data.temperature.feels_like);
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");

  let city = searchInputElement.value;
  let apiKey = "35f5fdatd61eb8d900b80389439e49o7";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();
  let dates = date.getDate ();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

let months = ["Jan", "Feb", "Mar", "Apr","May", "June", "July", "Aug","Sep", "Oct","Nov", "Dec"];
let month = months[date.getMonth()];


  let formattedDay = days[day];
  return `${formattedDay} ${dates} ${month} ${hours}:${minutes}`;
}

let searchForm = document.querySelector(".search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

