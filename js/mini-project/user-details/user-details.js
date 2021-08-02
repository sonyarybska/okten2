const userDetailsBox = document.getElementById('user-details-box');

// const json = localStorage.getItem('user');   //localStorage
// const user = JSON.parse(json);

const url = new URL(location);                 //location
const json = url.searchParams.get('user');
const user = JSON.parse(json);
console.log(user);

//Зробила двома способами виведення

//Перший

// let {
//     id,
//     name,
//     username,
//     email,
//     address: {street, suite, city, zipcode, geo: {lat, lng}},
//     phone,
//     website,
//     company: {catchPhrase, bs}
// } = user;
// userDetailsBox.innerHTML = `<h3>id:${id}</h3> <h3>name:${name}</h3> <h3>username:${username}</h3> <h3>email:${email}</h3>  <h3>street:${street}</h3>
// <h3>suite:${suite}</h3> <h3>city:${city}</h3> <h3>zipcode:${zipcode}</h3> <h3>lat:${lat}</h3>  <h3>lng:${lng}</h3> <h3>phone:${phone}</h3>
// <h3> website:${website}</h3> <h3> company:${user.company.name}</h3>  <h3>catchPhrase:${catchPhrase}</h3>  <h3>bs:${bs}</h3>`;

//Другий

for (const item in user) {

    if (item !== 'address' && item !== 'company') {
        userDetailsBox.innerHTML += `<h3>${item}: ${user[item]}</h3> `;
    } else {
        for (const itemElement in user[item]) {
            let one = user[item];

            if (itemElement !== 'geo') {
                userDetailsBox.innerHTML += `<h3>${itemElement}: ${one[itemElement]}</h3> `;
            } else {
                for (const oneElement in one[itemElement]) {
                    let geo = one[itemElement];
                    userDetailsBox.innerHTML += `<h3> ${oneElement}: ${geo[oneElement]} </h3> `;
                }
            }
        }
    }
}

const btn = document.getElementById('btn');

btn.onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(data => {
            const postBox = document.getElementById('post-box');
            postBox.innerHTML = '';
            data.map(value => {
                const onePost = document.createElement('div');
                onePost.className = 'onePost';
                const link = document.createElement('a');
                const btn2 = document.createElement('button');
                btn2.innerHTML = 'Post details';
                btn2.className = 'post-btn';
                onePost.innerHTML += `<h4>${value.title}</h4>`;
                link.append(btn2);
                link.href = `../post-details/post-details.html?post=${JSON.stringify(value)}`; //location
                onePost.append(link);
                postBox.append(onePost);

                // btn2.onclick=()=>{
                //     localStorage.setItem('post',JSON.stringify(value));       //localStorage
                // }

            });
        });
};