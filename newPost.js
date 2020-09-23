document.querySelector('#post-form').addEventListener('submit', addPost);

function addPost(e) {
    e.preventDefault()

    let store = JSON.parse(localStorage.getItem('appStorage'));
    let postTitle = document.querySelector('#post-title')
    let postBody = document.querySelector('#post-body')

    let { posts } = store;
    let newPostObj = {
        "title":  postTitle.value,
        "body": postBody.value
    }
    posts.push(newPostObj);
    store['posts'] = posts;
    localStorage.setItem('appStorage', JSON.stringify(store));
    window.location.replace('home.html');
}

