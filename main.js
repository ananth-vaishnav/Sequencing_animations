const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
};

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");
function animateElement(element, nextElement) {
  const animation = element.animate(aliceTumbling, aliceTiming); 
  animation.onfinish = () => {
    if (nextElement) {
      animateElement(nextElement); 
    }
  };
}

animateElement(alice1, alice2);
animateElement(alice2, alice3);
