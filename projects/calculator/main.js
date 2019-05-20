window.onload = init;

let currentNumber = 0;
let previousOperator = '';
let previousNumber = 0;
let clearAll = true;
let empty = true;
let operated = false;

function init() {
    document.querySelectorAll('.keyOperator').forEach((button)=> {
        button.addEventListener('click', operandPressed)
    });

    document.querySelector('[data-action=decimal]')
        .addEventListener('click', addDecimal);
    document.querySelector('[data-action=clear]')
        .addEventListener('click', clearCalc);
    document.querySelector('[data-action=calculate]')
        .addEventListener('click', solve);

    document.querySelectorAll('.numbers').forEach((button)=> {
        button.addEventListener('click', displayNumber);
    });
        
    
}
function operandPressed(event){
    let pressed = event.target.dataset.action;
    calculate(previousOperator);
    previousOperator = pressed;

    empty = true;
    previousNumber = document.querySelector('.calculatorDisplay').innerText;
}

function calcAdd(a,b){
    let result = a + b;
    return document.querySelector('.calculatorDisplay').innerText = result;
}
function calcSubtract(a,b){
    let result = a - b;
    return document.querySelector('.calculatorDisplay').innerText = result;
}
function calcMultiply(a,b){
    let result = a * b;
    return document.querySelector('.calculatorDisplay').innerText = result;
}
function calcDivide(a,b){
    let result = a / b;
    return document.querySelector('.calculatorDisplay').innerText = result;
}
function addDecimal(){
    let haveDecimal = false;
    let display = document.querySelector('.calculatorDisplay');
    let current = display.innerText.toString();
    for (let i = 0; i < current.length; i++){
        if (current[i] === '.'){
            haveDecimal = true;
        }
    }
    if(haveDecimal === false){
        current += '.'
    }
    display.innerText = current;

}
function clearCalc(){
    
    if (clearAll === true){
        currentNumber = 0;
        previousOperator = '';
        previousNumber = '';
        empty = true;
    } else {
        currentNumber = 0;
        clearAll=true;
    }

    changeDisplay();
}

function solve(){
    operated = false;
    
    calculate(previousOperator);
    previousNumber = document.querySelector('.calculatorDisplay').innerText;
}

function calculate(operator){
    let current = parseFloat(currentNumber);
    let previous = parseFloat(previousNumber);
    while(!operated){
        if (operator === 'add'){
            calcAdd(previous, current);
        } else if (operator === 'subtract'){
            calcSubtract(previous, current);
        } else if (operator === 'multiply'){
            calcMultiply(previous, current);
        } else if (operator === 'divide'){
            calcDivide(previous, current);
        }
        operated = true;
    }
    empty = true;

}

function displayNumber(event){
    let display = document.querySelector('.calculatorDisplay');
    let current = display.innerText;
    let numberPressed = event.target.innerText;


    if(empty === true){
        current = numberPressed;
        empty = false;
    } else {
        current += numberPressed;
    }
    operated = false;
    clearAll = false;
    currentNumber = parseFloat(current);
    changeDisplay();
    
}

function changeDisplay(){
    let currentDisplay = document.querySelector('.calculatorDisplay');
    let currentState = document.querySelector('[data-action=clear]')

    if (clearAll === true){
        currentState.innerText = 'AC';
    } else {
        currentState.innerText = 'CE';
    }
    currentDisplay.innerText = currentNumber;
}