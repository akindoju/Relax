const text = document.getElementById('text');
const subText = document.getElementById('sub-text');
const container = document.getElementById('container');
const heading = document.getElementById('heading');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  text.innerText = 'Breathe in';
  subText.innerText = '(Through your nose)';
  container.className = 'container grow';
  heading.className = 'heading grow';

  setTimeout(() => {
    text.innerText = 'Hold';
    subText.innerText = '';

    setTimeout(() => {
      text.innerText = 'Breathe out';
      subText.innerText = '(Through your mouth)';
      container.className = 'container shrink';
      heading.className = 'heading shrink';
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);
