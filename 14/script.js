// Task 1
let number = 1;

const interval = setInterval(() => {
    console.log(`Сообщение номер ${number}`);
    number++;

    if (number > 5) {
        clearInterval(interval);
    }
}, 2000);


// Task 2
updateClock();

function addZero(num) {
    if (num < 9) {
        return num = `0${num}`;
    } else {
        return num;
    }
}

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const time = `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
    document.querySelector('.clock').textContent = time;
  }

setInterval(updateClock, 1000);


// Task 3
const task3 = document.querySelector('.task3');
const req = new XMLHttpRequest();

req.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
req.send();
req.onload = function() {
    const res = req.response;
    const data = JSON.parse(res);
    task3.textContent =`Task 3 result - ${data.title}`;
    task3.style.cssText = `
        margin: 40px;
        font-size: 26px;
    `
};

// Task 4 
const ulElement = document.querySelector('ul');
const requset = new XMLHttpRequest();
requset.open('GET', 'https://jsonplaceholder.typicode.com/todos');
requset.send();
requset.onload = function() {
    const res = requset.response;
    const data = JSON.parse(res);
    data.forEach((element, i) => {
        if (i < 20) {
            const liElement = document.createElement('li');
            liElement.textContent = element.title;
            ulElement.appendChild(liElement);
        }
    });
};

// Task 5
const currentСity = document.querySelector('.current__city');
const currentTime = document.querySelector('.current__time');
const currentImg = document.querySelector('.current__img');
const currentEvent = document.querySelector('.current__event');
const currentTemp = document.querySelector('.current__tempNow');
const currentSpeed = document.querySelector('.speed__number');

const foreCastDay = document.querySelector('.forecast__day');
const foreCastTime = document.querySelector('.forecast__time');
const foreCastTemp = document.querySelector('.forecast__temp');
const foreCastImg = document.querySelector('.forecast__img');

const time = new Date();

function addZero(num) {
    if (num < 10) {
        return `0${num}`
    } else {
        return num;
    }
}


function renderMain(town, time, img, event, temp, speed) {
    currentСity.textContent = town;
    currentTime.textContent = `${addZero(time.getHours())}:${addZero(time.getMinutes())}`;
    currentImg.src = `https://openweathermap.org/img/wn/${img}@2x.png`;
    currentEvent.textContent = event;
    currentTemp.textContent = `${temp} °C`;
    currentSpeed.textContent = `${speed} m/s`;
}

function renderRow(time, img, temp) {
        const forecast = document.createElement('div');
        forecast.classList.add('forecast'); 
        forecast.innerHTML = `
            <div class="forecast__date">
                <div class="forecast__time">${time}</div>
            </div>

            <img src='https://openweathermap.org/img/wn/${img}@2x.png' alt="icon" class="forecast__img">
            <div class="forecast__temp">${temp} °C</div>
        `;
        document.querySelector('.widget').appendChild(forecast);

}



async function getData(url) {
    let res = await fetch(url);
    const data =  await res.json();
    let results = [];

    data.list.forEach(item => {
        results.push({
            town: data.city.name,
            img: item.weather[0].icon,
            event: item.weather[0].description,
            temp: Math.round(item.main.temp),
            speed: item.wind.speed,
            date: item.dt_txt,
        });
    });

    return results;
}

getData('https://api.openweathermap.org/data/2.5/forecast?q=Astana&appid=a94d0a5ac08570add4b47b8da933f247&units=metric')
    .then(data => {
        renderMain(data[0].town, time, data[0].img, data[0].event, data[0].temp, data[0].speed);
        for (let i = 0; i < data.length; i += 8) {
            renderRow(data[i + 3].date, data[i + 3].img, data[i + 3].temp);
        }
    })
    .catch(e => {
        console.log(e);
    })


