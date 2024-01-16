// Task 1
// let userName = prompt('Введите ваше имя:');
// alert(`Привет, ${userName}'!`);

// Task 2
// let baseNumber = +prompt("Введите число:"),
//     exponent = +prompt("Введите степень:"),
//     result = Math.pow(baseNumber, exponent);

//     console.log(`Результат: ${result}`);


// Task 4
// let myVar = "my text";
// if (myVar === "some text") {
//     myVar = "another text";
// } else {
//     myVar = "some text";
// }

// Task 5
// let number = 5;
// if (number === 0) {
//     number = 1;
// } else if (number < 0) {
//     number = 'less then zero';
// } else if (number > 0) {
//     number *= 10;
// }

// Task 6 
// let userNumber = +prompt("Введите число:");
// let result = (userNumber < 5) ? '0' : '1';
// console.log(result);

// Task 7
// let firstNumber = +prompt("Введите первое число:"),
//     secondNumber = +prompt("Введите второе число:");
// console.log("Большее число: " + Math.max(firstNumber, secondNumber));

// Task 8

// let num1 = +prompt("Введите первое число:"),
//     num2 = +prompt("Введите второе число:"),
//     isMultiple = num1 % num2 === 0;

//     if (isMultiple) {
//         console.log(`${num1} является кратным ${num2}.`);
//     } else {
//         console.log(`${num1} не является кратным ${num2}.`);
//     }

// Task 9
// let GPA = +prompt("Введите средний балл:");

// if (GPA >= 1 && GPA <= 4) {
//     console.log("Двоечник, иди учись!");
// } else if (GPA >= 5 && GPA <= 8) {
//     console.log("Неплохо, но давай еще поднажмем!");
// } else if (GPA >= 9 && GPA <= 10) {
//     console.log("Ого, да ты настоящий отличник!");
// };

// Task 10

// let exam = +prompt("Введите балл за экзамен (от 0 до 100):"),
//     project = parseInt(prompt("Введите количество выполненных проектов (от 0 и более):")),
//     result;

//     if (exam > 90 || project > 10) {
//         result = 100;
//     } else if (exam > 75 && project >= 5) {
//         result = 90;
//     } else if (exam > 50 && project >= 2) {
//         result = 75;
//     } else {
//         result = 0;
//     }
//     console.log(`Общий выпускной балл: ${result}`);

// Task 10
// let day = +prompt('Количество дней, на которые нужно арендовать авто'),
//     priceOneDay = 40,
//     discountForSeven = 50,
//     discountForThree = 20,
//     totalPrice;

//     if (day >= 7) {
//         console.log(`Cтоимость аренды на запрашиваемое количество дней: ${totalPrice = day * priceOneDay - discountForSeven}$`);
//     } else if (day >= 3) {
//         console.log(`Cтоимость аренды на запрашиваемое количество дней: ${totalPrice = day * priceOneDay - discountForThree}$`);
//     } else {
//         console.log(`Cтоимость аренды на запрашиваемое количество дней: ${totalPrice = day * priceOneDay}$`);
//     }