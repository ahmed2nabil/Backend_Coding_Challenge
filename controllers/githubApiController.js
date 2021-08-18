const { getTrendingRepo } = require('../utils/trendingRepo');


exports.getAllRepos = async (req,res,next) => {
    let AllListofRepos = await getTrendingRepo();
    let listofLanguage = [];
   const Repos = AllListofRepos.filter(repo => repo.language !== null);
//  const SortedRepos =Repos.sort((Repos,b) => (Repos.language > b.language ? 1: -1));
 const languages = Repos.map((repo) => {return repo.language});
const langRepo = getAllTrendingLangRepo(Repos,languages);
  res.status(200).json(langRepo);   
}

function getAllTrendingLangRepo(array,langs) {
    let obj = {};
let counter = 0;
langs.forEach(element => {
    if(!obj[element])
{
    counter = 0;
    obj[element] = {count : counter ,repos :[]};
}
else {
    counter++;
obj[element].count =  counter;
    }
})
    array.forEach(element => {
        obj[element['language'].repos].push(element['full_name']);
    })
return obj;
}