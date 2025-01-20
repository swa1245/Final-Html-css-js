function LoadingAnim() {
  var tl = gsap.timeline();

  tl.from(".line h1", {
    y: 150,
    opacity: 0,
    duration: 0.6,
    delay: 0.6,
    stagger: 0.25,
  });

  tl.from("#lin1-part1", {
    opacity: 0,
    onStart: function () {
      var h5Timer = document.querySelector("#lin1-part1 h5");
      var grow = 0;
      var interval = setInterval(() => {
        if (grow < 100) {
          h5Timer.innerHTML = grow++;
        } else {
          h5Timer.innerHTML = 100;
          clearInterval(interval);
        }
      }, 30);
    },
  });

  tl.to(".line h2", {
    animationName: "anime",
    opacity: 1,
  });

  tl.to("#loader", {
    opacity: 0,
    duration: 0.4,
    delay: 3.5,
  });

  tl.from("#page1", {
    delay: 0.2,
    y: 1200,
    opacity: 0,
    ease: "power4.out",
  });

  tl.to("#loader", {
    display: "none",
    stagger: 0.2,
  });

  tl.from("#hero-1 h1, #hero-2 h1, #hero-3  , #hero-4 h1", {
    y: 120,
    opacity: 0,
    duration: 0.6,
    stagger: 0.25,
    ease: "power4.out",
  });
}

function cursorAn() {
  document.addEventListener("mousemove", (e) => {
    gsap.to("#crsr", {
      x: e.clientX,
      y: e.clientY,
    });
  });

  Shery.makeMagnet("#nav2 h4", {
    ease: "cubic-bezier(0.23, 1, 0.32, 1)",
    duration: 1,
  });
}

LoadingAnim();
cursorAn();
