const githubElement = document.getElementById('github');
const descriptionElement = document.getElementById('description');

const githubText = 'GITHUB';
const descriptionText = 'Your description here.';

let index = 0;
let isDeleting = false;
let timer;

function typeEffect() {
  let text = githubText.substring(0, index);

  if (isDeleting) {
    text = text.substring(0, text.length - 1);
    index--;
  } else {
    index++;
  }

  githubElement.textContent = text;

  if (!isDeleting && text === githubText) {
    isDeleting = true;
    setTimeout(typeDescription, 1000);
  } else if (isDeleting && text === 'G') {
    isDeleting = false;
    setTimeout(() => {
      index = 0;
      githubElement.textContent = '';
      typeEffect();
    }, 1000);
  }

  let typingSpeed = isDeleting ? 50 : 200;
  timer = setTimeout(typeEffect, typingSpeed);
}

function typeDescription() {
  let text = descriptionText.substring(0, index);
  descriptionElement.textContent = text;

  if (index < descriptionText.length) {
    index++;
    timer = setTimeout(typeDescription, 100);
  } else {
    clearTimeout(timer);
    index = 0;
    setTimeout(() => {
      descriptionElement.textContent = '';
      typeEffect();
    }, 1000);
  }
}

function startAnimation() {
  setTimeout(typeEffect, 1000);
}

startAnimation(); // Start the animation
