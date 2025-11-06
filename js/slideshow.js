let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Auto advance slides every 5 seconds
setInterval(function() {
  plusSlides(1);
}, 5000);

// Add event listeners for keyboard navigation
document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowLeft') {
    plusSlides(-1);
  } else if (e.key === 'ArrowRight') {
    plusSlides(1);
  }
});

// Add swipe functionality for touch devices
let touchstartX = 0;
let touchendX = 0;

const slider = document.querySelector('.slideshow-container');

function handleGesture() {
  if (touchendX < touchstartX) plusSlides(1);
  if (touchendX > touchstartX) plusSlides(-1);
}

slider.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX;
});

slider.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX;
  handleGesture();
});
