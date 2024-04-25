gsap.registerPlugin(SlowMo);

function preLoadAnimHero() {
    var tl = gsap.timeline({ defaults: { ease: "SlowMo.easeOut" } });
    tl.to('#text', { y: '0%', duration: 0.7, stragger: 0.7 });
    tl.to('#text-2', { y: '0%', duration: 1.5, stragger: 0.7 });

    tl.to('#text-2', { y: '100%', duration: 1.5, stragger: 0.7 });
    tl.to('#text', { y: '100%', duration: 2, stragger: 0.7 });
    tl.to('.loader', { y: '-100%', duration: 1, stragger: 0.7 });

    tl.to('.text-1', { y: '0%', duration: 1, stragger: 1 });
    tl.to('.text-2', { y: '0%', duration: 1, stragger: 1.5 });
    tl.to('.text-3', { y: '0%', duration: 1, stragger: 2 });
    tl.to('.img-hero', { y: '0%', duration: 2, stragger: 3 });
    tl.to('.tag-position-2', { opacity: '1', duration: 1, stragger: 4 });
    tl.to('.tag-position-1', { opacity: '1', duration: 1, stragger: 4 });
    tl.to('.citation-position', { opacity: '1', duration: 1, stragger: 4 });
}

document.addEventListener("DOMContentLoaded", function () {
    preLoadAnimHero();

})