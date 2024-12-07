function validate(amount, address, donation) {
  const balance = parseFloat(document.getElementById("balance").innerText);

  if (!Number.isNaN(amount) && amount > 0 && amount < balance) {
    successAlert(amount);
    update(balance, amount, address, donation);
  } else {
    failedAlert(amount);
  }
}
