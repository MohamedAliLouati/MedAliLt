var swiper = new Swiper(".mySwiper", {
  /*Nbrs des Box*/
  slidesPerView: 1,

  /*Les Espaces entre Les Box*/
  spaceBetween: 30,

  /*Nbrs des Points*/
  slidesPerGroup: 1,

  /*Deplacement cerculaire*/
  /*loop: true,*/

  loopFillGroupWithBlank: true,

  /*Pour Créer Les Points*/
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  /*La Deplacement Par Les Flech*/
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var xReq2 = new XMLHttpRequest();
xReq2.open("GET", "JS/InfoPagePat.json", true);
xReq2.onload = function () {
  cat = JSON.parse(xReq2.responseText);
  Ph = "";
  for (let i = 0; i < cat.length; i++) {
    Ph =
      Ph +
      "<div class='swiper-slide row'><div class='Box col-sm-12 col-md-12 col-lg-6 col-xl-6'><img src='Image/" +
      cat[i].img +
      "'></div><div class='Box col-sm-12 col-md-12 col-lg-6 col-xl-6'><h2>" +
      cat[i].Name +
      "</h2><p>" +
      cat[i].Presen +
      "</p><p class='creator'><i><span class='titre'>Page Creator: </span><span class='Text'>" +
      cat[i].Cretor +
      ".</span></i></p></div></div>";
  }
  document.querySelector(".swiper-wrapper").innerHTML = Ph;
};
xReq2.send();
