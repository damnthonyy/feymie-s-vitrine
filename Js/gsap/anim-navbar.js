gsap.registerPlugin(ScrollTrigger, SlowMo);

const $menu = document.querySelector('.menu');
const $close = document.querySelector('.svg-close-content');

$menu.addEventListener("mouseover", () => {
    gsap.fromTo(".svg-menu",
        { rotation: 0 },
        { rotation: 180, duration: 0.5, ease: "none" }
    );

})
$menu.addEventListener("mouseleave", () => {
    gsap.fromTo(".svg-menu",
        { rotation: 180 },
        { rotation: 0, duration: 0.5, ease: "none" }
    );
})
$close.addEventListener("mouseover", () => {
    gsap.fromTo(".svg-close-menu",
        { rotation: 0 },
        { rotation: 180, duration: 0.5, ease: "none" }
    );

})
$close.addEventListener("mouseleave", () => {
    gsap.fromTo(".svg-close-menu",
        { rotation: 180 },
        { rotation: 0, duration: 0.5, ease: "none" }
    );
})

function open() {
    var tl = gsap.timeline({ defaults: { ease: "SlowMo.easeOut" } });
    tl.to('.anim-link', { y: '0%', duration: 0.7, stragger: 0.7 });
}
function close() {
    var tl = gsap.timeline({ defaults: { ease: "SlowMo.easeOut" } });
    tl.to('.anim-link', { y: '100%', duration: 0.7, stragger: 0.7 });
}

$menu.addEventListener("click", () => {
    open();
})

$close.addEventListener("click", () => {
    close();
})
