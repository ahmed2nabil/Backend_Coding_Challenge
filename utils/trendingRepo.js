const fetch = require('node-fetch');

exports.getTrendingRepo = async function() {
    let count = [];
    const url = "https://api.github.com/search/repositories?q=created:>2021-07-17&per_page=100&sort=stars&order=desc"
    const response = await fetch(url);
    const result = await response.json();
for(let i =0 ; i< 100;i++){
        count.push(result.items[i]);
}

return count;
};