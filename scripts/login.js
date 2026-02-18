function showAlert(message, type) {
  const alertBox = document.getElementById("alertBox");

  alertBox.innerHTML = `
    <div class="alert alert-${type} mb-4">
      <span>${message}</span>
    </div>
  `;

  setTimeout(() => {
    alertBox.innerHTML = "";
  }, 3500);
}

document.getElementById("btn-login").addEventListener("click", function () {
  const inputNumber = document.getElementById("input-number");
  const number = inputNumber.value;

  const inputPin = document.getElementById("input-pin");
  const pin = inputPin.value;

  if (number === "00000000000" && pin === "0000") {
    window.location.replace("home.html");
  } else if (number === "" || pin === "") {
    showAlert("Please fill all fields!", "warning");
  } else if (pin.length !== 4) {
    showAlert("Pin must be at least 4 characters!", "warning");
  } else if (number.length !== 11) {
    showAlert("Number must be at least 11 characters!", "warning");
  } else if (number !== "0134567899" || pin !== "1234") {
    showAlert("Invalid Number or Pin", "error");
  }

  return;
});
