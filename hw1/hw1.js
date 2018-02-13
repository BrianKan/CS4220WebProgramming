
// Brian Kan CS4220 304324155

// Question 1

let upperCaseObject = {
    "a": "A",
    "b": "B",
    "c": "C",
    "d": "D",
    "e": "E",
    "f": "F",
    "g": "G",
    "h": "H",
    "i": "I",
    "j": "J",
    "k": "K",
    "l": "L",
    "m": "M",
    "n": "N",
    "o": "O",
    "p": "P",
    "q": "Q",
    "r": "R",
    "s": "S",
    "t": "T",
    "u": "U",
    "v": "V",
    "w": "W",
    "x": "X",
    "y": "Y",
    "z": "Z",
}

let lowerCaseObject = {
    "A": "a",
    "B": "b",
    "C": "c",
    "D": "d",
    "E": "e",
    "F": "f",
    "G": "g",
    "H": "h",
    "I": "i",
    "J": "j",
    "K": "k",
    "L": "l",
    "M": "m",
    "N": "n",
    "O": "o",
    "P": "p",
    "Q": "q",
    "R": "r",
    "S": "s",
    "T": "t",
    "U": "u",
    "V": "v",
    "W": "w",
    "X": "x",
    "Y": "y",
    "Z": "z",
}

function upperCase(string) {
    let upperCaseString = ""
    for (let i = 0; i < string.length; i++) {
        if (upperCaseObject[string[i]] != undefined) {
            upperCaseString += upperCaseObject[string[i]]
        }
        else {
            upperCaseString += string[i]
        }
    }
    return upperCaseString
}

function lowerCase(string) {
    let lowerCaseString = ""
    for (let i = 0; i < string.length; i++) {
        if (lowerCaseObject[string[i]] != undefined) {
            lowerCaseString += lowerCaseObject[string[i]]
        }
        else {
            lowerCaseString += string[i]
        }
    }
    return lowerCaseString
}

//Custom Upper Case Function - Capitalizes first letter of word and returns as string
function capCase(string) {
    let capCaseString = ""
    for (let i = 0; i < string.length; i++) {
        if (upperCaseObject[string[i]] != undefined && i == 0) {
            capCaseString += upperCaseObject[string[i]]
        }
        else {
            capCaseString += string[i]
        }
    }
    return capCaseString
}

function inverseCapCase(string) {
    let capCaseString = ""
    for (let i = 0; i < string.length; i++) {
        if (lowerCaseObject[string[i]] != undefined && i == 0) {
            capCaseString += lowerCaseObject[string[i]]
        }
        else if (upperCaseObject[string[i]] != undefined && i != 0) {
            capCaseString += upperCaseObject[string[i]]
        }
        else {
            capCaseString += string[i]
        }
    }
    return capCaseString
}

function titleCase(string, lowercaseWords) {
    let resultingString = string.split(" ")
    for (index in resultingString) {
        if (findInArray(resultingString[index], lowercaseWords)) {
            resultingString.splice(index, 1, lowerCase(resultingString[index]))
        }
        else {
            resultingString.splice(index, 1, capCase(resultingString[index]))
        }
    }
    return resultingString.join(" ")
}

function sentenceCase(string, unconditionallyCapitalized) {
    let resultingString = string.split(" ")
    for (index in resultingString) {
        if (findInArray(resultingString[index], unconditionallyCapitalized)) {
            resultingString.splice(index, 1, capCase(resultingString[index]))
        }
    }
    return resultingString.join(" ")
}

function capitalizedCase(string) {
    let resultingString = string.split(" ")
    for (index in resultingString) {
        resultingString.splice(index, 1, capCase(resultingString[index]))
    }
    return resultingString.join(" ")
}

function inverseCase(string) {
    let resultingString = string.split(" ")
    for (index in resultingString) {
        resultingString.splice(index, 1, inverseCapCase(resultingString[index]))
    }
    return resultingString.join(" ")
}

function findInArray(string, array) { // Finds an element in the array and returns true if it does
    for (word in array) {
        if (caseInsensitiveComparison(prepareString(string), array[word])) {
            return true;
        }
    }
    return false;
}

function prepareString(string) {  // Deletes Punctuation from a single string
    let newString = string.replace(/\,/g, "")
    newString = newString.replace(/\./g, "")
    return newString
}

function caseInsensitiveComparison(string1, string2) { // Case-insenstive comparator between strings
    return upperCase(string1) == upperCase(string2)
}

function alternatingCase(string) {
    let resultingString = ""
    for (let i = 0; i < string.length; i++) {
        if (i % 2 == 0) {
            resultingString += lowerCase(string[i])
        }
        else {
            resultingString += upperCase(string[i])
        }
    }
    return resultingString
}

// Question 1 Output Function
// function runStringFunctions(){
let str = 'I watched the storm, so beautiful yet terrific. The face of the moon was in shadow.'

let unconditionallyCapitalized = ['I', 'Moon', 'Shadow']
let lowercaseWords = ['the', 'of', 'in', 'an']

console.log('upperCase: ', upperCase(str))
console.log('lowerCase: ', lowerCase(str))
console.log('sentenceCase: ', sentenceCase(str, unconditionallyCapitalized))
console.log('capitalizedCase: ', capitalizedCase(str))
console.log('alternatingCase: ', alternatingCase(str))
console.log('titleCase: ', titleCase(str, lowercaseWords))
console.log('inverseCase: ', inverseCase(str))
// } 


// Question 2 
function getCFrequency(string) {

    let obj = {}

    for (i = 0; i < string.length; i++) {
        if (obj[string[i]] == null) {
            obj[string[i]] = 1;
        }
        else {
            obj[string[i]]++
        }
    }
    return obj
}

function getCharacterFrequency(string) {

    let obj = {}
    let capped=upperCase(string)
//Babble
    for (i = 0; i < capped.length; i++) {
        if (obj[capped[i]] == null) {
            obj[capped[i]] = 1;
        }
        else {
            obj[capped[i]]++
        }
    }
    return obj
}

function printCharacterFrequency(object) {
    for (let property in object) {
        console.log("'" + property + "' occurs " + object[property] + " times.")
    }
}


//  Question 2 Output Function
function runCharacterFunctions() {

    let str = 'Hello, World!'

    let frequencyObj = getCharacterFrequency(str)

    printCharacterFrequency(frequencyObj)

}

runCharacterFunctions()