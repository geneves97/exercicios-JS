
const array = [];

function removeDuplicate(array){

    let cleanArray = array.filter(function(value, content) {
        return array.indexOf(value) === content;
    });
    
    console.log(cleanArray); 
    
}
removeDuplicate([1, 1, 2, 2, 3, 3, 4 ,5, 1, 2, 3])