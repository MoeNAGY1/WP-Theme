const header = document.querySelector(".nav_wrapper");
const social_ = document.querySelectorAll(".social-link");
const effectTL = gsap.timeline();
effectTL.from(header, {
        delay: .1,
        y: -16,
        opacity: 0,
        duration: 0.8,
        ease: "power3.InOut"
    })

    .from(social_, {
        delay: -0.6,
        x: -16,
        opacity: 0,
        duration: .3,
        ease: "power3.InOut",
        stagger: {
            amount: 0.5
        }
    })


$(document).ready(function () {
    $(".menu").click(function () {
        $(this).toggleClass("active");
        $(".navigation__overlay").toggleClass("active");
        $(".navigation__container").toggleClass("active");
        $(".navigation__social").toggleClass("active");
        $(".copyright-wrapper").toggleClass("active");
    })
});



var cursor = $(".cursor"),
    follower = $(".cursor-follower");

var posX = 0,
    posY = 0;

var mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.016, {
    repeat: -1,
    onRepeat: function () {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        TweenMax.set(follower, {
            css: {
                left: posX - 12,
                top: posY - 12
            }
        });

        TweenMax.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        });
    }
});

$(document).on("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

$(".link").on("mouseenter", function () {
    cursor.addClass("activeLink");
    follower.addClass("activeLink");
});
$(".link").on("mouseleave", function () {
    cursor.removeClass("activeLink");
    follower.removeClass("activeLink");
});


function animateFrom(elem, direction) {
  direction = direction | 1;
  
  var x = 0,
      y = direction * 100;
  if(elem.classList.contains("gs_reveal_fromLeft")) {
    x = -100;
    y = 0;
  } else if(elem.classList.contains("gs_reveal_fromRight")) {
    x = 100;
    y = 0;
  }
  gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
    duration: 1.25, 
    x: 0,
    y: 0, 
    autoAlpha: 1, 
    ease: "expo", 
    overwrite: "auto"
  });
}

function hide(elem) {
  gsap.set(elem, {autoAlpha: 0});
}

document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
    hide(elem); // assure that the element is hidden when scrolled into view
    
    ScrollTrigger.create({
      trigger: elem,
      onEnter: function() { animateFrom(elem) }, 
      onEnterBack: function() { animateFrom(elem, -1) },
      onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
    });
  });
});