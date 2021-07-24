//- Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
//- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//      -- отримує текст з параграфа з id "content"

console.log(document.getElementById('content'));

//     -- отримує текст з блоку з id "rules"

console.log(document.getElementById('rules').innerText);

//     -- замініть текст параграфа з id 'content' на будь-який інший

document.getElementById('content').innerText='hello';

//     -- замініть текст параграфа з id 'rules' на будь-який інший

document.getElementById('rules').innerText='bye';

//      -- змініть кожному елементу колір фону на червоний

// let background=document.body.getElementsByTagName('*');
// for (let i = 0; i < background.length; i++) {
//    background[i].style.backgroundColor='red';
// }

//      -- змініть кожному елементу колір тексту на синій

let textColor=document.body.getElementsByTagName('*');
for (let i = 0; i < textColor.length; i++) {
    textColor[i].style.color='blue';
}

//     -- отримати весь список класів елемента з id=rules і вивести їх в console.log

let rules=document.getElementById('rules');
let rule=rules.classList
for (const item of rule) {
    console.log(item);
}
//   -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довільний текст
let fc_rules=document.getElementsByClassName('fc_rules');

for (const item of fc_rules) {
    let innerText=()=>{
        console.log(item.innerText)
    }
    let text=()=>{
        console.log('hhh')
    }
    item.addEventListener('click',innerText)
    item.addEventListener('click',text)
}
// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let fc=document.getElementsByClassName('fc_rules');
for (const item of fc) {
    console.log(item);
    item.style.backgroundColor='red';
}
