function calculateFactorial() {
    //convert input value into a number
    var number = parseInt(document.getElementById("numberInput").value);
    var factorial = 1;
    //check if the value entered is a number or not
    if (isNaN(number)) {
      document.getElementById("result").innerText =
        "Please enter a valid number.";
      return;
    }
    //check if the value is greater than 0
    if (number < 0) {
      document.getElementById("result").innerText =
        "Factorial is not defined for negative numbers.";
      return;
    }

    for (var i = 2; i <= number; i++) {
      factorial *= i;
    }

    document.getElementById("result").innerText =
      "Factorial of " + number + " is: " + factorial;
  }
