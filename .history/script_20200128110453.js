
const nodeArray = [
    document.querySelector('.hotel-main'),
    document.querySelector('.hotel-about'),
    document.querySelector('.galery'),
    document.querySelector('.contact')
];

ScrollReveal().reveal(nodeArray, {
  delay: 475,
  duration: 1000,
  distance: '0px',
    opacity: 0.8
  reset: true
});