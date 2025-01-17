document.getElementById('showHeartsButton').addEventListener('click', function() {
  createHeart();
});

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerText = '❤️';

  // Set random position
  const heartX = Math.random() * window.innerWidth;
  const heartY = window.innerHeight + 50; // Start below the viewport

  heart.style.left = `${heartX}px`;
  heart.style.top = `${heartY}px`;

  // Append heart to the container
  document.getElementById('heartContainer').appendChild(heart);

  // Remove heart after animation ends
  setTimeout(() => {
    heart.remove();
  }, 3000); // Match the duration of the animation
}
