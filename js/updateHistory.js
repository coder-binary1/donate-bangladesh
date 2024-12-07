function updateHistory(amount, address) {
  const currentDate = new Date();
  const history = document.getElementById("history");

  const div = document.createElement("div");
  div.innerHTML = `<div class="border border-gray-300 p-8 rounded-xl space-y-4">
          <h4 class='text-xl font-bold'>${amount} Taka is Donated for ${address}</h4>
          <p class='text-gray-400 font-light'>Date: ${currentDate} </p>
          `;
  history.appendChild(div);
}
