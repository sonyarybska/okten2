let postDetailsBox=document.getElementById('post-details-box');
// const json=localStorage.getItem('post');  //localStorage
// const post=JSON.parse(json);

const url=new URL(location);               //location
const json=url.searchParams.get('post');
const post=JSON.parse(json);
console.log(post);

for (const item in post) {
    postDetailsBox.innerHTML+=`<h3>${item}:${post[item]}</h3>`;
}

let commentsBox=document.getElementById('comments-box');

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
.then(value => value.json())
.then(data=>data.map(value => {
    const oneComment=document.createElement('div');
    oneComment.className='oneComment';

    for (const comment in value) {
       oneComment.innerHTML+=`<h3>${comment}:${value[comment]}</h3>`;
       commentsBox.append(oneComment);
    }
}))