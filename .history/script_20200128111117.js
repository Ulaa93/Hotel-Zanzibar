
const nodeArray = [
    document.querySelector('.hotel-main'),
    document.querySelector('.hotel-about'),
    document.querySelector('.galery'),
    document.querySelector('.contact')
];

ScrollReveal().reveal(nodeArray, {
  delay: 75,
  duration: 1000,
  reset: true
});