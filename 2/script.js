// Task 1
// let country = 'Sweden';
// let access = (country == 'Sweden') ? true : false;

// Task 2
// let number = 10;
// for (let i = 0; i < 10; i++) {
//   number++;
// }
// console.log(number);

// Task 3
// for (let i = 0; i < 10; i += 2) {
//     let number = +prompt("Введите число:");
  
//     if (number === 10) {
//       console.log("Равно 10");
//     } else {
//       console.log("Не равно 10");
//     }
// }

// Task 4
// let count = +prompt("Введите количество чисел:");
// for (let i = 0; i < count; i++) {
//   console.log(i * i);
// }

// Task 5
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
// }

// Task 6
// let i = 0;
// while (i < 3) {
//   alert(`number ${i}!`);
//   i++;
// }

// Task 7
// const squares = (min, max) => {
//     for (let i = min; i < max; i++) {
//         console.log(i*i);
//     }
// }
// squares(0, 10);
  
// Task 8
// const getRandomRGB = () => {
//     let r =  getRandomInteger(0, 255),
//         g =  getRandomInteger(0, 255),
//         b =  getRandomInteger(0, 255);
    
//     return `rgb(${r}, ${g}, ${b})`;
// }
// console.log(getRandomRGB());

// function getRandomInteger(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }

// Task 9
// const isInt = (n) => {
//     for (let i = 1; i <= n; i += 0.5) {
//         if (Number.isInteger(i)) {
//             console.log(i + ' integer');
//         } else {
//             console.log(i + ' decimal');    
//         }
//     }
// }
// isInt(5);

// Task 10 
// const calcPrice = (day) => { 
//     let priceOneDay = 40,
//         discountForSeven = 50,
//         discountForThree = 20;

//     if (day >= 7) {
//         console.log(`Cтоимость аренды на ${day} ${getDay(day)}: ${totalPrice = day * priceOneDay - discountForSeven}$`);
//     } else if (day >= 3) {
//         console.log(`Cтоимость аренды на ${day} ${getDay(day)}: ${totalPrice = day * priceOneDay - discountForThree}$`);
//     } else {
//         console.log(`Cтоимость аренды на ${day} ${getDay(day)}: ${totalPrice = day * priceOneDay}$`);
//     }
// }
// calcPrice(4);
// calcPrice(8);

// function getDay(number) {
//     if (number % 10 === 1 && number % 100 !== 11) {
//         return "день";
//       } else if (
//         (number % 10 >= 2 && number % 10 <= 4) &&
//         (number % 100 < 10 || number % 100 >= 20)
//       ) {
//         return "дня";
//       } else {
//         return "дней";
//       }
// }


