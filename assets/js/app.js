const tl = new TimelineLite({ paused: true });
tl.to('.cover', 1, {
width: '60%;',
ease: Power2.easeOut
});