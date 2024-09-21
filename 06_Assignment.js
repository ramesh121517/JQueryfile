// FAQ Dropdown with jQuery
$(document).ready(function() {
    $('.faq-question').click(function() {
        $(this).next('.faq-answer').slideToggle();
        $(this).toggleClass('active');
    });
});

// Simple Slider Animation
let currentSlide = 0;
const slideWidth = $('.slider').width();

function nextSlide() {
    currentSlide++;
    if (currentSlide > 2) {
        currentSlide = 0;
    }
    $('#slides').animate({ left: -currentSlide * slideWidth }, 1000);
}

setInterval(nextSlide, 3000);

// Adjust slider when window is resized
$(window).resize(function() {
    $('#slides').css('left', -currentSlide * $('.slider').width());
});
