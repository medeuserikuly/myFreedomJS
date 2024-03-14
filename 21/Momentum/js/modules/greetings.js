import getTimeOfDay from "./getTimeOfDay.js";

export default class Greetings {
    constructor(greetingElement, userName) {
        this.greetingElement = document.querySelector(greetingElement);
        this.userName = document.querySelector(userName);
    }

    init() {
        this.userName.value = localStorage.getItem('name');
        this.userName.addEventListener('input', () => {
            localStorage.setItem('name', this.userName.value)
        })

        this.greetingElement.innerText = `Good ${getTimeOfDay()}`;
    }
}