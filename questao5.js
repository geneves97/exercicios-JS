let array = []
let parametro = []

function clearArray(array,parametro){

    
    let arrayClean = array.filter(function (element, index, array) {
        if (parametro.indexOf(element) == -1)
            return element;
    });
    
    console.log(array);
    console.log(arrayClean);
}

clearArray([1,2,3,4,5],[1,5]);