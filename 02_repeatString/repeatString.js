const repeatString = function(string, repeatTime) {
    let word = "";
    for(i = 1; i <= repeatTime; i++){
        word += string;
    }
    return (repeatTime < 0) ? "ERROR" : word;
};

repeatString("hey", 3);

// Do not edit below this line
module.exports = repeatString;
