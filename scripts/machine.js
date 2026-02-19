// machine id --> input value
function getValueFromInput(id) {
  const input = document.getElementById(id);
  const value = input.value;
  return value;
}
//machine --> balance
function getBalance() {
  const balanceElement = document.getElementById("currant-balance");
  const balance = balanceElement.innerText;
  return Number(balance);
}

//machine --> set balance
function setBalance(value) {
  const balanceElement = document.getElementById("currant-balance");
  balanceElement.innerText = value;
}

//alert
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
