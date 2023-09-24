const wishList = document.querySelector(".wish-list");

// Sample wishlist items with name and link (you can replace these with your own data)
const items = [
  { name: "Logitech G Pro Wireless gaming mus (MINDST NØDVENDIGT) - 759kr", link: "https://www.elgiganten.dk/product/computer-kontor/computertilbehor/mus-tastatur/mus/logitech-g-pro-wireless-gaming-mus/LTGPROMOUSEWL" },
  { name: "Logitech G935 trådløst gamingheadset (MINDST NØDVENDIGT) - 1109kr", link: "https://www.elgiganten.dk/product/gaming/spiltilbehor/gaming-headset/logitech-g935-tradlost-gamingheadset/18903" },
  { name: "Arozzi Arena Fratello gaming skrivebord (MINDST NØDVENDIGT) - 2249kr", link: "https://www.elgiganten.dk/product/gaming/gamingborde-gamingstole/gamingbord/arozzi-arena-fratello-gaming-skrivebord-pure-black/328451" },
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
  { name: "I'm Not Weird I'm Limited Edition Hoodie - 398kr", link: "https://www.etsy.com/dk-en/listing/1249164354/im-not-weird-im-limited-edition-hoodie?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=Hoodie+with+fun+text&ref=sr_gallery-1-42&sts=1&referrer_page_guid=387e9ed9-6445-46db-b49c-6178d10a65ca&organic_search_click=1&variation0=2729371361&variation1=2729371353" },
  { name: "Totally on the Naughty List Christmas Sweatshirt (Print Colour: Gold Foil) - 256kr", link: "https://www.etsy.com/dk-en/listing/753089787/totally-on-the-naughty-list-christmas?click_key=9d2d09d30e64fc9ada0274ffd82ff236d6cbf08c%3A753089787&click_sum=1aebab74&ref=shop_home_recs_5&pro=1&sts=1&variation1=3801654042&variation0=2674781432" },
  { name: "Let's Watch The Sunset Hoodie - 318kr", link: "https://www.etsy.com/dk-en/listing/1318544440/lets-watch-the-sunset-hoodie-hoodie-with?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=Hoodie+with+quotes&ref=sc_gallery-1-8&pro=1&sts=1&referrer_page_guid=4fc51593-44e7-41c1-86df-d2f182da5b71&plkey=fdcf7c1f83f298ff41bcaf832a5af10af107900d%3A1318544440&variation0=2983782507&variation1=2983782519" },
  { name: "Blah Blah Blah Hoodie - 229kr", link: "https://www.etsy.com/dk-en/listing/1283422297/blah-blah-blah-hoodie-mood-racerback?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=Hoodie+with+quotes&ref=sc_gallery-1-13&pro=1&referrer_page_guid=4fc51593-44e7-41c1-86df-d2f182da5b71&plkey=9687dc7a9cdc46edb8345b2751c121383ab36eec%3A1283422297&variation0=3831836004&variation1=2801418677" },
  { name: "Dickies JACKSON PANT - Cargobukser - 699kr", link: "https://www.zalando.dk/dickies-jackson-cargo-pant-cargobukser-black-di622e08j-q11.html" },
  { name: "Treat People With Kindness Hoodie - 590kr", link: "https://www.etsy.com/dk-en/listing/1495644467/treat-people-with-kindness-shirttpwk?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=Hoodie+with+quotes&ref=sr_gallery-1-43&pro=1&sts=1&referrer_page_guid=4fc51593-44e7-41c1-86df-d2f182da5b71&organic_search_click=1&variation0=3564731857&variation1=3564731785" },
  { name: "Dear Person Behind Me Hoodie - 379kr", link: "https://www.etsy.com/dk-en/listing/1432306609/dear-person-behind-me-shirt-mental?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=Hoodie+with+quotes&ref=sr_gallery-2-48&pro=1&sts=1&referrer_page_guid=52f523b1-b72e-49c8-baad-4484f1ad5eb4&organic_search_click=1&variation1=3298858664&variation0=3298858692" },
  { name: "Penge til lovlig crosser og kørekort (Ville helst have)", link: "" },
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
