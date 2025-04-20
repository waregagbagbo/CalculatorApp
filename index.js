//declare global vars
let toDisplay = false; // determine if next input should replace the current display
let operator= null; // store the operator
let firstValue = null; // stores the first operand


const toggle = document.getElementById('toggle');
const circle = document.getElementById('circle');

// Get saved mode from localStorage
let isLightMode = localStorage.getItem('mode') !== 'dark'; // true by default (light mode)

// Apply initial mode on page load
function applyMode() {
  if (isLightMode) {
    circle.style.transform = 'translateX(0%)';
    toggle.style.background = 'maroon';
    circle.style.background = 'black'
    document.body.style.background = '#fff';
    document.body.style.color = '#000';
  } else {
    circle.style.transform = 'translateX(100%)';
    toggle.style.background = 'orange';
    circle.style.background = 'white';
    document.body.style.background = '#111';
    document.body.style.color = '#eee';
  }
}

applyMode();

toggle.addEventListener('click', () => {
  isLightMode = !isLightMode;
  localStorage.setItem('mode', isLightMode ? 'light' : 'dark');
  applyMode();
});



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
    if(toDisplay){   
        result.textContent = '0';
    }
    else if(!result.textContent.includes('.')){
        result.textContent += '.';
    } 
    else if (operator !== null && !result.textContent.split(operator).pop().includes('.')){
        result.textContent += '.'; // Allow decimal after a new operator
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

// create the function for number to display on screen
function appendNumber(number){
    if(result.textContent === '0' || toDisplay){
        result.textContent = number;
        toDisplay = false; // maintain existing display
    }
    else{
        result.textContent += number
    }
}

// loop through the buttons for operators
operatorBtn.forEach((btn) =>{
    btn.addEventListener('click',() => setOperator(btn.textContent));
});

// create a function to set the operator for the second operand
// set the operator to the operator clicked

function setOperator(nextOperator) {
    if (operator !== null && !toDisplay){
        evaluate();
    }
    firstValue = result.textContent; // store the first operand
    operator = nextOperator;     
    result.textContent = firstValue + operator; // display the operator and first value
    toDisplay = true;
}   

function evaluate(){
    if(operator === null || firstValue === null){
        return;
    } 
    let secondValue = result.textContent;

    if (secondValue === ""){
        return;
    }
    if(firstValue !== null && secondValue !== null){
        result.textContent = operations(firstValue, operator, secondValue);
        toDisplay = true;
        firstValue = null;
        operator = null;
        }
        
    }
    

// create a function to handle the operators.
function operations(a, operator, b) {
    let first = parseFloat(a); // convert to float
    let second = parseFloat(b); // convert to float

    if (isNaN(first) || isNaN(second)) {
        return ''; // return empty string if not numbers
    }

    let calResult = 0; // store the result

    // use switch case
    switch (operator) {
        case "+":
            calResult = first + second;
            break;
        case "-":
            calResult = first - second;
            break;
        case "*":
            calResult = first * second;
            break;
        case "/":
            if (second === 0) {
                return 'Wrong Operation'; // check for division by zero
            }
            calResult = first / second;
            break;

        default:
            return 'Error';
    }

    return calResult.toString(); // Return the calculated result as a string
}