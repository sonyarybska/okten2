//Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
//     a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

// textElement=document.getElementById('main_header');
// textElement.innerText='June-2021';

//     b) робить шириниу елементу ul 400px
let ulElement=document.getElementsByTagName('ul');
for (const item of ulElement) {
    item.style.width='400px';
}

//     c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkList=document.getElementsByClassName('linkList');
for (const item of linkList) {
    item.style.width='50%';
}
//     d) отримує текст який зберігається в елементі з класом listElement2
let listElement=document.getElementsByClassName('listElement2');
for (const item of listElement) {
    console.log(item.innerText);
}
//     e) отримує всі елементи li та змінює ім колір фону на сірий
let liElement=document.getElementsByTagName('li');
for (const item of liElement) {
    item.style.backgroundColor='grey';
}
//     f) отримує всі елементи 'a' та додає їм клас anchor
// let aElement=document.getElementsByTagName('a');
// for (const item of aElement) {
//     item.className='anchor';
// }
//     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// let aElement=document.getElementsByTagName('a');
// for (const item of aElement) {
//     if(item.innerText==='link3') item.style.fontSize='40px';
// }

//     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let aElement=document.getElementsByTagName('a');
// for (const item of aElement) {
//     item.classList.add('element_'+item.innerText);
//     console.log(item);
// }
//     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let sub=document.getElementsByClassName('sub-header');
// for (const item of sub) {
//     item.style.backgroundColor=prompt('Color');
// }
//     j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let sub=document.getElementsByClassName('sub-header');
// for (const item of sub) {
//     if(item.innerText==='content 2 segment')item.style.backgroundColor=prompt('Color');
// }
//     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let content1=document.getElementsByClassName('content_1');
// for (const item of content1) {
//     item.innerText=prompt('Text');
// }
//     l) отримати елементи p та змінити їм padding на 20px
let pElement=document.getElementsByTagName('p');
for (const item of pElement) {
    item.style.padding='20px';
}
//     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
let text2=document.getElementsByClassName('text2');
for (const item of text2) {
    item.innerText='June-2021'
}
