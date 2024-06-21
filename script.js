function add(a, b) {
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function divide(a, b){
    return a / b;
}

function multiply(a, b){
    return a * b;
}

function operate(obj){
    let solution = 0; 
    if(obj.operator === '+'){solution = add(obj.num1, obj.num2);}
    else if(obj.operator === '-'){solution = subtract(obj.num1, obj.num2);}
    else if(obj.operator === '*'){solution = multipy(obj.num1, obj.num2);}
    else if(obj.operator === '/'){solution = divide(obj.num1, obj.num2);}
    return solution;
}

let operation = {
    "num1": 0,
    "operator": '',
    "num2": 0,
}