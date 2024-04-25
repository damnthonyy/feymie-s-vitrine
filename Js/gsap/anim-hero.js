gsap.registerPlugin(ScrollTrigger, SlowMo);

/* function animHero() {
    var tl = gsap.timeline({ defaults: { ease: "SlowMo.easeOut" } });
    tl.to('.hero-text', { y: '0%', duration: 0.7, stragger: 1 });
    tl.to('.img-hero', { y: '0%', duration: 1.2, stragger: 2 });
}; */

const $hero = document.querySelector('.p-hero-div-pic');
const $ImgHero = document.querySelector('.img-hero');


//mon code sur github copié

/* gsap.to($ImgHero, {
    scrollTrigger: {
        trigger: $hero,
        markers: true,
        start: "20% 25%", // first: start , 2nd :scrolleur start
        end: "bottom top ",
        scrub: true,
        pin: false,
        invalidateOnRefresh: true,
    },
    y: $ImgHero.offsetHeight - $hero.offsetHeight,
    ease: "none"
})
 */

//le script code pen 
/* gsap.utils.toArray(".image-container").forEach(function (container) {
    let image = container.querySelector("img");

    gsap.to(image, {
        y: () => image.offsetHeight - container.offsetHeight,
        ease: "none",
        scrollTrigger: {
            trigger: container,
            scrub: true,
            pin: false,
            markers: true,
            invalidateOnRefresh: true
        },
    });
}); */