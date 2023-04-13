
const inputbox=document.getElementById('input-box');
const searchbtn=document.getElementById('searchBtn');
const weather_img=document.querySelector('.weather-img');
const humdity=document.getElementById('humidity');
const wind=document.getElementById('wind-speed');
const temprature=document.querySelector('.temprature');
const description=document.querySelector('.description')
const location_not_found=document.querySelector('.location-not-found');
const weather_body=document.querySelector('.weather-body');
 
async function check_weather(city){
  
   const api_key="2a78dd40647c6d03ba96de1cc4ec7af2";
   const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
   const weather_data=await fetch(`${url}`).then(responce => responce.json());

   if(weather_data.cod===`404`){
       location_not_found.style.display="flex"; 
       weather_body.style.display="none";
       return;
   }
   location_not_found.style.display="none";
   weather_body.style.display="flex";
   




   temprature.innerHTML=`${Math.round(weather_data.main.temp -273.15)}°C`;
    humdity.innerHTML=`${weather_data.main.humidity}%`;
    wind.innerHTML=`${weather_data.wind.speed}Km/H`;
    description.innerHTML=`${weather_data.weather[0].description}`;

    switch(weather_data.weather[0].main)
    {
       case 'Clouds':
           weather_img.src="pic/cloud.png";
           break;
           case 'Clear':
               weather_img.src="pic/clear.png"
               break;
               case 'Rain':
                   weather_img.src="pic/rain.png"
                   break;
                   case 'Snow':
                       weather_img.src="pic/snow.png";
                       break;
                       case 'Mist':
                           weather_img.src="pic/mist.png";
                           break;

    }
   



   console.log(weather_data);


}





searchbtn.addEventListener('click',()=>{
   check_weather(inputbox.value);
})