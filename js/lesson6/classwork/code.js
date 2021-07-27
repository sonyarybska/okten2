//1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(data => data.map(value => {
        let divka = document.getElementsByClassName('post-box')[0];
        let onePost = document.createElement('div');
        divka.append(onePost);
        onePost.style.display = 'flex';
        onePost.style.alignItems = 'center'
        let btn = document.createElement('button');
        btn.innerText = "Post's comments";
        btn.style.height = '40px';
        onePost.innerHTML += `<p>${value.id}-${value.body}</p>`;
        onePost.append(btn);

        btn.onclick = () => {

            fetch('https://jsonplaceholder.typicode.com/comments/?postId=' + value.id)
                .then(value => value.json())
                .then(data => {
                    let divka2 = document.getElementsByClassName('comment-box')[0];
                    divka2.innerHTML = '';
                    data.map(value => {
                        let commentsDiv = document.createElement('div');
                        commentsDiv.innerText = `${value.id}-${value.body}`
                        commentsDiv.style.width='400px'
                        divka2.append(commentsDiv);
                    })
                })
        }
    }))