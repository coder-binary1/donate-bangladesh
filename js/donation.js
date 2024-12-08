document
  .getElementById("donate-noakhali")
  .addEventListener("click", function () {
    const donateAmount = parseFloat(document.getElementById("input-noa").value);
    const address = "Flood Relief at Noakhali, Bangladesh";
    const totalDonation = document.getElementById("noa-total-donation");

    document.getElementById("input-noa").value = "";
    validate(donateAmount, address, totalDonation);
  });
document.getElementById("donate-feni").addEventListener("click", function () {
  const donateAmount = parseFloat(document.getElementById("input-feni").value);
  const address = "Feni Flood Victims";
  const totalDonation = document.getElementById("feni-total-donation");

  validate(donateAmount, address, totalDonation);
  document.getElementById("input-feni").value = "";
});
document.getElementById("donate-quota").addEventListener("click", function () {
  const donateAmount = parseFloat(document.getElementById("input-quota").value);
  const address = "the Injured in the Quota Movement";
  const totalDonation = document.getElementById("quota-total-donation");

  validate(donateAmount, address, totalDonation);
  document.getElementById("input-quota").value = "";
});
document.getElementById("blog").addEventListener("click", function () {
  window.location.href = "blog.html";
});
