document.getElementById("btn-bonus").addEventListener("click", function () {
  const coupon = getValueFromInput("get-bonus-coupon");
  const balance = getBalance("currant-balance");

  if (coupon.length < 6) {
    showAlert("Coupon must have 6 letters", "warning");
    return;
  }
  if (coupon === "ph-500") {
    showAlert("Redeem Success", "success");
    const newBalance = balance + 500;
    setBalance(newBalance);
  } else {
    showAlert("Invalid Coupon", "error");
  }
});
