export default class Time {
    constructor(time, date) {
        this.time = document.querySelector(time);
        this.date = document.querySelector(date);
    }

    updateClock = () => {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const t = `${this.addZero(hours)}:${this.addZero(minutes)}:${this.addZero(seconds)}`;
        this.time.innerText = t;
    }

    addZero(num) {
        if (num < 9) {
            return num = `0${num}`;
        } else {
            return num;
        }
    }

    getCurrentDate = () => {
        const now = new Date();
        const options = {
            weekday: 'long',
            month: 'long',
            day: 'numeric'
        };
        this.date.innerText = now.toLocaleDateString('en-US', options)
    }
    

    init() {
        setInterval(this.updateClock, 1000);
        setInterval(this.getCurrentDate, 1000);
    }

}