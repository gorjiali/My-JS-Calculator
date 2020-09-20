let screenVal = document.querySelector('.screen');
let firstNumber = null;
let secondNumber = null;
let operator = null

document.querySelector('.buttons').addEventListener('click', function (event) {
    if (isNaN(parseInt(event.target.innerText))) {
        handleSymbol(event.target.innerText)
    } else {
        handleNumber(parseInt(event.target.innerText))
    }
});

function handleSymbol(symbol) {
    switch(symbol) {
        case 'C': resetCalc(); break;
        case '←': handleBackspace(); break;
        case '=': handleEqual(); break;
        default: handleOperator(symbol);
    }
}

function resetCalc() {
    screenVal.innerText = '0';
    firstNumber = null;
    secondNumber = null;
    operator = null;
}

function handleBackspace() {
    if (screenVal.innerText.length < 2) {
        screenVal.innerText = '0';
    } else {
        screenVal.innerText = screenVal.innerText.slice(0, -1);
    }
}

function handleEqual() {
    if (firstNumber && secondNumber && operator) {
        switch(operator) {
            case '+': screenVal.innerText = firstNumber + secondNumber; break;
            case '-': screenVal.innerText = firstNumber - secondNumber; break;
            case '×': screenVal.innerText = firstNumber * secondNumber; break;
            case '÷': screenVal.innerText = firstNumber / secondNumber; break;
        }
        
        secondNumber = null;
        operator = null;
        firstNumber = parseInt(screenVal.innerText);
    }
} 

function handleOperator(symbol) {
    firstNumber = parseInt(screenVal.innerText);
    operator = symbol;
    screenVal.innerText = '0';
}

function handleNumber(number) {
    if (operator) {
        screenVal.innerText = '' + number
        secondNumber = number;
    } else {
        screenVal.innerText = '' + number;
        firstNumber = number;
    }
}
