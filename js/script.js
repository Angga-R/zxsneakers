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
  const imgPreview2 = previewProduct.querySelector(".preview-2");
  const imgPreview3 = previewProduct.querySelector(".preview-3");
  let hargaProduct = previewProduct.querySelector(".harga");

  product.addEventListener("click", function (e) {
    if (e.target.className === "product-1") {
      previewProduct.style.display = "block";
      imgPreview1.src = "img/product/product_1/1.png";
      imgPreview2.src = "img/product/product_1/1.png";
      imgPreview3.src = "img/product/product_1/1.png";
      namaProduct.innerHTML = "Cau Balap 123 (white)";
      hargaProduct.innerHTML = "Rp. 1.799.500";
    } else if (e.target.className === "product-2") {
      previewProduct.style.display = "block";
      imgPreview1.src = "img/product/product_2/1.png";
      imgPreview2.src = "img/product/product_2/2.png";
      imgPreview3.src = "img/product/product_2/3.png";
      namaProduct.innerHTML = "YEEZY BOOST 350 V2 (white)";
      hargaProduct.innerHTML = "Rp. 499.500";
    } else if (e.target.className === "product-3") {
      previewProduct.style.display = "block";
      imgPreview1.src = "img/product/product_3/1.png";
      imgPreview2.src = "img/product/product_3/2.png";
      imgPreview3.src = "img/product/product_3/3.png";
      namaProduct.innerHTML = "YEEZY BOOST 350 V2 (green)";
      hargaProduct.innerHTML = "Rp. 499.500";
    } else if (e.target.className === "product-4") {
      previewProduct.style.display = "block";
      imgPreview1.src = "img/product/product_4/1.png";
      imgPreview2.src = "img/product/product_4/1.png";
      imgPreview3.src = "img/product/product_4/1.png";
      namaProduct.innerHTML = "Reemar Bekasi (white)";
      hargaProduct.innerHTML = "Rp. 10.799.500";
    } else if (e.target.className === "product-5") {
      previewProduct.style.display = "block";
      imgPreview1.src = "img/product/product_5/1.png";
      imgPreview2.src = "img/product/product_5/1.png";
      imgPreview3.src = "img/product/product_5/1.png";
      namaProduct.innerHTML = "Kuda Cinta 2.0 (white)";
      hargaProduct.innerHTML = "Rp. 15.500.500";
    } else if (e.target.className === "product-6") {
      previewProduct.style.display = "block";
      imgPreview1.src = "img/product/product_6/1.png";
      imgPreview2.src = "img/product/product_6/1.png";
      imgPreview3.src = "img/product/product_6/1.png";
      namaProduct.innerHTML = "Anak Hayam 55 (white)";
      hargaProduct.innerHTML = "Rp. 14.099.500";
    } else if (e.target.className === "product-7") {
      previewProduct.style.display = "block";
      imgPreview1.src = "img/product/product_7/1.png";
      imgPreview2.src = "img/product/product_7/1.png";
      imgPreview3.src = "img/product/product_7/1.png";
      namaProduct.innerHTML = "Manuk Sanca XB (white)";
      hargaProduct.innerHTML = "Rp. 31.799.500";
    } else if (e.target.className === "product-8") {
      previewProduct.style.display = "block";
      imgPreview1.src = "img/product/product_8/1.png";
      imgPreview2.src = "img/product/product_8/1.png";
      imgPreview3.src = "img/product/product_8/1.png";
      namaProduct.innerHTML = "Sandi Rabbaniyah 23 (white)";
      hargaProduct.innerHTML = "Rp. 5.499.500";
    } else if (e.target.className === "product-9") {
      previewProduct.style.display = "block";
      imgPreview1.src = "img/product/product_9/1.png";
      imgPreview2.src = "img/product/product_9/1.png";
      imgPreview3.src = "img/product/product_9/1.png";
      namaProduct.innerHTML = "Anton Maulana 22 (white)";
      hargaProduct.innerHTML = "Rp. 19.799.500";
    } else if (e.target.className === "product-10") {
      previewProduct.style.display = "block";
      imgPreview1.src = "img/product/product_10/1.png";
      imgPreview2.src = "img/product/product_10/1.png";
      imgPreview3.src = "img/product/product_10/1.png";
      namaProduct.innerHTML = "Landak Berkaki (white)";
      hargaProduct.innerHTML = "Rp. 1.549.500";
    } else if (e.target.className === "product-11") {
      previewProduct.style.display = "block";
      imgPreview1.src = "img/product/product_11/1.png";
      imgPreview2.src = "img/product/product_11/1.png";
      imgPreview3.src = "img/product/product_11/1.png";
      namaProduct.innerHTML = "Linda Berkumis (white)";
      hargaProduct.innerHTML = "Rp. 19.799.500";
    } else if (e.target.className === "product-12") {
      previewProduct.style.display = "block";
      imgPreview1.src = "img/product/product_12/1.png";
      imgPreview2.src = "img/product/product_12/1.png";
      imgPreview3.src = "img/product/product_12/1.png";
      namaProduct.innerHTML = "Baso Mas Fail (white)";
      hargaProduct.innerHTML = "Rp. 13.799.500";
    } else if (e.target.className === "product-13") {
      previewProduct.style.display = "block";
      imgPreview1.src = "img/product/product_13/1.png";
      imgPreview2.src = "img/product/product_13/1.png";
      imgPreview3.src = "img/product/product_13/1.png";
      namaProduct.innerHTML = "Cau Buruk 555 (white)";
      hargaProduct.innerHTML = "Rp. 1.299.500";
    } else if (e.target.className === "product-14") {
      previewProduct.style.display = "block";
      imgPreview1.src = "img/product/product_14/1.png";
      imgPreview2.src = "img/product/product_14/1.png";
      imgPreview3.src = "img/product/product_14/1.png";
      namaProduct.innerHTML = "Kelinci Bertopi (white)";
      hargaProduct.innerHTML = "Rp. 799.500";
    } else if (e.target.className === "product-15") {
      previewProduct.style.display = "block";
      imgPreview1.src = "img/product/product_15/1.png";
      imgPreview2.src = "img/product/product_15/1.png";
      imgPreview3.src = "img/product/product_15/1.png";
      namaProduct.innerHTML = "Badut Bersayap (white)";
      hargaProduct.innerHTML = "Rp. 999.500";
    }
  });

  close.addEventListener("click", function () {
    previewProduct.style.display = "none";
  });
}

eventBanner();
eventProduct();
