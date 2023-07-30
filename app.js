

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

const firstPageAnimation = () => {
    let tl = gsap.timeline()

    tl.from("#nav", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: Expo.easeInOut
    }).to('.boudingElem', {
        y: 0,
        ease: Expo.easeInOut,
        duration: 0.8,
        stagger: 0.2
    }).from('#hero_footer', {
        y: -10,
        opacity: 0,
        duration: 0.6,
        delay: -1,
        ease: Expo.easeInOut

    })
}
firstPageAnimation()

const mouseFollower = () => {
    window.addEventListener('mousemove', (e) => {
        const circle = document.querySelector('#cursor-circle')
        circle.style.transform =
            `translate(${e.clientX}px,${e.clientY}px)`
    })
}
mouseFollower()

const elem = document.querySelectorAll(".elem")

elem.forEach((elem) => {
    let rot = 0, rotdiff = 0
    elem.addEventListener('mouseleave', (e) => {
        gsap.to(elem.querySelector('img'), {
            opacity: 0,
            duration: 0.5


        })
    })
    elem.addEventListener('mousemove', (e) => {
        const topdiff = e.clientY - elem.getBoundingClientRect().top
        rotdiff = e.clientX - rot
        rot = e.clientX
        gsap.utils.clamp()
        gsap.to(elem.querySelector('img'), {
            opacity: 1,
            ease: Power3,
            top: topdiff,
            left: e.clientX,
            rotate: gsap.utils.clamp(-20, 20, rotdiff)

        })
    })
})