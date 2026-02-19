
document.getElementById("btn-login").addEventListener("click", function () {
  const inputNumber = document.getElementById("input-number");
  const number = inputNumber.value;

  const inputPin = document.getElementById("input-pin");
  const pin = inputPin.value;

  if (number === "" || pin === "") {
    showAlert("Please fill all fields!", "warning");
    return;
  } else if (pin.length !== 4) {
    showAlert("Pin must be at least 4 characters!", "warning");
    return;
  } else if (number.length !== 11) {
    showAlert("Number must be at least 11 characters!", "warning");
    return;
  } else if (number === "00000000000" && pin === "0000") {
    window.location.replace("home.html");
  } else {
    showAlert("Wrong Number or Pin", "error");
  }
  const reset = document.getElementsByClassName("reset");
  for (const item of reset) {
    item.value = "";
  }
  return;
});
