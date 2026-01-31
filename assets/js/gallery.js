(function() {
    const slideRadios = document.querySelectorAll('input[name="slide"]');
    const totalSlides = slideRadios.length;
    let currentSlideIndex = 0;
    let autoplayInterval = null;
    const AUTOPLAY_DELAY = 5000; // 5 seconds

    // Get current slide index
    function getCurrentSlideIndex() {
        for (let i = 0; i < slideRadios.length; i++) {
            if (slideRadios[i].checked) {
                return i;
            }
        }
        return 0;
    }

    // Set slide by index
    function setSlide(index) {
        const normalizedIndex = ((index % totalSlides) + totalSlides) % totalSlides;
        slideRadios[normalizedIndex].checked = true;
        currentSlideIndex = normalizedIndex;
        console.log('Slide changed to:', normalizedIndex + 1);
    }

    // Next slide
    function nextSlide() {
        setSlide(currentSlideIndex + 1);
    }

    // Previous slide
    function prevSlide() {
        setSlide(currentSlideIndex - 1);
    }

    // Start autoplay
    function startAutoplay() {
        autoplayInterval = setInterval(nextSlide, AUTOPLAY_DELAY);
    }

    // Stop autoplay
    function stopAutoplay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
            autoplayInterval = null;
        }
    }

    // Initialize
    function init() {
        currentSlideIndex = getCurrentSlideIndex();
        startAutoplay();

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            stopAutoplay();
            if (e.key === 'ArrowLeft') {
                prevSlide();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
            }
            startAutoplay();
        });

        // Pause autoplay on hover and add touch/swipe support (guarded)
        const slideshow = document.querySelector('.slideshow');
        let touchStartX = 0;
        let touchEndX = 0;

        if (slideshow) {
            slideshow.addEventListener('mouseenter', stopAutoplay);
            slideshow.addEventListener('mouseleave', startAutoplay);

            // Touch/swipe support
            slideshow.addEventListener('touchstart', (e) => {
                stopAutoplay();
                touchStartX = e.changedTouches[0].screenX;
            }, false);

            slideshow.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
                startAutoplay();
            }, false);
        }

        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    nextSlide(); // Swiped left
                } else {
                    prevSlide(); // Swiped right
                }
            }
        }
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
