new hoverEffect({
    parent: document.querySelector(".distortion"),
    intensity: 0.2,
    image1: "01.png",
    image2: "02.png",
    displacementImage: "diss.png",
    imagesRatio: 380 / 300,
});

let tl =new gsap.timeline();
tl.to(".first", {
    top: "-100%",
    ease: Expo.easeInOut,
});
tl.to(".second", {
    top: "-100%",
    ease: Expo.easeInOut,
},"-.8");
tl.to(".third", {
    top: "-100%",
    ease: Expo.easeInOut,
},"-.8");
tl.from(".navbar", {
    opacity: 0,
    duration: .5,
    y: "20%",
    ease: Expo.easeInOut,
});
tl.from(".media ul li", {
    opacity: 0,
    duration: 1,
    y: "-1000%",
    ease: Expo.easeInOut,
    stagger: .1
},"-=.8");
tl.from(".text h1 .hidetext", {
    duration: 1,
    y: "100%",
    ease: Expo.easeInOut,
},"-=.8");
tl.from(".text h3 .hidetext", {
    duration: 1,
    y: "100%",
    ease: Expo.easeInOut,
},"-=.8");
tl.from(".text p .hidetext ", {
    duration: 1,
    y: "100%",
    ease: Expo.easeInOut,
},"-=.8");
tl.from(".text h2 ", {
    duration: 1,
    opacity: 0,
    x: "-10000%",
    ease: Expo.easeInOut,
},"-=1");
tl.from(".sponsor ", {
    duration: 1,
    opacity: 0,
    y: "20%",
    ease: Expo.easeInOut,
});
tl.from(".sponsor p", {
    duration: 1,
    opacity: 0,
    y: "20%",
    ease: Expo.easeInOut,
});
tl.from(".distortion", {
    duration: 1,
    opacity: 0,
    y: "20%",
    ease: Expo.easeInOut,
},"-=2");

