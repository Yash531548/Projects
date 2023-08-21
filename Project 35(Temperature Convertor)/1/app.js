/*
*Celsius to Kelvin: K = C + 273.15
*Kelvin to Celcius: C = K - 273.15
*Fahrenheit to Celcius: C = (F-32) (5/9)
*Celsius to Fahrenheit: F = C(9/5) + 32
*Fahrenheit to Kelvin: K = (F-32) (5/9) + 273.15
*Kelvin to Fahrenheit: F = (K-273.15) (9/5) + 32 */

const inputs = document.getElementsByClassName("input")


for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    input.addEventListener("input", (e) => {
        let valueI = parseFloat(e.target.value);
        if (!isNaN(valueI)) {
            switch (e.target.name) {
                case "Celsius":
                    inputs[1].value = (valueI * (9 / 5) + 32).toFixed(3)
                    inputs[2].value = (valueI + 273.15).toFixed(3)
                    break;

                case "Fahrenheit":
                    inputs[0].value = ((valueI - 32) * (5 / 9)).toFixed(3)
                    inputs[2].value = (((valueI - 32) * (5 / 9)) + 273.15).toFixed(3)
                    break;

                case "Kelvin":
                    inputs[0].value = (valueI - 273.15).toFixed(3)
                    inputs[1].value = (((valueI - 273.15) * (9 / 5)) + 32).toFixed(3)
                    break;
            }
        }
    })
}