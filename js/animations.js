document.addEventListener('DOMContentLoaded', function() {
    // Fade in animation for hero section
    const hero = document.getElementById('about-hero');
    hero.classList.add('visible');

    // Slide in animations for story and values sections
    const storySection = document.getElementById('our-story');
    const valuesSection = document.getElementById('our-values');

    function checkSlide() {
        const slideInAt = (window.scrollY + window.innerHeight) - storySection.offsetHeight / 2;
        const sectionBottom = storySection.offsetTop + storySection.offsetHeight;
        const isHalfShown = slideInAt > storySection.offsetTop;
        const isNotScrolledPast = window.scrollY < sectionBottom;

        if (isHalfShown && isNotScrolledPast) {
            storySection.classList.add('visible');
            valuesSection.classList.add('visible');
        }
    }

    window.addEventListener('scroll', checkSlide);

    // Initial check in case sections are already in view on page load
    checkSlide();
});
