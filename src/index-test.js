

function showWeather(response){
    console.log(response)
    let city = response.data.city;
    let country = response.data.country;
    let description = response.data.condition.description;
    let temperature = Math.round(response.data.temperature.current);
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = `The temperature in ${city}, ${country} is ${description}, with a temperature of ${temperature}°C`

}

let city = "Los Angeles";
let apiKey = "63b9fbt71d5o7cac32be26b0bf4bba13";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(showWeather);
