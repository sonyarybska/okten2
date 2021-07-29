// Зробити асинхронні функції по свому графіку дня та синхронізувати їх за допомогою callbacck,promise,async await


////////////////////////callback/////////////////////////

// let wakeUp = (time, cb) => {
//     setTimeout(() => {
//             if (time < 7) {
//                 cb('Yeah, i can sleep');
//             } else {
//                 cb(null,'I should wake up...(');
//             }
//         }, 3000);
// }
//
// let lunch=(meal,cb)=>{
// setTimeout(()=>{
//     if(meal==='fast food'){
//         cb(null, "Yeah,it is very deliciously");
//     }
//     else {
//         cb("I don't want eat it");
//     }
// },2000)
// }
//
// let goToCollege=(mood,cb)=>{
//     setTimeout(()=>{
//         if(mood==='good'){
//             cb(null, "I want to college,cool");
//         }
//         else {
//             cb("I have a bad mood, i don't want study");
//         }
//     },3500);
// }
//
// let goToWalk=(tired,cb)=>{
//     setTimeout(()=>{
//         if(tired===false){
//             cb(null, "Yeah, i go to walk with friends");
//         }
//         else {
//             cb("I very tired, i go to home");
//         }
//     },4000);
// };
//
// let doTheHomework=(homework,cb)=>{
//     setTimeout(()=>{
//         if(homework===true){
//             cb(null, "Ow..i go to do homework");
//         }
//         else {
//             cb("I don't have a homework, i can relax)");
//         }
//     },1500);
// }
//
// let  watchingSerials=(time,cb)=>{
//     setTimeout(()=>{
//         if(time<12){
//             cb(null, "I go to watch new series");
//         }
//         else {
//             cb("I go to try sleep");
//         }
//     },2700);
// }
//
// let goToSleep=(tired,cb)=>{
//     setTimeout(()=>{
//         if(tired===false){
//             cb(null, "I don't want sleep");
//         }
//         else {
//             cb("I go to sleep");
//         }
//     },1000);
// }
//
// wakeUp(8,(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
//     lunch('soup',(err,data)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log(data);
//         }
//         goToCollege('good',(err,data)=>{
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log(data);
//             }
//             goToWalk(false,(err,data)=>{
//                 if(err){
//                     console.log(err);
//                 }
//                 else{
//                     console.log(data);
//                 }
//                 watchingSerials(11,(err,data)=>{
//                     if(err){
//                         console.log(err);
//                     }
//                     else{
//                         console.log(data);
//                     }
//                     goToSleep(true,(err,data)=>{
//                         if(err){
//                             console.log(err);
//                         }
//                         else{
//                             console.log(data);
//                         }
//                     })
//                 })
//             })
//         })
//     })
// })

/////////////////Promises and async await/////////////////////////////

let wakeUp = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time < 7) {
                reject('Yeah, i can sleep');
            } else {
                resolve('I should wake up...(');
            }
        }, 3000);
    })

}

let lunch = (meal) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (meal === 'fast food') {
                resolve("Yeah,it is very deliciously");
            } else {
                reject("I don't want eat it");
            }
        }, 2000)
    })

}

let goToCollege = (mood) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (mood === 'good') {
                resolve("I want to college,cool");
            } else {
                reject("I have a bad mood, i don't want study");
            }
        }, 3500);
    })
}

let goToWalk = (tired) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (tired === false) {
                resolve("Yeah, i go to walk with friends");
            } else {
                reject("I very tired, i go to home");
            }
        }, 4000);
    })
};

let doTheHomework = (homework) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (homework === true) {
                resolve("Ow..i go to do homework");
            } else {
                reject("I don't have a homework, i can relax)");
            }
        }, 1500);
    })
}

let watchingSerials = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time < 12) {
                resolve("I go to watch new series");
            } else {
                reject("I go to try sleep");
            }
        }, 2700);
    })
}

let goToSleep = (tired) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (tired === false) {
                reject("I don't want sleep");
            } else {
                resolve("I go to sleep");
            }
        }, 1000);
    })
}

async function async() {
    try {
        let wake = await wakeUp(8);
        console.log(wake);
        let eating = await lunch('fast food');
        console.log(eating);
        let college = await goToCollege('good');
        console.log(college);
        let walk = await goToWalk(true);
        console.log(walk);
        let homework = await doTheHomework(true);
        console.log(homework);
        let serials = await watchingSerials(11);
        console.log(serials);
        let sleep = await goToSleep(true);
        console.log(sleep);
    } catch (e) {
        console.log(e)
    }
}

async();

wakeUp(8).then(value => {
    console.log(value);
    return lunch('soup');
})
    .then(value => {
        console.log(value);
        return goToCollege('good');
    })
    .then(value => {
        console.log(value);
        return goToWalk(false);
    })
    .then(value => {
        console.log(value);
        return doTheHomework(true);
    })
    .then(value => {
        console.log(value);
        return watchingSerials(9);
    })
    .then(value => {
        console.log(value);
        return goToSleep(true);
    })
    .then(value => console.log(value))
    .catch(error=>console.log(error));


