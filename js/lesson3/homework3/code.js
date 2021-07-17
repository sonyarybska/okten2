//- створити функцію яка обчислює та повертає площу прямокутника висотою
const rectangle = (w, h) => {
    return w * h
}
console.log(rectangle(10, 15));
// - створити функцію яка обчислює та повертає площу кола
const circle = (r) => {
    return Math.PI * (r * r)
}
console.log(circle(15));
// - створити функцію яка обчислює та повертає площу циліндру
const cylinder = (r, h) => {
    return 2 * Math.PI * r * h
}
console.log(cylinder(15, 10));
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

const minMax = (arguments) => {
     let min = arguments[0];
    let max = arguments[0];
     for (let i = 1; i < arguments.length; i++) {
         if (min > arguments[i]) min = arguments[i];
     }
     for (let j = 1; j < arguments.length; j++) {
         if (max < arguments[j]) max = arguments[j];
     }
     console.log(max);
     return min

};
console.log(minMax([10, 6, 9]));

// - створити функцію яка при створює блок з текстом. Текст задати через аргумент
const divText=(text)=>{
    document.write(`<div>${text}</div>`)
}
divText('Hello okten')
// - створити функцію яка при створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

const liText=(text)=>{
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`)
    }

    document.write(`</ul>`)
}
liText('Hello')
// - створити функцію яка при створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const liCount=(text,countLi)=>{
    document.write(`<ul>`)
    for (let i = 0; i < countLi; i++) {
        document.write(`<li>${text}</li>`)
    }


    document.write(`</ul>`)
}
liCount('Hello',10);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

const ulText=(arrayLi)=>{
     document.write(`<ul>`)
     for (const item of arrayLi) {
         document.write(`<li>${item}</li>`)
     }
     document.write(`</ul>`)
 }
 ulText(['User1',15,true]);