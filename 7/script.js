// Task 1
// const browser = `Браузер: ${navigator.userAgent}`;
// const system = `Система: ${navigator.appVersion}`;
// const url = `Текущий URL: ${window.location.href}`;
// console.log(`На компьютере с ОС ${browser} с помощью ${browser} я открыл страничку ${url}`);

// Task 2
// const ul = document.querySelector('#list');
// const lists = ul.querySelectorAll('li');

// // Task 2.1
// lists.forEach(list => {
//     console.log(list.innerText);
// })

// // Task 2.2
// lists.forEach((list, i) => {
//     list.innerText = i;
// })

// Task 3
// const elements = document.querySelectorAll('.forRemove');
// elements.forEach(el => {
//     el.remove()
// })

// Task 4
// const paragraph = document.createElement('p');
// paragraph.textContent = 'Hello World!';
// paragraph.style.cssText = `
//     font-size: 36px;
//     font-weight: bold;
// `;
// document.body.appendChild(paragraph);

// // Task 5
// const element = (tagName, color, content) => {
//     const el = document.createElement(tagName);
//     el.style.color = color;
//     el.textContent = content;
//     return el;
// };
// const el1 = element('p', 'red', 'Hello world');
// const el2 = element('p', 'red', 'Hello world 2');
// document.body.append(el1, el2);

// Task 6
// const select = document.getElementById('years');
// for (let i = 1960; i <= 2020; i++) {
//     const option = document.createElement('option');
//     option.textContent = i;
//     select.appendChild(option);
// }

// Task 7
// const clients = [
//     {name: "Женя", order: true},
//     {name: "Кристина", order: true},
//     {name: "Павел", order: false},
//     {name: "Виолетта", order: false},
//     {name: "Костя", order: true}
// ]

// const ul = document.querySelector('#task7');
// clients.forEach((item) => {
//     const li = document.createElement('li');
//     li.textContent = `Клиент ${item.name} ${item.order ? 'оплатил' : 'отменил'} заказ`;
//     ul.appendChild(li);
// });

// Task 8
// const linksArr = [
//     'https://www.amazon.com/', 
//     'https://www.youtube.com/', 
//     'https://devby.io/', 
//     'https://www.google.com/', 
//     'https://apple.com/'
// ];

// const divElement = document.createElement('div');
// divElement.style.cssText = `background-color: #f0f0f0; padding: 20px;`;

// linksArr.forEach((link) => {
//     const aElement = document.createElement("a");
//     aElement.style = 'display: block;'
//     aElement.href = link;
//     aElement.target = "_blank"; 
//     aElement.textContent = link.slice(8);

//     divElement.appendChild(aElement);
//   });

//   document.body.appendChild(divElement);

// Task 9
// const users = [
//     {name: 'Mark', age: 12},
//     {name: 'Olga', age: 30},
//     {name:'Tom', age: 25},
    
//     {name:'Den', age: 43}
// ];

// const table = document.querySelector('.task9');
// users.forEach(user => {
//     const tr = document.createElement('tr');
//     tr.innerHTML = `
//         <td style="color: red;">${user.name}</td>
//         <td style="color: blue;">${user.age}</td>
//     `;
//     table.appendChild(tr);
// });

// Task 10
// const ul = document.querySelector('ul'),
//       li = document.querySelectorAll('li'),
//       a = document.querySelectorAll('a');

// ul.classList.add('list');
// li.forEach((item, i) => {
//     if (i % 2 === 0) {
//         item.classList.add('item');
//     }
// });
// a.forEach(item => item.classList.add('custom-link'));

