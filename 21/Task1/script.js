import data from "./data.js";

const container = document.getElementById('app');

class Button {
    constructor(id, label, user) {
        this.id = id;
        this.label = label;
        this.user = user;
    }

    onClick = () => console.log(this.user);

    render() {
        const btn = document.createElement('button');
        btn.id = this.id;
        btn.textContent = this.label;
        btn.addEventListener('click', this.onClick)
        return btn;
    }
}

data.forEach(item => {
    const {id, label, user:{name}} = item;
    const button = new Button(id, label, name);
    container.appendChild(button.render())
})