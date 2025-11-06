document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentSlide = 0;

    function showSlide(n) {
        slider.style.transform = `translateX(-${n * 100}%)`;
        currentSlide = n;
    }

    function nextSlide() {
        if (currentSlide >= slides.length - 1) {
            showSlide(0);
        } else {
            showSlide(currentSlide + 1);
        }
    }

    function prevSlide() {
        if (currentSlide <= 0) {
            showSlide(slides.length - 1);
        } else {
            showSlide(currentSlide - 1);
        }
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Auto-advance slides every 5 seconds
    setInterval(nextSlide, 5000);
});
