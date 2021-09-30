var date = document.querySelector("#dateofbirth");

var number = document.querySelector("#lucky");

var check = document.querySelector("#check");

const output = document.querySelector("#output");

function checkIfLucky() {
  const dob = date.value;
  var sum = calculateSum(dob);

  if (dob && number.value) {
    if (sum % number.value === 0) {
      output.innerText = "Wohoo!! Your birthday is Lucky 🤩🤩🤩";
    } else {
      output.innerText = "Not Lucky 🙄🙄";
    }
  } else {
    output.innerText = "Please enter all the required values";
  }
}

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}

check.addEventListener("click", checkIfLucky);
