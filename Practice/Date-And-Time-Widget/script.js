let dateContainer = document.querySelector(".date-container");
let hourContainer = document.querySelector(".hour");
let minuteContainer = document.querySelector(".minute");
let secondContainer = document.querySelector(".second");


const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
]

const monthsName = [
    "January",
    "February",
    "March", 
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"

]

function formatTime(time){
    return time < 10 ? "0" + time : time;

};



    


function updateClock(){
    const today = new Date
    let hours = formatTime(today.getHours());
    let minutes = formatTime(today.getMinutes());
    let seconds = formatTime(today.getSeconds());

    

    hourContainer.textContent = hours + ":";
    minuteContainer.textContent = minutes + ":";
    secondContainer.textContent = seconds;
    

    
    let date = today.getDate();
    let day = weekDays[today.getDay()-1];
    let month = monthsName[today.getMonth()];

    
  dateContainer.innerHTML=`
  <p>${day}</p><p><span>${date}</span></p><p>${month}</p>`
  

  

}
setInterval(updateClock, 1);


