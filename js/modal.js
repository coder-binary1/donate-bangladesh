function successAlert(amount) {
  document.getElementById("donate-status").innerText = "Congrats!";
  document.getElementById("donate-amount-modal").innerText = amount;
  document.getElementById("donate-status").classList.remove("text-red-300");
  document
    .getElementById("donate-amount-modal")
    .parentNode.classList.remove("hidden");
  document.getElementById("success").classList.remove("hidden");
}

function failedAlert() {
  document.getElementById("donate-status").innerText = "Failed!";
  document.getElementById("donate-status").classList.add("text-red-300");
  document
    .getElementById("donate-amount-modal")
    .parentNode.classList.add("hidden");
  document.getElementById("success").classList.add("hidden");
}
