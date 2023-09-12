function addItem() {
  const itemName = document.getElementById("item-name").value;
  const itemLink = document.getElementById("item-link").value;
  const itemPrice = parseFloat(document.getElementById("item-price").value);

  if (itemName.trim() === "" || isNaN(itemPrice)) {
    alert("Please enter a valid item name and price.");
    return;
  }

  const wishlist = document.getElementById("wishlist-items");
  const li = document.createElement("li");
  li.innerHTML = `
        <strong>Name:</strong> ${itemName}<br>
        <strong>Link:</strong> <a href="${itemLink}" target="_blank">${itemLink}</a><br>
        <strong>Price:</strong> $${itemPrice.toFixed(2)}<br>
        <button onclick="removeItem(this)">Remove</button>
    `;
  wishlist.appendChild(li);

  // Clear input fields
  document.getElementById("item-name").value = "";
  document.getElementById("item-link").value = "";
  document.getElementById("item-price").value = "";
}

function removeItem(button) {
  const listItem = button.parentElement;
  listItem.remove();
}
