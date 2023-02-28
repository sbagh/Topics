const posts = [
    {title: 'Post one', body: 'this is post one'},
    {title: 'Post two', body: 'this is post 2'}
];

function getPosts() {
    setTimeout(() => {
        let output = ''
        posts.forEach((post, index)=>{
            output += `<li>${post.title}</li>`
        } )
        document.body.innerHTML = output
    }, 1000)
}


// create promise inside function with a resolve and reject
function  createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            posts.push(post)

            const error = false

            if(!error) {
                resolve()
            } else {
                reject ('something went wrong')
            }
        },2000)
    })
}

// if resolved, run getPosts using .then, if not, catch error:

// createPost({title: 'post3', body:'this is post 3'})
//     .then(getPosts)
//     .catch(err => console.log(err))


// if you have many promises, dont just .then all of them, can just
// use Promise.all

const promise1 = Promise.resolve('Hello World')
const promise2 = 10
const promise3 = new Promise((resolve, reject) =>
    setTimeout(resolve, 2000, 'goodbye'))

Promise.all([promise1, promise2, promise3]).then(values => console.log(values))


