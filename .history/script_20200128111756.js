
const nodeArray = [
    document.querySelector('.hotel-main'),
    document.querySelector('.hotel-about'),
    document.querySelector('.galery'),
    document.querySelector('.contact')
];

ScrollReveal().reveal(nodeArray, {
  delay: 175,
  duration: 1000,
  rotate: { x: 100, y: 100, z: 0 },
  reset: true
});