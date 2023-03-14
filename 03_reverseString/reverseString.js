const reverseString = function(someString) {
    const stringList = someString.split("");
    const listLen = stringList.length;
    let newWord = "";
    for (i = listLen - 1; i >= 0; i--) {
        newWord += stringList[i];
    }
    return newWord;
};

// Do not edit below this line
module.exports = reverseString;
