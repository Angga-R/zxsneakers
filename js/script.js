function eventBanner() {
  const banner = document.querySelector(".banner");
  const mainImg = document.querySelector(".img-main-banner");
  const secondImg = document.getElementById("second-img");
  const thirdImg = document.getElementById("third-img");
  const fourthImg = document.getElementById("fourth-img");

  banner.addEventListener("click", function (e) {
    console.log(e.target);
    if (e.target.className == "change-to-black") {
      mainImg.src = "img/banner/main_white.png";
      secondImg.src = "img/banner/second_white.png";
      thirdImg.src = "img/banner/third_white.png";
      fourthImg.src = "img/banner/fourth_white.png";
    } else if (e.target.className == "change-to-green") {
      mainImg.src = "img/banner/main_green.png";
      secondImg.src = "img/banner/second_green.png";
      thirdImg.src = "img/banner/third_green.png";
      fourthImg.src = "img/banner/fourth_green.png";
    } else if (e.target.className == "change-img") {
      const img4 = fourthImg.src;
      fourthImg.src = mainImg.src;
      mainImg.src = secondImg.src;
      secondImg.src = thirdImg.src;
      thirdImg.src = img4;
    }
  });
}

function scrollUp() {
  const btnToTop = document.getElementById("back-to-top");
  const navbar = document.getElementsByTagName("nav")[0];
  const penahan = document.getElementsByClassName("penahan")[0];

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    btnToTop.style.display = "block";
    penahan.style.display = "block";
    navbar.style.position = "fixed";
    navbar.style.top = "0";
    navbar.style.width = "100%";
    navbar.style.backgroundColor = "#00000025";
  } else {
    btnToTop.style.display = "none";
    penahan.style.display = "none";
    navbar.style.position = "relative";
    navbar.style.backgroundColor = "#00000000";
  }

  btnToTop.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
}

window.onscroll = function () {
  scrollUp();
};

