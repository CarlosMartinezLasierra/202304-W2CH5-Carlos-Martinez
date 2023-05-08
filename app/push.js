const arrayPush = (arrayExample , ...object) => {
  let push = (...arrayExample, ...object)
  return push;
}
let myArray = ["hi"];
const word = ["Carlos"];
console.log(arrayPush(myArray, word)); 
console.log(arrayPush(myArray, word).length)
module.exports = arrayPush
