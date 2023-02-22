let numBtns = document.querySelectorAll('.num')
let display = document.querySelector('#display')
let addBtn = document.querySelector('#add-btn')
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
            display.textContent += this.value
        })
    })
    opBtns.forEach(op => {
        op.addEventListener('click', function() {
            currentFunc = op.value
            console.log(currentFunc)
            let nind = +indVals.join('')
            displayVals.push(nind)
            indVals = []
            console.log(displayVals)
            display.textContent = ''
        })
    })
}

showDisplay()

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
    } else if(func === subtract) {
        return subtract(num1, num2)
    } else if(func === divide) {
        return divide(num1, num2) 
    } else {
        return multiply(num1, num2)
    }
}


