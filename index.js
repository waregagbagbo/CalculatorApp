// create DOM for the display
const result = document.getElementById('display');
const equalBtn = document.getElementById("equals");
const resetBtn =  document.getElementById('clear');
const btns = document.querySelectorAll('.btn');
const deleteBtn = document.getElementById('delete');

// EventListeners
resetBtn.addEventListener('click',function(){
    result.textContent = " "
});

deleteBtn.addEventListener('click',function(){
    result.innerHTML = 0;
});

equalBtn.addEventListener('click',function(){
    try{
        result.textContent = operations();
    }
    catch{
        result.textContent = "Error"
    }
});

// loop through the buttons
/*btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        // check if the button is a number or an operator
        if(btn.classList.contains('number')){
            result.textContent += btn.textContent;
        }
        else if(btn.classList.contains('operator')){
            result.innerHTML += operator;
        }
    })
})*/
btns.forEach((btn) =>{
    btn.addEventListener('click', function(){
        result.textContent += btn.textContent;
    })
})
// create a function to handle the operators.
function operations(){
    let num = 0;
    let operator;
    // set conditions for the operations
        if(operator === "+"){
            return num + num;
        }
        else if(operator === "-"){
            return num - num;
        }
        else if(operator === "/"){
            return num / num;
        }
        else if(operator === "*"){
            return num * num;
        }
        else if(operator === "-"){
            return num - num;
        }
    }
operations()