//your JS code here. If required.
const circles = document.querySelectorAll('.circle');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentCircle = 0;

function updateButtons() {
  prevBtn.disabled = currentCircle === 0;
  nextBtn.disabled = currentCircle === circles.length - 1;
}

function updateProgressBar() {
  circles.forEach((circle, index) => {
    if (index <= currentCircle) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });
}

prevBtn.addEventListener('click', () => {
  if (currentCircle > 0) {
    currentCircle--;
    updateButtons();
    updateProgressBar();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentCircle < circles.length - 1) {
    currentCircle++;
    updateButtons();
    updateProgressBar();
  }
});

updateButtons();
