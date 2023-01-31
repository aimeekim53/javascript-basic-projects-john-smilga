
/* used 'document.getElementById' method to return an element to read/edit an HTML element. In this case, return 'number display'element
and store it to 'totalCount' variable */ 
const totalCount = document.getElementById("number-display");

// declare count '0' to start with
let count = 0;

// display count value.
totalCount.innerHTML = count;

// create function to decrease the value
buttonDecreaseClick = () => {
    totalCount.innerHTML = count--;
}

// create function to increase the value
buttonIncreaseClick = () => {
    totalCount.innerHTML = count++;
}

// create function to reset '0'
buttonResetClick = () => {
    count = 0;
    totalCount.innerHTML = count;
}
        
// reference: https://contactmentor.com/js-increment-counter-button-click/
// document.getElementById = access the HTML element
// .innerHTML = it affects change.
