var swiper = new Swiper(".review-cards", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },

        800: {
            slidesPerView: 2,
        },
        900: {
            slidesPerView: 3,
        },
       
    },
});

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      200: {
        slidesPerView: 2,
      },
      400: {
        slidesPerView: 3,
      },
        640: {
          slidesPerView: 3,
        },

        800: {
            slidesPerView: 4,
        },
        900: {
            slidesPerView: 5,
        },
       
    },
  });