
gsap.registerPlugin(ScrollTrigger);

let pictureContainers = document.querySelectorAll(".picture");

pictureContainers.forEach((container) => {
  let image = container.querySelector("img");
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      toggleActions: "restart none none reset"
    }
  });

  tl.set(container, { autoAlpha: 1 });
  tl.from(container, 1.5, {
    xPercent: -100,
    
  });
  tl.from(image, 1.5, {
    xPercent: 100,
    scale: 1.3,
    delay: -1.5,
  });
});

let generalHeadContainers = document.querySelectorAll(".generalHead");

generalHeadContainers.forEach((container) => {
  let image = container.querySelector("img");
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      toggleActions: "restart none none reset"
    }
  });

  tl.set(container, { autoAlpha: 1 });
  tl.from(container, 1.5, {
    yPercent: 20,
  
  });
  tl.from(image, 1.5, {
    yPercent: 20,
    scale: 1.3,
    delay: -1.5,

  });
});


gsap.from('.banner', {
    opacity:0,
    duration: 1, 
    y: -1500
})

gsap.from('.video', {
    opacity:0,
    delay: 0.5, 
    duration: 1, 
    x: 100
})


gsap.from('.mission p', {
    scrollTrigger: {
        trigger: '.mission',
        start: 'top center+=20%',
        end: "bottom bottom",
        toggleActions: "restart none none reset",
    },
    duration: 0.8,
    opacity: 0,
    y: 80
})

gsap.from('.para', {
    scrollTrigger: {
        trigger: '.para',
        start: 'top center ',
        end: "bottom bottom",
        
    },

    opacity: 0,
    y: -5
})

gsap.from('.bg', {
    scrollTrigger: {
        trigger: '.bg',
        start: 'top center+=40%',
        end: "bottom bottom",
        duration: 1
        
    },

    opacity: 0,
    x: -200
})

gsap.from('.foundation', {
    scrollTrigger: {
        trigger: '.foundation',
        start: 'top center ',
        end: "bottom bottom",
        
       
    },

    opacity: 0,
    y: -2
})

gsap.from('.at_glance', {
    scrollTrigger: {
        trigger: '.at_glance',
        start: 'top center ',
        end: "bottom bottom",
        
       
    },

    opacity: 0,
    y: 20
})

gsap.from('.small', {
    scrollTrigger: {
        trigger: '.small',
        start: 'top center ',
        end: "bottom bottom",
        
       
    },

    opacity: 0,
    y: 20
})

gsap.from('.image-card img', {
    scrollTrigger: {
        trigger: '.gallery',
        start: 'top center ',
        end: "bottom bottom",
        
    },
    duration: 0.8,
    opacity: 0,
    stagger: 0.5,
    y: -1
})

gsap.from('.intro', {
  opacity:0,
  duration: 1, 
  y: 250
})

gsap.to('.foundation .pattern', {
  scrollTrigger: {
    trigger: '.foundation',
    start: 'bottom center+=20% ',
    end: "bottom top",
    scrub: 2,
  },
  x: 150
})

gsap.to('.para .relative-wrap .pattern', {
  scrollTrigger: {
    trigger: '.para',
    start: 'center center-=20% ',
    end: "bottom bottom",
    scrub: 5,
  },
  y: -250
})