//1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
// кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
// Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста


fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(data => {
        let userBox = document.getElementsByClassName('user-box')[0];
        userBox.style.width = '250px'
        data.map(value => {
            let oneUser = document.createElement('div');
            let btn = document.createElement('button');
            btn.innerText = 'User posts';
            oneUser.style.display = 'flex';
            oneUser.style.justifyContent = 'space-between';
            oneUser.innerHTML = `<p>${value.name}</p>`;
            userBox.append(oneUser);
            oneUser.append(btn);

            btn.onclick = () => {
                fetch('https://jsonplaceholder.typicode.com/posts?userId=' + value.id)
                    .then(value1 => value1.json())
                    .then(data => {
                        let postBox = document.getElementsByClassName('post-box')[0];
                        postBox.style.width = '550px';
                        postBox.innerHTML='';
                        data.map(value => {
                            let onePost = document.createElement('div');
                            let btn2 = document.createElement('button');
                            btn2.innerText = 'Post comments';
                            btn2.style.width='100px';
                            onePost.style.display = 'flex';
                            onePost.style.justifyContent = 'space-between';
                            onePost.innerHTML = `<p>${value.title}</p>`;
                            postBox.append(onePost);
                            onePost.append(btn2);

                            btn2.onclick = () => {
                                console.log(value.id)
                                fetch('https://jsonplaceholder.typicode.com/comments?postId='+value.id)
                                    .then(value1 => value1.json())
                                    .then(data => {
                                        let commentBox = document.getElementsByClassName('comment-box')[0];
                                        commentBox.style.width = '400px';
                                        commentBox.innerHTML='';
                                        data.map(value => {
                                            let oneComment = document.createElement('div');
                                            oneComment.style.display = 'flex';
                                            oneComment.style.justifyContent = 'space-between';
                                            oneComment.innerHTML = `<p>${value.body}</p>`;
                                            commentBox.append(oneComment);
                                        })})
                            }
                        })
                    })
            }
        })
    })