
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
// create an array called 'colors' which has different color values.

function randomcolor() {
// create function to randomly pick one of the values from array 'çolors'

    const randomNumber = Math.random()*colors.length;
    console.log("randomNumber", randomNumber)
    const randomIndex = Math.floor(randomNumber);
    console.log("randomIndex", randomIndex)
    return colors[randomIndex];
    // previous code: return colors[Math.floor(Math.random()*colors.length)];
}

const actionToPerform = () => { // create arrow function.
    const pickedColor = randomcolor() // store randomcolor() to 'pickedColor' variable.
    document.getElementById("backgroundContainer").style.backgroundColor = pickedColor; // change background color. 
    document.getElementsByClassName("colorTxt")[0].innerHTML = pickedColor; // change text.

    // alternative code for line 15.
    // const colorClasses = document.getElementsByClassName("colorTxt");
    // const classToChangeColor = colorClasses[0];
    // const [classToChangeColor] = document.getElementsByClassName("colorTxt");
    // classToChangeColor.innerHTML = pickedColor; 
};

document.getElementById("btn").addEventListener('click', actionToPerform);
// getElementById() method is used to return an element to read/edit an HTML element.
// getElementById() is to specify where the event happens.
// syntex: element.addEventListener(event, function, useCapture)

