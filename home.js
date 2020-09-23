// utility functions
function accessStorage(value) {
    try {
        let storage = JSON.parse(localStorage.getItem('appStorage'));
        return storage[value];
    }
    catch (error){
        console.error(`${value} does not exist. || ${error}`)
    }
}

function displayAllPosts(){
    let posts = accessStorage('posts');

    if (posts.length > 0){
        posts.forEach((post, i) => {
            let newPost = document.createElement('div');
            let title = document.createElement('h4');
            let body = document.createElement('p');
            let deleteBtn = document.createElement('button')
            let editBtn = document.createElement('button')

            deleteBtn.innerHTML = 'Delete';
            editBtn.innerHTML = 'Edit';

            deleteBtn.className= `delBtn postBtn ${i}`;
            editBtn.className = `editBtn postBtn ${i}`;

            newPost.className = `post ${i}`;
            newPost.style.border = '1px solid #838d8a'
            newPost.style.padding = '2%';
            newPost.style.borderRadius = '15px';
            newPost.style.marginBottom = '1%';
            

            title.innerHTML = post.title
            body.innerHTML = post.body;

            newPost.appendChild(title)
            newPost.appendChild(body)
            newPost.appendChild(deleteBtn)
            newPost.appendChild(editBtn)

            document.querySelector('#blog').appendChild(newPost)
        });
    } else {
        let noContent = document.createElement('div');
        let body = document.createElement('p');

        body.innerHTML = "There are no posts to show!"
        noContent.appendChild(body)

        document.querySelector('#blog').appendChild(noContent);
    }
}

function deletePost() {
    let deleteButtons = document.querySelectorAll('.delBtn');

    let storage = JSON.parse(localStorage.getItem('appStorage'));
    let { posts } = storage;

    deleteButtons.forEach((btn, index) => {
        btn.onclick = function () {
            posts.splice(index, 1);
            storage[posts] = posts;
            localStorage.setItem("appStorage", JSON.stringify(storage));
            displayAllPosts();
            location.reload()
        }
    })
}

function editPost() {
    let editButtons = document.querySelectorAll('.editBtn');

    let storage = JSON.parse(localStorage.getItem('appStorage'));
    let { posts } = storage;

    editButtons.forEach((btn, index) => {
        btn.onclick = function(){
            const updatedTitle = prompt(`title: ${this.parentElement.children[0].innerText}`)
            const updatedBody = prompt(`body: ${ this.parentElement.children[1].innerText}`)
            const updatedPost = {
                title: updatedTitle,
                body: updatedBody
            }
            posts.splice(index, 1, updatedPost);
            localStorage.setItem("appStorage", JSON.stringify(storage));
            displayAllPosts();
            location.reload()
        }
    }) 
}

displayAllPosts();
deletePost();
editPost();

function logout(){
    // TODO: destroy token
    window.location.replace("login.html");
}