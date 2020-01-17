// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/

function addExcitement(theWordArray, character) {

    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        buildMeUp += " " + sentence[i]
        if (i % 3 === 2) {
            buildMeUp += character
        }
        console.log(buildMeUp);
    }
}

addExcitement(sentence, "?");

/*
adds one more word to the sentence above each time, adding a "!" after 
every 3rd word 
*/

/*
added var "character" so that any character can be added to the end of every 3rd word
*/