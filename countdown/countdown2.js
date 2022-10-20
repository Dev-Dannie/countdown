// variables to be used for computation of countdown
const Days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'

];



const yearEnd = document.querySelector('.countdown-date');
// set the value of the date the countdown ends using the Date method
const endDate = new Date(2022, 11, 31, 11, 59, 0);

// set the variables for each date parameter using the method above
const year = endDate.getFullYear();
let month = endDate.getMonth();
month = months[month]
let day = endDate.getDay();
day = Days[day]
const date = endDate.getDate();
const minute = endDate.getMinutes();
const hour = endDate.getHours();
const second = endDate.getSeconds();

yearEnd.textContent = `The year ends on ${day}, ${date}  ${month}  ${year} @
${hour}:${minute}pm`

const timer = document.querySelectorAll('.time');
const countEnd = document.querySelector('.countdown')

const endTime = endDate.getTime();

// create a function that calculates the timer value
const  remainingTime = () => {
    const currentTime = new Date().getTime()

    let td = endTime - currentTime
    
    perDayCalc = 24*60*60*1000
    perHourCalc = 60*60*1000
    perMinuteCalc = 60*1000

    days = Math.floor(td/perDayCalc)
    hours = Math.floor((td % perDayCalc)/perHourCalc)
    minutes = Math.floor((td % perHourCalc)/perMinuteCalc)
    seconds = Math.floor((td % perMinuteCalc)/ 1000)

    const collection = [days, hours, minutes, seconds]

    // add 0 to single digit values in the timer
    const count = time => {
        return time < 10 ? `0${time}`: time
    }

    // display the timer on the screen
    timer.forEach((time, index) => {
        time.innerHTML = count(`${collection[index]}`)
    })

    // the final display when the count ends
    if (td < 0){
        clearInterval(counter)
        countEnd.textContent = `<h3>The count down has ended. Happy New Year!!!</h3>`
    }
}
// making the seconds tick
let counter = setInterval(remainingTime, 1000) 

remainingTime()