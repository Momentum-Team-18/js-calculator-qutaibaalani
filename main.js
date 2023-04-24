// Define variables
let displayWindow = document.getElementById("displayWindow");
let clearKey = document.getElementById("clearKey");
let keyDivide = document.getElementById("keyDivide");
let keyMulti = document.getElementById("keyMulti");
let Minus = document.getElementById("Minus");
let keyEqual = document.getElementById("keyEqual");
let keyPlus = document.getElementById("keyPlus");
let keyOne = document.getElementById("keyOne");
let keyTwo = document.getElementById("keyTwo");
let keyThree = document.getElementById("keyThree");
let keyFour = document.getElementById("keyFour");
let keyFive = document.getElementById("keyFive");
let keySix = document.getElementById("keySix");
let keySeven = document.getElementById("keySeven");
let ketEight = document.getElementById("ketEight");
let keyNine = document.getElementById("keyNine");
let keyZero = document.getElementById("keyZero");
let keyDecimel = document.getElementById("keyDecimel");

let currentOperand = "";
let previousOperand = "";
let operation = undefined;

// Add event listeners
keyOne.addEventListener("click", () => {
    appendNumber("1");
});

keyTwo.addEventListener("click", () => {
    appendNumber("2");
});

keyThree.addEventListener("click", () => {
    appendNumber("3");
});

keyFour.addEventListener("click", () => {
    appendNumber("4");
});

keyFive.addEventListener("click", () => {
    appendNumber("5");
});

keySix.addEventListener("click", () => {
    appendNumber("6");
});

keySeven.addEventListener("click", () => {
    appendNumber("7");
});

ketEight.addEventListener("click", () => {
    appendNumber("8");
});

keyNine.addEventListener("click", () => {
    appendNumber("9");
});

keyZero.addEventListener("click", () => {
    appendNumber("0");
});

keyDecimel.addEventListener("click", () => {
    if (currentOperand.includes(".")) return;
    appendNumber(".");
});

keyPlus.addEventListener("click", () => {
    chooseOperation("+");
});

Minus.addEventListener("click", () => {
    chooseOperation("-");
});

keyMulti.addEventListener("click", () => {
    chooseOperation("*");
});

keyDivide.addEventListener("click", () => {
    chooseOperation("/");
});

keyEqual.addEventListener("click", () => {
    compute();
    updateDisplay();
});

clearKey.addEventListener("click", () => {
    clear();
    updateDisplay();
});

// Define functions
function appendNumber(number) {
    currentOperand += number;
    updateDisplay();
}

function chooseOperation(operator) {
    if (currentOperand === "") return;
    if (previousOperand !== "") {
        compute();
    }
    operation = operator;
    previousOperand = currentOperand;
    currentOperand = "";
}

function compute() {
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "*":
            result = prev * current;
            break;
        case "/":
            result = prev / current;
            break;
        default:
            return;
    }
    currentOperand = result;
    operation = undefined;
    previousOperand = "";
}

function clear() {
    currentOperand = "";
    previousOperand = "";
    operation = undefined;
}

function updateDisplay() {
    displayWindow.innerText = currentOperand;
}

