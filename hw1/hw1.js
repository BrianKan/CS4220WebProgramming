
// Brian Kan CS4220 304324155

// Question 1

let upperCaseObject={
    "a":"A",
    "b":"B",
    "c":"C",
    "d":"D",
    "e":"E",
    "f":"F",
    "g":"G",
    "h":"H",
    "i":"I",
    "j":"J",
    "k":"K",
    "l":"L",
    "m":"M",
    "n":"N",
    "o":"O",
    "p":"P",
    "q":"Q",
    "r":"R",
    "s":"S",
    "t":"T",
    "u":"U",
    "v":"V",
    "w":"W",
    "x":"X",
    "y":"Y",
    "z":"Z",
}

let lowerCaseObject={
    "A":"a",
    "B":"b",
    "C":"c",
    "D":"d",
    "E":"e",
    "F":"f",
    "G":"g",
    "H":"h",
    "I":"i",
    "J":"j",
    "K":"k",
    "L":"l",
    "M":"m",
    "N":"n",
    "O":"o",
    "P":"p",
    "Q":"q",
    "R":"r",
    "S":"s",
    "T":"t",
    "U":"u",
    "V":"v",
    "W":"w",
    "X":"x",
    "Y":"y",
    "Z":"z",
}

function upperCase(string){
    let upperCaseString=""
    for(i=0;i<string.length;i++){
        if(upperCaseObject[string[i]]!=undefined){
            upperCaseString+=upperCaseObject[string[i]]
        }
        else{
            upperCaseString+=string[i]
        }
      }
      return upperCaseString
}

function lowerCase(string){
    let lowerCaseString=""
    for(i=0;i<string.length;i++){
        if(lowerCaseObject[string[i]]!=undefined){
            lowerCaseString+=lowerCaseObject[string[i]]
        }
        else{
            lowerCaseString+=string[i]
        }
      }
      return lowerCaseString
}

//Custom Upper Case Function - Capitalizes first letter of word and returns as string
function capCase(string){
    let capCaseString=""
    for(i=0;i<string.length;i++){
        if(upperCaseObject[string[i]]!=undefined&&i==0){
            capCaseString+=upperCaseObject[string[i]]
        }
        else{
            capCaseString+=string[i]
        }
      }
      return capCaseString
}

function sentenceCase(string, unconditionallyCapitalized){
    
}
// Question 1 Output Function
// function runStringFunctions(){
    let str = 'I watched the storm, so beautiful yet terrific. The face of the moon was in shadow.'
    
//     let unconditionallyCapitalized = ['I', 'Moon', 'Shadow']
//     let lowercaseWords = ['the', 'of', 'in', 'an']
    
    console.log( 'upperCase: ', upperCase(str) )
    console.log( 'lowerCase: ', lowerCase(str) )
    console.log(capCase("thisstring"))
//     console.log( 'sentenceCase: ', sentenceCase(str, unconditionallyCapitalized) )
//     console.log( 'capitalizedCase: ', capitalizedCase(str) )
//     console.log( 'alternatingCase: ', alternatingCase(str) )
//     console.log( 'titleCase: ', titleCase(str, lowercaseWords) )
//     console.log( 'inverseCase: ', inverseCase(str) )
// } 


// Question 2 
function getCharacterFrequency(string) {
   
    let obj = {}
    
    for(i=0;i<string.length;i++){
        if(obj[string[i]]==null){
            obj[string[i]]=1;
        }
        else{
            obj[string[i]]++
        }
    }
    return obj
}

function printCharacterFrequency(object){
    for(let property in object){
        console.log("'"+property+"' occurs "+ object[property] +" times")
    }
}


//  Question 2 Output Function
function runCharacterFunctions(){

    let str = 'Hello, World!'
    
    let frequencyObj = getCharacterFrequency( str )
    
    printCharacterFrequency( frequencyObj )

}

runCharacterFunctions()