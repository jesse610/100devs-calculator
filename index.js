let numBtns = document.querySelectorAll('.num')
let display = document.querySelector('#display')

let addBtn = document.querySelector('#add-btn')
let subBtn = document.querySelector('#sub-btn')
let divBtn = document.querySelector('#div-btn')
let multBtn = document.querySelector('#multiply-btn')
let clearBtn = document.querySelector('#clear-btn')

let opBtns = document.querySelectorAll('.op')
let equalBtn = document.querySelector('#equal-btn')

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
                display.textContent = ''
                console.log(num1)
            } else if (num1 != undefined && val != '') {
                num2 = +val
                operate()
                currentFunc = op.value
            } 
            else if (currentFunc === op.value && val != '') {
                num2 = +val
                val = ''
                display.textContent = ''
                console.log(num2)
            } else if (currentFunc != op.value) {
                currentFunc = op.value
            }
        })
    })
}



showDisplay()

clearBtn.addEventListener('click', clearDisplay)

function clearDisplay() {
    display.textContent = ''
    num1 = undefined
    num2 = undefined
    val = ''
}

equalBtn.addEventListener('click', showResult)

function showResult() {
    if (num1 === undefined || num2 === '') {
        alert('Error!')
    } else {
        num2 = +val
        operate()
    }
}      

function resetDisplay() {
    display.textContent = ''
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

    if (func === 'add') {
        currentValue = add(n1, n2)
        display.textContent = currentValue
        num1 = currentValue
        num2 = ''
        val = ''
    } else if (func === 'subtract') {
        currentValue = subtract(n1, n2)
        display.textContent = currentValue
        num1 = currentValue
        num2 = ''
        val = ''
    } else if (func === 'multiply') {
        currentValue = multiply(n1, n2)
        display.textContent = currentValue
        num1 = currentValue
        num2 = ''
        val = ''
    } else if (func === 'divide') {
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


