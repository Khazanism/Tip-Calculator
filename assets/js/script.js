//Tip Calculator


// Add event listener

const sliders = document.querySelectorAll("input[type='range']");

sliders.forEach(function name(sliders) {
  sliders.addEventListener("input", calculateTip);
});

const billInput = document.getElementById("bill");
billInput.addEventListener("change", calculateTip);
console.log(billInput);

// Get input values

function calculateTip() {

}
