function convert() {
    var celsius = parseFloat(document.getElementById('celsiusInput').value);
    if (!isNaN(celsius)) {
      var fahrenheit = (celsius * 9/5) + 32;
      document.getElementById('result').innerHTML = celsius + "°C = " + fahrenheit.toFixed(2) + "°F";
    } else {
      document.getElementById('result').innerHTML = "Please enter a valid temperature in Celsius.";
    }
  }
  
  function reset() {
    document.getElementById('celsiusInput').value = "";
    document.getElementById('result').innerHTML = "";
  }
