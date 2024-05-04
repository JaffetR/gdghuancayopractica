const githubElement = document.getElementById('github');
const descriptionElement = document.getElementById('description');

const githubText = 'GITHUB';
const descriptionText = 'Your description here.';

let index = 0;
let isDeleting = false;
let timer;

function typeEffect() {
  if (isDeleting) {
    if (githubElement.textContent.length > 0) {
      githubElement.textContent = githubElement.textContent.substring(0, githubElement.textContent.length - 1);
    } else {
      isDeleting = false;
      index = 0;
    }
  } else {
    if (index < githubText.length) {
      githubElement.textContent += githubText[index];
      index++;
    } else {
      isDeleting = true;
    }
  }

  let typingSpeed = isDeleting ? 50 : 200;

  timer = setTimeout(typeEffect, typingSpeed);
}

function typeDescription() {
  if (index < descriptionText.length) {
    descriptionElement.textContent += descriptionText[index];
    index++;
    timer = setTimeout(typeDescription, 100);
  } else {
    clearTimeout(timer);
    index = 0;
    descriptionElement.textContent = '';
    setTimeout(typeEffect, 1000);
  }
}

setTimeout(typeEffect, 1000);
setTimeout(typeDescription, 2000);
