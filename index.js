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
const operatorBtn = document.querySelectorAll('.operator');

// EventListeners to display on screen
result.addEventListener('click',function(){
    result.textContent = ""
})

// delete button
deleteBtn.addEventListener('click',function(){
    result.textContent = result.textContent.slice(0,-1)
});

// set the clear button
resetBtn.addEventListener('click',() =>{
    result.textContent = "0";
    firstValue = null;
    operator = null;
    toDisplay = false;
});


// loop through the buttons for numbers
numberBtn.forEach(btn =>{
    btn.addEventListener('click',() => appendNumber(btn.textContent));
});
// set the equal button
equalBtn.addEventListener('click',() => {
    evaluate();
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
    btn.addEventListener('click',() => setOperator(btn.dataset.operator));
});
    
function setOperator(nextOperator){
    //set the conditions
    if(operator !== null) evaluate();
        firstValue = result.textContent
        operator = nextOperator
        toDisplay = true;
    
}
//create the calculator evaluation to give results when triggered
// when the equal button is clicked
// check if the operator is not null and toDisplay is false
// if so, evaluate the result and set the operator to null
// and toDisplay to false
// and set the firstValue to null
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