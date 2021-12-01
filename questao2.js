let array = [1, 2, 3, 4];

let invertedarray = array.map(function (item, indice, array){
  return array[array.length - indice - 1];
})

console.log(array);

console.log(invertedarray);
