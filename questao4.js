let array =[["c",2],
            ["d",4]]

function concatarray(){
    
    const createObj = (accumulator, [key, value]) => {
        accumulator[key] = value
        return accumulator
    }
    const arrayToObj = array.reduce(createObj,{})
    console.log(arrayToObj)
}

concatarray()