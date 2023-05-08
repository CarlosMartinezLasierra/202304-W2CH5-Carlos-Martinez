const arrayLength = (arrayExample) => {
  let length = 0;
  while (arrayExample[length] !== undefined) 
  length++;
  return length;
};

const colorArray = ["dark", "negro", "black", "obscure"];
console.log(arrayLength(colorArray));

module.exports = arrayLength;



