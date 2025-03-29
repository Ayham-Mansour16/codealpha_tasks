const textElement = document.querySelector('.typing');
const text = 'Ayham - Web Designer - Full Stack Developer';
let index = 0;

function typeText() {
  if (index < text.length) {
    textElement.textContent += text[index];
    index++;
    setTimeout(typeText, 100);
  } else {
    setTimeout(() => {
      textElement.textContent = '';
      index = 0;
      typeText();
    }, 1000);
  }
}

window.onload = function() {
  typeText();
};
