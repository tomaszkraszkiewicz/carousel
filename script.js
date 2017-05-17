$(function(){ 
var carouselList = $("#carousel ul");

setInterval(changeSlide, 3000);

function changeSlide () {
    carouselList
      .animate({'marginLeft':-400}, 500, moveFirstSlide);
  }
  var firstItem = carouselList.find("li:first");
  var lastItem = carouselList.find("li:last");

  function moveFirstSlide () {
    lastItem.after(firstItem);
    carouselList.css({marginLeft:0});
  }





});

