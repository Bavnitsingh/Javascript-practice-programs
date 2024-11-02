function fetchPostData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Post Data fetched Successfully!")
        }, 2000);
    })
}
function fetchCommentData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Comment Data fetched.")
        }, 4000);
    })
}
async function getBlogData() {
    try {
        console.log("Fetching Blog Data...");
        // const blogData = await fetchPostData();
        // const CommentData = await fetchCommentData();
       const [blogData,CommentData] = await Promise.all([fetchPostData(), fetchCommentData()]);
        console.log(blogData);
        console.log(CommentData);

        console.log("Fetch Complete.");
        
    } catch (error) {
        console.error("Error fetching Blog data.", error);
    }
}
getBlogData();