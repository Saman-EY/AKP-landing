const swiper = new Swiper(".swiper.main", {
  speed: 500,
  slidesPerView: 1,
  spaceBetween: 10,
  direction: "vertical",
  //   cssMode: true,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const Carswiper = new Swiper(".swiper.car", {
  speed: 500,
  slidesPerView: 1,
  spaceBetween: 10,

  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2, // Show 1 slide per view
      spaceBetween: 30,
    },
    1000: {
      slidesPerView: 3, // Show 1 slide per view
      spaceBetween: 30,
    },
  },


  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const Carswiper2 = new Swiper(".swiper.car2", {
  speed: 500,
  slidesPerView: 1,
  spaceBetween: 10,

  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2, // Show 1 slide per view
      spaceBetween: 30,
    },
    1000: {
      slidesPerView: 3, // Show 1 slide per view
      spaceBetween: 30,
    },
  },


  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



// const customPrevBtn = document.getElementById("homeslidernext");
// const customNextBtn = document.getElementById("homesliderprev");

// customPrevBtn.addEventListener("click", function () {
//   swiper.slidePrev(); 
// });

// customNextBtn.addEventListener("click", function () {
//   swiper.slideNext(); 
// });


const customPrevBtn2 = document.getElementById("carsSliderPrev");
const customNextBtn2 = document.getElementById("carsSliderNext");

customPrevBtn2.addEventListener("click", function () {
  Carswiper.slidePrev(); 
});

customNextBtn2.addEventListener("click", function () {
  Carswiper.slideNext();
});
