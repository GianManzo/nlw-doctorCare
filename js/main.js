function onScroll() {
  showNavScroll()
  backToTop()
}

function showNavScroll() {
  if (window.scrollY > 0) {
    nav.classList.add('scroll')
  } else {
    nav.classList.remove('scroll')
  }
}

function backToTop() {
  if (window.scrollY > 1000) {
    btnTop.classList.add('show')
  } else {
    btnTop.classList.remove('show')
  }
}

const links = document.querySelectorAll('.mobileMenu a')
for (const link of links) {
  link.addEventListener('click', function (event) {
    body.classList.remove('menuExpanded')
  })
}

const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function (event) {
    body.classList.toggle('menuExpanded')
  })
}

// ------------------ SWIPER

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  loop: true,
  effect: 'slide',
  breakpoints: {
    900: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

// ------------------ SCROLL REVEAL

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: '750',
  reset: TextTrackCue
})
scrollReveal.reveal(
  `#home, #services,
  #about, #contact,
  #footer
`,
  { interval: 100 }
)

window.addEventListener('scroll', onScroll)
