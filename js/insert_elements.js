

const menuLink = document.querySelectorAll(".nav__link")
const inputMenu = document.querySelector("#bx-input")


menuLink.forEach(item => item.addEventListener("click", () => {
  inputMenu.checked = false
}))

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    inputMenu.checked = false
  }
});


const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
//   spaceBetween: 10,
  freeMode: true,

  pagination: {
    el: '.swiper-pagination',
  },

  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  breakpoints: {
        0: {
            slidesPerView: 1,
        },
        540: {
            slidesPerView: 2,
        },
    },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

