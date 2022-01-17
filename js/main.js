// const header = document.querySelector(".header");

// $(window).on('scroll', function() {
//     if ($(this).scrollTop() >80){  
//         header.classList.add('solid-header')
//     }
//     else{
//         header.classList.remove('solid-header')
//     }
// });




// Responsive Navigation

const menuBtn = document.querySelector('.menu-btn');
if(menuBtn) {
    
const navBox = document.querySelector('.navs')

menuBtn.addEventListener('click',(e) => {
    e.preventDefault();
    menuBtn.classList.toggle('open')
    console.log("clicked")
    navBox.classList.toggle("open")
})

// // closeBtn.addEventListener('click',(e) => {
// //     e.preventDefault();
// //     navBox.classList.remove("open")
// })
}

var owl;
    function customPager() {

        $.each(this.owl.userItems, function (i) {

            var titleData = jQuery(this).find('h3').text();
            var paginationLinks = jQuery('.owl-controls .owl-pagination .owl-page span');

            $(paginationLinks[i]).append(titleData).wrap('<h3 class="slideTitle"></h3>');

        });
    }

$('.slide').owlCarousel({
    autoPlay: 4000,
    navigation: true,
    slideSpeed: 3000,
    paginationSpeed: 2000,
    singleItem: true,
    afterInit: customPager,
    afterUpdate: customPager,
    navigationText : false,
    loop: true,
    margin: 0,
    nav: false,
    autoplay:true,
    dots: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplayTimeout: 6000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})


let popUp = document.querySelector(".popup");
let closeBtn = document.querySelector(".close-btn");
let page = document.querySelector(".full");

popUp.addEventListener('click', ()=> {
    page.classList.toggle('active')
})
closeBtn.addEventListener('click',(e) => {
    page.classList.remove("active")
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

