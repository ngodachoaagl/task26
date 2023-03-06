$(document).ready(function () {
  $(".c-mySlides").slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    prevArrow: $(".c-prev"),
    nextArrow: $(".c-next"),
  });
});
