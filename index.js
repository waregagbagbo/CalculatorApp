//declare global vars
let toDisplay = false; // determine if next input should replace the current display
let operator= null; // store the operator
let firstValue = null; // stores the first operand


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
        let currntDisplay = result.textContent; // get the current display
        result.textContent = currntDisplay + '.'; // append the decimal to the display
        toDisplay = false; // set to display   
        //result.textContent = '0.';
        //toDisplay = false; // set to display
    }
    else if(!result.textContent.includes('.') || 
    (operator !== null && !result.textContent.split(operator).pop().includes('.'))){
         // This checks if there's no decimal in the current number
        // If an operator exists, it checks only the part after the operator
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
    if (operator !== null) evaluate();
    firstValue = result.textContent; // store the first operand
    operator = nextOperator; 
    toDisplay = true; // set to display
    // check if the operator is not null
   if (nextOperator !== null) { // ensure nextOperator is valid
        operator = nextOperator; // store the operator clicked
        result.textContent += `${operator}`; // display the operator
        toDisplay = true; // set to display
    }
}

function evaluate(){
    if(operator === null || toDisplay) return;
    let secondValue = result.textContent.split(operator).pop(); // get the second operand
    result.textContent = operations(firstValue, operator, secondValue);
    toDisplay = true; // set to display
}
// create a function to handle the operators.
function operations(a,operator, b){
    let first = parseFloat(a); // convert to float
    let second = parseFloat(b); // convert to float
    if(isNaN(first) || isNaN(second)) // check if the values are numbers
        return ''; // return empty string if not numbers

    let calResult= 0; // store the result
    
    // use switch case
    switch(operator){
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
            calResult = first / second;            
            break;

        default:
            return 'Error'            
    }    
    // format result to handle decimal places
  return calResult.toFixed(); // format to 4 decimal places
}