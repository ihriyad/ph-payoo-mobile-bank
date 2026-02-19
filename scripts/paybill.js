document.getElementById("btn-pay-bill").addEventListener("click", function () {
  const billName = getValueFromInput("bill-option");
  console.log(billName);
  //get bank acc num & validate
  const billAccNum = getValueFromInput("biller-number");
  console.log(billAccNum);
  //add amount
  const payAmount = Number(getValueFromInput("bill-amount"));
  // getBalance
  const balance = getBalance("currant-balance");
  //validate pin
  const pin = getValueFromInput("bill-pin");

  //all field
  if (billAccNum === "" || payAmount === "" || pin === "") {
    showAlert("Please fill all fields!", "warning");
    return;
  }
  if (billName === "Select bank") {
    showAlert("Please Select a Bank", "warning");
    return;
  }
  if (billAccNum.length <= 9) {
    showAlert("Account number must be 10 digit", "warning");
    return;
  }
  if (payAmount > balance) {
    showAlert("Not Enough Balance", "warning");
    return;
  }

  if (pin === "0000") {
    const newBalance = balance - payAmount;
    showAlert("Payment Successful!", "success");
    // set balance
    setBalance(newBalance);
  } else {
    showAlert("Wrong pin", "error");
    return;
  }
});
