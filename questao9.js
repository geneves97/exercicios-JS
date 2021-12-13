let array = []
let newlength

function splitArray(array, newlength){
    while(array.length) {
        console.log(array.splice(0,newlength));
    }
}

splitArray([1, 2, 3, 4, 5], 2)