

//function findKey.js
const findKey = function(object,callback){
  for(key in object){
    if(callback(object[key])){
      return key;
    }
  }
  return undefined; // if not found return this
};



module.exports = findKey;