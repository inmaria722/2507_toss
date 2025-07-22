gsap.registerPlugin(ScrollTrigger);

// sec-7
gsap.to(".left-box", {
  x: -800,
  scrollTrigger: {
    trigger: ".sec-7",
    start: "top bottom-=200px",
    scrub: true
  }
});

gsap.to(".right-box", {
  x: 800,
  scrollTrigger: {
    trigger: ".sec-7",
    start: "top bottom-=200px",
    scrub: true
  }
});


// sec-8
for (let i = 1; i <= 3; i++) {
  gsap.to(`.item-${i} img`, {
    opacity: 1,
    scrollTrigger: {
      trigger: `.item-${i} img`,
      start: "top bottom",
      end: "top top",
      scrub: true
    }
  });
}

for (let i = 1; i <= 3; i++) {
  gsap.to(`.item-title-${i}`, {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: `.item-title-${i}`,
      start: "top bottom",
      end: "top center",
      scrub: true
    }
  });
}

for (let i = 1; i <= 3; i++) {
  gsap.to(`.item-title-${i}`, {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: `.item-title-${i}`,
      start: "top bottom",
      end: "top center",
      scrub: true
    }
  });
}