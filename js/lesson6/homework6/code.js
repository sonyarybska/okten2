//1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
let postsBox = document.getElementsByClassName('posts-box')[0];
postsBox.innerHTML='<h1>Posts</h1>'
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(data => data.map(value=> {
            let divka = document.createElement('div');
            divka.innerText = `${value.id}-${value.title}`;
            postsBox.append(divka);
        }
    ))
//
// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/comments

let commentsBox = document.getElementsByClassName('comments-box')[0];
commentsBox.innerHTML='<h1>Comments</h1>'
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(data => data.map(value=> {
            let divka = document.createElement('div');
            divka.innerText = `${value.id}-${value.body}`;
            commentsBox.append(divka);
        }
    ))