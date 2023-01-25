
const hexDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// create an array called 'hexDigits' which consists of hex values.

function generateRandomHexCode () {
// create function to randomly pick 6 values from array 'hexDigits'and store in 'hexCode' variable.
    let hexCode = "#"; // define 'hexCode'to store values from 'For Loop' statement.
    for (let i = 0; hexCode.length < 7; i++){
        const randomNumber = Math.random() * hexDigits.length;
        console.log("randomNumber",randomNumber)
        const randomIndex = Math.floor(randomNumber);
        console.log("randomIndex",randomIndex)
        hexCode += hexDigits[randomIndex];
        console.log("hexCode",hexCode)
    }
    return hexCode
}

const actionToPerform = () => { // create arrow function.
    const pickedColor = generateRandomHexCode() //store the generated 'hexCode' to 'pickedColor' variable.
    console.log("pickedColor",pickedColor)
    document.getElementById("backgroundContainer").style.backgroundColor = pickedColor; // change background color.
    document.getElementsByClassName("colorTxt")[0].innerHTML = pickedColor; // change the text.
}

document.getElementById("btn").addEventListener('click', actionToPerform);

