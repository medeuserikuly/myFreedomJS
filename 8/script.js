// Task 1

// const inputElement = document.querySelector('input'),
//       ulElement = document.querySelector('ul');
      
// inputElement.addEventListener('input', (e) => {
//     const li = document.createElement('li');
//     for (const key of e.target.value) {
//         li.textContent = key;
//     }
//     ulElement.appendChild(li);
// });

// Task 2

// const inputElement = document.querySelector('input'); 
// inputElement.addEventListener('keyup', () => {
//     console.log(inputElement.value);
// });

// Task 3

// const inputElement = document.querySelector('input'),
//       ulElement = document.querySelector('ul'),
//       form = document.querySelector('form');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const li = document.createElement('li');
//     li.textContent = inputElement.value;
//     ulElement.appendChild(li);
//     inputElement.value = '';
// });

// Task 4

// document.querySelector('form').addEventListener('submit', (e) => {
//     e.preventDefault();

//     const num1 = +document.querySelector('#number1').value,
//           num2 = +document.querySelector('#number2').value,
//           select = document.querySelector('select').value;
    
//     let result;

//     // if (select === '+') {
//     //     result = num1 + num2;
//     // } else if (select === '-') {
//     //     result = num1 - num2;
//     // } else if (select === '*') {
//     //     result = num1 * num2;
//     // } else {
//     //     result = num1 / num2;
//     // }

//     result = eval(num1 + select + num2);

//     document.querySelector('#result').innerText = result;
// });

// Task 5

// const btn = document.querySelector('button');
// btn.addEventListener('mouseenter', () => {
//     btn.style.backgroundColor = getRandomRGB();
// });
// btn.addEventListener('mouseleave', () => {
//     btn.style.transform = 'rotate(' + getRandomInteger(-180, 180) + 'deg)';
// });

// function getRandomRGB() {
//     let r =  getRandomInteger(0, 255),
//         g =  getRandomInteger(0, 255),
//         b =  getRandomInteger(0, 255);
    
//     return `rgb(${r}, ${g}, ${b})`;
// }

// function getRandomInteger(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }