//--створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let array1=[1,2,3,4,5];
// let array2=['a','b','c','d','f'];
// let array3=[10,'y',9,'w',8];
// console.log(array1);
// console.log(array2);
// console.log(array3);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let array=[10,'y',9,'w',8];
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);
// console.log(array[4]);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>hello</div>`)
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>hello ${i}</div>`)
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i=0
// while(i<=20){
//     document.write(`<div>hello</div>`);
//     i++
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i=0;
// while(i<=20){
//     document.write(`<div>hello ${i}</div>`);
//     i++
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let array=[10,9,8,7,6,5,4,3,2,1];
// for (const number of array) {
//     console.log(number);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let array=['a','b','c','d','f','h','z','x','s','l'];
//  for (const item of array) {
//      console.log(number);
//  }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let array=['a,',1,'b',2,'g',5,'k',3,'l',9,'f'];
//  for (const item of array) {
//      console.log(number);
//  }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let array=['a',true,'b',2,'g',5,'k',3,'l',false,'f'];
// for (const item of array) {
//       if(typeof item==="boolean"){
//           console.log(item)
//       }
//   }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// for (const item of array) {
//     if(typeof item==="number"){
//         console.log(item)
//     }
// }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// for (const item of array) {
//     if(typeof item==="string"){
//         console.log(item)
//     }
// }
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let array=[];
// array[0]=100;
// array[1]='hello';
// array[2]=12;
// array[3]='a';
// array[4]=3.14;
// array[5]=22
// array[6]='okten';
// array[7]=2.7;
// array[8]='v'
// array[9]=11;
// console.log(array);

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(`<h1>${i}</h1>`)
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(`<h1>${i}</h1>`)
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i+=2) {
//     console.log(i);
//     document.write(`<h1>${i}</h1>`)
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//   if(i%2===0){
//       console.log(i)
//       document.write(`<h1>${i}</h1>`)
//   }
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if(i%2!==0){
//         console.log(i)
//         document.write(`<h1>${i}</h1>`)
//     }
// }

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },
//     // TO BE CONTINUED .....
// ]
for (const item of usersWithId) {
    for (const item2 of citiesWithId) {
        if(item.id===item2.user_id){
            item.address=item2
        }
    }
}
let usersWithCities=[];
for (const user of usersWithCities) {
    usersWithId.push(user)
}
console.log(usersWithCities);
