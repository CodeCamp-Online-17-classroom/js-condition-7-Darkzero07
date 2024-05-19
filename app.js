let num1 = Number(prompt("Input your number 1 : "));
let num2 = Number(prompt("Input your number 2 : "));
let result;
result = (isNaN(num1) || isNaN(num2)) ? "Invalid number" : (num1+num2);
alert(result);
