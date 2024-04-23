gsap.registerPlugin(SlowMo);

function preLoad() {
    var tl = gsap.timeline({ defaults: { ease: "SlowMo.easeOut" } });
    tl.to('#text', { y: '0%', duration: 0.7, stragger: 0.7 });
    tl.to('#text-2', { y: '0%', duration: 1.5, stragger: 0.7 });

    tl.to('#text-2', { y: '100%', duration: 1.5, stragger: 0.7 });
    tl.to('#text', { y: '100%', duration: 2, stragger: 0.7 });
    tl.to('.loader', { y: '-100%', duration: 1, stragger: 0.7 });
    return tl;
}

document.addEventListener("DOMContentLoaded", function () {
    preLoad();
})