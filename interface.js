let operation = '';
let number1 = '';
let number2 = '';
let selectingNumber1 = true;

document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => {
        const num = button.getAttribute('data-num');
        if (selectingNumber1) {
            number1 += num;
        } else {
            number2 += num;
        }
        updateDisplay();
    });
});

document.querySelectorAll('.operation').forEach(button => {
    button.addEventListener('click', () => {
        if (number1) {
            operation = button.getAttribute('data-op');
            selectingNumber1 = false;
            updateDisplay();
        }
    });
});

document.getElementById('calculate').addEventListener('click', () => {
    if (number1 && number2 && operation) {
        calculate();
    }
});

document.getElementById('clear').addEventListener('click', clear);

function updateDisplay() {
    document.getElementById('inputDisplay').value = `${number1} ${operation} ${number2}`;
}

function clear() {
    number1 = '';
    number2 = '';
    operation = '';
    selectingNumber1 = true;
    updateDisplay();
}

function calculate() {
    fetch
}