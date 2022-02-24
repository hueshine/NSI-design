
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
        start: 'top center+=60%',
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
        start: 'top center+=40% ',
        end: "bottom bottom",
        
    },

    opacity: 0,
    y: -5
})


gsap.from('.foundation', {
    scrollTrigger: {
        trigger: '.foundation',
        start: 'top center+=60% ',
        end: "bottom bottom",       
    },

    opacity: 0,
    y: -2
})

gsap.from('.at_glance', {
    scrollTrigger: {
        trigger: '.at_glance',
        start: 'top center+=60% ',
        end: "bottom bottom",
        
       
    },

    opacity: 0,
    y: 20
})



gsap.from('.intro', {
  opacity:0,
  duration: 1, 
  y: 250
})


gsap.from('.lists .learn-card', {
  scrollTrigger: {
      trigger: '.learn-card',
      start: 'top center+=80% ',
      end: "bottom bottom",
      
  },
  duration: 1,
  opacity: 0,
  stagger: 0.5,
  y: 250
})

ScrollTrigger.create({ 
  trigger: '.gallery .whole-wrapper', 
  start: 'top top+=20%', 
  pin: '.gallery .whole-wrapper .events-list',  
  end: 'bottom bottom', 
})

