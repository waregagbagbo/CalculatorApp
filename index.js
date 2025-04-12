// create DOM for the display
const result = document.getElementById('display');
const equality = document.getElementById("equals");
const reset =  document.getElementById('clear');
const btns = document.querySelectorAll('.btn');
// capture the functions
const operatorFunction = operations();
const numberFunction = numberValues();


// loop through the buttons
btns.forEach((btn) => {
    btns.addEventListener('click', () => {
        // check if the button is a number or an operator
        if(btn.classList.contains('number')){
            result.textContent = numberFunction;
        }
        else if(btn.classList.contains('operator')){
            result.textContent = operatorFunction;
        }
    })
})


//create function for numbers
function numberValues(){
    // loop through the numbers
    let values = [1,2,3,4,5,6,7,8,9]
    for(let i = 0; i <values.length; i++){
        return values[i];
    }
}
numberValues()

// create a function to handle the operators.
function operations(){
    let num = 1;
    let operators = ["+","-","/","*","-"]
    // loop through
    for(let i = 0; i < operators.length; i++){
        if(operators[i] === "+"){
            return num + num;
        }
        else if(operators[i] === "-"){
            return num - num;
        }
        else if(operators[i] === "/"){
            return num / num;
        }
        else if(operators[i] === "*"){
            return num * num;
        }
        else if(operators[i] === "-"){
            return num - num;
        }
    }
}
operations()