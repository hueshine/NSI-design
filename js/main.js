const header = document.querySelector(".header");

$(window).on('scroll', function() {
    if ($(this).scrollTop() >80){  
        header.classList.add('solid-header')
    }
    else{
        header.classList.remove('solid-header')
    }
});


// Responsive Navigation

const menuBtn = document.querySelector('.menu-btn');
const navBox = document.querySelector('.navs')

menuBtn.addEventListener('click',(e) => {
    e.preventDefault();
    menuBtn.classList.toggle('open')
    console.log("clicked")
    navBox.classList.toggle("open")
})

closeBtn.addEventListener('click',(e) => {
    e.preventDefault();
    navBox.classList.remove("open")
})


// Scroll Event
$(window).on('scroll', function(){
    var scrolled = $(window).scrollTop();
    if (scrolled > 600) $('.go-top').addClass('active');
    if (scrolled < 600) $('.go-top').removeClass('active');
});  
// Click Event
$('.go-top').on('click', function() {
    $("html, body").animate({ scrollTop: "0" },  500);
});

