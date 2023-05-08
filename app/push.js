const arrayPush = (arrayExample, ...objects) => {
  return [...arrayExample, ...objects];
};

let myArray = ["hi"];
const word = ["Carlos"];
console.log(arrayPush(myArray, word));
console.log(arrayPush(myArray, word).length);

export default arrayPush;
