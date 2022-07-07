//Tip Calculator

// Add event listener

const sliders = document.querySelectorAll("input[type='range']");

sliders.forEach(function(sliders){
  sliders.addEventListener("input", calculateTip);
});

const billInput = document.getElementById("bill");
billInput.addEventListener("change", calculateTip);
// console.log(billInput);

// Get input values

function calculateTip() {
  let bill = parseFloat(billInput.value);
  let tipPercent = document.getElementById("tip").value;
  let noOfPeople = document.getElementById("no-of-people").value;

  billInput.value = bill.toFixed(2);
//   console.log(bill, tipPercent, noOfPeople);
}
