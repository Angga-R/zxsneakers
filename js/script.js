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

eventBanner();
