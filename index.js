let numBtns = document.querySelectorAll('.num')
let display = document.querySelector('#display')
let addBtn = document.querySelector('#add-btn')
let subBtn = document.querySelector('#sub-btn')
let onBtn = document.querySelector('#on-btn')
let opBtns = document.querySelectorAll('.op')
let equalBtn = document.querySelector('#equal-btn')
let currentFunc;
let indVals = [];
let displayVals = [];
let currentValue;

function showDisplay() {
    numBtns.forEach(num => {
        num.addEventListener('click', function() {
            indVals.push(this.value)
            console.log(indVals)
            display.textContent = indVals.join('')
        })
    })
    opBtns.forEach(op => {
        op.addEventListener('click', function() {
            if (currentFunc === undefined) {
                currentFunc = op.value
                updateDisplay()
            } else if (currentFunc != op.value) {
                updateDisplay()
                operate()
            } else if (currentFunc === op.value) {
                updateDisplay()
                operate()
            }
            // console.log(currentFunc)
            // let nind = +indVals.join('')
            // if (nind < 0 || nind > 0) {
            //     displayVals.push(nind)
            // }
            // console.log(displayVals)
            // indVals = []
            // display.textContent = ''

            // if (displayVals.length > 1) {
            //     operate()
                // display.textContent = ''
            currentFunc = op.value
            }) 
        })
}

showDisplay()

function updateDisplay() {
    let nind = +indVals.join('')
    if (nind < 0 || nind > 0) {
        displayVals.push(nind)
    }
    console.log(displayVals)
    indVals = []
    display.textContent = ''
}

addBtn.addEventListener('click', add)


equalBtn.addEventListener('click', operate)


function add(x, y) {
    // x = +displayVals.join('')
    // displayVals = []
    // display.textContent = ''
    // console.log(x, displayVal)
    return x + y
	// let newX = x.reduce((cv, cr) => cv + cr, 0)
    // return newX
};

const subtract = function(x,y) {
    return x - y

};

const divide = function(x, y) {
    return x / y
}

const multiply = function(...x) {
  let result = 1;
  for (let i = 0; i < x.length; i++) {
      result = result * x[i]
  }

  return result
};

function operate(func, num1, num2) {
    displayVals.push(+indVals.join(''))
    func = currentFunc
    if (func === 'add') {
        currentValue = add(displayVals[0], displayVals[1])
        display.textContent = currentValue
        displayVals = [currentValue]
        indVals = []
    } else if(func === 'subtract') {
        currentValue = subtract(displayVals[0], displayVals[1])
        display.textContent = currentValue
        displayVals = [currentValue]
        indVals = []
    } else if(func === divide) {
        return divide(num1, num2) 
    } else {
        return multiply(num1, num2)
    }
}


