const header = document.querySelector(".header");

$(window).on('scroll', function() {
    if ($(this).scrollTop() >80){  
        header.classList.add('fixed-header')
    }
    else{
        header.classList.remove('fixed-header')
    }
});




// Responsive Navigation

const menuBtn = document.querySelector('.menu-btn');
if(menuBtn) {
    
const navBox = document.querySelector('.navs')
let closeBtn = document.querySelector(".close-btn");
menuBtn.addEventListener('click',(e) => {
    e.preventDefault();
    menuBtn.classList.toggle('open')
    console.log("clicked")
    navBox.classList.toggle("open")
})

if(closeBtn) {
    closeBtn.addEventListener('click',(e) => {
        e.preventDefault();
        navBox.classList.remove("open")
    })
}


function customPager () {
    console.log("changes")
}




$('.timeline').owlCarousel({
    loop: false,
    autoPlay: true,
    autoplayTimeout: 100,
    pagination: true,
    paginationNumbers: false,
    nav:true,
    center:false,
    margin: 15,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})


// let popUp = document.querySelector(".popup");
// // let closeBtnModal = document.querySelector(".full .close-btn");
// let page = document.querySelector(".full");

// popUp.addEventListener('click', ()=> {
//     page.classList.toggle('active')
    
// })
// closeBtnModal.addEventListener('click',(e) => {
//     page.classList.remove("active")
// })


}
$(document).ready(function () {

    if (screen.width < 769) {
        $(".events-list").hide();
    }
  
});


$( '.whole-wrapper .events-list .event' ).on('click', function () {
    $( '.events-list .event' ).removeClass( 'active' );
    $( this ).addClass( 'active' );
    
});

$( '.whole-wrapper .events-list .event' ).on('click', function () {
    $( '.whole-wrapper .wrapper' ).removeClass( 'active' );
    $( this ).addClass( 'active' );
    
});