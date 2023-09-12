document.addEventListener("DOMContentLoaded", function () {
  const addWishForm = document.getElementById("addWishForm");
  const wishlistItems = document.getElementById("wishlistItems");

  addWishForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const wishName = document.getElementById("wishName").value;
    const wishPrice = document.getElementById("wishPrice").value;
    const wishLink = document.getElementById("wishLink").value;

    if (wishName && wishPrice && wishLink) {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
                <span>${wishName} - ${wishPrice}</span>
                <a href="${wishLink}" target="_blank">Buy</a>
            `;
      wishlistItems.appendChild(listItem);

      // Clear the form inputs
      document.getElementById("wishName").value = "";
      document.getElementById("wishPrice").value = "";
      document.getElementById("wishLink").value = "";
    }
  });
});
