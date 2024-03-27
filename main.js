const calculator = document.querySelector('.calculator-container');
const calculatorThemeBtn = document.querySelector('.calculator-theme-btn');
const display = document.querySelector('.display-numbers')
const buttons = document.querySelectorAll('.btn')

init()

function init() {
    ToggleTheme()
}

buttons.forEach((button, index) => {
    button.addEventListener('click', function (e) {
        try {
            Calculate(e.target.value)
        }
        catch (err) {
            console.log("Error:", err);
        }
    })
})

let output = ''
function Calculate(value) {
    if (value === '=') {
        output = eval(output.replaceAll('%', '/100*'))
    } else if (value === 'AC') {
        output = ''
    } else if (value === 'DEL') {
        output = output.toString().slice(0, -1)
    }
    else {
        if (output === '0') {
            output = value;
        } else {
            // If the current output is not '0', just append the new value
            output += value;
        }
    }

    display.value = output
}

function ToggleTheme() {
    calculatorThemeBtn.addEventListener('click', function () {
        calculator.classList.toggle('dark')
    })
}

// OnPressKeyboard
document.addEventListener('keydown', function (e) {
    buttons.forEach((button) => {
        if (e.key === button.value) {
            Calculate(button.value)
        }
    })
    if (e.key === 'Backspace') {
        Calculate('DEL')
    }
})

