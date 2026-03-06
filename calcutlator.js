// ============================================================
// GLOBAL STATE
// ============================================================
let currentNumber  = "";
let previousNumber = "";
let operator       = "";
let result         = null;
let justCalculated = false; // tracks if "=" was just pressed


// ============================================================
// GRAB DOM ELEMENTS  (IDs match your HTML exactly)
// NOTE: Your HTML has a typo — id="Mutiply" not "Multiply"
//       We match it here so it actually works.
// ============================================================
const display         = document.querySelector("#display");
const btnAC           = document.querySelector("#AC");
const btnDelete       = document.querySelector("#Delete");
const btnDivide       = document.querySelector("#Divide");
const btnMultiply     = document.querySelector("#Mutiply");   // typo in your HTML — matched here
const btnSubtract     = document.querySelector("#Subtract");
const btnAdd          = document.querySelector("#Add");
const btnEqual        = document.querySelector("#Equal");
const btnDecimal      = document.querySelector("#Decimal");
const btnZero         = document.querySelector("#Zero");
const btnOne          = document.querySelector("#btnOne");    // your HTML uses "btnOne" not "One"
const btnTwo          = document.querySelector("#Two");
const btnThree        = document.querySelector("#Three");
const btnFour         = document.querySelector("#Four");
const btnFive         = document.querySelector("#Five");
const btnSix          = document.querySelector("#Six");
const btnSeven        = document.querySelector("#Seven");
const btnEight        = document.querySelector("#Eight");
const btnNine         = document.querySelector("#Nine");


// ============================================================
// UPDATE DISPLAY — one single function controls what shows
// ============================================================
function updateDisplay() {
    if (currentNumber !== "") {
        display.textContent = currentNumber;
    } else if (previousNumber !== "") {
        display.textContent = previousNumber + " " + operator;
    } else {
        display.textContent = "0";
    }
}


// ============================================================
// HANDLE NUMBER INPUT — one function instead of 10 copies
// ============================================================
function handleNumber(digit) {
    // After pressing "=", start a brand new calculation
    if (justCalculated) {
        previousNumber = "";
        operator       = "";
        justCalculated = false;
    }

    // Block a second decimal point (e.g. "12.3.5" is not allowed)
    if (digit === "." && currentNumber.includes(".")) return;

    // If decimal is first character, prefix with "0"
    if (digit === "." && currentNumber === "") currentNumber = "0";

    currentNumber += digit;
    updateDisplay();
}


// ============================================================
// CALCULATE
// ============================================================
function calculate() {
    if (previousNumber === "" || currentNumber === "" || operator === "") return;

    let num1 = Number(previousNumber);
    let num2 = Number(currentNumber);

    switch (operator) {
        case "+": result = num1 + num2; break;
        case "-": result = num1 - num2; break;
        case "*": result = num1 * num2; break;
        case "/":
            result = num2 === 0 ? "Nice try 😈" : num1 / num2;
            break;
    }

    // Round long decimals so they don't overflow the display
    if (typeof result === "number") {
        result = parseFloat(result.toFixed(10));
    }

    display.textContent = result;
    previousNumber      = String(result);
    currentNumber       = "";
    operator            = "";
    justCalculated      = true;
}


// ============================================================
// HANDLE OPERATOR BUTTONS
// ============================================================
function handleOperator(newOperator) {
    // After "=", operator works on the displayed result
    if (justCalculated) {
        operator       = newOperator;
        justCalculated = false;
        updateDisplay();
        return;
    }

    // No number typed yet — just swap the operator, don't calculate
    if (currentNumber === "") {
        operator = newOperator;
        updateDisplay();
        return;
    }

    // Already have a previous number — chain: calculate first, then store new operator
    if (previousNumber !== "") {
        calculate();
        justCalculated = false;
    } else {
        previousNumber = currentNumber;
        currentNumber  = "";
    }

    operator = newOperator;
    updateDisplay();
}


// ============================================================
// CLEAR & DELETE
// ============================================================
function clearAll() {
    currentNumber  = "";
    previousNumber = "";
    operator       = "";
    result         = null;
    justCalculated = false;
    display.textContent = "0";
}

function deleteLast() {
    if (justCalculated) return;                    // can't backspace a result
    currentNumber = currentNumber.slice(0, -1);   // removes last character
    updateDisplay();
}


// ============================================================
// EVENT LISTENERS — numbers
// ============================================================
btnOne.addEventListener(    "click", () => handleNumber("1"));
btnTwo.addEventListener(    "click", () => handleNumber("2"));
btnThree.addEventListener(  "click", () => handleNumber("3"));
btnFour.addEventListener(   "click", () => handleNumber("4"));
btnFive.addEventListener(   "click", () => handleNumber("5"));
btnSix.addEventListener(    "click", () => handleNumber("6"));
btnSeven.addEventListener(  "click", () => handleNumber("7"));
btnEight.addEventListener(  "click", () => handleNumber("8"));
btnNine.addEventListener(   "click", () => handleNumber("9"));
btnZero.addEventListener(   "click", () => handleNumber("0"));
btnDecimal.addEventListener("click", () => handleNumber("."));

// ============================================================
// EVENT LISTENERS — operators
// ============================================================
btnAdd.addEventListener(     "click", () => handleOperator("+"));
btnSubtract.addEventListener("click", () => handleOperator("-"));
btnMultiply.addEventListener("click", () => handleOperator("*"));
btnDivide.addEventListener(  "click", () => handleOperator("/"));

// ============================================================
// EVENT LISTENERS — actions
// ============================================================
btnEqual.addEventListener( "click", calculate);
btnAC.addEventListener(    "click", clearAll);
btnDelete.addEventListener("click", deleteLast);


// ============================================================
// KEYBOARD SUPPORT (bonus!)
// ============================================================
document.addEventListener("keydown", (event) => {
    const key = event.key;
    if (!isNaN(key) || key === ".") handleNumber(key);
    if (key === "+") handleOperator("+");
    if (key === "-") handleOperator("-");
    if (key === "*") handleOperator("*");
    if (key === "/") { event.preventDefault(); handleOperator("/"); }
    if (key === "Enter" || key === "=") calculate();
    if (key === "Backspace") deleteLast();
    if (key === "Escape") clearAll();
});




