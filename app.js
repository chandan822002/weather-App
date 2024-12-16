const apiKey="68e08561a4ec77f44ec66a056c33b325";
const apiUrl="https://api.openweathermap.org/data/2.5/weather? units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
async function checkWeather(city) 
{
    const response=await fetch(apiUrl +city+`&appid=${apiKey}`);
    var data=await response.json();
    console.log(data);

// checkWeather();
document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML= Math.round( data.main.temp)+"°C";
document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
}
// checkWeather();
searchbtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
});