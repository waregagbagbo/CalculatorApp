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