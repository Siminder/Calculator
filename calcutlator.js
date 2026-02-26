
// GLobal Variable 
let Num1 = 10;
let Num2 = 5;
let Operator =  "/";

// Calculator Functions 
let Add = (Num1, Num2) => {
    return console.log(Num1 + Num2);
}

let Subtract = (Num1, Num2) => {
    return console.log(Num1 - Num2);
}

//
let Mutiply = (Num1, Num2) => {
    return console.log(Num1 * Num2);
}


let Divide = (Num1, Num2) => {
    return console.log(Num1/Num2);
}

let Operate = (Operator, Num1, Num2) =>{
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



Operate(Operator, Num1, Num2);




