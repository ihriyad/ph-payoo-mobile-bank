document.getElementById("btn-add-money").addEventListener("click", function () {
  // get bank & validate
  const bank = getValueFromInput("bank-option");
  console.log(bank);
  //get bank acc num & validate
  const bankAccNum = getValueFromInput("bank-number");
  console.log(bankAccNum);
  //add amount
  const addedAmount = Number(getValueFromInput("add-money-amount"));
  // getBalance
  const balance = getBalance("currant-balance");
  //validate pin
  const pin = getValueFromInput("add-money-pin");

  //all field
  if (bankAccNum === "" || addedAmount === "" || pin === "") {
    showAlert("Please fill all fields!", "warning");
    return;
  }
  if (bank === "Select bank") {
    showAlert("Please Select a Bank", "warning");
    return;
  }
  if (bankAccNum.length <= 9) {
    showAlert("Account number must be 10 digit", "warning");
    return;
  }
  if (addedAmount > 100000) {
    showAlert("Limitation Reached ,Reduce amount", "warning");
    return;
  }
  if (pin === "0000") {
    const newBalance = balance + addedAmount;
    showAlert("Add Money Success!", "success");
    // set balance
    setBalance(newBalance);
    history();
  } else {
    showAlert("Wrong pin", "error");
    return;
  }
  setAgain();
});
