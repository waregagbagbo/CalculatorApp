//declare global vars
let toDisplay = false;
let operator= null;
let firstValue = null;


// create DOM for the display
const result = document.getElementById('display');
const equalBtn = document.getElementById("equals");
const resetBtn =  document.getElementById('clear');
const numberBtn = document.querySelectorAll('.number');
const deleteBtn = document.getElementById('delete')
const operatorBtn = document.querySelectorAll('.operator');
const decimalBtn = document.querySelector('#decimal');

// EventListeners to display on screen
result.addEventListener('click',function(){
    result.textContent = "0"
})

// delete button
deleteBtn.addEventListener('click',() =>{
    if (result.textContent !== '0') {
        result.textContent = result.textContent.slice(0, -1);
        if (result.textContent === '') {
          result.textContent = '0';
        }
      }
});

// set the clear button to reset the display when clicked
resetBtn.addEventListener('click',() =>{
    firstValue = null;
    operator = null;
    toDisplay = false;
    result.textContent = "0";
});
// set the decimal button
decimalBtn.addEventListener('click',() => {
    if (!result.textContent.includes('.')) {
        result.textContent += '.';
    }
});


// loop through the buttons for numbers
numberBtn.forEach(btn =>{
    btn.addEventListener('click',() => appendNumber(btn.textContent));
});
// set the equal button
equalBtn.addEventListener('click',() => {
    evaluate();
    firstValue = null;
    operator = null;
});

// create the function for number click
function appendNumber(number){
    if(result.textContent === '0' || toDisplay){
        result.textContent = number;
        toDisplay = false;
    }
    else{
        result.textContent += number
    }
}

// loop through the buttons for operators
operatorBtn.forEach((btn) =>{
    btn.addEventListener('click',() => setOperator(btn.textContent));
});

// create a function to set the operator
function setOperator(nextOperator) {
    if (operator !== null) evaluate();
    firstValue = result.textContent;
    operator = nextOperator;
    result.textContent += `${operator}`
    toDisplay = true;
  }

function evaluate(){
    if(operator === null || toDisplay) return;
    let secondValue = parseFloat(result.textContent);
    result.textContent = operations(firstValue, operator, secondValue);
    toDisplay = true; // set to display
}

// create a function to handle the operators.
function operations(a,operator, b){
    let first = parseFloat(a); // convert to float
    let second = parseFloat(b); // convert to float
    if(isNaN(first) || isNaN(second)) // check if the values are numbers
        return ''; // return empty string if not numbers
    // use switch case
    switch(operator){
        case "+":
            return first + second;
        case "-":
            return first - second;
        case "*":
            return first * second;

        case "/":
            return first / second;
            

        default:
            return 'Error'            
    }    
}
