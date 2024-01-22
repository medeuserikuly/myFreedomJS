// Task 1
// const checkNumber = (n, min, max) => (n >= min && n <= max) ? true : false;
// console.log(checkNumber(15, 0, 100));

// Task 2 
// const engineers = {
//     Den: 1000,
//     Matt: 5000,
//     Steve: 2000
// }

// for (const key in engineers) {
//     console.log(`Заработная плата ${key} составляет ${engineers[key]} рублей.`)
// }

// Task 3
// const arr = [0, 1, 2, 3, 4];
// for (let i = 1; i < arr.length; i+=2) {
//     console.log(i);
// }

// Task 4 
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(`Индексу ${i} соответствует число ${numbers[i]}`)
// }

// Task 5
// let questions = [
//     {
//         question: "What's the currency of the USA?",
//         choices: ["US dollar", "Ruble", "Horses", "Gold"],
//         corAnswer: 0
//     }, 
//     {
//         question: "Where was the American Declaration of Independence signed?",
//         choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//         corAnswer: 0
//     }
// ];

// for (const value of questions) {
//     value.userAnswer = null
// }

// console.log(questions);

// Tasl 6.1
let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
// for (const key in numbers) {
//     console.log(numbers[key]);
// }

// for (const iterator of numbers) {
//     console.log(iterator);
// }

// Task 6.2
// let sum = 0;
// for (const iterator of numbers) {
//     sum += iterator;
// }
// console.log(sum);

// Task 6.3
// let sum = 0;
// for (const iterator of numbers) {
//     if (iterator % 2 === 0) {
//         sum += iterator;
//     }
// }
// console.log(sum);

// task 6.4
// let maxNumber = Math.max(...numbers);
// console.log(maxNumber);

// Task 6.5
// for (const key in numbers) {
//   if (numbers[key] === maxNumber) {
//     console.log(key);;
//   }
// }

// Task 7
// let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0],
//     newArr = [];

// for (const value of arr) {
//     if (value >= 0) {
//         newArr.push(value);
//     }
// }

// console.log(newArr)

// Task 8
// let nums = [5, 4, 3, 8, 0],
//     limit = 5,
//     arr = [];
// for (const value of nums) {
//     if (value >= limit) {
//         arr.push(value);
//     }
// }
// console.log(arr)

// Task 9
// const users = [
//     {name: 'Vasya', age: 23}, 
//     {name: 'Olya', age: 12}, 
//     {name: 'Anna', age: 22}, 
//     {name: 'Alex', age: 18}, 
//     {name: 'Valery', age: 8}
// ];
// for (const value of users) {
//     if (value.age > 15) {
//         console.log(value.name);
//     }
// }

// Task 10.1
// let vegetables = ["морковь", "баклажан", "репа", "топинамбур"],
//     arr = [];

// for (const value of vegetables) {
//     arr.push({word: value, length: value.length});
// }

// // console.log(arr);

// // Task 10.2
// for (const value of arr) {
//     console.log(`${value.word} - ${value.length}`);
// }
