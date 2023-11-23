const wishList = document.querySelector(".wish-list");

// Sample wishlist items with name and link (you can replace these with your own data)
const items = [
  {
    name: "Benson Jr Night Lamp - 210/175kr",
    link: "https://thefarmbunch.com/products/benson-jr-night-lamp/",
  },
  {
    name: "Benson The Duck - 245/175kr",
    link: "https://thefarmbunch.com/products/benson-the-duck-lamp/",
  },
  {
    name: "Cute Duckling Wallet - 126kr",
    link: "https://thefarmbunch.com/products/cute-duckling-wallet/",
  },
  {
    name: "Ducklas Lazy Duck Lamp - 196kr",
    link: "https://thefarmbunch.com/products/ducklas-lazy-duck-lamp/",
  },
  {
    name: "Ducky Blanket - 280kr",
    link: "https://thefarmbunch.com/products/duck-halloween-costume-2/",
  },
  {
    name: "Middle Finger Duck The Duck - 140kr",
    link: "https://thefarmbunch.com/products/middle-finger-duck-the-duck/",
  },
  {
    name: "Pablo The Duck Lamp - 280/196kr",
    link: "https://thefarmbunch.com/products/led-lazy-duck-lamp/",
  },
  {
    name: "Soft Duck Sofa - 210kr",
    link: "https://thefarmbunch.com/products/soft-duck-sofa/",
  },
  {
    name: "Super Soft Large Duck Plushy (130cm or 160cm) - 421kr",
    link: "https://thefarmbunch.com/products/super-soft-large-duck-plushy/",
  },
  {
    name: "Banana Duck Plushy (White) - 175kr",
    link: "https://thefarmbunch.com/products/banana-duck-plushy/",
  },
  {
    name: "Billy The Grumpy Duck (60cm or 80cm) - 421kr",
    link: "https://thefarmbunch.com/products/billy-the-grumpy-duck/",
  },
  {
    name: "Quackin’ Ducks Summer Shirt - 175kr",
    link: "https://thefarmbunch.com/products/quackin-ducks-summer-shirt/",
  },
  {
    name: "Naughty Duck Unisex Christmas Sweater (Forest Green) - 266kr",
    link: "https://thefarmbunch.com/products/naughty-duck-unisex-christmas-sweater/",
  },
  {
    name: "Spare Time Unisex T-Shirt (Block) - 168kr",
    link: "https://thefarmbunch.com/products/spare-time-unisex-t-shirt/",
  },
  {
    name: "Quack & Hold Book Buddies (White) - 210kr",
    link: "https://thefarmbunch.com/products/quack-hold-book-buddies/",
  },
  {
    name: "Duck Crossbody Handbag (White) - 175kr",
    link: "https://thefarmbunch.com/products/duck-crossbody-handbag/",
  },
  {
    name: "Duck Crossing Sign 10 x 10 - 204kr",
    link: "https://seducktive.com/all-products/ols/products/duck-crossing-sign",
  },
  {
    name: "seDUCKtive Duck Face Premium Hoodie - 218kr",
    link: "https://seducktive.com/all-products/ols/products/wrinkle-duck-face-premium-hoodie",
  },
  {
    name: "Snakes N Space Jacket - 549kr",
    link: "https://ynw-apparel.com/collections/snakes-n-space-collection/products/snakes-n-space-jacket?variant=41517086507208",
  },
  {
    name: "Snakes N Space Joggers - 368kr",
    link: "https://ynw-apparel.com/collections/snakes-n-space-collection/products/snakes-n-space-joggers?variant=41517108986056",
  },
  {
    name: "Just A Matter Of Slime Hoodie - 469kr",
    link: "https://ynw-apparel.com/collections/just-a-matter-of-slime/products/unisex-hoodie?variant=40736577323208",
  },
  {
    name: "Dekoration til mit rum",
    link: "",
  },
  // {
  //   name: "NAME - kr",
  //   link: "URL_STRING",
  // },
];

items.forEach((item) => {
  const wishItem = document.createElement("div");
  wishItem.classList.add("wish-item");

  // Create a link element
  const link = document.createElement("a");
  link.textContent = item.name;
  link.href = item.link;
  link.target = "_blank"; // Open the link in a new tab/window

  // Append the link to the wish item
  wishItem.appendChild(link);

  wishList.appendChild(wishItem);
});
