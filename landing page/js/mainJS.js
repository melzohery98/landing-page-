//Calculate slider height on different screens.

var sliderDiv = document.querySelector(".slider");
var carouselItem = document.querySelectorAll(".carousel-item");
(function getSliderHeight() {
  var sliderHeight;
  /* if (window.innerWidth <= 1024) {
    sliderHeight = (window.innerWidth / 1920) * 1080;
  } else {*/
  sliderHeight = window.innerHeight - sliderDiv.offsetTop;
  // }
  //Apply  calculated height value on slider.
  sliderDiv.style.height = `${sliderHeight}px`;
  carouselItem.forEach((item) => {
    item.style.height = `${sliderHeight}px`;
  });
})();

//Edit carousel interval
$(".carousel").carousel({
  interval: 4000,
});

//EdaBit challenge

function spoonerise(phrase) {
  let splitedArr = [[...phrase.split(" ")[0]], [...phrase.split(" ")[1]]];
  [splitedArr[0][0], splitedArr[1][0]] = [splitedArr[1][0], splitedArr[0][0]];
  return splitedArr.join(" ").replace(/,/gi, "");
}
