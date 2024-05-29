import { gsap } from "gsap";
import SplitText from "gsap-trial/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, SplitText);

var split = new SplitText("#ID", { type: "chars" });

gsap.from(split.chars, {
    duration: 1,
    y: 10,
    autoAlpha: 0,
    stagger: 0.05
});

gsap.utils.toArray(".hero__row").forEach((container, index) => {
    let tl = gsap.timeline({ paused: true });
    const isEven = index % 2 === 0;
    gsap.set(container, { xPercent: isEven ? -120 : 10 })
    tl.to(container, {
        duration: 2,
        autoAlpha: 1,
        delay: 2,
        stagger: 0.05,
        xPercent: isEven ? 100 : -100,
        scrollTrigger: {
            scrub: true,
            start: "bottom bottom+=120%",
            end: () => `+=${window.innerHeight * 4}`,
            // start: "top bottom",
            // end: "bottom top",
            // markers: true,
        }
    });

});

// gsap.set(".hero__row:nth-child(1)", { xPercent: -37 })
// gsap.to(".hero__row:nth-child(1)", {
//     duration: 2,
//     autoAlpha: 1,
//     delay: 2,
//     stagger: 0.05,
//     xPercent: 100,
//     scrollTrigger: {
//         scrub: true,
//         // start: "top bottom",
//         // end: "bottom top",
//         markers: true,
//     }
// });