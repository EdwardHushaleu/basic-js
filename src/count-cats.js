const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let result = 0;

  backyard.forEach((element) => {
    element.forEach(function(el){
      if(el === '^^'){
      return  result++
      } else {
      return  null
      }
    })
  });

  return result;
};
