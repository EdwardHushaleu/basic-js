const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(Array.isArray(members)){
    let res  = members.filter((i) => typeof i === 'string');
    let res1 = res.map(i => i.trim().toUpperCase());
    let res2 = res1.map(i => i.slice(0, 1)).sort().join(''); 
    return res2
   }else{
     return false
   }
};
