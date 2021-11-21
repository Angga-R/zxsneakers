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
  const close = contentTop.getElementsByTagName("span")[1];

  product.addEventListener("click", function (e) {
    if (e.target.className === "product-1") {
      previewProduct.style.display = "block";
    } else if (e.target.className === "product-2") {
      previewProduct.style.display = "block";
    }
  });

  close.addEventListener("click", function () {
    previewProduct.style.display = "none";
  });
}

eventBanner();
eventProduct();
