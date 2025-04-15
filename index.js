//declare global vars
let toDisplay = false;
let operator= null;
let firstValue = null;


// create DOM for the display
const result = document.getElementById('display');
const equalBtn = document.getElementById("equals");
const resetBtn =  document.getElementById('clear');
const btns = document.querySelectorAll('.btn');
const deleteBtn = document.getElementById('delete');

// EventListeners to display on screen
result.addEventListener('click',function(){

})

// delete button
deleteBtn.addEventListener('click',function(){
    result.textContent = result.textContent.slice(0,-1)
});

equalBtn.addEventListener('click',evaluate(){
    
})
// set the clear button
//resetBtn.addEventListener('click',clear);
resetBtn.addEventListener('click',() =>{
    result.textContent = "0";
    firstValue = null;
    operator = null;
    toDisplay = false;
});

/*function clear(){
    result.textContent ="0";
    firstValue = null;
    operator = null;
    toDisplay = false;
}*/


// loop through the buttons fro numbers
btns.forEach(btn =>{
    btn.addEventListener('click',() => appendNumber(btn.textContent))
        result.textContent += btn.textContent;
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
btnOperator.forEach(btns =>{
    btns.addEventListener('click',() => setOperator(btns.dataset.operator))
});

function setOperator(nextOperator){
    //set the conditions
    if(operator !== null) evaluate();
        firstValue = result.textContent
        operator = nextOperator
        toDisplay = true;
    
}

//create the calculator evaluation to give results when triggered
function evaluate(){
    if(operator !== null || toDisplay) return;
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