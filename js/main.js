//navbar
let navBtn = document.querySelector("#navMenu");
let navbar = document.querySelector(".responsMenu");

window.onscroll = () => {
    navBtn.classList.remove("fa-times");
    navbar.classList.remove("active");
    search.classList.remove("active");
    form.classList.remove("active");
    searchBtn.classList.remove("fa-times")
    btn.classList.remove("fa-times")
}

navBtn.addEventListener("click", ()=>{
  navBtn.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});
// navbar form

let searchBtn = document.querySelector("#search");
let search = document.querySelector(".searchForm");

searchBtn.addEventListener("click", () => {
  searchBtn.classList.toggle("fa-times");
  search.classList.toggle("active");
});

// login form
let btn = document.querySelector("#login");
let form = document.querySelector(".form");
let close = document.querySelector("#close");

close.onclick = function(){
  form.classList.remove("active");
  btn.classList.remove("fa-times");
}

btn.addEventListener("click", () => {
  btn.classList.toggle("fa-times");
  form.classList.toggle("active");
});

// video controls

let videoBtn = document.querySelectorAll(".control");

videoBtn.forEach(a =>{
  a.addEventListener("click", ()=>{
    document.querySelector(".controls .active").classList.remove("active");
    a.classList.add("active");


    let src = a.getAttribute("data-src");
    document.querySelector("#video").src = src; 
  });
});



// first swiper
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


// second swiper
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
