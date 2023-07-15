function convert() {

let inputValue = document.querySelector("#from__input").value;
let type1 = document.querySelector("#from1");
let type2 = document.querySelector("#to1");
let result = document.querySelector("#to__input");
if (inputValue == "") {
    alert("Please Enter any Number....")
    location.reload()
}
else if (type1.value == "celsius" && type2.value == "celsius") {
    let Celcius = Number.parseFloat(inputValue) * 1
    result.value = Celcius.toFixed(3) + " C"
}
else if (type1.value == "celsius" && type2.value == "fahrenheit") {
    let Fahrenheit = Number.parseFloat(inputValue) * (9 / 5) + 32
    result.value = Fahrenheit.toFixed(3) + " F"
}
else if (type1.value == "celsius" && type2.value == "kelvin") {
    let Kelvin = Number.parseFloat(inputValue) + 273.15
    result.value = Kelvin.toFixed(3) + " K"
}

else if (type1.value == "fahrenheit" && type2.value == "celsius") {
    let Celcius = Number.parseFloat(inputValue) - 32 * (5 / 9)
    result.value = Celcius.toFixed(3) + ` C`
}
else if (type1.value == "fahrenheit" && type2.value == "fahrenheit") {
    let Fahrenheit = Number.parseFloat(inputValue) * 1
    result.value = Fahrenheit.toFixed(3) + " F"
}
else if (type1.value == "fahrenheit" && type2.value == "kelvin") {
    let Kelvin = Number.parseFloat(inputValue) - 32 * (5 / 9) + 273.15
    result.value = Kelvin.toFixed(3) + " K"
}

else if (type1.value == "kelvin" && type2.value == "celsius") {
    let Celcius = Number.parseFloat(inputValue) - 273.15
    result.value = Celcius.toFixed(3) + ` C`
}
else if (type1.value == "kelvin" && type2.value == "fahrenheit") {
    let Fahrenheit = Number.parseFloat(inputValue) - 273.15 * (9 / 5) + 32
    result.value = Fahrenheit.toFixed(3) + " F"
}
else if (type1.value == "kelvin" && type2.value == "kelvin") {
    let Kelvin = Number.parseFloat(inputValue) * 1
    result.value = Kelvin.toFixed(3) + " K"
}


}