//- створити функцію яка приймає масив та виводить його

//  const arrayConsol = (arr) => {
//      console.log(arr);
//  };
// array([12, 7, 'd', 7]);

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// const minNumber = (a, b, c) => {
//     let array = [];
//     array.push(a, b, c);
//     let min = array[0];
//     for (let i = 1; i < array.length; i++) {
//         if (min > array[i]) min = array[i];
//     }
//     return min;
// };
// console.log(minNumber(1, 100, 30));


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

//  const maxNumber = (a, b, c) => {
//      let array = [];
//      array.push(a, b, c);
//      let max = array[0];
//      for (let i = 1; i < array.length; i++) {
//          if (max < array[i]) max = array[i];
//      }
//      return max;
//  };
// console.log(maxNumber(1, 100, 30));


// - створити функцію яка повертає найбільше число з масиву

// const maxNumberArray = (array) => {
//     let max = array[0];
//     for (let i = 1; i < array.length; i++) {
//         if (max < array[i]) max = array[i];
//     }
//     return max;
// };
// console.log(maxNumberArray([1, 100, 30]));


// - створити функцію яка повертає найменьше число з масиву

// const minNumberArray = (array) => {
//     let min = array[0];
//     for (let i = 1; i < array.length; i++) {
//         if (min > array[i]) min = array[i];
//     }
//     return min;
// };
// console.log(minNumberArray([1, 0, -4]));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// const sum=(array)=>{
//     let sum=0;
//     for (let i = 0; i < array.length; i++) {
//         sum+=array[i];
//     }
//     return sum
// }
// console.log(sum([8, 4, 1]));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let average=(array)=>{
//     let sum=0;
//     for (let i = 0; i < array.length; i++) {
//         sum+=array[i];
//     }
//     return sum/array.length;
// }
// console.log(average([8, 4, 1]));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// Для виведення використати попередню функцію.

//  let array=[];
//  const randomize=(length,max,min)=>{
//      for (let i = 0; i < length; i++) {
//          array[i]=Math.round(Math.random()*(max-min)+min)
//
//      }
//      arrayConsol(array)
//  }
// randomize(10,1000,500);

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

//  const valuesOfObjects = (array) => {
//     let arrayOfKeys=[];
//     for (let i = 0; i < array.length; i++) {
//         let keys =Object.keys(array[i]);
//         for (const key of keys) {
//             arrayOfKeys.push(key)
//         }
//
//     }
//     return arrayOfKeys
// }
// console.log(valuesOfObjects([{name: 'Dima', age: 13}, {model: 'Camry'}]));

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// valuesOfObjects = (array) => {
// let arrayOfValues=[];
//     for (let i = 0; i < array.length; i++) {
//     let values =Object.values(array[i]);
//         for (const value of values) {
//             arrayOfValues.push(value)
//         }
//
//     }
//     console.log(arrayOfValues)
// }
// valuesOfObjects([{name: 'Dima', age: 13}, {model: 'Camry'}])

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

// const arrays=(arr1,arr2)=>{
//     let mass=[];
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//            if(i===j){
//               mass.push(arr1[i]+arr2[j])
//            }
//         }
//     }
//    return mass
// }
// console.log(arrays([1, 2, 3, 4], [2, 3, 4, 5]));

// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

// let array = ['a', 'b', 'c'];
// for (let i = 1; i <= 3; i++) {
//     array.push(i)
// }
// console.log(array)

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

// let arr=[1,2,3];
// for (let i = arr.length - 1; i >= 0; i--) {
//     let numbers=arr.splice(i,1);
//     for (const number of numbers) {
//         arr.push(number)
//     }
// }
// console.log(arr)

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

// let array=[1,2,3];
// for (let i = 4; i <=6; i++) {
//     array.push(i)
// }
// console.log(array);

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

// let array=[1,2,3];
// for (let i = 6; i >=4; i--) {
//     array.unshift(i)
// }
// console.log(array);

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].

// let array=[1, 2, 3, 4, 5];
// array.splice(0,3);
// console.log(array);

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].

// let array=[1, 2, 3, 4, 5];
// array.splice(2,3);
// console.log(array);

// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].

// let array=[1, 2, 3, 4, 5];
// array.splice(2,3);
// array.push('a','b','c');
// console.log(array);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let array=[10,9,8,7,6,5,4,3,2,1,0];
// for (let i = 0; i < array.length; i++) {
//     if(array[i]%2===0 && array[i]!==0)console.log(array[i]);
// }

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let array=[10,9,8,7,6,5,4,3,2,1,0];
// let array2=[];
// for (const item of array) {
//     array2.push(item)
// }
// console.log(array2)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

// let arr = ['a', 'b', 'c'];
// let string = '';
// for (let i = 0; i < arr.length; i++) {
//     string+=arr[i];
// }
// console.log(string);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let arr = ['a', 'b', 'c'];
// let string = '';
// let index=0;
// while (index<arr.length){
//     string+=arr[index];
//     index++
// }
// console.log(string);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// let arr = ['a', 'b', 'c'];
// let string = '';
// for (let item of arr) {
//     string+=item;
// }
// console.log(string);
