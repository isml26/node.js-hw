const posts = [{
    title: "Title1",
    detail: "Detail1"
},
{
    title: "Title2",
    detail: "Detail2"
},
];
const showPosts = () => {
posts.map(post => {
    console.log(post.title + " " + post.detail);
});
};
const setPost = (newPost) => {
const promise = new Promise((res, rej) => {
    posts.push(newPost);
    res(posts);
    //rej('Cannot add post!')
})
return promise;
};
// setPost({
//     title: "Title3",
//     detail: "Detail3"
// }).then(() => {
//     console.log('Posts');
//     showPosts();
// }).catch((err) => console.log(err));
showPosts();
const getPosts = async () => {
try {
    await setPost({title: "Title3",detail: "Detail3" });
    showPosts();
} catch (error) {
    console.log(error);
}
}
getPosts();