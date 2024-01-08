
const apiKey = "848b1b3dda925f28494747683b83b983";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}

function handleSearch() {
    checkWeather(searchBox.value);
}

searchBtn.addEventListener("click", handleSearch);

searchBox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        handleSearch();
    }
});
