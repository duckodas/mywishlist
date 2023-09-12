const wishlistItems = [
  {
    name: "Item 1",
    link: "https://example.com/item1",
    price: 10.99,
  },
  {
    name: "Item 2",
    link: "https://example.com/item2",
    price: 25.49,
  },
  {
    name: "Item 3",
    link: "https://example.com/item3",
    price: 5.99,
  },
  {
    name: "Item 4",
    link: "https://example.com/item4",
    price: 15.0,
  },
  {
    name: "Item 5",
    link: "https://example.com/item5",
    price: 8.99,
  },
];

const socialMediaLinks = [
  {
    name: "Discord",
    link: "https://discord.gg/your-discord",
    description: "Join our Discord server for discussions.",
  },
  {
    name: "GitHub",
    link: "https://github.com/your-github",
    description: "Check out our open-source projects on GitHub.",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/your-twitter",
    description: "Follow us on Twitter for updates and news.",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/your-instagram",
    description: "Follow us on Instagram for photos and stories.",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/your-linkedin",
    description: "Connect with us on LinkedIn for professional networking.",
  },
];

function addWishItems(item) {
  const wishlist = document.getElementById("wishlist-items");
  const li = document.createElement("li");
  li.innerHTML = `
        <strong>Name:</strong> ${item.name}<br>
        <strong>Link:</strong> <a href="${
          item.link
        }" class="masked-link" target="_blank">${item.link}</a><br>
        <strong>Price:</strong> $${item.price.toFixed(2)}<br>
    `;
  wishlist.appendChild(li);
}

wishlistItems.forEach((item) => {
  addWishItems(item);
});

function addLinkItems(item) {
  const socialMedia = document.querySelector(".social-media ul");
  const li = document.createElement("li");
  li.innerHTML = `
          <a href="${item.link}" class="masked-link" target="_blank">${item.name}</a><br>
          <span>${item.description}</span>
        `;
  socialMedia.appendChild(li);
}

socialMediaLinks.forEach((item) => {
  addLinkItems(item);
});
