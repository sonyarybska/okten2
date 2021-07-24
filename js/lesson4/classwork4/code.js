//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }

// let array = [];

// let clientInfo = new Client(0, "name0", "surname0", "email0gmail.com", "013", ["order", "order"]);
// let clientInfo1 = new Client(1, "name1", "surname1", "email1gmail.com", "124", ["order"]);
// let clientInfo2 = new Client(2, "name2", "surname2", "email2gmail.com", "235", ["order", "order", "order"]);
// let clientInfo3 = new Client(3, "name3", "surname3", "email3gmail.com", "346", ["order", "order", "order", "order"]);
// let clientInfo4 = new Client(4, "name4", "surname4", "email4gmail.com", "457", ["order", "order"]);
// let clientInfo5 = new Client(5, "name5", "surname5", "email5gmail.com", "568", ["order", "order", "order"]);
// let clientInfo6 = new Client(6, "name6", "surname6", "email6gmail.com", "679", ["order", "order", "order", "order"]);
// let clientInfo7 = new Client(7, "name7", "surname7", "email7gmail.com", "7810", ["order", "order"]);
// let clientInfo8 = new Client(8, "name8", "surname8", "email8gmail.com", "8911", ["order", "order", "order", "order"]);
// let clientInfo9 = new Client(9, "name9", "surname9", "email9gmail.com", "91012", ["order"]);

// array.push(clientInfo, clientInfo1, clientInfo2, clientInfo3, clientInfo4, clientInfo5, clientInfo6, clientInfo7, clientInfo8, clientInfo9);
// console.log(array.sort((a, b) => a.order.length - b.order.length));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//     -- info () - яка виводить всю інформацію про автомобіль
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// function Cars(model, producer, year, maxSpeed, volume) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volume = volume;
//     this.drive=function (){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//     this.info=function (){
//         console.log(`Model:${this.model} Producer: ${this.producer} Year:${this.year} Max speed:${this.maxSpeed} Volume ${this.volume}`);
//     }
//     this.increaseMaxSpeed=function (newSpeed){
//        return this.maxSpeed+=newSpeed;
//     }
//     this.changeYear=function (newValue){
//         return this.year=newValue;;
//     }
//     this.addDriver=function (driver){
//        return  this.driver=driver;
//     }
// }

// let car1=new Cars('reno','italic',2010,1000,100);
// car1.info();
// console.log(car1.increaseMaxSpeed(20));
// car1.changeYear(2021);
// console.log(car1);
// car1.addDriver({name:"Oleg",age:25});
// console.log(car1);

//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//     -- info () - яка виводить всю інформацію про автомобіль
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// class Cars {
//     constructor(model, producer, year, maxSpeed, volume) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.volume = volume;
//     }
//         drive() {
//             console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//         }
//         info () {
//             console.log(`Model:${this.model} Producer: ${this.producer} Year:${this.year} Max speed:${this.maxSpeed} Volume ${this.volume}`);
//         }
//         increaseMaxSpeed (newSpeed) {
//             return this.maxSpeed += newSpeed;
//         }
//         changeYear(newValue) {
//             return this.year = newValue;
//         }
//         addDriver(driver) {
//             return this.driver = driver;
//         }
//
// }

// let car1=new Cars('reno','italic',2010,1000,100);
// car1.info();
// console.log(car1.increaseMaxSpeed(20));
// car1.changeYear(2021);
// console.log(car1);
// car1.addDriver({name:"Oleg",age:25});
// console.log(car1);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.

class Cinderella{
    constructor(name,age,footSize) {
        this.name=name;
        this.age=age;
        this.footSize=footSize;
    }
}
let array1=[];
for (let i = 0; i < 10; i++) {
    let number=Math.round(Math.random()*10)
    let cinderella=new Cinderella('Cinderella'+i,16+number,33+number);
    array1.push(cinderella);
}
console.log(array1);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince{
    constructor(name,age,foot) {
        this.name=name;
        this.age=age;
        this.foot=foot;
    }
}
let array2=[];
for (let i = 0; i < 10; i++) {
    let number=Math.round(Math.random()*10)
    let prince=new Prince('Prince'+i,16+number,33+number);
    array2.push(prince);
}
console.log(array2);
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (let i = 0; i < 10; i++) {
        if(array1[i].footSize===array2[i].foot){
            console.log(array1[i])
    }
}
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log(array1.find(value => value.name = 'Cinderella1'));