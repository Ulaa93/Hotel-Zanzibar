
const nodeArray = [
    document.querySelector('.hotel-main'),
    document.querySelector('.hotel-about'),
    document.querySelector('.galery'),
    document.querySelector('.events'),
    document.querySelector('.reservation'),
    document.querySelector('.contact')
];

ScrollReveal().reveal(nodeArray, {
  delay: 275,
  duration: 1000,
  rotate: { x: 10, y: 50, z: 0 },
  reset: true
});