const APP_ID = '651daf0af47eb49a9b65a0007afcce53'


const searchInput = document.getElementById("search-input");

const cityName = document.querySelector(".city-name");

const weatherState = document.querySelector(".weather-state");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");

const sunrise = document.querySelector('.sunrise');
const sunset = document.querySelector('.sunset');

const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind-speed');



console.log(
  fetch(`https://api.openweathermap.org/data/2.5/
  weather?appid=${APP_ID}`)
    .then(response => response.json())
    .then((data) => console.log(data))

);

searchInput.addEventListener("change", (event) => {
  // console.log(event.target.value); ////

  ///// request dữ liệu tới server trang openweathermap thông qua 
  // cú pháp fetch
})