const christmas = '24 Dec 2020'
const day = document.getElementById('days')
const hour = document.getElementById('hours')
const minute = document.getElementById('minutes')
const second = document.getElementById('seconds')

const countDown = () => {
    const christmasDate = new Date(christmas)
    const currentDate = new Date();

    const timeInSeconds = (christmasDate - currentDate) / 1000


    const days = Math.floor(timeInSeconds / 3600 / 24);
    const hours = Math.floor(timeInSeconds / 3600) % 24; 
    const minutes = Math.floor(timeInSeconds / 60) % 60;
    const seconds = Math.floor(timeInSeconds) % 60;


    day.innerHTML = formatTime(days);
    hour.innerHTML = formatTime(hours)
    minute.innerHTML = formatTime(minutes);
    second.innerHTML =formatTime(seconds)

}

const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
}


countDown();
setInterval(countDown, 500)