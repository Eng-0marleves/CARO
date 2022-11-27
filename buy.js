// Set Values in Inputs Start
let model = localStorage.getItem("model")
let modelInput = document.querySelector("#model") 
modelInput.value = model
let manufacturer = localStorage.getItem("manufacturer")
let manufacturerInput = document.querySelector("#manufacturer") 
manufacturerInput.value = manufacturer
window.addEventListener("load", () => {
    localStorage.setItem("model", "");
    localStorage.setItem("manufacturer", "");   
})
// Set Values in Inputs End