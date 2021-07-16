
// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// const replace=(array,index)=>{
//     for (let i = 0; i < array.length; i++) {
//        let temp=array[index];
//        array[index]=array[index+1]
//        array[index+1]=temp
//     }
//     console.log(array)
// }
// replace([1,2,3,4,5],0)

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// const nullEnd=(array)=>{
//     let nul=0;
//     for (let i = 0; i < array.length; i++) {
//         if(array[i]!==0){
//            array[nul]=array[i];
//            nul++;
//         }
//
//     }
//     for (let j = nul; j < array.length; j++) {
//         array[nul++]=0;
//
//     }
//     console.log(array)
// }
// nullEnd([0,0,0,6,3,0,5,2,10,99,0,7,0])

// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
//
// for (let i = 0; i < n3.length; i++) {
//     if (n3[i] === ' ') {
//         n3 = n3.replace(n3[i], '')
//     }
//     n3 = n3.replace('  ', '')
// }
// console.log(n3)


// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'