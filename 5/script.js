// Task 1
// function sum(a, b) {
//     if (arguments.length !== 2) {
//         return "Введите два параметра";
//     }
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         return "Введенные данные не являются числами";
//     }

//     const result = a + b;
//     return result
//   }
  
// Task 2
// function square(a) {
//     if (typeof a !== 'number') {
//       console.error('Ошибка: Функция "square" не может быть вызвана без аргумента');
//       return;
//     }
  
//     console.log(a * a);
// }

// Task 3
// const guessNum = (num) => {
//     let random = Math.floor(Math.random() * (10)) + 1;
//     if (num > 10 || num < 1) {
//         return 'Введите от 1 до 10';
//     } else if (num === random) {
//         return 'Вы выиграли';
//     } else {
//         return `Вы не угадали, ваше число -  ${num}  а выпало число ${random}`;
//     }
// }
// console.log(guessNum(2));

// Task 4
// const arr = [1, 2, 3, 4, 5];
// const copyArr = (arr) => arr.map(el => el);
// const newArr = copyArr(arr);
// console.log(newArr);

// Task 5
// const arrOfNames = ['Asus', 'HP', 'Lenovo', 'MSI', 'Acer'];
// const addHello = (arr) => arr.map(name => `Hello ${name}`);
// const newArr = addHello(arrOfNames);
// console.log(newArr);

// Task 6
// const users = [
//     {
//         userName: 'Asus',
//         userCountry: 'Taiwan', 
//     },
//     {
//         userName: 'HP',
//         userCountry: 'USA', 
//     },
//     {
//         userName: 'Lenovo',
//         userCountry: 'China', 
//     },
// ];

// const showNameOfUsers = arr => arr.map(element => element.userName)
// const usersNames = showNameOfUsers(users);
// console.log(usersNames);

// Task 7
// const objectWithNumbers = {
//     a: 10,
//     b: 20,
//     c: 'string',
//     d: 12,
// }

// const sumObjectValues = (obj) => {
//     let result = 0;
//     for (const key in obj) {
//         if (typeof obj[key] === 'number') {
//             result += obj[key]
//         }
//     }
//     return result;
// }

// console.log(sumObjectValues(objectWithNumbers));

// Task 8
// const ucFirst = (str) => str[0].toUpperCase() + str.slice(1);
// let str = "hello world";
// let result = ucFirst(str);
// console.log(result); 

// task 9
// function checkSpam(str) {
//     const lowStr = str.toLowerCase();
//     const badWord = 'badword';
//     const xxx = 'xxx';

//     return lowStr.includes(badWord) || lowStr.includes(xxx);
// }
// console.log(checkSpam("Loerm XXx Ipsum"));

// Task 10 
// const reverseText = str => str.split('').reverse().join('');
// let text = "привет, Женя";
// let reversed = reverseText(text);
// console.log(reversed);


//Task 11
// let stations = [
//     'MAN675847583748sjt567654;Manchester Piccadilly',
//     'GNF576746573fhdg4737dh4;Greenfield',
//     'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
//     'SYB4f65hf75f736463;Stalybridge',
//     'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
//   ];

//   stations.map(station => console.log(`${station.slice(0, 3)}: ${station.split(';')[1]}`));

// Task 12
// const strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
// function unique(arr) {
//     return arr.filter((value, index, array) => array.indexOf(value) === index); 
// }
// console.log(unique(strings));

// Task 13
// const changeYearsEnd = (num) => (num <= 4) ? `${num} года` : `${num} лет`;

// const verifyCats = (catsJane, catsJulia) => {
//     let allCats = catsJane.slice(1, 9).concat(catsJulia);
//     allCats.forEach((cat, i) => console.log(`Кошка №${i + 1} ${cat >= 2 ? `взрослая, ей ${changeYearsEnd(cat)}` : 'ещё котёнок'}`));
// };

// verifyCats([4, 5, 3, 11, 6, 2, 4, 1, 5, 9], [2, 4, 5, 1, 13, 2, 15, 8, 3, 7]);
// verifyCats([3, 5, 9, 14, 1, 2, 6, 8, 3, 10], [8, 2, 10, 1, 2, 5, 6, 3, 1, 4]);

// Task 14
// Решить 4 задание из прошлой темы, используя метод filter
// const arr = [1, 2, 3, 4, 5];
// const copyArr = (arr) => arr.filter(() => true);
// const newArr = copyArr(arr);
// console.log(newArr);

// Next Task 
// const arr = [5, 4, 3, 8, 0];
// const filterFor = (arr, a) => arr.filter((el) => el >= a);
// console.log(filterFor(arr, 5));

// Task 15
// const arr =  ['yes', 'hello', 'no', 'easycode', 'what'];
// const returnMoreThanThree = (arr) => arr.filter((el) => el.length > 4);
// console.log(returnMoreThanThree(arr));

// Task 16
// const arr = [ [14, 45], [1], ['a', 'c', 'd'] ];
// console.log(arr.sort((a, b) => a.length - b.length));

// Task 17
// const getAverageHumanAge = (catAges) => {
//    const humanAges = catAges.map((age) => age <= 2 ? age * 10 : age * 7);
//    const moreThan18 = humanAges.filter((age) => age >= 18);
//    const sum = moreThan18.reduce((a, b) => (a + b));
//    const avarageAge = sum / moreThan18.length;
//    return avarageAge;
// }

// console.log(getAverageHumanAge([7 , 3, 2, 4, 1, 15, 8, 1, 9, 2]));
// console.log(getAverageHumanAge([1, 16, 12, 4, 5, 1, 3, 11, 7, 2]));

