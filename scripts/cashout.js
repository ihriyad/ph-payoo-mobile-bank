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

document.getElementById("btn-cash-out").addEventListener("click", function () {
  /**
   * 1.get agent number & validate
   * 2.get the amount, validate ,convert to num
   * 3.get the currant balance , validate, convert to num
   * 4.calculate new balance
   * 5.get the pin and verify
   * 6. true: show an alert > set balance
   * 7. false: show an error > return
   */
  //1
  const cashOutNumInput = document.getElementById("cash-out-number");
  const cashOutNum = cashOutNumInput.value;
  if (cashOutNum.length !== 11) {
    alert("Invalid number");
  }

  //2
  const cashOutAmountInput = document.getElementById("cash-out-amount");
  const cashOutAmount = cashOutAmountInput.value;

  //3
  const currantBalanceInput = document.getElementById("currant-balance");
  const currantBalance = currantBalanceInput.innerText;

  //4
  const newBalance = Number(currantBalance) - Number(cashOutAmount);

  if (newBalance < 10) {
    showAlert("Insufficient Amount ", "warning");

    return;
  }

  //5
  const cashOutPin = document.getElementById("cash-out-pin");
  const pin = cashOutPin.value;
  if (pin === "0000") {
    showAlert("Cash out Success!", "success");
    currantBalanceInput.innerText = newBalance;
  } else {
    showAlert("Invalid pin", "error");
    return;
  }
});
