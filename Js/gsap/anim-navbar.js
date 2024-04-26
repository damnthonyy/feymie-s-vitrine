gsap.registerPlugin(ScrollTrigger, SlowMo);

const $menu = document.querySelector('.menu');
const $close = document.querySelector('.svg-close-content');
const $menuMobile = document.querySelector('.nav-link');

//anim svg menu 
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

//anim overlay desktop
function open() {
    var tl = gsap.timeline({ defaults: { ease: "SlowMo.easeOut" } });
    tl.to('.anim-link', { y: '0%', duration: 0.7, stragger: 0.7 });
}
function close() {
    var tl = gsap.timeline({ defaults: { ease: "SlowMo.easeOut" } });
    tl.to('.anim-link', { y: '100%', duration: 0.7, stragger: 0.7 });
}
function openMobile() {
    $menu.addEventListener('click', () => {
        $menuMobile.classList.add('isActive')
    })
}
function closeMobile() {
    $close.addEventListener('click', () => {
        $menuMobile.classList.remove('isActive')
    })
}
// script changement de state des boutons en fonction de la width 
$menu.addEventListener("click", () => {
    if (window.innerWidth >= 1200 && window.innerWidth <= 2500) {
        open();
    } else {
        // Autre action si la taille de l'écran est en dehors de 600-800 pixels
        openMobile();
    }
})
$close.addEventListener("click", () => {
    if (window.innerWidth >= 1200 && window.innerWidth <= 2500) {
        close();
    } else {
        // Autre action si la taille de l'écran est en dehors de 600-800 pixels
        closeMobile();
    }
})

/* $close.addEventListener("click", () => {
    close();
}) */
