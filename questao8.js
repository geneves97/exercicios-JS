let array = []

function concatArray(array){

    result = array.flat(Infinity);
    console.log(result)

}

concatArray([1, 2, [3], [4, 5]])