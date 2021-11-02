setInterval(timing, 1000);

function timing(){
  let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let timeOfDay;

  if(hours< 12)
    timeOfDay = "AM";

else if(hours>=12)
    timeOfDay = "PM";

  if(hours > 12)
    hours = hours - 12;

else if(hours == 0)
    hours = 12;


  if(minutes < 10)
  	minutes = `0${minutes}`;
  
  if(seconds < 10)
  	seconds = `0${seconds}`;
  
 let time = `${hours}:${minutes}:${seconds} ${timeOfDay}`;

  document.getElementById('time').innerHTML = time;

}
timing();
