let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

function add(){
    let add=num1+num2;
    document.getElementById("sum-el").innerHTML = add;
}
function subtract(){
    let sub=num1-num2;
    document.getElementById("sum-el").innerHTML = sub;
}
function multiply(){
    let mul=num1*num2;
    document.getElementById("sum-el").innerHTML = mul;
}
function divide(){
    let div=num1/num2;
    document.getElementById("sum-el").innerHTML = div;
}


