
// GLobal Variable \
let currentNumber = "";
let previousNumber = "";
let operator = "";


//creating a span 
 const span = document.createElement("span");


// Calculator Functions 

let Calculation = (operator, currentNumber, previousNumber) => {
    let num1 = Number(currentNumber);
    let num2 = Number(previousNumber);
    let result;


    console.log(num1, num2)

   switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                result = "Error"; // Avoid dividing by zero
            } else {
                result = num1 / num2;
            }
            break;
        default:
            return;
    }

    
    display.textContent = result;
    previousNumber = result;
    currentNumber = " ";
    operator = ""

}


let handleOperator = (newOperator) => {
    if(currentNumber === ""){
        return;
    } 

    if(previousNumber !== ""){
        Calculation(operator, currentNumber, previousNumber);
    }

    previousNumber = currentNumber;
    operator = newOperator;
    currentNumber = ""; 
}




// Grabbing all my elements
const display = document.querySelector("#display");
const btnOne = document.querySelector("#btnOne");
const btnTwo = document.querySelector("#Two");
const btnThree = document.querySelector("#Three");
const btnFour = document.querySelector("#Four");
const btnFive = document.querySelector("#Five");
const btnSix = document.querySelector("#Six");
const btnSeven = document.querySelector("#Seven");
const btnEight = document.querySelector("#Eight");
const btnNine = document.querySelector("#Nine");
const btnAC = document.querySelector("#AC");
const btnDelete = document.querySelector("#Delete");
const btnDivideButton = document.querySelector("#Divide");
const btnMultiplyButton = document.querySelector("#Multiply");
const btnSubtractButton = document.querySelector("#Subtract");
const btnAddButton = document.querySelector("#Add");
const btnEqual = document.querySelector("#Equal");
const btnZero = document.querySelector("#Zero");
const btnDecimal = document.querySelector("#Decimal");



//Numbers on calculator 
btnOne.addEventListener("click", () =>{
    currentNumber += "1";
    span.textContent = currentNumber
    display.appendChild(span);
})

btnTwo.addEventListener("click", () =>{
    currentNumber += "2";
    span.textContent = currentNumber
    display.appendChild(span)
})


btnThree.addEventListener("click", () =>{
    currentNumber += "3"
    span.textContent = currentNumber
    display.appendChild(span)
})


btnFour.addEventListener("click", () =>{
    currentNumber += "4"
    span.textContent = currentNumber
    display.appendChild(span)
})


btnFive.addEventListener("click", () =>{
    currentNumber += "5"
    span.textContent = currentNumber
    display.appendChild(span)
})


btnSix.addEventListener("click", () =>{
    currentNumber += "6"
    span.textContent = currentNumber
    display.appendChild(span)
})


btnSeven.addEventListener("click", () =>{
    currentNumber += "7"
    span.textContent = currentNumber
    display.appendChild(span)
})


btnEight.addEventListener("click", () =>{
    currentNumber += "8"
    span.textContent = currentNumber
    display.appendChild(span)
})


btnNine.addEventListener("click", () =>{
    currentNumber += "9"
    span.textContent = currentNumber
    display.appendChild(span)
})

btnDecimal.addEventListener("click", () => {
    span.textContent = "."
    display.appendChild(span)
})


//operation on calcualtor 
btnAddButton.addEventListener("click", () => {
    span.textContent += "+";
    handleOperator("+")
    
    

})

btnEqual.addEventListener("click", () => {
    Calculation(operator, currentNumber, previousNumber);
})








