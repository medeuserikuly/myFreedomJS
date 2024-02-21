// Task 1

// const userNames = ['Washington', 'Jackson', 'Monroe', 'Obama', 'Baiden'];
// const [firstName, secondName, ...otherNames] = userNames;
// console.log(firstName, secondName);
// otherNames.forEach(name => console.log(name));


// Task 2
// const userNames = ['Washington', 'Jackson', 'Monroe'];
// const show = (name1, name2, name3) => {console.log(name1, name2, name3)};
// show(...userNames);

// Task 3
// const object = {
//     field1,
//     field2,
//     field3,
// }

// const {field1 = 1, field2 = 2, ...fields} = object;

// Task 4 
// const meanScore = (...args) => {
//     for (let arg of args) {
//         if (typeof arg !== 'number' || isNaN(arg)) {
//             console.error("Ошибка: Все аргументы в вызове функции должны быть числами!");
//             return;
//         }
//     }

//     let sum = 0;
//     for (let i = 0; i < args.length; i++) {
//         sum += args[i];
//     }
//     return (sum / args.length).toFixed(2);
// };

// Task 5
