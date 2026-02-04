(function () {
    // List of images in assets/images (relative to project root)
    const IMAGES = [
        'All-Might.webp',
        'Ballerina.webp',
        'Batman.webp',
        'Daredevil.webp',
        'Ellie-TLOU.webp',
        'Fruits-Basket.webp',
        'Godzilla.webp',
        'Goku-KSI.webp',
        'Gwen-Stacy.webp',
        'Hayao-Miyazaki.webp',
        'Ichigo.webp',
        'Lois-Superman.webp',
        'Luffy.webp',
        'Naruto.webp',
        'Ryu.webp',
        'Shonen-Jump.webp',
        'Simba3.webp',
        'Spider-Man-2.webp',
        'Spider-Man.webp',
        'Tessa-Thompson.webp',
        'The-Flash.webp',
        'Tokyo-Revengers.webp',
        'Wolverine.webp',
        'Wonder-Woman.webp',
        'Zendaya.webp'
    ];

    const AUTOPLAY_DELAY = 5000;
    let autoplayInterval = null;
    let currentIndex = 0;

    // Get the base URL for the project (handles both local and GitHub Pages)
    const baseURL = window.location.pathname.includes('/Milestone-Project-1--art-portfolio') 
        ? '/Milestone-Project-1--art-portfolio' 
        : '';

    const slideContainer = document.querySelector('.slide-container');
    const thumbsContainer = document.querySelector('.thumbnails');
    const prevBtn = document.querySelector('.nav-prev');
    const nextBtn = document.querySelector('.nav-next');

    function makeAlt(filename) {
        return filename.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ');
    }

    function buildGallery() {
        if (!slideContainer || !thumbsContainer) return;

        IMAGES.forEach((name, i) => {
            const slide = document.createElement('div');
            slide.className = 'slide-content';

            const img = document.createElement('img');
            img.src = `${baseURL}/assets/images/${name}`;
            img.alt = makeAlt(name);
            img.title = makeAlt(name);

            slide.appendChild(img);
            slideContainer.appendChild(slide);

            const thumb = document.createElement('button');
            thumb.className = 'thumbnail';
            thumb.setAttribute('aria-label', `View ${makeAlt(name)}`);
            thumb.dataset.index = i;

            const timg = document.createElement('img');
            timg.src = `${baseURL}/assets/images/${name}`;
            timg.alt = makeAlt(name) + ' thumbnail';
            timg.title = makeAlt(name);
            thumb.appendChild(timg);

            thumbsContainer.appendChild(thumb);
        });
    }

    function updateActive() {
        const slides = slideContainer.querySelectorAll('.slide-content');
        const thumbs = thumbsContainer.querySelectorAll('.thumbnail');

        slides.forEach((s, idx) => s.classList.toggle('active', idx === currentIndex));
        thumbs.forEach((t, idx) => t.classList.toggle('active', idx === currentIndex));
    }

    function setSlide(index) {
        const total = IMAGES.length;
        currentIndex = ((index % total) + total) % total;
        updateActive();
    }

    function nextSlide() {
        setSlide(currentIndex + 1);
    }

    function prevSlide() {
        setSlide(currentIndex - 1);
    }

    function startAutoplay() {
        stopAutoplay();
        autoplayInterval = setInterval(nextSlide, AUTOPLAY_DELAY);
    }

    function stopAutoplay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
            autoplayInterval = null;
        }
    }

    function addListeners() {
        // Thumbnails click
        thumbsContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('.thumbnail');
            if (!btn) return;
            stopAutoplay();
            setSlide(Number(btn.dataset.index));
            startAutoplay();
        });

        // Prev/Next
        prevBtn && prevBtn.addEventListener('click', () => { stopAutoplay(); prevSlide(); startAutoplay(); });
        nextBtn && nextBtn.addEventListener('click', () => { stopAutoplay(); nextSlide(); startAutoplay(); });

        // Keyboard
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') { stopAutoplay(); prevSlide(); startAutoplay(); }
            if (e.key === 'ArrowRight') { stopAutoplay(); nextSlide(); startAutoplay(); }
        });

        // Hover pause
        const slideshow = document.querySelector('.slideshow');
        if (slideshow) {
            slideshow.addEventListener('mouseenter', stopAutoplay);
            slideshow.addEventListener('mouseleave', startAutoplay);
        }

        // Touch swipe
        let touchStartX = 0;
        let touchEndX = 0;
        if (slideshow) {
            slideshow.addEventListener('touchstart', (e) => { stopAutoplay(); touchStartX = e.changedTouches[0].screenX; }, { passive: true });
            slideshow.addEventListener('touchend', (e) => { touchEndX = e.changedTouches[0].screenX; handleSwipe(); startAutoplay(); }, { passive: true });
        }

        function handleSwipe() {
            const diff = touchStartX - touchEndX;
            const threshold = 40;
            if (Math.abs(diff) > threshold) {
                if (diff > 0) nextSlide(); else prevSlide();
            }
        }
    }

    // Init
    function init() {
        buildGallery();
        updateActive();
        addListeners();
        startAutoplay();
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();
