// create DOM for the display
const resultBtn = document.getElementById('display');
const equalBtn = document.getElementById("equals");
const resetBtn =  document.getElementById('clear');
const btns = document.querySelectorAll('.btn');
const deleteBtn = document.getElementById('delete')

// EventListeners
resetBtn.addEventListener('click',function(){
    display.innerHTML = " ";
});

deleteBtn.addEventListener('click',function(){
    display.innerHTML = 0;
});

equalBtn.addEventListener('click',function(){
    display.innerHTML = operations();
})


// loop through the buttons
btns.forEach((btn) => {
    btns.addEventListener('click', () => {
        // check if the button is a number or an operator
        if(btn.classList.contains('number')){
            resultBtn.textContent += number;
        }
        else if(btn.classList.contains('operator')){
            resultBtn.textContent += operator;
        }
    })
})

// create a function to handle the operators.
function operations(){
    let num = 1;
    let operators = ["+","-","/","*","="]
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