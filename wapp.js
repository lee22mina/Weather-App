const ApiKey= "29fdcf79334cf4e3490718c6fdbe56b2";
const ApiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric" ;

const searchBox =document.querySelector("#input");
const searchBtn = document.querySelector("#search");
const weatherIcon = document.querySelector(".weather-icon");

async function CheckWeather(city){

const response= await fetch(`${ApiUrl}&q=${city}&appid=${ApiKey}`);
var data = await response.json();

console.log(data);

document.getElementById("city").innerHTML = data.name; 
document.getElementById("temperature").innerHTML = Math.round(data.main.temp )+ "°c"; 
document.querySelector(".humidity").innerHTML = data.main.humidity + "%"; 
document.querySelector(".wind").innerHTML = data.wind.speed + "km/h"; 

if(data.weather[0].main == "Clouds"){
    weatherIcon.src ="images/clouds.png";
}else if(data.weather[0].main == "Clear"){

    weatherIcon.src ="images/clear.png";
}else if(data.weather[0].main == "Rain"){

    weatherIcon.src ="images/rain.png";
}else if(data.weather[0].main == "Drizzle"){

    weatherIcon.src ="images/drizzle.png";
}else if(data.weather[0].main == "Mist"){

    weatherIcon.src ="images/mist.png";
}
}


searchBtn.addEventListener("click",function () {
        CheckWeather(searchBox.value);
 });
