
function rot13(str) {
    let alphabetArray = ["A", "B", "C", "D", "E", "F", "G",
                    "H", "I", "J", "K", "L", "M", "N",
                    "O", "P", "Q", "R", "S", "T", "U",
                    "V", "W", "X", "Y", "Z"];

    let decodedArray = [];
    let newStr = str.toUpperCase();

    /* This loops through str, and identifies the letter 13 steps to the right.
    It starts at the beginning of the alphabet again to complete the remaining 'steps' */
    for(var i = 0; i < newStr.length; i++){

        /* Locates where the current letter falls in the alphabet */
        let step = alphabetArray.indexOf(newStr[i]);

        /* Get's the location of 'Z' */
        let lastLetter = alphabetArray.indexOf(alphabetArray[alphabetArray.length - 1]);

        /* The amount of steps a letter is shifted as part of the ROT cypher */
        let rotSteps = 13;

        /* Checks if the current iteration is on a letter or not;
        if it isn't, push to the array; if it is, go through and check where
        the letter would fall when moved 13 spaces. If it goes past "Z",
        start over at the beginning and go for the remaining 'steps' */
        if(!alphabetArray.includes(newStr[i])){
            decodedArray.push(newStr[i]);
        } else if(alphabetArray.includes(newStr[i])){
            if(alphabetArray[step + 13]  == undefined){
                
                let lettersTraveled = lastLetter - step;
                let stepsLeft = rotSteps - lettersTraveled;
                decodedArray.push(alphabetArray[(0 + stepsLeft) - 1])

            } else if(alphabetArray[step + 13] !== -1){
                decodedArray.push(alphabetArray[step + 13])
            }
            
        }
    };

    let decodedStr = decodedArray.join("")
    console.log(decodedStr)
    

    return decodedStr;
}

/* DOM selectors for the relavent elements */
const encodeDecodeButton = document.getElementById("encode-button");
const resetButton = document.getElementById("reset-button");
const userInput = document.getElementById("user-input")

encodeDecodeButton.addEventListener("click", function(){

    let encodedPhrase = rot13(userInput.value);
    userInput.value = encodedPhrase;

});

resetButton.addEventListener("click", function(){
    userInput.value = "";
});