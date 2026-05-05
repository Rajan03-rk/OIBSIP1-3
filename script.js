function convertTemp() {
    let input = document.getElementById("tempInput").value;
    let from = document.getElementById("fromUnit").value;
    let to = document.getElementById("toUnit").value;
    let resultBox = document.getElementById("result");

    if (input === "" || isNaN(input)) {
        resultBox.innerText = "⚠ Please enter a valid number";
        return;
    }

    let temp = parseFloat(input);
    let result;

    // Convert to Celsius first
    if (from === "F") temp = (temp - 32) * 5/9;
    else if (from === "K") temp = temp - 273.15;

    // Convert from Celsius to target
    if (to === "F") result = (temp * 9/5) + 32;
    else if (to === "K") result = temp + 273.15;
    else result = temp;

    resultBox.innerText = `Result: ${result.toFixed(2)} °${to}`;
}