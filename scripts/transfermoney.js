document
  .getElementById("btn-transfer-money")
  .addEventListener("click", function () {
    //get user acc num & validate
    const userAccNum = getValueFromInput("transfer-money-number");
    console.log(userAccNum);
    //add amount
    const sendAmount = Number(getValueFromInput("transfer-money-amount"));
    // getBalance
    const balance = getBalance("currant-balance");
    //validate pin
    const pin = getValueFromInput("transfer-money-pin");

    //all field
    if (userAccNum === "" || sendAmount === "" || pin === "") {
      showAlert("Please fill all fields!", "warning");
      return;
    }

    if (userAccNum.length <= 10) {
      showAlert("Account number must be 11 digit", "warning");
      return;
    }
    if (sendAmount > balance) {
      showAlert("Not Enough Balance", "warning");
      return;
    }
    if (pin === "0000") {
      const newBalance = balance - sendAmount;
      showAlert("Send Money Success!", "success");
      // set balance
      setBalance(newBalance);
      history();
    } else {
      showAlert("Wrong pin", "error");
      return;
    }
    setAgain();
  });
