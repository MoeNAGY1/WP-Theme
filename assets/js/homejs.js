const header = document.querySelector(".nav_wrapper");
const effect_1 = document.querySelector(".effect_1");
const effect_2 = document.querySelector(".effect_2");
const infoP = document.querySelector(".info p");
const cta = document.querySelector(".cta");
const social_ = document.querySelectorAll(".social-link");
const effectTL = gsap.timeline();
effectTL.from(header, {
        delay: 2,
        y: -16,
        opacity: 0,
        duration: 0.8,
        ease: "power3.InOut"
    })
    .from([effect_1, effect_2, infoP, cta], {
        delay: -0.1,
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.InOut",
        stagger: {
            amount: 0.4
        }
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




TweenMax.to(".homeOverlay h1", 2, {
    opacity:0,
    y: -60,
    ease: Expo.easeInOut
})
TweenMax.to(".homeOverlay span", 2, {
    delay:.3,
    opacity:0,
    y: -60,
    ease: Expo.easeInOut
})
TweenMax.to(".homeOverlay", 2, {
    delay:1,
    top:"-100%",
    ease: Expo.easeInOut
});






var cursor = $(".cursor"),
    follower = $(".cursor-follower");

var posX = 0,
    posY = 0;

var mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function() {
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

$(document).on("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

$(".link").on("mouseenter", function() {
    cursor.addClass("activeLink");
    follower.addClass("activeLink");
});
$(".link").on("mouseleave", function() {
    cursor.removeClass("activeLink");
    follower.removeClass("activeLink");
});
