//declare global vars
let toDisplay = false;
let operator= null;
let firstValue = null;


// create DOM for the display
const result = document.getElementById('display');
const equalBtn = document.getElementById("equals");
const resetBtn =  document.getElementById('clear');
const numberBtn = document.querySelectorAll('.number');
const deleteBtn = document.getElementById('delete');
const operatorBtn = document.querySelectorAll('.operator'); // Uncommented the operatorBtn

// EventListeners to display on screen
// when the display is clicked
result.addEventListener('click',function(){
    result.textContent = "0"
})

// delete button
deleteBtn.addEventListener('click',() =>{
    // check if the result is not empty
    if(result.textContent === "") return;
    // check if the result is not 0
    if(result.textContent === "0") return;
    // check if the result is not a single digit
    if(result.textContent.length === 1){
        result.textContent = "0";
        return;
    }
    // remove the last digit from the result
    result.textContent = result.textContent.slice(0,-1)
});

// set the clear button to reset the display
// when clicked
resetBtn.addEventListener('click',() =>{
    firstValue = null;
    operator = null;
    toDisplay = false;
    result.textContent = "0";
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
function setOperator(op){
    // check if the operator is not null and toDisplay is false
    // if so, evaluate the result and set the operator to null
    // and toDisplay to false
    if(operator !== null && !toDisplay){
        evaluate();
    }
    // set the operator to the button id
    operator = op;
    firstValue = result.textContent;
    toDisplay = true;    
}


function evaluate(){
    if(operator === null || toDisplay) return;
    const secondOperand = result.textContent;
    result.textContent =  operations(firstValue,operator, secondOperand);
    operator = null;

}

// create a function to handle the operators.
function operations(a,operator, b){
    //allow convertion on integers to float
    const first = parseFloat(a);
    const second = parseFloat(b);

    if(isNaN(first) || isNaN(second))
        return '';
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
