const reverseString = function(string) {
    let replacedString = string.replaceAll(",", "#");
    let stringArray = replacedString.split("");
    let reverseArray = [];
    for(i = (stringArray.length - 1); i >= 0; i--){
        reverseArray.push(stringArray[i]);
    }
    let newString = reverseArray.toString();
    let reverseString = newString.replaceAll(",", "");
    let finalReverseString = reverseString.replaceAll("#", ",")
    return finalReverseString;
};

reverseString("Hello");

// Do not edit below this line
module.exports = reverseString;
