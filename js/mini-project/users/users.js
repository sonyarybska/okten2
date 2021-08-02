const usersBox = document.getElementById('users-box');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(data => data.map(value => {
            const user = document.createElement('div');
            user.className = 'oneUser';
            const btn = document.createElement('button');
            const link = document.createElement('a');
            btn.innerText = 'Details';
            btn.className = 'btn';
            link.href = `../user-details/user-details.html?user=${JSON.stringify(value)}`;  //Спосіб з location
            usersBox.appendChild(user);
            const {id, name} = value;
            user.innerHTML = `<h3>${id}-${name}</h3>`;
            user.appendChild(link);
            link.appendChild(btn);
            // btn.onclick = () => {
            //     localStorage.setItem('user', JSON.stringify(value));                //Спосіб з localStorage
            // };
        })
    );