console.log("FOURTH TASK----------------------" + "\n");

async function userAdmin() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const response2 = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!response.ok || !response2.ok) {
            throw new Error("Failed to fetch data from the API");
        }
        const users = await response.json();
        const posts = await response2.json();

        let totalPosts = 0;
        users.forEach(user => {
            const userPosts = posts.filter(post => post.userId === user.id);
            totalPosts += userPosts.length; // why it gives 100, i think 10 user each has 10 post so total 100 post
        });

        const combinedData = users.map(user => {
            const userPosts = posts.filter(post => post.userId === user.id);
            return {
                ...user,
                posts: userPosts
            };
        });

        // totalPosts = Math.sqrt(totalPosts); isko 10 bnane ke liye but 100 is correct

        console.log(combinedData, `Total number of posts: ${totalPosts}`);
    }
    catch (error) {
        console.log(error);
    }
}
userAdmin();
