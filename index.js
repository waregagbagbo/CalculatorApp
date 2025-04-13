// create DOM for the display
const result = document.getElementById('display');
const equalBtn = document.getElementById("equals");
const resetBtn =  document.getElementById('reset');
const btns = document.querySelectorAll('.btn');
const deleteBtn = document.getElementById('delete');

// EventListeners


deleteBtn.addEventListener('click',function(){
    result.innerHTML = 0;
});

equalBtn.addEventListener('click',function(){
    try{
        result.textContent = operations();
    }
    catch{
        result.textContent = ""
    }
})

// loop through the buttons
btns.forEach((btn) =>{
    btn.addEventListener('click', function(){
        if(btn === "CLEAR"){
            result.textContent = ""
            return;

        }
        result.textContent += btn.textContent;
    })
})
// create a function to handle the operators.
function operations(a, operator, b){

    // use switch case
    switch(operator){
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;

        case "/":
            return a / b;

        default:
            throw new error ('Unsupported');            
    }    
}
operations();