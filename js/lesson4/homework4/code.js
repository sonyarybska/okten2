//- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// const randomArray=()=>{
//     let array=[];
//     for (let i = 0; i < 100; i++) {
//         array[i]=Math.round(Math.random() * (100))
//     }
//     return array
// }
// console.log(randomArray())

// - Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.

// const randomArray=(max,min)=>{
//     let array=[];
//     for (let i = 0; i < 100; i++) {
//         array[i]=Math.round(Math.random()*(max-min)+min)
//     }
//     return array
// }
// console.log(randomArray(200,115));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// const randomArray=(max,min)=>{
//     let array=[];
//     for (let i = 0; i < 100; i++) {
//         array[i]=Math.round(Math.random()*(max-min)+min)
//     }
//     return array.sort()
// }
// console.log(randomArray(200,115));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати
// його за допомоги filter, за лишивши тільки парні числа

// const randomArray=(max,min)=>{
//     let array=[];
//     for (let i = 0; i < 100; i++) {
//         array[i]=Math.round(Math.random()*(max-min)+min)
//     }
//     return array.filter(value => value%2===0);
// }
// console.log(randomArray(200,115));

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.

// const randomArray=(max,min)=>{
//     let array=[];
//     for (let i = 0; i < 100; i++) {
//         array[i]=Math.round(Math.random()*(max-min)+min)
//     }
//     return array.map(value=>value.toString())
// }
// console.log(randomArray(200,115));

// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(id,name,surname,email,phone){
    this.id=id;
    this.name=name;
    this.email=email;
    this.phone=phone
}
// створити пустий масив, наповнити його 10 об'єктами new User(....)
let array=[];
for (let i = 0; i < 10; i++) {
    let userInfo=new User(i,'name'+i,'surname'+i,'email'+i,i.toString()+(i+1)+(i+2)+(i+3))
    array.push(userInfo)
}
console.log(array);
// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)
console.log(array.filter(value => value.id % 2 === 0).sort((a, b) => a.id-b.id));
