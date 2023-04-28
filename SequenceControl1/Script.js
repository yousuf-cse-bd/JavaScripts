
function myDisplay(some){
    document.getElementById("demo").innerHTML = some;
}

function myCalculator(number1, number2){
    let sum = number1 + number2;
    return sum;
}

let result = myCalculator(5, 5);
myDisplay(result);