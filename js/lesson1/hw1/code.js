//- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write

// let a = 'hello';
// let b = 'owu';
// let c = 'com';
// let d = 'ua';
// let num1 = 1;
// let num2 = 10;
// let num3 = -999;
// let num4 = 123;
// let pi = 3.14;
// let exp = 2.7;
// let num5 = 16;
// let bool1 = true;
// let bool2 = false;
//
// console.log(a, b, c, d, num1, num2, num3, num4, pi, exp, num5, bool1, bool2);
// alert(`${a},${b},${c},${d},${num1},${num2},${num3},${num4},${pi},${exp},${num5},${bool1},${bool2}`);
// document.write(`${a},${b},${c},${d},${num1},${num2},${num3},${num4},${pi},${exp},${num5},${bool1},${bool2}`);

//- Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write

// a = 'bye';
// b = 'okten';
// c = 'ua';
// d = 'com';
// num1 = 0;
// num2 = 100;
// num3 = -1000;
// num4 = 987;
// pi = 2.7;
// exp = 3.14;
// num5 = 17;
// bool1 = false;
// bool2 = true;
//
// console.log(a, b, c, d, num1, num2, num3, num4, pi, exp, num5, bool1, bool2);
// alert(`${a},${b},${c},${d},${num1},${num2},${num3},${num4},${pi},${exp},${num5},${bool1},${bool2}`);
// document.write(`${a},${b},${c},${d},${num1},${num2},${num3},${num4},${pi},${exp},${num5},${bool1},${bool2}`);

//- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. Зконкатенувати їх в одну змінну person.

// const firstName = 'Sonia';
// const middleName = 'Igorivna';
// const lastName = 'Rybska';
// const fullname = firstName + ' ' + middleName + ' ' + lastName;
// console.log(fullname);

//- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

// const firstName = prompt('FirstName');
// const middleName = prompt('middleName');
// const age = prompt('age');
// const welcome= `Вітаю ${firstName} ${middleName}. Тобі ${age} років`;
// alert(welcome);

//- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;

// let a = 100;
// let b = '100';
// let c = true;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

// 5 < 6 -> true
// 5 > 6 -> false
// 5 == 6 -> false
// 5 === 6 -> false
// 10 == 10 -> true
// 10 === 10 -> true
// 10 > 10 -> false
// 10 < 10 -> false
// 10 != 10 -> false
// 123 === '123' -> false
// 123 == '123' -> true

// console.log(132 > 100 && 45 < 12 );  false
// console.log(34 > 33 && 23 < 90 ); true
// console.log(99 > 100 && 45 > 12 ); false
// console.log(132 > 100 || 45 < 12 ); true
// console.log(111 > 11 || 45 < 111 );true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );true
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) ); true
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ); false
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));true
// console.log(!!'-1');true
// console.log(!!-1);true
// console.log(!!'0');true
// console.log(!!'null');true
// console.log(!!'undefined');true
// console.log(!!(3/'owu'));false
// console.log((111 > 11 || 45 < 111) ||  !!'0');true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));false

//1. Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
//    За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.

// const str='Привіт';
// const num=123;
// const flag=true;
// const txt='true';
// console.log(typeof str);
// console.log(typeof num);
// console.log(typeof flag);
// console.log(typeof txt);

// 2. Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних оператцій отримайте числа:
//     34,
//     12,
//     66,
//     90,
//     87
//     Старайтесь використовувати різні оператори.
//     Example: 88 = (16 / 2) * 11

// const a1=20;
// const a2=2;
// const a3=6;
// const a4=7;
// const a5=4;
// const num1=(a4*a5)+6;
// const num2=a2*a3;
// const num3=(a3*a4)+(a1+a5);
// const num4=(a1/a2)+(a1*a5);
// const num5=(a1*a5)+(a1/a2)-(a3/a2);
// console.log(num1,num2,num3,num4,num5);

// 3.  Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'

// const a6=2;
// const a7=3;
// const a8="53";
// const a9=2;
// const a10="75кг";

// 4. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//    Значееня площі зберігати в змінній s.

// const height=23;
// const width=10;
// const s=height*width;
// console.log(s);

// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.

// const heightC=10;
// const dC=4;
// const v=(dC/2)*heightC;
// console.log(v);

// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
//    Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).

// const n=3;
// const m=4;
// const k=Math.sqrt(Math.pow(n,2)+Math.pow(m,2));
// console.log(k)

// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).

// const firstName = 'Sonia';
// const middleName = 'Igorivna';
// const lastName = 'Rybska';
// const age=18;
// const hobby='programming';
// alert(`${firstName}\n ${middleName}\n ${lastName}\n ${age}\n ${hobby}`);

// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//   Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//   Вывести в документ содержимое переменной concatenation спомощью document.write

// let str1='Кто';
// let str2='ты';
// let str3='такой?';
// let concatenation=`${str1} ${str2} ${str3}`;
// document.write(concatenation)

// 10. Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?

//      let str = "20";
//       let a = 5;
//       document.write(str + a + "<br/>");205
//       document.write(str - a + "<br/>");15
//       document.write(str * "2" + "<br/>");40
//       document.write(str / 2 + "<br/>");10
// При використанні оператор "+" зі стрінгою і числом, число переводиться в стрінгу а у викорисатнні інших операторів навпаки стрінга в число;

// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
// let a=+prompt('number 1')
// let b=+prompt('number 2');
// let c= a+b;
// alert(c)

// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
//       Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert

 // const firstName =prompt('First name')
 // const lastName =prompt("Last name");
 // const age=prompt('Age');
 // alert(`Доброго вечера ${firstName} ${lastName}, мои поздравления что вам ${age}`);

//1. Три різних числа вводяться через prompt().
// За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)
let a=prompt();
let b=prompt();
let c=prompt();
if(a>b && b>c&& b<a)console.log(a,b,c);
if(a>b && b<c && c<a)console.log(a,c,b);
if(b>a && a>c)console.log(b,a,c);
if(b>a && a<c)console.log(b,c,a);
if(c>a && a>b)console.log(c,a,b)
if(c>a && a<b && b<c)console.log(c,b,a)

// 2.
// Все параматры получаем с клавиатуры!!!!
// Имитируем поведение пешехода на перекстке.
// Если светофор зеленый - вывести "иди".
// Если светофор желтый - вывести "подожди".
// Если светофор красный - вывести "стой".
// Если светофор в аварийном режиме вывести "делай что хочешь"!
//
// 3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
// Улучшаем предыдущее задание.
// Если светофор зеленый и машин нет - вывести "иди".
// Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
// Если светофор желтый и машин нет - вывести "все рано жди".
// Если светофор красный и машин нет- вывести "стой все рано".
// Если светофор красный - и машины есть вывести "стой и жди".
// Если светофор в аварийном режиме вывести "делай что хочешь"!