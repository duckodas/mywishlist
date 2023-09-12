document.addEventListener("DOMContentLoaded", function () {
  const addWishForm = document.getElementById("addWishForm");
  const wishlistItems = document.getElementById("wishlistItems");

  // Load wishes from local storage on page load
  loadWishes();

  addWishForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const wishName = document.getElementById("wishName").value;
    const wishPrice = document.getElementById("wishPrice").value;
    const wishLink = document.getElementById("wishLink").value;

    if (wishName && wishPrice && wishLink) {
      // Create a new wish object
      const newWish = {
        name: wishName,
        price: wishPrice,
        link: wishLink,
      };

      // Save the wish to local storage
      saveWish(newWish);

      // Add the wish to the list
      appendWishToList(newWish);

      // Clear the form inputs
      document.getElementById("wishName").value = "";
      document.getElementById("wishPrice").value = "";
      document.getElementById("wishLink").value = "";
    }
  });

  // Function to save a wish to local storage
  function saveWish(wish) {
    let wishes = JSON.parse(localStorage.getItem("wishes")) || [];
    wishes.push(wish);
    localStorage.setItem("wishes", JSON.stringify(wishes));
  }

  // Function to load wishes from local storage
  function loadWishes() {
    const wishes = JSON.parse(localStorage.getItem("wishes")) || [];
    wishes.forEach(appendWishToList);
  }

  // Function to display a wish in the list
  function appendWishToList(wish) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
          <span>${wish.name} - ${wish.price}</span>
          <a href="${wish.link}" target="_blank">Buy</a>
      `;
    wishlistItems.appendChild(listItem);
  }
});
