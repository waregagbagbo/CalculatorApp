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

// EventListeners
result.addEventListener('click',function(){

})

deleteBtn.addEventListener('click',function(){
    result.textContent = result.textContent.slice(0,-1)
});

equalBtn.addEventListener('click',function(){
    try{
        result.textContent = operations()
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
function operations(a,operator, b){
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
            return 'Error'            
    }    
}
console.log(operations())