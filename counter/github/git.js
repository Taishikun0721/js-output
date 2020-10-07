const userId = 'Taishikun0721';
const result = fetch(`https://api.github.com/users/${encodeURIComponent(userId)}/repos`);
result.then(response => {
    console.log(response);
})
