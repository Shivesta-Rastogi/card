$(document).ready(function () {
    $('.container').mouseenter(function () {
        $('.card').stop().animate({
            top: '-90px'
        }, 'slow');
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: 0
        }, 'slow');
    });
});




  const card = document.querySelector('.card-container');

  // Add click event to the card
  card.addEventListener('click', () => {
    card.classList.toggle('active'); // Toggle the 'active' class
  });


