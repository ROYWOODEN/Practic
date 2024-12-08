document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".centered-slide-carousel", {
    centeredSlides: true,
    loop: true,
    slidesPerView: 1, // По умолчанию отображается 1 слайд
    spaceBetween: 30,
    pagination: {
      el: ".centered-slide-carousel .swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1920: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1028: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      990: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  });

  // Фикс багов при цикличности (loop)
  swiper.on("loopFix", function () {
    swiper.update(); // Принудительное обновление Swiper
  });
});
