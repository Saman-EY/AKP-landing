document.addEventListener("DOMContentLoaded", function () {
  function addScrollEventListeners2(swiperInstance) {
    // Get the active slide's section with the `scrollable` class
    const activeSlide = swiperInstance.slides[swiperInstance.activeIndex];
    const scrollableSection = activeSlide.querySelector(".scrollable");

    // Clear all previous event listeners and reset scroll position
    swiperInstance.slides.forEach((slide) => {
      const section = slide.querySelector(".scrollable");
      if (section) {
        section.onscroll = null;
        section.onpointerup = null;
        section.scrollTop = 0; // Reset scroll position to top on slide change
      }
    });

    if (scrollableSection) {
      const isScrollable =
        scrollableSection.scrollHeight > scrollableSection.clientHeight;

      if (!isScrollable) {
        swiperInstance.allowTouchMove = true;
      } else {
        swiperInstance.allowTouchMove = false;

        scrollableSection.onscroll = () => {
          let temp =
            scrollableSection.scrollTop + scrollableSection.clientHeight;
          temp = temp + 1;

          if (
            temp >= scrollableSection.scrollHeight ||
            scrollableSection.scrollTop === 0
          ) {
            // Enable swipe when either at the bottom or top of the section
            swiperInstance.allowTouchMove = true;
          } else {
            // Disable swipe until top or bottom is reached
            swiperInstance.allowTouchMove = false;
          }
        };
      }
    }
  }
  const swiper = new Swiper(".swiper.main", {
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 0,
    direction: "vertical",
    // freeMode: true,
    // allowTouchMove: false,
    // simulateTouch: false,
    mousewheel: true,

    pagination: {
      el: ".swiper-pagination",
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    on: {
      init: function () {
        const firstSlide = document.querySelector(
          `.swiper-slide:nth-child(1) [data-animate]`
        );
        const animateValue = firstSlide?.getAttribute("data-animate");

        if (animateValue) {
          animateSlides(animateValue);
        }

        addScrollEventListeners2(this);
      },

      slideChange: function () {
        const goToTopBtn = document.getElementById("goToTopBtn");

        if (swiper.activeIndex === 0) {
          goToTopBtn.classList.remove("d-flex");
          goToTopBtn.classList.add("d-none");
        } else {
          goToTopBtn.style.display = "flex";
          goToTopBtn.classList.remove("d-none");
          goToTopBtn.classList.add("d-flex");
        }

        addScrollEventListeners2(this);

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
        const NavbarBtn = document.querySelector("#openNav");

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

        const activeSlide = document.querySelector(
          `.swiper-slide:nth-child(${activeIndex}) [data-animate]`
        );
        const animateValue = activeSlide?.getAttribute("data-animate"); // Use optional chaining in case the element isn't found

        if (animateValue) {
          animateSlides(animateValue);
        }
      },
    },
  });

  const goToTopBtn = document.getElementById("goToTopBtn");

  goToTopBtn.onclick = function () {
    swiper.slideTo(0, 500); // Navigates to the first slide with a 500ms transition
  };
  

  function addScrollEventListeners() {
    const slides = document.querySelectorAll(".swiper-slide > section");

    slides.forEach((slide, index) => {
      slide.addEventListener("scroll", (event) => {
        if (slide.scrollTop + slide.clientHeight >= slide.scrollHeight) {
          if (index < slides.length - 1) {
            swiper.slideNext();
          }
        }
      });
    });
  }

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

  function animateSlides(activeAnimateValue) {
    // Select all elements with 'data-animate' attribute, regardless of their tag
    const elements = document.querySelectorAll("[data-animate]");

    elements.forEach((element) => {
      const elementAnimateValue = element.getAttribute("data-animate");

      if (elementAnimateValue === activeAnimateValue) {
        element.classList.add("show");
      } else {
        element.classList.remove("show");
      }
    });
  }

  // Select all buttons with class 'slider-btn'
  const Prevbuttons = document.querySelectorAll(".homesliderprevMobile");
  const Nextbuttons = document.querySelectorAll(".homeslidernextMobile");

  // Add click event listener to each button
  Prevbuttons.forEach(function (button) {
    button.addEventListener("click", function () {
      swiper.slideNext();
    });
  });
  Nextbuttons.forEach(function (button) {
    button.addEventListener("click", function () {
      swiper.slidePrev();
    });
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
