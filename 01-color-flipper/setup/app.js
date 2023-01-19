
// create an array called 'colors' which has different color values.
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// create function to randomly pick one of the values from array 'çolors'
function randomcolor() {
    const randomIndex = Math.floor(Math.random()*colors.length);
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

// getElementById() method is used to return an element to read/edit an HTML element.
// getElementById() is to specify where the event happens.
// syntex: element.addEventListener(event, function, useCapture)
document.getElementById("btn").addEventListener('click', actionToPerform);

