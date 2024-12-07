function update(balance, amount, address, donation) {
  const updateBalance = balance - amount;
  document.getElementById("balance").innerText = updateBalance;

  const totalDonation = parseFloat(donation.innerText);

  const updateDonation = totalDonation + amount;
  donation.innerText = updateDonation;

  updateHistory(amount, address);
}
