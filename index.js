let numBtns = document.querySelectorAll('.num')
let display = document.querySelector('#display-value')
let clearBtn = document.querySelector('#clear-btn')
let opBtns = document.querySelectorAll('.op')
let equalBtn = document.querySelector('#equal-btn')
let historyDisplay = document.querySelector('#history-display')
let currentFunc;
let currentValue;
let val = ''
let num1;
let num2;

function showDisplay() {
    numBtns.forEach(num => {
        num.addEventListener('click', function() {
            if(currentValue === undefined) {
                val += this.value
                console.log(val)
                display.textContent += this.value
            } else if (currentValue != undefined) {
                if (+display.textContent === currentValue) {
                    display.textContent = ''
                }
                display.textContent += this.value
                val += this.value
                num2 = +val
            }
        })
    })

    opBtns.forEach(op => {
        op.addEventListener('click', function() {
            if (currentFunc === undefined || num1 === undefined) {
                currentFunc = op.value
                num1 = +val
                val = ''
                historyDisplay.textContent = num1 + ' ' + currentFunc
                display.textContent = ''
                console.log(num1)
            } else if (num1 != undefined && val != '') {
                num2 = +val
                operate()
                currentFunc = op.value
                historyDisplay.textContent = `${currentValue} ${currentFunc}`
            } 
            else if (currentFunc === op.value //val != '') 
                ){
                num2 = +val
                val = ''
                display.textContent = ''
                historyDisplay.textContent = `${currentValue} ${currentFunc}`
                operate()
                console.log(num2)
            } else if (currentFunc != op.value) {
                currentFunc = op.value
                historyDisplay.textContent = `${num1} ${currentFunc}`
            }
        })
    })
}

showDisplay()

clearBtn.addEventListener('click', clearDisplay)
equalBtn.addEventListener('click', showResult)

function clearDisplay() {
    display.textContent = ''
    num1 = undefined
    num2 = undefined
    val = ''
    historyDisplay.textContent = ''
}

function showResult() {
    if (num1 === undefined || num2 === '') {
        alert('Error! Select an operation to perform.')
    } else {
        num2 = +val
        historyDisplay.textContent = `${num1} ${currentFunc} ${num2} =`
        operate()
    }
}      

function add(x, y) {
    return x + y
};

const subtract = function(x,y) {
    return x - y
};

const divide = function(x, y) {
    return x / y
}

const multiply = function(x, y) {
    return x * y
};

function operate(func, n1, n2) {
    func = currentFunc
    n1 = num1
    n2 = num2

    if (func === '+') {
        currentValue = add(n1, n2)
        display.textContent = currentValue
        num1 = currentValue
        num2 = ''
        val = ''
    } else if (func === '-') {
        currentValue = subtract(n1, n2)
        display.textContent = currentValue
        num1 = currentValue
        num2 = ''
        val = ''
    } else if (func === 'x') {
        currentValue = multiply(n1, n2)
        display.textContent = currentValue
        num1 = currentValue
        num2 = ''
        val = ''
    } else if (func === '/') {
        if (n2 === 0) {
            alert('error, cannot divide by zero!')
        } else {
            currentValue = divide(n1, n2)
            display.textContent = currentValue
            num1 = currentValue
            num2 = ''
            val = ''
        }
    }
}