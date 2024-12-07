// script.js
document.getElementById("convert-btn").addEventListener("click", function() {
    const fromUnit = document.getElementById("from-unit").value;
    const toUnit = document.getElementById("to-unit").value;
    const fromValue = parseFloat(document.getElementById("from-value").value);

    if (isNaN(fromValue)) {
        alert("Please enter a valid number");
        return;
    }

    let conversionFactor = 1;

    // Conversion logic
    if (fromUnit === "meters" && toUnit === "kilometers") conversionFactor = 0.001;
    else if (fromUnit === "meters" && toUnit === "miles") conversionFactor = 0.000621371;
    else if (fromUnit === "kilometers" && toUnit === "meters") conversionFactor = 1000;
    else if (fromUnit === "kilometers" && toUnit === "miles") conversionFactor = 0.621371;
    else if (fromUnit === "miles" && toUnit === "meters") conversionFactor = 1609.34;
    else if (fromUnit === "miles" && toUnit === "kilometers") conversionFactor = 1.60934;

    const result = fromValue * conversionFactor;
    document.getElementById("to-value").value = result.toFixed(4);
});
