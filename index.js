// create DOM for the display
const result = document.getElementById('display');
const equalBtn = document.getElementById("equals");
const resetBtn =  document.getElementById('reset');
const btns = document.querySelectorAll('.btn');
const deleteBtn = document.getElementById('delete');

// EventListeners
result.addEventListener('click',function(){

})

deleteBtn.addEventListener('click',function(){
    result.innerHTML = 0;
});

function clearDisplay(){
    result.value =""
}

equalBtn.addEventListener('click',function(){
    try{
        result.textContent = " "
    } 
    catch(error){
        error.throw ("error");
        
    } 
})

// loop through the buttons
btns.forEach(btn =>{
    btn.addEventListener('click',function(){
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