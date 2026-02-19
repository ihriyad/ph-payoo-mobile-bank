
document.getElementById("btn-cash-out").addEventListener("click", function () {
  //1
  const cashOutNum = getValueFromInput("cash-out-number");

  //2
  const cashOutAmount = Number(getValueFromInput("cash-out-amount"))

  //3
  const balance = getBalance("currant-balance");

  //4
  const newBalance = balance - cashOutAmount;

  //5
  const pin = getValueFromInput("cash-out-pin");

  //conditions

  if (cashOutNum === "" || cashOutAmount === "" || pin === "") {
    showAlert("Please fill all fields!", "warning");
    return;
  } else if (cashOutNum.length !== 11) {
    showAlert("Number Must be 11 Digit ", "warning");
    return;
  } else if (newBalance < 10) {
    showAlert("Insufficient Amount ", "warning");
    return;
  } else if (pin === "0000") {
    showAlert("Cash out Success!", "success");
    setBalance(newBalance)
  } else {
    showAlert("Wrong pin", "error");
  }
  const reset = document.getElementsByClassName("reset");
  for (const item of reset) {
    item.value = "";
  }
  return;
});

/**
 * 1.get agent number & validate
 * 2.get the amount, validate ,convert to num
 * 3.get the currant balance , validate, convert to num
 * 4.calculate new balance
 * 5.get the pin and verify
 * 6. true: show an alert > set balance
 * 7. false: show an error > return
 */
