let array1 = []
let array2 = []

function cathTheSame(array1,array2){
    
    array2 = array1.filter(item => array2.includes(item))
    console.log(array2);
    
}

cathTheSame([6, 8], [8, 9])