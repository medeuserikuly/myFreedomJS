import getTimeOfDay from "./getTimeOfDay.js";

export default class Slider {
    constructor(next, prev) {
        this.next = document.querySelector(next)
        this.prev = document.querySelector(prev)
    }
    number = this.getRandomInteger(1, 20);


    init() {
        this.setBG();
        this.next.addEventListener('click', () => this.handleButtonClick(1));
        this.prev.addEventListener('click', () => this.handleButtonClick(-1));
    }

    setBG() {
        const timeOfday = getTimeOfDay();
        let url = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfday}/${this.addZero(this.number)}.jpg`;
        
        const img = new Image();
        img.src = url;
        img.onload = () => {
            document.body.style.backgroundImage = `url(${url})`;
        }
        
    }

    addZero(num) {
        if (num < 10) {
            return num = `0${num}`;
        } else {
            return num;
        }
    }

    getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getSlide(n) {
        this.number += n;
        if (this.number > 20) {
            this.number = 1;
        }
        if (this.number < 1) {
            this.number = 20;
        }
        return this.number;
    }

    handleButtonClick = (n) => {
        this.getSlide(n);
        this.setBG();
    }

}