function eventProduct() {
  const product = document.getElementById("product");
  const previewProduct = document.querySelector(".preview-product");
  const contentTop = previewProduct.querySelector(".content-top");
  const close = contentTop.getElementsByTagName("span")[0];

  let namaProduct = contentTop.getElementsByTagName("div")[0];
  const imgPreview1 = previewProduct.querySelector(".preview-1");
  let hargaProduct = previewProduct.querySelector(".harga");
  const a = previewProduct.getElementsByTagName("a")[0];
  const api =
    "https://api.whatsapp.com/send?phone=6285721230883&text=Hello,%20ZX%20SNEAKERS%20|%20Product%20:%20";

  product.addEventListener("click", function (e) {
    if (e.target.className === "product-1") {
      previewProduct.style.display = "block";
      imgPreview1.src = "img/product/product_1/1.png";
      namaProduct.innerHTML = "YEEZY BOOST 350 (plain)";
      hargaProduct.innerHTML = "Rp. 1.799.500";
      a.setAttribute("href", api + "YEEZY%20BOOST%20350%20(plain)");
    } else if (e.target.className === "product-2") {
      previewProduct.style.display = "block";
      imgPreview1.src = "img/product/product_2/1.png";
      namaProduct.innerHTML = "YEEZY BOOST 350 V2 (white)";
      hargaProduct.innerHTML = "Rp. 499.500";
      a.setAttribute("href", api + "YEEZY%20BOOST%20350%20V2%20(white)");
    } else if (e.target.className === "product-3") {
      previewProduct.style.display = "block";
      imgPreview1.src = "img/product/product_3/1.png";
      namaProduct.innerHTML = "YEEZY BOOST 350 V2 (green)";
      hargaProduct.innerHTML = "Rp. 499.500";
      a.setAttribute("href", api + "YEEZY%20BOOST%20350%20V2%20(green)");
    } else if (e.target.className === "product-4") {
      previewProduct.style.display = "block";
      imgPreview1.src = "img/product/product_4/1.png";
      namaProduct.innerHTML = "Air Jordan Mid FE Red 9";
      hargaProduct.innerHTML = "Rp. 10.799.500";
      a.setAttribute("href", api + "Air%20Jordan%20Mid%20FE%20Red%209");
    } else if (e.target.className === "product-5") {
      previewProduct.style.display = "block";
      imgPreview1.src = "img/product/product_5/1.png";
      namaProduct.innerHTML = "Air Jordan Mid SE USA 700x";
      hargaProduct.innerHTML = "Rp. 15.500.500";
      a.setAttribute("href", api + "Air%20Jordan%20Mid%20SE%20USA%20700x");
    } else if (e.target.className === "product-6") {
      previewProduct.style.display = "block";
      imgPreview1.src = "img/product/product_6/1.png";
      namaProduct.innerHTML = "Air Jordan Mid Royal w-900";
      hargaProduct.innerHTML = "Rp. 14.099.500";
      a.setAttribute("href", api + "Air%20Jordan%20Mid%20Royal%20w-900");
    } else if (e.target.className === "product-7") {
      previewProduct.style.display = "block";
      imgPreview1.src = "img/product/product_7/1.png";
      namaProduct.innerHTML = "Jordan Cyber X-500";
      hargaProduct.innerHTML = "Rp. 31.799.500";
      a.setAttribute("href", api + "Jordan%20Cyber%20X-500");
    } else if (e.target.className === "product-8") {
      previewProduct.style.display = "block";
      imgPreview1.src = "img/product/product_8/1.png";
      namaProduct.innerHTML = "Adidas Yeezy 700 Wave Runner";
      hargaProduct.innerHTML = "Rp. 5.499.500";
      a.setAttribute("href", api + "Adidas%20Yeezy%20700%20Wave%20Runner");
    } else if (e.target.className === "product-9") {
      previewProduct.style.display = "block";
      imgPreview1.src = "img/product/product_9/1.png";
      namaProduct.innerHTML = "Air Jordan Mid Dark Purple x7";
      hargaProduct.innerHTML = "Rp. 19.799.500";
      a.setAttribute("href", api + "Air%20Jordan%20Mid%20Dark%20Purple%20x7");
    } else if (e.target.className === "product-10") {
      previewProduct.style.display = "block";
      imgPreview1.src = "img/product/product_10/1.png";
      namaProduct.innerHTML = "Converse Chuck Taylor off White 2";
      hargaProduct.innerHTML = "Rp. 1.549.500";
      a.setAttribute(
        "href",
        api + "Converse%20Chuck%20Taylor%20off%20White%202"
      );
    } else if (e.target.className === "product-11") {
      previewProduct.style.display = "block";
      imgPreview1.src = "img/product/product_11/1.png";
      namaProduct.innerHTML = "Air Jordan Mid Blue Sky L-200";
      hargaProduct.innerHTML = "Rp. 19.799.500";
      a.setAttribute("href", api + "Air%20Jordan%20Mid%20Blue%20Sky%20L-200");
    } else if (e.target.className === "product-12") {
      previewProduct.style.display = "block";
      imgPreview1.src = "img/product/product_12/1.png";
      namaProduct.innerHTML = "Nike Air Force 1 Low off White";
      hargaProduct.innerHTML = "Rp. 13.799.500";
      a.setAttribute(
        "href",
        api + "Nike%20Air%20Force%201%20Low%20off%20White"
      );
    } else if (e.target.className === "product-13") {
      previewProduct.style.display = "block";
      imgPreview1.src = "img/product/product_13/1.png";
      namaProduct.innerHTML = "Air Jordan 4 Retro White cement";
      hargaProduct.innerHTML = "Rp. 1.299.500";
      a.setAttribute("href", api + "Air%20Jordan%204%20Retro%20White%20cement");
    } else if (e.target.className === "product-14") {
      previewProduct.style.display = "block";
      imgPreview1.src = "img/product/product_14/1.png";
      namaProduct.innerHTML = "Nike SB Travis Scott 1200x";
      hargaProduct.innerHTML = "Rp. 799.500";
      a.setAttribute("href", api + "Nike%20SB%20Travis%20Scott%201200x");
    } else if (e.target.className === "product-15") {
      previewProduct.style.display = "block";
      imgPreview1.src = "img/product/product_15/1.png";
      namaProduct.innerHTML = "Adidas BOOST c.196";
      hargaProduct.innerHTML = "Rp. 999.500";
      a.setAttribute("href", api + "Adidas%20BOOST%20c.196");
    }
  });

  close.addEventListener("click", function () {
    previewProduct.style.display = "none";
  });
}

eventBanner();
eventProduct();
