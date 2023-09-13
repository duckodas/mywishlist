const wishList = document.querySelector(".wish-list");

// Sample wishlist items with name and link (you can replace these with your own data)
const items = [
  { name: "Logitech G Pro Wireless gaming mus - 759kr", link: "https://www.elgiganten.dk/product/computer-kontor/computertilbehor/mus-tastatur/mus/logitech-g-pro-wireless-gaming-mus/LTGPROMOUSEWL" },
  { name: "Logitech G935 trådløst gamingheadset - 1109kr", link: "https://www.elgiganten.dk/product/gaming/spiltilbehor/gaming-headset/logitech-g935-tradlost-gamingheadset/18903" },
  { name: "Arozzi Arena Fratello gaming skrivebord - 2249kr", link: "https://www.elgiganten.dk/product/gaming/gamingborde-gamingstole/gamingbord/arozzi-arena-fratello-gaming-skrivebord-pure-black/328451" },
  { name: "WIZ LED Lightstrips", link: "https://www.wizconnected.com/da-dk/p/lightstrip-led-strip-forlanger-1-m/8719514261082" },
  { name: "RAZER SEIREN V2 PRO MIKROFON - 1399kr", link: "https://www.power.dk/gaming-og-underholdning/game-streaming/razer-seiren-v2-pro-mikrofon/p-1210725/" },
  { name: "It's ok to not be ok Hoodie - 417kr", link: "https://www.etsy.com/dk-en/listing/1150330570/its-ok-to-not-be-ok-oversized-hoodie?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=Hoodie+with+quote&ref=sc_gallery-1-2&pro=1&referrer_page_guid=80f69982-1ab9-4156-b40d-b60ed361e6b2&plkey=6ea938ae3719f104307e20d3b29e768db663d74c%3A1150330570&variation0=2449037809&variation1=2449037801" },
  { name: "You deserve the world Hoodie - 388kr", link: "https://www.etsy.com/dk-en/listing/1404833012/aesthetic-hoodie-with-you-deserve-the?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=Hoodie+with+quote&ref=sr_gallery-1-2&pro=1&sts=1&referrer_page_guid=80f69982-1ab9-4156-b40d-b60ed361e6b2&organic_search_click=1&variation0=3247693006&variation1=3262149613" },
  { name: "I hope you know how loved you are Hoodie - 388kr", link: "https://www.etsy.com/dk-en/listing/1452891422/you-are-loved-hoodie-love-hoodie-with?click_key=961267b71cb4a7da3ccbcf4bf9a5acaff483e7ae%3A1452891422&click_sum=781a499c&ref=shop_home_active_19&pro=1&sts=1&variation0=3442136528&variation1=3456097233" },
  { name: "Dear person behind me Hoodie - 511kr", link: "https://www.etsy.com/dk-en/listing/1149276450/dear-person-behind-me-hoodie?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=Hoodie+with+quote&ref=sr_gallery-1-24&pro=1&frs=1&referrer_page_guid=80f69982-1ab9-4156-b40d-b60ed361e6b2&organic_search_click=1&variation0=2446219909&variation1=2421850322" },
  { name: "Saying I Love You in different languages Hoodie - 414kr", link: "https://www.etsy.com/dk-en/listing/1516718221/different-languages-love-hoodie-i-love?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=Hoodie+with+quote&ref=sr_gallery-1-32&pro=1&referrer_page_guid=80f69982-1ab9-4156-b40d-b60ed361e6b2&organic_search_click=1&variation0=3628500296&variation1=3644968291" },
  { name: "Have a good day Hoodie - 518kr", link: "https://www.etsy.com/dk-en/listing/1229221543/have-a-good-day-hoodie-trendy-sweatshirt?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=Hoodie+with+quote&ref=sr_gallery-2-1&pro=1&sts=1&referrer_page_guid=f693a02d490.e769beacf8761ff5ff88.00&organic_search_click=1&variation0=2605417322&variation1=2605417316" },
  { name: "CPH X Baggy Cargo Pants Black by BSAT - 499kr", link: "https://www.rudecru.com/dk/cargo-bukser/6715-cph-x-baggy-cargo-pants-black-by-bsat.html" },
  { name: "Sort Hoodie - 175kr", link: "https://boombutik.dk/products/hoodie?variant=43452916302043" },
  { name: "Sort Jogging Bukser - 175kr", link: "https://boombutik.dk/products/joggingbukser?variant=39518219305139" },
  { name: "Penge", link: "" },
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
