// $(function () {

// })

const swiper = new Swiper('.swiper', {
  loop: true,
  effect: "cards",
  grabCursor: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-right',
    prevEl: '.swiper-button-left',
  },
});

const swiper2 = new Swiper('.swiper2', {
  loop: true,
  grabCursor: true,
  slidesPerView: 4,
  spaceBetween:0,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-right',
    prevEl: '.swiper-button-left',
  },
  breakpoints: {
    0: {
      slidesPerView: 1.13,
    },
    576: {
      slidesPerView: 1.13,
    },
    768: {
      slidesPerView: 1.5,
      spaceBetween: 0,
    },
    992: {
      slidesPerView: 1.35,
    },
    1200: {
      slidesPerView: 4,
    }
  }
});

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
  console.log('working')
});


// const overlay = document.querySelector('.productions__overlay');
// console.log(overlay)
// const parent = overlay.parentNode;
// console.log(parent)
// parent.removeChild(overlay)

// const allOverlays = document.querySelectorAll('.productions__overlay');

// for (let overlay of allOverlays) {
//   const parent = overlay.parentNode;
//   parent.removeChild(overlay)
// }

// for (let prod of prods) {
//   prod.addEventListener('click', () => {
//     console.log('sipmle prod')
//     const overlay = document.getElementsByClassName('productions__overlay');
//     console.log(overlay);
//     overlay.classList.add('production__overlay--unvis')
//   })
// }

// const links = document.querySelectorAll('.menu__item');

// for (let link of links) {
//   link.addEventListener('click', () => {
//     let activeLink = document.querySelector('.menu__item._active');
//     if (activeLink) {
//       activeLink.classList.remove('_active');
//     }
//     link.classList.add('_active');
//   })
// }

