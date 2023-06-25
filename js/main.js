"use strict";
const subMenu = document.querySelector(".menu__opener");
subMenu.addEventListener('click', function() {
    document.documentElement.classList.toggle('subMenuOpened')
})
document.addEventListener('click', function(e){
    if(e.target.closest('.burger')){
        document.documentElement.classList.toggle('burgered');
        document.body.classList.toggle('locked')
    }
})
const label = document.querySelector('label');
const search = document.querySelector('input');
search.addEventListener('focus', function(){
    label.style.opacity = "0"
});
search.addEventListener('blur', function(){
    label.style.opacity = "1"
})
let reviewSlider = new Swiper('.testimonials__slider', {
    wrapperClass: "testimonials__sliderwrapper",
    slideClass: "testimonials__review",
    navigation:{
        prevEl: ".testimonials__prev",
        nextEl: ".testimonials__next",
    },
    slidesPerView: 3,
    init: false,
    on: {
        init: function(){
            checkSize()
        },
        resize: function(){
            changeSlide();
        }
    }
});
function changeSlide(){
    if(window.innerWidth<479.98){
        reviewSlider.params.slidesPerView = 1;
    }
    else if(window.innerWidth<767.98){
        reviewSlider.params.slidesPerView = 2;
    }
    else{
        reviewSlider.params.slidesPerView = 3;
    }
}
function checkSize(){
    if(window.innerWidth<479.98){
        reviewSlider.params.slidesPerView = 1;
        console.log(1)
    }
    else if(window.innerWidth<767.98){
        console.log(2)
        reviewSlider.params.slidesPerView = 2;
    }
}
reviewSlider.init()