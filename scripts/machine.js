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

function toShow(id) {
  document
    .querySelectorAll(".section")
    .forEach((sec) => sec.classList.add("hidden"));

  document.getElementById(id).classList.remove("hidden");
}

function history() {
  //history
  const history = document.getElementById("section-transaction");
  const newHistory = document.createElement("div");
  newHistory.innerHTML = `
 <div
          class="bg-base-100 border-base-300 rounded-2xl w-full border p-8 space-y-2 flex justify-between items-center"
        >
          <div class="left flex justify-between items-center gap-3">
            <div class="bg-slate-200 p-3 rounded-full">
              <img src="./assets/opt-1.png" alt="" />
            </div>
            <div class="space-y-1">
              <h3 class="font-bold text-[16px]">Action Succeed</h3>
              <p class="text-neutral/50 text-[14px]">${new Date()}</p>
            </div>
          </div>
          <button id="delete" class="right">
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </button>
        </div>
`;
  const result = history.append(newHistory);
  return result;
}

function setAgain() {
  const reset = document.getElementsByClassName("reset");
  for (const item of reset) {
    item.value = "";
  }
  return;
}
