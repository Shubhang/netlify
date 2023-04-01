// Animation code
gsap.from("header", {
    duration: 1,
    y: "-100%",
    ease: "bounce.out",
});

gsap.from(".container", {
    scrollTrigger: {
        trigger: ".container",
        start: "top 80%",
    },
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.3,
});

// Add these lines for additional animations
gsap.from("header h1, header nav", {
    duration: 1,
    opacity: 0,
    y: -50,
    stagger: 0.2,
    delay: 0.5,
});

gsap.from("header p", {
    duration: 1,
    opacity: 0,
    x: -50,
    delay: 1.5,
});

gsap.from("footer", {
    scrollTrigger: {
        trigger: "footer",
        start: "top 90%",
    },
    duration: 1,
    opacity: 0,
    y: 50,
});
