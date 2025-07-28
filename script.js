gsap.registerPlugin(ScrollTrigger);

// header border-bottom
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 0) {
    $("header").addClass("border-bottom");
  } else {
    $("header").removeClass("border-bottom");
  }
});


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

for (let i = 1; i <= 2; i++) {
  gsap.to(`.item-text-box-${i}`, {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: `.item-text-box-${i}`,
      start: "top bottom",
      end: "top center",
      scrub: true
    }
  });
}

gsap.to(".item-2 .left-title", {
  opacity: 1,
  y: 0,
  scrollTrigger: {
    trigger: ".item-2 .left-title",
    start: "top bottom",
    end: "top center",
    scrub: true
  }
});

gsap.to(".item-2__right", {
  opacity: 1,
  y: 0,
  scrollTrigger: {
    trigger: ".item-2__right",
    start: "top bottom",
    end: "top center",
    scrub: true
  }
});



// slideUp animation
$(document).ready(function() {
  const $sections = $('.sec');
  const animatedSections = new Set();

  $(window).on('scroll', function() {
    $sections.each(function(index, section) {
      const $section = $(section);
      if (animatedSections.has(section)) return;

      const sectionTop = $section.offset().top;
      const scrollBottom = $(window).scrollTop() + $(window).height();

      if (scrollBottom >= sectionTop) {
        $section.find('.animate-item').addClass('animated');
        animatedSections.add(section);
      }
    });
  });
});






// gsap.utils.toArray(".slide-up-0").forEach((elem) => {
//   elem.style.animation = "none";

//   ScrollTrigger.create({
//     trigger: elem,
//     start: "top bottom",
//     once: true,
//     onEnter: () => {
//       elem.style.animation = "none";
//       void elem.offsetHeight;
//       elem.style.animation = "";
//     }
//   });
// });

// gsap.utils.toArray(".slide-up-05").forEach((elem) => {
//   elem.style.animation = "none";

//   ScrollTrigger.create({
//     trigger: elem,
//     start: "top bottom",
//     once: true,
//     onEnter: () => {
//       elem.style.animation = "none";
//       void elem.offsetHeight;
//       elem.style.animation = "";
//     }
//   });
// });

// gsap.utils.toArray(".slide-up-1").forEach((elem) => {
//   elem.style.animation = "none";

//   ScrollTrigger.create({
//     trigger: elem,
//     start: "top bottom",
//     once: true,
//     onEnter: () => {
//       elem.style.animation = "none";
//       void elem.offsetHeight;
//       elem.style.animation = "";
//     }
//   });
// });

// gsap.utils.toArray(".slide-up-15").forEach((elem) => {
//   elem.style.animation = "none";

//   ScrollTrigger.create({
//     trigger: elem,
//     start: "top bottom",
//     once: true,
//     onEnter: () => {
//       elem.style.animation = "none";
//       void elem.offsetHeight;
//       elem.style.animation = "";
//     }
//   });
// });

// gsap.utils.toArray(".slide-up-2").forEach((elem) => {
//   elem.style.animation = "none";

//   ScrollTrigger.create({
//     trigger: elem,
//     start: "top bottom",
//     once: true,
//     onEnter: () => {
//       elem.style.animation = "none";
//       void elem.offsetHeight;
//       elem.style.animation = "";
//     }
//   });
// });

// gsap.utils.toArray(".slide-up-25").forEach((elem) => {
//   elem.style.animation = "none";

//   ScrollTrigger.create({
//     trigger: elem,
//     start: "top bottom",
//     once: true,
//     onEnter: () => {
//       elem.style.animation = "none";
//       void elem.offsetHeight;
//       elem.style.animation = "";
//     }
//   });
// });