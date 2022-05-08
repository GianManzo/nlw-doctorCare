// ------------------FUNCTION-MANAGER------------------
function onScroll() {
  showNavScroll()
  backToTop()
  activeMenu(home)
  activeMenu(services)
  activeMenu(about)
  activeMenu(contact)
}

function activeMenu(section) {
  const targetLine = scrollY + innerHeight / 2
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndReachOrPassedTargetLine = sectionEndsAt <= targetLine
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndReachOrPassedTargetLine
  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(
    `.mobileMenu a[href*=${sectionId}]`
  )
  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
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

//------------------SWIPER------------------

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  loop: false,
  breakpoints: {
    //para as @mediaquerie
    900: {
      slidesPerView: 2, //apartir de 767px add 2 por pag
      setWrapperSize: true
    },
    1300: {
      slidesPerView: 3, //apartir de 767px add 2 por pag
      setWrapperSize: true
    }
  }
})

// ------------------SCROLL-REVEAL------------------

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
