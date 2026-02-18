document.getElementById("btn-login").addEventListener("click", function () {
  const inputNumber = document.getElementById("input-number");
  const number = inputNumber.value;

  const inputPin = document.getElementById("input-pin");
  const pin = inputPin.value;

  const successAlert = document.getElementById("alert-box");
  const errorAlert = document.getElementById("alert-box2");

  successAlert.classList.add("hidden");
  errorAlert.classList.add("hidden");

  if (number === "01300000000" && pin === "4321") {
    successAlert.classList.remove("hidden");
    window.location.assign("./home.html");
  } else {
    errorAlert.classList.remove("hidden");
  }
  return;
});
const inputs = document.getElementsByClassName("input");
for (const input of inputs) {
  input.addEventListener("click", function () {
    const successAlert = document.getElementById("alert-box");
    const errorAlert = document.getElementById("alert-box2");

    successAlert.classList.add("hidden");
    errorAlert.classList.add("hidden");
  });
}
