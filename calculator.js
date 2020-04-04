const result = document.querySelector('.result');
let operandA, operandB, operator;
let newOperation = false;

document.querySelector('.divide').addEventListener('click', function(event) {
    operandA = result.innerText;
    operator = "&divide;";
    result.innerText = "0";
    
    event.stopPropagation();
});

document.querySelector('.multiply').addEventListener('click', function(event) {
    operandA = result.innerText;
    operator = "x";
    result.innerText = "0";
    
    event.stopPropagation();
});

document.querySelector('.add').addEventListener('click', function(event) {
    operandA = result.innerText;
    operator = "+";
    result.innerText = "0";
    
    event.stopPropagation();
});

document.querySelector('.subtract').addEventListener('click', function(event) {
    operandA = result.innerText;
    operator = "-";
    result.innerText = "0";
    
    event.stopPropagation();
});

document.querySelector('.clear').addEventListener('click', function(event) {
    result.innerText = "0";
    operandA = undefined;
    operandB = undefined;
    operator = undefined;

    event.stopPropagation();
});

document.querySelector('.equals').addEventListener('click', function(event) {
    operandB = result.innerText;
    newOperation = true;
    
    if (operator === "x") {
        result.innerText = parseInt(operandA) * parseInt(operandB);
    } else if (operator === "&divide;" && operandB !== "0") {
        result.innerText = parseInt(operandA) / parseInt(operandB);
    } else if (operator === "+") {
        result.innerText = parseInt(operandA) + parseInt(operandB);
    } else if (operator === "-") {
        result.innerText = parseInt(operandA) - parseInt(operandB);
    } else {
        result.innerText = "NaN";
    }

    event.stopPropagation();
});

document.querySelector('.back-space').addEventListener('click', function(event) {
    if (result.innerText !== "0" && result.innerText.length > 1) {
        result.innerText = result.innerText.slice(0, result.innerText.length - 1);
    } else {
        result.innerText = "0";
    }

    event.stopPropagation();
});

document.querySelector('.buttons').addEventListener('click', function(event) {
    if (result.innerText === "0" || newOperation) {
        result.innerText = event.target.innerText;
        newOperation = false;
    } else {
        result.innerText += event.target.innerText;
    }
});