
// GLobal Variable \
let firstOperator = "";
let secondOperator = "";
let firstNumber = "";
let secondNumber = ""
let Num = ""; 
let Operator =  "/";


// Calculator Functions 
let Add = (Num1, Num2, total) => {
    total = Num1 + Num2;
    span.textContent = total;
    firstNumber = total;
}

let Subtract = (Num1, Num2, total) => {
    total  = Num1 - Num2;
    span.textContent = total;
    firstNumber = total;
}

//
let Mutiply = (Num1, Num2, total) => {
    total = Num1 * Num2;
    span.textContent = total;
    firstNumber = total;
}


let Divide = (Num1, Num2) => {
    total = Num1/Num2
    span.textContent = total;
    firstNumber = total;
}


//function thtat takes an operator and decide what function to use 
let Operate = (Operator, Num1, Num2) =>{
    Num1 = Number(firstNumber);
    Num2 = Number(secondNumber);
    console.log(Num1, Num2)
    if(Operator === "+"){
        Add(Num1, Num2);
    } else if(Operator === "-"){
        Subtract(Num1, Num2);
    } else if(Operator === "*"){
        Mutiply(Num1,Num2);
    } else if(Operator === "/"){
        Divide(Num1, Num2)
    } else {
        alert("please enter a vaild operator")
    }


}

let addOperator = (Operator) => {
    if(!firstNumber){
        console.log(Num)
        firstOperator += Operator;
        firstNumber = Num;
        Num = "";
    } else {
         console.log("Num")
         secondNumber = Num
         secondOperator += Operator;
         Num = "";
    }
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


//creating a span 
 const span = document.createElement("span");



//Numbers on calculator 
btnOne.addEventListener("click", () =>{
    Num += "1";
    span.textContent += "1"
    display.appendChild(span);
})

btnTwo.addEventListener("click", () =>{
    Num += "2";
    span.textContent += "2"
    display.appendChild(span)
})


btnThree.addEventListener("click", () =>{
    span.textContent += "3"
    display.appendChild(span)
})


btnFour.addEventListener("click", () =>{
    span.textContent += "4"
    display.appendChild(span)
})


btnFive.addEventListener("click", () =>{
    span.textContent += "5"
    display.appendChild(span)
})


btnSix.addEventListener("click", () =>{
    span.textContent += "6"
    display.appendChild(span)
})


btnSeven.addEventListener("click", () =>{
    span.textContent += "7"
    display.appendChild(span)
})


btnEight.addEventListener("click", () =>{
    span.textContent += "8"
    display.appendChild(span)
})


btnNine.addEventListener("click", () =>{
    span.textContent += "9"
    display.appendChild(span)
})

btnDecimal.addEventListener("click", () => {
    span.textContent += "."
    display.appendChild(span)
})


//operation on calcualtor 
btnAddButton.addEventListener("click", () => {
    span.textContent += "+";
    Operator = "+";
    addOperator("+");
    display.appendChild(span)

})

btnEqual.addEventListener("click", () => {
    addOperator("=");
    Operate(Operator, firstNumber, secondNumber);
})








