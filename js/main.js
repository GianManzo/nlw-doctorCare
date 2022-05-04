function changeHeaderScroll(){
    if(window.scrollY > 0){//.scrollY é o scroll vertical
        nav.classList.add('scroll');
    }else{
        nav.classList.remove('scroll');
    }
}

window.addEventListener('scroll', function(event){
    changeHeaderScroll();
})

const toggle = document.querySelectorAll('nav .toggle');

for (const element of toggle){
    element.addEventListener('click', function(event){
        body.classList.toggle('menuExpanded')
    });
}

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    loop: true,
    effect: 'slide',
    
    breakpoints: {//para as @mediaquerie
        767: {
            slidesPerView: 2,//apartir de 767px add 2 por pag
            setWrapperSize: true
        }
    }

});
