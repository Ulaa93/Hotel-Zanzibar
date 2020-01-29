
const nodeArray = [
    document.querySelector('.hotel-main'),
    document.querySelector('.hotel-about'),
    document.querySelector('.galery'),
    document.querySelector('.contact')
];

ScrollReveal().reveal(nodeArray, {
  delay: 375,
  duration: 500,
  reset: true
});