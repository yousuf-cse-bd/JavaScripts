
function myDisplay(some){
    document.getElementById("demo").innerHTML = some;
    console.log(some);
}

function myCalculator(number1, number2){
    let sum = number1 + number2;
    myDisplay(sum);
}

myCalculator(5, 5);
