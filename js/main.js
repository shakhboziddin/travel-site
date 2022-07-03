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

