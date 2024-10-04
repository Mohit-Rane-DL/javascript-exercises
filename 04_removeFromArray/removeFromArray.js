const removeFromArray = function(array, valueToBeRemoved, valueToBeRemoved2 = "default",
    valueToBeRemoved3 = "default", valueToBeRemoved4 = "default"
) {
    let newArray = [];

    for(let value of array){
        if((value !== valueToBeRemoved) && (value !== valueToBeRemoved2) && 
        (value !== valueToBeRemoved3) && (value !== valueToBeRemoved4)){
            newArray.push(value);
        }
    }
    return newArray;
};

removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;
