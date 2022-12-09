// login button event handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";

  const transationArea = document.getElementById("transation-area");
  transationArea.style.display = "block";
});

// deposit button event handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function () {
  const depositNumber = getInputNumber("depositAmount");

  updateSpanText("currentDeposit", depositNumber);
  updateSpanText("currentBalance", depositNumber);

  document.getElementById("depositAmount").value = "";
});

// withdraw button event handler
const withdrawtBtn = document.getElementById("addWithdraw");
withdrawtBtn.addEventListener("click", function () {
  const amountNumber = getInputNumber("withdrowAmount");

  updateSpanText("currentWithdraw", amountNumber);
  updateSpanText("currentBalance", -1 * amountNumber);

  document.getElementById("withdrowAmount").value = "";
});

function getInputNumber(id) {
  const amount = document.getElementById(id).value;
  const amountNumber = parseFloat(amount);
  return amountNumber;
}

function updateSpanText(id, depositNumber) {
  const current = document.getElementById(id).innerText;
  const currentNumber = parseFloat(current);
  const totalAmount = depositNumber + currentNumber;
  document.getElementById(id).innerText = totalAmount;
}
