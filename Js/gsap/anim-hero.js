gsap.registerPlugin(ScrollTrigger, SlowMo);

function animHero() {
    var tl = gsap.timeline({ defaults: { ease: "SlowMo.easeOut" } });
    tl.to('.hero-text', { y: '0%', duration: 0.7, stragger: 1 });
    tl.to('.img-hero', { y: '0%', duration: 1.2, stragger: 2 });
};
