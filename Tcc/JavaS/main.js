document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.querySelector('.slider-container');
    const slidesContainer = document.querySelector('.slides-container');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.slide-btn-prev');
    const nextBtn = document.querySelector('.slide-btn-next');
    const dots = document.querySelectorAll('.dot');
    
    let currentIndex = 0;
    const slideCount = slides.length;
    let autoSlideInterval;
    const autoSlideDelay = 5000; // 5 segundos
    
    // Inicializa o slider
    function initSlider() {
        updateSlider();
        startAutoSlide();
        
        // Pausa o auto slide quando o mouse está sobre o slider
        sliderContainer.addEventListener('mouseenter', pauseAutoSlide);
        sliderContainer.addEventListener('mouseleave', startAutoSlide);
    }
    
    // Atualiza a posição do slider
    function updateSlider() {
        slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Atualiza classes ativas
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentIndex);
        });
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Vai para o slide anterior
    function goToPrevSlide() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slideCount - 1;
        updateSlider();
        resetAutoSlide();
    }
    
    // Vai para o próximo slide
    function goToNextSlide() {
        currentIndex = (currentIndex < slideCount - 1) ? currentIndex + 1 : 0;
        updateSlider();
        resetAutoSlide();
    }
    
    // Vai para um slide específico
    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
        resetAutoSlide();
    }
    
    // Inicia o slide automático
    function startAutoSlide() {
        if (!autoSlideInterval) {
            autoSlideInterval = setInterval(goToNextSlide, autoSlideDelay);
        }
    }
    
    // Pausa o slide automático
    function pauseAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
    }
    
    // Reinicia o slide automático
    function resetAutoSlide() {
        pauseAutoSlide();
        startAutoSlide();
    }
    
    // Event listeners
    prevBtn.addEventListener('click', goToPrevSlide);
    nextBtn.addEventListener('click', goToNextSlide);
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });
    
    // Navegação por teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            goToPrevSlide();
        } else if (e.key === 'ArrowRight') {
            goToNextSlide();
        }
    });
    
    // Inicializa o slider
    initSlider();
});