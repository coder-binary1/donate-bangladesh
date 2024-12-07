document.getElementById("btn-donation").addEventListener("click", function () {
  document.getElementById("transaction-history").classList.add("hidden");
  document.getElementById("donate-section").classList.remove("hidden");
  console.log("ok");
  document.getElementById("btn-donation").classList.add("bg-lime-400");
  document.getElementById("btn-history").classList.remove("bg-lime-400");
});

document.getElementById("btn-history").addEventListener("click", function () {
  document.getElementById("donate-section").classList.add("hidden");
  document.getElementById("transaction-history").classList.remove("hidden");
  console.log("from history");
  document
    .getElementById("btn-history")
    .classList.add("bg-lime-400", "text-black");
  document.getElementById("btn-history").classList.remove("bg-white");
  document.getElementById("btn-donation").classList.remove("bg-lime-400");
});
