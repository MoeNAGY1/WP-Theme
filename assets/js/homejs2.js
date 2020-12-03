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
})