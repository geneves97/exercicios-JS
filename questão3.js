let array = [1,2,'', undefined]

function cleararray(){

    let arrayClean = array.filter(function(i){
        return i;
    }) 
    console.log(array)
    console.log(arrayClean)
}
cleararray()