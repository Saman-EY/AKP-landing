document.addEventListener("DOMContentLoaded", function () {
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

    on: {
      slideChange: function () {
        // Get the active index
        const activeIndex = swiper.activeIndex + 1; // Add 1 to make it human-readable (start from 1 instead of 0)

        // Update the active slide index display
        document.getElementById(
          "active-slide-index"
        ).innerText = `0${activeIndex}`;

        const bullets = document.querySelectorAll(".swiper-pagination-bullet");

        // Loop through all bullets and reset the background color
        bullets.forEach((bullet) => {
          bullet.style.backgroundColor = ""; // Reset background
        });

        const nextBtn = document.querySelector(".custom-next-btn");
        const prevBtn = document.querySelector(".custom-prev-btn");
        const activeBullet = document.querySelector(
          ".swiper-pagination-bullet-active"
        );
        const activeIndexNumber = document.querySelector("#active-slide-index");
        const NavbarBtn = document.querySelector("#NavbarBtn");

        if (activeIndex > 4) {
          nextBtn.classList.add("text-black");
          prevBtn.classList.add("text-black");
          nextBtn.classList.remove("text-white");
          prevBtn.classList.remove("text-white");
          activeBullet.style.backgroundColor = "black";
          activeIndexNumber.classList.add("text-black");
          activeIndexNumber.classList.remove("text-white");
          NavbarBtn.classList.add("text-black");
          NavbarBtn.classList.remove("text-white");
        } else if (activeIndex <= 4) {
          nextBtn.classList.remove("text-black");
          prevBtn.classList.remove("text-black");
          nextBtn.classList.add("text-white");
          prevBtn.classList.add("text-white");
          activeBullet.style.backgroundColor = "white";
          activeIndexNumber.classList.add("text-white");
          activeIndexNumber.classList.remove("text-black");
          NavbarBtn.classList.add("text-white");
          NavbarBtn.classList.remove("text-black");
        }
      },
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
      468: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      868: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
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
      468: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      868: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const customPrevBtn = document.getElementById("homeslidernext");
  const customNextBtn = document.getElementById("homesliderprev");

  customPrevBtn.addEventListener("click", function () {
    swiper.slidePrev();
  });

  customNextBtn.addEventListener("click", function () {
    swiper.slideNext();
  });

  const customPrevBtn2 = document.getElementById("carsSliderPrev");
  const customNextBtn2 = document.getElementById("carsSliderNext");

  customPrevBtn2.addEventListener("click", function () {
    Carswiper.slidePrev();
  });

  customNextBtn2.addEventListener("click", function () {
    Carswiper.slideNext();
  });

  const customPrevBtn3 = document.getElementById("carsSliderPrev2");
  const customNextBtn3 = document.getElementById("carsSliderNext2");

  customPrevBtn3.addEventListener("click", function () {
    Carswiper2.slidePrev();
  });

  customNextBtn3.addEventListener("click", function () {
    Carswiper2.slideNext();
  });
});

// navbar
const openNav = document.querySelector("#openNav");
const closeNav = document.querySelector("#closeNav");
const overlay = document.querySelector(".NavbarOverlay");
const navbar = document.querySelector(".NavbarMenu");

openNav.addEventListener("click", () => {
  overlay.classList.add("open");
  navbar.classList.add("open");
});

closeNav.addEventListener("click", () => {
  overlay.classList.remove("open");
  navbar.classList.remove("open");
});
