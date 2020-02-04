
const nodeArray = [
    document.querySelector('.hotel-main'),
    document.querySelector('.hotel-about'),
    document.querySelector('.galery'),
    document.querySelector('.events'),
    document.querySelector('.weather'),
    document.querySelector('.reservation'),
    document.querySelector('.contact')
];


ScrollReveal().reveal(nodeArray, {
  delay: 275,
  duration: 1000,
  rotate: { x: 10, y: 50, z: 0 },
  reset: true
});


//Date
const dateArray=[
  document.querySelector('.today'),
  document.querySelector('.tommorow'),
document.querySelector('.date3'),
document.querySelector('.date4')
]

let weatherInfo=[
{}, {}, {}, {}
]
console.log(weatherInfo)
fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Miami&units=metric&appid=b2f64f9caf0c63a8eb6a5131e431a31e`)
.then((res)=>{return res.json()})
.then((data)=>{
  console.log(data)
  data=data.list.filter(hour=> hour.dt_txt.endsWith('12:00:00'))
  for(let i=0; i<4; i++){
date=new Date(data[i].dt*1000)
weatherInfo[i].day=date.getDate()
weatherInfo[i].month=date.getMonth()+1
weatherInfo[i].temp=Math.round(data[i].main.temp)
weatherInfo[i].icon=data[i].weather[0].icon
displayWeather()
  }
  console.log(weatherInfo)})
.catch('Error when loading forecast')
console.log(weatherInfo[0].day)

function displayWeather(){
  for(let i=0; i<4; i++){
  dateArray[i].innerHTML=`<h3>${weatherInfo[i].day<10?'0'+weatherInfo[i].day:weatherInfo[i].day}.${weatherInfo[i].month<10?'0'+weatherInfo[i].month:weatherInfo[i].month}</h3>
  <hr>
  <h4>${weatherInfo[i].temp}&degC</h4>
  <img src="http://openweathermap.org/img/w/${weatherInfo[i].icon}.png">
  `
  }
}